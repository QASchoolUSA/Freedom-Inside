import Image from "next/image";
import { FeatureIconsGrid } from "@/components/ui/FeatureIconsGrid";
import { Ornament, Lotus } from "@/components/ui/Ornament";
import { PricingMotion } from "@/components/ui/PricingMotion";
import { Reveal } from "@/components/ui/Reveal";
import { SellLeads } from "@/components/ui/SellLeads";
import {
  SelfPacedOfferBlock,
  WithSupportOfferBlock,
} from "@/components/ui/SelfPacedOfferBlock";
import { DownArrow } from "@/components/ui/DownArrow";

type HeroCtaSectionProps = {
  id?: string;
  title: string;
  lead1: string;
  lead2: string;
  note?: string;
  priority?: boolean;
  /** Richer scroll choreography for the pricing block. */
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
  note,
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
          <PricingMotion note={note} />
        ) : (
          <>
            <Reveal delay={0.1} className="w-full">
              <SelfPacedOfferBlock />
            </Reveal>

            <Reveal delay={0.2} className="w-full">
              <FeatureIconsGrid size="sm" />
              <DownArrow className="mt-3 short-mobile:mt-2" />
            </Reveal>

            <Reveal delay={0.25} className="w-full">
              <WithSupportOfferBlock />
            </Reveal>

            <Reveal delay={0.3} className="w-full">
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
