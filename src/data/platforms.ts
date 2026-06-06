export interface Platform {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  issues: string[];
  learnMore: string;
  expertMatching: string;
}

export const platforms: Platform[] = [
  {
    id: "google-merchant-center",
    name: "Google Merchant Center",
    slug: "google-merchant-center",
    description:
      "Google Merchant Center manages your product listings for Google Shopping ads and free listings. Issues here affect whether your products appear in search results.",
    icon: "G",
    issues: ["misrepresentation", "product-disapproved", "invalid-gtin", "price-mismatch"],
    learnMore: "/platforms/google-merchant-center",
    expertMatching: "/services/expert-matching",
  },
  {
    id: "tiktok-shop",
    name: "TikTok Shop",
    slug: "tiktok-shop",
    description:
      "TikTok Shop is a social commerce platform. Product rejections and violations affect your ability to sell and your shop health score.",
    icon: "T",
    issues: ["product-rejected", "violation-appeal"],
    learnMore: "/platforms/tiktok-shop",
    expertMatching: "/services/expert-matching",
  },
];
