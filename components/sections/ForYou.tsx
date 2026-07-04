import Image from "next/image";
import { useTranslations } from "next-intl";
import { Ornament, Lotus } from "@/components/ui/Ornament";
import { Reveal } from "@/components/ui/Reveal";
import {
  IconCloud,
  IconCycle,
  IconHeart,
  IconHeartHands,
  IconKnot,
  IconLink,
  IconLotus,
  IconStarBadge,
} from "@/components/ui/icons";

const ICONS = [
  IconKnot,
  IconCloud,
  IconHeart,
  IconLink,
  IconHeartHands,
  IconCycle,
  IconLotus,
  IconStarBadge,
];

export function ForYou() {
  const t = useTranslations("forYou");
  const items = t.raw("items") as string[];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-950 to-teal-900 pt-20 sm:pt-28">
      <div className="sparkles absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-3xl px-5">
        <Reveal className="text-center">
          <Ornament />
          <h2 className="mt-5 font-display leading-tight">
            <span className="block text-2xl uppercase tracking-[0.14em] text-cream-100 sm:text-3xl">
              {t("titleA")}
            </span>
            <span className="text-gold-gradient mt-1 block text-4xl font-semibold uppercase tracking-[0.06em] sm:text-5xl">
              {t("titleB")}
            </span>
          </h2>
        </Reveal>

        <div className="mt-12 space-y-4 sm:mt-14">
          {items.map((text, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={i} delay={Math.min(i * 0.04, 0.16)}>
                <div className="flex items-center gap-4">
                  <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full bg-teal-900 text-gold-400 shadow-[0_0_0_1.5px_rgba(217,179,106,0.55),0_6px_20px_-6px_rgba(0,0,0,0.6)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="gold-ring parchment flex-1 rounded-2xl px-5 py-3.5 sm:px-6 sm:py-4">
                    <p className="font-display text-lg leading-snug text-ink sm:text-xl">
                      <span className="text-gold-700">—</span> {text}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Group circle photo with closing line */}
      <div className="relative mt-14 sm:mt-16">
        <Image
          src="/images/circle.jpg"
          alt=""
          width={941}
          height={360}
          sizes="100vw"
          className="h-72 w-full object-cover sm:h-96"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900 via-transparent to-teal-950/90" />
        <div className="absolute inset-x-0 bottom-0 px-5 pb-8 text-center">
          <p className="mx-auto max-w-xl font-display text-xl leading-snug text-cream-50 sm:text-2xl">
            {t("footer1")} {t("footer2")}
          </p>
          <Lotus className="mx-auto mt-3 h-6 w-9 text-gold-400" />
        </div>
      </div>
    </section>
  );
}
