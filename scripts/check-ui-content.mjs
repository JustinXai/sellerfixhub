#!/usr/bin/env node
/**
 * check-ui-content.mjs
 * Checks that homepage contains required content and does NOT contain
 * forbidden words, fake inputs, or generic patterns.
 *
 * Proof metrics are data-driven (computed from issues array at runtime).
 * This script verifies the homepage source uses those computed values
 * rather than hardcoded numbers.
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
  // Proof metrics — verified as data-driven (see METRICS section below)
  "recovery guides",
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

function computeMetrics() {
  // Use Node to evaluate the actual TypeScript data
  // This mirrors the computation done in src/app/page.tsx
  let issues, issuesContent;
  try {
    // Use tsx if available, otherwise fall back to require workaround
    issuesContent = readFileSync(join(cwd(), "src/data/issues.ts"), "utf-8");
  } catch (err) {
    console.error(`Cannot read issues.ts: ${err.message}`);
    exit(1);
  }

  // Extract guide count — number of issue objects defined in issues array
  const guideCountMatch = issuesContent.match(/export const issues: Issue\[\] = \[/);
  if (!guideCountMatch) {
    // Fallback: count slug: occurrences in the issues export block
    const blockMatch = issuesContent.match(/export const issues: Issue\[\] = \[([\s\S]*?)\n\];/);
    if (blockMatch) {
      const slugMatches = blockMatch[1].match(/slug: "/g);
      return { guideCount: slugMatches ? slugMatches.length : 0, faqCount: 0 };
    }
    return { guideCount: 0, faqCount: 0 };
  }

  // Count issue objects by finding slug: occurrences within the issues array
  // We find the block from "export const issues" to the closing ];
  const issuesBlock = issuesContent.match(/export const issues: Issue\[\] = \[([\s\S]*?)\n\]; export function/);
  if (!issuesBlock) {
    const issuesBlockAlt = issuesContent.match(/export const issues: Issue\[\] = \[([\s\S]*?)\n\];/);
    if (!issuesBlockAlt) return { guideCount: 0, faqCount: 0 };
    const slugMatches = issuesBlockAlt[1].match(/slug: "/g);
    const faqMatches = issuesBlockAlt[1].match(/question: "/g);
    return {
      guideCount: slugMatches ? slugMatches.length : 0,
      faqCount: faqMatches ? faqMatches.length : 0,
    };
  }
  const slugMatches = issuesBlock[1].match(/slug: "/g);
  const faqMatches = issuesBlock[1].match(/question: "/g);
  return {
    guideCount: slugMatches ? slugMatches.length : 0,
    faqCount: faqMatches ? faqMatches.length : 0,
  };
}

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

  // METRICS: Verify homepage uses data-driven computation, not hardcoded numbers
  console.log("\nChecking proof metrics are data-driven...");
  const metrics = computeMetrics();
  console.log(`  Data source: issues.length = ${metrics.guideCount}, total FAQs = ${metrics.faqCount}`);

  // Check that homepage uses {issues.length} for guide count
  if (/\{issues\.length\}/.test(content)) {
    console.log(`  PASS: Guide count uses {issues.length} (data-driven)`);
  } else {
    console.error(`  FAIL: Guide count does not use {issues.length} — appears to be hardcoded`);
    hasErrors = true;
  }

  // Check that homepage uses {issues.reduce(...)} for FAQ count
  if (/\{issues\.reduce\(/.test(content)) {
    console.log(`  PASS: FAQ count uses {issues.reduce(...)} (data-driven)`);
  } else {
    console.error(`  FAIL: FAQ count does not use {issues.reduce(...)} — appears to be hardcoded`);
    hasErrors = true;
  }

  // Verify no hardcoded guide count numbers in the metrics row
  // Acceptable: {issues.length}, numeric patterns in other contexts
  // Not acceptable: a bare "25" or "24" appearing in the guide-count metric cell
  const metricsSection = content.match(/Proof metrics row[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/);
  if (metricsSection) {
    const metricText = metricsSection[0];
    // Check no isolated numeric values that would indicate hardcoding
    if (/\brecovery guides\b[\s\S]{0,100}\b\d{2}\b(?!\d)/.test(metricText)) {
      // Only flag if it's NOT inside {issues.length} or similar
      if (!/\{issues\.length\}/.test(metricText)) {
        console.error(`  FAIL: Hardcoded number found near "recovery guides" label`);
        hasErrors = true;
      }
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
