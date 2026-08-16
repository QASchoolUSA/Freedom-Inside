"use client";

import { useTranslations } from "next-intl";
import { usePricingPlans } from "@/components/demo/pricingPlans";
import { CoursePlanCard } from "@/components/demo/CoursePlanCard";
import { DemoShell } from "@/components/demo/DemoShell";

export function DemoStack() {
  const { plans, note } = usePricingPlans();
  const t = useTranslations("demo");
  const tp = useTranslations("pricing");
  const primary = plans.find((p) => p.variant === "withSupport")!;
  const secondary = plans.find((p) => p.variant === "selfPaced")!;

  return (
    <DemoShell slug="stack">
      <div className="mx-auto max-w-md text-center">
        <h2 className="font-display text-xl font-semibold text-gold-gradient sm:text-2xl">
          {tp("title")}
        </h2>
        <p className="mt-2 text-sm text-cream-100/75">{tp("lead1")}</p>
      </div>

      <div className="mx-auto mt-8 flex max-w-md flex-col gap-5">
        <div>
          <p className="mb-2 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-400">
            {t("stack.recommended")}
          </p>
          <CoursePlanCard plan={primary} />
        </div>

        <div>
          <p className="mb-2 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-cream-100/45">
            {t("stack.alternative")}
          </p>
          <CoursePlanCard plan={secondary} />
        </div>
      </div>

      <p className="mx-auto mt-5 max-w-md text-center text-sm text-cream-100/70">{note}</p>
    </DemoShell>
  );
}
