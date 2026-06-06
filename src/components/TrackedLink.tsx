"use client";

import { useCallback } from "react";
import { trackEvent } from "@/lib/analytics";

interface TrackedLinkProps {
  href: string;
  eventName: string;
  eventParams?: Record<string, string | number | boolean>;
  className?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
  "aria-label"?: string;
}

export function TrackedLink({
  href,
  eventName,
  eventParams,
  className,
  children,
  target,
  rel,
  "aria-label": ariaLabel,
}: TrackedLinkProps) {
  const handleClick = useCallback(
    () => {
      trackEvent(eventName, eventParams);
    },
    [eventName, eventParams]
  );

  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
