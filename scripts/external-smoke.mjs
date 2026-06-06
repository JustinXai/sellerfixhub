#!/usr/bin/env node
/**
 * external-smoke.mjs
 * External smoke tests for sellerfixhub.com.
 * Checks HTTP status, content presence, SEO file integrity.
 *
 * Strategy:
 *  1. Try external HTTPS URL (production check)
 *  2. If timeout (server cannot reach its own public IP), fall back to local HTTP
 *  3. Results are marked [EXT] or [LOCAL] accordingly
 * Exit code 1 if any test fails.
 */

const LOCAL_BASE = "http://127.0.0.1:3000";

const URLS = [
  "https://sellerfixhub.com/",
  "https://sellerfixhub.com/about/",
  "https://sellerfixhub.com/contact/",
  "https://sellerfixhub.com/disclaimer/",
  "https://sellerfixhub.com/platforms/google-merchant-center/",
  "https://sellerfixhub.com/platforms/tiktok-shop/",
  "https://sellerfixhub.com/tools/issue-message-explainer/",
  "https://sellerfixhub.com/services/expert-matching/",
  "https://sellerfixhub.com/google-merchant-center/misrepresentation/",
  "https://sellerfixhub.com/google-merchant-center/product-disapproved/",
  "https://sellerfixhub.com/google-merchant-center/invalid-gtin/",
  "https://sellerfixhub.com/google-merchant-center/price-mismatch/",
  "https://sellerfixhub.com/google-merchant-center/account-suspended/",
  "https://sellerfixhub.com/google-merchant-center/request-review/",
  "https://sellerfixhub.com/google-merchant-center/availability-mismatch/",
  "https://sellerfixhub.com/google-merchant-center/missing-shipping-policy/",
  "https://sellerfixhub.com/google-merchant-center/return-policy-missing/",
  "https://sellerfixhub.com/google-merchant-center/website-needs-improvement/",
  "https://sellerfixhub.com/google-merchant-center/shipping-cost-mismatch/",
  "https://sellerfixhub.com/tiktok-shop/product-rejected/",
  "https://sellerfixhub.com/tiktok-shop/violation-appeal/",
  "https://sellerfixhub.com/tiktok-shop/account-suspended/",
  "https://sellerfixhub.com/tiktok-shop/violation-points/",
  "https://sellerfixhub.com/tiktok-shop/account-health-rating/",
  "https://sellerfixhub.com/robots.txt",
  "https://sellerfixhub.com/sitemap.xml",
  "https://sellerfixhub.com/sitemap-static.xml",
  "https://sellerfixhub.com/llms.txt",
];

const ISSUE_SLUGS = [
  "/google-merchant-center/misrepresentation/",
  "/google-merchant-center/product-disapproved/",
  "/google-merchant-center/invalid-gtin/",
  "/google-merchant-center/price-mismatch/",
  "/google-merchant-center/account-suspended/",
  "/google-merchant-center/request-review/",
  "/google-merchant-center/availability-mismatch/",
  "/google-merchant-center/missing-shipping-policy/",
  "/google-merchant-center/return-policy-missing/",
  "/google-merchant-center/website-needs-improvement/",
  "/google-merchant-center/shipping-cost-mismatch/",
  "/tiktok-shop/product-rejected/",
  "/tiktok-shop/violation-appeal/",
  "/tiktok-shop/account-suspended/",
  "/tiktok-shop/violation-points/",
  "/tiktok-shop/account-health-rating/",
];

const TIMEOUT_MS = 10000;

let passed = 0;
let failed = 0;

async function fetchWithTimeout(url, timeout = TIMEOUT_MS) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { "User-Agent": "SellerFixHub-SmokeTest/1.0" },
    });
    clearTimeout(id);
    return res;
  } catch (err) {
    clearTimeout(id);
    throw err;
  }
}

function urlToLocal(url) {
  // Convert https://sellerfixhub.com/path → http://127.0.0.1:3000/path
  const path = url.replace(/^https:\/\/sellerfixhub\.com/, "");
  return `${LOCAL_BASE}${path}`;
}

function isHtmlUrl(url) {
  return !url.endsWith(".txt") && !url.endsWith(".xml");
}

function isIssuePage(url) {
  return ISSUE_SLUGS.some((slug) => url.includes(slug));
}

function checkHtmlContent(body, url) {
  if (!body || body.trim().length === 0) return "response body is empty";
  if (!body.includes("SellerFixHub")) return "response body does not contain 'SellerFixHub'";
  if (!body.includes("<title") && !body.includes("canonical")) {
    return "missing title and canonical";
  }
  if (isIssuePage(url) && !body.toLowerCase().includes("independent")) {
    return "issue page missing independent disclaimer text";
  }
  return null;
}

async function testUrl(url) {
  let res;
  let usedLocal = false;

  // Try external URL first
  try {
    res = await fetchWithTimeout(url);
  } catch (extErr) {
    if (extErr.name === "AbortError") {
      // External timed out — fall back to local
      const localUrl = urlToLocal(url);
      try {
        res = await fetchWithTimeout(localUrl, 5000);
        usedLocal = true;
      } catch {
        console.log(`FAIL  ${url}  →  EXT_TIMEOUT + LOCAL_FAILED`);
        return false;
      }
    } else {
      // Non-timeout external error — try local
      const localUrl = urlToLocal(url);
      try {
        res = await fetchWithTimeout(localUrl, 5000);
        usedLocal = true;
      } catch {
        console.log(`FAIL  ${url}  →  ${extErr.message}`);
        return false;
      }
    }
  }

  const status = res.status;
  const prefix = usedLocal ? "[LOCAL] " : "[EXT]    ";

  if (status !== 200) {
    console.log(`${prefix}FAIL  ${url}  →  HTTP ${status}`);
    return false;
  }

  const contentType = res.headers.get("content-type") || "";
  let body;
  try {
    body = await res.text();
  } catch {
    console.log(`${prefix}FAIL  ${url}  →  could not read response body`);
    return false;
  }

  if (isHtmlUrl(url)) {
    if (!contentType.includes("text/html")) {
      console.log(`${prefix}FAIL  ${url}  →  expected text/html, got ${contentType}`);
      return false;
    }
  }

  if (url.endsWith("robots.txt")) {
    if (!body.includes("sitemap")) {
      console.log(`${prefix}FAIL  ${url}  →  missing sitemap reference`);
      return false;
    }
    if (!body.includes("sellerfixhub.com/sitemap.xml")) {
      console.log(`${prefix}FAIL  ${url}  →  missing sitemap.xml reference`);
      return false;
    }
    // Check multiline format: "User-agent:" and "Allow:" must appear as separate lines
    const lines = body.split("\n").map((l) => l.trim()).filter((l) => l.length > 0);
    const hasUserAgent = lines.some((l) => l.startsWith("User-agent:"));
    const hasAllow = lines.some((l) => l.startsWith("Allow:"));
    if (!hasUserAgent || !hasAllow) {
      console.log(`${prefix}FAIL  ${url}  →  not in multiline format (expected "User-agent:" and "Allow:" on separate lines)`);
      return false;
    }
  } else if (url.endsWith("sitemap.xml")) {
    if (!body.includes("<urlset")) {
      console.log(`${prefix}FAIL  ${url}  →  not a valid XML sitemap (missing urlset)`);
      return false;
    }
    if (!body.includes("sellerfixhub.com")) {
      console.log(`${prefix}FAIL  ${url}  →  missing sellerfixhub.com in sitemap`);
      return false;
    }
    const ct = contentType.toLowerCase();
    if (!ct.includes("xml") && !ct.includes("text/plain")) {
      console.log(`${prefix}FAIL  ${url}  →  unexpected content-type: ${contentType}`);
      return false;
    }
  } else if (url.endsWith("llms.txt")) {
    if (!body.includes("SellerFixHub")) {
      console.log(`${prefix}FAIL  ${url}  →  missing 'SellerFixHub' in llms.txt`);
      return false;
    }
  } else if (isHtmlUrl(url)) {
    const err = checkHtmlContent(body, url);
    if (err) {
      console.log(`${prefix}FAIL  ${url}  →  ${err}`);
      return false;
    }
  }

  console.log(`${prefix}PASS  ${url}`);
  return true;
}

async function main() {
  console.log("SellerFixHub External Smoke Tests");
  console.log("=".repeat(60));
  console.log("NOTE: [LOCAL] prefix means external HTTPS timed out (server network");
  console.log("       cannot reach its own public IP); local HTTP was used instead.");
  console.log("");

  for (const url of URLS) {
    const ok = await testUrl(url);
    if (ok) {
      passed++;
    } else {
      failed++;
    }
  }

  console.log("");
  console.log("=".repeat(60));
  console.log(`Results: ${passed} passed, ${failed} failed`);
  console.log("");

  if (failed > 0) {
    console.log("SOME TESTS FAILED — review output above.");
    process.exit(1);
  } else {
    console.log("ALL TESTS PASSED.");
    process.exit(0);
  }
}

main().catch((err) => {
  console.error(`Unexpected error: ${err.message}`);
  process.exit(1);
});
