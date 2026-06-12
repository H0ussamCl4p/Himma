import React from "react";
import { FLAME_FACE_INK } from "./brand";

type Props = {
  size?: number;
  face?: boolean;
  idPrefix: string;
  style?: React.CSSProperties;
};

/** The Himma flame mark — same geometry as the production mascot. */
export const FlameMark: React.FC<Props> = ({ size = 200, face = true, idPrefix, style }) => {
  const h = (size * 120) / 96;
  return (
    <svg width={size} height={h} viewBox="0 0 96 120" style={style}>
      <defs>
        <linearGradient id={`${idPrefix}-body`} x1="48" y1="14" x2="48" y2="110" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FF9A5C" />
          <stop offset="0.5" stopColor="#FF6A2C" />
          <stop offset="1" stopColor="#E2521A" />
        </linearGradient>
        <linearGradient id={`${idPrefix}-core`} x1="48" y1="56" x2="48" y2="101" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FFE7A8" />
          <stop offset="1" stopColor="#FFB23E" />
        </linearGradient>
      </defs>
      <path
        d="M48 14C58 33 81 45 81 76C81 98.5 66.5 111 48 111C29.5 111 15 98.5 15 76C15 47 36.5 38.5 48 14Z"
        fill={`url(#${idPrefix}-body)`}
      />
      <path
        d="M48 56C56 67 64 73.5 64 84C64 95.5 57.5 102 48 102C38.5 102 32 95.5 32 84C32 73.5 40 67 48 56Z"
        fill={`url(#${idPrefix}-core)`}
      />
      {face && (
        <>
          <circle cx="40" cy="73" r="4.4" fill={FLAME_FACE_INK} />
          <circle cx="56" cy="73" r="4.4" fill={FLAME_FACE_INK} />
          <circle cx="41.6" cy="71.4" r="1.4" fill="#fff" />
          <circle cx="57.6" cy="71.4" r="1.4" fill="#fff" />
          <path d="M41 83Q48 90 55 83" fill="none" stroke={FLAME_FACE_INK} strokeWidth="3" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
};
