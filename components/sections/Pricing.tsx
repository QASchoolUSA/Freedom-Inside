import { useTranslations } from "next-intl";
import { CtaButton } from "@/components/ui/CtaButton";
import { Ornament } from "@/components/ui/Ornament";
import { Reveal } from "@/components/ui/Reveal";
import { IconChat, IconLotus, IconPlay } from "@/components/ui/icons";

const ICONS = [IconPlay, IconLotus, IconChat];

export function Pricing() {
  const t = useTranslations("pricing");
  const features = t.raw("features") as { value: string; label: string }[];

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

        <Reveal delay={0.15}>
          <div className="mt-12 grid grid-cols-3 items-start divide-x divide-gold-500/30">
            {features.map((f, i) => {
              const Icon = ICONS[i];
              const labelLines = f.label.split("\n");
              const topText = f.value || labelLines[0];
              const bottomText = f.value ? f.label : labelLines[1] ?? "";
              return (
                <div key={i} className="flex flex-col items-center gap-3 px-3">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-gold-500/70 bg-teal-950/60 text-gold-400 shadow-glow">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="flex w-full flex-col items-center leading-tight">
                    <div
                      className={`flex min-h-[1.75rem] items-center justify-center ${
                        f.value
                          ? "font-display text-2xl font-semibold text-cream-50"
                          : "text-[11px] font-semibold uppercase tracking-[0.14em] text-cream-100/85 sm:text-xs"
                      }`}
                    >
                      {topText}
                    </div>
                    <div className="mt-0.5 flex min-h-[1rem] items-center justify-center text-[11px] font-semibold uppercase tracking-[0.14em] text-cream-100/85 sm:text-xs">
                      {bottomText}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mx-auto mt-12 flex max-w-md items-stretch overflow-hidden rounded-2xl border border-gold-500/60 bg-teal-950/70 shadow-card backdrop-blur-sm">
            <div className="flex flex-1 items-center justify-center px-6 py-6">
              <span className="relative font-display text-3xl text-cream-100/70 sm:text-4xl">
                {t("oldPrice")}
                <span className="absolute left-[-6%] top-1/2 h-[2.5px] w-[112%] -rotate-6 rounded bg-[#c0392b]" />
              </span>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center border-l border-gold-500/40 bg-gold-500/10 px-6 py-6">
              <span className="text-xs uppercase tracking-[0.2em] text-gold-300">
                {t("nowLabel")}
              </span>
              <span className="text-gold-gradient mt-1 font-display text-5xl font-semibold sm:text-6xl">
                {t("price")}
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <CtaButton className="mt-10 w-full max-w-md">{t("cta")}</CtaButton>
          <p className="mt-4 text-sm text-cream-100/60">{t("note")}</p>
        </Reveal>
      </div>
    </section>
  );
}
