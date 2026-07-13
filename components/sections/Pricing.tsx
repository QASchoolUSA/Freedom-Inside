import { useTranslations } from "next-intl";
import { CtaButton } from "@/components/ui/CtaButton";
import { FeatureIconsGrid } from "@/components/ui/FeatureIconsGrid";
import { Ornament } from "@/components/ui/Ornament";
import { Reveal } from "@/components/ui/Reveal";

export function Pricing() {
  const t = useTranslations("pricing");

  return (
    <section id="pricing" className="relative overflow-hidden py-20 sm:py-28">
      {/* sunset glow backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-950 via-teal-800 to-teal-950" />
      <div className="absolute inset-x-0 top-1/4 h-1/2 bg-[radial-gradient(55%_70%_at_50%_50%,rgba(217,179,106,0.28),transparent_70%)]" />
      <div className="sparkles absolute inset-0 opacity-70" />

      <div className="relative mx-auto max-w-2xl px-5 text-center">
        <Reveal>
          <Ornament />
          <h2 className="text-gold-gradient mt-5 font-display text-4xl font-semibold sm:text-6xl">
            {t("title")}
          </h2>
          <Ornament className="mt-5" />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-lg text-lg leading-relaxed text-cream-50 sm:text-xl">
            {t("lead1")}
          </p>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-cream-100/85">
            {t("lead2")}
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-12 w-full">
          <FeatureIconsGrid />
        </Reveal>

        <Reveal delay={0.2} className="w-full">
          <div className="mx-auto mt-5 flex w-full max-w-md items-stretch overflow-hidden rounded-2xl border border-gold-500/70 bg-teal-950/65 shadow-card backdrop-blur-sm sm:mt-8">
            <div className="flex flex-1 items-center justify-center px-4 py-3 sm:px-6 sm:py-4">
              <span className="relative font-display text-2xl text-cream-100/75 sm:text-3xl">
                {t("oldPrice")}
                <span className="absolute left-[-6%] top-1/2 h-[2.5px] w-[112%] -rotate-6 rounded bg-[#c0392b]" />
              </span>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center border-l border-gold-500/40 bg-gold-500/10 px-4 py-3 sm:px-6 sm:py-4">
              <span className="text-[10px] uppercase tracking-[0.2em] text-gold-300">
                {t("nowLabel")}
              </span>
              <span className="text-gold-gradient mt-0.5 font-display text-3xl font-semibold sm:text-4xl">
                {t("price")}
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.25} className="w-full">
          <CtaButton className="mt-5 w-full max-w-md !py-3 !text-base sm:!text-lg">
            {t("cta")}
          </CtaButton>
          <p className="mt-4 text-sm text-cream-100/60">{t("note")}</p>
        </Reveal>
      </div>
    </section>
  );
}
