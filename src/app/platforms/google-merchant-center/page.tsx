import type { Metadata } from "next";
import Link from "next/link";
import { IssueCard } from "@/components/IssueCard";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { getIssuesByPlatform } from "@/data/issues";

export const metadata: Metadata = {
  title: "Google Merchant Center Issues",
  description:
    "Common Google Merchant Center issues including misrepresentation, product disapproved, invalid GTIN, and price mismatch errors.",
};

export default function GoogleMerchantCenterPage() {
  const gmcIssues = getIssuesByPlatform("google-merchant-center");

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-3">Google Merchant Center Issues</h1>
        <p className="text-slate-600 leading-relaxed max-w-2xl">
          Google Merchant Center manages your product listings for Shopping ads and free listings. Issues
          here affect whether your products appear in search results. Browse common issues below or use
          the issue message explainer.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {gmcIssues.map((issue) => (
          <IssueCard key={issue.slug} issue={issue} />
        ))}
      </div>

      <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 mb-8">
        <h2 className="text-lg font-semibold text-slate-900 mb-2">Need help with a Google Merchant Center issue?</h2>
        <p className="text-sm text-slate-600 mb-4">
          If you have a specific error message, paste it into our issue message explainer tool for an
          instant plain-English explanation.
        </p>
        <Link
          href="/tools/issue-message-explainer"
          className="inline-block px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-xl hover:bg-slate-800"
        >
          Use Issue Message Explainer
        </Link>
      </div>

      <DisclaimerBox variant="card" />
    </div>
  );
}
