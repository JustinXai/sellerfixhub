"use client";

interface FAQItem {
  question: string;
  answer: string;
  link?: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
}

export function FAQ({ items, title = "Frequently Asked Questions" }: FAQProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold text-slate-900 mb-6">{title}</h2>
      <div className="space-y-3">
        {items.map((item, index) => (
          <details key={index} className="group border border-slate-200 rounded-xl bg-white">
            <summary className="flex items-center justify-between cursor-pointer px-4 py-3.5 font-medium text-slate-900 hover:bg-slate-50 list-none">
              <span className="text-sm leading-snug">{item.question}</span>
              <svg className="w-4 h-4 text-slate-400 flex-shrink-0 ml-4 group-open:rotate-45 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </summary>
            <div className="px-4 pb-4 text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-3">
              <p>{item.answer}</p>
              {item.link && (
                <a
                  href={item.link}
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-blue-700 hover:text-blue-900 hover:underline underline-offset-2 transition-colors"
                >
                  Google Merchant Center identifier_exists Attribute: When to Use True or False
                  <span aria-hidden="true">→</span>
                </a>
              )}
            </div>
          </details>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </section>
  );
}
