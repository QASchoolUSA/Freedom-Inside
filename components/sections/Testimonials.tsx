import { useTranslations } from "next-intl";
import { Lotus } from "@/components/ui/Ornament";
import { Reveal } from "@/components/ui/Reveal";
import {
  LiveChatAnimation,
  type ChatConversation,
} from "@/components/ui/LiveChatAnimation";
import { TestimonialGallery } from "@/components/ui/TestimonialGallery";
import { IconChat } from "@/components/ui/icons";

const GALLERY_IMAGES = [
  "/images/testimonials/01.jpg",
  "/images/testimonials/02.jpg",
  "/images/testimonials/03.jpg",
  "/images/testimonials/04.jpg",
  "/images/testimonials/05.jpg",
  "/images/testimonials/06.jpg",
] as const;

export function Testimonials() {
  const t = useTranslations("testimonials");
  const conversations = t.raw("conversations") as ChatConversation[];
  const galleryAlts = t.raw("galleryAlts") as string[];

  const galleryImages = GALLERY_IMAGES.map((src, index) => ({
    src,
    alt: galleryAlts[index] ?? `${t("galleryLabel")} ${index + 1}`,
  }));

  return (
    <section id="reviews" className="relative overflow-hidden bg-cream-50 py-20 [overflow-anchor:none] sm:py-28">
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

        <Reveal className="mx-auto mt-12 max-w-xl sm:mt-16">
          <div className="flex items-center justify-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-600/50 text-gold-700">
              <IconChat className="h-4.5 w-4.5" />
            </span>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-ink">
              {t("chatLabel")}
            </h3>
          </div>

          <div className="mt-6">
            <LiveChatAnimation conversations={conversations} label={t("liveLabel")} />
          </div>
        </Reveal>

        <Reveal delay={0.12} className="mt-14">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gold-600/45" />
              <Lotus className="h-4 w-6 text-gold-700" />
              <span className="h-px w-10 bg-gold-600/45" />
            </div>
            <h3 className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink">
              {t("galleryLabel")}
            </h3>
            <p className="mt-2 text-sm text-ink-soft">{t("galleryHint")}</p>
          </div>

          <div className="mt-7">
            <TestimonialGallery
              images={galleryImages}
              labels={{
                open: t("galleryOpen"),
                close: t("galleryClose"),
                prev: t("galleryPrev"),
                next: t("galleryNext"),
                of: t("galleryOf"),
              }}
            />
          </div>
        </Reveal>

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
