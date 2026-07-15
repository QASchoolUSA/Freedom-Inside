import { useTranslations } from "next-intl";
import { HeroCtaSection } from "@/components/sections/HeroCtaSection";

export function Pricing() {
  const t = useTranslations("pricing");

  return (
    <HeroCtaSection
      id="pricing"
      title={t("title")}
      lead1={t("lead1")}
      lead2={t("lead2")}
      cta={t("cta")}
      oldPrice={t("oldPrice")}
      nowLabel={t("nowLabel")}
      price={t("price")}
      offer={t("offer")}
      note={t("note")}
      enhancedMotion
    />
  );
}
