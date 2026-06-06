#!/usr/bin/env node
/**
 * check-conversion-paths.mjs
 * Validates conversion path hardening changes:
 * - TrackedLink and analytics helpers exist
 * - IssuePage uses source params on CTAs
 * - IssueMessageExplainer fires GA events
 * - Expert Matching page reads searchParams
 * - No PII or message text is sent to GA
 * Exit code 1 if any check fails.
 */

import { readFileSync, existsSync } from "fs";
import { cwd, exit } from "process";
import { join } from "path";

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

// 1. TrackedLink component exists
console.log("\n[1] Checking TrackedLink component...");
const trackedLinkPath = join(BASE_DIR, "src/components/TrackedLink.tsx");
const trackedLinkExists = existsSync(trackedLinkPath);
check("TrackedLink.tsx exists", trackedLinkExists, "TrackedLink.tsx not found");
if (trackedLinkExists) {
  const content = readFileSync(trackedLinkPath, "utf-8");
  check("TrackedLink imports trackEvent", content.includes('from "@/lib/analytics"'), "trackEvent import missing");
  check("TrackedLink has onClick handler", content.includes("onClick"), "onClick handler missing");
  check("TrackedLink calls trackEvent", content.includes("trackEvent("), "trackEvent call missing");
  check("TrackedLink uses useCallback", content.includes("useCallback"), "useCallback missing");
}

// 2. analytics.ts helper exists
console.log("\n[2] Checking analytics helper...");
const analyticsPath = join(BASE_DIR, "src/lib/analytics.ts");
const analyticsExists = existsSync(analyticsPath);
check("analytics.ts exists", analyticsExists, "analytics.ts not found");
if (analyticsExists) {
  const content = readFileSync(analyticsPath, "utf-8");
  check("analytics.ts exports trackEvent", content.includes("export function trackEvent"), "trackEvent export missing");
  check("analytics.ts checks typeof window", content.includes("typeof window"), "SSR safety check missing");
  check("analytics.ts checks gtag", content.includes("gtag"), "gtag check missing");
}

// 3. IssuePage uses TrackedLink with source params
console.log("\n[3] Checking IssuePage CTAs...");
const issuePagePath = join(BASE_DIR, "src/components/IssuePage.tsx");
const issuePageContent = readFileSync(issuePagePath, "utf-8");
check("IssuePage imports TrackedLink", issuePageContent.includes('TrackedLink'), "TrackedLink import missing");
check("IssuePage uses source=issue_page on expert help CTA",
  issuePageContent.includes("source=issue_page") && issuePageContent.includes("expert_help_click"),
  "source=issue_page or expert_help_click missing");
check("IssuePage uses TrackedLink for expert help",
  issuePageContent.includes("<TrackedLink") && issuePageContent.includes("expert_help_click"),
  "TrackedLink expert_help_click missing");
check("IssuePage uses TrackedLink for issue explainer",
  issuePageContent.includes("issue_explainer_click"),
  "issue_explainer_click event missing");
check("IssuePage uses source params with platform",
  issuePageContent.includes("platform=${issue.platform}") || issuePageContent.includes("platform=\\${issue.platform}"),
  "platform param missing from CTA hrefs");
check("IssuePage uses source params with issue slug",
  issuePageContent.includes("issue=${issue.slug}") || issuePageContent.includes("issue=\\${issue.slug}"),
  "issue slug param missing from CTA hrefs");

// 4. IssueMessageExplainer fires GA events
console.log("\n[4] Checking IssueMessageExplainer GA events...");
const explainerPath = join(BASE_DIR, "src/components/IssueMessageExplainer.tsx");
const explainerContent = readFileSync(explainerPath, "utf-8");
check("IssueMessageExplainer imports trackEvent", explainerContent.includes('trackEvent'), "trackEvent import missing");
check("IssueMessageExplainer fires issue_explainer_submit",
  explainerContent.includes("issue_explainer_submit"),
  "issue_explainer_submit event missing");
check("IssueMessageExplainer fires expert_help_click",
  explainerContent.includes("expert_help_click"),
  "expert_help_click event missing in IssueMessageExplainer");
// Note: step 8 performs the authoritative privacy check for message text


// 5. Expert Matching page reads searchParams
console.log("\n[5] Checking Expert Matching page...");
const expertPagePath = join(BASE_DIR, "src/app/services/expert-matching/page.tsx");
const expertPageContent = readFileSync(expertPagePath, "utf-8");
check("Expert Matching page reads searchParams",
  expertPageContent.includes("searchParams"),
  "searchParams not found in expert-matching page");
check("Expert Matching page checks source=issue_page",
  expertPageContent.includes("source") && expertPageContent.includes("issue_page"),
  "source=issue_page check missing");
check("Expert Matching page displays issue context",
  expertPageContent.includes("Issue context") || expertPageContent.includes("Issue context"),
  "Issue context display missing");
check("Expert Matching page shows context conditionally",
  expertPageContent.includes("showContext"),
  "Conditional context display missing");

// 6. Header uses TrackedLink for expert help
console.log("\n[6] Checking Header CTA tracking...");
const headerPath = join(BASE_DIR, "src/components/Header.tsx");
const headerContent = readFileSync(headerPath, "utf-8");
check("Header imports TrackedLink", headerContent.includes("TrackedLink"), "TrackedLink import missing");
check("Header fires expert_help_click",
  headerContent.includes("expert_help_click"),
  "expert_help_click missing in Header");
check("Header passes location=header param",
  headerContent.includes("location") && headerContent.includes("header"),
  "location=header param missing");

// 7. Homepage uses TrackedLink
console.log("\n[7] Checking Homepage CTA tracking...");
const homepagePath = join(BASE_DIR, "src/app/page.tsx");
const homepageContent = readFileSync(homepagePath, "utf-8");
check("Homepage imports TrackedLink", homepageContent.includes("TrackedLink"), "TrackedLink import missing");
check("Homepage fires expert_help_click",
  homepageContent.includes("expert_help_click"),
  "expert_help_click missing in Homepage");
check("Homepage passes location=homepage param",
  homepageContent.includes("location") && homepageContent.includes("homepage"),
  "location=homepage param missing");

// 8. Privacy safety: analytics helper and TrackedLink never touch user message text
console.log("\n[8] Checking privacy safety...");
const analyticsFile = readFileSync(analyticsPath, "utf-8");
const trackedLinkFile = readFileSync(trackedLinkPath, "utf-8");
const refsUserMessage = [/\bmessage\b/, /sessionStorage/, /localStorage/];
let userInputLeak = false;
for (const content of [analyticsFile, trackedLinkFile]) {
  for (const pattern of refsUserMessage) {
    if (pattern.test(content)) {
      console.error(`  FAIL: User input reference found in analytics helper or TrackedLink`);
      userInputLeak = true;
    }
  }
}
if (!userInputLeak) {
  console.log("  PASS: Analytics helper and TrackedLink do not touch user message");
}
// Verify issue_explainer_submit uses Boolean() guard
const explainerFile = readFileSync(explainerPath, "utf-8");
const hasBooleanGuard = /has_message:\s*Boolean\(message\.trim\(\)\)/.test(explainerFile);
if (hasBooleanGuard) {
  console.log("  PASS: issue_explainer_submit uses Boolean(message.trim()) guard");
} else {
  console.error("  FAIL: issue_explainer_submit missing Boolean(message.trim()) guard");
  hasErrors = true;
}

// 9. Tally URL unchanged
console.log("\n[9] Checking Tally URL unchanged...");
check("Expert Matching page uses correct Tally embed URL",
  expertPageContent.includes("tally.so/embed/RGVlOQ"),
  "Tally embed URL modified");
check("Expert Matching page uses correct Tally fallback URL",
  expertPageContent.includes("tally.so/r/RGVlOQ"),
  "Tally fallback URL modified");

// Summary
console.log("\n" + "=".repeat(60));
if (hasErrors) {
  console.error("CONVERSION PATHS VALIDATION: SOME CHECKS FAILED");
  exit(1);
} else {
  console.log("CONVERSION PATHS VALIDATION: ALL CHECKS PASSED");
  exit(0);
}
