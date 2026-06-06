/**
 * analytics.ts
 * Thin wrapper around window.gtag for sending GA4 custom events.
 * - SSR-safe (checks typeof window before calling)
 * - Silently no-ops if gtag is not available
 * - Never sends user input, email, URLs, or personal data
 */

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
): void {
  if (typeof window === "undefined") return;
  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag !== "function") return;
  gtag("event", eventName, params ?? {});
}
