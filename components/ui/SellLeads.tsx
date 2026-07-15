"use client";

/** Sell copy for hero + pricing — emphasis via scale/weight only. */
export function SellLeads({ lead1, lead2 }: { lead1: string; lead2: string }) {
  return (
    <div className="mx-auto mt-3.5 w-full short-mobile:mt-2.5 sm:mt-5">
      <p className="mx-auto max-w-[26rem] text-center font-display text-[1.65rem] font-bold leading-[1.2] tracking-[0.005em] text-cream-50 drop-shadow-[0_2px_10px_rgba(6,35,43,0.9)] short-mobile:text-[1.4rem] sm:max-w-3xl sm:text-[2.5rem] short:text-[2.15rem]">
        {lead1}
      </p>
      <p className="mx-auto mt-4 max-w-[24rem] text-center font-display text-[1.4rem] font-bold leading-[1.25] text-gold-300 drop-shadow-[0_2px_10px_rgba(6,35,43,0.9)] short-mobile:mt-3 short-mobile:text-[1.2rem] sm:mt-5 sm:max-w-2xl sm:text-[2.05rem] short:text-[1.8rem]">
        {lead2}
      </p>
    </div>
  );
}
