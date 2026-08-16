import { useTranslations } from "next-intl";
import {
  ZENEDU_URL_SELF_PACED,
  ZENEDU_URL_WITH_SUPPORT,
} from "@/lib/config";

export type FeatureItem = { value: string; label: string };

export type CoursePlan = {
  badge: string;
  features: FeatureItem[];
  price: string;
  cta: string;
  href: string;
  oldPrice?: string;
  nowLabel?: string;
  offer?: string;
  featured?: boolean;
  variant: "withSupport" | "selfPaced";
};

export function usePricingPlans(): {
  withSupport: CoursePlan;
  selfPaced: CoursePlan;
  note: string;
} {
  const t = useTranslations("pricing");

  const withSupport: CoursePlan = {
    badge: t("withSupport.badge"),
    features: t.raw("withSupport.features") as FeatureItem[],
    oldPrice: t("withSupport.oldPrice"),
    nowLabel: t("withSupport.nowLabel"),
    price: t("withSupport.price"),
    offer: t("withSupport.offer"),
    cta: t("withSupport.cta"),
    href: ZENEDU_URL_WITH_SUPPORT,
    featured: true,
    variant: "withSupport",
  };

  const selfPaced: CoursePlan = {
    badge: t("selfPaced.badge"),
    features: t.raw("selfPaced.features") as FeatureItem[],
    price: t("selfPaced.price"),
    cta: t("selfPaced.cta"),
    href: ZENEDU_URL_SELF_PACED,
    variant: "selfPaced",
  };

  return { withSupport, selfPaced, note: t("note") };
}
