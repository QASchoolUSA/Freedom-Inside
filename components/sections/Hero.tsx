import { useTranslations } from "next-intl";
import { HeroCtaSection } from "@/components/sections/HeroCtaSection";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <HeroCtaSection
      id="top"
      title={t("title")}
      lead1={t("lead1")}
      lead2={t("lead2")}
      priority
      topPadding="pt-[4.25rem] sm:pt-16"
    />
  );
}
