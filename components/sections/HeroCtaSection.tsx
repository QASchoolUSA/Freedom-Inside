import Image from "next/image";
import { CtaButton } from "@/components/ui/CtaButton";
import { FeatureIconsGrid } from "@/components/ui/FeatureIconsGrid";
import { Ornament, Lotus } from "@/components/ui/Ornament";
import { PricingMotion } from "@/components/ui/PricingMotion";
import { Reveal } from "@/components/ui/Reveal";
import { SellLeads } from "@/components/ui/SellLeads";

type HeroCtaSectionProps = {
  id?: string;
  title: string;
  lead1: string;
  lead2: string;
  cta: string;
  oldPrice: string;
  nowLabel: string;
  price: string;
  note?: string;
  offer?: string;
  priority?: boolean;
  /** Richer scroll choreography for the pricing block (features → price → offer → CTA). */
  enhancedMotion?: boolean;
  topPadding?: string;
  mobileImagePosition?: string;
  desktopImagePosition?: string;
};

export function HeroCtaSection({
  id,
  title,
  lead1,
  lead2,
  cta,
  oldPrice,
  nowLabel,
  price,
  note,
  offer,
  priority = false,
  enhancedMotion = false,
  topPadding = "pt-16",
  mobileImagePosition = "object-[50%_46%]",
  desktopImagePosition = "object-[50%_42%]",
}: HeroCtaSectionProps) {
  return (
    <section
      id={id}
      className="relative flex min-h-svh flex-col overflow-hidden"
    >
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        priority={priority}
        sizes="100vw"
        className={`object-cover sm:hidden ${mobileImagePosition}`}
      />

      <Image
        src="/images/hero-desktop.png"
        alt=""
        fill
        priority={priority}
        sizes="100vw"
        className={`hidden object-cover sm:block ${desktopImagePosition}`}
      />

      <div className="absolute inset-0 hidden bg-gradient-to-r from-teal-950/80 via-teal-950/10 via-50% to-teal-950/80 sm:block" />
      <div className="absolute inset-0 bg-gradient-to-b from-teal-950/93 from-0% via-teal-950/50 via-[32%] to-teal-950/78 sm:from-teal-950/90 sm:via-teal-950/38 sm:via-40% sm:to-teal-950/75" />
      <div className="sparkles absolute inset-0 opacity-55" />

      <div className={`relative mx-auto flex w-full max-w-3xl max-sm:min-h-0 flex-1 flex-col items-center px-5 pb-[max(2rem,env(safe-area-inset-bottom,0px))] text-center ${topPadding}`}>
        <Reveal>
          <Lotus className="mx-auto h-3.5 w-5 text-gold-400 sm:h-4 sm:w-6" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-2 font-display text-[1.75rem] font-semibold leading-tight tracking-[0.04em] short-mobile:text-2xl sm:mt-3 sm:text-5xl short:text-4xl">
            <span className="text-gold-gradient drop-shadow-[0_2px_12px_rgba(217,179,106,0.35)]">
              {title}
            </span>
          </h2>
          <Ornament className="mt-2 sm:mt-3" />
        </Reveal>

        <Reveal delay={0.2}>
          <SellLeads lead1={lead1} lead2={lead2} />
        </Reveal>

        <div className="min-h-8 flex-1 sm:min-h-8" aria-hidden />

        {enhancedMotion ? (
          <PricingMotion
            oldPrice={oldPrice}
            nowLabel={nowLabel}
            price={price}
            offer={offer}
            cta={cta}
            note={note}
          />
        ) : (
          <>
            <Reveal delay={0.1} className="w-full">
              <FeatureIconsGrid size="sm" />
            </Reveal>

            <Reveal delay={0.2} className="w-full">
              <div className="mx-auto mt-5 flex w-full max-w-md items-stretch overflow-hidden rounded-2xl border border-gold-500/70 bg-teal-950/65 shadow-card backdrop-blur-sm short-mobile:mt-3 short:mt-4">
                <div className="flex flex-1 items-center justify-center px-4 py-3 short-mobile:py-2 sm:px-6 sm:py-4 short:py-2.5">
                  <span className="relative font-display text-2xl text-cream-100/75 sm:text-3xl">
                    {oldPrice}
                    <span className="absolute left-[-6%] top-1/2 h-[2.5px] w-[112%] -rotate-6 rounded bg-[#c0392b]" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col items-center justify-center border-l border-gold-500/40 bg-gold-500/10 px-4 py-3 short-mobile:py-2 sm:px-6 sm:py-4 short:py-2.5">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold-300">
                    {nowLabel}
                  </span>
                  <span className="text-gold-gradient mt-0.5 font-display text-3xl font-semibold sm:text-4xl">
                    {price}
                  </span>
                </div>
              </div>
            </Reveal>

            {offer ? (
              <Reveal delay={0.25} className="w-full">
                <div className="mx-auto mt-4 flex justify-center short-mobile:mt-3 short:mt-3.5">
                  <p className="inline-flex max-w-[22rem] items-center gap-1.5 rounded-xl border border-gold-500/45 bg-gradient-to-r from-gold-500/15 via-gold-500/10 to-transparent px-3.5 py-2 text-left shadow-[0_0_24px_-8px_rgba(217,179,106,0.45)] backdrop-blur-[2px] sm:max-w-md sm:gap-2 sm:px-4 sm:py-2.5">
                    <span className="shrink-0 text-[1.05rem] leading-none sm:text-lg" aria-hidden>
                      🎁
                    </span>
                    <span className="font-display text-[0.92rem] font-semibold leading-snug tracking-[0.01em] text-gold-300 sm:text-[1.05rem]">
                      {offer}
                    </span>
                  </p>
                </div>
              </Reveal>
            ) : null}

            <Reveal delay={0.3} className="w-full">
              <CtaButton className="mt-3.5 w-full max-w-md !py-3 !text-base short-mobile:mt-2.5 sm:!text-lg short:mt-3">
                {cta}
              </CtaButton>
              {note ? (
                <p className="mx-auto mt-4 max-w-md text-sm text-cream-100/70">{note}</p>
              ) : (
                <Lotus className="mx-auto mt-3.5 h-4 w-6 text-gold-400/80 short-mobile:hidden short:hidden" />
              )}
            </Reveal>
          </>
        )}
      </div>
    </section>
  );
}
