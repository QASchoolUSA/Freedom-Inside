import { useTranslations } from "next-intl";
import { HeroCtaSection } from "@/components/sections/HeroCtaSection";

export function Hero() {
  const t = useTranslations("hero");
  const tp = useTranslations("pricing");

  return (
    <HeroCtaSection
      id="top"
      title={t("title")}
      lead1={t("lead1")}
      lead2={t("lead2")}
      cta={t("cta")}
      oldPrice={tp("oldPrice")}
      nowLabel={tp("nowLabel")}
      price={tp("price")}
      priority
      topPadding="pt-[4.25rem] sm:pt-16"
    />
  );
}
