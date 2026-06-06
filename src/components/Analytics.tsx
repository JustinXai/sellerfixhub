"use client";
/**
 * Analytics.tsx
 * Conditionally loads Google Analytics or Plausible tracking scripts.
 * Loaded only when the corresponding environment variable is set.
 * No output if neither is configured.
 */

import { siteConfig } from "@/config/site";

export function Analytics() {
  const gaId = siteConfig.analytics.gaMeasurementId;
  const plausibleDomain = siteConfig.analytics.plausibleDomain;

  if (gaId && plausibleDomain) {
    return null; // only one at a time
  }

  if (gaId) {
    return (
      <>
        <script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          async
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${gaId}');`,
          }}
        />
      </>
    );
  }

  if (plausibleDomain) {
    return (
      <script
        defer
        src="https://plausible.io/js/script.js"
        data-domain={plausibleDomain}
      />
    );
  }

  return null;
}
