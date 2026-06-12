/**
 * Himma mascot — a glowing ember/flame character. Refreshed for the dark
 * brand: gradient body, a bright inner core, a floating spark, and a friendly
 * face. Inlined as SVG so it can animate, glow, and scale crisply. Each
 * instance gets a unique gradient-id prefix so multiple marks render correctly
 * on the same page.
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
  return `hm${_uid}`;
}

function Defs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={`${id}-body`} x1="48" y1="14" x2="48" y2="110" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#FF9A5C" />
        <stop offset="0.5" stopColor="#FF6A2C" />
        <stop offset="1" stopColor="#E2521A" />
      </linearGradient>
      <linearGradient id={`${id}-core`} x1="48" y1="56" x2="48" y2="101" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#FFE7A8" />
        <stop offset="1" stopColor="#FFB23E" />
      </linearGradient>
    </defs>
  );
}

/** The flame body + bright core shared by every mark. */
function Flame({ id }: { id: string }) {
  return (
    <>
      <path
        d="M48 14C58 33 81 45 81 76C81 98.5 66.5 111 48 111C29.5 111 15 98.5 15 76C15 47 36.5 38.5 48 14Z"
        fill={`url(#${id}-body)`}
      />
      <path
        d="M48 56C56 67 64 73.5 64 84C64 95.5 57.5 102 48 102C38.5 102 32 95.5 32 84C32 73.5 40 67 48 56Z"
        fill={`url(#${id}-core)`}
      />
    </>
  );
}

/** Small brand mark used in the nav. */
export function BrandMark({ width = 32, height = 40, className, id }: MarkProps) {
  const uid = useId(id);
  return (
    <svg width={width} height={height} viewBox="0 0 96 120" className={className} aria-label="Himma" role="img">
      <Defs id={uid} />
      <Flame id={uid} />
      <circle cx="40" cy="73" r="4.4" fill="#1a0f08" />
      <circle cx="56" cy="73" r="4.4" fill="#1a0f08" />
      <circle cx="41.6" cy="71.4" r="1.4" fill="#fff" />
      <circle cx="57.6" cy="71.4" r="1.4" fill="#fff" />
      <path d="M41 83Q48 90 55 83" fill="none" stroke="#1a0f08" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/** Hero mascot — larger, with a floating spark for the bob animation. */
export function HeroMascot({ width = 92, height = 116, className, id }: MarkProps) {
  const uid = useId(id);
  return (
    <svg width={width} height={height} viewBox="0 0 96 120" className={className} aria-label="Himma mascotte" role="img">
      <Defs id={uid} />
      <path d="M74 18l2.6 6 6 2.6-6 2.6-2.6 6-2.6-6-6-2.6 6-2.6Z" fill="#FFB23E" opacity="0.95" />
      <Flame id={uid} />
      <circle cx="40" cy="73" r="4.6" fill="#1a0f08" />
      <circle cx="56" cy="73" r="4.6" fill="#1a0f08" />
      <circle cx="41.6" cy="71.2" r="1.5" fill="#fff" />
      <circle cx="57.6" cy="71.2" r="1.5" fill="#fff" />
      <path d="M40.5 83Q48 91 55.5 83" fill="none" stroke="#1a0f08" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/** Sparkly, happy mascot shown in the success state (eyes closed, two sparks). */
export function SparkleMascot({ width = 66, height = 82, className, id }: MarkProps) {
  const uid = useId(id);
  return (
    <svg width={width} height={height} viewBox="0 0 96 120" className={className} aria-hidden="true">
      <Defs id={uid} />
      <path d="M73 20l2.6 6 6 2.6-6 2.6-2.6 6-2.6-6-6-2.6 6-2.6Z" fill="#FFB23E" />
      <path d="M16 40l1.8 4.2 4.2 1.8-4.2 1.8-1.8 4.2-1.8-4.2-4.2-1.8 4.2-1.8Z" fill="#FFB23E" opacity="0.85" />
      <Flame id={uid} />
      <path d="M35 74Q40 69 45 74" fill="none" stroke="#1a0f08" strokeWidth="3" strokeLinecap="round" />
      <path d="M51 74Q56 69 61 74" fill="none" stroke="#1a0f08" strokeWidth="3" strokeLinecap="round" />
      <path d="M42 83Q48 91 54 83" fill="none" stroke="#1a0f08" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
