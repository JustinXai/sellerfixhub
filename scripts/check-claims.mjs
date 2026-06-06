#!/usr/bin/env node
/**
 * check-claims.mjs
 * Scans src and public directories for forbidden claims.
 * Exit code 1 if any forbidden word is found.
 */

import { readFileSync, readdirSync } from "fs";
import { join, extname } from "path";
import { cwd } from "process";

const FORBIDDEN_CLAIMS = [
  "guaranteed approval",
  "100% approval",
  "guaranteed reinstatement",
  "official Google partner",
  "official TikTok partner",
  "official Google",
  "official TikTok",
  "internal escalation guaranteed",
  "bypass platform rules",
  "bypass suspension",
  "fake invoice",
  "fake documents",
  "create a new account to bypass suspension",
];

const SCAN_EXTENSIONS = new Set([".ts", ".tsx", ".js", ".jsx", ".md", ".txt"]);
const SCAN_DIRS = ["src", "public"];

let hasErrors = false;
let totalFiles = 0;

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

function scanFile(filePath) {
  let content;
  try {
    content = readFileSync(filePath, "utf-8");
  } catch (err) {
    console.error(`Cannot read file ${filePath}: ${err.message}`);
    return;
  }

  for (const claim of FORBIDDEN_CLAIMS) {
    const regex = new RegExp(claim.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
    const lineNumbered = content.split("\n");
    for (let i = 0; i < lineNumbered.length; i++) {
      const line = lineNumbered[i];
      if (regex.test(line)) {
        const context = line.trim().substring(0, 100);
        console.error(`FORBIDDEN CLAIM found in ${filePath}:${i + 1}`);
        console.error(`  Forbidden: "${claim}"`);
        console.error(`  Context: ${context}`);
        hasErrors = true;
        regex.lastIndex = 0; // reset regex state
      }
    }
  }
  totalFiles++;
}

console.log("Scanning for forbidden claims...");
console.log(`Forbidden terms: ${FORBIDDEN_CLAIMS.map((c) => `"${c}"`).join(", ")}`);
console.log("");

for (const dir of SCAN_DIRS) {
  const fullDir = join(cwd(), dir);
  const files = scanDir(fullDir);
  for (const file of files) {
    scanFile(file);
  }
}

console.log(`\nScanned ${totalFiles} files.`);

if (hasErrors) {
  console.error("\nVALIDATION FAILED: Forbidden claims detected.");
  process.exit(1);
} else {
  console.log("\nVALIDATION PASSED: No forbidden claims found.");
  process.exit(0);
}
