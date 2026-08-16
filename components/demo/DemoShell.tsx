"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { DEMO_VARIANTS, type DemoVariantSlug } from "@/components/demo/variants";

export function DemoShell({
  slug,
  children,
}: {
  slug?: DemoVariantSlug;
  children: React.ReactNode;
}) {
  const t = useTranslations("demo");
  const pathname = usePathname();

  return (
    <div className="min-h-svh bg-gradient-to-b from-teal-950 via-teal-900 to-teal-950 text-cream-50">
      <div className="sparkles pointer-events-none absolute inset-0 opacity-40" />

      <header className="sticky top-0 z-20 border-b border-gold-500/25 bg-teal-950/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-3 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <Link
              href="/demo"
              className="font-display text-sm font-semibold tracking-[0.08em] text-gold-300 transition hover:text-gold-200"
            >
              ← {t("backToIndex")}
            </Link>
            <Link
              href="/"
              className="text-xs uppercase tracking-[0.16em] text-cream-100/55 transition hover:text-cream-100/80"
            >
              {t("backToSite")}
            </Link>
          </div>

          <nav className="flex gap-1.5 overflow-x-auto pb-0.5" aria-label={t("navLabel")}>
            {DEMO_VARIANTS.map((v) => {
              const href = `/demo/${v.slug}` as const;
              const active =
                slug === v.slug || pathname === href || pathname.endsWith(`/${v.slug}`);
              return (
                <Link
                  key={v.slug}
                  href={href}
                  className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold tracking-[0.06em] transition ${
                    active
                      ? "bg-gold-500/25 text-gold-200 ring-1 ring-gold-500/60"
                      : "bg-teal-950/50 text-cream-100/65 ring-1 ring-gold-500/20 hover:text-cream-50"
                  }`}
                >
                  {v.letter}. {t(`variants.${v.slug}.short`)}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="relative mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
        {slug ? (
          <div className="mb-8 text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-400/80">
              {t("demoLabel")} {slug && DEMO_VARIANTS.find((v) => v.slug === slug)?.letter}
            </p>
            <h1 className="mt-2 font-display text-2xl font-semibold text-gold-gradient sm:text-3xl">
              {t(`variants.${slug}.title`)}
            </h1>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-cream-100/70">
              {t(`variants.${slug}.description`)}
            </p>
          </div>
        ) : null}
        {children}
      </main>
    </div>
  );
}
