"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { ZENEDU_URL } from "@/lib/config";

const LOCALE_LABELS: Record<string, string> = { ru: "RU", uk: "UK" };

export function Header() {
  const t = useTranslations("header");
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { href: "#program", label: t("nav.program") },
    { href: "#author", label: t("nav.author") },
    { href: "#reviews", label: t("nav.reviews") },
    { href: "#faq", label: t("nav.faq") },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-gold-500/20 bg-teal-950/85 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.6)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 rounded-full ring-1 ring-gold-500/50"
          />
          <span className="font-display text-lg font-semibold uppercase tracking-[0.24em] text-gold-300">
            {t("brand")}
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm tracking-wide text-cream-100/80 transition-colors hover:text-gold-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex overflow-hidden rounded-full border border-gold-500/40">
            {routing.locales.map((loc) => (
              <Link
                key={loc}
                href={pathname}
                locale={loc}
                className={`px-3 py-1.5 text-xs font-semibold tracking-widest transition-colors ${
                  loc === locale
                    ? "bg-gold-500 text-teal-950"
                    : "text-gold-300 hover:bg-gold-500/15"
                }`}
              >
                {LOCALE_LABELS[loc]}
              </Link>
            ))}
          </div>

          <a
            href={ZENEDU_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-gold-500/70 bg-gold-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold-300 transition-colors hover:bg-gold-500 hover:text-teal-950 sm:block"
          >
            {t("cta")}
          </a>
        </div>
      </div>
    </header>
  );
}
