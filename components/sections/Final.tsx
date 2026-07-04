import Image from "next/image";
import { useTranslations } from "next-intl";
import { CtaButton } from "@/components/ui/CtaButton";
import { Ornament, Lotus } from "@/components/ui/Ornament";
import { Reveal } from "@/components/ui/Reveal";
import { IconInstagram, IconTelegram } from "@/components/ui/icons";
import { INSTAGRAM_URL, TELEGRAM_URL } from "@/lib/config";

export function Final() {
  const t = useTranslations("final");
  const year = new Date().getFullYear();

  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-[50%_85%]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-teal-950 via-teal-950/55 to-teal-950/90" />
      <div className="sparkles absolute inset-0 opacity-70" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-5 pb-10 pt-20 text-center sm:pt-28">
        <Reveal>
          <Image
            src="/images/logo.png"
            alt=""
            width={88}
            height={88}
            className="mx-auto h-20 w-20 rounded-full shadow-glow ring-1 ring-gold-400/60"
          />
          <Ornament className="mt-6" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-gold-gradient mt-6 font-display text-5xl font-semibold uppercase tracking-[0.14em] sm:text-7xl">
            {t("title")}
          </h2>
          <p className="mt-3 font-display text-xl text-cream-50 sm:text-2xl">
            {t("subtitle")}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-lg text-base leading-relaxed text-cream-100/90 sm:text-lg">
            {t("line1")}
          </p>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-cream-100/90 sm:text-lg">
            {t("line2")}
          </p>
        </Reveal>

        <Reveal delay={0.3} className="mt-12">
          <CtaButton arrow>{t("cta")}</CtaButton>
        </Reveal>

        <Reveal delay={0.35}>
          <Lotus className="mx-auto mt-12 h-6 w-9 text-gold-400" />
          <p className="mt-4 text-base leading-relaxed text-cream-100/85 sm:text-lg">
            {t("closing1")}
            <br />
            <span className="font-semibold text-gold-400">{t("closing2")}</span>
          </p>
        </Reveal>

        <Reveal delay={0.4} className="mt-14 w-full">
          <div className="flex items-center justify-center gap-8 border-t border-gold-500/30 pt-8">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-sm uppercase tracking-[0.16em] text-cream-100/80 transition-colors hover:text-gold-300"
            >
              <IconInstagram className="h-5 w-5" />
              {t("instagram")}
            </a>
            <span className="h-5 w-px bg-gold-500/40" aria-hidden />
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-sm uppercase tracking-[0.16em] text-cream-100/80 transition-colors hover:text-gold-300"
            >
              <IconTelegram className="h-5 w-5" />
              {t("telegram")}
            </a>
          </div>
          <p className="mt-6 text-xs text-cream-100/40">
            © {year} · {t("rights")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
