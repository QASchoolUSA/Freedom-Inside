import { useTranslations } from "next-intl";
import { IconCalendar, IconChat, IconLotus, IconPlay } from "@/components/ui/icons";

const FEATURE_ICONS = [IconPlay, IconLotus, IconChat, IconCalendar];

type Feature = { value: string; label: string };

export function FeatureIconsGrid({ className = "" }: { className?: string }) {
  const t = useTranslations("pricing");
  const features = t.raw("features") as Feature[];

  return (
    <ul className={`mx-auto grid w-full max-w-2xl grid-cols-4 ${className}`}>
      {features.map((feature, index) => {
        const Icon = FEATURE_ICONS[index] ?? IconPlay;
        const isSymbol = !/\d/.test(feature.value);

        return (
          <li
            key={index}
            className="relative flex list-none flex-col items-center px-1 text-center sm:px-4"
          >
            {index > 0 ? (
              <span
                aria-hidden
                className="absolute bottom-2 left-0 top-2 w-px bg-gold-500/30"
              />
            ) : null}

            {/* Band 1: icon — fixed 56px circle */}
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold-500/80 bg-teal-950/50 text-gold-300 shadow-glow backdrop-blur-[2px]">
              <Icon className="h-6 w-6" aria-hidden />
            </span>

            {/* Band 2: value — fixed height, every column has one */}
            <span
              className={`mt-3 flex h-8 items-center justify-center font-display font-semibold leading-none tabular-nums text-cream-50 ${
                isSymbol ? "text-[30px]" : "text-[26px]"
              }`}
            >
              {feature.value}
            </span>

            {/* Band 3: caption — top-aligned so first lines sit on one baseline */}
            <span className="mt-1.5 flex w-full items-start justify-center whitespace-pre-line text-[10px] font-semibold uppercase leading-[1.3] tracking-[0.12em] text-cream-50/95 sm:text-[11px] sm:tracking-[0.16em]">
              {feature.label}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
