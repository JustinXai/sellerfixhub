#!/usr/bin/env node
/**
 * check-issue-format.mjs
 * Validates issue data formatting and rendered output:
 * - issues.ts data: no leading bullets ("•", "*"), no digit-prefixed recoverySteps
 * - IssuePage.tsx: no custom bullet spans in <ul>, no custom number badges in <ol>
 * - Expert matching page: no literal hyphen ("-") as bullet in <ul> lists
 * - Platform name: "TikTok Shop", not "Tiktok Shop"
 *
 * Exit code 1 if any violation found.
 */

import { readFileSync } from "fs";
import { join } from "path";
import { cwd, exit } from "process";

const ISSUES_PATH = join(cwd(), "src/data/issues.ts");
const COMPONENT_PATH = join(cwd(), "src/components/IssuePage.tsx");
const EXPERT_MATCHING_PATH = join(cwd(), "src/app/services/expert-matching/page.tsx");

let hasErrors = false;

function run() {
  console.log("=== Checking issues.ts data ===");
  let issuesContent;
  try {
    issuesContent = readFileSync(ISSUES_PATH, "utf-8");
  } catch (err) {
    console.error(`Cannot read ${ISSUES_PATH}: ${err.message}`);
    exit(1);
  }

  // 1. Check for leading bullets in data arrays
  const bulletArrays = ["commonCauses", "evidence", "checklist", "mistakes"];
  for (const arr of bulletArrays) {
    const pattern = new RegExp(`${arr}:\\s*\\[([\\s\\S]*?)\\]\\s*[,;]`, "m");
    const match = issuesContent.match(pattern);
    if (match) {
      const lines = match[1].split("\n");
      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith('"') || trimmed.startsWith("'")) {
          if (/^["'][\s]*[•✕]/.test(trimmed)) {
            console.error(`  FAIL: ${arr} item starts with bullet character: "${trimmed.substring(0, 60)}..."`);
            hasErrors = true;
          }
        }
      }
    }
  }

  // 2. Check recoverySteps for bare digit patterns
  const recoveryPattern = /recoverySteps:\s*\[[\s\S]*?\]\s*[,;]/m;
  const recoveryMatch = issuesContent.match(recoveryPattern);
  if (recoveryMatch) {
    const lines = recoveryMatch[0].split("\n");
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('"') || trimmed.startsWith("'")) {
        if ((/^["']\s*\d+[.\)]\s/.test(trimmed))) {
          console.error(`  FAIL: recoverySteps item starts with numbering: "${trimmed.substring(0, 60)}..."`);
          hasErrors = true;
        }
      }
    }
  }

  // 3. TikTok casing
  const tiktokVariants = ["Tiktok Shop", "tiktok shop", "TIKTOK SHOP"];
  for (const variant of tiktokVariants) {
    if (issuesContent.includes(variant)) {
      console.error(`  FAIL: Found incorrect TikTok casing "${variant}" in issues.ts`);
      hasErrors = true;
    }
  }

  console.log("\n=== Checking IssuePage.tsx component ===");
  let componentContent;
  try {
    componentContent = readFileSync(COMPONENT_PATH, "utf-8");
  } catch (err) {
    console.error(`Cannot read ${COMPONENT_PATH}: ${err.message}`);
    exit(1);
  }

  // 4. No custom bullet spans (• or ×) inside <ul> list items
  // Pattern: <ul ...> followed by <li>...<span>•</span> or <span>×</span>
  const ulBulletPattern = /<ul[^>]*>[\s\S]*?<li[\s\S]*?<span[^>]*>\s*[•×]\s*<\/span>/g;
  const ulBulletMatches = [...componentContent.matchAll(ulBulletPattern)];
  if (ulBulletMatches.length > 0) {
    console.error(`  FAIL: Found ${ulBulletMatches.length} custom bullet spans (<span>•</span> or <span>×</span>) inside <ul> elements in IssuePage.tsx`);
    hasErrors = true;
  } else {
    console.log("  PASS: No custom bullet spans in <ul> elements");
  }

  // 4b. No literal × character rendered as text inside <li> elements
  // Match each <li>...</li> individually and check if × appears as text content (not inside child elements like comments)
  const liBlockPattern = /<li\b[^>]*>([\s\S]*?)<\/li>/g;
  let liMatch;
  let foundXInLi = false;
  while ((liMatch = liBlockPattern.exec(componentContent)) !== null) {
    const liInner = liMatch[1];
    // Remove any child elements (spans, inputs, etc.) to get text content only
    const textOnly = liInner.replace(/<[^>]+>/g, "");
    if (textOnly.includes("×")) {
      console.error(`  FAIL: Literal × found in <li> text content: "${textOnly.trim().substring(0, 80)}..."`);
      foundXInLi = true;
    }
  }
  if (foundXInLi) {
    hasErrors = true;
  } else {
    console.log("  PASS: No literal × characters in <li> text content");
  }

  // 5. No custom number badges (i+1, index+1) inside <ol> recovery steps
  // Pattern: <ol ...> followed by <li>...<span>{...+...}</span> where the span renders an index
  const olNumberPattern = /<ol[^>]*>[\s\S]*?<li[\s\S]*?<span[^>]*>\s*\{[^}]*(?:\+|-)\s*\d+\s*\}[^<]*<\/span>/g;
  const olNumberMatches = [...componentContent.matchAll(olNumberPattern)];
  if (olNumberMatches.length > 0) {
    console.error(`  FAIL: Found ${olNumberMatches.length} custom number badge spans (index+1) inside <ol> elements in IssuePage.tsx`);
    hasErrors = true;
  } else {
    console.log("  PASS: No custom number badges in <ol> elements");
  }

  // 6. No literal "Tiktok Shop" in component source
  if (componentContent.includes("Tiktok Shop")) {
    console.error("  FAIL: Found 'Tiktok Shop' (incorrect casing) in IssuePage.tsx");
    hasErrors = true;
  } else {
    console.log("  PASS: TikTok casing correct in IssuePage.tsx");
  }

  // 7. recoverySteps section must use <ol>, not <ul>
  // Find the recovery steps section and check its tag
  const recoverySectionMatch = componentContent.match(/<ol[^>]*>\s*\{issue\.recoverySteps\.map/);
  if (recoverySectionMatch) {
    console.log("  PASS: Recovery steps use <ol> element");
  } else {
    // Check if it mistakenly uses <ul>
    const recoveryUlMatch = componentContent.match(/<ul[^>]*>\s*\{issue\.recoverySteps\.map/);
    if (recoveryUlMatch) {
      console.error("  FAIL: Recovery steps incorrectly use <ul> instead of <ol>");
      hasErrors = true;
    }
  }

  // 8. Expert Matching page: no literal hyphen bullets in <ul> lists
  console.log("\n=== Checking Expert Matching page ===");
  let expertContent;
  try {
    expertContent = readFileSync(EXPERT_MATCHING_PATH, "utf-8");
  } catch (err) {
    console.error(`Cannot read ${EXPERT_MATCHING_PATH}: ${err.message}`);
    exit(1);
  }

  // Check for <span>- </span> pattern used as manual bullet
  const hyphenBulletPattern = /<span[^>]*>\s*-\s*<\/span>/g;
  const hyphenMatches = [...expertContent.matchAll(hyphenBulletPattern)];
  if (hyphenMatches.length > 0) {
    console.error(`  FAIL: Found ${hyphenMatches.length} literal hyphen bullets (<span>- </span>) in expert-matching page`);
    hasErrors = true;
  } else {
    console.log("  PASS: No literal hyphen bullets in expert-matching page");
  }

  // Check that sidebar lists use semantic <ul> with <li> (not flex+gap manual bullets)
  // Pattern: <li className="flex items-start gap-2"><span className="text-slate-300">-</span>
  const manualBulletPattern = /<li[^>]*className="[^"]*flex[^"]*gap-2[^"]*"[^>]*>[\s\S]*?<span[^>]*>\s*-\s*<\/span>/g;
  const manualMatches = [...expertContent.matchAll(manualBulletPattern)];
  if (manualMatches.length > 0) {
    console.error(`  FAIL: Found ${manualMatches.length} manual bullet patterns (flex+gap+span-dash) in expert-matching page`);
    hasErrors = true;
  } else {
    console.log("  PASS: No manual bullet patterns in expert-matching page");
  }

  console.log("\n=== Summary ===");
  if (hasErrors) {
    console.error("ISSUE FORMAT VALIDATION FAILED: Formatting issues found.");
    exit(1);
  } else {
    console.log("ISSUE FORMAT VALIDATION PASSED: All format checks passed.");
    exit(0);
  }
}

run();
