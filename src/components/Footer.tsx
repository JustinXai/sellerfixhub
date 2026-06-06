import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  const { footer, siteName } = siteConfig;

  return (
    <footer className="bg-white mt-16" style={{ borderTop: "1px solid #e2e8f0" }}>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-slate-950 mb-2.5 text-sm">{siteName}</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {siteConfig.tagline}
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-950 mb-2.5 text-sm">Platforms</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/platforms/google-merchant-center" className="text-slate-400 hover:text-slate-700">
                  Google Merchant Center
                </Link>
              </li>
              <li>
                <Link href="/platforms/tiktok-shop" className="text-slate-400 hover:text-slate-700">
                  TikTok Shop
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-950 mb-2.5 text-sm">Resources</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/tools/issue-message-explainer" className="text-slate-400 hover:text-slate-700">
                  Issue Message Explainer
                </Link>
              </li>
              <li>
                <Link href="/services/expert-matching" className="text-slate-400 hover:text-slate-700">
                  Expert Matching
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-slate-400 hover:text-slate-700">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-6 text-center text-xs text-slate-300">
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
