import type { Metadata } from "next";
import { DisclaimerBox } from "@/components/DisclaimerBox";

export const metadata: Metadata = {
  title: "Expert Matching",
  description:
    "Connect with independent experts who specialize in Google Merchant Center and TikTok Shop issues. Expert matching is free to submit.",
};

const TALLY_EMBED_URL =
  "https://tally.so/embed/RGVlOQ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";
const TALLY_NEW_TAB_URL = "https://tally.so/r/RGVlOQ";

interface Props {
  searchParams?: Promise<{ source?: string; platform?: string; issue?: string }>;
}

export default async function ExpertMatchingPage({ searchParams }: Props) {
  const params = await searchParams;
  const { source, platform, issue } = params ?? {};
  const showContext = source === "issue_page" && platform && issue;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
        <div className="space-y-6">
          <h1 className="text-2xl lg:text-3xl font-bold text-slate-950 leading-tight">
            Get help understanding your seller issue
          </h1>

          <p className="text-sm text-slate-500 leading-relaxed">
            Paste the message you received from Google Merchant Center, TikTok Shop, or another marketplace.
            We&apos;ll help you understand what it likely means and what evidence to prepare before your next review or appeal.
          </p>

          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="text-xs text-slate-600 leading-relaxed">
              Do not submit passwords, API keys, payment details, identity documents, or sensitive personal information.
              SellerFixHub is independent and does not guarantee approval, reinstatement, or appeal success.
            </p>
          </div>

          {showContext && (
            <p className="text-xs text-slate-400 border border-slate-200 rounded-lg px-3 py-2">
              Issue context: {platform.replace(/-/g, " ")} / {issue}
            </p>
          )}

          <div className="rounded-xl border border-slate-200 overflow-hidden" style={{ boxShadow: "0 1px 3px 0 rgb(15 23 42 / 0.06)" }}>
            <iframe
              src={TALLY_EMBED_URL}
              title="SellerFixHub expert matching request form"
              loading="lazy"
              width="100%"
              height={820}
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              className="min-h-[820px] w-full bg-white block"
            />
          </div>

          <p className="text-xs text-slate-400 text-center">
            If the form does not load,{" "}
            <a
              href={TALLY_NEW_TAB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:underline"
            >
              open the secure request form in a new tab
            </a>
            .
          </p>

          <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
            <h2 className="font-semibold text-slate-950 text-sm mb-2">What to expect</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
              {[
                "We review your submission and route it to a relevant independent specialist when appropriate.",
                "No upfront payment is required to submit a request.",
                "SellerFixHub is independent and does not employ the experts.",
                "Submitting a request does not guarantee approval, reinstatement, or appeal success.",
              ].map((item, i) => (
                <li key={i} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl border border-slate-200 p-5">
            <h2 className="font-semibold text-slate-950 mb-3 text-sm">Expert Categories</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
              <li className="leading-relaxed">Google Merchant Center reinstatement</li>
              <li className="leading-relaxed">Feed optimization and compliance</li>
              <li className="leading-relaxed">GTIN and product data validation</li>
              <li className="leading-relaxed">TikTok Shop violation appeals</li>
              <li className="leading-relaxed">Account health recovery</li>
            </ul>
          </div>

          <div className="rounded-xl border border-slate-200 p-5">
            <h2 className="font-semibold text-slate-950 mb-3 text-sm">When to reach out</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
              <li className="leading-relaxed">Your account has been suspended</li>
              <li className="leading-relaxed">Repeated rejections or violations</li>
              <li className="leading-relaxed">High-revenue account at risk</li>
              <li className="leading-relaxed">Complex policy compliance questions</li>
              <li className="leading-relaxed">International platform requirements</li>
            </ul>
          </div>

          <DisclaimerBox variant="card" />
        </div>
      </div>
    </div>
  );
}
