import React from "react";
import {
  AbsoluteFill,
  Sequence,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from "remotion";
import { loadFont as loadGrotesk } from "@remotion/google-fonts/SpaceGrotesk";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";
import { C, EMBER_GRAD } from "./brand";
import { FlameMark } from "./FlameMark";

const grotesk = loadGrotesk("normal", { weights: ["500", "600", "700"] });
const inter = loadInter("normal", { weights: ["400", "500", "600"] });

const DISPLAY = grotesk.fontFamily;
const BODY = inter.fontFamily;

const easeOut = Easing.bezier(0.16, 1, 0.3, 1);

/* ---------- small animation helpers ---------- */
const useT = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return { frame, fps };
};

const popIn = (frame: number, fps: number, delay: number, damping = 13) =>
  spring({ frame: frame - delay, fps, config: { damping, mass: 0.7 }, durationInFrames: 36 });

const fade = (frame: number, from: number, to: number, a = 0, b = 1) =>
  interpolate(frame, [from, to], [a, b], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: easeOut });

const rise = (frame: number, delay: number, dist = 50) =>
  interpolate(frame, [delay, delay + 18], [dist, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: easeOut });

const blurIn = (frame: number, delay: number, max = 14) =>
  interpolate(frame, [delay, delay + 14], [max, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

/* ================= SCENE 1 — logo reveal (dark) ================= */
const PARTICLES = Array.from({ length: 14 }, (_, i) => ({
  x: ((i * 137.5) % 100) / 100,
  y: 0.25 + (((i * 73.1) % 60) / 100),
  s: 3 + ((i * 41) % 7),
  d: i * 2,
}));

const LogoReveal: React.FC = () => {
  const { frame, fps } = useT();
  const mark = popIn(frame, fps, 8, 12);
  const glow = fade(frame, 0, 34, 0, 1);
  const ring = fade(frame, 14, 50, 0.55, 0);
  const ringScale = interpolate(frame, [14, 56], [0.7, 1.9], { extrapolateRight: "clamp", easing: easeOut });
  const spark = popIn(frame, fps, 42, 9);
  const flash = fade(frame, 84, 95, 0, 1);

  return (
    <AbsoluteFill style={{ background: C.dark, alignItems: "center", justifyContent: "center" }}>
      <div
        style={{
          position: "absolute",
          width: 1100,
          height: 1100,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(255,106,44,${0.32 * glow}), rgba(255,178,62,${0.08 * glow}) 45%, transparent 70%)`,
          filter: "blur(30px)",
        }}
      />
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${8 + p.x * 84}%`,
            top: `${p.y * 100}%`,
            width: p.s,
            height: p.s,
            borderRadius: "50%",
            background: i % 3 === 0 ? C.honey : C.ember,
            opacity: glow * (0.25 + 0.5 * Math.abs(Math.sin((frame + p.d) / 18))),
            transform: `translateY(${-frame * (0.4 + p.s / 14)}px)`,
          }}
        />
      ))}
      <div
        style={{
          position: "absolute",
          width: 560,
          height: 560,
          borderRadius: "50%",
          border: `2px solid rgba(255,106,44,${ring})`,
          transform: `scale(${ringScale})`,
        }}
      />
      <div style={{ transform: `scale(${mark})`, filter: `drop-shadow(0 30px 80px rgba(255,106,44,0.45))` }}>
        <FlameMark size={300} idPrefix="s1" />
      </div>
      <svg
        width={110}
        height={110}
        viewBox="0 0 40 40"
        style={{
          position: "absolute",
          top: 280,
          right: 700,
          transform: `scale(${spark}) rotate(${interpolate(spark, [0, 1], [-40, 0])}deg)`,
          opacity: Math.min(1, spark * 1.4),
        }}
      >
        <path d="M20 2l4.2 9.8L34 16l-9.8 4.2L20 30l-4.2-9.8L6 16l9.8-4.2Z" fill={C.honey} />
      </svg>
      <AbsoluteFill style={{ background: C.bg, opacity: flash }} />
    </AbsoluteFill>
  );
};

/* ================= SCENE 2 — kinetic tagline (light) ================= */
const Tagline: React.FC = () => {
  const { frame, fps } = useT();
  const unflash = fade(frame, 0, 10, 1, 0);
  const w1 = popIn(frame, fps, 8, 15);
  const w2 = popIn(frame, fps, 18, 15);
  const sub = fade(frame, 48, 64);
  const push = interpolate(frame, [0, 130], [1, 1.045]);
  const exitY = interpolate(frame, [108, 126], [0, -70], { extrapolateLeft: "clamp", easing: Easing.in(Easing.cubic) });
  const exitOp = fade(frame, 108, 124, 1, 0);
  const wipe = interpolate(frame, [112, 130], [-100, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: easeOut });

  return (
    <AbsoluteFill style={{ background: C.bg, alignItems: "center", justifyContent: "center" }}>
      <div
        style={{
          transform: `scale(${push}) translateY(${exitY}px)`,
          opacity: exitOp,
          textAlign: "center",
          fontFamily: DISPLAY,
        }}
      >
        <div style={{ fontSize: 200, fontWeight: 700, letterSpacing: -8, color: C.ink, lineHeight: 1 }}>
          <span
            style={{
              display: "inline-block",
              transform: `translateY(${(1 - w1) * 90}px) scale(${0.85 + 0.15 * w1})`,
              opacity: Math.min(1, w1 * 1.5),
              filter: `blur(${(1 - w1) * 12}px)`,
            }}
          >
            Dir
          </span>{" "}
          <span
            style={{
              display: "inline-block",
              transform: `translateY(${(1 - w2) * 90}px) scale(${0.85 + 0.15 * w2})`,
              opacity: Math.min(1, w2 * 1.5),
              filter: `blur(${(1 - w2) * 12}px)`,
              backgroundImage: EMBER_GRAD,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            himma.
          </span>
        </div>
        <div
          style={{
            fontFamily: BODY,
            fontSize: 44,
            fontWeight: 500,
            color: C.muted,
            marginTop: 38,
            opacity: sub,
            transform: `translateY(${rise(frame, 48, 30)}px)`,
          }}
        >
          Your study hours, turned into a game.
        </div>
      </div>
      <AbsoluteFill style={{ background: EMBER_GRAD, transform: `translateX(${wipe}%)` }} />
      <AbsoluteFill style={{ background: C.bg, opacity: unflash, pointerEvents: "none" }} />
    </AbsoluteFill>
  );
};

/* ================= SCENE 3 — feature cuts ================= */
const CARD_LEN = 54;

const CardShell: React.FC<{
  bg: string;
  children: React.ReactNode;
  local: number;
  uncover?: boolean;
}> = ({ bg, children, local, uncover }) => {
  const inOp = fade(local, 0, 9);
  const inScale = interpolate(local, [0, 10], [1.05, 1], { extrapolateRight: "clamp", easing: easeOut });
  const outOp = fade(local, CARD_LEN - 8, CARD_LEN - 1, 1, 0);
  const wipeOut = uncover
    ? interpolate(local, [0, 16], [0, 100], { extrapolateRight: "clamp", easing: Easing.in(Easing.cubic) })
    : 100;
  return (
    <AbsoluteFill style={{ background: bg, alignItems: "center", justifyContent: "center" }}>
      <div style={{ opacity: inOp * outOp, transform: `scale(${inScale})`, width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {children}
      </div>
      {uncover && <AbsoluteFill style={{ background: EMBER_GRAD, transform: `translateX(${wipeOut}%)` }} />}
    </AbsoluteFill>
  );
};

const BigLine: React.FC<{ text: string; sub: string; color: string; subColor: string; local: number }> = ({
  text,
  sub,
  color,
  subColor,
  local,
}) => (
  <div style={{ textAlign: "center", fontFamily: DISPLAY }}>
    <div
      style={{
        fontSize: 130,
        fontWeight: 700,
        letterSpacing: -5,
        color,
        filter: `blur(${blurIn(local, 4, 10)}px)`,
        transform: `translateY(${rise(local, 4, 60)}px)`,
        opacity: fade(local, 4, 16),
      }}
    >
      {text}
    </div>
    <div
      style={{
        fontFamily: BODY,
        fontSize: 38,
        fontWeight: 500,
        color: subColor,
        marginTop: 26,
        opacity: fade(local, 16, 28),
        transform: `translateY(${rise(local, 16, 26)}px)`,
      }}
    >
      {sub}
    </div>
  </div>
);

const AvatarRow: React.FC<{ local: number }> = ({ local }) => {
  const { fps } = useVideoConfig();
  const colors = [C.mint, C.grape, C.honey];
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: 0, marginTop: 44 }}>
      {colors.map((col, i) => {
        const s = popIn(local, fps, 22 + i * 5, 10);
        return (
          <div
            key={i}
            style={{
              width: 96,
              height: 96,
              borderRadius: "50%",
              background: col,
              border: `6px solid ${C.bg}`,
              marginLeft: i ? -26 : 0,
              transform: `scale(${s})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: DISPLAY,
              fontWeight: 700,
              fontSize: 38,
              color: C.ink,
            }}
          >
            {["Y", "S", "M"][i]}
          </div>
        );
      })}
    </div>
  );
};

const Features: React.FC = () => {
  const { frame } = useT();
  const card = Math.min(3, Math.floor(frame / CARD_LEN));
  const local = frame - card * CARD_LEN;

  return (
    <AbsoluteFill>
      {card === 0 && (
        <CardShell bg={C.bg} local={local} uncover>
          <div>
            <BigLine
              text="Study with your friends."
              sub="See who's locked in, right now."
              color={C.ink}
              subColor={C.muted}
              local={local}
            />
            <AvatarRow local={local} />
          </div>
        </CardShell>
      )}
      {card === 1 && (
        <CardShell bg={C.dark} local={local}>
          <div style={{ textAlign: "center" }}>
            <svg
              width={120}
              height={120}
              viewBox="0 0 24 24"
              fill="none"
              stroke={C.ember}
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ opacity: fade(local, 4, 14), transform: `translateY(${rise(local, 4, 30)}px)`, marginBottom: 30 }}
            >
              <path d="M12 3 5 5.5V11c0 4.4 3 7.6 7 9 4-1.4 7-4.6 7-9V5.5L12 3Z" />
              <path d="M9 11.8 11 14l4-4.2" />
            </svg>
            <BigLine
              text="Real scores only."
              sub="Anti-cheat built in. Zero fake hours, ever."
              color="#F5F1EC"
              subColor="#A8A39B"
              local={local}
            />
          </div>
        </CardShell>
      )}
      {card === 2 && (
        <CardShell bg={C.bg} local={local}>
          <BigLine
            text="Climb your class."
            sub="A live leaderboard for your class, your friends, your school."
            color={C.ink}
            subColor={C.muted}
            local={local}
          />
        </CardShell>
      )}
      {card === 3 && (
        <CardShell bg={C.dark} local={local}>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: DISPLAY,
                fontSize: 330,
                fontWeight: 700,
                letterSpacing: -14,
                lineHeight: 1,
                backgroundImage: EMBER_GRAD,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                filter: `blur(${blurIn(local, 3, 12)}px)`,
                transform: `scale(${interpolate(local, [3, 16], [1.15, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: easeOut })})`,
                opacity: fade(local, 3, 13),
              }}
            >
              87%
            </div>
            <div
              style={{
                fontFamily: BODY,
                fontSize: 42,
                fontWeight: 500,
                color: "#F5F1EC",
                marginTop: 18,
                opacity: fade(local, 18, 30),
                transform: `translateY(${rise(local, 18, 26)}px)`,
              }}
            >
              more study time with accountability partners
            </div>
            <div
              style={{
                fontFamily: BODY,
                fontSize: 26,
                color: "#6E6A64",
                marginTop: 16,
                opacity: fade(local, 26, 38),
              }}
            >
              Stanford research on social accountability
            </div>
          </div>
        </CardShell>
      )}
    </AbsoluteFill>
  );
};

/* ================= SCENE 4 — product moment ================= */
const ROWS = [
  { rk: "1", n: "Younes", i: "Y", h: "14h 20", col: C.mint, me: false },
  { rk: "2", n: "Salma", i: "S", h: "12h 05", col: C.grape, me: false },
  { rk: "3", n: "Mehdi", i: "M", h: "10h 40", col: C.honey, me: false },
  { rk: "7", n: "You", i: "H", h: "9h 05", col: C.ember, me: true },
];

const PhoneScene: React.FC = () => {
  const { frame, fps } = useT();
  const inOp = fade(frame, 0, 12);
  const head = popIn(frame, fps, 6, 16);
  const phone = popIn(frame, fps, 10, 14);
  const pulse = 1 + 0.025 * Math.sin(Math.max(0, frame - 70) / 7) * (frame > 70 ? 1 : 0);
  const out = fade(frame, 128, 140, 1, 0);

  return (
    <AbsoluteFill style={{ background: C.bg, opacity: inOp * out }}>
      <div
        style={{
          position: "absolute",
          right: -200,
          top: 100,
          width: 900,
          height: 900,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,106,44,0.16), transparent 65%)",
          filter: "blur(20px)",
        }}
      />
      <div style={{ position: "absolute", left: 170, top: 330, width: 700 }}>
        <div
          style={{
            fontFamily: DISPLAY,
            fontSize: 110,
            fontWeight: 700,
            letterSpacing: -4,
            color: C.ink,
            lineHeight: 1.02,
            transform: `translateY(${(1 - head) * 70}px)`,
            opacity: Math.min(1, head * 1.4),
          }}
        >
          Your campus.
          <br />
          <span
            style={{ backgroundImage: EMBER_GRAD, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}
          >
            Live.
          </span>
        </div>
        <div
          style={{
            fontFamily: BODY,
            fontSize: 36,
            fontWeight: 500,
            color: C.muted,
            marginTop: 30,
            opacity: fade(frame, 30, 44),
            transform: `translateY(${rise(frame, 30, 26)}px)`,
          }}
        >
          A real leaderboard for your class, every week.
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          right: 280,
          top: 130,
          width: 420,
          background: C.surface,
          border: `2px solid ${C.line}`,
          borderRadius: 56,
          padding: "34px 30px",
          boxShadow: "0 60px 120px -50px rgba(26,23,20,0.35)",
          transform: `translateY(${(1 - phone) * 600}px) rotate(${(1 - phone) * 6}deg)`,
          fontFamily: BODY,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", color: C.muted, fontSize: 20, marginBottom: 20 }}>
          <span>9:41</span>
          <span>▮▮▮</span>
        </div>
        <div style={{ fontFamily: DISPLAY, fontSize: 34, fontWeight: 600, color: C.ink }}>Leaderboard</div>
        <div style={{ fontSize: 20, color: C.faint, marginBottom: 22 }}>CSCC 3A · this week</div>
        <div style={{ display: "flex", gap: 6, background: C.surface2, padding: 6, borderRadius: 20, marginBottom: 22, fontSize: 20, fontWeight: 600 }}>
          <span style={{ flex: 1, textAlign: "center", padding: "10px 0", color: C.muted }}>Friends</span>
          <span style={{ flex: 1, textAlign: "center", padding: "10px 0", background: EMBER_GRAD, color: "#fff", borderRadius: 15 }}>Class</span>
          <span style={{ flex: 1, textAlign: "center", padding: "10px 0", color: C.muted }}>School</span>
        </div>
        {ROWS.map((r, i) => {
          const rs = popIn(frame, fps, 30 + i * 6, 15);
          return (
            <div
              key={r.rk}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                padding: "13px 12px",
                borderRadius: 18,
                marginBottom: 6,
                background: r.me ? "rgba(255,106,44,0.1)" : "transparent",
                border: r.me ? "2px solid rgba(255,106,44,0.3)" : "2px solid transparent",
                transform: `translateX(${(1 - rs) * 140}px) scale(${r.me ? pulse : 1})`,
                opacity: Math.min(1, rs * 1.5),
                fontSize: 23,
                color: C.ink,
              }}
            >
              <span style={{ width: 26, fontWeight: 700, color: r.me ? C.emberDeep : C.faint }}>{r.rk}</span>
              <span
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  background: r.col,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: 19,
                  color: C.ink,
                }}
              >
                {r.i}
              </span>
              <span style={{ flex: 1, fontWeight: r.me ? 700 : 500 }}>{r.n}</span>
              <span style={{ fontWeight: r.me ? 700 : 500 }}>{r.h}</span>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

/* ================= SCENE 5 — end card ================= */
const EndCard: React.FC = () => {
  const { frame, fps } = useT();
  const mark = popIn(frame, fps, 4, 12);
  const word = popIn(frame, fps, 14, 16);
  const cta = popIn(frame, fps, 26, 13);
  const url = fade(frame, 38, 50);
  const breathe = 0.5 + 0.5 * Math.sin(frame / 16);

  return (
    <AbsoluteFill style={{ background: C.bg, alignItems: "center", justifyContent: "center" }}>
      <div
        style={{
          position: "absolute",
          width: 1000,
          height: 1000,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(255,106,44,${0.1 + 0.06 * breathe}), transparent 65%)`,
          filter: "blur(24px)",
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ transform: `scale(${mark})`, filter: "drop-shadow(0 24px 60px rgba(255,106,44,0.35))" }}>
          <FlameMark size={200} idPrefix="s5" />
        </div>
        <div
          style={{
            fontFamily: DISPLAY,
            fontSize: 120,
            fontWeight: 600,
            letterSpacing: -5,
            color: C.ink,
            marginTop: 28,
            transform: `translateY(${(1 - word) * 50}px)`,
            opacity: Math.min(1, word * 1.4),
          }}
        >
          himma
        </div>
        <div
          style={{
            marginTop: 44,
            transform: `scale(${cta})`,
            background: EMBER_GRAD,
            color: "#fff",
            fontFamily: DISPLAY,
            fontWeight: 600,
            fontSize: 40,
            padding: "26px 64px",
            borderRadius: 60,
            boxShadow: "0 24px 60px -20px rgba(255,106,44,0.65)",
          }}
        >
          Join the waitlist
        </div>
        <div style={{ fontFamily: BODY, fontSize: 30, fontWeight: 500, color: C.muted, marginTop: 30, opacity: url }}>
          dir-himma.vercel.app
        </div>
      </div>
    </AbsoluteFill>
  );
};

/* ================= MAIN ================= */
export const HimmaBrand: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: C.bg }}>
      <Sequence from={0} durationInFrames={96}>
        <LogoReveal />
      </Sequence>
      <Sequence from={96} durationInFrames={130}>
        <Tagline />
      </Sequence>
      <Sequence from={226} durationInFrames={216}>
        <Features />
      </Sequence>
      <Sequence from={442} durationInFrames={140}>
        <PhoneScene />
      </Sequence>
      <Sequence from={582} durationInFrames={78}>
        <EndCard />
      </Sequence>
    </AbsoluteFill>
  );
};
