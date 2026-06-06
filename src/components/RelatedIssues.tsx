import Link from "next/link";
import { getIssueBySlug, type Issue } from "@/data/issues";

interface RelatedIssuesProps {
  slugs: string[];
}

export function RelatedIssues({ slugs }: RelatedIssuesProps) {
  const related = slugs
    .map((slug) => getIssueBySlug(slug))
    .filter((issue): issue is Issue => issue !== undefined)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold text-slate-900 mb-6">Related Issues</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {related.map((issue) => {
          const href =
            issue.platform === "google-merchant-center"
              ? `/google-merchant-center/${issue.slug}`
              : `/tiktok-shop/${issue.slug}`;
          return (
            <Link
              key={issue.slug}
              href={href}
              className="block border border-slate-200 rounded-xl p-4 hover:border-slate-300 hover:shadow-sm transition-all bg-white"
            >
              <h3 className="font-medium text-slate-900 text-sm mb-1">{issue.h1}</h3>
              <p className="text-xs text-slate-500">{issue.quickAnswer}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
