"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { FeatureIconsGrid } from "@/components/ui/FeatureIconsGrid";
import {
  SelfPacedOfferBlock,
  WithSupportOfferBlock,
} from "@/components/ui/SelfPacedOfferBlock";
import { DownArrow } from "@/components/ui/DownArrow";

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

export function PricingMotion({ note }: { note?: string }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className="flex w-full flex-col items-center">
        <SelfPacedOfferBlock />
        <FeatureIconsGrid size="sm" />
        <DownArrow className="mt-3 short-mobile:mt-2" />
        <WithSupportOfferBlock />
        {note ? (
          <p className="mx-auto mt-4 max-w-md text-sm text-cream-100/70">{note}</p>
        ) : null}
      </div>
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
        <SelfPacedOfferBlock />
      </motion.div>

      <motion.div variants={rise} className="w-full">
        <FeatureIconsGrid animated size="sm" />
        <DownArrow className="mt-3 short-mobile:mt-2" />
      </motion.div>

      <motion.div variants={rise} className="w-full">
        <WithSupportOfferBlock />
      </motion.div>

      {note ? (
        <motion.p
          variants={rise}
          className="mx-auto mt-4 max-w-md text-sm text-cream-100/70"
        >
          {note}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
