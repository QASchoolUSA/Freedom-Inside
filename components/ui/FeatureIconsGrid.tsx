import { useTranslations } from "next-intl";
import { IconCalendar, IconChat, IconLotus, IconPlay } from "@/components/ui/icons";

const FEATURE_ICONS = [IconPlay, IconLotus, IconChat, IconCalendar];

export function FeatureIconsGrid({ className = "" }: { className?: string }) {
  const t = useTranslations("pricing");
  const features = t.raw("features") as { value: string; label: string }[];

  return (
    <div
      className={`mx-auto grid w-full max-w-lg grid-cols-4 grid-rows-[auto_auto_auto] gap-y-2 sm:max-w-xl ${className}`}
    >
      {features.map((_, i) => {
        const Icon = FEATURE_ICONS[i];
        return (
          <div
            key={`icon-${i}`}
            className={`flex justify-center px-1.5 sm:px-2 ${i > 0 ? "border-l border-gold-500/40" : ""}`}
            style={{ gridColumn: i + 1, gridRow: 1 }}
          >
            <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full border border-gold-500/80 bg-teal-950/50 text-gold-300 shadow-glow backdrop-blur-[2px] short-mobile:h-11 short-mobile:w-11 sm:h-15 sm:w-15 short:h-13 short:w-13">
              <Icon className="h-6 w-6 sm:h-6.5 sm:w-6.5" />
            </div>
          </div>
        );
      })}
      {features.map((f, i) => {
        const labelLines = f.label.split("\n");
        const topText = f.value || labelLines[0];
        return (
          <div
            key={`top-${i}`}
            className={`flex items-end justify-center px-1.5 sm:px-2 ${i > 0 ? "border-l border-gold-500/40" : ""}`}
            style={{ gridColumn: i + 1, gridRow: 2 }}
          >
            {f.value ? (
              <span className="font-display text-lg font-semibold leading-none text-cream-50 sm:text-xl">
                {f.value}
              </span>
            ) : (
              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] leading-none text-cream-50 sm:text-[11px]">
                {topText}
              </span>
            )}
          </div>
        );
      })}
      {features.map((f, i) => {
        const labelLines = f.label.split("\n");
        const bottomText = f.value ? f.label : (labelLines[1] ?? "");
        return (
          <div
            key={`bottom-${i}`}
            className={`flex items-start justify-center px-1.5 sm:px-2 ${i > 0 ? "border-l border-gold-500/40" : ""}`}
            style={{ gridColumn: i + 1, gridRow: 3 }}
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] leading-none text-cream-50 sm:text-[11px]">
              {bottomText}
            </span>
          </div>
        );
      })}
    </div>
  );
}
