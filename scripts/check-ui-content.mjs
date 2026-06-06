#!/usr/bin/env node
/**
 * check-ui-content.mjs
 * Checks that homepage contains required content and does NOT contain
 * forbidden words, fake inputs, or generic patterns.
 */

import { readFileSync } from "fs";
import { cwd, exit } from "process";
import { join } from "path";

const REQUIRED = [
  "Independent seller recovery guide",
  "Fix rejected products",
  "Browse issue guides",
  "Get expert help",
  "Recovery desk",
  "How SellerFixHub helps",
  // Proof metrics
  "25",
  "recovery guides",
  "101",
  "FAQ answers",
  "Evidence-first",
  "checklists",
  // Footer / platform sections still present
  "Google Merchant Center",
  "TikTok Shop",
];

const FORBIDDEN = [
  // Homepage fake input removed
  "Paste your platform issue message here",
  "textarea",
  "How It Works",
  "2 Platforms",
  "0 Approval guarantees",
  // Fake/fraudulent claims
  "guaranteed approval",
  "100% reinstatement",
  "official partner",
  "internal escalation",
  // Generic single-letter platform badges
  ">G<",
  ">T<",
  // Generic animated-hero words
  "amazing",
  "wonderful",
  "beautiful",
];

function checkUI() {
  const pagePath = join(cwd(), "src/app/page.tsx");
  let content;
  try {
    content = readFileSync(pagePath, "utf-8");
  } catch (err) {
    console.error(`Cannot read ${pagePath}: ${err.message}`);
    exit(1);
  }

  // Normalize whitespace so multiline JSX doesn't break phrase matching
  const normalized = content.replace(/\s+/g, " ");

  let hasErrors = false;

  console.log("Checking required content in page.tsx...");
  for (const phrase of REQUIRED) {
    const escaped = phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(escaped, "gi");
    if (regex.test(normalized)) {
      console.log(`  PASS: "${phrase}" found`);
    } else {
      console.error(`  FAIL: "${phrase}" NOT found`);
      hasErrors = true;
    }
  }

  console.log("\nChecking forbidden content in page.tsx...");
  for (const word of FORBIDDEN) {
    const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(escaped, "gi");
    if (regex.test(normalized)) {
      console.error(`  FAIL: Forbidden "${word}" found`);
      hasErrors = true;
    } else {
      console.log(`  PASS: "${word}" not present`);
    }
  }

  if (hasErrors) {
    console.error("\nUI CONTENT VALIDATION FAILED: Some checks did not pass.");
    exit(1);
  } else {
    console.log("\nUI CONTENT VALIDATION PASSED: All checks passed.");
    exit(0);
  }
}

checkUI();
