import { useTranslations } from "next-intl";
import { IconCalendar, IconChat, IconLotus, IconPlay } from "@/components/ui/icons";

const FEATURE_ICONS = [IconPlay, IconLotus, IconChat, IconCalendar];

export function FeatureIconsGrid({ className = "" }: { className?: string }) {
  const t = useTranslations("pricing");
  const features = t.raw("features") as { value: string; label: string }[];

  return (
    <div
      className={`mx-auto grid w-full max-w-lg grid-cols-4 divide-x divide-gold-500/40 sm:max-w-xl ${className}`}
    >
      {features.map((feature, index) => {
        const Icon = FEATURE_ICONS[index];
        const labelLines = feature.label.split("\n").filter(Boolean);
        const hasValue = Boolean(feature.value);

        return (
          <div
            key={index}
            className="grid grid-rows-[auto_1.5rem_2rem] justify-items-center gap-y-2 px-1.5 sm:px-2"
          >
            <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full border border-gold-500/80 bg-teal-950/50 text-gold-300 shadow-glow backdrop-blur-[2px] short-mobile:h-11 short-mobile:w-11 sm:h-15 sm:w-15 short:h-13 short:w-13">
              <Icon className="h-6 w-6 sm:h-6.5 sm:w-6.5" />
            </div>

            <div className="flex w-full items-center justify-center">
              {hasValue ? (
                <span className="font-display text-lg font-semibold leading-none text-cream-50 sm:text-xl">
                  {feature.value}
                </span>
              ) : (
                <span className="text-center text-[10px] font-semibold uppercase tracking-[0.14em] leading-none text-cream-50 sm:text-[11px]">
                  {labelLines[0]}
                </span>
              )}
            </div>

            <div className="flex w-full items-start justify-center">
              <span className="max-w-full text-center text-[10px] font-semibold uppercase tracking-[0.1em] leading-tight text-cream-50 sm:text-[11px]">
                {hasValue ? feature.label : (labelLines[1] ?? "")}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
