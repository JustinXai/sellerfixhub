import { MetadataRoute } from "next";
import { issues } from "@/data/issues";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sellerfixhub.com";

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/disclaimer/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    {
      url: `${baseUrl}/tools/issue-message-explainer/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/expert-matching/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/platforms/google-merchant-center/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/platforms/tiktok-shop/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const issuePages: MetadataRoute.Sitemap = issues.map((issue) => {
    const section = issue.platform === "google-merchant-center" ? "google-merchant-center" : "tiktok-shop";
    return {
      url: `${baseUrl}/${section}/${issue.slug}/`,
      lastModified: new Date(issue.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    };
  });

  return [...staticPages, ...issuePages];
}
