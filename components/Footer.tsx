import { useTranslations } from "next-intl";
import { IconInstagram, IconTelegram } from "@/components/ui/icons";
import { INSTAGRAM_URL, TELEGRAM_URL } from "@/lib/config";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gold-500/25 bg-teal-950">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-5 py-10 text-center sm:py-12">
        <div className="flex items-center justify-center gap-8">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-sm uppercase tracking-[0.16em] text-cream-100/80 transition-colors hover:text-gold-300"
          >
            <IconInstagram className="h-5 w-5" />
            {t("instagram")}
          </a>
          <span className="h-5 w-px bg-gold-500/40" aria-hidden />
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-sm uppercase tracking-[0.16em] text-cream-100/80 transition-colors hover:text-gold-300"
          >
            <IconTelegram className="h-5 w-5" />
            {t("telegram")}
          </a>
        </div>
        <p className="mt-6 text-xs text-cream-100/40">
          © {year} · {t("rights")}
        </p>
      </div>
    </footer>
  );
}
