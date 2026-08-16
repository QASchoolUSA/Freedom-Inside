"use client";

import { useTranslations } from "next-intl";
import { usePricingPlans } from "@/components/demo/pricingPlans";
import { CtaButton } from "@/components/ui/CtaButton";
import { DemoShell } from "@/components/demo/DemoShell";

const ROWS = [
  { id: "lessons", withSupport: true, selfPaced: true },
  { id: "practices", withSupport: true, selfPaced: true },
  { id: "access", withSupport: true, selfPaced: true },
  { id: "feedback", withSupport: true, selfPaced: false },
  { id: "group", withSupport: true, selfPaced: false },
] as const;

export function DemoCompare() {
  const { plans, note } = usePricingPlans();
  const t = useTranslations("demo");
  const tp = useTranslations("pricing");
  const primary = plans.find((p) => p.variant === "withSupport")!;
  const secondary = plans.find((p) => p.variant === "selfPaced")!;

  const cell = (has: boolean) =>
    has ? (
      <span className="font-semibold text-gold-300" aria-label={t("compare.yes")}>
        ✓
      </span>
    ) : (
      <span className="text-cream-100/35" aria-label={t("compare.no")}>
        —
      </span>
    );

  return (
    <DemoShell slug="compare">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-xl font-semibold text-gold-gradient sm:text-2xl">
          {tp("title")}
        </h2>
        <p className="mt-2 text-sm text-cream-100/75">{tp("lead1")}</p>
      </div>

      <div className="mx-auto mt-8 max-w-2xl overflow-hidden rounded-2xl border border-gold-500/45 bg-teal-950/60 shadow-card backdrop-blur-sm">
        <div className="grid grid-cols-[1.2fr_1fr_1fr] border-b border-gold-500/30 bg-gold-500/10">
          <div className="px-3 py-3 text-left text-[10px] font-semibold uppercase tracking-[0.14em] text-cream-100/50 sm:px-4">
            {t("compare.feature")}
          </div>
          <div className="px-2 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.12em] text-gold-300 sm:px-3">
            {primary.badge}
            <div className="mt-1 font-display text-base normal-case tracking-normal text-gold-gradient sm:text-lg">
              {primary.price}
            </div>
          </div>
          <div className="px-2 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.12em] text-cream-100/70 sm:px-3">
            {secondary.badge}
            <div className="mt-1 font-display text-base normal-case tracking-normal text-cream-50 sm:text-lg">
              {secondary.price}
            </div>
          </div>
        </div>

        {ROWS.map((row, i) => (
          <div
            key={row.id}
            className={`grid grid-cols-[1.2fr_1fr_1fr] ${
              i < ROWS.length - 1 ? "border-b border-gold-500/20" : ""
            }`}
          >
            <div className="px-3 py-3 text-left text-sm text-cream-100/85 sm:px-4">
              {t(`compare.rows.${row.id}`)}
            </div>
            <div className="flex items-center justify-center px-2 py-3 text-lg">
              {cell(row.withSupport)}
            </div>
            <div className="flex items-center justify-center px-2 py-3 text-lg">
              {cell(row.selfPaced)}
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
        <CtaButton
          href={primary.href}
          className="!px-5 !py-3 !text-sm tracking-[0.14em]"
        >
          {primary.cta}
        </CtaButton>
        <CtaButton
          href={secondary.href}
          variant="outline"
          className="!px-5 !py-3 !text-sm tracking-[0.14em]"
        >
          {secondary.cta}
        </CtaButton>
      </div>

      {primary.offer ? (
        <p className="mx-auto mt-4 max-w-md text-center text-sm text-gold-300/90">
          {primary.offer}
        </p>
      ) : null}

      <p className="mx-auto mt-4 max-w-md text-center text-sm text-cream-100/70">{note}</p>
    </DemoShell>
  );
}
