type IconProps = { className?: string };

const base = (
  props: IconProps,
  children: React.ReactNode,
  viewBox = "0 0 24 24"
) => (
  <svg
    viewBox={viewBox}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className ?? ""}
    aria-hidden
  >
    {children}
  </svg>
);

export const IconMeditation = (p: IconProps) =>
  base(
    p,
    <>
      <circle cx="12" cy="5.5" r="2" />
      <path d="M12 7.5v4M12 11.5c-2.5 0-4.5 1.5-5.5 3.5M12 11.5c2.5 0 4.5 1.5 5.5 3.5" />
      <path d="M4 18c2-1.6 5-2.5 8-2.5s6 .9 8 2.5" />
    </>
  );

export const IconMask = (p: IconProps) =>
  base(
    p,
    <>
      <path d="M5 4c2.2.9 4.6 1.3 7 1.3S16.8 4.9 19 4v7c0 5-3 8.5-7 9.5C8 19.5 5 16 5 11V4Z" />
      <path d="M8.5 10.5c.6-.7 1.7-.7 2.3 0M13.2 10.5c.6-.7 1.7-.7 2.3 0M9 14.5c1.8 1.3 4.2 1.3 6 0" />
    </>
  );

export const IconBody = (p: IconProps) =>
  base(
    p,
    <>
      <circle cx="12" cy="4" r="2" />
      <path d="M12 6.5v6M12 12.5l-3 7M12 12.5l3 7M7 9c1.5 1 3.2 1.5 5 1.5S15.5 10 17 9" />
    </>
  );

export const IconMind = (p: IconProps) =>
  base(
    p,
    <>
      <path d="M9.5 3.5A6.5 6.5 0 0 1 19 9.3c0 1.7-.6 3.2-1.7 4.4L18 20l-4.4-1.6c-4 .9-8-1.6-8.4-5.6" />
      <path d="M12 8.2c1.4 0 2.4 1 2.4 2.2 0 1.7-2.4 1.7-2.4 3.4" />
      <circle cx="12" cy="16.2" r="0.4" fill="currentColor" />
    </>
  );

export const IconLotus = (p: IconProps) =>
  base(
    p,
    <>
      <path d="M12 4c-1.5 2.2-2.2 4.3-2.2 6.4 0 2.2.7 4.1 2.2 5.1 1.5-1 2.2-2.9 2.2-5.1C14.2 8.3 13.5 6.2 12 4Z" />
      <path d="M6.8 6.8c-.2 2.5.3 4.6 1.5 6.4.8 1.2 1.8 2 3 2.4M17.2 6.8c.2 2.5-.3 4.6-1.5 6.4-.8 1.2-1.8 2-3 2.4" />
      <path d="M3.5 10.5c.8 2 2.1 3.5 4 4.4 1.2.6 2.5.9 3.8.8M20.5 10.5c-.8 2-2.1 3.5-4 4.4-1.2.6-2.5.9-3.8.8" />
      <path d="M7 19h10" />
    </>
  );

export const IconSoul = (p: IconProps) =>
  base(
    p,
    <>
      <path d="M15.5 3.5a8.5 8.5 0 1 0 5 11 6.5 6.5 0 0 1-5-11Z" />
      <path d="M8 7l.6 1.4L10 9l-1.4.6L8 11l-.6-1.4L6 9l1.4-.6L8 7Z" />
    </>
  );

export const IconHorizon = (p: IconProps) =>
  base(
    p,
    <>
      <circle cx="12" cy="10" r="3" />
      <path d="M12 3.5V5M5.9 5.9 7 7M18.1 5.9 17 7M3.5 10H5M19 10h1.5" />
      <path d="M3 16c2.5-1.5 5-1.5 7.5 0M13.5 16c2.5-1.5 5-1.5 7.5 0M6 19.5c2-1.2 4-1.2 6 0M12 19.5c2-1.2 4-1.2 6 0" />
    </>
  );

export const IconInfinity = (p: IconProps) =>
  base(
    p,
    <path d="M12 12c-1.8-2.4-3.2-3.6-5-3.6a3.6 3.6 0 0 0 0 7.2c1.8 0 3.2-1.2 5-3.6Zm0 0c1.8 2.4 3.2 3.6 5 3.6a3.6 3.6 0 0 0 0-7.2c-1.8 0-3.2 1.2-5 3.6Z" />
  );

export const IconHeart = (p: IconProps) =>
  base(
    p,
    <path d="M12 20s-7.5-4.7-9.3-9.2C1.5 7.7 3.6 4.9 6.6 4.9c2 0 3.7 1.1 4.6 2.8.4.8 1.2.8 1.6 0 .9-1.7 2.6-2.8 4.6-2.8 3 0 5.1 2.8 3.9 5.9C19.5 15.3 12 20 12 20Z" />
  );

export const IconHeartHands = (p: IconProps) =>
  base(
    p,
    <>
      <path d="M12 10.5s-3-1.9-3.7-3.7C7.8 5.6 8.7 4.5 9.9 4.5c.8 0 1.5.4 1.9 1.1.1.2.3.2.4 0 .4-.7 1.1-1.1 1.9-1.1 1.2 0 2.1 1.1 1.6 2.3C15 8.6 12 10.5 12 10.5Z" />
      <path d="M3.5 14.5c1.5-1 3.4-1 5 0l2 1.3c.9.6 2 .6 3 0M20.5 14.5c-1 0-2 .3-2.8.9l-2.2 1.4c-1.6 1-3.6 1-5 0" />
      <path d="M4 18.5c2.5 1.2 5.2 1.9 8 1.9s5.5-.7 8-1.9" />
    </>
  );

export const IconKnot = (p: IconProps) =>
  base(
    p,
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 8.8c0-2.6 1.3-4.3 3.4-4.3 1.9 0 3.1 1.4 3.1 3.1 0 2-1.7 3.2-3.3 4.4M12 15.2c0 2.6-1.3 4.3-3.4 4.3-1.9 0-3.1-1.4-3.1-3.1 0-2 1.7-3.2 3.3-4.4M8.8 12c-2.6 0-4.3-1.3-4.3-3.4 0-1.9 1.4-3.1 3.1-3.1M15.2 12c2.6 0 4.3 1.3 4.3 3.4 0 1.9-1.4 3.1-3.1 3.1" />
    </>
  );

export const IconCloud = (p: IconProps) =>
  base(
    p,
    <path d="M7 18a4 4 0 0 1-.6-7.9A5.5 5.5 0 0 1 17 8.6 4.5 4.5 0 0 1 16.5 18H7Z" />
  );

export const IconLink = (p: IconProps) =>
  base(
    p,
    <>
      <path d="M10 14a4.5 4.5 0 0 0 6.4.4l2.3-2.3a4.5 4.5 0 0 0-6.4-6.4l-1.2 1.2" />
      <path d="M14 10a4.5 4.5 0 0 0-6.4-.4L5.3 11.9a4.5 4.5 0 0 0 6.4 6.4l1.2-1.2" />
    </>
  );

export const IconCycle = (p: IconProps) =>
  base(
    p,
    <>
      <path d="M4.5 12a7.5 7.5 0 0 1 13-5.2M19.5 12a7.5 7.5 0 0 1-13 5.2" />
      <path d="M17.5 3.5v3.3h-3.3M6.5 20.5v-3.3h3.3" />
    </>
  );

export const IconPlay = (p: IconProps) =>
  base(
    p,
    <>
      <rect x="3" y="4.5" width="18" height="15" rx="3" />
      <path d="M10.2 9.2v5.6l4.8-2.8-4.8-2.8Z" />
    </>
  );

export const IconLaptop = (p: IconProps) =>
  base(
    p,
    <>
      <rect x="4.5" y="5" width="15" height="10" rx="1.5" />
      <path d="M2.5 18.5h19M9 18.5c.4-.9 1.3-1.5 2.3-1.5h1.4c1 0 1.9.6 2.3 1.5" />
    </>
  );

export const IconCalendar = (p: IconProps) =>
  base(
    p,
    <>
      <rect x="4" y="5.5" width="16" height="15" rx="2" />
      <path d="M4 10h16M8.5 3.5v4M15.5 3.5v4" />
      <path d="M8 13.5h2M14 13.5h2M8 17h2M14 17h2" />
    </>
  );

export const IconPeople = (p: IconProps) =>
  base(
    p,
    <>
      <circle cx="8.5" cy="9" r="2.5" />
      <circle cx="15.5" cy="9" r="2.5" />
      <path d="M3.5 18c.6-2.6 2.6-4.3 5-4.3s4.4 1.7 5 4.3M13.2 14.3c.7-.4 1.5-.6 2.3-.6 2.4 0 4.4 1.7 5 4.3" />
    </>
  );

export const IconCompass = (p: IconProps) =>
  base(
    p,
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M15.5 8.5 13.4 13.4 8.5 15.5l2.1-4.9 4.9-2.1Z" />
    </>
  );

export const IconGraduation = (p: IconProps) =>
  base(
    p,
    <>
      <path d="m12 4 10 4.5L12 13 2 8.5 12 4Z" />
      <path d="M6.5 10.8v4.4c0 1.5 2.5 3 5.5 3s5.5-1.5 5.5-3v-4.4M22 8.5V14" />
    </>
  );

export const IconSun = (p: IconProps) =>
  base(
    p,
    <>
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6" />
    </>
  );

export const IconChat = (p: IconProps) =>
  base(
    p,
    <>
      <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7a2.5 2.5 0 0 1-2.5 2.5H9l-4.2 3.4c-.4.3-.8 0-.8-.4V6.5Z" />
      <path d="M8 9h8M8 12h5" />
    </>
  );

export const IconQuote = (p: IconProps) =>
  base(
    p,
    <path d="M9.5 6.5C6.7 8 5 10.4 5 13.4c0 2.4 1.4 4.1 3.4 4.1 1.8 0 3.1-1.3 3.1-3.1 0-1.7-1.2-2.9-2.9-2.9h-.4c.3-1.6 1.3-2.9 3-4l-1.7-1Zm8 0C14.7 8 13 10.4 13 13.4c0 2.4 1.4 4.1 3.4 4.1 1.8 0 3.1-1.3 3.1-3.1 0-1.7-1.2-2.9-2.9-2.9h-.4c.3-1.6 1.3-2.9 3-4l-1.7-1Z" />
  );

export const IconShield = (p: IconProps) =>
  base(
    p,
    <>
      <path d="M12 3 5 5.8v5.4c0 4.4 2.9 8 7 9.8 4.1-1.8 7-5.4 7-9.8V5.8L12 3Z" />
      <path d="m8.8 12 2.2 2.2 4.2-4.4" />
    </>
  );

export const IconStarBadge = (p: IconProps) =>
  base(
    p,
    <path d="m12 4 1.9 4.3 4.6.5-3.4 3.1 1 4.6-4.1-2.4-4.1 2.4 1-4.6-3.4-3.1 4.6-.5L12 4Z" />
  );

export const IconQuestion = (p: IconProps) =>
  base(
    p,
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M9.5 9.6c.2-1.3 1.2-2.1 2.6-2.1 1.5 0 2.5 1 2.5 2.2 0 1.9-2.6 2-2.6 3.8" />
      <circle cx="12" cy="16.4" r="0.4" fill="currentColor" />
    </>
  );

export const IconClock = (p: IconProps) =>
  base(
    p,
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5l3.2 1.9" />
    </>
  );

export const IconLock = (p: IconProps) =>
  base(
    p,
    <>
      <rect x="5.5" y="10.5" width="13" height="9.5" rx="2" />
      <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5M12 14.5v2" />
    </>
  );

export const IconWallet = (p: IconProps) =>
  base(
    p,
    <>
      <rect x="3.5" y="6.5" width="17" height="12" rx="2" />
      <path d="M3.5 10h17M15.5 14.5h2" />
    </>
  );

export const IconRunner = (p: IconProps) =>
  base(
    p,
    <>
      <circle cx="14.5" cy="5" r="1.8" />
      <path d="M9 20.5l2.4-4.6-2-2.9 3.8-3.5 2.3 3h3M9.4 9.5 6 11l-1.5 3M12.5 13.5l1.2 3.2 3.3 2" />
    </>
  );

export const IconSignpost = (p: IconProps) =>
  base(
    p,
    <>
      <path d="M12 3v18M12 21h-4M12 21h4" />
      <path d="M6 6h10l2 1.8L16 9.5H6V6ZM18 12h-10l-2 1.8 2 1.7h10V12Z" />
    </>
  );

export const IconPerson = (p: IconProps) =>
  base(
    p,
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 19.5c1-3.4 3.8-5.5 7-5.5s6 2.1 7 5.5" />
    </>
  );

export const IconTree = (p: IconProps) =>
  base(
    p,
    <>
      <path d="M12 21v-6M12 15c-1-2-3-3-5.5-3C6 9 8 6.5 12 6.5S18 9 17.5 12c-2.5 0-4.5 1-5.5 3Z" />
      <path d="M12 6.5V4" />
    </>
  );

export const IconNotebook = (p: IconProps) =>
  base(
    p,
    <>
      <rect x="6" y="3.5" width="13" height="17" rx="2" />
      <path d="M3.5 7h3M3.5 12h3M3.5 17h3M10 8h5M10 11.5h5" />
    </>
  );

export const IconPen = (p: IconProps) =>
  base(
    p,
    <>
      <path d="m14.5 4.5 5 5L8 21H3v-5L14.5 4.5Z" />
      <path d="m12.5 6.5 5 5" />
    </>
  );

export const IconClay = (p: IconProps) =>
  base(
    p,
    <>
      <ellipse cx="12" cy="16.5" rx="8" ry="3.5" />
      <path d="M7 14.2c-.4-3 1.1-5.2 3-6.4 1.2-.8 2.8-.8 4 0 1.9 1.2 3.4 3.4 3 6.4" />
      <circle cx="12" cy="7" r="1.8" />
    </>
  );

export const IconInstagram = (p: IconProps) =>
  base(
    p,
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
    </>
  );

export const IconTelegram = (p: IconProps) =>
  base(
    p,
    <path d="m20.5 4.5-17 6.9c-.6.2-.6 1 0 1.2l4.3 1.5 1.7 4.9c.2.5.9.6 1.2.2l2.3-2.6 4.4 3.2c.4.3 1 .1 1.1-.4l2.7-13.9c.1-.6-.4-1.1-.9-.9ZM8 14l9.5-6.8-7.5 7.6-.3 3" />
  );
