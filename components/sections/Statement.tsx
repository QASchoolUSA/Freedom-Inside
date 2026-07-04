import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Star } from "@/components/ui/Ornament";
import { Reveal } from "@/components/ui/Reveal";

export function Statement() {
  const t = useTranslations("statement");
  const locale = useLocale();
  const spheres = t.raw("spheres") as string[];

  return (
    <section className="relative overflow-hidden bg-teal-950 py-20 sm:py-28">
      <div className="sparkles absolute inset-0 opacity-50" />

      <div className="relative mx-auto max-w-3xl px-5">
        <Reveal>
          <figure className="gold-ring relative overflow-hidden rounded-[1.75rem]">
            <Image
              src="/images/diagram.jpg"
              alt={t("caption")}
              width={851}
              height={1280}
              sizes="(min-width: 768px) 42rem, 100vw"
              className="h-auto w-full"
            />

            {/* Title rendered over the light top area of the artwork */}
            <figcaption className="absolute inset-x-0 top-0 px-[9%] pt-[7%] text-center">
              <Star className="mx-auto h-4 w-4 text-gold-700/80" />
              <h2 className="mt-[3%] font-display text-[clamp(1.35rem,5.4vw,2.6rem)] font-semibold leading-snug text-ink">
                {t("titleA")}
                <br />
                {t("titleB")} <span className="text-rust">{t("titleAccent1")}</span>
                {t("titleC")}{" "}
                <span className="text-rust">{t("titleAccent2")}</span>.
              </h2>
              <div className="mx-auto mt-[3.5%] flex w-fit items-center gap-3 text-gold-700/80">
                <span className="h-px w-12 bg-gold-700/50" />
                <Star className="h-3 w-3" />
                <span className="h-px w-12 bg-gold-700/50" />
              </div>
              <p className="mt-[3.5%] font-display text-[clamp(1rem,3.4vw,1.5rem)] leading-snug text-ink-soft">
                {t("sub1")}
                <br />
                <span className="font-semibold text-rust">{t("sub2")}</span>
              </p>
            </figcaption>
          </figure>
        </Reveal>

        {/* Translated sphere labels (the artwork labels are decorative) */}
        {locale !== "ru" && (
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
              <span className="rounded-full bg-gold-500 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-teal-950">
                {t("center")}
              </span>
              {spheres.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-gold-500/50 px-4 py-1.5 text-sm uppercase tracking-wider text-gold-300"
                >
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
