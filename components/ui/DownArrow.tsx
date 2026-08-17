/** Subtle gold chevron pointing to the offer below. */
export function DownArrow({ className = "" }: { className?: string }) {
  return (
    <div
      className={`mx-auto flex justify-center text-gold-400/90 ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 sm:h-6 sm:w-6"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </div>
  );
}
