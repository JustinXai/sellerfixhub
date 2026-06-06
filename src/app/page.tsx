import type { Metadata } from "next";
import Link from "next/link";
import { issues } from "@/data/issues";
import { IssueCard } from "@/components/IssueCard";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { TrackedLink } from "@/components/TrackedLink";

export const metadata: Metadata = {
  title: "SellerFixHub – Fix Rejected Products, Feed Errors, and Seller Violations",
  description:
    "Paste a rejection, feed error, or violation message. Get a plain-English next-step checklist before you request another review.",
};

export default function HomePage() {
  const gmcIssues = issues.filter((i) => i.platform === "google-merchant-center").slice(0, 4);
  const tiktokIssues = issues.filter((i) => i.platform === "tiktok-shop");

  return (
    <>
      {/* Hero */}
      <section className="bg-[#f7f2e8]">
        <div className="max-w-6xl mx-auto px-4 pt-14 pb-12 sm:pt-16 sm:pb-14 lg:pb-16">
          {/* Two-column editorial layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 lg:gap-16 items-start">

            {/* Left: editorial text */}
            <div>
              {/* Badge */}
              <span className="inline-flex rounded-full border border-stone-300 bg-[#fffdf7] px-3 py-1 text-xs font-medium text-stone-600">
                Independent seller recovery guide
              </span>

              {/* H1 */}
              <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl text-slate-950 max-w-3xl leading-tight font-serif">
                Fix rejected products, feed errors, and seller violations before your next review.
              </h1>

              {/* Subtitle */}
              <p className="mt-4 max-w-2xl text-base sm:text-lg text-stone-600 leading-relaxed">
                Browse issue guides to understand platform notices, prepare the right evidence, and
                know when to reach out for expert help.
              </p>

              {/* CTA row */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="#guides"
                  className="inline-block px-5 py-2.5 bg-slate-950 text-white text-sm font-medium rounded-xl hover:bg-slate-800 transition-colors active:scale-[0.98]"
                >
                  Browse issue guides
                </a>
                <TrackedLink
                  href="/services/expert-matching?source=homepage"
                  eventName="expert_help_click"
                  eventParams={{ location: "homepage", target: "/services/expert-matching" }}
                  className="inline-block px-5 py-2.5 bg-white text-slate-950 text-sm font-medium rounded-xl border border-stone-200 hover:bg-stone-50 transition-colors active:scale-[0.98]"
                >
                  Get expert help
                </TrackedLink>
              </div>

              {/* Issue Explainer text link */}
              <p className="mt-4 text-sm text-stone-500">
                Need to understand a specific message?{" "}
                <TrackedLink
                  href="/tools/issue-message-explainer?source=homepage"
                  eventName="issue_explainer_click"
                  eventParams={{ location: "homepage", source: "homepage" }}
                  className="text-blue-700 hover:underline underline-offset-2"
                >
                  Use the Issue Explainer
                </TrackedLink>
              </p>

              {/* Proof metrics row */}
              <div className="mt-10 grid grid-cols-3 gap-6 max-w-sm">
                <div>
                  <p className="text-2xl font-semibold text-slate-950 leading-tight">25</p>
                  <p className="mt-0.5 text-xs text-stone-500 leading-snug">recovery guides</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-slate-950 leading-tight">101</p>
                  <p className="mt-0.5 text-xs text-stone-500 leading-snug">FAQ answers</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-slate-950 leading-tight">Evidence-first</p>
                  <p className="mt-0.5 text-xs text-stone-500 leading-snug">checklists</p>
                </div>
              </div>
            </div>

            {/* Right: Recovery desk card */}
            <div className="rounded-[1.75rem] border border-stone-200 bg-[#fffdf7] p-6 shadow-sm">
              <h2 className="text-base font-semibold text-slate-950 leading-snug">Recovery desk</h2>
              <p className="mt-1.5 text-xs text-stone-500 leading-relaxed">
                Start from the platform notice.
              </p>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                Use the guides to understand what the message likely means, what evidence to prepare,
                and when expert help may be useful.
              </p>

              {/* Hot entry list */}
              <ul className="mt-5 space-y-1">
                {[
                  { label: "Misrepresentation", href: "/google-merchant-center/misrepresentation" },
                  { label: "Appeal rejected", href: "/google-merchant-center/appeal-rejected" },
                  { label: "Missing product identifiers", href: "/google-merchant-center/missing-product-identifiers" },
                  { label: "Shopify feed errors", href: "/google-merchant-center/shopify-feed-errors" },
                  { label: "TikTok restricted products", href: "/tiktok-shop/restricted-products" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-center justify-between text-sm text-stone-700 hover:text-slate-950 hover:bg-stone-100 rounded-lg px-3 py-2 -mx-3 transition-colors"
                    >
                      <span className="truncate">{item.label}</span>
                      <span className="text-stone-400 ml-2 flex-shrink-0 text-xs">→</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                href="#guides"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-blue-700 hover:text-blue-900 hover:underline underline-offset-2 transition-colors"
              >
                Browse recovery guides
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How SellerFixHub helps */}
      <section className="bg-[#fffdf7] py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-semibold text-slate-950 mb-2">How SellerFixHub helps</h2>
          <p className="text-sm text-stone-500 mb-10 max-w-2xl">
            A simple recovery workflow for sellers who need to understand a platform notice before
            taking the next step.
          </p>

          {/* Recovery path preview as workflow steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {[
              {
                step: "1",
                title: "Browse the guides",
                desc: "Find the issue that matches your platform notice or error code.",
              },
              {
                step: "2",
                title: "Understand the notice",
                desc: "Read a plain-English explanation of what the error message likely means.",
              },
              {
                step: "3",
                title: "Prepare evidence",
                desc: "Know exactly what screenshots, invoices, and documents to gather.",
              },
              {
                step: "4",
                title: "Decide on next steps",
                desc: "Choose whether to self-appeal, request a review, or reach out for expert help.",
              },
            ].map((item) => (
              <div key={item.step} className="flex flex-col gap-2.5">
                <div className="w-7 h-7 rounded-full bg-amber-700 text-white text-xs font-semibold flex items-center justify-center flex-shrink-0">
                  {item.step}
                </div>
                <h3 className="font-semibold text-slate-950 text-sm leading-snug">{item.title}</h3>
                <p className="text-xs text-stone-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Popular recovery guides */}
          <div className="rounded-xl border border-stone-200 bg-white p-5">
            <h3 className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-3">
              Popular guides
            </h3>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-1">
              {[
                { label: "Misrepresentation", href: "/google-merchant-center/misrepresentation" },
                { label: "Account suspended", href: "/google-merchant-center/account-suspended" },
                { label: "Appeal rejected", href: "/google-merchant-center/appeal-rejected" },
                { label: "Restricted products", href: "/tiktok-shop/restricted-products" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between text-sm text-stone-700 hover:text-slate-950 hover:bg-stone-50 rounded-lg px-3 py-2 -mx-3 transition-colors"
                  >
                    <span className="truncate">{item.label}</span>
                    <span className="text-stone-400 ml-2 flex-shrink-0 text-xs">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Google Merchant Center Issues */}
      <section id="guides" className="bg-[#f7f2e8] py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-2.5 mb-5">
            <span className="inline-flex items-center justify-center rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
              Google Merchant Center
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {gmcIssues.map((issue) => (
              <IssueCard key={issue.slug} issue={issue} />
            ))}
          </div>
        </div>
      </section>

      {/* TikTok Shop Violations */}
      <section className="bg-[#fffdf7] py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-2.5 mb-5">
            <span className="inline-flex items-center justify-center rounded-full border border-pink-200 bg-pink-50 px-2.5 py-1 text-xs font-medium text-pink-700">
              TikTok Shop
            </span>
          </div>
          <h2 className="sr-only">TikTok Shop Issues</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tiktokIssues.map((issue) => (
              <IssueCard key={issue.slug} issue={issue} />
            ))}
          </div>
        </div>
      </section>

      {/* Expert Matching CTA */}
      <section className="bg-[#f7f2e8] py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-xl font-semibold text-slate-950 mb-2">Need Expert Help?</h2>
          <p className="text-sm text-stone-500 leading-relaxed mb-6 max-w-lg mx-auto">
            If your issue is complex, has recurred, or has significant revenue impact, connect with an
            independent specialist who specializes in your platform.
          </p>
          <TrackedLink
            href="/services/expert-matching"
            eventName="expert_help_click"
            eventParams={{ location: "homepage", target: "/services/expert-matching" }}
            className="inline-block px-6 py-2.5 bg-slate-950 text-white text-sm font-medium rounded-xl hover:bg-slate-800 transition-colors active:scale-[0.98]"
          >
            Get expert help
          </TrackedLink>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-white pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <DisclaimerBox variant="inline" />
        </div>
      </section>
    </>
  );
}
