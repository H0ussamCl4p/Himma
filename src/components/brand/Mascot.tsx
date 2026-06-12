/**
 * Forge mascot — a glowing molten ember character. A hot coal with a white-hot
 * core, a friendly face, and rising sparks (the spark struck off the anvil).
 * Inlined as SVG so it can animate, glow, and scale crisply. Each instance gets
 * a unique gradient-id prefix so multiple marks render correctly on one page.
 */

type MarkProps = {
  width?: number;
  height?: number;
  className?: string;
  id?: string;
};

let _uid = 0;
function useId(seed?: string) {
  if (seed) return seed;
  _uid += 1;
  return `fm${_uid}`;
}

function Defs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={`${id}-body`} x1="48" y1="34" x2="48" y2="105" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#FF8A4C" />
        <stop offset="0.55" stopColor="#E85620" />
        <stop offset="1" stopColor="#B83C12" />
      </linearGradient>
      <radialGradient id={`${id}-core`} cx="48" cy="71" r="26" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#FFF3D0" />
        <stop offset="0.6" stopColor="#FFC95E" />
        <stop offset="1" stopColor="#FFB23E" />
      </radialGradient>
      <radialGradient id={`${id}-halo`} cx="48" cy="74" r="46" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#FF6A2C" stopOpacity="0.32" />
        <stop offset="1" stopColor="#FF6A2C" stopOpacity="0" />
      </radialGradient>
    </defs>
  );
}

/** The molten coal body + white-hot core. */
function Ember({ id, halo }: { id: string; halo?: boolean }) {
  return (
    <>
      {halo && <ellipse cx="48" cy="74" rx="46" ry="42" fill={`url(#${id}-halo)`} />}
      <path
        d="M30 40C38 34 58 34 66 40C78 48 85 58 85 72C85 92 68 105 48 105C28 105 11 92 11 72C11 58 18 48 30 40Z"
        fill={`url(#${id}-body)`}
      />
      <path
        d="M48 52C61 52 71 62 71 74C71 89 61 97 48 97C35 97 25 89 25 74C25 62 35 52 48 52Z"
        fill={`url(#${id}-core)`}
      />
    </>
  );
}

function Sparks() {
  return (
    <>
      <path d="M50 12l1.9 4.4 4.4 1.9-4.4 1.9-1.9 4.4-1.9-4.4-4.4-1.9 4.4-1.9Z" fill="#FF8A4C" />
      <circle cx="69" cy="22" r="2.4" fill="#FFB23E" />
      <circle cx="29" cy="27" r="1.8" fill="#FF8A4C" />
    </>
  );
}

/** Small brand mark used in the nav — clean, no halo/sparks (reads at 32px). */
export function BrandMark({ width = 32, height = 40, className, id }: MarkProps) {
  const uid = useId(id);
  return (
    <svg width={width} height={height} viewBox="0 0 96 120" className={className} aria-label="Forge" role="img">
      <Defs id={uid} />
      <Ember id={uid} />
      <circle cx="40" cy="74" r="4.2" fill="#1a0f08" />
      <circle cx="56" cy="74" r="4.2" fill="#1a0f08" />
      <circle cx="41.5" cy="72.4" r="1.4" fill="#fff" />
      <circle cx="57.5" cy="72.4" r="1.4" fill="#fff" />
      <path d="M41 83Q48 89 55 83" fill="none" stroke="#1a0f08" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

/** Hero mascot — larger, with halo + rising sparks for the bob animation. */
export function HeroMascot({ width = 96, height = 120, className, id }: MarkProps) {
  const uid = useId(id);
  return (
    <svg width={width} height={height} viewBox="0 0 96 120" className={className} aria-label="Forge mascotte" role="img">
      <Defs id={uid} />
      <Ember id={uid} halo />
      <Sparks />
      <circle cx="40" cy="74" r="4.3" fill="#1a0f08" />
      <circle cx="56" cy="74" r="4.3" fill="#1a0f08" />
      <circle cx="41.5" cy="72.2" r="1.5" fill="#fff" />
      <circle cx="57.5" cy="72.2" r="1.5" fill="#fff" />
      <path d="M40.5 83Q48 90 55.5 83" fill="none" stroke="#1a0f08" strokeWidth="2.8" strokeLinecap="round" />
    </svg>
  );
}

/** Sparkly, happy mascot for the success state — eyes closed, extra sparks. */
export function SparkleMascot({ width = 70, height = 88, className, id }: MarkProps) {
  const uid = useId(id);
  return (
    <svg width={width} height={height} viewBox="0 0 96 120" className={className} aria-hidden="true">
      <Defs id={uid} />
      <Ember id={uid} halo />
      <Sparks />
      <circle cx="14" cy="44" r="2" fill="#FFB23E" />
      <path d="M35.5 75Q40 70.5 44.5 75" fill="none" stroke="#1a0f08" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M51.5 75Q56 70.5 60.5 75" fill="none" stroke="#1a0f08" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M41 83Q48 90 55 83" fill="none" stroke="#1a0f08" strokeWidth="2.8" strokeLinecap="round" />
    </svg>
  );
}
