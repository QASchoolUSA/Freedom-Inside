import { ZENEDU_URL } from "@/lib/config";

type Variant = "gold" | "outline";

export function CtaButton({
  children,
  variant = "gold",
  className = "",
  arrow = false,
}: {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
}) {
  const base =
    "group inline-flex items-center justify-center gap-3 rounded-2xl px-10 py-4 font-display text-lg font-semibold uppercase tracking-[0.18em] transition-transform duration-300 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400 sm:px-12 sm:text-xl";
  const styles =
    variant === "gold"
      ? "bg-gradient-to-b from-[#f3e3b6] via-[#e3c688] to-[#c9a05a] text-teal-950 shadow-[0_10px_35px_-8px_rgba(217,179,106,0.55)]"
      : "border border-gold-500/80 bg-teal-900/40 text-gold-300 shadow-[inset_0_0_25px_rgba(217,179,106,0.12),0_10px_35px_-10px_rgba(4,26,32,0.7)] backdrop-blur";

  return (
    <a href={ZENEDU_URL} target="_blank" rel="noopener noreferrer" className={`${base} ${styles} ${className}`}>
      <span>{children}</span>
      {arrow && (
        <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1.5">
          →
        </span>
      )}
    </a>
  );
}
