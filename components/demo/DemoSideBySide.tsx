"use client";

import { useTranslations } from "next-intl";
import { usePricingPlans } from "@/components/demo/pricingPlans";
import { CoursePlanCard } from "@/components/demo/CoursePlanCard";
import { DemoShell } from "@/components/demo/DemoShell";

export function DemoSideBySide() {
  const { plans, note } = usePricingPlans();
  const t = useTranslations("pricing");

  return (
    <DemoShell slug="side-by-side">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-xl font-semibold text-gold-gradient sm:text-2xl">
          {t("title")}
        </h2>
        <p className="mt-2 text-sm text-cream-100/75 sm:text-base">{t("lead1")}</p>
      </div>
      <div className="mx-auto mt-8 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
        {plans.map((plan) => (
          <CoursePlanCard key={plan.badge} plan={plan} />
        ))}
      </div>
      <p className="mx-auto mt-5 max-w-md text-center text-sm text-cream-100/70">{note}</p>
    </DemoShell>
  );
}
