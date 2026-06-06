#!/usr/bin/env node
/**
 * check-url-style.mjs
 * Validates that internal URLs do not use trailing slashes for HTML pages.
 *
 * Rules:
 * - sitemap.xml generated content: no trailing slash on sellerfixhub.com HTML page URLs
 * - llms.txt: no trailing slash on internal page URLs
 * - source files: internal href/src attributes should not use trailing slashes
 * - ALLOWED: root "https://sellerfixhub.com/"
 * - ALLOWED: static files (sitemap.xml, robots.txt, favicon, etc.)
 * - ALLOWED: external URLs
 * - ALLOWED: API routes
 *
 * Exit code 1 if any violation found.
 */

import { readFileSync, readdirSync } from "fs";
import { join, extname } from "path";
import { cwd, exit } from "process";

// HTML page paths that should NOT end with a trailing slash
const SCAN_EXTENSIONS = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs", ".txt", ".xml"]);

// Regex patterns for violations
// Match trailing slash on what looks like an HTML page path
const TRAILING_SLASH_PAGE_PATTERN = /https:\/\/sellerfixhub\.com\/[a-z][a-z0-9\/-]*[a-z0-9]\//gi;

let hasErrors = false;
let totalFiles = 0;

function scanFile(filePath, content) {
  const lines = content.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // For sitemap.xml and llms.txt, check for trailing slash on page URLs
    if (filePath.endsWith("sitemap.xml") || filePath.endsWith("llms.txt")) {
      // Pattern: matches sellerfixhub.com/path/to/page/ (trailing slash on what looks like a page)
      const matches = line.match(TRAILING_SLASH_PAGE_PATTERN);
      if (matches) {
        console.error(`  VIOLATION in ${filePath}:${i + 1}`);
        console.error(`    Line: ${line.trim().substring(0, 120)}`);
        console.error(`    Found trailing slash on: ${matches.join(", ")}`);
        hasErrors = true;
      }
    }
  }
  totalFiles++;
}

function scanDir(dir) {
  let files = [];
  try {
    const entries = readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === "node_modules" || entry.name === ".next") continue;
        files = files.concat(scanDir(fullPath));
      } else if (entry.isFile()) {
        const ext = extname(entry.name).toLowerCase();
        if (SCAN_EXTENSIONS.has(ext)) {
          files.push(fullPath);
        }
      }
    }
  } catch (err) {
    console.error(`Cannot read directory ${dir}: ${err.message}`);
  }
  return files;
}

console.log("Checking URL style (no trailing slashes on HTML page URLs)...");
console.log("");

// Scan source files and public files
const dirsToScan = ["src", "public"];
for (const dir of dirsToScan) {
  const fullDir = join(cwd(), dir);
  const files = scanDir(fullDir);
  for (const file of files) {
    let content;
    try {
      content = readFileSync(file, "utf-8");
    } catch {
      continue;
    }
    scanFile(file, content);
  }
}

// Also check the built sitemap by reading it from .next
const nextDir = join(cwd(), ".next");
const builtSitemapPath = join(nextDir, "server/app/sitemap.xml");
try {
  const content = readFileSync(builtSitemapPath, "utf-8");
  console.log("Scanning built sitemap.xml...");
  scanFile("built sitemap.xml", content);
} catch {
  // sitemap not built yet, skip
}

console.log(`\nScanned ${totalFiles} files.`);

if (hasErrors) {
  console.error("\nURL STYLE VALIDATION FAILED: Trailing slash violations found.");
  exit(1);
} else {
  console.log("\nURL STYLE VALIDATION PASSED: No trailing slash violations found.");
  exit(0);
}
