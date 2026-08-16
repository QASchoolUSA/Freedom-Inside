"use client";

import {
  IconCalendar,
  IconChat,
  IconLotus,
  IconPlay,
} from "@/components/ui/icons";
import { CtaButton } from "@/components/ui/CtaButton";
import type { CoursePlan, FeatureItem } from "@/components/demo/pricingPlans";

const SUPPORT_ICONS = [IconPlay, IconLotus, IconChat, IconCalendar];
const SELF_PACED_ICONS = [IconPlay, IconLotus, IconCalendar];

function PlanFeatures({
  features,
  variant,
}: {
  features: FeatureItem[];
  variant: CoursePlan["variant"];
}) {
  const icons = variant === "selfPaced" ? SELF_PACED_ICONS : SUPPORT_ICONS;
  const cols = features.length <= 3 ? "grid-cols-3" : "grid-cols-4";

  return (
    <div className={`mx-auto grid w-full ${cols}`}>
      {features.map((f, i) => {
        const Icon = icons[i] ?? IconCalendar;
        const labelLines = f.label.split("\n");
        const topText = f.value || labelLines[0];
        const bottomText = f.value ? f.label : (labelLines[1] ?? "");

        return (
          <div
            key={i}
            className={`flex flex-col items-center gap-0.5 px-1 py-1 sm:gap-1 sm:px-1.5 sm:py-1.5 ${
              i > 0 ? "border-l border-gold-500/40" : ""
            }`}
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold-500/80 bg-teal-950/50 text-gold-300 shadow-glow sm:h-10 sm:w-10">
              <Icon className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
            </div>
            {f.value ? (
              <span className="font-display text-sm font-semibold leading-none text-cream-50 sm:text-base">
                {f.value}
              </span>
            ) : (
              <span className="text-center text-[8px] font-semibold uppercase tracking-[0.12em] leading-tight text-cream-50 sm:text-[9px]">
                {topText}
              </span>
            )}
            <span className="text-center text-[8px] font-semibold uppercase tracking-[0.12em] leading-tight text-cream-50 sm:text-[9px]">
              {bottomText}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export function CoursePlanCard({ plan }: { plan: CoursePlan }) {
  const featured = plan.featured ?? plan.variant === "withSupport";

  return (
    <div
      className={`flex h-full flex-col rounded-2xl border backdrop-blur-sm ${
        featured
          ? "border-gold-500/80 bg-teal-950/70 shadow-[0_0_32px_-10px_rgba(217,179,106,0.45)]"
          : "border-gold-500/40 bg-teal-950/55 shadow-card"
      } px-3.5 py-3.5 sm:px-4 sm:py-4`}
    >
      <p
        className={`text-center text-[10px] font-semibold uppercase tracking-[0.18em] ${
          featured ? "text-gold-300" : "text-cream-100/75"
        }`}
      >
        {plan.badge}
      </p>

      <div className="mt-2.5 sm:mt-3">
        <PlanFeatures features={plan.features} variant={plan.variant} />
      </div>

      <div className="mt-3 sm:mt-3.5">
        {plan.oldPrice && plan.nowLabel ? (
          <div className="flex w-full items-stretch overflow-hidden rounded-xl border border-gold-500/70 bg-teal-950/65">
            <div className="flex flex-1 items-center justify-center px-2.5 py-2 sm:px-3 sm:py-2.5">
              <span className="relative font-display text-lg text-cream-100/75 sm:text-xl">
                {plan.oldPrice}
                <span className="absolute left-[-6%] top-1/2 h-[2px] w-[112%] -rotate-6 rounded bg-[#c0392b]" />
              </span>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center border-l border-gold-500/40 bg-gold-500/10 px-2.5 py-2 sm:px-3 sm:py-2.5">
              <span className="text-[9px] uppercase tracking-[0.2em] text-gold-300 sm:text-[10px]">
                {plan.nowLabel}
              </span>
              <span className="text-gold-gradient mt-0.5 font-display text-2xl font-semibold sm:text-3xl">
                {plan.price}
              </span>
            </div>
          </div>
        ) : (
          <div className="flex w-full items-center justify-center overflow-hidden rounded-xl border border-gold-500/50 bg-teal-950/65 px-3 py-2.5 sm:py-3">
            <span className="text-gold-gradient font-display text-2xl font-semibold sm:text-3xl">
              {plan.price}
            </span>
          </div>
        )}
      </div>

      {plan.offer ? (
        <div className="mt-2.5 flex justify-center sm:mt-3">
          <p className="inline-flex max-w-full items-center gap-1.5 rounded-xl border border-gold-500/45 bg-gradient-to-r from-gold-500/15 via-gold-500/10 to-transparent px-2.5 py-1.5 text-left sm:px-3 sm:py-2">
            <span className="shrink-0 text-sm leading-none sm:text-base" aria-hidden>
              🎁
            </span>
            <span className="font-display text-[0.78rem] font-semibold leading-snug text-gold-300 sm:text-[0.88rem]">
              {plan.offer}
            </span>
          </p>
        </div>
      ) : (
        <div className="mt-2.5 min-h-[2.25rem] sm:mt-3 sm:min-h-[2.5rem]" aria-hidden />
      )}

      <div className="mt-auto pt-2.5 sm:pt-3">
        <CtaButton
          href={plan.href}
          variant={featured ? "gold" : "outline"}
          className="w-full !px-4 !py-2.5 !text-[0.7rem] tracking-[0.14em] sm:!px-5 sm:!py-3 sm:!text-sm"
        >
          {plan.cta}
        </CtaButton>
      </div>
    </div>
  );
}
