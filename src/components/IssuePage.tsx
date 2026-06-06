import type { Issue } from "@/data/issues";
import { DisclaimerBox } from "./DisclaimerBox";
import { FAQ } from "./FAQ";
import { RelatedIssues } from "./RelatedIssues";
import { Breadcrumbs } from "./Breadcrumbs";
import { TrackedLink } from "./TrackedLink";

interface IssuePageProps {
  issue: Issue;
  breadcrumbs: { label: string; href?: string }[];
}

export function IssuePage({ issue, breadcrumbs }: IssuePageProps) {
  return (
    <article className="max-w-5xl">
      <Breadcrumbs items={breadcrumbs} />

      <header className="mb-8">
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
          <span className="uppercase tracking-wide">{issue.platform.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()).replace("Tiktok", "TikTok")}</span>
          <span className="text-slate-300">/</span>
          <span>Updated {issue.updatedAt}</span>
        </div>
        <h1 className="text-2xl lg:text-3xl font-bold text-slate-950 mb-3 leading-tight">{issue.h1}</h1>
      </header>

      {/* AI Summary */}
      <section className="rounded-xl border border-blue-200 bg-blue-50 p-5 mb-8">
        <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-1">Summary</p>
        <p className="text-sm text-slate-700 leading-relaxed">{issue.aiSummary}</p>
      </section>

      {/* Quick Answer */}
      <section className="mb-7">
        <h2 className="text-lg font-semibold text-slate-950 mb-2">Quick Answer</h2>
        <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 border border-slate-200 rounded-xl p-4">
          {issue.quickAnswer}
        </p>
      </section>

      {/* What it means */}
      <section className="mb-7">
        <h2 className="text-lg font-semibold text-slate-950 mb-2">What This Issue Means</h2>
        <p className="text-sm text-slate-600 leading-relaxed">{issue.meaning}</p>
      </section>

      {/* Common Causes — semantic ul with list-disc, no custom bullet span */}
      <section className="mb-7">
        <h2 className="text-lg font-semibold text-slate-950 mb-2">Why It Happens</h2>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-600 text-sm">
          {issue.commonCauses.map((cause, i) => (
            <li key={i} className="leading-relaxed">{cause}</li>
          ))}
        </ul>
      </section>

      {/* Checklist — checkbox list, input+text as list items */}
      <section className="mb-7">
        <h2 className="text-lg font-semibold text-slate-950 mb-2">What to Check First</h2>
        <ul className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
          {issue.checklist.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
              <input type="checkbox" readOnly className="mt-0.5 flex-shrink-0 rounded border-slate-300" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Evidence — semantic ul with list-disc, no custom bullet span */}
      <section className="mb-7">
        <h2 className="text-lg font-semibold text-slate-950 mb-2">Evidence to Prepare</h2>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-600 text-sm">
          {issue.evidence.map((item, i) => (
            <li key={i} className="leading-relaxed">{item}</li>
          ))}
        </ul>
      </section>

      {/* Recovery Steps — semantic ol with list-decimal, no custom number badge */}
      <section className="mb-7">
        <h2 className="text-lg font-semibold text-slate-950 mb-2">Step-by-Step Recovery Path</h2>
        <ol className="list-decimal pl-5 space-y-2 text-slate-600 text-sm">
          {issue.recoverySteps.map((step, i) => (
            <li key={i} className="leading-relaxed pl-1">{step.replace(/^Step \d+: /, "")}</li>
          ))}
        </ol>
      </section>

      {/* Mistakes — styled list disc, no literal × text node */}
      <section className="mb-7">
        <h2 className="text-lg font-semibold text-slate-950 mb-2">Mistakes to Avoid</h2>
        <ul className="bg-red-50 border border-red-100 rounded-xl p-5 space-y-2 text-sm text-slate-600 marker:text-red-400 list-disc pl-9">
          {issue.mistakes.map((item, i) => (
            <li key={i} className="leading-relaxed">{item}</li>
          ))}
        </ul>
      </section>

      {/* When to ask expert — semantic ul with list-disc, no custom bullet span */}
      <section className="mb-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-lg font-semibold text-slate-950 mb-2">When to Ask an Expert</h2>
        <p className="text-xs text-slate-500 mb-3">Consider reaching out to an expert if:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-600 text-sm">
          {issue.whenToAskExpert.map((item, i) => (
            <li key={i} className="leading-relaxed">{item}</li>
          ))}
        </ul>
        <div className="mt-5 pt-4 border-t border-slate-200 space-y-2">
          <TrackedLink
            href={`/services/expert-matching?source=issue_page&platform=${issue.platform}&issue=${issue.slug}`}
            eventName="expert_help_click"
            eventParams={{
              location: "issue_page",
              platform: issue.platform,
              issue: issue.slug,
              target: "/services/expert-matching",
            }}
            className="inline-block px-5 py-2 bg-slate-950 text-white text-sm font-medium rounded-xl hover:bg-slate-800 transition-colors active:scale-[0.98]"
          >
            Get expert help
          </TrackedLink>
          <TrackedLink
            href={`/tools/issue-message-explainer?source=issue_page&platform=${issue.platform}&issue=${issue.slug}`}
            eventName="issue_explainer_click"
            eventParams={{
              location: "issue_page",
              platform: issue.platform,
              issue: issue.slug,
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2 border border-slate-200 text-slate-600 text-sm font-medium rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-colors"
          >
            Issue Message Explainer <span aria-hidden="true">→</span>
          </TrackedLink>
        </div>
      </section>

      {/* Related Issues */}
      <RelatedIssues slugs={issue.relatedSlugs} />

      {/* FAQ */}
      <FAQ items={issue.faqs} />

      {/* Disclaimer */}
      <div className="mt-12">
        <DisclaimerBox variant="card" />
      </div>
    </article>
  );
}
