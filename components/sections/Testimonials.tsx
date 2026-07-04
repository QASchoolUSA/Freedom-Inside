import { useTranslations } from "next-intl";
import { Lotus } from "@/components/ui/Ornament";
import { Reveal } from "@/components/ui/Reveal";
import { IconChat, IconQuote } from "@/components/ui/icons";

export function Testimonials() {
  const t = useTranslations("testimonials");
  const chat = t.raw("chat") as { side: "in" | "out"; text: string; time: string }[];
  const quotes = t.raw("quotes") as string[];

  return (
    <section id="reviews" className="relative overflow-hidden bg-cream-50 py-20 sm:py-28">
      <div className="absolute inset-y-0 left-0 w-1/3 bg-[radial-gradient(70%_50%_at_0%_20%,rgba(217,179,106,0.14),transparent_70%)]" />

      <div className="relative mx-auto max-w-5xl px-5">
        <Reveal className="text-center">
          <div className="mx-auto flex w-fit items-center gap-3 text-gold-700">
            <span className="h-px w-16 bg-gold-600/50" />
            <Lotus className="h-5 w-8" />
            <span className="h-px w-16 bg-gold-600/50" />
          </div>
          <h2 className="mt-5 font-display text-3xl font-medium uppercase tracking-[0.1em] text-ink sm:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base text-ink-soft sm:text-lg">
            {t("sub1")} <span className="font-semibold text-gold-700">{t("sub2")}</span>
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 sm:mt-16 md:grid-cols-2">
          {/* Chat bubbles */}
          <Reveal>
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-600/50 text-gold-700">
                  <IconChat className="h-4.5 w-4.5" />
                </span>
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-ink">
                  {t("chatLabel")}
                </h3>
              </div>

              <div className="mt-6 space-y-4">
                {chat.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.side === "out" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-5 py-3.5 text-[0.95rem] leading-relaxed shadow-[0_6px_20px_-8px_rgba(20,52,61,0.25)] ${
                        msg.side === "out"
                          ? "rounded-br-md bg-[#f3e3b6] text-[#5c4a22]"
                          : "rounded-bl-md border border-cream-300 bg-white text-ink"
                      }`}
                    >
                      <p>{msg.text}</p>
                      <p
                        className={`mt-1.5 text-right text-[11px] ${
                          msg.side === "out" ? "text-[#a08a55]" : "text-ink-soft/60"
                        }`}
                      >
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Short quotes */}
          <Reveal delay={0.1}>
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-600/50 text-gold-700">
                  <IconQuote className="h-4.5 w-4.5" />
                </span>
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-ink">
                  {t("quotesLabel")}
                </h3>
              </div>

              <div className="mt-6 space-y-4">
                {quotes.map((quote, i) => (
                  <figure
                    key={i}
                    className="relative rounded-2xl border border-cream-300 bg-white px-6 py-5 shadow-[0_6px_20px_-8px_rgba(20,52,61,0.18)]"
                  >
                    <span className="absolute left-4 top-1 font-display text-4xl text-gold-600" aria-hidden>
                      “
                    </span>
                    <blockquote className="pl-5 font-display text-[1.05rem] italic leading-relaxed text-ink">
                      {quote}
                    </blockquote>
                  </figure>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-14 border-t border-gold-600/30 pt-8 text-center">
            <Lotus className="mx-auto h-5 w-8 text-gold-700" />
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
              {t("thanks1")}{" "}
              <span className="font-semibold text-gold-700">{t("thanks2")}</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
