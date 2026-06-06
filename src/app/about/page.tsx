import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { DisclaimerBox } from "@/components/DisclaimerBox";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about SellerFixHub — an independent educational resource for online sellers facing product rejections, feed errors, and platform violations.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">About SellerFixHub</h1>

      <section className="space-y-6 text-slate-700 leading-relaxed">
        <p>
          SellerFixHub is an independent educational resource for online sellers. We help sellers
          understand platform issue messages, prepare evidence, and decide when to seek expert help.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 pt-4">What We Do</h2>
        <ul className="list-disc pl-5 space-y-2">
          {siteConfig.whatWeDo.map((item, i) => (
            <li key={i} className="leading-relaxed">{item}</li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold text-slate-900 pt-4">What We Do Not Do</h2>
        <ul className="list-disc pl-5 space-y-2 marker:text-red-400">
          {siteConfig.whatWeDontDo.map((item, i) => (
            <li key={i} className="leading-relaxed">{item}</li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold text-slate-900 pt-4">Who This Site Is For</h2>
        <p>
          SellerFixHub is for online sellers who use Google Merchant Center, TikTok Shop, or similar
          platforms — and who have received error messages, product rejections, or violation notices
          they do not fully understand.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 pt-4">Contact</h2>
        <p>
          For questions or feedback, please visit our{" "}
          <a href="/contact" className="text-slate-900 underline">
            contact page
          </a>
          .
        </p>
      </section>

      <div className="mt-10">
        <DisclaimerBox variant="card" />
      </div>
    </div>
  );
}
