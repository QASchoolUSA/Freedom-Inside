import Image from "next/image";
import { useTranslations } from "next-intl";
import { Lotus } from "@/components/ui/Ornament";
import { Reveal } from "@/components/ui/Reveal";
import {
  IconCompass,
  IconGraduation,
  IconLotus,
  IconPeople,
  IconSun,
} from "@/components/ui/icons";

const ICONS = [IconCompass, IconGraduation, IconPeople, IconLotus, IconSun];

export function Author() {
  const t = useTranslations("author");
  const items = t.raw("items") as string[];

  return (
    <section id="author" className="relative overflow-hidden bg-cream-100 py-20 sm:py-28">
      {/* soft warm light from the right, as in the reference */}
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(80%_60%_at_100%_30%,rgba(217,179,106,0.18),transparent_70%)]" />

      <div className="relative mx-auto max-w-5xl px-5">
        <Reveal className="text-center">
          <div className="mx-auto flex w-fit items-center gap-3 text-gold-700">
            <span className="h-px w-16 bg-gold-600/50" />
            <Lotus className="h-5 w-8" />
            <span className="h-px w-16 bg-gold-600/50" />
          </div>
          <h2 className="mt-5 font-display text-4xl font-medium uppercase tracking-[0.14em] text-[#7a5b33] sm:text-6xl">
            {t("title")}
          </h2>
        </Reveal>

        <div className="mt-12 grid items-start gap-10 sm:mt-16 md:grid-cols-[1.15fr_1fr]">
          <div className="space-y-7">
            {items.map((text, i) => {
              const Icon = ICONS[i];
              return (
                <Reveal key={i} delay={Math.min(i * 0.05, 0.2)}>
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-900 text-gold-400 shadow-[0_4px_14px_-4px_rgba(11,53,64,0.5)]">
                      <Icon className="h-5.5 w-5.5" />
                    </div>
                    <p className="text-[0.98rem] leading-relaxed text-ink-soft sm:text-base">
                      {text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div>
            <Reveal delay={0.1}>
              <div className="gold-ring relative overflow-hidden rounded-3xl">
                <Image
                  src="/images/author.jpg"
                  alt=""
                  width={549}
                  height={580}
                  sizes="(min-width: 768px) 26rem, 100vw"
                  className="h-auto w-full"
                />
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <blockquote className="relative mt-8 px-6">
                <span className="absolute -top-4 left-0 font-display text-6xl leading-none text-gold-600" aria-hidden>
                  “
                </span>
                <p className="font-display text-lg italic leading-relaxed text-ink sm:text-xl">
                  {t("quote")}
                </p>
                <span className="absolute -bottom-6 right-0 font-display text-6xl leading-none text-gold-600" aria-hidden>
                  ”
                </span>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
