"use client";

import { usePricingPlans } from "@/components/sections/pricingPlans";
import { PlanOfferStrip } from "@/components/ui/PlanOfferStrip";

export function SelfPacedOfferBlock() {
  const { selfPaced } = usePricingPlans();
  return <PlanOfferStrip plan={selfPaced} className="mb-5 short-mobile:mb-3" />;
}

export function WithSupportOfferBlock() {
  const { withSupport } = usePricingPlans();
  return (
    <PlanOfferStrip
      plan={withSupport}
      offer={withSupport.offer}
      className="mt-5 short-mobile:mt-3"
    />
  );
}
