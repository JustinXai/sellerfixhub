import Link from "next/link";
import type { Issue } from "@/data/issues";

interface IssueCardProps {
  issue: Issue;
  platformLabel?: string;
}

export function IssueCard({ issue, platformLabel }: IssueCardProps) {
  const href =
    issue.platform === "google-merchant-center"
      ? `/google-merchant-center/${issue.slug}`
      : `/tiktok-shop/${issue.slug}`;

  return (
    <Link
      href={href}
      className="block rounded-xl border border-slate-200 bg-white p-5 hover:border-slate-300 hover:shadow-sm transition-all"
    >
      {platformLabel && (
        <span className="inline-block text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">
          {platformLabel}
        </span>
      )}
      <h3 className="font-semibold text-slate-900 mb-2 text-base leading-snug">{issue.h1}</h3>
      <p className="text-sm text-slate-500 mb-3 line-clamp-2 leading-relaxed">{issue.quickAnswer}</p>
      <span className="text-sm font-medium text-slate-700">
        Read guide →
      </span>
    </Link>
  );
}
