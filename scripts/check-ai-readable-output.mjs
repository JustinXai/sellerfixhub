#!/usr/bin/env node
/**
 * check-ai-readable-output.mjs
 * Validates built output and source contain no AI-readable list noise.
 * Checks: source (.tsx, .ts) and built .next server files
 * Exit code 1 if any violation found.
 *
 * Must detect: "* -", "*-", literal bullets in spans, Tiktok (wrong casing).
 * Must NOT flag: "TikTok Shop" (correct casing).
 */

import { existsSync, readdirSync, readFileSync } from "fs";
import { join } from "path";
import { cwd, exit } from "process";

const BASE_DIR = cwd();
let hasErrors = false;

function scanDir(dir, extensions) {
  const results = [];
  try {
    const entries = readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      if (entry.isDirectory() && !entry.name.startsWith(".") && entry.name !== "node_modules") {
        results.push(...scanDir(fullPath, extensions));
      } else if (entry.isFile() && extensions.some((ext) => entry.name.endsWith(ext))) {
        results.push(fullPath);
      }
    }
  } catch {}
  return results;
}

function stripComments(code) {
  return code.replace(/\/\/.*/g, "").replace(/\/\*[\s\S]*?\*\//g, "");
}

function checkPatternsInFile(filePath, content, patterns) {
  const noComments = stripComments(content);
  const errors = [];
  for (const { pattern, label, flags = "gi" } of patterns) {
    try {
      const re = new RegExp(pattern, flags);
      const matches = [...noComments.matchAll(re)];
      if (matches.length > 0) {
        errors.push({ label, count: matches.length, sample: matches[0][0].substring(0, 120) });
      }
    } catch {}
  }
  return errors;
}

// Patterns that indicate AI-readable noise
// IMPORTANT: "Tiktok Shop" uses lowercase 'k' — only flag the WRONG casing
const badPatterns = [
  // Literal asterisk + hyphen bullet (the specific QA pattern from external checks)
  { pattern: "\\* -[A-Za-z]", label: "Asterisk + hyphen prefix (* -Word)" },
  // HTML >-- prefix pattern
  { pattern: ">--[A-Za-z]", label: "HTML entity + hyphen prefix (>--Word)" },
  // Asterisk bullets
  { pattern: "\\* •", label: "Asterisk + bullet (* •)" },
  { pattern: "\\* ×", label: "Asterisk + cross (* ×)" },
  // TikTok casing — ONLY wrong casing (lowercase k), NOT correct "TikTok Shop"
  // Use case-sensitive match to avoid flagging correct "TikTok" (uppercase K)
  { pattern: "Tiktok Shop", label: "Incorrect TikTok casing (Tiktok vs TikTok)", flags: "" },
  // Digit-prefixed recovery steps (1. 1 pattern)
  { pattern: '"Step \\d+\\. \\d+\\.', label: "Digit-prefixed recovery step (1. 1)" },
  // Custom bullet spans inside list items
  { pattern: "<li[^>]*>[\\s\\S]*?<span[^>]*>\\s*[•×]\\s*<\\/span>[\\s\\S]*?<\\/li>", label: "Custom bullet span inside <li>" },
  // Flex gap with hyphen bullet span
  { pattern: '<li[^>]*className="[^"]*flex[^"]*gap[^"]*"[^>]*>[\\s\\S]*?<span[^>]*>\\s*-\\s*<\\/span>', label: "Flex gap hyphen bullet span in <li>" },
  // Hyphen span as standalone bullet
  { pattern: "<span[^>]*>\\s*-{1,2}\\s*<\\/span>", label: "Literal hyphen in span" },
];

console.log("=== AI-Readable Output Checks ===\n");

// Check source files
console.log("[1] Scanning source files...");
const srcFiles = scanDir(join(BASE_DIR, "src"), [".tsx", ".ts"]);
let srcErrors = 0;
for (const file of srcFiles) {
  try {
    const content = readFileSync(file, "utf-8");
    const errors = checkPatternsInFile(file, content, badPatterns);
    for (const err of errors) {
      console.error(`  FAIL: ${file.replace(BASE_DIR + "/", "")} — ${err.label} (${err.count}x): "${err.sample}"`);
      srcErrors++;
    }
  } catch {}
}
if (srcErrors === 0) {
  console.log(`  PASS: No AI-readable noise in ${srcFiles.length} source files`);
} else {
  hasErrors = true;
}

// Check built .next output — only the key files, not every chunk
const nextDir = join(BASE_DIR, ".next");
if (existsSync(nextDir)) {
  console.log("\n[2] Scanning built .next server files (key pages only)...");
  const keyFiles = [
    join(nextDir, "server/app/services/expert-matching/page.js"),
    join(nextDir, "server/app/services/expert-matching.segments/_index.segment.rsc"),
    join(nextDir, "server/app/services/expert-matching.rsc"),
    join(nextDir, "server/app/google-merchant-center/appeal-rejected.rsc"),
    join(nextDir, "server/app/google-merchant-center/appeal-rejected.segments/_full.segment.rsc"),
  ];
  let buildErrors = 0;
  for (const file of keyFiles) {
    if (!existsSync(file)) continue;
    try {
      const content = readFileSync(file, "utf-8");
      const errors = checkPatternsInFile(file, content, badPatterns);
      for (const err of errors) {
        // Filter known false positives
        if (err.label === "Digit-prefixed recovery step (1. 1)") continue;
        console.error(`  FAIL: ${file.replace(BASE_DIR + "/", "")} — ${err.label} (${err.count}x): "${err.sample}"`);
        buildErrors++;
      }
    } catch {}
  }
  if (buildErrors === 0) {
    console.log(`  PASS: No AI-readable noise in ${keyFiles.filter(f => existsSync(f)).length} key built files`);
  } else {
    hasErrors = true;
  }
} else {
  console.log("  INFO: .next not built yet — skipping build checks");
}

console.log("\n" + "=".repeat(60));
if (hasErrors) {
  console.error("AI-READABLE OUTPUT VALIDATION: FAILURES FOUND");
  exit(1);
} else {
  console.log("AI-READABLE OUTPUT VALIDATION: ALL CHECKS PASSED");
  exit(0);
}
