export const siteConfig = {
  siteName: "SellerFixHub",
  domain: "sellerfixhub.com",
  siteUrl: "https://sellerfixhub.com",
  analytics: {
    gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
    plausibleDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || "",
  },
  tagline: "Fix rejected products, feed errors, and seller violations before your next review.",
  leadForm: {
    externalUrl: process.env.NEXT_PUBLIC_LEAD_FORM_URL || "",
    provider: process.env.NEXT_PUBLIC_LEAD_FORM_PROVIDER || "",
  },
  defaultDescription:
    "SellerFixHub helps online sellers understand product rejections, Google Merchant Center feed errors, TikTok Shop violations, and what evidence to prepare before requesting a review or appeal.",
  primaryCta: "Paste your issue message",
  secondaryCta: "Get expert help",
  disclaimer: {
    short:
      "SellerFixHub is an independent educational and lead-matching resource. We are not affiliated with Google, TikTok, Amazon, Shopify, or any marketplace. We do not guarantee product approval, account reinstatement, appeal success, or review outcomes. Platform decisions are made by the platform.",
    full: `SellerFixHub is an independent educational and lead-matching resource. We are not affiliated with Google, TikTok Shop, Amazon, Shopify, or any other marketplace or platform.

We provide general guidance based on publicly available platform policies and community experience. We do not:

- Guarantee product approval or account reinstatement
- Promise appeal success or review outcomes
- Represent any government agency, law firm, or platform
- Access or manage your seller accounts
- Collect passwords, API keys, payment details, identity documents, or sensitive personal information

Platform decisions—including approvals, rejections, suspensions, and appeals outcomes—are made solely by the respective platform. SellerFixHub has no influence over platform decisions.

The information on this site is for educational purposes only and does not constitute legal advice.`,
  },
  whatWeDo: [
    "Explain platform issue messages in plain English",
    "Suggest evidence to prepare before appealing",
    "Share common recovery steps based on community experience",
    "Connect sellers with vetted independent experts",
  ],
  whatWeDontDo: [
    "Guarantee approval or reinstatement",
    "Represent Google, TikTok, Amazon, Shopify, or any platform",
    "File appeals on your behalf",
    "Collect passwords, API keys, or sensitive personal data",
    "Operate as a law firm",
  ],
  footer: {
    copyright: `© ${new Date().getFullYear()} SellerFixHub. All rights reserved.`,
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
};
