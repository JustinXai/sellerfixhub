#!/usr/bin/env node
/**
 * check-links.mjs
 * Checks that all relatedSlugs in issues.ts reference existing slugs.
 * Exit code 1 if broken links are found.
 */

import { readFileSync } from "fs";
import { cwd, exit } from "process";
import { join } from "path";

function checkLinks() {
  const issuesPath = join(cwd(), "src/data/issues.ts");
  let content;
  try {
    content = readFileSync(issuesPath, "utf-8");
  } catch (err) {
    console.error(`Cannot read ${issuesPath}: ${err.message}`);
    exit(1);
  }

  // Extract all defined slugs
  const slugMatches = content.match(/slug:\s*["']([^"']+)["']/g);
  if (!slugMatches) {
    console.error("No slugs found in issues.ts");
    exit(1);
  }

  const allSlugs = new Set(slugMatches.map((m) => m.match(/["']([^"']+)["']/)[1]));
  console.log(`Defined slugs: ${[...allSlugs].join(", ")}`);

  // Extract all relatedSlugs references
  // Match: relatedSlugs: [ "slug1", "slug2", ... ]
  const relatedPattern = /relatedSlugs:\s*\[[\s\S]*?\]\s*[,;]/g;
  const relatedMatches = [...content.matchAll(relatedPattern)];

  let hasErrors = false;

  for (const match of relatedMatches) {
    const block = match[0];
    const slugInBlockMatches = block.match(/["']([^"']+)["']/g);
    if (!slugInBlockMatches) continue;

    for (const ref of slugInBlockMatches) {
      const slug = ref.match(/["']([^"']+)["']/)[1];
      if (!allSlugs.has(slug)) {
        console.error(`BROKEN LINK: relatedSlugs contains "${slug}" which does not exist as a defined slug`);
        hasErrors = true;
      }
    }
  }

  if (hasErrors) {
    console.error("\nLINK VALIDATION FAILED: Broken relatedSlugs references found.");
    exit(1);
  } else {
    console.log("\nLINK VALIDATION PASSED: All relatedSlugs reference existing issues.");
    exit(0);
  }
}

checkLinks();
