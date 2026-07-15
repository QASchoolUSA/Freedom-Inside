import { useTranslations } from "next-intl";
import { IconCalendar, IconChat, IconLotus, IconPlay } from "@/components/ui/icons";

const FEATURE_ICONS = [IconPlay, IconLotus, IconChat, IconCalendar];

export function FeatureIconsGrid({ className = "" }: { className?: string }) {
  const t = useTranslations("pricing");
  const features = t.raw("features") as { value: string; label: string }[];

  return (
    <div
      className={`mx-auto grid w-full max-w-lg grid-cols-2 sm:max-w-xl ${className}`}
    >
      {features.map((f, i) => {
        const Icon = FEATURE_ICONS[i];
        const labelLines = f.label.split("\n");
        const topText = f.value || labelLines[0];
        const bottomText = f.value ? f.label : (labelLines[1] ?? "");

        return (
          <div
            key={i}
            className={`flex flex-col items-center gap-1.5 px-3 py-2.5 short-mobile:gap-1 short-mobile:py-1.5 sm:gap-2 sm:px-4 sm:py-3 ${
              i % 2 === 1 ? "border-l border-gold-500/40" : ""
            } ${i >= 2 ? "border-t border-gold-500/40" : ""}`}
          >
            <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full border border-gold-500/80 bg-teal-950/50 text-gold-300 shadow-glow backdrop-blur-[2px] short-mobile:h-11 short-mobile:w-11 sm:h-15 sm:w-15 short:h-13 short:w-13">
              <Icon className="h-6 w-6 sm:h-6.5 sm:w-6.5" />
            </div>
            {f.value ? (
              <span className="font-display text-lg font-semibold leading-none text-cream-50 sm:text-xl">
                {f.value}
              </span>
            ) : (
              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] leading-none text-cream-50 sm:text-[11px]">
                {topText}
              </span>
            )}
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] leading-none text-cream-50 sm:text-[11px]">
              {bottomText}
            </span>
          </div>
        );
      })}
    </div>
  );
}
