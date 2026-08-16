"use client";

import { useTranslations } from "next-intl";
import { usePricingPlans } from "@/components/demo/pricingPlans";
import { CoursePlanCard } from "@/components/demo/CoursePlanCard";
import { CtaButton } from "@/components/ui/CtaButton";
import { DemoShell } from "@/components/demo/DemoShell";

export function DemoFeaturedPlus() {
  const { plans, note } = usePricingPlans();
  const t = useTranslations("demo");
  const tp = useTranslations("pricing");
  const primary = plans.find((p) => p.variant === "withSupport")!;
  const secondary = plans.find((p) => p.variant === "selfPaced")!;

  return (
    <DemoShell slug="featured-plus">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="font-display text-xl font-semibold text-gold-gradient sm:text-2xl">
          {tp("title")}
        </h2>
        <p className="mt-2 text-sm text-cream-100/75">{tp("lead1")}</p>
      </div>

      <div className="mx-auto mt-8 max-w-md">
        <CoursePlanCard plan={primary} />
      </div>

      <div className="mx-auto mt-5 flex max-w-md flex-col items-stretch gap-3 rounded-2xl border border-gold-500/35 bg-teal-950/45 px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-left">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-cream-100/55">
            {t("featuredPlus.alsoAvailable")}
          </p>
          <p className="mt-1 font-display text-base font-semibold text-cream-50">
            {secondary.badge} —{" "}
            <span className="text-gold-gradient">{secondary.price}</span>
          </p>
        </div>
        <CtaButton
          href={secondary.href}
          variant="outline"
          className="!px-5 !py-2.5 !text-xs tracking-[0.14em] sm:!text-sm"
        >
          {secondary.cta}
        </CtaButton>
      </div>

      <p className="mx-auto mt-5 max-w-md text-center text-sm text-cream-100/70">{note}</p>
    </DemoShell>
  );
}
