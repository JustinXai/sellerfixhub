import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact SellerFixHub for questions or feedback.",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">Contact</h1>
      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
        <p>
          For questions, feedback, or partnership inquiries, you can reach us at the following channels.
        </p>
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-3">
          <div>
            <p className="font-medium text-slate-900">General Inquiries</p>
            <p className="text-sm text-slate-600">hello@sellerfixhub.com</p>
          </div>
          <div>
            <p className="font-medium text-slate-900">Expert Matching</p>
            <p className="text-sm text-slate-600">
              If you are an expert or consultant and would like to be considered for our expert matching
              network, please include a brief description of your services and platform specialization.
            </p>
          </div>
        </div>
        <p className="text-sm text-slate-500">
          Need help with a seller issue?{" "}
          <Link href="/services/expert-matching/" className="text-blue-600 hover:underline">
            Use the expert matching form
          </Link>
          .
        </p>
        <p className="text-sm text-slate-500">
          We aim to respond within 2–3 business days. Please note that we cannot provide legal advice,
          guarantee platform outcomes, or manage your seller accounts.
        </p>
      </div>
    </div>
  );
}
