"use client";

import { useState } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
import { TrackedLink } from "./TrackedLink";

interface ExplainerResult {
  likelyIssue: string;
  meaning: string;
  whatToCheck: string;
  evidence: string;
  recommendedGuide: string;
  guideUrl: string;
  cta: string;
}

const RULES_GMC = [
  {
    keywords: ["misrepresentation"],
    result: {
      likelyIssue: "Google Merchant Center – Misrepresentation",
      meaning:
        "Your product listing does not accurately describe what you are selling. This can include mismatched titles, prices, images, or brands.",
      whatToCheck:
        "Review your feed data and compare it against your actual product page. Check title, price, image, brand, and condition.",
      evidence:
        "Product photos, supplier invoice, accurate feed data screenshot, landing page screenshot.",
      recommendedGuide: "Misrepresentation Recovery Guide",
      guideUrl: "/google-merchant-center/misrepresentation",
      cta: "Get expert help for misrepresentation",
    } as ExplainerResult,
  },
  {
    keywords: ["product disapproved", "disapproved"],
    result: {
      likelyIssue: "Google Merchant Center – Product Disapproved",
      meaning:
        "Your product listing does not meet Google's data quality or policy standards. The specific reason is shown in Merchant Center.",
      whatToCheck:
        "Find the specific disapproval reason in Merchant Center. Check which attribute is flagged.",
      evidence:
        "Screenshot of disapproval reason, current feed data, product images meeting Google's standards.",
      recommendedGuide: "Product Disapproved Recovery Guide",
      guideUrl: "/google-merchant-center/product-disapproved",
      cta: "Get expert help for product disapproval",
    } as ExplainerResult,
  },
  {
    keywords: ["invalid gtin", "gtin", "gtin invalid", "invalid barcode"],
    result: {
      likelyIssue: "Google Merchant Center – Invalid GTIN",
      meaning:
        "The barcode number (GTIN) you provided does not pass Google's validation. This usually means the number is incorrect or does not match the product.",
      whatToCheck:
        "Find the GTIN printed on the physical product packaging. Verify it matches your feed data exactly.",
      evidence:
        "Photo of the product barcode, supplier invoice with GTIN, screenshot of current feed data.",
      recommendedGuide: "Invalid GTIN Recovery Guide",
      guideUrl: "/google-merchant-center/invalid-gtin",
      cta: "Get expert help for invalid GTIN",
    } as ExplainerResult,
  },
  {
    keywords: ["price mismatch", "price mismatch error", "price error"],
    result: {
      likelyIssue: "Google Merchant Center – Price Mismatch",
      meaning:
        "The price in your Merchant Center feed does not match the price shown on your landing page at checkout. Google requires exact matching.",
      whatToCheck:
        "Compare your feed price against your landing page price (including at checkout). Check for sale pricing differences.",
      evidence:
        "Screenshot of feed price, screenshot of landing page price at checkout, any active sale pricing details.",
      recommendedGuide: "Price Mismatch Recovery Guide",
      guideUrl: "/google-merchant-center/price-mismatch",
      cta: "Get expert help for price mismatch",
    } as ExplainerResult,
  },
];

const RULES_TIKTOK = [
  {
    keywords: ["product rejected", "listing rejected", "product removal"],
    result: {
      likelyIssue: "TikTok Shop – Product Rejected",
      meaning:
        "Your product listing does not meet TikTok's content, safety, or policy standards. This can include restricted categories, image issues, or missing certifications.",
      whatToCheck:
        "Review the rejection reason in TikTok Seller Center. Check category requirements and image guidelines.",
      evidence:
        "Screenshot of rejection reason, compliant product images, required certifications or documents.",
      recommendedGuide: "Product Rejected Recovery Guide",
      guideUrl: "/tiktok-shop/product-rejected",
      cta: "Get expert help for product rejection",
    } as ExplainerResult,
  },
  {
    keywords: ["violation", "appeal", "shop health", "account suspension", "account suspended"],
    result: {
      likelyIssue: "TikTok Shop – Violation and Account Health",
      meaning:
        "A policy violation has been recorded against your account or listing. Violations can affect your shop health score and may lead to account restrictions.",
      whatToCheck:
        "Review the violation details in Seller Center. Identify affected orders and check your shop health score.",
      evidence:
        "Violation notice screenshot, supplier invoices, shipping records, customer communication records.",
      recommendedGuide: "Violation Appeal Guide",
      guideUrl: "/tiktok-shop/violation-appeal",
      cta: "Get expert help for violation appeal",
    } as ExplainerResult,
  },
];

const DEFAULT_RESULT: ExplainerResult = {
  likelyIssue: "Unknown Issue Message",
  meaning:
    "We could not identify a specific issue from your message. This may mean it is a new or uncommon error.",
  whatToCheck:
    "Read the original platform notice carefully. Check your account diagnostics or shop health section for more details.",
  evidence:
    "Screenshot of the original notice, account diagnostics, screenshots of affected listings.",
  recommendedGuide: "",
  guideUrl: "",
  cta: "Get expert help",
};

function matchKeywords(
  message: string,
  rules: { keywords: string[]; result: ExplainerResult }[]
): ExplainerResult {
  const lower = message.toLowerCase();
  for (const rule of rules) {
    for (const keyword of rule.keywords) {
      if (lower.includes(keyword)) {
        return rule.result;
      }
    }
  }
  return DEFAULT_RESULT;
}

interface IssueMessageExplainerProps {
  variant?: "hero" | "inline";
}

export function IssueMessageExplainer({ variant = "inline" }: IssueMessageExplainerProps) {
  const [message, setMessage] = useState("");
  const [platform, setPlatform] = useState("google-merchant-center");
  const [result, setResult] = useState<ExplainerResult | null>(null);

  const handleExplain = () => {
    if (!message.trim()) return;

    trackEvent("issue_explainer_submit", {
      location: variant,
      platform,
      has_message: Boolean(message.trim()),
    });

    let matched: ExplainerResult;
    if (platform === "google-merchant-center") {
      matched = matchKeywords(message, RULES_GMC);
    } else if (platform === "tiktok-shop") {
      matched = matchKeywords(message, RULES_TIKTOK);
    } else {
      matched = DEFAULT_RESULT;
    }
    setResult(matched);
  };

  if (variant === "hero") {
    return (
      <div className="w-full space-y-3">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Paste your platform issue message here..."
          className="w-full border border-slate-200 rounded-xl p-3.5 text-sm h-20 resize-none focus:outline-none focus:ring-2 focus:ring-slate-900 placeholder:text-slate-400"
        />
        <div className="flex flex-col sm:flex-row gap-2.5">
          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            className="border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white"
          >
            <option value="google-merchant-center">Google Merchant Center</option>
            <option value="tiktok-shop">TikTok Shop</option>
            <option value="other">Amazon / Other Marketplace</option>
            <option value="unknown">Not sure</option>
          </select>
          <div className="flex gap-2 flex-1">
            <button
              onClick={handleExplain}
              className="flex-1 px-4 py-2 bg-slate-950 text-white text-sm font-medium rounded-xl hover:bg-slate-800 transition-colors active:scale-[0.98]"
            >
              Explain this issue
            </button>
            <TrackedLink
              href="/services/expert-matching"
              eventName="expert_help_click"
              eventParams={{ location: "issue_explainer", target: "/services/expert-matching" }}
              className="flex-none px-4 py-2 border border-slate-200 text-slate-600 text-sm font-medium rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-colors"
            >
              Get expert help
            </TrackedLink>
          </div>
        </div>
        {result && (
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <h3 className="font-semibold text-slate-950 text-sm mb-1">{result.likelyIssue}</h3>
            <p className="text-sm text-slate-600 mb-2 leading-relaxed">{result.meaning}</p>
            {result.guideUrl && (
              <Link
                href={result.guideUrl}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 border border-slate-300 rounded-lg px-3 py-1.5 hover:bg-slate-100 transition-colors"
              >
                Read the full guide <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Paste your platform issue message here..."
        className="w-full border border-slate-200 rounded-xl p-3.5 text-sm h-28 resize-none focus:outline-none focus:ring-2 focus:ring-slate-900 placeholder:text-slate-400"
      />
      <div className="flex flex-col sm:flex-row gap-2.5 items-start sm:items-center">
        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          className="border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white"
        >
          <option value="google-merchant-center">Google Merchant Center</option>
          <option value="tiktok-shop">TikTok Shop</option>
          <option value="other">Amazon / Other Marketplace</option>
          <option value="unknown">Not sure</option>
        </select>
        <button
          onClick={handleExplain}
          className="px-5 py-2 bg-slate-950 text-white text-sm font-medium rounded-xl hover:bg-slate-800 transition-colors active:scale-[0.98]"
        >
          Explain this issue
        </button>
      </div>
      {result && (
        <div className="mt-6 border border-slate-200 rounded-xl p-5 space-y-4">
          <div>
            <h3 className="font-semibold text-slate-950 text-sm mb-1">{result.likelyIssue}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{result.meaning}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-slate-50 rounded-xl p-4">
              <h4 className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1">What to check first</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{result.whatToCheck}</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4">
              <h4 className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1">Evidence to prepare</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{result.evidence}</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 pt-1">
            {result.guideUrl && (
              <TrackedLink
                href={result.guideUrl}
                eventName="issue_explainer_click"
                eventParams={{ location: "issue_explainer", platform, guide: result.guideUrl }}
                className="inline-flex items-center gap-1.5 px-4 py-2 border border-slate-200 text-slate-700 text-sm font-medium rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-colors"
              >
                Read the full guide <span aria-hidden="true">→</span>
              </TrackedLink>
            )}
            <TrackedLink
              href="/services/expert-matching"
              eventName="expert_help_click"
              eventParams={{ location: "issue_explainer", platform, target: "/services/expert-matching" }}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-950 text-white text-sm font-medium rounded-xl hover:bg-slate-800 transition-colors active:scale-[0.98]"
            >
              {result.cta}
            </TrackedLink>
          </div>
        </div>
      )}
    </div>
  );
}
