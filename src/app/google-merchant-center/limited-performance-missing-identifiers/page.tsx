import type { Metadata } from "next";
import { issues } from "@/data/issues";
import { IssuePage } from "@/components/IssuePage";

const SLUG = "limited-performance-missing-identifiers";

export function generateStaticParams() {
  return [{ slug: SLUG }];
}

export function generateMetadata(): Metadata {
  const issue = issues.find((i) => i.slug === SLUG)!;
  return {
    title: issue.metaTitle,
    description: issue.metaDescription,
    alternates: { canonical: `/google-merchant-center/${SLUG}` },
  };
}

export default function LimitedPerformanceMissingIdentifiersPage() {
  const issue = issues.find((i) => i.slug === SLUG)!;
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <IssuePage
        issue={issue}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Google Merchant Center", href: "/platforms/google-merchant-center" },
          { label: issue.h1 },
        ]}
      />
    </div>
  );
}
