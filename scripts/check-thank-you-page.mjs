#!/usr/bin/env node
/**
 * check-thank-you-page.mjs
 * Validates the /thank-you conversion page:
 * - page file exists
 * - required content present
 * - required links present
 * - sitemap does not include /thank-you
 *
 * Exit code 1 if any violation found.
 */

import { readFileSync, existsSync } from "fs";
import { join } from "path";
import { cwd, exit } from "process";

const PAGE_PATH = join(cwd(), "src/app/thank-you/page.tsx");
const SITEMAP_PATH = join(cwd(), "src/app/sitemap.ts");

let hasErrors = false;

function check(label, condition, errorMsg) {
  if (condition) {
    console.log(`  PASS: ${label}`);
  } else {
    console.error(`  FAIL: ${label} — ${errorMsg}`);
    hasErrors = true;
  }
}

function run() {
  console.log("=== Checking /thank-you page ===");

  // 1. File exists
  check("src/app/thank-you/page.tsx exists", existsSync(PAGE_PATH), "File not found");

  let content = "";
  try {
    content = readFileSync(PAGE_PATH, "utf-8");
  } catch (err) {
    console.error(`Cannot read ${PAGE_PATH}: ${err.message}`);
    exit(1);
  }

  // 2. Required text content
  check(
    'Contains "Thanks — your seller issue was received"',
    content.includes("Thanks — your seller issue was received"),
    "Missing h1 text"
  );
  check(
    "Contains 'does not guarantee approval'",
    content.includes("does not guarantee approval"),
    "Missing disclaimer clause"
  );
  check(
    "Contains 'we've received your submission'",
    content.toLowerCase().includes("received your submission"),
    "Missing confirmation text"
  );

  // 3. Required links
  const links = [
    "/tools/issue-message-explainer",
    "/platforms/google-merchant-center",
    "/platforms/tiktok-shop",
  ];
  for (const link of links) {
    check(
      `Contains link to ${link}`,
      content.includes(link),
      `Missing link: ${link}`
    );
  }

  // 4. noindex metadata
  check(
    "Has robots noindex metadata",
    content.includes("index: false") || content.includes("index:false"),
    "Missing robots index:false"
  );
  check(
    "Has robots nofollow metadata",
    content.includes("follow: false") || content.includes("follow:false"),
    "Missing robots follow:false"
  );

  // 5. sitemap exclusion
  let sitemapContent = "";
  try {
    sitemapContent = readFileSync(SITEMAP_PATH, "utf-8");
  } catch (err) {
    console.error(`Cannot read ${SITEMAP_PATH}: ${err.message}`);
    exit(1);
  }
  check(
    "sitemap.ts does not include /thank-you",
    !sitemapContent.includes("/thank-you"),
    "sitemap.ts should not reference /thank-you"
  );

  console.log("");
  if (hasErrors) {
    console.error("THANK-YOU PAGE VALIDATION FAILED");
    exit(1);
  } else {
    console.log("THANK-YOU PAGE VALIDATION PASSED");
    exit(0);
  }
}

run();
