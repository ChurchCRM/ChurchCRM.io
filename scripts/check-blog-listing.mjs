#!/usr/bin/env node
/**
 * check-blog-listing.mjs
 *
 * Runs against a built Hugo site (the `public/` directory produced by
 * `hugo --minify`) and asserts that every published blog post is both
 * rendered and linked from its language's blog index (/blog/ or
 * /<lang>/blog/).
 *
 * Hugo silently skips posts that are `draft: true`, dated in the future,
 * or past their `expiryDate` -- the build succeeds, the post just isn't
 * there. Because deploys only run on push to master, a future-dated post
 * stays missing until the next push after that date. This check turns
 * those cases into a visible failure instead of a missing post.
 *
 * Usage:
 *   hugo --minify
 *   node scripts/check-blog-listing.mjs
 *
 * Exits non-zero (and prints failures) if any check fails. Node built-ins
 * only, matching the other scripts/check-*.mjs files.
 */

import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const contentDir = path.join(repoRoot, "content");
const publicDir = path.join(repoRoot, "public");
const defaultLanguage = "en";

let failures = 0;
let checks = 0;

function fail(message) {
  failures += 1;
  console.error(`FAIL: ${message}`);
}

function pass(message) {
  checks += 1;
  console.log(`OK:   ${message}`);
}

function frontMatter(file) {
  const match = readFileSync(file, "utf8").match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const fields = {};
  if (!match) return fields;
  for (const line of match[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z_]+):\s*(.*?)\s*$/);
    if (kv) fields[kv[1]] = kv[2].replace(/^["']|["']$/g, "");
  }
  return fields;
}

if (!existsSync(publicDir)) {
  console.error("FAIL: public/ not found -- run `hugo --minify` first.");
  process.exit(1);
}

const now = new Date();

for (const lang of readdirSync(contentDir)) {
  const blogDir = path.join(contentDir, lang, "blog");
  if (!existsSync(blogDir)) continue;

  const prefix = lang === defaultLanguage ? "" : `/${lang}`;
  const indexFile = path.join(publicDir, prefix, "blog", "index.html");
  const indexHtml = existsSync(indexFile) ? readFileSync(indexFile, "utf8") : "";

  for (const entry of readdirSync(blogDir)) {
    if (!entry.endsWith(".md") || entry.startsWith("_")) continue;
    const fm = frontMatter(path.join(blogDir, entry));
    const label = `content/${lang}/blog/${entry}`;

    if (fm.draft === "true") {
      console.log(`SKIP: ${label} is draft: true`);
      continue;
    }

    const date = new Date(fm.publishDate || fm.date);
    if (Number.isNaN(date.getTime())) {
      fail(`${label} has no parseable date/publishDate`);
      continue;
    }
    if (date > now) {
      fail(
        `${label} is dated ${date.toISOString()} (in the future), so Hugo will not publish it ` +
          "and nothing rebuilds the site when that date arrives. Use today's date or earlier."
      );
      continue;
    }
    if (fm.expiryDate && new Date(fm.expiryDate) <= now) {
      fail(`${label} has expired (expiryDate ${fm.expiryDate}) and is no longer published`);
      continue;
    }

    const permalink = `${prefix}/blog/${entry.replace(/\.md$/, "")}.html`;
    if (!existsSync(path.join(publicDir, permalink))) {
      fail(`${label} was not rendered at ${permalink}`);
    } else if (!indexHtml.includes(permalink)) {
      fail(`${label} is not linked from ${prefix}/blog/`);
    } else {
      pass(`${permalink} is rendered and listed on ${prefix}/blog/`);
    }
  }
}

console.log(`\n${checks} checks passed, ${failures} failed.`);
process.exit(failures > 0 ? 1 : 0);
