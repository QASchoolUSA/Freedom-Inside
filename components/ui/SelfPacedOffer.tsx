"use client";

import { CtaButton } from "@/components/ui/CtaButton";
import type { CoursePlan } from "@/components/sections/pricingPlans";

/** Featured-plus self-paced strip with a clear $48 price. */
export function SelfPacedOffer({ plan }: { plan: CoursePlan }) {
  return (
    <div className="mx-auto mb-5 flex w-full max-w-md flex-col items-stretch gap-3 rounded-2xl border border-gold-500/45 bg-teal-950/50 px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between short-mobile:mb-3">
      <div className="text-left">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-cream-50 sm:text-base">
          {plan.badge}
        </p>
        <p className="text-gold-gradient mt-1 font-display text-3xl font-semibold leading-none sm:text-4xl">
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
