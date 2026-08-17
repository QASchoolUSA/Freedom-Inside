"use client";

import { CtaButton } from "@/components/ui/CtaButton";
import type { CoursePlan } from "@/components/sections/pricingPlans";

/** Matching offer strip used for both 48$ and 245$ plans. */
export function PlanOfferStrip({
  plan,
  offer,
  className = "",
}: {
  plan: CoursePlan;
  offer?: string;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto flex w-full max-w-md flex-col items-stretch gap-3 rounded-2xl border border-gold-500/45 bg-teal-950/50 px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between ${className}`}
    >
      <div className="text-center sm:text-left">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-cream-50 sm:text-base">
          {plan.badge}
        </p>
        <p className="text-gold-gradient mt-1 font-display text-3xl font-semibold leading-none sm:text-4xl">
          {plan.price}
        </p>
        {offer ? (
          <p className="mt-2 inline-flex max-w-full items-center gap-1.5 text-left font-display text-[0.8rem] font-semibold leading-snug text-gold-300 sm:text-[0.88rem]">
            <span aria-hidden>🎁</span>
            <span>{offer}</span>
          </p>
        ) : null}
      </div>
      <CtaButton
        href={plan.href}
        className="!px-5 !py-2.5 !text-xs tracking-[0.14em] sm:!text-sm"
      >
        {plan.cta}
      </CtaButton>
    </div>
  );
}
