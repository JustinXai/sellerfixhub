import Link from "next/link";
import { siteConfig } from "@/config/site";
import { TrackedLink } from "./TrackedLink";

export function Header() {
  return (
    <header
      className="bg-[#fffdf7] sticky top-0 z-50"
      style={{ boxShadow: "0 1px 0 0 #e7e0d4" }}
    >
      <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold text-slate-950 tracking-tight">
          {siteConfig.siteName}
        </Link>
        <nav className="hidden md:flex items-center gap-1 text-sm">
          <Link
            href="/platforms/google-merchant-center"
            className="px-3 py-1.5 text-stone-600 hover:text-slate-950 rounded-lg hover:bg-stone-100 transition-colors"
          >
            Google Merchant Center
          </Link>
          <Link
            href="/platforms/tiktok-shop"
            className="px-3 py-1.5 text-stone-600 hover:text-slate-950 rounded-lg hover:bg-stone-100 transition-colors"
          >
            TikTok Shop
          </Link>
          <Link
            href="/tools/issue-message-explainer"
            className="px-3 py-1.5 text-stone-600 hover:text-slate-950 rounded-lg hover:bg-stone-100 transition-colors"
          >
            Issue Explainer
          </Link>
          <TrackedLink
            href="/services/expert-matching"
            eventName="expert_help_click"
            eventParams={{ location: "header", target: "/services/expert-matching" }}
            className="ml-2 px-4 py-2 bg-slate-950 text-white text-sm font-medium rounded-xl hover:bg-slate-800 transition-colors active:scale-[0.98]"
          >
            {siteConfig.secondaryCta}
          </TrackedLink>
        </nav>
        <nav className="md:hidden flex items-center gap-2 text-sm">
          <TrackedLink
            href="/services/expert-matching"
            eventName="expert_help_click"
            eventParams={{ location: "header", target: "/services/expert-matching" }}
            className="px-3 py-1.5 bg-slate-950 text-white text-sm font-medium rounded-xl"
          >
            Expert Help
          </TrackedLink>
        </nav>
      </div>
    </header>
  );
}
