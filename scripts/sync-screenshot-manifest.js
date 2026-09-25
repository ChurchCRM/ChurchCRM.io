#!/usr/bin/env node
'use strict';

/**
 * Syncs the screenshot manifest and metadata from the ChurchCRM/CRM repository
 * to the website's data directory. This is called during the website build
 * to ensure screenshots stay in sync with the latest CRM marketing assets.
 *
 * Usage: node scripts/sync-screenshot-manifest.js <path-to-crm-repo>
 * If no path is provided, assumes ../CRM relative to this script.
 */

const fs = require('node:fs');
const path = require('node:path');

const crmPath = process.argv[2] || path.resolve(__dirname, '../../CRM');
const dataDir = path.join(__dirname, '..', 'data');
const crmManifestPath = path.join(crmPath, 'playwright', 'artifacts', 'manifest.json');
const crmMetadataPath = path.join(crmPath, 'playwright', 'screenshot-metadata.json');
const websiteManifestPath = path.join(dataDir, 'manifest.json');
const websiteMetadataPath = path.join(dataDir, 'screenshot-metadata.json');

function copyFile(src, dst) {
  if (!fs.existsSync(src)) {
    throw new Error(`Source file not found: ${src}`);
  }
  fs.mkdirSync(path.dirname(dst), { recursive: true });
  fs.copyFileSync(src, dst);
  console.log(`Synced ${path.relative(process.cwd(), src)} → ${path.relative(process.cwd(), dst)}`);
}

function main() {
  try {
    copyFile(crmManifestPath, websiteManifestPath);
    copyFile(crmMetadataPath, websiteMetadataPath);
    console.log('Screenshot manifest synced successfully');
  } catch (err) {
    console.error(`Error syncing manifest: ${err.message}`);
    process.exit(1);
  }
}

main();
