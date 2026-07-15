"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { FeatureIconsGrid } from "@/components/ui/FeatureIconsGrid";
import { CtaButton } from "@/components/ui/CtaButton";

const easeOut = [0.22, 0.61, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easeOut },
  },
};

export function PricingMotion({
  oldPrice,
  nowLabel,
  price,
  offer,
  cta,
  note,
}: {
  oldPrice: string;
  nowLabel: string;
  price: string;
  offer?: string;
  cta: string;
  note?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <StaticBlock
        oldPrice={oldPrice}
        nowLabel={nowLabel}
        price={price}
        offer={offer}
        cta={cta}
        note={note}
      />
    );
  }

  return (
    <motion.div
      className="flex w-full flex-col items-center"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      <motion.div variants={rise} className="w-full">
        <FeatureIconsGrid animated size="sm" />
      </motion.div>

      <motion.div variants={rise} className="w-full">
        <PriceCard oldPrice={oldPrice} nowLabel={nowLabel} price={price} />
      </motion.div>

      {offer ? (
        <motion.div variants={rise} className="w-full">
          <OfferBadge text={offer} />
        </motion.div>
      ) : null}

      <motion.div variants={rise} className="w-full">
        <CtaButton className="mt-3.5 w-full max-w-md !py-3 !text-base short-mobile:mt-2.5 sm:!text-lg short:mt-3">
          {cta}
        </CtaButton>
        {note ? (
          <p className="mx-auto mt-4 max-w-md text-sm text-cream-100/70">{note}</p>
        ) : null}
      </motion.div>
    </motion.div>
  );
}

function StaticBlock({
  oldPrice,
  nowLabel,
  price,
  offer,
  cta,
  note,
}: {
  oldPrice: string;
  nowLabel: string;
  price: string;
  offer?: string;
  cta: string;
  note?: string;
}) {
  return (
    <div className="flex w-full flex-col items-center">
      <FeatureIconsGrid size="sm" />
      <PriceCard oldPrice={oldPrice} nowLabel={nowLabel} price={price} staticMark />
      {offer ? <OfferBadge text={offer} staticMark /> : null}
      <CtaButton className="mt-3.5 w-full max-w-md !py-3 !text-base short-mobile:mt-2.5 sm:!text-lg short:mt-3">
        {cta}
      </CtaButton>
      {note ? (
        <p className="mx-auto mt-4 max-w-md text-sm text-cream-100/70">{note}</p>
      ) : null}
    </div>
  );
}

function PriceCard({
  oldPrice,
  nowLabel,
  price,
  staticMark = false,
}: {
  oldPrice: string;
  nowLabel: string;
  price: string;
  staticMark?: boolean;
}) {
  return (
    <div className="mx-auto mt-5 flex w-full max-w-md items-stretch overflow-hidden rounded-2xl border border-gold-500/70 bg-teal-950/65 shadow-card backdrop-blur-sm short-mobile:mt-3 short:mt-4">
      <div className="flex flex-1 items-center justify-center px-4 py-3 short-mobile:py-2 sm:px-6 sm:py-4 short:py-2.5">
        <span className="relative font-display text-2xl text-cream-100/75 sm:text-3xl">
          {oldPrice}
          {staticMark ? (
            <span className="absolute left-[-6%] top-1/2 h-[2.5px] w-[112%] -rotate-6 rounded bg-[#c0392b]" />
          ) : (
            <motion.span
              aria-hidden
              className="absolute left-[-6%] top-1/2 h-[2.5px] w-[112%] origin-left -rotate-6 rounded bg-[#c0392b]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.35, ease: easeOut }}
            />
          )}
        </span>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center border-l border-gold-500/40 bg-gold-500/10 px-4 py-3 short-mobile:py-2 sm:px-6 sm:py-4 short:py-2.5">
        <span className="text-[10px] uppercase tracking-[0.2em] text-gold-300">
          {nowLabel}
        </span>
        {staticMark ? (
          <span className="text-gold-gradient mt-0.5 font-display text-3xl font-semibold sm:text-4xl">
            {price}
          </span>
        ) : (
          <motion.span
            className="text-gold-gradient mt-0.5 font-display text-3xl font-semibold sm:text-4xl"
            initial={{ opacity: 0, scale: 0.92, y: 6 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.5, ease: easeOut }}
          >
            {price}
          </motion.span>
        )}
      </div>
    </div>
  );
}

function OfferBadge({ text, staticMark = false }: { text: string; staticMark?: boolean }) {
  const inner = (
    <p className="inline-flex max-w-[22rem] items-center gap-1.5 rounded-xl border border-gold-500/45 bg-gradient-to-r from-gold-500/15 via-gold-500/10 to-transparent px-3.5 py-2 text-left shadow-[0_0_24px_-8px_rgba(217,179,106,0.45)] backdrop-blur-[2px] sm:max-w-md sm:gap-2 sm:px-4 sm:py-2.5">
      <span className="shrink-0 text-[1.05rem] leading-none sm:text-lg" aria-hidden>
        🎁
      </span>
      <span className="font-display text-[0.92rem] font-semibold leading-snug tracking-[0.01em] text-gold-300 sm:text-[1.05rem]">
        {text}
      </span>
    </p>
  );

  if (staticMark) {
    return <div className="mx-auto mt-4 flex justify-center short-mobile:mt-3 short:mt-3.5">{inner}</div>;
  }

  return (
    <motion.div
      className="mx-auto mt-4 flex justify-center short-mobile:mt-3 short:mt-3.5"
      initial={{ opacity: 0, y: 10, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: 0.15, ease: easeOut }}
    >
      {inner}
    </motion.div>
  );
}
