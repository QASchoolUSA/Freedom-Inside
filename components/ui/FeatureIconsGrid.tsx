import { useTranslations } from "next-intl";
import { IconCalendar, IconChat, IconLotus, IconPlay } from "@/components/ui/icons";

const FEATURE_ICONS = [IconPlay, IconLotus, IconChat, IconCalendar];

type Feature = { value: string; label: string };

export function FeatureIconsGrid({ className = "" }: { className?: string }) {
  const t = useTranslations("pricing");
  const features = t.raw("features") as Feature[];

  return (
    <div
      role="list"
      className={`mx-auto grid w-full max-w-xl grid-cols-4 grid-rows-[auto_auto_auto] ${className}`}
    >
      {features.map((feature, index) => {
        const Icon = FEATURE_ICONS[index] ?? IconPlay;
        const lines = feature.label.split("\n").filter(Boolean);
        const hasValue = feature.value.trim().length > 0;

        return (
          <div
            role="listitem"
            key={index}
            className={[
              "col-span-1 row-span-3 grid grid-rows-subgrid px-2 sm:px-3",
              index > 0 ? "border-l border-gold-500/35" : "",
            ].join(" ")}
          >
            {/* Track 1 — icons */}
            <div className="flex items-center justify-center pb-2.5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold-500/80 bg-teal-950/50 text-gold-300 shadow-glow backdrop-blur-[2px] sm:h-14 sm:w-14">
                <Icon className="h-6 w-6" />
              </div>
            </div>

            {/* Track 2 — numbers / primary caption */}
            <div className="flex items-center justify-center">
              {hasValue ? (
                <span className="font-display text-xl font-semibold leading-none tabular-nums text-cream-50 sm:text-2xl">
                  {feature.value}
                </span>
              ) : (
                <span className="text-center text-[10px] font-semibold uppercase tracking-[0.16em] leading-none text-cream-50 sm:text-[11px]">
                  {lines[0]}
                </span>
              )}
            </div>

            {/* Track 3 — secondary caption */}
            <div className="flex items-start justify-center pt-1">
              <span className="max-w-[7rem] whitespace-pre-line text-center text-[10px] font-semibold uppercase tracking-[0.14em] leading-[1.3] text-cream-50 sm:text-[11px]">
                {hasValue ? feature.label : (lines[1] ?? "")}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
