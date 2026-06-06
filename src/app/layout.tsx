import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@/components/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sellerfixhub.com"),
  title: {
    default: "SellerFixHub – Fix Rejected Products, Feed Errors, and Seller Violations",
    template: "%s | SellerFixHub",
  },
  description:
    "SellerFixHub helps online sellers understand product rejections, Google Merchant Center feed errors, TikTok Shop violations, and what evidence to prepare before requesting a review or appeal.",
  keywords: [
    "Google Merchant Center",
    "product disapproved",
    "misrepresentation",
    "TikTok Shop",
    "product rejected",
    "seller violation",
    "GMC suspension",
    "feed error",
  ],
  authors: [{ name: "SellerFixHub" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sellerfixhub.com",
    siteName: "SellerFixHub",
    title: "SellerFixHub – Fix Rejected Products, Feed Errors, and Seller Violations",
    description:
      "Paste a rejection, feed error, or violation message. Get a plain-English next-step checklist before you request another review.",
  },
  twitter: {
    card: "summary",
    title: "SellerFixHub",
    description: "Fix rejected products, feed errors, and seller violations before your next review.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-white" data-sellerfixhub-build="2026-05-27-1613">
        <Analytics />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
