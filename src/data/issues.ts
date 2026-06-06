export interface IssueFAQ {
  question: string;
  answer: string;
  link?: string;
}

export interface Issue {
  slug: string;
  platform: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  updatedAt: string;
  aiSummary: string;
  quickAnswer: string;
  meaning: string;
  commonCauses: string[];
  checklist: string[];
  evidence: string[];
  recoverySteps: string[];
  mistakes: string[];
  whenToAskExpert: string[];
  faqs: IssueFAQ[];
  relatedSlugs: string[];
}

export const issues: Issue[] = [
  {
    slug: "misrepresentation",
    platform: "google-merchant-center",
    h1: "Google Merchant Center Misrepresentation: What Sellers Should Check Before Review",
    metaTitle: "Google Merchant Center Misrepresentation: What Sellers Should Check",
    metaDescription:
      "Understand Google Merchant Center misrepresentation issues, what to check on your website and product data, and what evidence to prepare before requesting review.",
    updatedAt: "2026-06-02",
    aiSummary:
      "Misrepresentation in Google Merchant Center means Google believes the information about your business or products does not accurately reflect what is actually being sold. This can include mismatched pricing, shipping, return policies, product claims, or unclear business identity. Google may suspend your account or products when misrepresentation is detected.",
    quickAnswer:
      "Misrepresentation usually means the information in your Merchant Center account or product feed does not match what Google finds on your website. Check your business identity, pricing, shipping, return policy, and product landing pages for consistency. Do not request another review before evidence is ready—platform decisions are made by the platform, and no approval can be guaranteed.",
    meaning:
      "Google's misrepresentation policy requires that all information about your business and products be clear, accurate, and consistent across your Merchant Center account, product feed, and website. When Google detects a mismatch between what you represent and what actually exists, your account or products may be suspended. This is a policy-level issue, not a technical error.",
    commonCauses: [
      "Unclear or inconsistent business identity or contact information",
      "Pricing, shipping, return, or refund information that differs between feed and website",
      "Product claims or descriptions that do not match the landing page",
      "Missing or conflicting policy pages on the website",
      "Unsupported trust claims or promotions that Google flags as misleading",
      "Mismatch between Merchant Center product data and website content",
      "Website pages that are inaccessible, incomplete, or lack required information",
    ],
    checklist: [
      "Find the specific misrepresentation reason in your Merchant Center notification",
      "Check your business information: name, address, phone, contact page",
      "Compare feed prices and shipping costs against your website landing pages",
      "Review return and refund policy pages for accuracy and completeness",
      "Verify that every product claim on your landing page matches the feed data",
      "Confirm your website is accessible and all pages load correctly",
      "Ensure policy pages (shipping, returns, contact) are current and consistent",
    ],
    evidence: [
      "Screenshot of the Merchant Center misrepresentation notice with the cited reason",
      "Business and contact information page from your website",
      "Shipping, return, and refund policy pages from your website",
      "Product landing pages that show accurate information",
      "Pricing and availability evidence from your website",
      "Before-and-after screenshots if you have already corrected mismatched information",
      "Any supplier or authorization documentation if brand or authenticity was cited",
    ],
    recoverySteps: [
      "Step 1: Read the notice and identify which information Google flagged as mismatched",
      "Step 2: Audit your Merchant Center account settings for business information accuracy",
      "Step 3: Compare every product feed attribute against the corresponding landing page",
      "Step 4: Fix all mismatches in your feed data and website content",
      "Step 5: Verify that shipping, return, and refund pages are complete and accurate",
      "Step 6: Gather evidence for each corrected item before requesting review",
      "Step 7: Submit the review request with organized evidence and a factual explanation",
      "Step 8: Monitor the outcome and address any follow-up feedback from Google",
    ],
    mistakes: [
      "Submitting a review request without fixing the specific mismatched information",
      "Using a generic or template appeal that does not address the cited reason",
      "Fixing only the flagged product without checking similar products across your feed",
      "Changing the website without updating the corresponding feed attributes",
      "Not documenting your changes before requesting another review",
    ],
    whenToAskExpert: [
      "The misrepresentation involves brand authorization or intellectual property issues",
      "You have multiple product categories with different compliance requirements",
      "You are unsure whether your supplier or authenticity documentation is sufficient",
      "Your account has been suspended for misrepresentation more than once",
      "Google's notice does not clearly state which specific information is mismatched",
    ],
    faqs: [
      {
        question: "What does Google Merchant Center misrepresentation mean?",
        answer:
          "Misrepresentation means Google found that the information in your Merchant Center account or product feed does not accurately reflect your business or products. This includes mismatched prices, shipping policies, product descriptions, or unclear business identity. Platform decisions are made by Google, and no outcome can be guaranteed.",
      },
      {
        question: "How do I fix Google Merchant Center misrepresentation?",
        answer:
          "Identify the specific mismatch cited in the notice, then fix both your Merchant Center account settings and your product feed data to match your actual website content. Ensure all landing pages, policy pages, and product attributes are consistent before requesting another review.",
      },
      {
        question: "Can I request review after fixing misrepresentation?",
        answer:
          "Yes, but only after you have fully corrected the mismatch and gathered supporting evidence. Requesting review before fixing the root cause can result in another rejection and increased scrutiny.",
      },
      {
        question: "What evidence should I prepare before a misrepresentation review?",
        answer:
          "Prepare screenshots of the corrected Merchant Center settings, accurate product feed data, matching landing pages, complete policy pages, and any supplier or authorization documents. Organize evidence by the specific reason cited in the notice.",
      },
      {
        question: "Can misrepresentation suspend my Merchant Center account?",
        answer:
          "Yes. Misrepresentation is a policy-level violation that can result in account suspension, not just product disapproval. Google may suspend your entire account if the misrepresentation is severe or repeated. Account-level issues typically require more comprehensive evidence than product-level fixes.",
      },
    ],
    relatedSlugs: ["account-suspended", "appeal-rejected", "request-review", "product-disapproved"],
  },
  {
    slug: "product-disapproved",
    platform: "google-merchant-center",
    h1: "Google Merchant Center Disapproved Products: What Sellers Should Check",
    metaTitle: "Google Merchant Center Disapproved Products: Why Products Are Disapproved",
    metaDescription:
      "Understand why products are disapproved in Google Merchant Center, what product data and landing page issues to check, and how to prepare for review.",
    updatedAt: "2026-06-02",
    aiSummary:
      "A disapproved product in Google Merchant Center means your product listing does not meet Google's data quality standards or advertising policies. Unlike account suspension, disapproval applies to specific products. Common causes include inaccurate pricing, mismatched landing pages, missing identifiers, policy-restricted categories, and incorrect product attributes. Fix the specific issue and resubmit.",
    quickAnswer:
      "A disapproved product means your listing does not meet Google's standards for Shopping ads. Check the specific disapproval reason in Merchant Center first, then compare your product data, landing page, pricing, availability, and identifiers against Google's requirements. Prepare evidence before requesting a product review. Approval is not guaranteed.",
    meaning:
      "Product disapproval is a product-level enforcement action. It means one or more specific products in your Merchant Center feed do not meet Google's requirements. Unlike account suspension, disapproved products do not affect your entire account, but each must be fixed individually before it can appear in Shopping ads. The key to recovery is identifying and correcting the exact attribute or policy cited in the notice.",
    commonCauses: [
      "Inaccurate or mismatched price between feed and landing page",
      "Inconsistent availability status between feed and actual product page",
      "Missing or incorrect GTIN, MPN, or brand identifier",
      "Landing page does not match the product described in the feed",
      "Policy-restricted product category without required attributes or approval",
      "Product disapproved due to missing or incorrect attributes",
      "Image that does not meet Google's image requirements",
      "Promotional text, missing required attributes, or duplicate listings in the feed",
      "Feed app mapping issues causing incorrect attribute values",
    ],
    checklist: [
      "Find the specific disapproval reason in Merchant Center for each affected product",
      "Compare the product data in your feed against the actual landing page",
      "Verify that price, availability, and shipping match between feed and website",
      "Check whether GTIN, MPN, brand, and title attributes are correct",
      "Confirm the product category and whether it requires additional attributes",
      "Review the product image against Google's image policy requirements",
      "Check whether the product is affected by a feed app mapping issue",
    ],
    evidence: [
      "Screenshot of the product disapproval reason from Merchant Center",
      "Affected product SKU or item ID from your feed",
      "Product feed output showing all current attribute values",
      "Screenshot of the product landing page",
      "Product data fields (price, availability, identifiers, title, image URL)",
      "Pricing and availability proof from your website",
      "Category and policy notes if the product is in a restricted category",
    ],
    recoverySteps: [
      "Step 1: Log into Merchant Center and find the specific disapproval reason for each product",
      "Step 2: Identify which attribute or policy is causing the disapproval",
      "Step 3: Fix the product data in your source feed (Shopify, WooCommerce, etc.)",
      "Step 4: Verify the landing page matches the corrected feed data exactly",
      "Step 5: Submit the updated feed to Merchant Center",
      "Step 6: Wait for Google to review (typically within 1–2 business days)",
      "Step 7: If still disapproved, check whether a policy reason applies",
    ],
    mistakes: [
      "Ignoring the specific disapproval reason and guessing at the fix",
      "Only checking the product title without verifying all other attributes",
      "Submitting a product for review before fixing the underlying data issue",
      "Using promotional text in titles or descriptions (e.g., free shipping, best price)",
      "Not updating the landing page to match the corrected feed data",
      "Assuming all similar products are fine without checking them individually",
    ],
    whenToAskExpert: [
      "You have multiple disapproved products across many categories",
      "The disapproval reason is vague or references an attribute you cannot find",
      "You believe the disapproval is a false positive after double-checking your data",
      "The product falls in a restricted category and you are unsure about compliance",
      "You need help auditing your entire product feed for hidden data quality issues",
    ],
    faqs: [
      {
        question: "Why are my Google Merchant Center products disapproved?",
        answer:
          "Products are disapproved when they do not meet Google's data quality or policy requirements. Common reasons include mismatched prices, missing identifiers, policy violations, incorrect images, or landing page mismatches. Check the specific disapproval reason in Merchant Center to identify the exact issue for each product.",
      },
      {
        question: "How do I fix disapproved products in Merchant Center?",
        answer:
          "Find the specific reason cited in Merchant Center, fix the product data in your source feed, and verify the landing page matches the corrected data. Submit the updated feed and wait for Google's review. Do not request review before the fix is complete and reflected in your feed.",
      },
      {
        question: "Can one disapproved product affect my account?",
        answer:
          "Product disapproval is product-level and does not automatically trigger account suspension. However, a pattern of repeated disapprovals without corrective action can eventually lead to an account-level review. Fix each disapproval individually and promptly.",
      },
      {
        question: "What should I check before requesting product review?",
        answer:
          "Before requesting a product review, confirm the specific disapproval reason, verify the product data in your feed has been corrected, and ensure the landing page matches the corrected data. Gather screenshots of the corrected feed data and landing page as evidence.",
      },
      {
        question: "What is the difference between product disapproval and account suspension?",
        answer:
          "Product disapproval affects only specific listings and is the most common enforcement action. Account suspension blocks your entire Merchant Center account and all associated products. Account suspension is more severe and requires a more comprehensive response with stronger evidence.",
      },
    ],
    relatedSlugs: ["missing-product-identifiers", "identifier-exists", "shopify-feed-errors", "account-suspended", "request-review"],
  },
  {
    slug: "invalid-gtin",
    platform: "google-merchant-center",
    h1: "Google Merchant Center Invalid GTIN: What It Means and How to Fix It",
    metaTitle: "Google Merchant Center Invalid GTIN – SellerFixHub",
    metaDescription:
      "Got an invalid GTIN error in Google Merchant Center? Learn what GTINs are, why they fail validation, and how to fix your product listings.",
    updatedAt: "2026-05-25",
    aiSummary:
      "An invalid GTIN error means the barcode number you provided does not pass Google's validation checks. This can happen with typos, wrong product codes, or using GTINs that do not belong to your products.",
    quickAnswer:
      "Your GTIN (barcode number) failed validation. Verify you are using the correct GTIN for each specific product—typically found on the product barcode or packaging. Do not guess or make up numbers.",
    meaning:
      "GTIN (Global Trade Item Number) is a unique identifier for products. Google validates GTINs against official databases. If your GTIN does not match the product, is malformed, or is not registered, your listing will be rejected.",
    commonCauses: [
      "Typo in the GTIN field",
      "Using a GTIN that belongs to a different product",
      "GTIN is not registered or recognized in Google's database",
      "Product does not have a valid GTIN (e.g., custom-made items)",
      "GTIN belongs to your supplier, not your product",
      "Mismatched GTIN and MPN combination",
    ],
    checklist: [
      "Locate the correct GTIN on the actual product packaging or barcode",
      "Verify the GTIN matches the specific product (not similar items)",
      "Confirm the product is not custom-made (custom items do not need GTIN)",
      "Cross-check with your supplier if you are a reseller",
      "Ensure the MPN and brand are also correct",
    ],
    evidence: [
      "Photo of the product barcode (EAN, UPC, or ISBN)",
      "Product packaging showing the GTIN",
      "Supplier invoice with the product's GTIN",
      "Screenshot of your feed data showing the GTIN field",
    ],
    recoverySteps: [
      "Step 1: Find the actual GTIN on the physical product or its packaging",
      "Step 2: Enter the exact GTIN in your product feed",
      "Step 3: If the product is custom or a bundle, set gtin to empty and add 'identifier_exists' = 'no'",
      "Step 4: Resubmit the product feed",
      "Step 5: If validation still fails, check if the GTIN is registered in Gs1.org",
    ],
    mistakes: [
      "Making up or guessing a GTIN",
      "Using the supplier's GTIN when you are a reseller and not authorized",
      "Using the same GTIN for multiple similar products",
      "Not setting identifier_exists to 'no' for products without valid GTINs",
      "Not checking if the product is actually a bundle that needs different handling",
    ],
    whenToAskExpert: [
      "You are unsure whether you are authorized to use a specific GTIN",
      "The GTIN appears correct but validation keeps failing",
      "You sell custom or hand-made products without standard GTINs",
      "You need help with identifier_exists settings for bundles",
    ],
    faqs: [
      {
        question: "What is a GTIN?",
        answer:
          "GTIN (Global Trade Item Number) is a unique 8, 12, 13, or 14-digit number used to identify products. It appears as a barcode (EAN, UPC, or ISBN) on product packaging.",
      },
      {
        question: "What if my product does not have a GTIN?",
        answer:
          "Products without GTINs (custom items, bundles, or products without standard barcodes) can still be listed. Set 'identifier_exists' to 'no' and provide MPN and brand instead.",
      },
      {
        question: "Where can I find my GTIN?",
        answer:
          "GTINs are printed on product packaging as barcodes (EAN-13, UPC-A, etc.). For books, the ISBN is the GTIN.",
      },
    ],
    relatedSlugs: ["misrepresentation", "product-disapproved", "price-mismatch"],
  },
  {
    slug: "price-mismatch",
    platform: "google-merchant-center",
    h1: "Google Merchant Center Price Mismatch: Causes and How to Resolve It",
    metaTitle: "Google Merchant Center Price Mismatch – SellerFixHub",
    metaDescription:
      "Google Merchant Center shows a price mismatch error? Learn why it happens, how to verify your pricing, and get your Shopping ads running again.",
    updatedAt: "2026-05-25",
    aiSummary:
      "A price mismatch error occurs when the price in your Merchant Center feed does not match the price shown on your landing page. Google requires exact price matching between feed data and checkout page.",
    quickAnswer:
      "Your feed price does not match your landing page price. Check the exact price on your product page (including currency and sale pricing), update your feed, and resubmit.",
    meaning:
      "Google requires that the price shown in your Shopping ad exactly matches the price customers find on your landing page at checkout. Even small differences—such as a missing sale price or wrong currency—can trigger a mismatch.",
    commonCauses: [
      "Sale price is active in feed but not on landing page (or vice versa)",
      "Currency mismatch between feed and landing page",
      "Price changed recently and feed was not updated",
      "Shipping cost included in feed price but not on landing page",
      "Different prices for logged-in vs. logged-out users on landing page",
      "Price on landing page requires a promo code",
      "Tax included/excluded inconsistently between feed and page",
    ],
    checklist: [
      "Check the exact price shown in your Merchant Center feed",
      "Visit your landing page as a guest (not logged in)",
      "Verify the price at checkout, not just the product page",
      "Confirm currency is consistent (USD vs. USD, etc.)",
      "Check if a sale price is active in the feed",
      "Verify there are no required promo codes to see the advertised price",
    ],
    evidence: [
      "Screenshot of the price in your Merchant Center feed",
      "Screenshot of the product page price for guest users",
      "Screenshot of the price at checkout",
      "Screenshot of any active sale pricing in your feed",
    ],
    recoverySteps: [
      "Step 1: Identify the exact price discrepancy",
      "Step 2: Update your product feed to match the landing page",
      "Step 3: If the landing page price is wrong, fix it first, then update the feed",
      "Step 4: Remove sale pricing from feed if not active on the site",
      "Step 5: Ensure checkout price matches product page price",
      "Step 6: Resubmit feed and request re-review",
    ],
    mistakes: [
      "Only checking the product page without verifying the checkout price",
      "Leaving old sale prices in the feed after the sale ends",
      "Assuming a promo code requirement is acceptable for the advertised price",
      "Not testing the landing page as a guest user",
    ],
    whenToAskExpert: [
      "You run dynamic pricing and cannot fix the mismatch quickly",
      "Your pricing is affected by membership tiers or logged-in discounts",
      "The mismatch involves complex currency or tax rules",
    ],
    faqs: [
      {
        question: "What counts as a price mismatch?",
        answer:
          "Any difference between the price in your Merchant Center feed and the price shown at checkout on your landing page—including currency, sale pricing, shipping, and tax.",
      },
      {
        question: "Does Google check the price at checkout?",
        answer:
          "Yes. Google visits your landing page and checks the price at checkout. If it differs from your feed, your product may be disapproved.",
      },
    ],
    relatedSlugs: ["misrepresentation", "product-disapproved", "invalid-gtin"],
  },
  {
    slug: "product-rejected",
    platform: "tiktok-shop",
    h1: "TikTok Shop Product Rejected: What It Means and How to Recover",
    metaTitle: "TikTok Shop Product Rejected – SellerFixHub",
    metaDescription:
      "Your TikTok Shop product was rejected. Learn the common reasons for rejection, how to identify the cause, and steps to get your listing approved.",
    updatedAt: "2026-05-25",
    aiSummary:
      "A TikTok Shop product rejection means your listing does not meet TikTok's content, safety, or policy standards. This can include restricted categories, image issues, missing certification, or prohibited product types.",
    quickAnswer:
      "TikTok rejected your product listing. Check the rejection reason in your seller center, fix the product data or images, and resubmit. Products must meet TikTok's category restrictions, image guidelines, and documentation requirements.",
    meaning:
      "TikTok Shop has strict content and category policies. Products can be rejected for policy violations, missing documentation, restricted category placement, or inaccurate listing data. Rejection is product-level, not account-level, but repeated rejections can affect your shop health score.",
    commonCauses: [
      "Product falls into a restricted or prohibited category",
      "Image shows prohibited content or does not meet guidelines",
      "Missing required certifications or documents",
      "Brand or product name violates TikTok policies",
      "Product description contains restricted keywords",
      "Price is below TikTok's minimum threshold",
      "Listing data is incomplete or inconsistent",
      "Product is in a category requiring prior TikTok approval",
    ],
    checklist: [
      "Find the specific rejection reason in TikTok Seller Center",
      "Check if your product category requires special approval",
      "Review your product images for compliance",
      "Verify all required documents are uploaded",
      "Check product description for restricted keywords",
      "Confirm the price meets TikTok's minimum requirements",
    ],
    evidence: [
      "Screenshot of the rejection reason from TikTok Seller Center",
      "Product images that comply with TikTok's image guidelines",
      "Certification documents (if required for your category)",
      "Screenshot of the current product listing",
    ],
    recoverySteps: [
      "Step 1: Review the rejection reason carefully in Seller Center",
      "Step 2: Edit the product to address the specific issue",
      "Step 3: Upload compliant images (white background, no text overlays)",
      "Step 4: Add required documents if the category requires certification",
      "Step 5: Resubmit the product for review",
      "Step 6: Wait 1–3 business days for TikTok's decision",
    ],
    mistakes: [
      "Ignoring the specific rejection reason",
      "Using the same images that were flagged",
      "Not checking if your category requires pre-approval",
      "Listing products without required certifications",
      "Using brand names that are trademarked by others",
    ],
    whenToAskExpert: [
      "Your product is in a restricted category and you are unsure about requirements",
      "The rejection reason is vague or does not match your listing",
      "You need help understanding TikTok's category-specific rules",
      "You have had multiple rejections and want to improve your shop health score",
    ],
    faqs: [
      {
        question: "How long does TikTok Shop product review take?",
        answer:
          "TikTok typically reviews new products within 1–3 business days. Category expansions or products requiring documentation may take longer.",
      },
      {
        question: "Can I appeal a TikTok Shop product rejection?",
        answer:
          "Yes. You can edit the product to address the issue and resubmit. If you believe the rejection is incorrect, you can contact TikTok Seller Support.",
      },
    ],
    relatedSlugs: ["violation-appeal"],
  },
  {
    slug: "violation-appeal",
    platform: "tiktok-shop",
    h1: "TikTok Shop Violation and Account Health: How to Appeal and Recover",
    metaTitle: "TikTok Shop Violation Appeal – SellerFixHub",
    metaDescription:
      "Received a TikTok Shop violation notice? Learn how to appeal, what evidence to prepare, and how to protect your account health score.",
    updatedAt: "2026-05-25",
    aiSummary:
      "A TikTok Shop violation means your account or listing has breached platform policies. Violations can result in product removal, reduced visibility, or account suspension. Appeals require documented evidence and a clear corrective action plan.",
    quickAnswer:
      "A violation means TikTok found your listing or account activity violated their policies. Check the violation details, gather evidence (screenshots, invoices, documentation), and submit an appeal through Seller Center with a clear explanation.",
    meaning:
      "TikTok Shop violations cover a wide range of policy breaches including counterfeit products, policy misrepresentation, poor service metrics, intellectual property infringement, and prohibited product sales. Each violation carries a different penalty based on severity and history.",
    commonCauses: [
      "Customer complaints about product not as described",
      "Late shipments or fulfillment delays",
      "Counterfeit or unauthorized brand products",
      "Intellectual property infringement claims",
      "Violation of TikTok's prohibited products list",
      "Fake reviews or review manipulation",
      "Price or promotion violations",
      "Account information inconsistencies",
    ],
    checklist: [
      "Review the violation details and severity in Seller Center",
      "Check your account health score and history",
      "Identify affected orders and customer complaints",
      "Gather evidence: invoices, shipping records, product photos",
      "Prepare a corrective action plan",
      "Draft a clear, factual appeal response",
    ],
    evidence: [
      "Screenshot of the violation notice",
      "Supplier invoices proving product authenticity",
      "Shipping and tracking records",
      "Product photos matching the listing",
      "Customer communication records",
      "Screenshots of your corrected listing (if applicable)",
    ],
    recoverySteps: [
      "Step 1: Review the violation notice and check for patterns",
      "Step 2: Address any immediate customer issues",
      "Step 3: Gather evidence for the appeal",
      "Step 4: Submit the appeal through TikTok Seller Center",
      "Step 5: Include a clear corrective action plan",
      "Step 6: Wait for TikTok's response (typically 3–7 business days)",
      "Step 7: Implement preventive measures to avoid future violations",
    ],
    mistakes: [
      "Submitting an appeal without reviewing the violation carefully",
      "Blaming customers instead of presenting evidence",
      "Not documenting your evidence before submitting",
      "Appealing multiple times with the same information",
      "Continuing the same behavior that caused the violation",
    ],
    whenToAskExpert: [
      "Your account is at risk of permanent suspension",
      "The violation involves intellectual property claims",
      "You have received multiple violations in a short period",
      "You are unsure whether your supplier documentation is sufficient for an appeal",
      "You need help drafting an effective appeal response",
    ],
    faqs: [
      {
        question: "Can TikTok Shop suspend my account permanently?",
        answer:
          "Yes. Repeated or severe violations can result in permanent account suspension. Each appeal is reviewed individually, but TikTok's decision is final.",
      },
      {
        question: "How does a violation affect my TikTok Shop health score?",
        answer:
          "Violations negatively impact your Shop Health score. A lower score reduces your visibility in TikTok Shop search and recommendations. Maintaining a high score requires consistent compliance.",
      },
      {
        question: "What is a TikTok Shop corrective action plan?",
        answer:
          "A corrective action plan outlines the steps you will take to prevent future violations. It should be specific, actionable, and include evidence of past compliance. TikTok reviewers assess these plans when deciding on appeals.",
      },
    ],
    relatedSlugs: ["product-rejected"],
  },
  {
    slug: "account-suspended",
    platform: "google-merchant-center",
    h1: "Google Merchant Center Account Suspended: What Sellers Should Fix Before Review",
    metaTitle: "Google Merchant Center Account Suspended: How to Fix a Suspension",
    metaDescription:
      "Learn what to fix when a Google Merchant Center account is suspended, how to prepare evidence, and what to review before requesting another account review.",
    updatedAt: "2026-06-02",
    aiSummary:
      "A Google Merchant Center account suspension means Google has blocked your entire account due to policy violations. All Shopping ads and free listings are paused until the suspension is lifted. Account suspension is higher risk than a single product issue and requires a more thorough response. Platform decisions are made by Google, and no reinstatement can be guaranteed.",
    quickAnswer:
      "An account suspension means Google blocked your Merchant Center account due to one or more policy violations. Identify the exact reason in the suspension notice, fix all root causes in your account settings, product feed, and website, then gather evidence before requesting another review. Platform decisions are made by the platform. Do not submit a generic appeal without evidence.",
    meaning:
      "Account suspension is Google's most severe enforcement action in Merchant Center. Unlike product-level disapproval which affects only specific listings, a suspension blocks all product listings across your entire account and subaccounts. Google reviews each suspension individually and the decision is at Google's discretion. Recovery requires a thorough understanding of the specific violations cited.",
    commonCauses: [
      "Repeated or severe misrepresentation violations across multiple products",
      "Selling products that violate Google's restricted or prohibited product policies",
      "Unresolved website content issues detected during merchant verification",
      "Missing or inaccurate business identity information in Merchant Center",
      "Pattern of product data mismatches between feed and landing pages",
      "Failure to complete merchant verification when requested by Google",
      "Repeated product disapprovals without corrective action",
    ],
    checklist: [
      "Read the suspension notice carefully and identify every specific reason cited",
      "Determine whether the issue is account-level, product-level, or website-level",
      "Audit your business identity settings in Merchant Center",
      "Review all product feed data for accuracy and policy compliance",
      "Check your website landing pages, policy pages, and checkout flow",
      "Verify that all products match their landing pages exactly",
      "Complete any pending merchant verification requirements",
      "Document every change made before requesting review",
    ],
    evidence: [
      "Screenshot of the Merchant Center suspension notice with all cited reasons",
      "Business and contact information from your Merchant Center account settings",
      "Screenshots of corrected product listings in your feed",
      "Product invoices or purchase receipts from verified suppliers",
      "Photos of actual products matching the listing descriptions exactly",
      "Screenshots of corrected landing pages with accurate product information",
      "Documentation of completed merchant verification status",
    ],
    recoverySteps: [
      "Step 1: Read the suspension notice and note every cited reason individually",
      "Step 2: Identify whether each issue is account-level, product-level, or website-level",
      "Step 3: Fix all account settings, product feed data, and website content for the cited reasons",
      "Step 4: Ensure your website policy pages are complete, accurate, and accessible",
      "Step 5: Complete merchant verification if it has not been done",
      "Step 6: Gather organized evidence for each corrected issue",
      "Step 7: Submit the review request from the specific link in your suspension notice",
      "Step 8: Wait for Google's response and address any follow-up feedback",
    ],
    mistakes: [
      "Submitting a review request without fixing all cited violations first",
      "Creating a new Merchant Center account to bypass the suspension",
      "Using a generic or copy-paste appeal without addressing the specific notice reasons",
      "Fixing only the single flagged product without checking all similar products",
      "Requesting review before merchant verification is complete",
      "Submitting evidence that does not directly address the cited reason",
    ],
    whenToAskExpert: [
      "The suspension involves misrepresentation and you need help gathering supplier documentation",
      "You have multiple linked accounts and cannot determine which triggered the flag",
      "Your review request has been rejected and you need to understand the next steps",
      "The suspension involves restricted product categories or intellectual property questions",
      "Your account has been suspended more than once and you need a comprehensive fix plan",
    ],
    faqs: [
      {
        question: "How do I fix a Google Merchant Center suspension?",
        answer:
          "Identify the specific reason cited in the suspension notice, then fix all root causes in your account settings, product feed, and website. Gather evidence for each fix and submit a review request only when you are confident everything has been addressed. Platform decisions are made by the platform, and no outcome can be guaranteed.",
      },
      {
        question: "Why was my Google Merchant Center account suspended?",
        answer:
          "Suspensions are caused by policy violations such as misrepresentation, restricted products, missing business information, or unresolved product data issues. The specific reason is cited in your suspension notice. Review every reason carefully before requesting another review.",
      },
      {
        question: "Can I request review after fixing a suspension?",
        answer:
          "Yes, but only after you have fully addressed every reason cited in the suspension notice and gathered supporting evidence. Submitting a review before making meaningful corrections can result in another rejection and longer review times.",
      },
      {
        question: "What evidence should I prepare before requesting review?",
        answer:
          "Prepare organized evidence for each cited reason: corrected Merchant Center settings, accurate product feed data, matching landing pages, complete policy pages, supplier invoices, product photos, and merchant verification confirmation. Evidence should directly address each specific violation cited.",
      },
      {
        question: "Is misrepresentation a common reason for account suspension?",
        answer:
          "Yes. Misrepresentation is one of the most common reasons for account suspension in Google Merchant Center. It includes mismatched pricing, product descriptions, shipping policies, or business identity information between your Merchant Center account and your website.",
      },
    ],
    relatedSlugs: ["misrepresentation", "request-review", "appeal-rejected", "product-disapproved"],
  },
  {
    slug: "request-review",
    platform: "google-merchant-center",
    h1: "Google Merchant Center Request Review: What to Prepare Before You Submit",
    metaTitle: "Google Merchant Center Request Review: What to Check Before Submitting",
    metaDescription:
      "Use this Google Merchant Center request review checklist to confirm issue details, product data, website changes, and evidence before submitting another review.",
    updatedAt: "2026-05-27",
    aiSummary:
      "A request for review in Google Merchant Center is a formal submission asking Google to reconsider a suspension, disapproval, or policy violation. Success depends on having already fixed the root cause and providing clear, organized supporting evidence.",
    quickAnswer:
      "Before requesting a review in Google Merchant Center, confirm you have fixed the exact issue cited in the notification, completed merchant verification, and gathered organized evidence. Submit through the specific action link in your Merchant Center notice. Be specific about what was wrong and what you fixed. Platform decisions are made by the platform. Approval is not guaranteed.",
    meaning:
      "A review request is your formal communication to Google asking them to re-evaluate a decision. Google does not guarantee that submitting a review will reverse a decision. The reviewer looks at whether the root cause has been addressed and whether your evidence supports the change.",
    commonCauses: [
      "Incomplete fixes before submitting the review",
      "Missing or illegible supporting documentation",
      "Not addressing all reasons cited in the original notification",
      "Submitting the same information that was previously rejected",
      "Using a generic or template appeal without case-specific details",
      "Failing to complete required merchant verification first",
      "Submitting through the wrong channel or form",
      "Rushing the submission without organizing evidence clearly",
    ],
    checklist: [
      "Confirm you have fixed the exact issue cited in the notification",
      "Gather all relevant screenshots and documentation",
      "Organize evidence by issue type (e.g., product photos, invoices, policy screenshots)",
      "Complete any pending merchant verification requirements",
      "Draft a clear, factual explanation of what was wrong and what was fixed",
      "Verify your website landing pages are fully compliant",
      "Check your product feed for any remaining errors before submitting",
    ],
    evidence: [
      "Screenshot of the original notification or disapproval reason",
      "Screenshots of corrected product data in your feed",
      "Supplier invoices proving product authenticity and source",
      "Photos of actual products (matching the listing exactly)",
      "Screenshots of corrected landing pages",
      "Documentation of any policy changes made on your website",
    ],
    recoverySteps: [
      "Step 1: Read the original notification and note every specific reason cited",
      "Step 2: Fix each reason individually in your feed and account settings",
      "Step 3: Gather case-specific evidence for each cited reason",
      "Step 4: Complete merchant verification if it has not been done",
      "Step 5: Submit the review request from the specific link in your notification",
      "Step 6: Wait 3–7 business days for Google's response",
      "Step 7: If rejected again, carefully read the new feedback before submitting again",
    ],
    mistakes: [
      "Submitting without having fixed the root cause first",
      "Sending the same documentation that was previously rejected",
      "Writing an emotional or accusatory appeal message",
      "Submitting a review for a product that still has active policy violations",
      "Not completing merchant verification before requesting a review",
    ],
    whenToAskExpert: [
      "Your review request has been rejected multiple times",
      "The notification references policy areas you are unfamiliar with",
      "You need help organizing evidence for a complex misrepresentation case",
      "You are unsure whether your supplier documentation is sufficient",
    ],
    faqs: [
      {
        question: "When should I request a review in Google Merchant Center?",
        answer:
          "Request a review only after you have fixed the exact issue cited in the notification, gathered organized evidence, and confirmed merchant verification is complete. Requesting review before making meaningful changes can result in rejection and increased scrutiny for future submissions.",
      },
      {
        question: "What should I check before requesting review?",
        answer:
          "Before requesting review, confirm: the exact issue cited in the notice has been fully fixed, all product data in your feed is corrected and matches your website, all website landing pages and policy pages are accurate, merchant verification is complete, and you have organized evidence ready for each cited reason.",
      },
      {
        question: "Can I request review again after a rejection?",
        answer:
          "Yes. After a rejection, read the specific feedback, fix all remaining issues, and submit again only when ready. Multiple submissions without meaningful changes can lead to longer review times. Use the specific review link in your rejection notification.",
      },
      {
        question: "Should I request account review or product review?",
        answer:
          "Use account review for account-level issues such as suspension. Use product review for product-level disapprovals. If your account is suspended and products are also disapproved, address the account suspension first since account reinstatement may automatically restore product eligibility.",
      },
    ],
    relatedSlugs: ["account-suspended", "misrepresentation", "product-disapproved", "appeal-rejected"],
  },
  {
    slug: "availability-mismatch",
    platform: "google-merchant-center",
    h1: "Google Merchant Center Availability Mismatch: Causes and Recovery Checklist",
    metaTitle: "Google Merchant Center Availability Mismatch – SellerFixHub",
    metaDescription:
      "Google detected a mismatch between your product's availability status and your landing page. Learn what causes it and how to fix your listings quickly.",
    updatedAt: "2026-05-27",
    aiSummary:
      "An availability mismatch means the stock status in your Merchant Center feed does not match what Google finds when it visits your landing page. Google checks your landing page to verify product availability, and discrepancies can lead to disapproved products.",
    quickAnswer:
      "Your feed says a product is in stock but your landing page says otherwise, or vice versa. Verify the exact availability text on your landing page, update your feed to match, and resubmit the product for review.",
    meaning:
      "Google compares the availability attribute in your product feed against the actual availability shown on your landing page. If they do not match—including differences in status text, hidden availability conditions, or out-of-stock pages—your product will be disapproved.",
    commonCauses: [
      "Feed shows 'in stock' but landing page shows 'out of stock'",
      "Feed shows 'out of stock' but landing page allows purchase",
      "Availability text format in feed differs from the landing page wording",
      "Product was temporarily out of stock but feed was not updated",
      "Region-specific availability differs between feed and landing page",
      "Backorder status is listed differently in feed versus the website",
      "Availability depends on login or membership status on the landing page",
      "Inventory system updates are not reflected in the product feed",
    ],
    checklist: [
      "Check the exact availability value in your Merchant Center feed",
      "Visit your landing page as a guest (not logged in) to verify stock status",
      "Confirm the availability text matches one of Google's accepted values",
      "Check if the product is available only to logged-in or member users",
      "Verify if regional availability differs between feed and site",
      "Check your inventory management system for any pending updates",
      "Review any pending backorder or pre-order status",
    ],
    evidence: [
      "Screenshot of the availability value in your Merchant Center feed",
      "Screenshot of your landing page availability status (for guest users)",
      "Screenshot of checkout availability (if product is purchasable)",
      "Screenshot of your inventory management system (if applicable)",
      "Screenshot of any regional availability settings",
    ],
    recoverySteps: [
      "Step 1: Identify the exact availability mismatch between feed and landing page",
      "Step 2: Update your product feed to reflect the correct availability status",
      "Step 3: If the landing page is wrong, fix the website first, then update the feed",
      "Step 4: Ensure the availability text uses a value Google accepts",
      "Step 5: Resubmit the product feed to Merchant Center",
      "Step 6: Wait 1–2 business days for the product to be re-reviewed",
    ],
    mistakes: [
      "Only checking the product page without checking checkout availability",
      "Leaving the old availability status in the feed after selling out",
      "Assuming a membership-only availability condition satisfies Google",
      "Not testing the landing page as a guest user before submitting",
      "Submitting a feed update without first verifying the website is accurate",
    ],
    whenToAskExpert: [
      "Your inventory system and website are integrated and require technical changes",
      "The mismatch involves complex regional or conditional availability rules",
      "Google keeps finding mismatches despite your corrections",
    ],
    faqs: [
      {
        question: "What are Google's accepted availability values?",
        answer:
          "Google accepts: 'in stock', 'out of stock', 'preorder', 'backorder', 'limited availability', and 'available for order' (varies by region). Use exactly one of these values in your feed.",
      },
      {
        question: "Does Google check availability at checkout?",
        answer:
          "Yes. Google may simulate a purchase to verify availability. If the product cannot be purchased at the advertised price and availability, it may be disapproved.",
      },
      {
        question: "How long does it take for a corrected product to be re-approved?",
        answer:
          "Typically 1–2 business days after resubmitting your feed, though it can be faster for simple availability fixes.",
      },
      {
        question: "Can availability mismatches cause account suspension?",
        answer:
          "Repeated or widespread availability mismatches across many products can trigger a more serious account review. Fix each product individually and keep your feed accurate.",
      },
    ],
    relatedSlugs: ["product-disapproved", "price-mismatch", "shipping-cost-mismatch"],
  },
  {
    slug: "missing-shipping-policy",
    platform: "google-merchant-center",
    h1: "Missing Shipping Policy in Google Merchant Center: What to Fix Before Review",
    metaTitle: "Missing Shipping Policy – SellerFixHub",
    metaDescription:
      "Google requires a shipping policy on your website. Learn what to include, where to place it, and how to fix a missing or incomplete shipping policy.",
    updatedAt: "2026-05-27",
    aiSummary:
      "Google Merchant Center requires that your website has a clear, accessible shipping policy that covers processing time, shipping options, and delivery estimates. A missing or incomplete shipping policy can lead to product disapprovals and complications during merchant verification.",
    quickAnswer:
      "Add a shipping policy page to your website that includes processing time, shipping methods, costs, and estimated delivery times. Link it from your product pages and ensure it covers all the countries you ship to.",
    meaning:
      "Google requires a shipping policy to ensure customers know what to expect after purchasing. The policy must be publicly accessible, cover all shipping destinations you support, and match the shipping information in your product feed.",
    commonCauses: [
      "No shipping policy page exists on the website",
      "Shipping policy page exists but is not accessible or linked",
      "Policy only covers domestic shipping but international destinations are in the feed",
      "Policy does not include processing or handling time",
      "Shipping costs in the policy do not match the feed",
      "Policy page is behind a login or requires account creation",
      "Policy is outdated or missing information about carrier options",
    ],
    checklist: [
      "Confirm whether a shipping policy page exists on your website",
      "Verify the policy is publicly accessible without login",
      "Check that the policy covers all countries listed in your product feed",
      "Review whether processing time and handling days are clearly stated",
      "Verify shipping costs match what you have in your product feed",
      "Check that estimated delivery times are realistic and current",
      "Ensure the policy page is linked from your product listing pages",
    ],
    evidence: [
      "Screenshot of your shipping policy page URL",
      "Screenshot of the shipping policy content (all sections visible)",
      "Screenshot of links to the shipping policy from product pages",
      "Screenshot of shipping costs in your Merchant Center feed",
      "Screenshot of shipping options listed on your website",
    ],
    recoverySteps: [
      "Step 1: Create or update your shipping policy page to meet Google's requirements",
      "Step 2: Ensure the policy covers all countries and territories in your feed",
      "Step 3: Include processing time, shipping methods, costs, and delivery estimates",
      "Step 4: Link the shipping policy from your product pages and footer",
      "Step 5: Verify the policy costs match your product feed",
      "Step 6: Submit for re-review in Merchant Center",
    ],
    mistakes: [
      "Adding a policy that only covers domestic shipping while selling internationally",
      "Creating a policy that does not match the shipping costs in your feed",
      "Hiding the shipping policy behind a login or checkout wall",
      "Using vague language like 'shipping costs vary' without specifics",
      "Not linking the policy from your product pages",
    ],
    whenToAskExpert: [
      "You sell internationally and need to create a comprehensive multi-region policy",
      "Your shipping costs vary by product weight or location and need structured coverage",
      "You are unsure whether your existing policy meets Google's minimum requirements",
    ],
    faqs: [
      {
        question: "What must a shipping policy include for Google Merchant Center?",
        answer:
          "Your policy should include processing time, shipping methods available, shipping costs by region or method, estimated delivery times, and the countries or regions you ship to. It must be publicly accessible.",
      },
      {
        question: "Does the shipping policy need to match every product in my feed?",
        answer:
          "It should be consistent with the shipping information in your feed. If different products have different shipping rules, you can create separate policy pages and link each product category appropriately.",
      },
      {
        question: "Where should I link the shipping policy?",
        answer:
          "Google recommends linking the shipping policy from each product page and from your website footer. The link should be clearly visible without requiring a login or completing a purchase.",
      },
      {
        question: "What if I offer free shipping for all products?",
        answer:
          "That can be stated in your shipping policy. Just ensure the policy accurately reflects your actual shipping practices and matches what you have in your product feed.",
      },
    ],
    relatedSlugs: ["product-disapproved", "price-mismatch", "shipping-cost-mismatch", "return-policy-missing"],
  },
  {
    slug: "return-policy-missing",
    platform: "google-merchant-center",
    h1: "Return Policy Missing in Google Merchant Center: What Sellers Should Check",
    metaTitle: "Return Policy Missing – SellerFixHub",
    metaDescription:
      "Your website needs a return policy for Google Merchant Center compliance. Learn what to include, where to place it, and how to fix a missing return policy.",
    updatedAt: "2026-05-27",
    aiSummary:
      "Google Merchant Center requires that your website has a visible, accessible return and refund policy. A missing or incomplete return policy can cause product disapprovals and create complications during merchant verification and account reviews.",
    quickAnswer:
      "Add a return and refund policy page to your website that covers how customers can return items, the return window, refund process, and any conditions. Link it from your product pages and footer.",
    meaning:
      "Google requires a return policy to ensure customers have clear expectations about returns before purchasing. The policy must be publicly accessible, include key details about the return process, and be consistent with any return-related claims in your product listings.",
    commonCauses: [
      "No return policy page exists on the website",
      "Return policy exists but is not publicly accessible",
      "Policy does not specify the return window or time frame",
      "Policy does not cover how refunds are processed",
      "Return policy only applies to certain product categories",
      "Policy is missing conditions for non-returnable items",
      "Return policy page is not linked from product pages",
    ],
    checklist: [
      "Check if a return and refund policy page exists on your website",
      "Verify the policy is publicly accessible without login or purchase",
      "Confirm the policy specifies a return window (e.g., 30 days)",
      "Review whether the policy covers refund processing and timelines",
      "Check if the policy distinguishes between returnable and non-returnable items",
      "Verify the policy is linked from product pages and footer",
    ],
    evidence: [
      "Screenshot of your return policy page URL",
      "Screenshot of the full return policy content",
      "Screenshot of links to the return policy from product pages",
      "Screenshot of any category-specific return rules",
      "Screenshot showing the policy is accessible without login",
    ],
    recoverySteps: [
      "Step 1: Create or update your return and refund policy page",
      "Step 2: Include the return window, process, refund timeline, and any conditions",
      "Step 3: Cover both returnable and non-returnable items clearly",
      "Step 4: Link the return policy from product pages and website footer",
      "Step 5: Verify consistency with any return-related claims in your feed",
      "Step 6: Submit for re-review in Merchant Center if needed",
    ],
    mistakes: [
      "Creating a policy with vague language like 'returns accepted' without specifics",
      "Hiding the return policy behind a login or purchase confirmation",
      "Having a policy that only covers some product categories without disclosure",
      "Not specifying the return window or refund processing time",
      "Leaving the policy unlinked from product pages",
    ],
    whenToAskExpert: [
      "You need help creating a policy that covers both domestic and international returns",
      "Your return policy needs to account for different rules across product categories",
      "You are unsure whether your existing policy meets Google's minimum standards",
    ],
    faqs: [
      {
        question: "What must a return policy include for Google Merchant Center?",
        answer:
          "Your policy should include the return window, how to initiate a return, refund processing timelines, conditions for returns (e.g., items must be unused), and any restocking fees. It must be publicly accessible.",
      },
      {
        question: "What if I do not accept returns?",
        answer:
          "You can state this in your return policy. Simply be clear and explicit that all sales are final or that only certain items can be returned under specific conditions. Misleading 'no returns' without clear disclosure can itself be a policy violation.",
      },
      {
        question: "Where should I link the return policy?",
        answer:
          "Link it from each product page, your checkout flow, and your website footer. The link should be visible without requiring a login or account creation.",
      },
      {
        question: "Can I have different return policies for different product categories?",
        answer:
          "Yes, as long as each policy is clearly accessible and accurately reflects the actual return practices for those products. Link each product to its applicable policy.",
      },
    ],
    relatedSlugs: ["product-disapproved", "missing-shipping-policy", "misrepresentation"],
  },
  {
    slug: "website-needs-improvement",
    platform: "google-merchant-center",
    h1: "Website Needs Improvement in Google Merchant Center: What It Means and How to Prepare",
    metaTitle: "Website Needs Improvement – SellerFixHub",
    metaDescription:
      "Google flagged your website as needing improvement. Learn what this means, what specific issues Google looks for, and how to prepare your site for review.",
    updatedAt: "2026-05-27",
    aiSummary:
      "The 'website needs improvement' notice means Google found issues with your website's content, structure, or customer-facing policies during a merchant review. These issues can prevent your products from being approved even if your feed data is correct.",
    quickAnswer:
      "Review the specific website issues cited by Google. Ensure your landing pages are complete, policies are accessible, checkout works smoothly, and your business identity is clearly displayed. Fix all cited issues before requesting re-review.",
    meaning:
      "Google evaluates your website as part of merchant verification and product review. Issues such as incomplete product pages, missing policies, broken checkout flows, unclear business identity, or suspicious site elements can trigger this notice. The fix requires updating your website, not just your product feed.",
    commonCauses: [
      "Product pages are missing key information (description, images, price, availability)",
      "Checkout process is broken, incomplete, or requires unusual steps",
      "Business identity is unclear (no contact info, no physical address)",
      "Missing or incomplete return, shipping, or refund policies",
      "Website contains broken links or pages that do not load",
      "Promotional content or claims that violate Google's policies",
      "Currency or payment options do not match the product feed",
      "Website appears new, thin, or lacks sufficient content",
    ],
    checklist: [
      "Review the specific improvement areas cited in the Google notification",
      "Check that all product pages have complete information and images",
      "Test the full checkout flow as a guest buyer",
      "Verify business contact information is visible (address, email, phone)",
      "Confirm all required policies are accessible and complete",
      "Check for broken links, missing pages, or loading errors",
      "Review your website for any policy-violating content or claims",
      "Verify the website currency matches your Merchant Center feed",
    ],
    evidence: [
      "Screenshot of the 'website needs improvement' notification",
      "Screenshots of your corrected product pages",
      "Screenshots of your complete checkout flow (as a guest)",
      "Screenshot of your business contact information page",
      "Screenshots of your accessible return and shipping policy pages",
    ],
    recoverySteps: [
      "Step 1: Read the specific website issues cited by Google carefully",
      "Step 2: Prioritize fixing the cited issues on your website",
      "Step 3: Test the complete customer journey from product page to checkout",
      "Step 4: Ensure all required policies are present and linked",
      "Step 5: Verify your business information is accurate and publicly visible",
      "Step 6: Request re-review through Merchant Center",
      "Step 7: Wait for Google's response and address any new feedback",
    ],
    mistakes: [
      "Only fixing product feed data without updating the website",
      "Making cosmetic changes without fixing the underlying content issues",
      "Submitting for review before the website fixes are complete",
      "Assuming a simple fix will satisfy Google's requirements without testing",
      "Not reviewing your website from the perspective of a new customer",
    ],
    whenToAskExpert: [
      "The website issues are extensive and involve technical or structural changes",
      "You are unsure how to meet Google's business identity requirements",
      "Your website shares infrastructure with other suspended accounts",
      "Google has cited the same website issues multiple times",
    ],
    faqs: [
      {
        question: "What does 'website needs improvement' mean for my products?",
        answer:
          "It means Google found issues with your website that need to be resolved before your products can be approved. The issues are with your website, not just your feed data.",
      },
      {
        question: "Can I still run Shopping ads while my website is under improvement?",
        answer:
          "No. Products linked to a website flagged for improvement will not be approved. You need to fix the website issues and request re-review before products can run.",
      },
      {
        question: "How long do I have to fix website issues?",
        answer:
          "Google does not publish a specific deadline, but it is best to fix issues promptly and request re-review. Prolonged unresolved issues can escalate to account-level review.",
      },
      {
        question: "Will Google re-check my entire website or only the flagged areas?",
        answer:
          "Google may review the entire website during the re-review process. Ensure all areas meet policy requirements, not just the ones specifically cited.",
      },
    ],
    relatedSlugs: ["account-suspended", "misrepresentation", "missing-shipping-policy", "return-policy-missing"],
  },
  {
    slug: "shipping-cost-mismatch",
    platform: "google-merchant-center",
    h1: "Google Merchant Center Shipping Cost Mismatch: Causes and Evidence Checklist",
    metaTitle: "Google Merchant Center Shipping Cost Mismatch – SellerFixHub",
    metaDescription:
      "Google detected a shipping cost mismatch between your product feed and your website. Learn what causes it, how to verify your shipping costs, and how to fix it.",
    updatedAt: "2026-05-27",
    aiSummary:
      "A shipping cost mismatch occurs when the shipping price or handling fee in your Merchant Center feed does not match what Google finds on your landing page or checkout. This is a common feed error that leads to product disapprovals.",
    quickAnswer:
      "Your feed shipping cost does not match what customers actually pay at checkout. Verify the exact shipping cost on your website, update your feed to match, and resubmit for review.",
    meaning:
      "Google requires that shipping costs in your product feed exactly match the shipping costs shown on your landing page at checkout. Even small differences in handling fees, flat-rate shipping, or free shipping conditions can trigger a mismatch.",
    commonCauses: [
      "Handling fee is included in feed but not on the landing page",
      "Feed shows free shipping but the landing page charges for shipping",
      "Feed shipping cost does not account for promotional free shipping conditions",
      "Shipping cost differs between product page and checkout",
      "Currency mismatch between feed shipping cost and website",
      "Shipping cost updated on website but not in the feed",
      "Regional shipping costs differ but feed only shows one value",
      "Shipping cost in feed includes tax but website checkout does not",
    ],
    checklist: [
      "Check the exact shipping cost value in your Merchant Center feed",
      "Visit your landing page and proceed to checkout as a guest",
      "Verify the shipping cost at the cart and checkout stages",
      "Confirm there are no hidden handling fees not reflected in the feed",
      "Check if free shipping conditions are correctly reflected",
      "Verify currency is consistent between feed and website",
      "Check regional shipping cost variations if applicable",
    ],
    evidence: [
      "Screenshot of the shipping cost in your Merchant Center feed",
      "Screenshot of the shipping cost shown on the product page",
      "Screenshot of the shipping cost at checkout (cart stage)",
      "Screenshot of any free shipping threshold conditions on the site",
      "Screenshot of regional shipping cost settings (if applicable)",
      "Screenshot of shipping cost total at checkout",
    ],
    recoverySteps: [
      "Step 1: Identify the exact shipping cost discrepancy between feed and site",
      "Step 2: Update your product feed to match the website's actual shipping cost",
      "Step 3: If the website is wrong, fix it first, then update the feed",
      "Step 4: Verify free shipping conditions are accurately reflected in the feed",
      "Step 5: Resubmit the product feed to Merchant Center",
      "Step 6: Wait 1–2 business days for the product to be re-reviewed",
    ],
    mistakes: [
      "Only checking the product page and not the checkout shipping cost",
      "Assuming 'free shipping' in the feed satisfies all conditions on the site",
      "Not accounting for handling fees in the feed",
      "Submitting an update before verifying the website is accurate",
      "Leaving regional shipping cost mismatches unaddressed",
    ],
    whenToAskExpert: [
      "Your shipping costs vary by weight, location, or product combination in complex ways",
      "The mismatch involves conditional free shipping thresholds",
      "Google keeps finding mismatches despite corrections",
    ],
    faqs: [
      {
        question: "What counts as a shipping cost mismatch?",
        answer:
          "Any difference between the shipping cost in your feed and the actual cost shown at checkout—including handling fees, flat-rate charges, free shipping conditions, and regional variations.",
      },
      {
        question: "Does Google check shipping costs at checkout?",
        answer:
          "Yes. Google simulates a purchase and checks the total cost including shipping. If the shipping cost differs from your feed, the product will be disapproved.",
      },
      {
        question: "What if I offer free shipping above a certain order value?",
        answer:
          "You can use the 'shipping weight table' or set conditions in your feed. However, the base shipping cost must still match what a customer below the threshold would pay.",
      },
      {
        question: "How long does it take for a corrected product to be re-approved?",
        answer:
          "Typically 1–2 business days after resubmitting your feed with the corrected shipping cost.",
      },
    ],
    relatedSlugs: ["price-mismatch", "availability-mismatch", "product-disapproved"],
  },
  {
    slug: "account-suspended",
    platform: "tiktok-shop",
    h1: "TikTok Shop Account Suspended: What Sellers Should Check Before Appeal",
    metaTitle: "TikTok Shop Account Suspended – SellerFixHub",
    metaDescription:
      "Your TikTok Shop account has been suspended. Learn what typically triggers this, what evidence to gather, and how to prepare an effective appeal.",
    updatedAt: "2026-05-27",
    aiSummary:
      "A TikTok Shop account suspension means TikTok has blocked your seller account due to policy violations, repeated issues, or account irregularities. This prevents you from listing new products, fulfilling orders, or accessing your account dashboard.",
    quickAnswer:
      "A suspension means TikTok has blocked your account. Read the suspension notice for the specific reason, address the root cause, gather evidence (order records, communication logs, product documentation), and submit an appeal through Seller Center.",
    meaning:
      "TikTok Shop account suspension is a serious enforcement action that blocks your entire seller account. Unlike product-level rejections, a suspension affects all listings and order management. TikTok reviews appeals individually and their decision is final.",
    commonCauses: [
      "Multiple policy violations accumulated over time",
      "Selling counterfeit or unauthorized brand products",
      "Consistently poor account health metrics (late shipments, high cancellation rate)",
      "Customer disputes or chargebacks exceeding acceptable thresholds",
      "Intellectual property infringement claims from brand owners",
      "Attempting to sell prohibited or restricted products",
      "Sharing account access or credentials with unauthorized parties",
      "Failure to provide required seller documentation during verification",
    ],
    checklist: [
      "Read the suspension notice carefully for the specific reason cited",
      "Review your account health score and recent violation history",
      "Identify affected orders and customer complaints",
      "Check which products may have triggered the suspension",
      "Gather order records, shipping logs, and customer communication",
      "Collect supplier invoices and product authenticity documentation",
      "Prepare a clear corrective action plan for your appeal",
    ],
    evidence: [
      "Screenshot of the suspension notice from TikTok Seller Center",
      "Order records showing fulfillment timelines",
      "Shipping tracking records and proof of on-time delivery",
      "Supplier invoices proving product authenticity",
      "Customer communication records (messages, dispute responses)",
      "Screenshots of your corrected listings (if applicable)",
      "Documentation of corrective actions taken",
    ],
    recoverySteps: [
      "Step 1: Review the suspension notice and note every cited reason",
      "Step 2: Address immediate customer issues (refunds, undelivered orders)",
      "Step 3: Gather supporting evidence for each cited violation",
      "Step 4: Prepare a clear corrective action plan",
      "Step 5: Submit the appeal through TikTok Seller Center",
      "Step 6: Wait 5–10 business days for TikTok's response",
      "Step 7: Implement preventive measures to avoid future violations",
    ],
    mistakes: [
      "Submitting an appeal without addressing the root cause",
      "Creating a new TikTok Shop account to bypass the suspension",
      "Sharing account credentials with others who caused the violations",
      "Blaming customers or third-party logistics without evidence",
      "Appealing multiple times with the same information",
    ],
    whenToAskExpert: [
      "Your account faces permanent suspension risk",
      "The suspension involves intellectual property or counterfeit claims",
      "You have accumulated violation points and need help understanding your account health",
      "You need guidance on drafting an effective corrective action plan",
    ],
    faqs: [
      {
        question: "Can I create a new TikTok Shop account after a suspension?",
        answer:
          "TikTok's policies prohibit creating new accounts to bypass a suspension. Attempting to do so can result in permanent ban of your business from the platform.",
      },
      {
        question: "How long does TikTok take to review a suspension appeal?",
        answer:
          "TikTok typically responds to suspension appeals within 5–10 business days. Complex cases may take longer, especially if additional documentation is required.",
      },
      {
        question: "Will my existing orders be fulfilled during the appeal?",
        answer:
          "Generally, a suspended account cannot process new orders. Work with TikTok Seller Support to address any pending orders before or during your appeal.",
      },
      {
        question: "Does a suspension affect my shop health score permanently?",
        answer:
          "Violations that led to the suspension will remain on your record. Once reinstated, maintaining a high account health score requires consistent compliance going forward.",
      },
    ],
    relatedSlugs: ["violation-appeal", "account-health-rating", "violation-points", "product-rejected"],
  },
  {
    slug: "violation-points",
    platform: "tiktok-shop",
    h1: "TikTok Shop Violation Points: What They Mean and What to Prepare",
    metaTitle: "TikTok Shop Violation Points – SellerFixHub",
    metaDescription:
      "TikTok Shop assigns violation points for policy breaches. Learn how points accumulate, what thresholds trigger penalties, and how to reduce your violation risk.",
    updatedAt: "2026-05-27",
    aiSummary:
      "TikTok Shop uses a point system to track policy violations. Accumulating points beyond certain thresholds triggers penalties ranging from reduced visibility to account suspension. Understanding how points work helps you prioritize which issues to fix first.",
    quickAnswer:
      "Violation points are assigned for each policy breach. Different violation types carry different point values. Accumulating too many points can lead to reduced account privileges or suspension. Check your current points in Seller Center, fix the issues that caused them, and appeal if you believe points were assigned incorrectly.",
    meaning:
      "TikTok Shop's violation point system tracks the severity and frequency of policy breaches. Each violation adds points to your account. Higher point totals result in progressively severe penalties, from listing restrictions to reduced visibility to account suspension.",
    commonCauses: [
      "Late shipment of orders (most common point trigger)",
      "High order cancellation rate",
      "Product not as described complaints from customers",
      "Intellectual property infringement claims",
      "Listing prohibited or restricted products",
      "Violation of TikTok Shop promotional policies",
      "Failure to respond to customer messages within required timeframe",
      "Inaccurate product listings or category mismatches",
    ],
    checklist: [
      "Check your current violation points and history in Seller Center",
      "Identify which violation types have accumulated the most points",
      "Review recent orders with late shipments or cancellations",
      "Check customer complaints for product not-as-described patterns",
      "Review your product listings for prohibited content or inaccurate information",
      "Check your response time metrics for customer messages",
      "Assess your shop health score alongside your violation points",
    ],
    evidence: [
      "Screenshot of your current violation points from Seller Center",
      "Screenshot of recent violation details and dates",
      "Shipping tracking records for late shipments (proof of carrier delays)",
      "Order records and fulfillment timeline documentation",
      "Product photos and listing screenshots (proof of accurate listing)",
      "Customer communication records showing your responses",
    ],
    recoverySteps: [
      "Step 1: Review your full violation history in Seller Center",
      "Step 2: Prioritize fixing the violation types that carry the most points",
      "Step 3: Improve fulfillment speed and reduce late shipment rate",
      "Step 4: Audit product listings for accuracy and policy compliance",
      "Step 5: Respond to customer messages within TikTok's required timeframe",
      "Step 6: Monitor your points weekly to track improvement",
      "Step 7: Appeal specific violations if you have evidence they were assigned incorrectly",
    ],
    mistakes: [
      "Focusing only on the most recent violation without reviewing history",
      "Not monitoring violation points until approaching a threshold",
      "Blaming third-party logistics without providing carrier evidence",
      "Ignoring low-severity violations that accumulate over time",
      "Not documenting corrective actions before submitting an appeal",
    ],
    whenToAskExpert: [
      "You are approaching a suspension threshold and need to act quickly",
      "You believe some violation points were assigned incorrectly",
      "You have recurring issues with a specific violation type",
      "You need help creating a systematic process to reduce future violations",
    ],
    faqs: [
      {
        question: "How many violation points lead to account suspension on TikTok Shop?",
        answer:
          "TikTok does not publicly disclose exact thresholds. However, accumulating points rapidly or having unresolved high-severity violations increases the risk of suspension. Monitor your points regularly in Seller Center.",
      },
      {
        question: "Do violation points expire on TikTok Shop?",
        answer:
          "Violation points typically have a rolling window. Points from older violations may carry less weight over time if you maintain consistent compliance. Check your current points and history for details.",
      },
      {
        question: "Can I appeal individual violation points?",
        answer:
          "Yes. If you believe a specific violation was assigned incorrectly, you can appeal it through Seller Center with supporting evidence such as shipping records or product photos.",
      },
      {
        question: "What is the fastest way to reduce violation points?",
        answer:
          "Resolve the root causes of the violations and appeal specific points with evidence. Consistently maintaining good account health metrics over time is the most reliable approach to reducing your violation risk.",
      },
    ],
    relatedSlugs: ["violation-appeal", "account-health-rating", "account-suspended", "product-rejected"],
  },
  {
    slug: "account-health-rating",
    platform: "tiktok-shop",
    h1: "TikTok Shop Account Health Rating: What Sellers Should Watch Before Appeal",
    metaTitle: "TikTok Shop Account Health Rating – SellerFixHub",
    metaDescription:
      "Your TikTok Shop account health rating affects visibility and selling privileges. Learn how the rating is calculated, what metrics to monitor, and how to improve before your next review.",
    updatedAt: "2026-05-27",
    aiSummary:
      "TikTok Shop's account health rating is a composite score based on your fulfillment performance, customer satisfaction, policy compliance, and violation history. A low rating reduces your visibility in search and recommendations and can lead to account restrictions.",
    quickAnswer:
      "Your account health rating is based on shipment timeliness, cancellation rate, customer satisfaction, and violation history. Monitor these metrics in Seller Center, address weak areas proactively, and maintain consistent compliance to keep your rating high.",
    meaning:
      "TikTok Shop uses your account health rating to determine your eligibility for program features, visibility in search, and continued selling privileges. Sellers with consistently low ratings may face reduced functionality, removal from promotional programs, or account suspension.",
    commonCauses: [
      "Consistently late shipments or delayed order processing",
      "High order cancellation rate before shipment",
      "Low product listing quality or inaccurate descriptions",
      "Accumulated violation points from policy breaches",
      "Unresolved customer disputes or unresolved refund requests",
      "Poor customer review ratings or low satisfaction scores",
      "Listing products in incorrect categories",
      "Failure to maintain required documentation or certifications",
    ],
    checklist: [
      "Check your current account health rating and score breakdown in Seller Center",
      "Review your shipment timeliness metrics and late order rate",
      "Check your order cancellation rate and reasons",
      "Review customer satisfaction scores and recent negative reviews",
      "Identify which specific metrics are dragging down your score",
      "Review your violation points and active policy breaches",
      "Check your product listing quality scores",
    ],
    evidence: [
      "Screenshot of your current account health rating from Seller Center",
      "Screenshot of your score breakdown by metric",
      "Shipping records showing on-time fulfillment performance",
      "Order records showing cancellation reasons",
      "Screenshots of corrected product listings (if listing quality was an issue)",
      "Documentation of corrective actions for customer issues",
    ],
    recoverySteps: [
      "Step 1: Review your account health score and identify weak metrics",
      "Step 2: Prioritize fixing the lowest-scoring metric areas",
      "Step 3: Improve fulfillment processes to reduce late shipments",
      "Step 4: Audit and correct product listings for accuracy",
      "Step 5: Resolve any open customer disputes or refund requests",
      "Step 6: Monitor your health score weekly and track improvements",
      "Step 7: Maintain consistent performance to stabilize and improve your rating",
    ],
    mistakes: [
      "Focusing only on recent issues without reviewing your full history",
      "Waiting until approaching a critical threshold to take action",
      "Not monitoring account health regularly enough to catch declines early",
      "Making sudden changes to listings or fulfillment without testing",
      "Ignoring low-severity issues that compound over time",
    ],
    whenToAskExpert: [
      "Your account health score has been declining despite your efforts",
      "You are unsure which specific metrics are driving your low score",
      "You need help improving fulfillment performance and customer satisfaction",
      "You are at risk of losing TikTok Shop program eligibility due to a low score",
    ],
    faqs: [
      {
        question: "What does TikTok Shop use to calculate account health rating?",
        answer:
          "TikTok Shop considers shipment timeliness, order cancellation rate, customer satisfaction (reviews and dispute rate), product listing quality, and violation history. The exact weighting is not publicly disclosed.",
      },
      {
        question: "Does a low account health rating affect my product visibility?",
        answer:
          "Yes. Sellers with lower health ratings may appear lower in TikTok Shop search results and recommendations. High-rated sellers receive priority placement in promotional programs.",
      },
      {
        question: "How often does TikTok update my account health rating?",
        answer:
          "TikTok updates account health metrics continuously. You can view your current score and recent performance in the Seller Center dashboard. Significant changes in your score typically reflect performance over the past 30–90 days.",
      },
      {
        question: "Can I recover my account health rating after a suspension?",
        answer:
          "Yes. After a suspension is lifted, your rating will be based on ongoing performance. Consistently maintaining good metrics over time will gradually improve your score, but past violations may still influence your rating during the review period.",
      },
    ],
    relatedSlugs: ["violation-appeal", "violation-points", "account-suspended", "product-rejected"],
  },
  // ─── Sprint 2A: Content Expansion ───────────────────────────────────────
  {
    slug: "appeal-rejected",
    platform: "google-merchant-center",
    h1: "Google Merchant Center Appeal Rejected: What Sellers Should Check Before Trying Again",
    metaTitle: "Google Merchant Center Appeal Rejected: What to Check Before Trying Again",
    metaDescription:
      "Learn what to review after a Google Merchant Center appeal is rejected, what evidence may be missing, and when to revisit account or product issue fixes.",
    updatedAt: "2026-06-02",
    aiSummary:
      "A rejected appeal means Google reviewed your review request and found that the root cause was not sufficiently addressed or the supporting evidence was insufficient. This does not mean your account is permanently blocked, but subsequent reviews receive greater scrutiny. Review the specific rejection feedback, fix all remaining issues, and prepare targeted evidence before resubmitting.",
    quickAnswer:
      "Google rejected your review request because the cited issues were not fully resolved or the evidence did not adequately demonstrate compliance. Read the rejection feedback carefully, fix all remaining problems in your account, feed, and website, then gather targeted documentation before submitting again. Platform decisions are made by the platform. Do not submit the same appeal without changes.",
    meaning:
      "When an appeal is rejected, Google has determined that the fixes or evidence provided were not sufficient to reverse the original decision. This does not necessarily mean your account is permanently blocked, but it does mean you need to provide more complete or more specific information in the next submission.",
    commonCauses: [
      "The root cause was not fully fixed before submitting the review",
      "Evidence was missing, illegible, or did not directly address the cited violation",
      "The appeal message was generic or templated without case-specific details",
      "Merchant verification was not completed before submitting the appeal",
      "The appeal was submitted too quickly without allowing time for feed corrections to propagate",
      "Similar or related products still had active policy violations",
      "The corrective action plan was vague or missing",
      "The rejection reason from the original notification was not individually addressed",
    ],
    checklist: [
      "Read the rejection notice carefully and identify every specific reason cited",
      "Confirm the exact issue flagged in the original suspension or disapproval notification",
      "Verify that all product data in your feed has been fully corrected",
      "Check that all affected products have been fixed, not just the one originally cited",
      "Ensure your website landing pages are fully accurate and accessible",
      "Confirm merchant verification is complete and up to date",
      "Gather targeted evidence that directly addresses each cited reason",
      "Draft a case-specific appeal message that references the exact notification",
    ],
    evidence: [
      "Screenshot of the original suspension or disapproval notification with the cited reason",
      "Screenshot of the appeal rejection notice with the specific new feedback",
      "Screenshots of corrected product data in your feed for all affected products",
      "Supplier invoices and proof of authenticity for flagged products",
      "Photos of actual products matching the listing descriptions",
      "Screenshot of completed merchant verification status",
      "Screenshots of corrected landing pages",
      "Documentation of the corrective actions you have implemented",
    ],
    recoverySteps: [
      "Step 1: Read the rejection notice and make a list of every specific reason cited",
      "Step 2: Confirm that all feed data, website pages, and account settings reflect full corrections",
      "Step 3: Gather targeted evidence for each reason rather than submitting general documentation",
      "Step 4: Complete any pending merchant verification steps before resubmitting",
      "Step 5: Draft a concise, factual appeal that addresses each cited reason individually",
      "Step 6: Submit the new appeal from the specific link in your rejection notification",
      "Step 7: Wait for Google's response and prepare for a longer review window",
    ],
    mistakes: [
      "Submitting the same appeal without making any new changes",
      "Submitting a generic or copy-paste appeal message",
      "Not reading the rejection notice and assuming the original reason still applies",
      "Only fixing the single product cited without checking all similar products",
      "Submitting before merchant verification is complete",
      "Not documenting the specific changes you made in response to the rejection",
    ],
    whenToAskExpert: [
      "Your appeal has been rejected multiple times and you are unsure how to proceed",
      "The rejection involves complex policy areas or restricted product categories",
      "You need help organizing evidence that specifically addresses each cited reason",
      "You have a high-revenue account and the risk of prolonged suspension is significant",
    ],
    faqs: [
      {
        question: "Why was my Google Merchant Center appeal rejected?",
        answer:
          "An appeal is rejected when Google determines that the root cause was not fully addressed or the evidence did not adequately demonstrate compliance. Common reasons include submitting before fixes were complete, providing generic documentation, or not completing merchant verification. Review the specific rejection feedback to understand what to address next.",
      },
      {
        question: "Should I submit another appeal immediately?",
        answer:
          "No. Submitting again without addressing the specific rejection feedback can result in longer review times and increased scrutiny. Wait until you have fully addressed every reason cited in the rejection notice and have organized evidence ready.",
      },
      {
        question: "What should I change before requesting another review?",
        answer:
          "Before resubmitting, read the rejection notice carefully and address each cited reason. Fix all product data, account settings, and website content. Complete merchant verification. Gather targeted evidence that directly addresses each reason—not generic documentation.",
      },
      {
        question: "When should I ask for expert help after a rejected appeal?",
        answer:
          "Consider asking for expert help if your appeal has been rejected multiple times, the rejection involves complex policy areas or restricted product categories, you need help organizing evidence that addresses each cited reason specifically, or your account revenue is at significant risk from prolonged suspension.",
      },
    ],
    relatedSlugs: ["request-review", "account-suspended", "misrepresentation", "product-disapproved"],
  },
  {
    slug: "missing-product-identifiers",
    platform: "google-merchant-center",
    h1: "Missing Product Identifiers in Google Merchant Center: GTIN, MPN, and Brand Checklist",
    metaTitle: "Google Merchant Center Missing Product Identifiers: GTIN, MPN, Brand & identifier_exists",
    metaDescription:
      "Understand Google Merchant Center missing product identifier warnings, including GTIN, MPN, brand, and when identifier_exists may cause feed or product data errors.",
    updatedAt: "2026-05-28",
    aiSummary:
      "Missing product identifiers means Google requires a valid GTIN, brand, and MPN for your product but one or more of these attributes is absent or invalid. This is a common feed quality issue that prevents products from being approved.",
    quickAnswer:
      "Add the missing GTIN, brand, and MPN to your product feed. GTINs must match the actual product barcode. If your product genuinely does not have a GTIN, set identifier_exists to no and provide brand and MPN instead.",
    meaning:
      "Google requires unique product identifiers for most products to ensure accurate product matching. Without valid GTIN, brand, and MPN information, Google cannot verify your product data and will disapprove the listing.",
    commonCauses: [
      "GTIN field is empty when the product has a valid barcode",
      "Brand name is missing or too generic (e.g., 'Generic' or 'N/A')",
      "MPN field is empty for products that have manufacturer part numbers",
      "GTIN is entered incorrectly (wrong digit, typographical error)",
      "GTIN belongs to a different product or supplier",
      "Product does not have a standard GTIN and identifier_exists was not set to no",
      "Brand is listed but not a registered or recognized brand in Google's database",
      "Both GTIN and MPN are missing without setting identifier_exists",
    ],
    checklist: [
      "Check which specific identifier is flagged as missing in Merchant Center",
      "Locate the actual GTIN barcode on the physical product or packaging",
      "Verify the brand name matches the product's official manufacturer brand",
      "Find the MPN on the product, packaging, or manufacturer documentation",
      "Confirm whether the product is custom-made (may not need standard identifiers)",
      "Cross-check the GTIN with an online barcode database if validation keeps failing",
      "Verify the GTIN length matches the correct format (EAN-13, UPC-A, etc.)",
    ],
    evidence: [
      "Photo of the product barcode showing the GTIN",
      "Product packaging with brand name, GTIN, and MPN visible",
      "Supplier invoice listing the product's GTIN, brand, and MPN",
      "Screenshot of the current feed data showing which identifier fields are empty",
      "Screenshot of corrected feed data after adding identifiers",
    ],
    recoverySteps: [
      "Step 1: Identify which identifier is missing or invalid in Merchant Center",
      "Step 2: For GTIN: locate the actual barcode on the product or packaging",
      "Step 3: For brand: use the exact manufacturer brand name, not a marketplace alias",
      "Step 4: For MPN: find the manufacturer part number on the product or documentation",
      "Step 5: If the product has no standard GTIN, set identifier_exists to no and provide brand and MPN",
      "Step 6: Update your product feed with the corrected identifier values",
      "Step 7: Resubmit the product feed and wait for re-review",
    ],
    mistakes: [
      "Making up a GTIN rather than finding the actual product barcode",
      "Using the supplier's brand name when you are not an authorized reseller",
      "Entering a brand name that is not recognized in Google's brand registry",
      "Leaving identifier_exists at its default while the GTIN is genuinely missing",
      "Using a similar product's GTIN because the exact match was unavailable",
    ],
    whenToAskExpert: [
      "Your GTIN keeps failing validation despite appearing correct",
      "You are a reseller and are unsure which GTIN you are authorized to use",
      "Your product has no standard identifiers and you need guidance on identifier_exists settings",
      "You need to register a brand in Google's brand registry",
    ],
    faqs: [
      {
        question: "What if my product genuinely does not have a GTIN?",
        answer:
          "Products without standard GTINs (custom-made, bundles, raw materials) can still be listed. Set the gtin field to empty and set identifier_exists to no. Provide the brand and MPN instead.",
      },
      {
        question: "Where can I verify if a GTIN is correct?",
        answer:
          "You can check GTIN validity on websites like gs1.org or barcode lookup tools. The GTIN must match the specific product you are selling, not a similar item from the same brand.",
      },
      {
        question: "Can I use a brand name that is not registered in Google's database?",
        answer:
          "You can list your own brand, but Google may require brand verification over time. Using another company's trademarked brand name without authorization is a policy violation.",
      },
      {
        question: "What is the difference between GTIN and MPN?",
        answer:
          "GTIN (Global Trade Item Number) is a unique product barcode that identifies a specific product at the retail level. MPN (Manufacturer Part Number) is a code assigned by the manufacturer to identify a specific version or variant of their product.",
      },
      {
        question: "How is identifier_exists related to missing product identifiers?",
        answer:
          "identifier_exists tells Google whether a product is expected to have standard identifiers. If the product has a GTIN, brand, or MPN, the feed should usually set identifier_exists to true and provide the accurate identifier data. If the product truly has no standard identifiers, sellers should verify the feed logic carefully before setting identifier_exists to false — and even then, brand and MPN should still be provided if available. A mismatch between identifier_exists and actual identifier data is a common cause of both missing-identifier errors and the 'you have filled out a field incorrectly' message.",
      },
      {
        question: "Looking for identifier_exists?",
        answer:
          "If your warning mentions identifier_exists, identifier exists, or \"you have filled out a field incorrectly,\" start with the dedicated identifier_exists guide before changing your GTIN, MPN, or brand fields.",
        link: "/google-merchant-center/identifier-exists",
      },
    ],
    relatedSlugs: ["invalid-gtin", "gtin-mpn-brand", "product-disapproved", "identifier-exists"],
  },
  {
    slug: "limited-performance-missing-identifiers",
    platform: "google-merchant-center",
    h1: "Limited Performance Due to Missing Identifiers: What Google Merchant Center Sellers Should Fix",
    metaTitle: "Limited Performance Due to Missing Identifiers – SellerFixHub",
    metaDescription:
      "Your Google Merchant Center products have limited performance because identifiers are missing. Learn how to add GTIN, brand, and MPN to improve product visibility.",
    updatedAt: "2026-05-28",
    aiSummary:
      "Products with missing identifiers often still appear in Shopping ads but with reduced visibility and performance. Adding valid GTIN, brand, and MPN helps Google match your products accurately and improves ad placement.",
    quickAnswer:
      "Products without complete identifiers appear less frequently and in lower ad positions. Add your GTIN (from the product barcode), brand name, and MPN to your feed to restore full matching and improve performance.",
    meaning:
      "Google uses product identifiers to match your listings to what shoppers are searching for. Without complete identifiers, Google cannot reliably match your product to search queries, resulting in fewer impressions, lower click-through rates, and reduced overall ad performance.",
    commonCauses: [
      "GTIN is missing or incorrect, preventing accurate product matching",
      "Brand name is generic, missing, or does not match Google's brand database",
      "MPN is missing, leaving the product without a unique variant identifier",
      "identifier_exists was not set correctly for products without standard GTINs",
      "GTINs were added but are tied to the wrong product variant",
      "Brand authorization was not established for the products being sold",
      "Inconsistent identifier formats across product variants in the feed",
      "Feed updates were not submitted after identifiers were corrected on the website",
    ],
    checklist: [
      "Check which products in Merchant Center show limited performance due to missing identifiers",
      "Verify the GTIN on each product's physical item or packaging",
      "Confirm the brand name is the official manufacturer brand",
      "Find the MPN for each product variant from the manufacturer",
      "Check if identifier_exists needs to be set to no for products without standard GTINs",
      "Verify the GTIN, brand, and MPN are consistent across all variants of the same product",
      "Ensure the corrected feed is submitted and the changes have propagated",
    ],
    evidence: [
      "Screenshot of Merchant Center performance report showing limited impressions for flagged products",
      "Screenshot of the feed identifier fields showing which are empty or incorrect",
      "Photo of product barcodes with GTIN for each flagged product",
      "Supplier invoice showing the official GTIN, brand, and MPN for each product",
      "Screenshot of corrected feed data after adding all identifiers",
    ],
    recoverySteps: [
      "Step 1: Run a product diagnostics report in Merchant Center to find all products with missing identifiers",
      "Step 2: Collect the correct GTIN, brand, and MPN for each affected product",
      "Step 3: For products without standard GTINs, set identifier_exists to no and provide brand and MPN",
      "Step 4: Update your product feed with the complete and correct identifier values",
      "Step 5: Submit the updated feed and wait for Google to re-process the product data",
      "Step 6: Monitor your Shopping campaign performance to confirm improvement",
      "Step 7: If performance does not improve, check for remaining identifier inconsistencies",
    ],
    mistakes: [
      "Adding a placeholder GTIN like 00000000000000 to avoid the error",
      "Using a brand name that is not the official manufacturer brand",
      "Assuming that adding identifiers once will permanently fix performance issues",
      "Not checking if your GTIN is registered to the correct product variant",
      "Submitting feed updates without verifying the changes were received by Merchant Center",
    ],
    whenToAskExpert: [
      "You sell thousands of products and need to systematically audit and fix all identifier gaps",
      "Your GTINs are failing validation despite appearing to match official databases",
      "You need guidance on registering your brand in Google's brand registry",
      "You have complex product variants and are unsure how to set up GTINs across them",
    ],
    faqs: [
      {
        question: "How do missing identifiers affect Shopping ad performance?",
        answer:
          "Products without complete identifiers are harder for Google to match to search queries. This results in fewer impressions, lower ad positions, and reduced click-through rates compared to products with full and accurate identifiers.",
      },
      {
        question: "Will adding GTINs immediately improve my ad performance?",
        answer:
          "Once Google re-processes your feed with correct identifiers, product matching improves over the following days. Significant performance changes typically become visible within one to two weeks.",
      },
      {
        question: "Do I need GTINs for all products?",
        answer:
          "Most retail products sold in physical or online stores have GTINs. Custom-made items, bundles assembled by the seller, and products sold without standard retail packaging may not have GTINs. For these, set identifier_exists to no and provide brand and MPN.",
      },
      {
        question: "Can I add GTINs for only some of my products?",
        answer:
          "You should add identifiers for as many products as possible. Products without identifiers will continue to have limited performance while the rest benefit from full matching.",
      },
    ],
    relatedSlugs: ["missing-product-identifiers", "gtin-mpn-brand", "invalid-gtin"],
  },
  {
    slug: "gtin-mpn-brand",
    platform: "google-merchant-center",
    h1: "GTIN, MPN, and Brand in Google Merchant Center: What Sellers Should Check",
    metaTitle: "GTIN, MPN, and Brand in Google Merchant Center – SellerFixHub",
    metaDescription:
      "Understand GTIN, MPN, and brand requirements in Google Merchant Center. Learn which identifiers your products need and how to gather the correct evidence.",
    updatedAt: "2026-05-28",
    aiSummary:
      "Google Merchant Center requires GTIN, brand, and MPN for most products to enable accurate product matching. Understanding what each field means and how to populate them correctly prevents disapprovals and improves Shopping ad performance.",
    quickAnswer:
      "GTIN is your product's barcode number (found on the packaging). Brand is the official manufacturer name. MPN is the manufacturer's part number. Use all three accurately and only for products you are authorized to sell.",
    meaning:
      "Product identifiers help Google verify that your product is what you say it is. Invalid or mismatched identifiers can trigger misrepresentation flags, while missing identifiers limit product visibility. Each attribute serves a different purpose in product matching.",
    commonCauses: [
      "Confusing supplier GTIN with the product's own GTIN (resellers vs. manufacturers)",
      "Entering a brand name that is not the official registered manufacturer",
      "Using a generic MPN format that does not match the manufacturer's documentation",
      "GTIN is correct but brand name does not match the GTIN's registered brand",
      "identifier_exists is not set correctly when the product has no standard GTIN",
      "MPN is left blank when it is required for the specific product category",
      "Product bundle uses the same GTIN as one of its component items",
      "Brand authorization is missing for trademarked brand names",
    ],
    checklist: [
      "Confirm which identifier fields are required for your specific product category",
      "Locate the official GTIN barcode on the product's retail packaging",
      "Verify the brand name matches the official manufacturer name registered with GS1",
      "Find the MPN from the manufacturer's label, documentation, or website",
      "Check that the GTIN, brand, and MPN all refer to the same specific product",
      "Confirm whether you are an authorized reseller for the brand you are listing",
      "For bundles or custom products, set identifier_exists to no and provide brand and MPN",
      "Verify the GTIN passes validation in Google's manufacturer database",
    ],
    evidence: [
      "Photo of the product barcode (EAN, UPC, ISBN) showing the GTIN",
      "Product packaging clearly showing the brand name, GTIN, and MPN",
      "Official supplier or manufacturer invoice listing product identifiers",
      "Screenshot of your product feed with correctly populated identifier fields",
      "Brand authorization letter or reseller certificate if required by the manufacturer",
      "Documentation from the manufacturer confirming the MPN for your specific product",
    ],
    recoverySteps: [
      "Step 1: Review Google's identifier requirements for your specific product category",
      "Step 2: For each product, identify the correct GTIN from the physical item or packaging",
      "Step 3: Enter the official manufacturer brand name, not a marketplace or store brand",
      "Step 4: Find the exact MPN from manufacturer documentation",
      "Step 5: If you are a reseller, confirm you are authorized to use the identifiers",
      "Step 6: For products without standard GTINs, set identifier_exists to no",
      "Step 7: Update your feed and resubmit all products with corrected identifiers",
    ],
    mistakes: [
      "Using a GTIN that belongs to a similar but different product",
      "Listing an unauthorized brand name to boost product matching",
      "Leaving MPN blank because it seems redundant with the GTIN",
      "Creating bundles and using the component product's individual GTIN",
      "Not setting identifier_exists to no for custom or bundle products",
    ],
    whenToAskExpert: [
      "You are reselling products and need to verify which GTIN you are allowed to use",
      "Your brand name is being rejected by Google's brand registry",
      "You have complex product variants with multiple MPNs per GTIN",
      "You need to register a new brand in Google's brand registry",
    ],
    faqs: [
      {
        question: "Which products are exempt from the GTIN requirement?",
        answer:
          "Products that do not have standard retail GTINs are exempt. This includes custom-made items, products assembled by the seller, and goods sold in regions where GTINs are not used. For these, set identifier_exists to no and provide brand and MPN.",
      },
      {
        question: "Can I sell products under my own brand even if I am not the original manufacturer?",
        answer:
          "Yes, you can sell under your own private label brand. Set the brand to your company or product line name. You do not need to be the original manufacturer, but you should not misrepresent the product's origin.",
      },
      {
        question: "What happens if my GTIN, brand, and MPN do not all match the same product?",
        answer:
          "A mismatch between identifiers can trigger a misrepresentation warning. Each identifier should describe the same specific product. If the identifiers belong to different items, your listing may be disapproved.",
      },
      {
        question: "Do I need to register my brand in Google's brand registry?",
        answer:
          "Brand registry is required for certain product categories and when you want to list specific trademarked brands. It helps prevent unauthorized sellers from listing branded products. Not all brands require registration.",
      },
    ],
    relatedSlugs: ["missing-product-identifiers", "invalid-gtin", "misrepresentation"],
  },
  {
    slug: "destination-not-working",
    platform: "google-merchant-center",
    h1: "Destination Not Working in Google Merchant Center: Causes and Recovery Checklist",
    metaTitle: "Destination Not Working in Google Merchant Center – SellerFixHub",
    metaDescription:
      "Google cannot reach your product landing page. Learn what causes destination errors, how to diagnose the issue, and how to get your products back online.",
    updatedAt: "2026-05-28",
    aiSummary:
      "A destination not working error means Google's crawler could not access your product landing page. This can be caused by blocked access, broken URLs, server errors, or crawl restrictions. Products with this error cannot appear in Shopping ads.",
    quickAnswer:
      "Google's crawler cannot reach your product landing page. Check that the URL is publicly accessible, not blocked by robots.txt, and returns a valid page with the correct product. Fix any server errors, redirect loops, or authentication walls.",
    meaning:
      "For your product to appear in Shopping ads, Google's crawler must be able to visit and verify the landing page. If the page is blocked, returns an error, redirects excessively, or requires login, the product will be disapproved with a destination not working error.",
    commonCauses: [
      "The landing page URL is broken or returns a 404 error",
      "robots.txt or noindex meta tag is blocking Google's crawler from the page",
      "The server returns a 5xx error or is temporarily unavailable",
      "The landing page requires login, captcha, or account creation to view",
      "Excessive redirects (redirect chains or loops) prevent the crawler from reaching the page",
      "The page loads content dynamically via JavaScript that Google's crawler cannot parse",
      "The landing page URL contains typos or points to a staging or dev environment",
      "The page has a geo-restriction or IP-based blocking that affects Google's servers",
    ],
    checklist: [
      "Verify the landing page URL in your product feed is correct and publicly accessible",
      "Test the URL in a browser with no login or cookies to simulate Google's crawler",
      "Check robots.txt to confirm the product page is not disallowed",
      "Run a fetch as Google test in Search Console to see how Googlebot sees the page",
      "Verify the page returns HTTP 200 and loads within a reasonable time",
      "Check that no login, captcha, or cookie wall blocks access",
      "Confirm the page contains the exact product described in your feed",
      "Check for redirect chains or loops that prevent the crawler from reaching the page",
    ],
    evidence: [
      "Screenshot of the landing page loading correctly in a browser (no login)",
      "Screenshot of fetch as Google results from Search Console",
      "Screenshot of HTTP headers showing 200 OK response from the landing page",
      "Screenshot of robots.txt showing the page is not blocked",
      "Screenshot of the product page showing the exact product with price and availability matching the feed",
    ],
    recoverySteps: [
      "Step 1: Identify the exact URL flagged as not working in Merchant Center",
      "Step 2: Test the URL manually and in Search Console's fetch as Google tool",
      "Step 3: Fix any broken URLs, 404 errors, or server errors first",
      "Step 4: Remove any robots.txt blocks or noindex tags from the landing page",
      "Step 5: Ensure the page is accessible without login, captcha, or cookie requirements",
      "Step 6: Simplify any redirect chains and remove redirect loops",
      "Step 7: Resubmit the product feed and request re-review",
    ],
    mistakes: [
      "Checking the homepage or category page instead of the specific product page",
      "Not testing the URL while logged out of your website",
      "Assuming a temporary server issue is the cause without investigating further",
      "Using a redirect to the homepage instead of the specific product page",
      "Leaving staging or test URLs in the product feed",
    ],
    whenToAskExpert: [
      "Your website uses JavaScript frameworks and Google's crawler cannot render the page",
      "You have complex server-side redirects that you cannot resolve alone",
      "Your website's server infrastructure is blocking Googlebot based on geolocation",
      "You need help configuring your server to allow Google's crawler properly",
    ],
    faqs: [
      {
        question: "What does 'destination not working' mean for my Shopping ads?",
        answer:
          "It means Google cannot verify your product landing page. Your product will be disapproved and cannot appear in Shopping ads until the destination is fixed and re-reviewed.",
      },
      {
        question: "Can I use a redirect for my landing page?",
        answer:
          "A single redirect is usually acceptable, but redirect chains (multiple redirects) or loops will cause the destination to be flagged as not working. Keep redirects to a single hop and ensure the final URL resolves correctly.",
      },
      {
        question: "Does Googlebot support JavaScript-rendered pages?",
        answer:
          "Googlebot can render some JavaScript, but it is more reliable to deliver content server-side or ensure critical product information is in the initial HTML response. Test your pages with Search Console's URL inspection tool.",
      },
      {
        question: "How do I check if robots.txt is blocking Googlebot?",
        answer:
          "You can view your robots.txt file by visiting yourdomain.com/robots.txt. You can also use Search Console's URL inspection tool to see how Googlebot fetches and renders your page.",
      },
    ],
    relatedSlugs: ["product-disapproved", "website-needs-improvement", "availability-mismatch"],
  },
  {
    slug: "shopify-feed-errors",
    platform: "google-merchant-center",
    h1: "Shopify Google Merchant Center Feed Errors: What Sellers Should Check First",
    metaTitle: "Shopify GMC Feed Errors – SellerFixHub",
    metaDescription:
      "Shopify seller seeing Google Merchant Center feed errors? Learn the most common causes and how to fix your Shopify-to-GMC product feed.",
    updatedAt: "2026-05-28",
    aiSummary:
      "Shopify sellers commonly encounter Google Merchant Center feed errors related to identifier mismatches, price and availability synchronization, and metafield configuration. Most errors can be resolved by reviewing the Google & YouTube channel settings and product data in Shopify.",
    quickAnswer:
      "Most Shopify-to-GMC feed errors come from incorrect metafield values, mismatched pricing, or incomplete product data in Shopify. Review your product feed through the Google & YouTube channel, check each flagged product, and sync corrections back to Merchant Center.",
    meaning:
      "When your Shopify store is connected to Google Merchant Center via the Google & YouTube channel or a third-party app, product data is pulled from Shopify into your feed. Errors occur when Shopify product data is incomplete, mismatched, or not configured correctly for Google's requirements.",
    commonCauses: [
      "Product title or description in Shopify is too short or missing key attributes",
      "GTIN, brand, or MPN metafields in Shopify are empty or incorrect",
      "Price in Shopify does not match the price submitted to Merchant Center",
      "Availability in Shopify is out of sync with what Google sees on the landing page",
      "Google & YouTube channel product type or custom label mappings are misconfigured",
      "Products are set to 'draft' or 'unavailable' in Shopify and not synced to GMC",
      "The Google & YouTube channel is not properly connected or access was revoked",
      "Product images do not meet Google's image requirements (too small, showing multiple products)",
    ],
    checklist: [
      "Check which products are flagged as having errors in Merchant Center diagnostics",
      "Verify the Google & YouTube channel connection is active in Shopify",
      "Review the specific product in Shopify and check all Google-required attributes",
      "Confirm GTIN, brand, and MPN metafields are filled in correctly",
      "Verify the product price in Shopify matches the price in your GMC feed",
      "Check that the product is set to 'active' and 'available' in Shopify",
      "Confirm the product image meets Google's requirements (minimum 100x100px, no text overlays)",
      "Review the Google product category mapping in Shopify for the flagged products",
    ],
    evidence: [
      "Screenshot of the feed error report from Merchant Center showing specific flagged products",
      "Screenshot of the Shopify product page showing all Google-required fields are filled",
      "Screenshot of the Google & YouTube channel product feed preview",
      "Screenshot of the Google Shopping product diagnostics in Shopify admin",
      "Screenshot of the product landing page showing accurate price and availability",
    ],
    recoverySteps: [
      "Step 1: Export the product feed from Shopify and identify all flagged products",
      "Step 2: In Shopify, update all Google-required metafields (GTIN, brand, MPN) for flagged products",
      "Step 3: Verify that prices in Shopify match what you want advertised in Google Shopping",
      "Step 4: Ensure all products are set to 'active' in Shopify and synced to the channel",
      "Step 5: Fix any product images that do not meet Google's image policy",
      "Step 6: In Merchant Center, resubmit the feed and request re-review for affected products",
      "Step 7: Monitor Merchant Center diagnostics for new errors after syncing",
    ],
    mistakes: [
      "Relying solely on automatic sync without verifying product data in Shopify",
      "Leaving the Google & YouTube channel connected but with outdated Shopify product data",
      "Not checking that product variants all have complete identifier information",
      "Assuming the Shopify app will handle all Google requirements automatically",
      "Not testing the feed preview before submitting to Merchant Center",
    ],
    whenToAskExpert: [
      "You have hundreds of products and need to systematically audit and fix Shopify metafields",
      "The Google & YouTube channel keeps disconnecting or failing to sync",
      "You are using a third-party feed app and encountering persistent errors",
      "Product variants have complex identifier requirements that Shopify metafields do not support natively",
    ],
    faqs: [
      {
        question: "Does Shopify automatically submit products to Google Merchant Center?",
        answer:
          "The Google & YouTube channel in Shopify can create and manage a product feed, but you still need to configure metafields, set prices, and ensure all required attributes are populated in Shopify before they will sync correctly.",
      },
      {
        question: "Why are my Shopify prices not matching my Google Shopping ads?",
        answer:
          "Prices in Google Shopping come from what is submitted in the feed. If you have discounts, taxes, or regional pricing set up differently in Shopify, the feed may be submitting a different price. Review your Google & YouTube channel settings and feed preview.",
      },
      {
        question: "Can I use a third-party app instead of the Google & YouTube channel?",
        answer:
          "Yes. Many Shopify sellers use third-party apps that offer more control over feed configuration, attribute mapping, and product filtering. Choose an app that lets you review the feed before submission.",
      },
      {
        question: "How often does the Shopify-to-GMC feed sync?",
        answer:
          "The Google & YouTube channel typically syncs every 24 hours, though you can also trigger a manual sync. Third-party apps may offer more frequent sync intervals. Check your feed regularly for errors after making product changes.",
      },
    ],
    relatedSlugs: ["missing-product-identifiers", "price-mismatch", "availability-mismatch", "identifier-exists"],
  },
  {
    slug: "restricted-products",
    platform: "tiktok-shop",
    h1: "TikTok Shop Restricted Products: What Sellers Should Check Before Appeal",
    metaTitle: "TikTok Shop Restricted Products – SellerFixHub",
    metaDescription:
      "Your product is restricted on TikTok Shop. Learn what product categories are restricted, how to check if your product qualifies, and how to submit an appeal.",
    updatedAt: "2026-05-28",
    aiSummary:
      "TikTok Shop restricts certain product categories for safety, legal, and regulatory compliance. Restricted products require prior approval or may be prohibited entirely. Attempting to list or sell restricted products without authorization can result in listing removal, violation points, or account penalties.",
    quickAnswer:
      "Your product falls into a restricted category on TikTok Shop. Check the restricted products list in Seller Center to confirm whether your product requires prior approval or is prohibited. If eligible, apply for category approval and submit required documentation.",
    meaning:
      "TikTok Shop maintains a list of restricted and prohibited product categories to comply with local laws and platform safety standards. Restricted products may be listed with prior approval and proper documentation. Prohibited products cannot be sold on the platform under any circumstances.",
    commonCauses: [
      "The product category requires prior TikTok Shop approval before listing",
      "The product contains ingredients or materials restricted by TikTok's policies",
      "The product requires certification or documentation not yet provided to TikTok",
      "The brand or product name matches a trademarked item TikTok has flagged",
      "The product falls into an age-restricted category without age verification setup",
      "The product requires a specific seller tier or account standing to list",
      "Regional restrictions apply and your selling region is not eligible for that category",
      "The product was previously flagged and manually restricted by TikTok's review team",
    ],
    checklist: [
      "Find the specific restriction reason in TikTok Seller Center",
      "Review the TikTok Shop restricted products list for your product category",
      "Check whether your product requires prior category approval",
      "Verify that all required documentation for the category has been uploaded",
      "Confirm the product meets all TikTok Shop content and safety guidelines",
      "Check if your seller account tier qualifies you to list restricted category products",
      "Review any age-gating or buyer verification requirements for the category",
      "Confirm your selling region is supported for the product category",
    ],
    evidence: [
      "Screenshot of the restriction notice from TikTok Seller Center",
      "Product certification documents (if required for the restricted category)",
      "Screenshot of the restricted products policy page from TikTok Seller Center",
      "Screenshot of your product listing showing the specific flagged content",
      "Screenshot of category approval status or rejection reason from Seller Center",
      "Proof of age verification setup if the product is age-restricted",
    ],
    recoverySteps: [
      "Step 1: Review the specific restriction reason and the TikTok restricted products policy",
      "Step 2: Determine whether the product is prohibited entirely or requires approval",
      "Step 3: Gather all required documentation for the restricted category",
      "Step 4: Apply for category approval through Seller Center if the product is eligible",
      "Step 5: Edit the product listing to remove any prohibited content or claims",
      "Step 6: Wait for TikTok's review of your category application or listing resubmission",
      "Step 7: If the product is prohibited, remove it from your TikTok Shop inventory",
    ],
    mistakes: [
      "Listing a prohibited product category without first checking the restricted list",
      "Submitting category approval without the required documentation",
      "Using the same product images or descriptions that were flagged in a previous restriction",
      "Attempting to list restricted products under a generic category to bypass review",
      "Not checking if the product requires a specific seller tier before applying",
    ],
    whenToAskExpert: [
      "Your product is in a complex restricted category (health, beauty, food) and you are unsure about requirements",
      "The restriction involves a trademark or intellectual property claim",
      "You need help preparing the correct documentation for a restricted category appeal",
      "You are unsure whether your product qualifies for the restricted category under TikTok's current policy",
    ],
    faqs: [
      {
        question: "What is the difference between a restricted and a prohibited product on TikTok Shop?",
        answer:
          "Restricted products require prior TikTok Shop approval and may be listed if you meet the requirements and provide documentation. Prohibited products cannot be sold on TikTok Shop under any circumstances.",
      },
      {
        question: "How do I apply to list a restricted product category on TikTok Shop?",
        answer:
          "Go to Seller Center and navigate to the category management section. Find your product category and submit the required documentation for review. You will receive approval or rejection within a few business days.",
      },
      {
        question: "Can I sell my product if TikTok rejects my restricted category application?",
        answer:
          "If TikTok rejects your application or your product is in a prohibited category, you cannot list that product. Attempting to work around the restriction can result in violation points and account penalties.",
      },
      {
        question: "Does restricted product status apply to all regions equally?",
        answer:
          "No. TikTok Shop's restricted and prohibited product lists vary by region. Check the policy for your specific selling region before listing any product that may be restricted.",
      },
    ],
    relatedSlugs: ["product-rejected", "violation-appeal", "product-listing-quality"],
  },
  {
    slug: "product-listing-quality",
    platform: "tiktok-shop",
    h1: "TikTok Shop Product Listing Quality Issues: What Sellers Should Fix Before Review",
    metaTitle: "TikTok Shop Product Listing Quality – SellerFixHub",
    metaDescription:
      "Your TikTok Shop product listing has quality issues. Learn what causes listing quality rejections, how to fix product descriptions, images, and category placement.",
    updatedAt: "2026-05-28",
    aiSummary:
      "Product listing quality issues on TikTok Shop arise when product descriptions, images, titles, or category placement do not meet TikTok's content standards. These issues can cause listing rejections, reduced visibility, or removal from search results.",
    quickAnswer:
      "TikTok flagged your listing for quality issues. Review the specific feedback, fix the product title, description, images, and category placement to meet TikTok's guidelines, then resubmit the product for review.",
    meaning:
      "TikTok Shop evaluates product listings for completeness, accuracy, and compliance with content standards. Listings that are incomplete, misleading, or do not meet the platform's quality guidelines may be rejected or have reduced visibility in TikTok Shop search and recommendations.",
    commonCauses: [
      "Product description is too short, generic, or contains placeholder text",
      "Product images do not meet TikTok's image guidelines (white background, no text overlays, clear product shot)",
      "Product title is misleading or does not accurately describe the item",
      "Product is listed in the wrong category, leading to quality mismatches",
      "Product information is inconsistent across images, title, and description",
      "Listing contains promotional language or claims that violate TikTok's policies",
      "Required product attributes (size, color, material) are missing from the listing",
      "Product variant information is not properly configured (e.g., size chart is missing)",
    ],
    checklist: [
      "Find the specific quality issue cited in the rejection notice",
      "Review TikTok Shop's product listing guidelines for your category",
      "Rewrite the product description to be specific, accurate, and free of placeholder text",
      "Verify all product images meet TikTok's image requirements",
      "Confirm the product is listed in the correct category",
      "Ensure all required product attributes (size, color, material) are filled in",
      "Check that the product title accurately describes what is being sold",
      "Verify variant options are correctly set up if the product has multiple options",
    ],
    evidence: [
      "Screenshot of the quality rejection notice from TikTok Seller Center",
      "Current product listing screenshots showing the flagged elements",
      "Revised product listing with corrected description, title, and images",
      "Screenshot of the correct category placement in Seller Center",
      "Product attribute sheet showing all required fields are now filled",
    ],
    recoverySteps: [
      "Step 1: Review the specific quality feedback from TikTok's review team",
      "Step 2: Rewrite the product description with accurate, specific, and complete information",
      "Step 3: Replace any non-compliant images with TikTok-approved product photos",
      "Step 4: Verify the product is listed in the most accurate category",
      "Step 5: Fill in all required product attributes and variant information",
      "Step 6: Edit and resubmit the product listing for review",
      "Step 7: Monitor the listing status and address any new feedback promptly",
    ],
    mistakes: [
      "Using generic product descriptions copied from supplier websites",
      "Submitting the same listing without fixing the specific flagged elements",
      "Listing products in a broad or incorrect category to increase visibility",
      "Adding promotional language like 'best seller' or '100% guaranteed' that violates TikTok policies",
      "Not checking that product variant options are properly linked to inventory",
    ],
    whenToAskExpert: [
      "Your listing has been rejected multiple times and you are unsure how to meet TikTok's standards",
      "You sell products in a category with complex attribute requirements",
      "The rejection involves intellectual property or trademark concerns about your listing content",
      "You need help creating compliant product descriptions for a large catalog",
    ],
    faqs: [
      {
        question: "What are TikTok Shop's product image requirements?",
        answer:
          "TikTok requires product images with a white or light background, no excessive text overlays or watermarks, a clear shot of the actual product, and a minimum resolution. Images must accurately represent the product being sold.",
      },
      {
        question: "Can I resubmit a rejected listing immediately after editing?",
        answer:
          "Yes. After editing the listing to address the quality feedback, you can resubmit it for review. TikTok typically completes the review within 1–3 business days.",
      },
      {
        question: "Does product listing quality affect my shop's visibility?",
        answer:
          "Yes. TikTok Shop may reduce the visibility of listings with quality issues in search results and recommendations. High-quality listings with accurate descriptions and compliant images are given priority.",
      },
      {
        question: "What should I include in a high-quality product description on TikTok Shop?",
        answer:
          "A good description includes the product name, key features, materials, dimensions, usage instructions, and any relevant safety information. Avoid generic copy, promotional claims, and misleading statements.",
      },
    ],
    relatedSlugs: ["product-rejected", "restricted-products", "violation-appeal"],
  },
  {
    slug: "identifier-exists",
    platform: "google-merchant-center",
    h1: "Google Merchant Center identifier_exists Attribute: When to Use True or False",
    metaTitle: "Google Merchant Center identifier_exists Attribute: True or False Guide",
    metaDescription:
      "Learn what the Google Merchant Center identifier_exists attribute means, when to use true or false, and how to check GTIN, MPN, brand, and feed errors.",
    updatedAt: "2026-05-31",
    aiSummary:
      "identifier_exists tells Google whether a product has standard identifiers. When set incorrectly, it causes either missing-identifier errors or a 'you have filled out a field incorrectly' message. Most sellers get this wrong by not matching the attribute to their actual product data.",
    quickAnswer:
      "Set identifier_exists to true if your product has a GTIN (barcode), brand name, or manufacturer part number. Set it to false only if the product genuinely has none of these. Either way, you still need to provide the identifiers you actually have. Getting this wrong causes feed errors even when the rest of your product data is correct.",
    meaning:
      "identifier_exists is a conditional attribute that tells Google whether to expect a GTIN, brand, and MPN for a product. It does not mean the identifiers are 'required' — it means they 'exist' for this product. Google then uses the identifier data itself to validate the listing. If the identifiers are present but identifier_exists is absent or false, Google may show a 'you have filled out a field incorrectly' error. If the identifiers are genuinely absent but identifier_exists is true, Google will flag the missing identifiers.",
    commonCauses: [
      "Product has a GTIN or brand but identifier_exists was not set to true",
      "Product genuinely has no standard identifiers but identifier_exists was left at default or set to true",
      "Shopify or feed app sets identifier_exists automatically and overrides manual settings",
      "GTIN was removed from the feed but identifier_exists still expects identifiers",
      "identifier_exists is set to false but brand or MPN was also not provided — Google requires at least brand when GTIN is absent",
      "Custom or bundle products with no standard identifiers but no documentation to show this",
      "Feed app uses a default identifier_exists value that does not match all products in the feed",
      "Brand name was removed from the feed but identifier_exists still refers to having a brand",
    ],
    checklist: [
      "Check Merchant Center diagnostics to confirm which products are flagged for identifier_exists issues",
      "Determine whether each flagged product has a real GTIN (barcode) on the physical item or packaging",
      "Check whether the brand name is present and recognized by the manufacturer",
      "Locate the manufacturer part number (MPN) on the product, packaging, or supplier documentation",
      "Review your Shopify feed app or CSV feed settings to see how identifier_exists is mapped",
      "If the product truly has no GTIN, confirm brand and MPN are still provided in the feed",
      "If the product has a GTIN, set identifier_exists to true and verify the GTIN is correct",
      "Preview the feed output to confirm identifier_exists matches the actual identifier data",
      "If using Shopify, check whether the Google & YouTube channel or third-party app is overwriting identifier_exists",
    ],
    evidence: [
      "Photo of the product barcode clearly showing the GTIN number",
      "Supplier or manufacturer invoice listing the product's GTIN, brand, and MPN",
      "Screenshot of Merchant Center diagnostics showing the identifier_exists error for specific products",
      "Feed export or preview showing the current identifier_exists and GTIN/brand/MPN values",
      "Shopify product metafields screenshot showing GTIN, brand, and MPN configuration",
    ],
    recoverySteps: [
      "Step 1: Identify which products triggered the identifier_exists error and whether they have real identifiers",
      "Step 2: For products with GTINs: locate the actual barcode number from the physical product",
      "Step 3: For products without GTINs: confirm the product type (custom-made, bundle, raw material) and prepare documentation",
      "Step 4: Set identifier_exists to true for products that have GTIN, brand, or MPN",
      "Step 5: Set identifier_exists to false only for products that genuinely have no standard identifiers",
      "Step 6: Even with identifier_exists set to false, provide brand and MPN if available",
      "Step 7: Update the feed in Shopify, feed app, or CSV, then preview the output before submitting",
      "Step 8: Resubmit the product feed in Merchant Center and request re-review for affected products",
      "Step 9: Monitor the diagnostics tab for any remaining errors after resubmission",
    ],
    mistakes: [
      "Setting identifier_exists to false for a product that actually has a valid GTIN — this triggers the 'filled out a field incorrectly' error",
      "Making up a GTIN for a product that does not have one — this causes an invalid GTIN error and may trigger a policy violation",
      "Leaving identifier_exists at its default value without checking whether it matches the product — default behavior varies by feed app and product category",
      "Not checking whether the Shopify feed app or third-party integration is automatically overwriting the identifier_exists setting",
      "Removing a GTIN from the feed but leaving identifier_exists set to true, which causes a mismatch",
      "Setting identifier_exists to false and then also omitting the brand and MPN — Google requires at least the brand name when GTIN is absent",
    ],
    whenToAskExpert: [
      "The product has no standard identifiers and you are unsure whether identifier_exists should be set to false",
      "Your GTIN keeps failing validation even though the barcode number is correct",
      "A Shopify or feed app keeps overwriting your identifier_exists setting and you cannot control it",
      "You need to register a brand in Google's brand registry before identifiers can be accepted",
      "You have a large catalog with mixed identifier requirements and need systematic feed configuration",
    ],
    faqs: [
      {
        question: "What does identifier_exists mean in Google Merchant Center?",
        answer:
          "identifier_exists tells Google whether a product has standard product identifiers — specifically a GTIN, a brand name, or a manufacturer part number (MPN). It is a yes/no flag that helps Google determine whether to validate those identifier fields. If identifier_exists is true, Google expects to find valid identifier data. If it is false, Google does not require identifiers but still expects the brand if no GTIN is provided.",
      },
      {
        question: "Should identifier_exists be true or false?",
        answer:
          "Set it to true if your product has a GTIN (barcode), a brand name, or an MPN. Set it to false only if the product genuinely has none of these identifiers — for example, custom-made items, handmade goods, or products sold without manufacturer packaging. Do not set it to false just because you do not want to deal with identifiers. Getting this wrong causes errors on both sides.",
      },
      {
        question: "Why does Google Merchant Center say I filled out a field incorrectly?",
        answer:
          "This error often appears when identifier data is present in the feed but identifier_exists is set incorrectly. For example, if a GTIN is listed but identifier_exists is false, or if the GTIN or brand field has an invalid format. Review the specific field mentioned in the error and cross-check it against your identifier_exists setting.",
      },
      {
        question: "How is identifier_exists related to GTIN, MPN, and brand?",
        answer:
          "identifier_exists acts as a gate: it tells Google whether to look for these three identifiers. If the gate is open (true), Google expects to find accurate data in the GTIN, brand, and MPN fields. If the gate is closed (false), Google does not require them — but you still need to provide the brand if no GTIN is present. The identifiers themselves must still be valid even when identifier_exists is false.",
      },
      {
        question: "What should Shopify sellers check when identifier_exists causes feed errors?",
        answer:
          "Shopify sellers should check two things. First, verify that the GTIN, brand, and MPN metafields are populated for each product. Second, check how the Google & YouTube channel or your third-party feed app maps the identifier_exists attribute — some apps set this automatically based on their own rules and may override manual settings. Export the feed and review the identifier_exists value for each flagged product to find the mismatch.",
      },
    ],
    relatedSlugs: [
      "missing-product-identifiers",
      "limited-performance-missing-identifiers",
      "gtin-mpn-brand",
      "invalid-gtin",
      "shopify-feed-errors",
    ],
  },
];

export function getIssueBySlug(slug: string): Issue | undefined {
  return issues.find((issue) => issue.slug === slug);
}

export function getIssuesByPlatform(platform: string): Issue[] {
  return issues.filter((issue) => issue.platform === platform);
}

export function getRelatedIssues(slugs: string[]): Issue[] {
  return slugs
    .map((slug) => getIssueBySlug(slug))
    .filter((issue): issue is Issue => issue !== undefined);
}
