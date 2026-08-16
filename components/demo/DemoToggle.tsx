"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { usePricingPlans, type CoursePlan } from "@/components/demo/pricingPlans";
import { CoursePlanCard } from "@/components/demo/CoursePlanCard";
import { DemoShell } from "@/components/demo/DemoShell";

export function DemoToggle() {
  const { plans, note } = usePricingPlans();
  const t = useTranslations("demo");
  const tp = useTranslations("pricing");
  const [active, setActive] = useState<"withSupport" | "selfPaced">("withSupport");
  const plan = plans.find((p) => p.variant === active) as CoursePlan;

  return (
    <DemoShell slug="toggle">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="font-display text-xl font-semibold text-gold-gradient sm:text-2xl">
          {tp("title")}
        </h2>
        <p className="mt-2 text-sm text-cream-100/75">{tp("lead1")}</p>
      </div>

      <div
        className="mx-auto mt-6 flex max-w-md rounded-full border border-gold-500/40 bg-teal-950/60 p-1"
        role="tablist"
        aria-label={t("toggle.label")}
      >
        {plans.map((p) => {
          const selected = p.variant === active;
          return (
            <button
              key={p.variant}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(p.variant)}
              className={`flex-1 rounded-full px-3 py-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] transition sm:text-xs ${
                selected
                  ? "bg-gold-500/30 text-gold-200 shadow-[0_0_20px_-8px_rgba(217,179,106,0.5)]"
                  : "text-cream-100/60 hover:text-cream-100"
              }`}
            >
              {p.variant === "withSupport"
                ? t("toggle.withSupport")
                : t("toggle.selfPaced")}
            </button>
          );
        })}
      </div>

      <div className="mx-auto mt-6 max-w-md">
        <CoursePlanCard key={plan.variant} plan={{ ...plan, featured: true }} />
      </div>

      <p className="mx-auto mt-5 max-w-md text-center text-sm text-cream-100/70">{note}</p>
    </DemoShell>
  );
}
