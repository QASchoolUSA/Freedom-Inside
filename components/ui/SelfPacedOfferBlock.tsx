"use client";

import { usePricingPlans } from "@/components/sections/pricingPlans";
import { SelfPacedOffer } from "@/components/ui/SelfPacedOffer";

export function SelfPacedOfferBlock() {
  const { selfPaced } = usePricingPlans();
  return <SelfPacedOffer plan={selfPaced} />;
}
