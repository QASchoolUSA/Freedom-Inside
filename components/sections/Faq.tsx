"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Lotus } from "@/components/ui/Ornament";
import { Reveal } from "@/components/ui/Reveal";
import {
  IconClock,
  IconHeart,
  IconHeartHands,
  IconLock,
  IconLotus,
  IconQuestion,
} from "@/components/ui/icons";

const ICONS = [IconQuestion, IconClock, IconHeart, IconLotus, IconHeartHands, IconLock];

export function Faq() {
  const t = useTranslations("faq");
  const items = t.raw("items") as { q: string; a: string }[];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-cream-50 py-20 sm:py-28">
      <div className="absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(70%_50%_at_100%_30%,rgba(217,179,106,0.14),transparent_70%)]" />

      <div className="relative mx-auto max-w-3xl px-5">
        <Reveal className="text-center">
          <div className="mx-auto flex w-fit items-center gap-3 text-gold-700">
            <span className="h-px w-16 bg-gold-600/50" />
            <Lotus className="h-5 w-8" />
            <span className="h-px w-16 bg-gold-600/50" />
          </div>
          <h2 className="mt-5 font-display leading-tight">
            <span className="block text-4xl font-medium uppercase tracking-[0.12em] text-ink sm:text-5xl">
              {t("title")}
            </span>
          </h2>
        </Reveal>

        <div className="mt-12 space-y-4">
          {items.map((item, i) => {
            const Icon = ICONS[i];
            const isOpen = open === i;
            const dark = i % 2 === 0;
            return (
              <Reveal key={i} delay={Math.min(i * 0.04, 0.16)}>
                <div className="overflow-hidden rounded-2xl border border-cream-300 bg-white shadow-[0_6px_20px_-10px_rgba(20,52,61,0.2)]">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                  >
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
                        dark
                          ? "bg-teal-900 text-gold-400"
                          : "bg-gold-600/90 text-cream-50"
                      }`}
                    >
                      <Icon className="h-5.5 w-5.5" />
                    </span>
                    <span className="flex-1 font-display text-lg font-semibold leading-snug text-ink sm:text-xl">
                      {item.q}
                    </span>
                    <span
                      className={`text-2xl text-gold-700 transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 pl-20 pr-10 text-[0.95rem] leading-relaxed text-ink-soft sm:px-6 sm:pl-21">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="parchment mt-12 rounded-2xl border border-gold-600/40 px-7 py-7 text-center">
            <Lotus className="mx-auto h-5 w-8 text-gold-700" />
            <p className="mt-3 text-base text-ink-soft">{t("footer1")}</p>
            <p className="mt-1 font-display text-lg font-semibold text-gold-700">
              {t("footer2")}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
