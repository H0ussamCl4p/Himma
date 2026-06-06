/**
 * Himma mascot marks, inlined as SVG so they can animate and scale crisply.
 * Geometry matches the original Himma mark exactly.
 */

type MarkProps = {
  width?: number;
  height?: number;
  className?: string;
};

/** Small brand mark used in the nav. */
export function BrandMark({ width = 34, height = 42, className }: MarkProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 96 120"
      className={className}
      aria-label="Himma"
      role="img"
    >
      <path
        d="M48 16C58 34 80 46 80 76C80 98 66 110 48 110C30 110 16 98 16 76C16 48 36 40 48 16Z"
        fill="#FB6F4C"
      />
      <path
        d="M48 58C55 68 63 74 63 84C63 95 57 101 48 101C39 101 33 95 33 84C33 74 41 68 48 58Z"
        fill="#FFC24B"
      />
      <circle cx="40" cy="72" r="4.5" fill="#2C2622" />
      <circle cx="56" cy="72" r="4.5" fill="#2C2622" />
      <circle cx="41.6" cy="70.4" r="1.4" fill="#fff" />
      <circle cx="57.6" cy="70.4" r="1.4" fill="#fff" />
      <path
        d="M41 82Q48 89 55 82"
        fill="none"
        stroke="#2C2622"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Hero mascot (same as the brand mark, larger for the bob animation). */
export function HeroMascot({ width = 86, height = 108, className }: MarkProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 96 120"
      className={className}
      aria-label="Himma mascotte"
      role="img"
    >
      <path
        d="M48 16C58 34 80 46 80 76C80 98 66 110 48 110C30 110 16 98 16 76C16 48 36 40 48 16Z"
        fill="#FB6F4C"
      />
      <path
        d="M48 58C55 68 63 74 63 84C63 95 57 101 48 101C39 101 33 95 33 84C33 74 41 68 48 58Z"
        fill="#FFC24B"
      />
      <circle cx="40" cy="72" r="4.5" fill="#2C2622" />
      <circle cx="56" cy="72" r="4.5" fill="#2C2622" />
      <circle cx="41.6" cy="70.4" r="1.4" fill="#fff" />
      <circle cx="57.6" cy="70.4" r="1.4" fill="#fff" />
      <path
        d="M41 82Q48 89 55 82"
        fill="none"
        stroke="#2C2622"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Sparkly, happy mascot shown in the success state. */
export function SparkleMascot({ width = 64, height = 80, className }: MarkProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 96 120"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M70 22l2.4 5.6 5.6 2.4-5.6 2.4-2.4 5.6-2.4-5.6-5.6-2.4 5.6-2.4Z"
        fill="#FFC24B"
      />
      <path
        d="M48 16C58 34 80 46 80 76C80 98 66 110 48 110C30 110 16 98 16 76C16 48 36 40 48 16Z"
        fill="#FB6F4C"
      />
      <path
        d="M48 58C55 68 63 74 63 84C63 95 57 101 48 101C39 101 33 95 33 84C33 74 41 68 48 58Z"
        fill="#FFC24B"
      />
      <path
        d="M35 73Q40 68 45 73"
        fill="none"
        stroke="#2C2622"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M51 73Q56 68 61 73"
        fill="none"
        stroke="#2C2622"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M42 82Q48 90 54 82"
        fill="none"
        stroke="#2C2622"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
