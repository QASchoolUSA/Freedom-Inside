import Image from "next/image";
import { useTranslations } from "next-intl";
import { CtaButton } from "@/components/ui/CtaButton";
import { Ornament, Lotus } from "@/components/ui/Ornament";
import { Reveal } from "@/components/ui/Reveal";
import { IconChat, IconLotus, IconPlay } from "@/components/ui/icons";

const FEATURE_ICONS = [IconPlay, IconLotus, IconChat];

export function Hero() {
  const t = useTranslations("hero");
  const tp = useTranslations("pricing");
  const features = tp.raw("features") as { value: string; label: string }[];

  return (
    <section id="top" className="relative flex min-h-svh flex-col overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[50%_52%] sm:object-[50%_36%]"
      />
      {/* Darken top and bottom for legibility, keep the sunset visible in the middle */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-950/85 via-teal-950/25 via-45% to-teal-950/75" />
      <div className="sparkles absolute inset-0 opacity-70" />

      <div className="relative mx-auto flex w-full max-w-3xl flex-1 flex-col items-center px-5 pb-8 pt-16 text-center">
        {/* Top zone: logo + title + leads, anchored high like the reference */}
        <Reveal>
          <Image
            src="/images/logo.png"
            alt=""
            width={80}
            height={80}
            priority
            className="mx-auto h-16 w-16 rounded-full shadow-glow ring-1 ring-gold-400/60 sm:h-18 sm:w-18 short:h-14 short:w-14"
          />
          <Lotus className="mx-auto mt-1.5 h-4 w-6 text-gold-400" />
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-1.5 font-display text-[2rem] font-semibold uppercase leading-tight tracking-[0.08em] sm:text-5xl short:text-4xl">
            <span className="text-gold-gradient drop-shadow-[0_2px_12px_rgba(217,179,106,0.35)]">
              {t("title")}
            </span>
          </h1>
          <Ornament className="mt-3" />
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-3 max-w-sm text-[15px] leading-relaxed text-cream-50 sm:max-w-lg sm:text-lg sm:leading-relaxed short:text-base">
            {t("lead1")}
          </p>
          <p className="mx-auto mt-3 max-w-xs text-[13px] leading-relaxed text-cream-100/85 sm:max-w-sm sm:text-[15px] short:mt-2 short:text-sm">
            {t("lead2")}
          </p>
        </Reveal>

        {/* Middle zone: spacer so the photo shows through */}
        <div className="min-h-28 flex-1 sm:min-h-8" aria-hidden />

        {/* Bottom zone: features, price, CTA — as in the reference */}
        <Reveal delay={0.1} className="w-full">
          <div className="mx-auto grid w-full max-w-md grid-cols-3 divide-x divide-gold-500/40">
            {features.map((f, i) => {
              const Icon = FEATURE_ICONS[i];
              return (
                <div key={i} className="flex flex-col items-center gap-2 px-2">
                  <div className="flex h-13 w-13 items-center justify-center rounded-full border border-gold-500/80 bg-teal-950/50 text-gold-300 shadow-glow backdrop-blur-[2px] sm:h-15 sm:w-15 short:h-13 short:w-13">
                    <Icon className="h-6 w-6 sm:h-6.5 sm:w-6.5" />
                  </div>
                  <div className="leading-tight">
                    {f.value && (
                      <div className="font-display text-lg font-semibold text-cream-50 sm:text-xl">
                        {f.value}
                      </div>
                    )}
                    <div className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-cream-50 sm:text-[11px]">
                      {f.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.2} className="w-full">
          <div className="mx-auto mt-5 flex w-full max-w-md items-stretch overflow-hidden rounded-2xl border border-gold-500/70 bg-teal-950/65 shadow-card backdrop-blur-sm short:mt-4">
            <div className="flex flex-1 items-center justify-center px-4 py-3 sm:px-6 sm:py-4 short:py-2.5">
              <span className="relative font-display text-2xl text-cream-100/75 sm:text-3xl">
                {tp("oldPrice")}
                <span className="absolute left-[-6%] top-1/2 h-[2.5px] w-[112%] -rotate-6 rounded bg-[#c0392b]" />
              </span>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center border-l border-gold-500/40 bg-gold-500/10 px-4 py-3 sm:px-6 sm:py-4 short:py-2.5">
              <span className="text-[10px] uppercase tracking-[0.2em] text-gold-300">
                {tp("nowLabel")}
              </span>
              <span className="text-gold-gradient mt-0.5 font-display text-3xl font-semibold sm:text-4xl">
                {tp("price")}
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3} className="w-full">
          <CtaButton className="mt-5 w-full max-w-md !py-3 !text-base sm:!text-lg short:mt-4">
            {t("cta")}
          </CtaButton>
          <Lotus className="mx-auto mt-3.5 h-4 w-6 text-gold-400/80 short:hidden" />
        </Reveal>
      </div>
    </section>
  );
}
