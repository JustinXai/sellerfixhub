import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thanks — SellerFixHub",
  description: "Confirmation page for SellerFixHub expert matching requests.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      {/* Confirmation */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-6">
          <svg
            className="w-6 h-6 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="text-2xl lg:text-3xl font-bold text-slate-950 mb-3 leading-tight">
          Thanks — your seller issue was received
        </h1>
        <p className="text-sm text-slate-500 leading-relaxed">
          We&apos;ve received your submission. If your issue looks like a case that may need expert help,
          we&apos;ll reply by email with next steps.
        </p>
      </div>

      {/* What happens next */}
      <section className="mb-7">
        <h2 className="text-base font-semibold text-slate-950 mb-2">What happens next</h2>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-slate-600">
          <li>We review the issue message you submitted.</li>
          <li>We may reply with clarification questions.</li>
          <li>If appropriate, we may route your case to an independent specialist.</li>
          <li>SellerFixHub does not guarantee approval, reinstatement, or appeal success.</li>
        </ul>
      </section>

      {/* While you wait */}
      <section className="mb-8">
        <h2 className="text-base font-semibold text-slate-950 mb-3">While you wait</h2>
        <div className="space-y-2">
          <a
            href="/tools/issue-message-explainer"
            className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors"
          >
            <div>
              <p className="text-sm font-medium text-slate-950">Try the Issue Message Explainer</p>
              <p className="text-xs text-slate-400">Get a plain-English explanation of your platform notice</p>
            </div>
            <span className="text-slate-400 ml-4 flex-shrink-0">→</span>
          </a>
          <a
            href="/platforms/google-merchant-center"
            className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors"
          >
            <div>
              <p className="text-sm font-medium text-slate-950">Browse Google Merchant Center guides</p>
              <p className="text-xs text-slate-400">Common feed errors, misrepresentations, and account issues</p>
            </div>
            <span className="text-slate-400 ml-4 flex-shrink-0">→</span>
          </a>
          <a
            href="/platforms/tiktok-shop"
            className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors"
          >
            <div>
              <p className="text-sm font-medium text-slate-950">Browse TikTok Shop guides</p>
              <p className="text-xs text-slate-400">Product rejections, violation points, and account health</p>
            </div>
            <span className="text-slate-400 ml-4 flex-shrink-0">→</span>
          </a>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="pt-6" style={{ borderTop: "1px solid #e2e8f0" }}>
        <p className="text-xs text-slate-400 leading-relaxed">
          SellerFixHub is independent and is not affiliated with Google, TikTok, Amazon, Shopify, or any
          marketplace. We do not guarantee product approval, account reinstatement, appeal success, or
          review outcomes. Platform decisions are made by the platform.
        </p>
      </section>
    </div>
  );
}
