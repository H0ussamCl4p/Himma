/**
 * Small, on-brand inline line icons. Stroke uses currentColor so each icon
 * inherits the color of its surrounding text. Drawn to match Himma's warm,
 * rounded mark — deliberately not emoji and with no icon-font dependency.
 */

type IconProps = { size?: number; className?: string };

function svgProps(size: number, className?: string) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };
}

/** A flame — "watch your ember light up". */
export function FlameIcon({ size = 24, className }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      <path d="M12 2.5c2.2 3.6 5.2 5.2 5.2 9.2a5.2 5.2 0 0 1-10.4 0c0-1.3.4-2.4 1.1-3.4.2 1.3.9 2.1 2 2.5C9.4 7.9 10.5 5.3 12 2.5Z" />
    </svg>
  );
}

export function HomeIcon({ size = 18, className }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5.5 10v9.5h13V10" />
    </svg>
  );
}

export function TrophyIcon({ size = 18, className }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      <path d="M7 4h10v4a5 5 0 0 1-10 0V4Z" />
      <path d="M7 6H4v1a3 3 0 0 0 3 3" />
      <path d="M17 6h3v1a3 3 0 0 1-3 3" />
      <path d="M10 13.5h4V17h-4z" />
      <path d="M8 20h8" />
    </svg>
  );
}

export function UserIcon({ size = 18, className }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </svg>
  );
}

export function BookIcon({ size = 14, className }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      <path d="M4 5h6a2 2 0 0 1 2 2v12a2 2 0 0 0-2-2H4V5Z" />
      <path d="M20 5h-6a2 2 0 0 0-2 2v12a2 2 0 0 1 2-2h6V5Z" />
    </svg>
  );
}

export function CalendarIcon({ size = 14, className }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      <rect x="4" y="5" width="16" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M4 10h16" />
    </svg>
  );
}

/** Two friends — social accountability. */
export function UsersIcon({ size = 22, className }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 19.5a5.5 5.5 0 0 1 11 0" />
      <path d="M16 5.2a3.2 3.2 0 0 1 0 5.6" />
      <path d="M17 14.4a5.5 5.5 0 0 1 3.5 5.1" />
    </svg>
  );
}

/** Shield with a check — anti-cheat / real scores. */
export function ShieldIcon({ size = 22, className }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      <path d="M12 3 5 5.5V11c0 4.4 3 7.6 7 9 4-1.4 7-4.6 7-9V5.5L12 3Z" />
      <path d="M9 11.8 11 14l4-4.2" />
    </svg>
  );
}

/** Rising bars — subject / progress tracking. */
export function ChartIcon({ size = 22, className }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      <path d="M4 20h16" />
      <rect x="6" y="12" width="3" height="6" rx="1" />
      <rect x="11" y="8" width="3" height="10" rx="1" />
      <rect x="16" y="4" width="3" height="14" rx="1" />
    </svg>
  );
}

/** Globe — made for Morocco / Darija-first. */
export function GlobeIcon({ size = 22, className }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.5 3.8 5.7 3.8 9S14.5 18.5 12 21c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3Z" />
    </svg>
  );
}

export function PauseIcon({ size = 14, className }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      <rect x="7.5" y="6" width="3" height="12" rx="1" />
      <rect x="13.5" y="6" width="3" height="12" rx="1" />
    </svg>
  );
}

export function StopIcon({ size = 14, className }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      <rect x="7" y="7" width="10" height="10" rx="2" />
    </svg>
  );
}
