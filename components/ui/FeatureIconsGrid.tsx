import { useTranslations } from "next-intl";
import { IconCalendar, IconChat, IconLotus, IconPlay } from "@/components/ui/icons";

const FEATURE_ICONS = [IconPlay, IconLotus, IconChat, IconCalendar];

type Feature = { value: string; label: string };

export function FeatureIconsGrid({ className = "" }: { className?: string }) {
  const t = useTranslations("pricing");
  const features = t.raw("features") as Feature[];

  return (
    <ul className={`mx-auto flex w-full max-w-2xl items-start ${className}`}>
      {features.map((feature, index) => {
        const Icon = FEATURE_ICONS[index] ?? IconPlay;
        const hasValue = feature.value.trim().length > 0;

        return (
          <li
            key={index}
            className="relative flex min-w-0 flex-1 list-none flex-col items-center px-2.5 text-center sm:px-5"
          >
            {index > 0 ? (
              <span
                aria-hidden
                className="absolute bottom-1 left-0 top-1 w-px bg-gold-500/35"
              />
            ) : null}

            {/* Icon — identical for every column */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold-500/80 bg-teal-950/50 text-gold-300 shadow-glow backdrop-blur-[2px]">
              <Icon className="h-6 w-6" aria-hidden />
            </div>

            {/* Metric band — fixed height even when empty */}
            <div className="mt-3 flex h-8 w-full shrink-0 items-center justify-center">
              {hasValue ? (
                <span className="font-display text-2xl font-semibold leading-none tabular-nums text-cream-50">
                  {feature.value}
                </span>
              ) : null}
            </div>

            {/* Caption band — fixed height, top-aligned so first lines match */}
            <div className="mt-1 flex h-9 w-full shrink-0 items-start justify-center">
              <span className="whitespace-pre-line text-center text-[10px] font-semibold uppercase tracking-[0.14em] leading-[1.25] text-cream-50 sm:text-[11px]">
                {feature.label}
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
