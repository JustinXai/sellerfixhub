# SellerFixHub Indexing Checklist

Guides for submitting the site to Google Search Console (GSC) and Bing Webmaster Tools.

---

## Google Search Console

### 1. Add Property

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Choose **Domain** property type
3. Enter `sellerfixhub.com`
4. Add the TXT record shown to your DNS provider
5. Wait for DNS verification (may take up to 24 hours)

> **Note:** Domain property verifies all subdomains automatically.

### 2. Submit Sitemap

1. After verification, go to **Sitemaps**
2. Enter: `sitemap.xml`
3. Click **Submit**
4. Check status after a few hours — look for "Success" or warnings

### 3. Inspect Key URLs

Use GSC's **URL Inspection** tool for:
- `https://sellerfixhub.com/`
- `https://sellerfixhub.com/google-merchant-center/misrepresentation/`
- `https://sellerfixhub.com/tiktok-shop/product-rejected/`
- `https://sellerfixhub.com/tools/issue-message-explainer/`
- `https://sellerfixhub.com/services/expert-matching/`

Each should show "URL is on Google" within days.

---

## Bing Webmaster Tools

### 1. Add Site

1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Sign in with a Microsoft account
3. Click **Add Site**
4. Choose **Domain** or **Subdomain** — enter `sellerfixhub.com`
5. Verify via one of: CNAME, HTML file, DNS TXT, or import from GSC

### 2. Import from Google Search Console (Recommended)

If you verified in GSC, you can import the settings:
1. In Bing Webmaster → **Import from Google Search Console**
2. Authorize the connection
3. This imports site settings, sitemaps, and crawl data

### 3. Submit Sitemap Manually

1. Go to **Sitemaps**
2. Enter: `https://sellerfixhub.com/sitemap.xml`
3. Click **Submit**

---

## Monitoring (Daily / Weekly)

### What to Watch in GSC

| Signal | What It Means | Action |
|--------|---------------|--------|
| Pages indexed | How many pages Google has indexed | Check for missing pages |
| Crawled — currently not indexed | Google crawled but chose not to index | Review coverage report |
| Discovered — currently not indexed | Google found the URL but hasn't crawled it | Wait; check sitemap |
| Coverage errors | GSC-reported crawl errors | Fix and resubmit |
| Top queries | Search terms driving traffic | Monitor impressions |
| Impressions / Clicks | Organic search performance | Track weekly |

### Indexing Timeline

- **0–3 days:** GSC may show "Discovered — currently not indexed"
- **3–7 days:** Most pages should move to "URL is on Google"
- **14–30 days:** Full index coverage expected

Do **not** make frequent URL changes in the first 30 days. URL changes require sitemap updates and 301-redirects.

---

## If Pages Are Not Indexed

1. Check `robots.txt` — ensure it does not block the pages
2. Check page metadata — ensure `<meta name="robots" content="index, follow">`
3. Check canonical tags — ensure pointing to the correct URL
4. Submit via GSC URL Inspection → Request Indexing
5. Check Coverage report for specific error messages

---

## Important Notes

- SellerFixHub is fully static — no server-side rendering issues to worry about
- All issue pages include canonical tags and FAQ structured data
- The sitemap is auto-generated and includes all public URLs
- Do not add `noindex` meta tags accidentally
- Avoid changing page URLs after initial submission — URL changes require 301-redirects and sitemap updates
