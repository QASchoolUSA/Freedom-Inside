"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { DEMO_VARIANTS } from "@/components/demo/variants";
import { DemoShell } from "@/components/demo/DemoShell";

export function DemoIndex() {
  const t = useTranslations("demo");

  return (
    <DemoShell>
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-400/80">
          {t("demoLabel")}
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-gold-gradient sm:text-4xl">
          {t("indexTitle")}
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-cream-100/70 sm:text-base">
          {t("indexLead")}
        </p>
      </div>

      <ul className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
        {DEMO_VARIANTS.map((v) => (
          <li key={v.slug}>
            <Link
              href={`/demo/${v.slug}`}
              className="block h-full rounded-2xl border border-gold-500/40 bg-teal-950/55 px-5 py-5 text-left shadow-card transition hover:border-gold-500/70 hover:bg-teal-950/75"
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-400">
                {t("option")} {v.letter}
              </span>
              <span className="mt-2 block font-display text-lg font-semibold text-cream-50">
                {t(`variants.${v.slug}.title`)}
              </span>
              <span className="mt-2 block text-sm leading-relaxed text-cream-100/65">
                {t(`variants.${v.slug}.description`)}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </DemoShell>
  );
}
