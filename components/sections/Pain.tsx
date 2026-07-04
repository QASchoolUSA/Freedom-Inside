import Image from "next/image";
import { useTranslations } from "next-intl";
import { Ornament, Star } from "@/components/ui/Ornament";
import { Reveal } from "@/components/ui/Reveal";

export function Pain() {
  const t = useTranslations("pain");
  const items = t.raw("items") as { strong: string; rest: string }[];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-950 via-teal-900 to-teal-950 py-20 sm:py-28">
      <div className="sparkles absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-4xl px-5">
        <Reveal className="text-center">
          <Ornament />
          <h2 className="mt-5 font-display text-4xl font-semibold text-cream-100 sm:text-5xl">
            {t("title")}
          </h2>
        </Reveal>

        <div className="mt-12 space-y-6 sm:mt-16 sm:space-y-8">
          {items.map((item, i) => {
            const photoRight = i !== 0;
            return (
              <Reveal key={i} delay={Math.min(i * 0.05, 0.2)}>
                <article className="gold-ring parchment grid overflow-hidden rounded-3xl sm:grid-cols-[1fr_minmax(0,42%)]">
                  <div
                    className={`relative flex items-start gap-4 px-6 py-8 sm:items-center sm:px-9 sm:py-10 ${
                      photoRight ? "" : "sm:order-2"
                    }`}
                  >
                    {/* watercolor leaf accent */}
                    <svg
                      viewBox="0 0 60 120"
                      className="pointer-events-none absolute bottom-2 left-2 h-24 w-12 text-teal-700/15"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d="M8 116c10-18 8-34 14-50S38 34 30 4c14 22 16 44 10 62s-18 34-32 50Z" />
                      <ellipse cx="20" cy="52" rx="7" ry="14" transform="rotate(-25 20 52)" />
                      <ellipse cx="34" cy="80" rx="6" ry="12" transform="rotate(-35 34 80)" />
                    </svg>
                    <Star className="mt-1 h-5 w-5 shrink-0 text-gold-600 sm:mt-0" />
                    <p className="font-display text-xl leading-snug text-ink sm:text-[1.55rem]">
                      <span className="font-semibold">{item.strong}</span>{" "}
                      <span className="text-ink-soft">{item.rest}</span>
                    </p>
                  </div>

                  <div className={`relative min-h-52 sm:min-h-full ${photoRight ? "" : "sm:order-1"}`}>
                    <Image
                      src={`/images/pain-${i + 1}.jpg`}
                      alt=""
                      fill
                      sizes="(min-width: 640px) 40vw, 100vw"
                      className="object-cover"
                    />
                    {/* fade the photo into the parchment: vertical when stacked, horizontal on wide screens */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#f5eede] via-transparent to-transparent sm:hidden" />
                    <div
                      className={`absolute inset-0 hidden sm:block ${
                        photoRight
                          ? "bg-gradient-to-r from-[#f5eede] via-transparent to-transparent"
                          : "bg-gradient-to-l from-[#f5eede] via-transparent to-transparent"
                      }`}
                    />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
