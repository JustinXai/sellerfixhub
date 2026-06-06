#!/usr/bin/env node
/**
 * check-new-issue-pages.mjs
 * Validates the Sprint 2A content expansion: 8 new issue pages.
 * Exit code 1 if any check fails.
 */

import { readFileSync, existsSync } from "fs";
import { cwd, exit } from "process";
import { join } from "path";

const PLATFORM_SLUGS = [
  { platform: "google-merchant-center", slug: "appeal-rejected" },
  { platform: "google-merchant-center", slug: "missing-product-identifiers" },
  { platform: "google-merchant-center", slug: "limited-performance-missing-identifiers" },
  { platform: "google-merchant-center", slug: "gtin-mpn-brand" },
  { platform: "google-merchant-center", slug: "identifier-exists" },
  { platform: "google-merchant-center", slug: "destination-not-working" },
  { platform: "google-merchant-center", slug: "shopify-feed-errors" },
  { platform: "tiktok-shop", slug: "restricted-products" },
  { platform: "tiktok-shop", slug: "product-listing-quality" },
];

const BASE_DIR = cwd();

let hasErrors = false;

function check(label, condition, errorMsg) {
  if (condition) {
    console.log(`  PASS: ${label}`);
  } else {
    console.error(`  FAIL: ${label} — ${errorMsg}`);
    hasErrors = true;
  }
}

// 1. Check that each slug exists in issues.ts
console.log("\n[1] Checking slugs exist in issues.ts...");
const issuesPath = join(BASE_DIR, "src/data/issues.ts");
const issuesContent = readFileSync(issuesPath, "utf-8");

for (const { platform, slug } of PLATFORM_SLUGS) {
  const pattern = new RegExp(`slug:\\s*["']${slug}["']\\s*,\\s*platform:\\s*["']${platform}["']`, "m");
  check(
    `${slug} (${platform}) exists in issues.ts`,
    pattern.test(issuesContent),
    `slug "${slug}" for platform "${platform}" not found`
  );
}

// 2. Check page.tsx files exist
console.log("\n[2] Checking page.tsx files exist...");
for (const { platform, slug } of PLATFORM_SLUGS) {
  const pagePath = join(BASE_DIR, `src/app/${platform}/${slug}/page.tsx`);
  check(
    `${platform}/${slug}/page.tsx exists`,
    existsSync(pagePath),
    `page file not found at ${pagePath}`
  );
}

// 3. Check sitemap auto-includes new issues
console.log("\n[3] Checking sitemap.ts auto-includes new issues...");
const sitemapPath = join(BASE_DIR, "src/app/sitemap.ts");
const sitemapContent = readFileSync(sitemapPath, "utf-8");
const sitemapAuto = sitemapContent.includes("issues.map") || sitemapContent.includes("issues.filter");
check(
  "sitemap.ts auto-generates from issues array",
  sitemapAuto,
  "sitemap.ts does not appear to generate from issues data"
);

// 4. Check llms.txt contains key new pages (no trailing slash)
console.log("\n[4] Checking llms.txt contains new pages...");
const llmsPath = join(BASE_DIR, "public/llms.txt");
const llmsContent = readFileSync(llmsPath, "utf-8");

const keyPages = [
  "/google-merchant-center/appeal-rejected",
  "/google-merchant-center/missing-product-identifiers",
  "/google-merchant-center/shopify-feed-errors",
  "/tiktok-shop/restricted-products",
  "/tiktok-shop/product-listing-quality",
];
for (const page of keyPages) {
  check(
    `llms.txt includes ${page}`,
    llmsContent.includes(page),
    `llms.txt missing ${page} reference`
  );
}

// 5. Check each page.tsx has metadata and uses IssuePage component
console.log("\n[5] Checking page.tsx files have metadata and IssuePage...");
for (const { platform, slug } of PLATFORM_SLUGS) {
  const pagePath = join(BASE_DIR, `src/app/${platform}/${slug}/page.tsx`);
  const pageContent = readFileSync(pagePath, "utf-8");
  check(
    `${platform}/${slug}/page.tsx has generateMetadata`,
    pageContent.includes("generateMetadata"),
    "generateMetadata function missing"
  );
  check(
    `${platform}/${slug}/page.tsx imports issues`,
    pageContent.includes('from "@/data/issues"'),
    "missing import from issues"
  );
  check(
    `${platform}/${slug}/page.tsx uses IssuePage component`,
    pageContent.includes("IssuePage"),
    "missing IssuePage component usage"
  );
}

// 6. Check FAQ presence per issue (>= 3 per issue)
console.log("\n[6] Checking FAQ presence in issues.ts...");
for (const { platform, slug } of PLATFORM_SLUGS) {
  const blockPattern = new RegExp(
    `slug:\\s*["']${slug}["']\\s*,\\s*platform:\\s*["']${platform}["'][\\s\\S]*?faqs:\\s*\\[([\\s\\S]*?)\\]\\s*[,;]`,
    "m"
  );
  const match = issuesContent.match(blockPattern);
  if (match) {
    const faqCount = (match[1].match(/question:/g) || []).length;
    check(
      `${slug} (${platform}) has FAQ questions (${faqCount})`,
      faqCount >= 3,
      `only ${faqCount} FAQ questions found, expected >= 3`
    );
  } else {
    check(`${slug} (${platform}) has FAQ block`, false, "FAQ block not found");
  }
}

// 7. Check evidence minimums per issue (>= 5)
console.log("\n[7] Checking evidence minimums (>= 5) in issues.ts...");
for (const { platform, slug } of PLATFORM_SLUGS) {
  const blockPattern = new RegExp(
    `slug:\\s*["']${slug}["']\\s*,\\s*platform:\\s*["']${platform}["'][\\s\\S]*?evidence:\\s*\\[([\\s\\S]*?)\\]\\s*[,;]`,
    "m"
  );
  const match = issuesContent.match(blockPattern);
  if (match) {
    const evCount = (match[1].match(/^\s*["']/gm) || []).length;
    check(
      `${slug} (${platform}) has evidence items (${evCount})`,
      evCount >= 5,
      `only ${evCount} evidence items found, expected >= 5`
    );
  } else {
    check(`${slug} (${platform}) has evidence block`, false, "evidence block not found");
  }
}

// 8. Check checklist minimums per issue (>= 6)
console.log("\n[8] Checking checklist minimums (>= 6) in issues.ts...");
for (const { platform, slug } of PLATFORM_SLUGS) {
  const blockPattern = new RegExp(
    `slug:\\s*["']${slug}["']\\s*,\\s*platform:\\s*["']${platform}["'][\\s\\S]*?checklist:\\s*\\[([\\s\\S]*?)\\]\\s*[,;]`,
    "m"
  );
  const match = issuesContent.match(blockPattern);
  if (match) {
    const clCount = (match[1].match(/^\s*["']/gm) || []).length;
    check(
      `${slug} (${platform}) has checklist items (${clCount})`,
      clCount >= 6,
      `only ${clCount} checklist items found, expected >= 6`
    );
  } else {
    check(`${slug} (${platform}) has checklist block`, false, "checklist block not found");
  }
}

// 9. Check recoverySteps minimums per issue (>= 5)
console.log("\n[9] Checking recoverySteps minimums (>= 5) in issues.ts...");
for (const { platform, slug } of PLATFORM_SLUGS) {
  const blockPattern = new RegExp(
    `slug:\\s*["']${slug}["']\\s*,\\s*platform:\\s*["']${platform}["'][\\s\\S]*?recoverySteps:\\s*\\[([\\s\\S]*?)\\]\\s*[,;]`,
    "m"
  );
  const match = issuesContent.match(blockPattern);
  if (match) {
    const rsCount = (match[1].match(/^\s*["']/gm) || []).length;
    check(
      `${slug} (${platform}) has recoverySteps items (${rsCount})`,
      rsCount >= 5,
      `only ${rsCount} recoverySteps items found, expected >= 5`
    );
  } else {
    check(`${slug} (${platform}) has recoverySteps block`, false, "recoverySteps block not found");
  }
}

// 10. Check mistakes minimums per issue (>= 5)
console.log("\n[10] Checking mistakes minimums (>= 5) in issues.ts...");
for (const { platform, slug } of PLATFORM_SLUGS) {
  const blockPattern = new RegExp(
    `slug:\\s*["']${slug}["']\\s*,\\s*platform:\\s*["']${platform}["'][\\s\\S]*?mistakes:\\s*\\[([\\s\\S]*?)\\]\\s*[,;]`,
    "m"
  );
  const match = issuesContent.match(blockPattern);
  if (match) {
    const mkCount = (match[1].match(/^\s*["']/gm) || []).length;
    check(
      `${slug} (${platform}) has mistakes items (${mkCount})`,
      mkCount >= 5,
      `only ${mkCount} mistakes items found, expected >= 5`
    );
  } else {
    check(`${slug} (${platform}) has mistakes block`, false, "mistakes block not found");
  }
}

// 11. Check homepage popular guides updated with some Sprint 2A pages
console.log("\n[11] Checking homepage popular guides include Sprint 2A pages...");
const homepagePath = join(BASE_DIR, "src/app/page.tsx");
const homepageContent = readFileSync(homepagePath, "utf-8");
check(
  "Homepage includes appeal-rejected guide link",
  homepageContent.includes("/google-merchant-center/appeal-rejected"),
  "missing appeal-rejected link in homepage popular guides"
);
check(
  "Homepage includes restricted-products guide link",
  homepageContent.includes("/tiktok-shop/restricted-products"),
  "missing restricted-products link in homepage popular guides"
);

// 12. Check llms.txt has no trailing slashes on new pages
console.log("\n[12] Checking llms.txt has no trailing slashes on Sprint 2A pages...");
const TRAILING_SLASH_PATTERN = /https:\/\/sellerfixhub\.com\/[a-z][a-z0-9\/-]*[a-z0-9]\//gi;
const trailingViolations = llmsContent.match(TRAILING_SLASH_PATTERN) || [];
if (trailingViolations.length > 0) {
  console.error(`  FAIL: Found ${trailingViolations.length} trailing slash violations in llms.txt:`);
  trailingViolations.forEach((v) => console.error(`    ${v}`));
  hasErrors = true;
} else {
  console.log("  PASS: No trailing slash violations in llms.txt");
}

// Summary
console.log("\n" + "=".repeat(60));
if (hasErrors) {
  console.error("NEW ISSUE PAGES VALIDATION: SOME CHECKS FAILED");
  exit(1);
} else {
  console.log("NEW ISSUE PAGES VALIDATION: ALL CHECKS PASSED");
  exit(0);
}
