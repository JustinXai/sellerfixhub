import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Independent disclaimer for SellerFixHub — an educational resource, not affiliated with Google, TikTok, or any marketplace.",
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">Disclaimer</h1>
      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
        {siteConfig.disclaimer.full.split("\n\n").map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </div>
  );
}
