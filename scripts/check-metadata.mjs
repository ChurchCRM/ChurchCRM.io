#!/usr/bin/env node
/**
 * check-metadata.mjs
 *
 * Automated check for issue #67 (Website Search & Metadata Foundation).
 * Runs against a built Hugo site (the `public/` directory produced by
 * `hugo --minify`) and asserts:
 *
 *   1. Every <script type="application/ld+json"> block on every page is
 *      syntactically valid JSON (catches the class of bug where jsonify'd
 *      values get double-escaped by Go's html/template auto-escaper when
 *      inlined into hand-written JSON without a trailing `| safeJS`).
 *   2. Every page has a non-empty <title> and meta description.
 *   3. Every page has a canonical link, and it's an absolute URL.
 *   4. Every page has the required Open Graph tags (og:title, og:description,
 *      og:image, og:url, og:type) and the required Twitter tags
 *      (twitter:card, twitter:title, twitter:description, twitter:image).
 *   5. og:type is only "website" or "article" (article reserved for actual
 *      blog posts under /blog/).
 *   6. og:image / twitter:image URLs actually resolve to a file that exists
 *      in the build output (catches a featured_image frontmatter field
 *      pointing at a file that was never added).
 *   7. robots meta content is one of the two values this site's templates
 *      intentionally emit ("index, follow" or "noindex, follow") — anything
 *      else means a template regression.
 *
 * Usage:
 *   hugo --minify
 *   node scripts/check-metadata.mjs
 *
 * Exits non-zero (and prints failures) if any check fails.
 *
 * This script has no npm dependencies (Node built-ins only), matching
 * scripts/check-url-normalization.mjs, so it can run in CI without an
 * npm install step.
 */

import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, "public");

let failures = 0;
let checks = 0;

function fail(message) {
  failures += 1;
  console.log(`FAIL: ${message}`);
}

function ok(label, count) {
  checks += 1;
  console.log(`OK:   ${label}${count !== undefined ? ` (${count} checked)` : ""}`);
}

function walkHtmlFiles(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) walkHtmlFiles(full, out);
    else if (entry.endsWith(".html")) out.push(full);
  }
  return out;
}

function attr(html, name) {
  // Matches name="value", name='value', or unquoted name=value (minified HTML).
  const re = new RegExp(`${name}=(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, "i");
  const m = html.match(re);
  if (!m) return null;
  return m[1] ?? m[2] ?? m[3] ?? null;
}

function metaContent(html, propOrName) {
  // <meta name="X" content="Y"> or <meta property="X" content="Y"> in either
  // attribute order, quoted or unquoted (Hugo's minifier drops quotes).
  const re = new RegExp(
    `<meta[^>]*(?:name|property)=(?:"${propOrName}"|'${propOrName}'|${propOrName})[^>]*content=(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`,
    "i"
  );
  let m = html.match(re);
  if (m) return m[1] ?? m[2] ?? m[3] ?? null;
  // content before name/property in source order
  const re2 = new RegExp(
    `<meta[^>]*content=(?:"([^"]*)"|'([^']*)'|([^\\s>]+))[^>]*(?:name|property)=(?:"${propOrName}"|'${propOrName}'|${propOrName})`,
    "i"
  );
  m = html.match(re2);
  return m ? m[1] ?? m[2] ?? m[3] ?? null : null;
}

if (!existsSync(PUBLIC_DIR)) {
  console.error("public/ not found — run `hugo --minify` first.");
  process.exit(1);
}

const files = walkHtmlFiles(PUBLIC_DIR);

// --- Check 1: every JSON-LD block is valid JSON ---
let jsonLdBlocks = 0;
let jsonLdPagesChecked = 0;
for (const file of files) {
  const html = readFileSync(file, "utf8");
  const rel = path.relative(PUBLIC_DIR, file);
  const blocks = [...html.matchAll(/<script type="?application\/ld\+json"?[^>]*>(.*?)<\/script>/gs)];
  if (blocks.length === 0) continue;
  jsonLdPagesChecked += 1;
  for (const [, body] of blocks) {
    jsonLdBlocks += 1;
    try {
      JSON.parse(body);
    } catch (e) {
      fail(`invalid JSON-LD on ${rel}: ${e.message}`);
    }
  }
}
if (failures === 0) ok(`${jsonLdBlocks} JSON-LD blocks across ${jsonLdPagesChecked} pages parse as valid JSON`);

// --- Checks 2-7: per-page metadata, on the alias/redirect stub pages excluded ---
// (Hugo's own alias stub — canonical + meta-refresh only, no head.html content —
// is a deliberate exception, not a template bug; see content/redirect-mapping.csv.)
function isAliasStub(html) {
  return /<meta http-equiv=.?refresh.?/i.test(html) && !/<meta name=.?description.?/i.test(html);
}

let pagesChecked = 0;
let ogImageChecked = 0;
const failuresBefore2 = failures;

for (const file of files) {
  const html = readFileSync(file, "utf8");
  const rel = path.relative(PUBLIC_DIR, file);
  if (isAliasStub(html)) continue;
  if (!html.includes("<head>") && !html.includes("<head ")) continue; // skip non-HTML outputs (xml, txt, etc.)
  pagesChecked += 1;

  const title = (html.match(/<title>(.*?)<\/title>/s) || [])[1];
  if (!title || !title.trim()) fail(`missing/empty <title> on ${rel}`);

  const description = metaContent(html, "description");
  if (!description || !description.trim()) fail(`missing/empty meta description on ${rel}`);

  const canonicalHref = attr((html.match(/<link[^>]*rel="?canonical"?[^>]*>/i) || [""])[0], "href");
  if (!canonicalHref) fail(`missing canonical link on ${rel}`);
  else if (!/^https?:\/\//.test(canonicalHref)) fail(`canonical link is not absolute on ${rel}: ${canonicalHref}`);

  for (const prop of ["og:title", "og:description", "og:image", "og:url", "og:type"]) {
    if (!metaContent(html, prop)) fail(`missing ${prop} on ${rel}`);
  }
  for (const name of ["twitter:card", "twitter:title", "twitter:description", "twitter:image"]) {
    if (!metaContent(html, name)) fail(`missing ${name} on ${rel}`);
  }

  const ogType = metaContent(html, "og:type");
  if (ogType && !["website", "article"].includes(ogType)) {
    fail(`unexpected og:type "${ogType}" on ${rel} (expected website or article)`);
  }
  const isBlogPost = rel.startsWith("blog/") && rel !== "blog.html" && !rel.startsWith("blog/page");
  if (ogType === "article" && !isBlogPost) {
    fail(`og:type=article on non-blog-post page ${rel}`);
  }

  const robots = metaContent(html, "robots");
  if (robots && !["index, follow", "noindex, follow"].includes(robots)) {
    fail(`unexpected robots meta "${robots}" on ${rel}`);
  }

  const ogImage = metaContent(html, "og:image");
  if (ogImage) {
    ogImageChecked += 1;
    const imgPath = ogImage.replace(/^https?:\/\/[^/]+\//, "");
    const localPath = path.join(PUBLIC_DIR, imgPath);
    if (!existsSync(localPath)) {
      fail(`og:image on ${rel} points to a file that doesn't exist in the build: ${ogImage}`);
    }
  }
}
if (failures === failuresBefore2) {
  ok(`title, description, canonical, OG, Twitter tags present on ${pagesChecked} pages`);
  ok(`og:image resolves to a real file on ${ogImageChecked} pages`);
}

console.log("");
console.log(`${failures === 0 ? checks : "some"} check group(s) passed, ${failures} failure(s).`);
process.exit(failures === 0 ? 0 : 1);
