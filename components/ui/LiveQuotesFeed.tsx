"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function LiveQuotesFeed({ quotes }: { quotes: string[] }) {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [visibleCount, setVisibleCount] = useState(reduceMotion ? quotes.length : 0);

  useEffect(() => {
    const node = containerRef.current;
    if (!node || reduceMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setStarted(true);
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [reduceMotion]);

  useEffect(() => {
    if (!started || reduceMotion || visibleCount >= quotes.length) return;

    const delay = visibleCount === 0 ? 500 : 1800 + quotes[visibleCount - 1].length * 10;
    const timer = setTimeout(() => setVisibleCount((count) => count + 1), delay);
    return () => clearTimeout(timer);
  }, [started, visibleCount, quotes, reduceMotion]);

  return (
    <div ref={containerRef} className="space-y-4">
      {quotes.slice(0, visibleCount).map((quote, index) => (
        <motion.figure
          key={index}
          initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
          className="relative rounded-2xl border border-cream-300 bg-white px-6 py-5 shadow-[0_6px_20px_-8px_rgba(20,52,61,0.18)]"
        >
          <span className="absolute left-4 top-1 font-display text-4xl text-gold-600" aria-hidden>
            “
          </span>
          <blockquote className="pl-5 font-display text-[1.02rem] italic leading-relaxed text-ink sm:text-[1.05rem]">
            {quote}
          </blockquote>
          <motion.span
            className="absolute right-4 top-4 h-2 w-2 rounded-full bg-emerald-500"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 420, damping: 18 }}
            aria-hidden
          />
        </motion.figure>
      ))}
    </div>
  );
}
