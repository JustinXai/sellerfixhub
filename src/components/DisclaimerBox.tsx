import { siteConfig } from "@/config/site";

interface DisclaimerBoxProps {
  variant?: "inline" | "card";
}

export function DisclaimerBox({ variant = "card" }: DisclaimerBoxProps) {
  if (variant === "inline") {
    return (
      <p className="text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-4 mt-4">
        {siteConfig.disclaimer.short}
      </p>
    );
  }

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-600 leading-relaxed">
      <p className="font-medium text-slate-700 mb-2">Independent Disclaimer</p>
      <p>{siteConfig.disclaimer.short}</p>
    </div>
  );
}
