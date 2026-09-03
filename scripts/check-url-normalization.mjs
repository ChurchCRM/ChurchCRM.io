#!/usr/bin/env node
/**
 * check-url-normalization.mjs
 *
 * Automated check for issue #54 (Normalize public URLs and redirects).
 * Runs against a built Hugo site (the `public/` directory produced by
 * `hugo --minify`) and asserts:
 *
 *   1. No <link rel="canonical"> href ends in index.html.
 *   2. No hreflang <link rel="alternate" hreflang="..."> href ends in
 *      index.html (regression check for the head.html fix).
 *   3. sitemap.xml has no <loc> entry ending in index.html.
 *   4. Every `new_url` listed in content/redirect-mapping.csv with
 *      status "implemented" resolves to a real built page, and every
 *      corresponding `old_url` resolves to a generated Hugo alias
 *      (redirect) page that points at the new_url.
 *
 * Usage:
 *   hugo --minify
 *   node scripts/check-url-normalization.mjs
 *
 * Exits non-zero (and prints failures) if any check fails.
 *
 * This script has no npm dependencies (Node built-ins only) so it can run
 * on a bare `ubuntu-latest` GitHub Actions runner without an extra
 * `actions/setup-node` + `npm install` step.
 */

import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, "public");
const MAPPING_CSV = path.join(ROOT, "content", "redirect-mapping.csv");

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

function readAllHtmlFiles(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stats = statSync(full);
    if (stats.isDirectory()) {
      results.push(...readAllHtmlFiles(full));
    } else if (entry.endsWith(".html")) {
      results.push(full);
    }
  }
  return results;
}

function parseCsv(content) {
  // Minimal CSV parser supporting quoted fields with embedded commas/quotes,
  // sufficient for content/redirect-mapping.csv's own format. Not a general
  // purpose CSV library.
  const rows = [];
  let field = "";
  let row = [];
  let inQuotes = false;
  for (let i = 0; i < content.length; i += 1) {
    const c = content[i];
    if (inQuotes) {
      if (c === '"') {
        if (content[i + 1] === '"') {
          field += '"';
          i += 1;
        } else {
          inQuotes = false;
        }
      } else {
        field += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && content[i + 1] === "\n") i += 1;
      row.push(field);
      field = "";
      if (row.length > 1 || row[0] !== "") rows.push(row);
      row = [];
    } else {
      field += c;
    }
  }
  if (field !== "" || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

if (!existsSync(PUBLIC_DIR)) {
  console.error(
    `ERROR: ${PUBLIC_DIR} does not exist. Run \`hugo --minify\` before this script.`,
  );
  process.exit(2);
}

const htmlFiles = readAllHtmlFiles(PUBLIC_DIR);

// `hugo --minify` drops attribute quotes when the value has no
// spaces/special characters (e.g. `<link rel=canonical href=https://...>`),
// so attribute extraction must tolerate quoted and unquoted values alike.
const linkTagRegex = /<link\b[^>]*>/g;
function getAttr(tag, name) {
  const re = new RegExp(`${name}=(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, "i");
  const m = re.exec(tag);
  if (!m) return null;
  return m[1] ?? m[2] ?? m[3] ?? null;
}

// --- Check 1: canonical hrefs never end in index.html ---
let canonicalChecked = 0;
for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  let match;
  while ((match = linkTagRegex.exec(html)) !== null) {
    const tag = match[0];
    if (getAttr(tag, "rel") !== "canonical") continue;
    const href = getAttr(tag, "href");
    if (href === null) continue;
    canonicalChecked += 1;
    if (href.endsWith("index.html")) {
      fail(
        `canonical href ends in index.html in ${path.relative(ROOT, file)}: ${href}`,
      );
    }
  }
}
if (canonicalChecked === 0) {
  fail("no <link rel=\"canonical\"> tags found anywhere in public/ — check likely broken");
} else {
  pass(`${canonicalChecked} canonical hrefs checked, none end in index.html`);
}

// --- Check 2: hreflang alternate hrefs never end in index.html ---
let hreflangChecked = 0;
for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  let match;
  while ((match = linkTagRegex.exec(html)) !== null) {
    const tag = match[0];
    if (getAttr(tag, "rel") !== "alternate") continue;
    if (getAttr(tag, "hreflang") === null) continue;
    const href = getAttr(tag, "href");
    if (href === null) continue;
    hreflangChecked += 1;
    if (href.endsWith("index.html")) {
      fail(
        `hreflang alternate href ends in index.html in ${path.relative(ROOT, file)}: ${href}`,
      );
    }
  }
}
if (hreflangChecked === 0) {
  fail("no hreflang <link rel=\"alternate\"> tags found anywhere in public/ — check likely broken");
} else {
  pass(`${hreflangChecked} hreflang alternate hrefs checked, none end in index.html`);
}

// --- Check 3: sitemap.xml <loc> entries never end in index.html ---
const sitemapPath = path.join(PUBLIC_DIR, "sitemap.xml");
if (!existsSync(sitemapPath)) {
  fail(`${path.relative(ROOT, sitemapPath)} not found`);
} else {
  const sitemap = readFileSync(sitemapPath, "utf8");
  const locRegex = /<loc>([^<]+)<\/loc>/g;
  let locChecked = 0;
  let match;
  while ((match = locRegex.exec(sitemap)) !== null) {
    locChecked += 1;
    if (match[1].endsWith("index.html")) {
      fail(`sitemap.xml <loc> ends in index.html: ${match[1]}`);
    }
  }
  if (locChecked === 0) {
    fail("sitemap.xml has no <loc> entries — check likely broken");
  } else {
    pass(`${locChecked} sitemap.xml <loc> entries checked, none end in index.html`);
  }
}

// --- Check 4: redirect-mapping.csv new_url/old_url resolve correctly ---
if (!existsSync(MAPPING_CSV)) {
  fail(`${path.relative(ROOT, MAPPING_CSV)} not found`);
} else {
  const rows = parseCsv(readFileSync(MAPPING_CSV, "utf8"));
  const header = rows[0];
  const oldIdx = header.indexOf("old_url");
  const newIdx = header.indexOf("new_url");
  const statusIdx = header.indexOf("status");
  if (oldIdx === -1 || newIdx === -1 || statusIdx === -1) {
    fail(
      "redirect-mapping.csv header missing one of: old_url, new_url, status",
    );
  } else {
    const dataRows = rows.slice(1).filter((r) => r.length >= header.length);
    let implementedChecked = 0;
    for (const r of dataRows) {
      if (r[statusIdx] !== "implemented") continue;
      implementedChecked += 1;
      const oldUrl = r[oldIdx];
      const newUrl = r[newIdx];

      const newPath = urlToPublicPath(newUrl);
      if (!existsSync(newPath)) {
        fail(`new_url does not resolve to a built file: ${newUrl} (expected ${path.relative(ROOT, newPath)})`);
      }

      const oldPath = urlToPublicPath(oldUrl);
      if (!existsSync(oldPath)) {
        fail(`old_url does not resolve to a generated alias page: ${oldUrl} (expected ${path.relative(ROOT, oldPath)})`);
      } else {
        const html = readFileSync(oldPath, "utf8");
        const newUrlPath = new URL(newUrl).pathname;
        if (!html.includes(newUrlPath)) {
          fail(
            `alias page for old_url ${oldUrl} does not appear to point at new_url ${newUrl} (looked for "${newUrlPath}" in ${path.relative(ROOT, oldPath)})`,
          );
        }
      }
    }
    if (implementedChecked === 0) {
      fail("no rows with status=implemented found in redirect-mapping.csv");
    } else {
      pass(`${implementedChecked} implemented redirect-mapping.csv rows checked (old_url alias + new_url target)`);
    }
  }
}

function urlToPublicPath(urlString) {
  const u = new URL(urlString);
  let p = u.pathname;
  if (p.endsWith("/")) p += "index.html";
  return path.join(PUBLIC_DIR, p);
}

console.log("");
console.log(`${checks} check group(s) passed, ${failures} failure(s).`);
if (failures > 0) {
  process.exit(1);
}
