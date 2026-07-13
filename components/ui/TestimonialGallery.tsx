"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type TouchEvent,
} from "react";
import { createPortal } from "react-dom";

export type GalleryImage = {
  src: string;
  alt: string;
};

type Labels = {
  open: string;
  close: string;
  prev: string;
  next: string;
  of: string;
};

export function TestimonialGallery({
  images,
  labels,
}: {
  images: GalleryImage[];
  labels: Labels;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const titleId = useId();
  const touchStartX = useRef<number | null>(null);

  useEffect(() => setMounted(true), []);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const showPrev = useCallback(() => {
    setLightboxIndex((index) => {
      if (index === null) return index;
      return (index - 1 + images.length) % images.length;
    });
  }, [images.length]);

  const showNext = useCallback(() => {
    setLightboxIndex((index) => {
      if (index === null) return index;
      return (index + 1) % images.length;
    });
  }, [images.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  useEffect(() => {
    const node = scrollerRef.current;
    if (!node) return;

    const updateActive = () => {
      const card = node.querySelector<HTMLElement>("[data-gallery-card]");
      if (!card) return;
      const gap = 16;
      const width = card.offsetWidth + gap;
      const index = Math.round(node.scrollLeft / width);
      setActive(Math.max(0, Math.min(images.length - 1, index)));
    };

    updateActive();
    node.addEventListener("scroll", updateActive, { passive: true });
    return () => node.removeEventListener("scroll", updateActive);
  }, [images.length]);

  const scrollToIndex = (index: number) => {
    const node = scrollerRef.current;
    const card = node?.querySelector<HTMLElement>("[data-gallery-card]");
    if (!node || !card) return;
    const gap = 16;
    node.scrollTo({ left: index * (card.offsetWidth + gap), behavior: "smooth" });
  };

  const onLightboxTouchStart = (event: TouchEvent) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
  };

  const onLightboxTouchEnd = (event: TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 48) return;
    if (delta > 0) showPrev();
    else showNext();
  };

  return (
    <div>
      <div className="relative">
        <div
          ref={scrollerRef}
          className="no-scrollbar -mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-1 pb-2 pt-1 [overflow-anchor:none]"
          aria-roledescription="carousel"
        >
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              data-gallery-card
              onClick={() => openLightbox(index)}
              className="group relative aspect-[3/4.45] w-[min(72vw,17.5rem)] shrink-0 snap-center overflow-hidden rounded-[1.35rem] border border-gold-600/35 bg-cream-100 text-left shadow-[0_14px_36px_-18px_rgba(20,52,61,0.45)] outline-none transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-16px_rgba(20,52,61,0.5)] focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50 sm:w-[15.5rem]"
              aria-label={`${labels.open} ${index + 1}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 72vw, 248px"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-950/55 via-transparent to-transparent opacity-80" />
              <span className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                <span className="rounded-full bg-cream-50/92 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink shadow-sm backdrop-blur-sm">
                  {index + 1} {labels.of} {images.length}
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-50/40 bg-teal-950/55 text-cream-50 backdrop-blur-sm">
                  <ExpandIcon className="h-4 w-4" />
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`${index + 1}`}
            aria-current={active === index}
            onClick={() => scrollToIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              active === index
                ? "w-7 bg-gold-600"
                : "w-2 bg-gold-600/30 hover:bg-gold-600/55"
            }`}
          />
        ))}
      </div>

      {mounted &&
        lightboxIndex !== null &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-teal-950/92 px-3 py-6 backdrop-blur-md sm:px-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            onClick={closeLightbox}
          >
            <p id={titleId} className="sr-only">
              {images[lightboxIndex].alt}
            </p>

            <button
              type="button"
              onClick={closeLightbox}
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-cream-50/25 bg-teal-900/70 text-cream-50 transition-colors hover:bg-teal-800"
              aria-label={labels.close}
            >
              <CloseIcon className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrev();
              }}
              className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-cream-50/25 bg-teal-900/70 text-cream-50 transition-colors hover:bg-teal-800 sm:left-5 sm:h-12 sm:w-12"
              aria-label={labels.prev}
            >
              <ChevronIcon className="h-5 w-5 rotate-180" />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              className="absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-cream-50/25 bg-teal-900/70 text-cream-50 transition-colors hover:bg-teal-800 sm:right-5 sm:h-12 sm:w-12"
              aria-label={labels.next}
            >
              <ChevronIcon className="h-5 w-5" />
            </button>

            <div
              className="relative flex h-full w-full max-w-lg items-center justify-center"
              onClick={(event) => event.stopPropagation()}
              onTouchStart={onLightboxTouchStart}
              onTouchEnd={onLightboxTouchEnd}
            >
              <div className="relative h-[min(86svh,920px)] w-full overflow-hidden rounded-[1.5rem] border border-gold-500/30 bg-teal-950 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.65)]">
                <Image
                  src={images[lightboxIndex].src}
                  alt={images[lightboxIndex].alt}
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, 512px"
                  className="object-contain"
                />
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-3 flex justify-center sm:bottom-5">
                <span className="rounded-full border border-cream-50/20 bg-teal-950/75 px-4 py-1.5 text-xs font-medium tracking-[0.18em] text-cream-50 backdrop-blur-sm">
                  {lightboxIndex + 1} {labels.of} {images.length}
                </span>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}

function ExpandIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className} aria-hidden>
      <path d="M8.5 4.5H4.5v4M15.5 4.5h4v4M8.5 19.5H4.5v-4M15.5 19.5h4v-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CloseIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
    </svg>
  );
}

function ChevronIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <path d="m9 5 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
