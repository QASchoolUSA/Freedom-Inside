/** Gold hairline divider with a four-pointed star, as in the reference art. */
export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 text-gold-500 ${className}`}
      aria-hidden
    >
      <span className="h-px w-16 bg-gradient-to-l from-gold-500/80 to-transparent sm:w-24" />
      <Star className="h-4 w-4" />
      <span className="h-px w-16 bg-gradient-to-r from-gold-500/80 to-transparent sm:w-24" />
    </div>
  );
}

export function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 1c.6 4.8 2.4 8 5.2 8.7l3.6 1.1c.3.1.3.5 0 .6l-3.6 1.1C14.4 13.2 12.6 16.4 12 21.2 11.4 16.4 9.6 13.2 6.8 12.5l-3.6-1.1c-.3-.1-.3-.5 0-.6l3.6-1.1C9.6 9 11.4 5.8 12 1Z" />
    </svg>
  );
}

/** Lotus mark used between sections on light backgrounds. */
export function Lotus({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 20" fill="none" stroke="currentColor" strokeWidth="1.1" className={className} aria-hidden>
      <path d="M16 3c-1.8 2.6-2.7 5.2-2.7 7.8 0 2.7.9 5 2.7 6.2 1.8-1.2 2.7-3.5 2.7-6.2C18.7 8.2 17.8 5.6 16 3Z" />
      <path d="M9.5 6.5c-.3 3 .3 5.6 1.8 7.8 1 1.4 2.2 2.4 3.7 2.9" />
      <path d="M22.5 6.5c.3 3-.3 5.6-1.8 7.8-1 1.4-2.2 2.4-3.7 2.9" />
      <path d="M4.5 11c1 2.4 2.6 4.2 4.8 5.3 1.5.8 3 1.1 4.7 1" />
      <path d="M27.5 11c-1 2.4-2.6 4.2-4.8 5.3-1.5.8-3 1.1-4.7 1" />
    </svg>
  );
}
