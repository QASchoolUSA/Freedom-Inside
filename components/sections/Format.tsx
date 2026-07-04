import Image from "next/image";
import { useTranslations } from "next-intl";
import { Ornament, Lotus } from "@/components/ui/Ornament";
import { Reveal } from "@/components/ui/Reveal";
import {
  IconCalendar,
  IconClay,
  IconLaptop,
  IconLotus,
  IconNotebook,
  IconPen,
  IconPeople,
  IconPlay,
} from "@/components/ui/icons";

const CARD_ICONS = [IconPlay, IconLaptop, IconCalendar, IconPeople, IconLotus];
const NEED_ICONS = [IconClay, IconNotebook, IconPen, IconLaptop];

export function Format() {
  const t = useTranslations("format");
  const items = t.raw("items") as { title: string; text: string }[];
  const needItems = t.raw("needItems") as string[];

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* warm candle-lit backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-950 via-[#2a2018] to-teal-950" />
      <div className="absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(217,179,106,0.14),transparent_70%)]" />
      <div className="sparkles absolute inset-0 opacity-50" />

      <div className="relative mx-auto max-w-4xl px-5">
        <Reveal className="text-center">
          <Ornament />
          <h2 className="mt-5 font-display leading-tight">
            <span className="block text-2xl uppercase tracking-[0.16em] text-cream-100 sm:text-3xl">
              {t("titleA")}
            </span>
            <span className="text-gold-gradient mt-1 block text-4xl font-semibold uppercase tracking-[0.08em] sm:text-6xl">
              {t("titleB")}
            </span>
          </h2>
          <Ornament className="mt-5" />
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl space-y-4 sm:mt-14">
          {items.map((item, i) => {
            const Icon = CARD_ICONS[i];
            return (
              <Reveal key={i} delay={Math.min(i * 0.04, 0.16)}>
                <article className="gold-ring parchment flex items-center gap-5 rounded-2xl px-5 py-4 sm:px-7 sm:py-5">
                  <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-xl bg-teal-900 text-gold-400 shadow-[0_0_0_1px_rgba(217,179,106,0.4)]">
                    <Icon className="h-6.5 w-6.5" />
                  </div>
                  <p className="text-base leading-snug text-ink-soft sm:text-lg">
                    <span className="font-display text-xl font-semibold text-ink sm:text-2xl">
                      {item.title}
                    </span>{" "}
                    {item.text}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-[1.6fr_1fr]">
          <Reveal>
            <div className="gold-ring relative h-full min-h-72 overflow-hidden rounded-3xl">
              <Image
                src="/images/format.jpg"
                alt=""
                fill
                sizes="(min-width: 640px) 40rem, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <aside className="flex h-full flex-col rounded-3xl border border-gold-500/40 bg-teal-950/55 px-6 py-7 backdrop-blur-sm">
              <h3 className="text-center font-display text-xl font-semibold text-cream-50">
                {t("needTitle")}
              </h3>
              <ul className="mt-5 space-y-4">
                {needItems.map((item, i) => {
                  const Icon = NEED_ICONS[i];
                  return (
                    <li key={i} className="flex items-center gap-3.5 text-cream-100/90">
                      <Icon className="h-6 w-6 shrink-0 text-gold-400" />
                      <span className="text-[0.95rem]">{item}</span>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-auto pt-6 text-center">
                <Lotus className="mx-auto h-5 w-8 text-gold-400" />
                <p className="mt-3 text-sm leading-relaxed text-cream-100/75">
                  {t("needFooter")}
                </p>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
