import useMousePosition from "../hooks/useMousePosition";

/**
 * Hero illustration — a modern, professional developer workspace drawn as
 * inline SVG so it stays crisp, themeable and dependency-free.
 * Layers move at different depths for a parallax fake-3D feel.
 */
export default function DevIllustration() {
  const { nx, ny } = useMousePosition();
  const layer = (depth) => ({
    transform: `translate3d(${nx * depth}px, ${ny * depth}px, 0)`,
  });

  return (
    <div
      className="dev-illustration"
      style={{ "--rx": `${-ny * 7}deg`, "--ry": `${nx * 9}deg` }}
    >
      <div className="dev-illustration__stage">
        <span className="dev-illustration__halo" aria-hidden="true" />

        <span className="dev-illustration__chip dev-illustration__chip--one" style={layer(30)}>
          <strong>99</strong> Lighthouse
        </span>
        <span className="dev-illustration__chip dev-illustration__chip--two" style={layer(22)}>
          <strong>p95</strong> 120ms
        </span>
        <span className="dev-illustration__chip dev-illustration__chip--three" style={layer(38)}>
          <strong>CI</strong> passing
        </span>

        <svg
          className="dev-illustration__svg"
          viewBox="0 0 520 520"
          role="img"
          aria-label="Illustration of a developer at a desk writing code, with cloud and database services around the workspace"
          style={layer(12)}
        >
          <defs>
            <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#FFD54F" />
              <stop offset="1" stopColor="#FF9800" />
            </linearGradient>
            <linearGradient id="accentSoft" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0" stopColor="#FFE9A8" />
              <stop offset="1" stopColor="#FFD54F" />
            </linearGradient>
          </defs>

          <circle cx="260" cy="250" r="196" fill="#F8F8F8" />
          <circle cx="260" cy="250" r="196" fill="none" stroke="#ECECEC" strokeWidth="2" />

          {/* desk */}
          <rect x="72" y="372" width="376" height="16" rx="8" fill="#ECECEC" />
          <rect x="120" y="388" width="18" height="54" rx="9" fill="#ECECEC" />
          <rect x="382" y="388" width="18" height="54" rx="9" fill="#ECECEC" />

          {/* monitor */}
          <g className="dev-illustration__float">
            <rect x="146" y="150" width="228" height="152" rx="16" fill="#ffffff" stroke="#202020" strokeWidth="6" />
            <rect x="146" y="150" width="228" height="34" rx="16" fill="url(#accent)" />
            <circle cx="168" cy="167" r="5" fill="#202020" />
            <circle cx="186" cy="167" r="5" fill="#ffffff" opacity="0.7" />
            <rect x="168" y="204" width="112" height="12" rx="6" fill="#FF9800" />
            <rect x="168" y="228" width="164" height="12" rx="6" fill="#ECECEC" />
            <rect x="188" y="252" width="96" height="12" rx="6" fill="#FFD54F" />
            <rect x="188" y="276" width="132" height="12" rx="6" fill="#ECECEC" />
            <rect x="238" y="302" width="44" height="22" rx="6" fill="#202020" />
            <rect x="196" y="324" width="128" height="10" rx="5" fill="#202020" />
          </g>

          {/* developer */}
          <g>
            <path d="M212 372c0-38 22-60 48-60s48 22 48 60z" fill="#202020" />
            <path d="M226 372c2-26 14-40 34-40s32 14 34 40z" fill="url(#accentSoft)" />
            <circle cx="260" cy="296" r="30" fill="#FFD54F" />
            <path d="M232 292c0-20 12-32 28-32s28 12 28 30c0 4-2 6-6 6-16-2-28-6-34-14-4 6-8 10-12 12-2 1-4 0-4-2z" fill="#202020" />
            <path d="M240 356l-30 16M280 356l30 16" stroke="#202020" strokeWidth="8" strokeLinecap="round" />
          </g>

          {/* keyboard */}
          <rect x="196" y="358" width="128" height="16" rx="6" fill="#ffffff" stroke="#202020" strokeWidth="5" />

          {/* side service cards */}
          <g className="dev-illustration__drift">
            <rect x="52" y="196" width="76" height="62" rx="14" fill="#ffffff" stroke="#202020" strokeWidth="5" />
            <ellipse cx="90" cy="216" rx="20" ry="8" fill="#FF9800" />
            <path d="M70 216v22c0 4 9 8 20 8s20-4 20-8v-22" fill="none" stroke="#FF9800" strokeWidth="5" />
          </g>
          <g className="dev-illustration__drift dev-illustration__drift--slow">
            <rect x="392" y="216" width="80" height="62" rx="14" fill="#ffffff" stroke="#202020" strokeWidth="5" />
            <path d="M410 254h44a13 13 0 0 0 1-25 18 18 0 0 0-34-4 12 12 0 0 0-11 29z" fill="#FFD54F" />
          </g>
          <g className="dev-illustration__drift">
            <rect x="378" y="120" width="70" height="52" rx="14" fill="url(#accent)" />
            <path d="M398 138l-10 8 10 8M424 138l10 8-10 8" stroke="#202020" strokeWidth="5" strokeLinecap="round" fill="none" />
          </g>

          {/* connection lines */}
          <path d="M132 226h20M368 246h24M392 168h-18" stroke="#FF9800" strokeWidth="4" strokeDasharray="8 8" strokeLinecap="round" className="dev-illustration__dash" />
        </svg>
      </div>
    </div>
  );
}
