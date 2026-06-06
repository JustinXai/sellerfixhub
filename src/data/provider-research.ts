export interface ProviderCandidate {
  name: string;
  category: string;
  platformFocus: string[];
  sourceType: string;
  publicClaim: string;
  possibleUse: string;
  riskNotes: string;
  vettingStatus: "not_vetted" | "under_review" | "vetted" | "not_recommended";
}

// NOTE: This file contains background research data only.
// These providers are NOT SellerFixHub partners, affiliates, or recommendations.
// They are listed as potential resources for seller education only.
// SellerFixHub does not endorse, verify, or take responsibility for any provider listed here.

export const providerCandidates: ProviderCandidate[] = [
  {
    name: "FeedArmy",
    category: "GMC Feed Management",
    platformFocus: ["Google Merchant Center"],
    sourceType: "Third-party tool",
    publicClaim: "GMC feed optimization and account management",
    possibleUse:
      "Ongoing feed monitoring, automatic data fixes, and GMC account health management",
    riskNotes:
      "Verify authorization to manage your GMC account. Review their data handling policies before sharing credentials.",
    vettingStatus: "not_vetted",
  },
  {
    name: "KeyCommerce",
    category: "GMC Account Management",
    platformFocus: ["Google Merchant Center"],
    sourceType: "Service agency",
    publicClaim: "Google Merchant Center account management and feed optimization",
    possibleUse: "GMC account reinstatement support and ongoing management",
    riskNotes:
      "Confirm they are not making unauthorized claims about Google partnerships. Review contract terms carefully.",
    vettingStatus: "not_vetted",
  },
  {
    name: "Upwork GMC Freelancers",
    category: "Freelance Services",
    platformFocus: ["Google Merchant Center"],
    sourceType: "Freelance marketplace",
    publicClaim: "Individual freelancers offering GMC account management",
    possibleUse: "One-time GMC fixes, feed audits, and policy compliance reviews",
    riskNotes:
      "Verify credentials and past results. Do not share account passwords. Use Upwork's escrow for payment protection.",
    vettingStatus: "not_vetted",
  },
  {
    name: "Fiverr GMC Misrepresentation Gigs",
    category: "Freelance Services",
    platformFocus: ["Google Merchant Center"],
    sourceType: "Gig marketplace",
    publicClaim: "Individual sellers offering GMC misrepresentation fix services",
    possibleUse: "Quick feed data fixes and re-review requests",
    riskNotes:
      "Results vary widely. Read reviews carefully. Verify the seller understands current Google policies. Do not share sensitive credentials.",
    vettingStatus: "not_vetted",
  },
  {
    name: "PeoplePerHour GMC Gigs",
    category: "Freelance Services",
    platformFocus: ["Google Merchant Center"],
    sourceType: "Freelance marketplace",
    publicClaim: "Hourly or fixed-price freelancers for GMC account issues",
    possibleUse: "Feed audit, policy review, and account re-review support",
    riskNotes:
      "Review portfolio and past feedback. Clarify deliverables before hiring. Use platform payment protection.",
    vettingStatus: "not_vetted",
  },
  {
    name: "ScaleShop.Agency",
    category: "E-commerce Agency",
    platformFocus: ["Google Merchant Center", "TikTok Shop"],
    sourceType: "Service agency",
    publicClaim: "Multi-platform e-commerce management and compliance",
    possibleUse: "Comprehensive account management across multiple platforms",
    riskNotes:
      "Verify their specialization for your specific platform. Review contract terms for account access requirements.",
    vettingStatus: "not_vetted",
  },
  {
    name: "TSL Agency",
    category: "E-commerce Agency",
    platformFocus: ["TikTok Shop", "Google Merchant Center"],
    sourceType: "Service agency",
    publicClaim: "TikTok Shop account management and growth",
    possibleUse: "TikTok Shop listing optimization and violation appeal support",
    riskNotes:
      "Confirm experience with TikTok Shop specifically. Review their case studies and success metrics.",
    vettingStatus: "not_vetted",
  },
  {
    name: "Upwork TikTok Shop Reinstatement Freelancers",
    category: "Freelance Services",
    platformFocus: ["TikTok Shop"],
    sourceType: "Freelance marketplace",
    publicClaim: "Individual freelancers offering TikTok Shop account reinstatement support",
    possibleUse: "Appeal drafting, evidence preparation, and account health recovery",
    riskNotes:
      "Verify experience with TikTok Shop specifically. TikTok policies change frequently. Use platform escrow.",
    vettingStatus: "not_vetted",
  },
  {
    name: "Fiverr TikTok Reinstatement Gigs",
    category: "Freelance Services",
    platformFocus: ["TikTok Shop"],
    sourceType: "Gig marketplace",
    publicClaim: "TikTok Shop violation fix and account reinstatement services",
    possibleUse: "Quick violation review and appeal submission support",
    riskNotes:
      "Read reviews carefully. Verify seller understands current TikTok policies. Do not share passwords.",
    vettingStatus: "not_vetted",
  },
];

export function getProvidersByPlatform(platform: string): ProviderCandidate[] {
  return providerCandidates.filter((p) => p.platformFocus.includes(platform));
}
