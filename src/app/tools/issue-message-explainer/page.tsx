import type { Metadata } from "next";
import { IssueMessageExplainer } from "@/components/IssueMessageExplainer";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Issue Message Explainer",
  description:
    "Paste your platform issue message and get an instant plain-English explanation. No AI API required — rule-based matching for Google Merchant Center and TikTok Shop errors.",
};

export default function IssueMessageExplainerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold text-slate-950 mb-2 leading-tight">Issue Message Explainer</h1>
        <p className="text-sm text-slate-500 leading-relaxed">
          Paste your platform issue message below and get an instant plain-English explanation. This tool uses rule-based keyword matching — no AI API required.
        </p>
      </div>

      <IssueMessageExplainer variant="inline" />

      <div className="mt-10">
        <DisclaimerBox variant="card" />
      </div>

      <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-base font-semibold text-slate-950 mb-2">Not sure which platform?</h2>
        <p className="text-sm text-slate-500 mb-4 leading-relaxed">
          If you received an error message and are not sure which platform it is from, try selecting &ldquo;Not sure&rdquo; and our tool will provide general guidance.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/platforms/google-merchant-center" className="text-sm text-slate-600 hover:text-slate-950 underline underline-offset-2">
            Google Merchant Center issues
          </Link>
          <Link href="/platforms/tiktok-shop" className="text-sm text-slate-600 hover:text-slate-950 underline underline-offset-2">
            TikTok Shop issues
          </Link>
        </div>
      </div>
    </div>
  );
}
