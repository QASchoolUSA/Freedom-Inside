import Image from "next/image";
import { useTranslations } from "next-intl";
import { Lotus } from "@/components/ui/Ornament";
import { Reveal } from "@/components/ui/Reveal";
import {
  IconHeart,
  IconLotus,
  IconShield,
  IconStarBadge,
} from "@/components/ui/icons";

const ICONS = [IconStarBadge, IconLotus, IconShield, IconHeart];

export function Guarantee() {
  const t = useTranslations("guarantee");
  const items = t.raw("items") as string[];

  return (
    <section className="relative overflow-hidden bg-cream-100 pb-36 pt-20 sm:pb-44 sm:pt-28">
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(80%_60%_at_100%_20%,rgba(217,179,106,0.16),transparent_70%)]" />

      <div className="relative mx-auto max-w-5xl px-5">
        <Reveal>
          <div className="flex w-fit items-center gap-3 text-gold-700">
            <span className="h-px w-14 bg-gold-600/50" />
            <Lotus className="h-5 w-8" />
            <span className="h-px w-14 bg-gold-600/50" />
          </div>
          <h2 className="mt-5 font-display leading-tight">
            <span className="block text-4xl font-medium uppercase tracking-[0.1em] text-ink sm:text-6xl">
              {t("titleA")}
            </span>
            <span className="block text-3xl font-medium uppercase tracking-[0.1em] text-[#a97f3e] sm:text-5xl">
              {t("titleB")}
            </span>
          </h2>
        </Reveal>

        <div className="mt-12 grid items-center gap-10 md:grid-cols-[1.1fr_1fr]">
          <div className="space-y-7">
            {items.map((text, i) => {
              const Icon = ICONS[i];
              const dark = i === 2;
              return (
                <Reveal key={i} delay={Math.min(i * 0.05, 0.2)}>
                  <div className="flex items-start gap-4">
                    <div
                      className={`mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
                        dark
                          ? "bg-teal-900 text-gold-400"
                          : "border border-gold-600/60 bg-cream-50 text-gold-700"
                      }`}
                    >
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

          <Reveal delay={0.1}>
            <div className="gold-ring relative overflow-hidden rounded-3xl">
              <Image
                src="/images/guarantee.jpg"
                alt=""
                width={524}
                height={640}
                sizes="(min-width: 768px) 26rem, 100vw"
                className="h-auto w-full"
              />
            </div>
          </Reveal>
        </div>

        {/* 14-day badge */}
        <Reveal delay={0.15}>
          <div className="gold-ring parchment relative z-10 mx-auto mt-14 flex max-w-2xl flex-col items-center gap-6 rounded-3xl px-7 py-8 sm:flex-row sm:gap-8 sm:px-10">
            <div className="relative flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-teal-900 shadow-[0_0_0_3px_#d9b36a,0_0_0_6px_#0b3540,0_10px_30px_-8px_rgba(11,53,64,0.55)]">
              <div className="text-center leading-none">
                <div className="font-display text-4xl font-bold text-gold-300">
                  {t("badgeDays")}
                </div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-400">
                  {t("badgeDaysLabel")}
                </div>
              </div>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="font-display text-2xl font-semibold uppercase tracking-[0.06em] text-ink">
                {t("badgeTitle")}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-ink-soft">
                {t("badgeText")}
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* dark wave into the next (dark) section */}
      <svg
        viewBox="0 0 1440 190"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 h-32 w-full sm:h-44"
        aria-hidden
      >
        <path
          d="M0 110 C 240 30, 480 30, 720 90 S 1200 190, 1440 90 L 1440 190 L 0 190 Z"
          fill="#06232b"
        />
        <path
          d="M0 110 C 240 30, 480 30, 720 90 S 1200 190, 1440 90"
          fill="none"
          stroke="#d9b36a"
          strokeOpacity="0.65"
          strokeWidth="2"
        />
      </svg>
    </section>
  );
}
