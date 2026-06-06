#!/usr/bin/env node
/**
 * check-content.mjs
 * Checks that every issue in src/data/issues.ts has all required fields.
 * Exit code 1 if any issue is missing required fields.
 *
 * Note: Cross-platform slugs (same slug on different platforms) are allowed.
 * Duplicate detection is per-platform, not global.
 */

import { readFileSync } from "fs";
import { cwd, exit } from "process";
import { join } from "path";

const REQUIRED_FIELDS = [
  "slug",
  "platform",
  "h1",
  "metaTitle",
  "metaDescription",
  "updatedAt",
  "aiSummary",
  "quickAnswer",
  "meaning",
  "commonCauses",
  "checklist",
  "evidence",
  "recoverySteps",
  "mistakes",
  "whenToAskExpert",
  "faqs",
  "relatedSlugs",
];

function checkIssues() {
  const issuesPath = join(cwd(), "src/data/issues.ts");
  let content;
  try {
    content = readFileSync(issuesPath, "utf-8");
  } catch (err) {
    console.error(`Cannot read ${issuesPath}: ${err.message}`);
    exit(1);
  }

  let hasErrors = false;

  // Count issue objects by counting slug properties
  const slugMatches = content.match(/slug:\s*["']([^"']+)["']/g);
  if (!slugMatches) {
    console.error("No issues found (no slug fields)");
    exit(1);
  }

  const slugCount = slugMatches.length;
  console.log(`Found ${slugCount} issues in issues.ts`);

  // Check for duplicates within the same platform.
  // Build a map of platform → Set of slugs to detect within-platform duplicates.
  // Cross-platform same-slug (e.g. account-suspended on GMC and TikTok) is allowed.
  const platformSlugPattern = /platform:\s*["']([^"']+)["'][\s\S]*?slug:\s*["']([^"']+)["']/g;
  const platformSlugs = new Map(); // platform → Set of slugs
  let pMatch;
  while ((pMatch = platformSlugPattern.exec(content)) !== null) {
    const platform = pMatch[1];
    const slug = pMatch[2];
    if (!platformSlugs.has(platform)) platformSlugs.set(platform, new Set());
    const slugSet = platformSlugs.get(platform);
    if (slugSet.has(slug)) {
      console.error(`DUPLICATE SLUG: "${slug}" appears more than once in platform "${platform}"`);
      hasErrors = true;
    }
    slugSet.add(slug);
  }
  const totalUniquePlatformSlugs = [...platformSlugs.values()].reduce((sum, s) => sum + s.size, 0);
  console.log(`Platforms: ${platformSlugs.size}, unique platform+slug combinations: ${totalUniquePlatformSlugs}`);
  if (!hasErrors) {
    console.log("No duplicate slugs found within each platform.");
  }

  // Check that each required field appears in the issues array
  for (const field of REQUIRED_FIELDS) {
    const pattern = new RegExp(`${field}:`, "m");
    if (!pattern.test(content)) {
      console.error(`MISSING FIELD: '${field}' is not defined in issues.ts`);
      hasErrors = true;
    }
  }

  // Check each issue has required arrays non-empty
  const requiredArrays = [
    "commonCauses",
    "checklist",
    "evidence",
    "recoverySteps",
    "mistakes",
    "whenToAskExpert",
    "relatedSlugs",
  ];
  for (const arr of requiredArrays) {
    // Match array content (may span multiple lines)
    const multiLinePattern = new RegExp(`${arr}:\\s*\\[([\\s\\S]*?)\\]\\s*[,;]`, "m");
    const multiMatch = content.match(multiLinePattern);
    if (!multiMatch || multiMatch[1].trim() === "") {
      console.error(`EMPTY ARRAY: '${arr}' appears to be empty`);
      hasErrors = true;
    }
  }

  // Check FAQ items have question and answer
  const faqQuestionMatches = content.match(/question:\s*["'][^"']+["']/g);
  const faqAnswerMatches = content.match(/answer:\s*["'][^"']+["']/g);
  if (!faqQuestionMatches || !faqAnswerMatches) {
    console.error("FAQ items missing question or answer fields");
    hasErrors = true;
  } else {
    const minFAQs = Math.floor(slugCount * 2);
    if (faqQuestionMatches.length < minFAQs) {
      console.error(`LOW FAQ COUNT: Expected at least ${minFAQs} FAQ questions (${slugCount} issues × 2), found ${faqQuestionMatches.length}`);
      hasErrors = true;
    } else {
      console.log(`FAQ questions found: ${faqQuestionMatches.length} (expected >= ${minFAQs})`);
    }
  }

  if (hasErrors) {
    console.error("\nCONTENT VALIDATION FAILED: Issues data is incomplete.");
    exit(1);
  } else {
    console.log("\nCONTENT VALIDATION PASSED: All issues have required fields.");
    exit(0);
  }
}

checkIssues();
