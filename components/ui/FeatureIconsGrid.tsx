import { useTranslations } from "next-intl";
import { IconCalendar, IconChat, IconLotus, IconPlay } from "@/components/ui/icons";

const FEATURE_ICONS = [IconPlay, IconLotus, IconChat, IconCalendar];

export function FeatureIconsGrid({ className = "" }: { className?: string }) {
  const t = useTranslations("pricing");
  const features = t.raw("features") as { value: string; label: string }[];

  return (
    <div
      className={`mx-auto grid w-full max-w-lg grid-cols-4 items-start sm:max-w-xl ${className}`}
    >
      {features.map((feature, index) => {
        const Icon = FEATURE_ICONS[index];
        const labelLines = feature.label.split("\n");
        const hasValue = Boolean(feature.value);
        const topText = hasValue ? feature.value : labelLines[0];
        const bottomText = hasValue ? feature.label : (labelLines[1] ?? "");

        return (
          <div
            key={index}
            className={`flex flex-col items-center px-1.5 sm:px-2 ${
              index > 0 ? "border-l border-gold-500/40" : ""
            }`}
          >
            <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full border border-gold-500/80 bg-teal-950/50 text-gold-300 shadow-glow backdrop-blur-[2px] short-mobile:h-11 short-mobile:w-11 sm:h-15 sm:w-15 short:h-13 short:w-13">
              <Icon className="h-6 w-6 sm:h-6.5 sm:w-6.5" />
            </div>

            <div className="mt-2 flex min-h-[1.35rem] items-end justify-center sm:min-h-[1.5rem]">
              {hasValue ? (
                <span className="font-display text-lg font-semibold leading-none text-cream-50 sm:text-xl">
                  {topText}
                </span>
              ) : (
                <span className="text-center text-[10px] font-semibold uppercase tracking-[0.14em] leading-none text-cream-50 sm:text-[11px]">
                  {topText}
                </span>
              )}
            </div>

            <div className="mt-1 flex min-h-[2rem] items-start justify-center sm:min-h-[2.25rem]">
              <span className="text-center text-[10px] font-semibold uppercase tracking-[0.14em] leading-tight text-cream-50 sm:text-[11px]">
                {bottomText}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
