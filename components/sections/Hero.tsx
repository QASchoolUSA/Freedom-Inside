import Image from "next/image";
import { useTranslations } from "next-intl";
import { CtaButton } from "@/components/ui/CtaButton";
import { Ornament } from "@/components/ui/Ornament";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section id="top" className="relative flex min-h-svh flex-col overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[50%_72%]"
      />
      {/* Darken the sky for legibility, keep the sunset glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-950/80 via-teal-950/35 to-teal-950/60" />
      <div className="sparkles absolute inset-0 opacity-70" />

      <div className="relative mx-auto flex w-full max-w-3xl flex-1 flex-col items-center px-5 pb-16 pt-28 text-center sm:pt-32">
        <Reveal>
          <Image
            src="/images/logo.png"
            alt=""
            width={104}
            height={104}
            priority
            className="mx-auto h-20 w-20 rounded-full shadow-glow ring-1 ring-gold-400/60 sm:h-26 sm:w-26"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <Ornament className="mt-6" />
          <h1 className="mt-5 font-display text-4xl font-semibold uppercase leading-tight tracking-[0.08em] sm:text-6xl">
            <span className="text-gold-gradient drop-shadow-[0_2px_12px_rgba(217,179,106,0.35)]">
              {t("title")}
            </span>
          </h1>
          <Ornament className="mt-6" />
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-cream-50 sm:text-2xl sm:leading-relaxed">
            {t("lead1")}
          </p>
          <p className="mt-6 max-w-md text-base leading-relaxed text-cream-100/85 sm:text-lg mx-auto">
            {t("lead2")}
          </p>
        </Reveal>

        <Reveal delay={0.3} className="mt-auto pt-14">
          <CtaButton variant="outline">{t("cta")}</CtaButton>
        </Reveal>
      </div>
    </section>
  );
}
