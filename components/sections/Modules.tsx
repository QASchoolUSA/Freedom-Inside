import { useTranslations } from "next-intl";
import { Ornament } from "@/components/ui/Ornament";
import { Reveal } from "@/components/ui/Reveal";
import {
  IconBody,
  IconHeart,
  IconHorizon,
  IconInfinity,
  IconKnot,
  IconLotus,
  IconMask,
  IconMeditation,
  IconMind,
  IconSoul,
} from "@/components/ui/icons";

const ICONS = [
  IconMeditation,
  IconMask,
  IconBody,
  IconMind,
  IconLotus,
  IconSoul,
  IconHorizon,
  IconKnot,
  IconInfinity,
  IconHeart,
];

export function Modules() {
  const t = useTranslations("modules");
  const items = t.raw("items") as { title: string; text: string }[];

  return (
    <section id="program" className="relative overflow-hidden py-20 sm:py-28">
      {/* sunset-over-sea backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-950 via-teal-800 to-teal-950" />
      <div className="absolute inset-x-0 top-1/3 h-1/3 bg-[radial-gradient(60%_100%_at_50%_50%,rgba(217,179,106,0.22),transparent_70%)]" />
      <div className="sparkles absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-3xl px-5">
        <Reveal className="text-center">
          <Ornament />
          <h2 className="mt-5 font-display text-3xl font-semibold uppercase tracking-[0.06em] sm:text-5xl">
            <span className="text-gold-gradient">{t("title")}</span>
          </h2>
        </Reveal>

        <div className="mt-12 space-y-5 sm:mt-16">
          {items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={i} delay={Math.min(i * 0.04, 0.16)}>
                <article className="gold-ring parchment flex items-center gap-4 rounded-3xl px-5 py-5 sm:gap-6 sm:px-7 sm:py-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-900 font-display text-lg font-semibold text-gold-300 shadow-[0_0_0_1px_rgba(217,179,106,0.5)]">
                    {i + 1}
                  </div>
                  <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold-600/50 text-gold-700 sm:flex">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold leading-tight text-ink sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft sm:text-[0.95rem]">
                      {item.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
