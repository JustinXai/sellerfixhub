"use client";

import { useState } from "react";

interface FormData {
  platform: string;
  issueType: string;
  issueMessage: string;
  storeUrl: string;
  country: string;
  appealedBefore: string;
  email: string;
  consent: boolean;
}

const initialForm: FormData = {
  platform: "",
  issueType: "",
  issueMessage: "",
  storeUrl: "",
  country: "",
  appealedBefore: "",
  email: "",
  consent: false,
};

export function LeadForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consent) return;
    // In production v1, this only stores state locally. No database, no email send.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <div className="text-3xl mb-3">✓</div>
        <h3 className="font-semibold text-gray-900 mb-2">Thank you for your submission</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          Your request has been received. A member of our team will review your information and
          follow up if there is a suitable expert available for your situation.
        </p>
        <p className="text-xs text-gray-400 mt-4">
          Do not submit passwords, API keys, payment details, identity documents, or sensitive
          personal information through any channel.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Platform <span className="text-red-500">*</span>
        </label>
        <select
          name="platform"
          value={form.platform}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
        >
          <option value="">Select platform...</option>
          <option value="google-merchant-center">Google Merchant Center</option>
          <option value="tiktok-shop">TikTok Shop</option>
          <option value="amazon">Amazon Seller Central</option>
          <option value="other">Other Marketplace</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Issue Type <span className="text-red-500">*</span>
        </label>
        <select
          name="issueType"
          value={form.issueType}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
        >
          <option value="">Select issue type...</option>
          <option value="account-suspension">Account Suspension</option>
          <option value="product-disapproved">Product Disapproved</option>
          <option value="misrepresentation">Misrepresentation</option>
          <option value="price-mismatch">Price Mismatch</option>
          <option value="invalid-gtin">Invalid GTIN</option>
          <option value="policy-violation">Policy Violation</option>
          <option value="appeal-rejected">Appeal Rejected</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Issue Message{" "}
          <span className="text-gray-400 font-normal">(paste the platform notice)</span>
        </label>
        <textarea
          name="issueMessage"
          value={form.issueMessage}
          onChange={handleChange}
          rows={4}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-gray-900"
          placeholder="Paste the error message or violation notice you received..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Store URL <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <input
          type="url"
          name="storeUrl"
          value={form.storeUrl}
          onChange={handleChange}
          placeholder="https://your-store.com"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Country <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="country"
          value={form.country}
          onChange={handleChange}
          required
          placeholder="United States"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Have you appealed before? <span className="text-red-500">*</span>
        </label>
        <div className="flex gap-4 mt-1">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              name="appealedBefore"
              value="yes"
              checked={form.appealedBefore === "yes"}
              onChange={handleChange}
              required
            />
            Yes
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              name="appealedBefore"
              value="no"
              checked={form.appealedBefore === "no"}
              onChange={handleChange}
            />
            No
          </label>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="your@email.com"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
        />
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <label className="flex items-start gap-3 text-sm text-gray-700 cursor-pointer">
          <input
            type="checkbox"
            name="consent"
            checked={form.consent}
            onChange={handleChange}
            required
            className="mt-0.5"
          />
          <span>
            Do not submit passwords, API keys, payment details, identity documents, or sensitive
            personal information. SellerFixHub is independent and does not guarantee approval or
            reinstatement. Platform decisions are made by the platform.
          </span>
        </label>
      </div>

      <button
        type="submit"
        disabled={!form.consent}
        className="w-full py-3 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Submit Request
      </button>
    </form>
  );
}
