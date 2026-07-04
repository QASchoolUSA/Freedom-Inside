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
      {/* Mobile: full-bleed cover — text sits on the image's dark sky, no empty gap at top */}
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[50%_46%] sm:hidden"
      />

      {/* Desktop: blurred backdrop + full portrait anchored to bottom */}
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hidden scale-110 object-cover blur-2xl brightness-90 sm:block"
      />
      <div className="absolute inset-0 hidden sm:block sm:top-20 sm:[mask-composite:intersect] sm:[mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent),linear-gradient(to_bottom,transparent,black_10%)]">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-contain object-bottom"
        />
      </div>

      <div className="absolute inset-0 hidden bg-gradient-to-r from-teal-950/80 via-teal-950/10 via-50% to-teal-950/80 sm:block" />
      <div className="absolute inset-0 bg-gradient-to-b from-teal-950/92 from-0% via-teal-950/35 via-[38%] to-teal-950/78 sm:from-teal-950/85 sm:via-teal-950/25 sm:via-45% sm:to-teal-950/75" />
      <div className="sparkles absolute inset-0 opacity-70" />

      <div className="relative mx-auto flex w-full max-w-3xl flex-1 flex-col items-center px-5 pb-8 pt-[4.25rem] text-center sm:pt-16">
        {/* Top zone: logo + title + leads, anchored high like the reference */}
        <Reveal>
          <Image
            src="/images/logo.png"
            alt=""
            width={72}
            height={72}
            priority
            className="mx-auto h-14 w-14 rounded-full shadow-glow ring-1 ring-gold-400/60 sm:h-18 sm:w-18 short:h-14 short:w-14"
          />
          <Lotus className="mx-auto mt-1 h-3.5 w-5 text-gold-400 sm:mt-1.5 sm:h-4 sm:w-6" />
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-1 font-display text-[1.75rem] font-semibold leading-tight tracking-[0.04em] sm:mt-1.5 sm:text-5xl short:text-4xl">
            <span className="text-gold-gradient drop-shadow-[0_2px_12px_rgba(217,179,106,0.35)]">
              {t("title")}
            </span>
          </h1>
          <Ornament className="mt-2 sm:mt-3" />
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-3 max-w-[21rem] font-display text-lg font-medium leading-relaxed text-cream-50 drop-shadow-[0_2px_12px_rgba(7,28,32,0.85)] sm:mt-4 sm:max-w-xl sm:text-2xl short:text-xl">
            {t("lead1")}
          </p>
          <p className="mx-auto mt-3 max-w-[20rem] font-display text-base leading-relaxed text-cream-50/95 drop-shadow-[0_2px_10px_rgba(7,28,32,0.8)] sm:mt-4 sm:max-w-lg sm:text-xl short:text-lg">
            {t("lead2")}
          </p>
        </Reveal>

        {/* Middle zone: spacer so the photo shows through */}
        <div className="min-h-16 flex-1 sm:min-h-8" aria-hidden />

        {/* Bottom zone: features, price, CTA — as in the reference */}
        <Reveal delay={0.1} className="w-full">
          <div className="mx-auto grid w-full max-w-md grid-cols-3 grid-rows-[auto_auto_auto] gap-y-2">
            {features.map((f, i) => {
              const Icon = FEATURE_ICONS[i];
              return (
                <div
                  key={`icon-${i}`}
                  className={`flex justify-center px-2 ${i > 0 ? "border-l border-gold-500/40" : ""}`}
                  style={{ gridColumn: i + 1, gridRow: 1 }}
                >
                  <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full border border-gold-500/80 bg-teal-950/50 text-gold-300 shadow-glow backdrop-blur-[2px] sm:h-15 sm:w-15 short:h-13 short:w-13">
                    <Icon className="h-6 w-6 sm:h-6.5 sm:w-6.5" />
                  </div>
                </div>
              );
            })}
            {features.map((f, i) => {
              const labelLines = f.label.split("\n");
              const topText = f.value || labelLines[0];
              return (
                <div
                  key={`top-${i}`}
                  className={`flex items-end justify-center px-2 ${i > 0 ? "border-l border-gold-500/40" : ""}`}
                  style={{ gridColumn: i + 1, gridRow: 2 }}
                >
                  {f.value ? (
                    <span className="font-display text-lg font-semibold leading-none text-cream-50 sm:text-xl">
                      {f.value}
                    </span>
                  ) : (
                    <span className="text-[10px] font-semibold uppercase tracking-[0.14em] leading-none text-cream-50 sm:text-[11px]">
                      {topText}
                    </span>
                  )}
                </div>
              );
            })}
            {features.map((f, i) => {
              const labelLines = f.label.split("\n");
              const bottomText = f.value ? f.label : labelLines[1] ?? "";
              return (
                <div
                  key={`bottom-${i}`}
                  className={`flex items-start justify-center px-2 ${i > 0 ? "border-l border-gold-500/40" : ""}`}
                  style={{ gridColumn: i + 1, gridRow: 3 }}
                >
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] leading-none text-cream-50 sm:text-[11px]">
                    {bottomText}
                  </span>
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
