"use client";

import { useTranslations } from "next-intl";
import { CtaButton } from "@/components/ui/CtaButton";
import type { CoursePlan } from "@/components/sections/pricingPlans";

/** Featured-plus secondary strip — same layout as the demo, with a clearer $48. */
export function SelfPacedOffer({ plan }: { plan: CoursePlan }) {
  const t = useTranslations("pricing");

  return (
    <div className="mx-auto mb-5 flex w-full max-w-md flex-col items-stretch gap-3 rounded-2xl border border-gold-500/45 bg-teal-950/50 px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between short-mobile:mb-3">
      <div className="text-left">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-cream-100/55">
          {t("selfPaced.alsoAvailable")}
        </p>
        <p className="mt-1 font-display text-base font-semibold text-cream-50 sm:text-lg">
          {plan.badge}
        </p>
        <p className="text-gold-gradient mt-0.5 font-display text-3xl font-semibold leading-none sm:text-4xl">
          {plan.price}
        </p>
      </div>
      <CtaButton
        href={plan.href}
        variant="outline"
        className="!px-5 !py-2.5 !text-xs tracking-[0.14em] sm:!text-sm"
      >
        {plan.cta}
      </CtaButton>
    </div>
  );
}
