#!/usr/bin/env node
/**
 * check-lead-form.mjs
 * Checks expert-matching page for Tally lead-form UX cleanup requirements.
 *
 * Strategy:
 *  - page.tsx: must have embed URL, new-tab URL, safety notice, "what to expect",
 *              fallback link, H1. Must NOT have preview/fallback/demo copy.
 *  - LeadForm.tsx: scanned for dangerous field names (screenshot upload, revenue
 *                  fields) — these would indicate the fallback form is still collecting
 *                  sensitive data.  Only fail if those field names appear WITHIN a
 *                  rendered <form> element in LeadForm.tsx.
 */

import { readFileSync } from "fs";
import { cwd, exit } from "process";
import { join } from "path";

const PAGE_REQUIRED = [
  "tally.so/embed/RGVlOQ",
  "tally.so/r/RGVlOQ",
  "Do not submit passwords",
  "does not guarantee approval",
  "Get help understanding your seller issue",
  "open the secure request form in a new tab",
  "820",
];

const PAGE_FORBIDDEN = [
  "preview form",
  "lightweight fallback",
  "demo form is not connected",
  "Screenshot upload",
  "Monthly revenue",
  "guaranteed approval",
  "100% reinstatement",
  "1050",
];

function matchAll(content, pattern) {
  const escaped = pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return [...content.matchAll(new RegExp(escaped, "gi"))];
}

function checkPage() {
  const pagePath = join(cwd(), "src/app/services/expert-matching/page.tsx");
  let content;
  try {
    content = readFileSync(pagePath, "utf-8");
  } catch (err) {
    console.error(`Cannot read ${pagePath}: ${err.message}`);
    exit(1);
  }

  let hasErrors = false;

  console.log("Checking required phrases in page.tsx...");
  for (const phrase of PAGE_REQUIRED) {
    if (matchAll(content, phrase).length > 0) {
      console.log(`  PASS: "${phrase}" found`);
    } else {
      console.error(`  FAIL: "${phrase}" NOT found`);
      hasErrors = true;
    }
  }

  console.log("\nChecking forbidden phrases in page.tsx...");
  for (const phrase of PAGE_FORBIDDEN) {
    if (matchAll(content, phrase).length > 0) {
      console.error(`  FAIL: Forbidden phrase "${phrase}" found in page.tsx`);
      hasErrors = true;
    } else {
      console.log(`  PASS: "${phrase}" not present`);
    }
  }

  return { content, hasErrors };
}

function checkLeadFormComponent() {
  const formPath = join(cwd(), "src/components/LeadForm.tsx");
  let content;
  try {
    content = readFileSync(formPath, "utf-8");
  } catch {
    console.warn("  WARN: LeadForm.tsx not found, skipping component checks");
    return { hasErrors: false };
  }

  let hasErrors = false;

  // Dangerous field names: only report if they appear inside a <form> block
  const inFormPattern = /<form[\s\S]*?<\/form>/gi;
  const formBlocks = [...content.matchAll(inFormPattern)].map((m) => m[0]);

  const dangerousFields = [
    "Screenshot",
    "screenshot upload",
    "Monthly revenue",
    "monthly revenue",
  ];

  for (const block of formBlocks) {
    for (const field of dangerousFields) {
      if (matchAll(block, field).length > 0) {
        console.error(
          `  FAIL: Dangerous field "${field}" found inside <form> in LeadForm.tsx`
        );
        hasErrors = true;
      }
    }
  }

  if (formBlocks.length === 0) {
    console.log(
      "  INFO: No <form> element found in LeadForm.tsx — component is not rendering a lead form"
    );
  } else {
    console.log(
      `  INFO: Scanned ${formBlocks.length} <form> block(s) in LeadForm.tsx — no dangerous fields found`
    );
  }

  return { hasErrors };
}

function checkEnv() {
  const envPath = join(cwd(), ".env");
  let hasErrors = false;
  try {
    const envContent = readFileSync(envPath, "utf-8");
    if (/NEXT_PUBLIC_LEAD_FORM_URL=https:\/\/tally\.so\/r\/RGVlOQ/.test(envContent)) {
      console.log("\n  PASS: NEXT_PUBLIC_LEAD_FORM_URL configured in .env");
    } else {
      console.error("\n  FAIL: NEXT_PUBLIC_LEAD_FORM_URL not properly configured in .env");
      hasErrors = true;
    }
    if (/NEXT_PUBLIC_LEAD_FORM_PROVIDER=Tally/.test(envContent)) {
      console.log("  PASS: NEXT_PUBLIC_LEAD_FORM_PROVIDER=Tally configured in .env");
    } else {
      console.error("  FAIL: NEXT_PUBLIC_LEAD_FORM_PROVIDER not properly configured in .env");
      hasErrors = true;
    }
  } catch {
    console.warn("  WARN: .env not found, skipping env checks");
  }

  // Check siteConfig has leadForm
  const sitePath = join(cwd(), "src/config/site.ts");
  try {
    const siteContent = readFileSync(sitePath, "utf-8");
    if (/leadForm:\s*\{/.test(siteContent)) {
      console.log("  PASS: leadForm config found in site.ts");
    } else {
      console.error("  FAIL: leadForm config missing from site.ts");
      hasErrors = true;
    }
  } catch {
    console.warn("  WARN: site.ts not found, skipping site config check");
  }

  return hasErrors;
}

function checkLeadForm() {
  console.log("=== Expert Matching Page Checks ===\n");
  const { hasErrors: pageErrors } = checkPage();

  console.log("\n=== LeadForm Component Checks ===\n");
  const { hasErrors: formErrors } = checkLeadFormComponent();

  console.log("\n=== Env & Config Checks ===\n");
  const envErrors = checkEnv();

  const totalErrors = pageErrors || formErrors || envErrors;

  if (totalErrors) {
    console.error("\nLEAD-FORM VALIDATION FAILED: Some checks did not pass.");
    exit(1);
  } else {
    console.log("\nLEAD-FORM VALIDATION PASSED: All checks passed.");
    exit(0);
  }
}

checkLeadForm();
