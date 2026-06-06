#!/usr/bin/env node
/**
 * check-gmc-money-cluster.mjs
 * Validates that the 5 GMC money-cluster pages meet SEO and content standards.
 * Exit code 1 if any check fails.
 */

import { readFileSync } from "fs";
import { cwd, exit } from "process";
import { join } from "path";

const BASE_DIR = cwd();
const ISSUES_PATH = join(BASE_DIR, "src/data/issues.ts");

const MONEY_CLUSTER_SLUGS = [
  "misrepresentation",
  "account-suspended",
  "product-disapproved",
  "appeal-rejected",
  "request-review",
];

const MONEY_CLUSTER_INTERNAL_LINKS = new Set([
  "misrepresentation",
  "account-suspended",
  "product-disapproved",
  "appeal-rejected",
  "request-review",
  "missing-product-identifiers",
  "identifier-exists",
  "shopify-feed-errors",
  "website-needs-improvement",
  "invalid-gtin",
  "price-mismatch",
]);

const FORBIDDEN_CLAIMS = [
  "guaranteed approval",
  "guaranteed reinstatement",
  "100% reinstatement",
  "official Google partner",
  "official Merchant Center partner",
  "internal escalation",
  "insider review",
  "fake documents",
  "create a new account to bypass suspension",
  "bypass platform rules",
  "bypass suspension",
  "guaranteed appeal success",
  "remove suspension instantly",
];

let hasErrors = false;

function log(label, pass, detail = "") {
  if (pass) {
    console.log(`  PASS: ${label}${detail ? " — " + detail : ""}`);
  } else {
    console.error(`  FAIL: ${label}${detail ? " — " + detail : ""}`);
    hasErrors = true;
  }
}

/**
 * Extract an issue block by scanning line-by-line:
 * - Find the line "    slug: "<target>""
 * - Accumulate lines until the next "    slug: " line (next issue starts)
 * - Return the accumulated block as a single string
 */
function extractIssueBlock(content, targetSlug) {
  const lines = content.split("\n");
  let inBlock = false;
  const blockLines = [];

  for (const line of lines) {
    // Start of target issue
    const startRe = /^\s*slug:\s*["']/.test(line) && line.includes(`"${targetSlug}"`);
    if (startRe && !inBlock) {
      inBlock = true;
    }

    if (inBlock) {
      // End of this issue: next slug: line (new issue starts)
      if (blockLines.length > 0 && /^\s*slug:\s*["']/.test(line) && !line.includes(`"${targetSlug}"`)) {
        break;
      }
      blockLines.push(line);
    }
  }

  return blockLines.join("\n") || null;
}

function run() {
  console.log("=== GMC Money Cluster Checks ===\n");

  let content;
  try {
    content = readFileSync(ISSUES_PATH, "utf-8");
  } catch (err) {
    console.error(`Cannot read ${ISSUES_PATH}: ${err.message}`);
    exit(1);
  }

  // ── 1. All 5 target slugs exist as GMC issues ────────────────────────
  console.log("[1] Target slugs exist as GMC issues...");
  for (const slug of MONEY_CLUSTER_SLUGS) {
    const pattern = new RegExp(
      `slug:\\s*["']${slug}["']\\s*,\\s*platform:\\s*["']google-merchant-center["']`,
      "m"
    );
    log(`  ${slug} exists as GMC issue`, pattern.test(content));
  }

  // ── 2. Each target slug has metaTitle and metaDescription ─────────────
  console.log("\n[2] metaTitle and metaDescription present...");
  for (const slug of MONEY_CLUSTER_SLUGS) {
    const block = extractIssueBlock(content, slug);
    if (block) {
      log(`  ${slug} metaTitle`, /metaTitle:\s*["']/.test(block));
      log(`  ${slug} metaDescription`, /metaDescription:\s*["']/.test(block));
    } else {
      log(`  ${slug} block extraction failed`, false);
      hasErrors = true;
    }
  }

  // ── 3. Keyword presence checks ─────────────────────────────────────────
  console.log("\n[3] Primary keyword presence...");
  for (const slug of MONEY_CLUSTER_SLUGS) {
    const block = extractIssueBlock(content, slug);
    if (!block) continue;

    if (slug === "misrepresentation") {
      log("  misrepresentation contains 'Google Merchant Center misrepresentation'",
        /Google Merchant Center misrepresentation/i.test(block));
    } else if (slug === "account-suspended") {
      const hasSuspension =
        /google merchant center account suspended/i.test(block) ||
        /fix google merchant center suspension/i.test(block);
      log("  account-suspended contains 'Google Merchant Center account suspended' or 'fix...suspension'",
        hasSuspension);
    } else if (slug === "product-disapproved") {
      const hasDisapprovedProducts = /disapproved products/i.test(block);
      const hasProductDisapproved = /product disapproved/i.test(block);
      log("  product-disapproved contains 'disapproved products'",
        hasDisapprovedProducts, hasDisapprovedProducts ? "" : "NOT FOUND");
      log("  product-disapproved contains 'product disapproved'",
        hasProductDisapproved, hasProductDisapproved ? "" : "NOT FOUND");
    } else if (slug === "appeal-rejected") {
      log("  appeal-rejected contains 'appeal rejected'",
        /appeal rejected/i.test(block));
    } else if (slug === "request-review") {
      log("  request-review contains 'request review'",
        /request review/i.test(block));
    }
  }

  // ── 4. relatedSlugs: at least 3 GMC money-cluster internal links ─────
  console.log("\n[4] relatedSlugs — at least 3 GMC money-cluster pages...");
  for (const slug of MONEY_CLUSTER_SLUGS) {
    const block = extractIssueBlock(content, slug);
    if (!block) continue;
    // Match: relatedSlugs: [ ... ] followed by , or ;
    const relatedPattern = /relatedSlugs:\s*\[([\s\S]*?)\]\s*[,;]/m;
    const relMatch = block.match(relatedPattern);
    if (relMatch) {
      const slugRefs = [...relMatch[1].matchAll(/["']([^"']+)["']/g)].map((m) => m[1]);
      const clusterLinks = slugRefs.filter((s) => MONEY_CLUSTER_INTERNAL_LINKS.has(s));
      log(
        `  ${slug} has ${clusterLinks.length} cluster links (${clusterLinks.join(", ") || "none"})`,
        clusterLinks.length >= 3,
        `needs ≥3`
      );
    } else {
      log(`  ${slug} relatedSlugs not found`, false);
    }
  }

  // ── 5. No forbidden claims in any of the 5 target pages ───────────────
  console.log("\n[5] No forbidden claims in target pages...");
  for (const slug of MONEY_CLUSTER_SLUGS) {
    const block = extractIssueBlock(content, slug);
    if (!block) continue;
    let foundClaim = false;
    for (const claim of FORBIDDEN_CLAIMS) {
      if (block.toLowerCase().includes(claim.toLowerCase())) {
        console.error(`  FAIL: ${slug} contains forbidden claim "${claim}"`);
        foundClaim = true;
      }
    }
    if (!foundClaim) {
      log(`  ${slug} no forbidden claims`, true);
    } else {
      hasErrors = true;
    }
  }

  // ── 6. Conversion CTAs present in IssuePage component ─────────────────
  console.log("\n[6] Conversion CTAs in IssuePage component...");
  const issuePagePath = join(BASE_DIR, "src/components/IssuePage.tsx");
  let issuePageContent;
  try {
    issuePageContent = readFileSync(issuePagePath, "utf-8");
  } catch {
    console.error("  Cannot read IssuePage.tsx");
    hasErrors = true;
  }
  if (issuePageContent) {
    log(
      "  IssuePage uses TrackedLink for expert help",
      issuePageContent.includes("expert_help_click") && issuePageContent.includes("source=issue_page")
    );
    log(
      "  IssuePage uses TrackedLink for issue explainer",
      issuePageContent.includes("issue_explainer_click")
    );
    log(
      "  IssuePage CTA uses platform param",
      issuePageContent.includes("platform=${issue.platform}")
    );
    log(
      "  IssuePage CTA uses issue slug param",
      issuePageContent.includes("issue=${issue.slug}")
    );
  }

  // ── Summary ─────────────────────────────────────────────────────────────
  console.log("\n" + "=".repeat(60));
  if (hasErrors) {
    console.error("GMC MONEY CLUSTER VALIDATION: FAILURES FOUND");
    exit(1);
  } else {
    console.log("GMC MONEY CLUSTER VALIDATION: ALL CHECKS PASSED");
    exit(0);
  }
}

run();
