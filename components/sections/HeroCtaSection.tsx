import Image from "next/image";
import { CtaButton } from "@/components/ui/CtaButton";
import { FeatureIconsGrid } from "@/components/ui/FeatureIconsGrid";
import { Ornament, Lotus } from "@/components/ui/Ornament";
import { Reveal } from "@/components/ui/Reveal";

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
  topPadding = "pt-16",
  mobileImagePosition = "object-[50%_46%]",
  desktopImagePosition = "object-[50%_42%]",
}: HeroCtaSectionProps) {
  return (
    <section
      id={id}
      className="relative flex max-sm:h-svh max-sm:max-h-svh flex-col overflow-hidden sm:min-h-svh"
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

      <div className={`relative mx-auto flex w-full max-w-3xl max-sm:min-h-0 flex-1 flex-col items-center px-5 pb-8 text-center ${topPadding}`}>
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
          <p className="mx-auto mt-3.5 max-w-[22rem] font-display text-xl font-bold leading-snug tracking-[0.01em] text-cream-50 drop-shadow-[0_2px_10px_rgba(6,35,43,0.9)] short-mobile:mt-2.5 short-mobile:text-lg sm:mt-5 sm:max-w-2xl sm:text-3xl short:text-2xl">
            {lead1}
          </p>
          <p className="mx-auto mt-3.5 max-w-[21rem] font-display text-lg font-bold leading-snug text-gold-300 drop-shadow-[0_2px_10px_rgba(6,35,43,0.9)] short-mobile:mt-2.5 short-mobile:text-base sm:mt-4 sm:max-w-xl sm:text-2xl short:text-xl">
            {lead2}
          </p>
        </Reveal>

        <div className="min-h-8 flex-1 sm:min-h-8" aria-hidden />

        <Reveal delay={0.1} className="w-full">
          <FeatureIconsGrid />
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
            <p className="mx-auto mt-4 flex max-w-md items-center justify-center gap-2.5 text-center short-mobile:mt-3 short:mt-3.5">
              <span className="text-lg leading-none sm:text-xl" aria-hidden>
                🎁
              </span>
              <span className="text-gold-gradient font-display text-[0.95rem] font-semibold leading-snug tracking-[0.02em] drop-shadow-[0_2px_10px_rgba(6,35,43,0.85)] sm:text-lg">
                {offer}
              </span>
            </p>
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
      </div>
    </section>
  );
}
