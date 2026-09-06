#!/usr/bin/env node
/**
 * Extracts the classify() function from static/js/conversion-tracking.js
 * (without a browser) and runs it against every href found in the built
 * public/ site, to verify the click-classification rules match real links
 * and don't misfire on unrelated ones. Temporary verification script for
 * issue #68 — not part of the CI pipeline.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const SCRIPT_PATH = path.join(ROOT, "static/js/conversion-tracking.js");
const PUBLIC_DIR = path.join(ROOT, "public");

const scriptSrc = readFileSync(SCRIPT_PATH, "utf8");
const classifySrc = scriptSrc.match(/function classify\(href\) \{[\s\S]*?\n  \}/)[0];
// eslint-disable-next-line no-new-func
const classify = new Function("href", classifySrc.replace(/^function classify\(href\) \{/, "").replace(/\}$/, ""));

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) walk(full, out);
    else if (entry.endsWith(".html")) out.push(full);
  }
  return out;
}

const files = walk(PUBLIC_DIR);
const hrefRe = /href=["']?([^"'\s>]+)/g;
const counts = {};
const samples = {};
const unmatched = new Set();

for (const file of files) {
  const html = readFileSync(file, "utf8");
  let m;
  while ((m = hrefRe.exec(html))) {
    const href = m[1];
    const result = classify(href);
    if (result) {
      counts[result.event] = (counts[result.event] || 0) + 1;
      if (!samples[result.event]) samples[result.event] = new Set();
      samples[result.event].add(href);
    }
  }
}

console.log("Event counts across all built pages:");
for (const [event, count] of Object.entries(counts).sort()) {
  console.log(`  ${event}: ${count} matches`);
  console.log(`    sample hrefs: ${[...samples[event]].slice(0, 3).join(", ")}`);
}

// Sanity checks: known links that MUST classify, and known links that must NOT.
const mustMatch = [
  ["/demo.html", "demo_click"],
  ["/es/demo.html", "demo_click"],
  ["/install.html", "install_click"],
  ["/de/install.html", "install_click"],
  ["/church-management-software/", "learn_click"],
  ["/#features", "learn_click"],
  ["https://docs.churchcrm.io", "docs_click"],
  ["https://docs.churchcrm.io/installation/softaculous", "docs_click"],
  ["https://github.com/ChurchCRM/CRM", "github_click"],
  ["https://github.com/ChurchCRM/CRM/issues", "github_click"],
  ["https://github.com/ChurchCRM/CRM/discussions", "github_click"],
  ["https://github.com/ChurchCRM/CRM/releases/latest", "github_release_click"],
];
const mustNotMatch = [
  "https://discord.gg/tuWyFzj3Nj",
  "https://github.com/ChurchCRM/ChurchCRM.io",
  "/about.html",
  "https://www.facebook.com/getChurchCRM",
  "mailto:info@churchcrm.io",
];

let failures = 0;
for (const [href, expected] of mustMatch) {
  const result = classify(href);
  if (!result || result.event !== expected) {
    console.log(`FAIL: ${href} expected ${expected}, got ${result ? result.event : "no match"}`);
    failures++;
  }
}
for (const href of mustNotMatch) {
  const result = classify(href);
  if (result) {
    console.log(`FAIL: ${href} should NOT match, but got ${result.event}`);
    failures++;
  }
}

console.log(failures === 0 ? "\nAll classification sanity checks passed." : `\n${failures} sanity check failure(s).`);
process.exit(failures === 0 ? 0 : 1);
