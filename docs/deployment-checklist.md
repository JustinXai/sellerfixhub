# SellerFixHub Deployment Checklist

This document defines the mandatory checks before and after any deployment to prevent regressions and ensure consistency.

---

## 1. Project Guard

Before executing any command, verify you are in the correct project directory.

### Mandatory Pre-flight Check
```bash
pwd
```
**Expected output:** `/opt/sellerfixhub`

### Identity Verification
```bash
grep -R "SellerFixHub" -n src/config/site.ts package.json public/llms.txt 2>/dev/null || true
```

**Expected:** `SellerFixHub` appears in `site.ts`, `package.json`, and/or `llms.txt`

### Wrong Project Abort
If any of these appear in output, **STOP IMMEDIATELY**:
- `rutaapi.com`
- `link-ai`
- `AI API Doctor`
- `/home/ubuntu/infra/landing`
- Any path outside `/opt/sellerfixhub`

---

## 2. Pre-edit Baseline

Before making any changes, capture the current state:

```bash
# Verify correct directory
pwd

# Check git status (if available)
git status || true

# List top-level structure
find . -maxdepth 2 -type f | sort | head -100

# Confirm project identity
grep -R "SellerFixHub" -n src/config/site.ts package.json public/llms.txt 2>/dev/null || true
```

---

## 3. Validation Gate

**Every change** must pass all validation checks before deployment.

```bash
# Run in order - stop on first failure
npm run lint
npm run check:claims
npm run check:content
npm run check:links
npm run check:lead-form
npm run check:ui-content
npm run build
npm run validate
```

### Validation Definitions

| Check | What it validates |
|-------|-------------------|
| `lint` | TypeScript/ESLint syntax and unused imports |
| `check:claims` | No forbidden marketing claims (guaranteed approval, etc.) |
| `check:content` | Issue data completeness (slugs, descriptions, FAQs) |
| `check:links` | Internal links reference valid slugs |
| `check:lead-form` | Tally form embed, safety notices, no dangerous fields |
| `check:ui-content` | Trust content present, forbidden words absent |
| `build` | Next.js production build succeeds |
| `validate` | All of the above in sequence |

---

## 4. Deployment Gate

UI, content, or metadata changes **require** full cache clearing and rebuild.

```bash
# 1. Clear Next.js build cache
rm -rf .next

# 2. Stop running container
docker compose down

# 3. Build with no cache (ensures fresh build)
docker compose build --no-cache

# 4. Start container
docker compose up -d

# 5. Verify container is running
docker compose ps
```

**Important:** The `--no-cache` flag is mandatory for content/UI changes to ensure the new code is baked into the image.

---

## 5. Public Verification Gate

**Required after every deployment.** Do not skip this step.

### Basic Health Check
```bash
curl -sI https://sellerfixhub.com/ | head -10
```
**Expected:** `HTTP/2 200`

### Required Content Check
```bash
curl -s https://sellerfixhub.com/ | grep -iE "SellerFixHub|Independent seller recovery guide|Paste a rejection|How SellerFixHub helps" | head -50
```
**Expected:** All phrases present in HTML

### Forbidden Content Check
```bash
curl -s https://sellerfixhub.com/ | grep -iE "Paste your platform issue message|How It Works|>G<|>T<|guaranteed approval|100% reinstatement|official partner|internal escalation" && echo "BAD" || echo "PASS"
```
**Expected:** `PASS` (no forbidden phrases)

---

## 6. SEO Files Gate

Verify robots.txt and sitemaps are accessible and properly formatted.

### robots.txt
```bash
curl -s https://sellerfixhub.com/robots.txt
```
**Expected:** Multiline format with `User-Agent: *`, `Allow: /`, and sitemap URLs

### Sitemap XML
```bash
curl -sI https://sellerfixhub.com/sitemap.xml | head -10
curl -s https://sellerfixhub.com/sitemap.xml | head -20
```
**Expected:** `200 OK`, `content-type: application/xml`, contains `<urlset` and `sellerfixhub.com`

### Sitemap Static XML
```bash
curl -sI https://sellerfixhub.com/sitemap-static.xml | head -10
curl -s https://sellerfixhub.com/sitemap-static.xml | head -20
```
**Expected:** `200 OK`, `content-type: application/xml`

---

## 7. Lead Form Gate

Verify Tally form integration and safety notices.

```bash
curl -s https://sellerfixhub.com/services/expert-matching/ | grep -iE "tally.so/embed/RGVlOQ|tally.so/r/RGVlOQ|Do not submit passwords|does not guarantee" | head -30
```

**Required phrases:**
- `tally.so/embed/RGVlOQ` - Tally embed present
- `tally.so/r/RGVlOQ` - Fallback link present
- `Do not submit passwords` - Safety notice present
- `does not guarantee` - Disclaimer present

---

## 8. Forbidden Changes

The following changes are **prohibited** unless explicitly requested:

| Forbidden | Reason |
|-----------|--------|
| Modify Caddyfile | Affects reverse proxy and SSL |
| Modify Docker port mapping | Breaks existing deployments |
| Modify DNS | May cause downtime |
| Modify robots/sitemap structure | Breaks SEO indexing |
| Add payment/login/database | Scope creep |
| Display providers as partners | Legal/compliance risk |
| Add `guaranteed approval` | Forbidden claim |
| Add `100% reinstatement` | Forbidden claim |
| Add `official partner` | Forbidden claim |
| Access `/home/ubuntu/infra/landing` | Wrong project |
| Access RutaAPI/LinkAI/AI API Doctor | Wrong project |

---

## 9. Done Definition

A task is **complete only when ALL of the following are true**:

### Local Validation
- [ ] `npm run lint` passes
- [ ] `npm run check:claims` passes
- [ ] `npm run check:content` passes
- [ ] `npm run check:links` passes
- [ ] `npm run check:lead-form` passes
- [ ] `npm run check:ui-content` passes
- [ ] `npm run build` succeeds
- [ ] `npm run validate` passes

### Deployment
- [ ] `docker compose down` completed
- [ ] `docker compose build --no-cache` succeeded
- [ ] `docker compose up -d` succeeded
- [ ] `docker compose ps` shows container running

### Public URL Verification
- [ ] `curl -sI https://sellerfixhub.com/` returns `200 OK`
- [ ] Required phrases present in public HTML
- [ ] No forbidden phrases in public HTML
- [ ] `robots.txt` accessible and correct
- [ ] `sitemap.xml` returns `200 OK` with valid XML
- [ ] `sitemap-static.xml` returns `200 OK` with valid XML
- [ ] Expert Matching page has Tally form and safety notices

---

## 10. Historical Issues Prevented

This checklist addresses the following past issues:

| Issue | Prevention |
|-------|------------|
| Wrong project context | Section 1: Project Guard |
| Local-only validation | Section 5: Public Verification Gate |
| Docker/Next.js cache pollution | Section 4: Deployment Gate |
| Missing public curl verification | Section 5: Public Verification Gate |
| Broken robots/sitemap | Section 6: SEO Files Gate |
| Tally form broken | Section 7: Lead Form Gate |
| Forbidden marketing claims | Section 3: check:claims |
| Standalone G/T characters | Section 3: check:ui-content |

---

*Last updated: 2026-05-26*
