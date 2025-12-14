"use client";

import { useLanguage } from "@/contexts/language-context";

export default function PortfolioTitle() {
  const { t } = useLanguage();

  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
        {t("portfolio.title")}
      </h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        {t("portfolio.subtitle")}
      </p>
    </div>
  );
}

