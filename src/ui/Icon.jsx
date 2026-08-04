const paths = {
  react: (
    <>
      <circle cx="12" cy="12" r="2.2" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
    </>
  ),
  node: (
    <>
      <path d="M12 2.5 21 7.5v9L12 21.5 3 16.5v-9z" />
      <path d="M9 15c0 1 .8 1.6 2 1.6 1.4 0 2.2-.7 2.2-1.9V9" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="6" rx="7.5" ry="3" />
      <path d="M4.5 6v12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6" />
      <path d="M4.5 12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3" />
    </>
  ),
  cloud: <path d="M6.5 19h11a4 4 0 0 0 .4-8 6 6 0 0 0-11.6-1.4A3.8 3.8 0 0 0 6.5 19z" />,
  server: (
    <>
      <rect x="3" y="4" width="18" height="6" rx="2" />
      <rect x="3" y="14" width="18" height="6" rx="2" />
      <path d="M7 7h.01M7 17h.01" />
    </>
  ),
  docker: (
    <>
      <rect x="3" y="11" width="14" height="5" rx="1" />
      <path d="M6 11V8h3v3M10 11V8h3v3" />
      <path d="M17 13c2 0 4-.8 4-.8s-.4 3.8-4 3.8" />
    </>
  ),
  terminal: (
    <>
      <rect x="2.5" y="4" width="19" height="16" rx="3" />
      <path d="M7 10l2.5 2L7 14M12.5 15h4" />
    </>
  ),
  git: (
    <>
      <circle cx="6.5" cy="6" r="2.5" />
      <circle cx="6.5" cy="18" r="2.5" />
      <circle cx="17.5" cy="12" r="2.5" />
      <path d="M6.5 8.5v7M9 17c5 0 6-1.5 6-4" />
    </>
  ),
  code: <path d="M9 7l-5 5 5 5M15 7l5 5-5 5" />,
  api: (
    <>
      <rect x="3.5" y="8" width="17" height="8" rx="4" />
      <path d="M8 12h.01M12 12h.01M16 12h.01" />
    </>
  ),
  laptop: (
    <>
      <rect x="4" y="5" width="16" height="10" rx="2" />
      <path d="M2.5 18.5h19" />
    </>
  ),
  network: (
    <>
      <circle cx="12" cy="5" r="2.2" />
      <circle cx="5" cy="18" r="2.2" />
      <circle cx="19" cy="18" r="2.2" />
      <path d="M12 7.2 6.3 16M12 7.2 17.7 16M7.2 18h9.6" />
    </>
  ),
  spark: <path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" />,
  bolt: <path d="M13 2 5 13h6l-1 9 8-11h-6z" />,
  shield: <path d="M12 3l7 3v6c0 5-3.2 7.8-7 9-3.8-1.2-7-4-7-9V6z" />,
  gauge: (
    <>
      <path d="M4 18a8 8 0 1 1 16 0" />
      <path d="M12 18l4-5" />
    </>
  ),
  layers: <path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5" />,
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-5 6-5s6 1.7 6 5" />
      <path d="M16 5.5a3 3 0 0 1 0 5.8M17 15c2.5.5 4 2.2 4 5" />
    </>
  ),
  github: (
    <path d="M12 2.5a9.5 9.5 0 0 0-3 18.5v-3c-2.4.4-3-1.3-3-1.3-.5-1-1.2-1.3-1.2-1.3-1-.6 0-.6 0-.6 1 .1 1.6 1.1 1.6 1.1.9 1.5 2.4 1.1 3 .8.1-.7.4-1.2.7-1.5-2.3-.3-4-1.4-4-4.4 0-1 .3-1.9.9-2.5-.1-.3-.4-1.3.1-2.6 0 0 1-.3 3.2 1.1a8.6 8.6 0 0 1 4.4 0c2.2-1.4 3.2-1.1 3.2-1.1.5 1.3.2 2.3.1 2.6.6.6.9 1.5.9 2.5 0 3-1.8 4.1-4.1 4.4.5.4.8 1.1.8 2.2V21A9.5 9.5 0 0 0 12 2.5z" />
  ),
  external: (
    <>
      <path d="M14 4h6v6" />
      <path d="M20 4l-9 9" />
      <path d="M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="M4 7l8 6 8-6" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7.5 10.5V17M7.5 7.6v.1M11.5 17v-6M11.5 13.4c0-1.6 1-2.4 2.3-2.4s2.2.9 2.2 2.6V17" />
    </>
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" />
    </>
  ),
  x: <path d="M4 4l16 16M20 4L4 20" />,
  arrowDown: <path d="M12 4v15M6 13l6 6 6-6" />,
  arrowUp: <path d="M12 20V5M6 11l6-6 6 6" />,
  arrowRight: <path d="M4 12h15M13 6l6 6-6 6" />,
  download: (
    <>
      <path d="M12 3v12M7 11l5 5 5-5" />
      <path d="M4 20h16" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  quote: <path d="M9 6c-3 1.5-4.5 4-4.5 7.5V18h5v-5H6c0-2.5 1-4.2 3-5zM19 6c-3 1.5-4.5 4-4.5 7.5V18h5v-5H16c0-2.5 1-4.2 3-5z" />,
  check: <path d="M5 13l4.5 4.5L19 7" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8" />
    </>
  ),
  moon: <path d="M20 14.5A8.2 8.2 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5z" />,
};


/** Single reusable stroke-based icon set — no icon library required. */
export default function Icon({ name, size = 22, className = "", ...rest }) {
  const glyph = paths[name];
  if (!glyph) return null;
  return (
    <svg
      className={`icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {glyph}
    </svg>
  );
}

export const iconNames = Object.keys(paths);
