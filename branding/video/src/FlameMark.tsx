import React from "react";

type Props = {
  size?: number;
  face?: boolean;
  idPrefix: string;
  style?: React.CSSProperties;
};

/** The Forge mark — a glowing molten ember, same geometry as the production mascot. */
export const FlameMark: React.FC<Props> = ({ size = 200, face = true, idPrefix, style }) => {
  const h = (size * 120) / 96;
  return (
    <svg width={size} height={h} viewBox="0 0 96 120" style={style}>
      <defs>
        <linearGradient id={`${idPrefix}-body`} x1="48" y1="34" x2="48" y2="105" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FF8A4C" />
          <stop offset="0.55" stopColor="#E85620" />
          <stop offset="1" stopColor="#B83C12" />
        </linearGradient>
        <radialGradient id={`${idPrefix}-core`} cx="48" cy="71" r="26" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FFF3D0" />
          <stop offset="0.6" stopColor="#FFC95E" />
          <stop offset="1" stopColor="#FFB23E" />
        </radialGradient>
        <radialGradient id={`${idPrefix}-halo`} cx="48" cy="74" r="46" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FF6A2C" stopOpacity="0.32" />
          <stop offset="1" stopColor="#FF6A2C" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="48" cy="74" rx="46" ry="42" fill={`url(#${idPrefix}-halo)`} />
      <path d="M50 12l1.9 4.4 4.4 1.9-4.4 1.9-1.9 4.4-1.9-4.4-4.4-1.9 4.4-1.9Z" fill="#FF8A4C" />
      <circle cx="69" cy="22" r="2.4" fill="#FFB23E" />
      <circle cx="29" cy="27" r="1.8" fill="#FF8A4C" />
      <path
        d="M30 40C38 34 58 34 66 40C78 48 85 58 85 72C85 92 68 105 48 105C28 105 11 92 11 72C11 58 18 48 30 40Z"
        fill={`url(#${idPrefix}-body)`}
      />
      <path
        d="M48 52C61 52 71 62 71 74C71 89 61 97 48 97C35 97 25 89 25 74C25 62 35 52 48 52Z"
        fill={`url(#${idPrefix}-core)`}
      />
      {face && (
        <>
          <circle cx="40" cy="74" r="4.3" fill="#1a0f08" />
          <circle cx="56" cy="74" r="4.3" fill="#1a0f08" />
          <circle cx="41.5" cy="72.2" r="1.5" fill="#fff" />
          <circle cx="57.5" cy="72.2" r="1.5" fill="#fff" />
          <path d="M40.5 83Q48 90 55.5 83" fill="none" stroke="#1a0f08" strokeWidth="2.8" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
};
