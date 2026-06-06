import type { CSSProperties, ReactNode } from "react";
import {
  HomeIcon,
  TrophyIcon,
  UserIcon,
  FlameIcon,
  BookIcon,
  CalendarIcon,
  PauseIcon,
  StopIcon,
} from "@/components/brand/Icons";

/* Shared phone-frame pieces for the three app-screen mockups. ------------- */

const COCOA = "var(--cocoa)";
const CREAM = "var(--cream)";
const MUTED = "var(--muted)";
const LINE = "var(--line)";
const EMBER = "var(--ember)";
const HONEY = "var(--honey)";

function Frame({ children, label }: { children: ReactNode; label: string }) {
  return (
    <div className="mscreen" role="img" aria-label={label}>
      {children}
    </div>
  );
}

function StatusBar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: 11,
        color: COCOA,
        marginBottom: 12,
      }}
    >
      <span>9:41</span>
      <span aria-hidden="true">▮▮▮</span>
    </div>
  );
}

function NavBar({ active }: { active: "home" | "trophy" | "user" }) {
  const color = (k: string) => (active === k ? EMBER : MUTED);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        borderTop: `1px solid ${LINE}`,
        paddingTop: 9,
        marginTop: 14,
        color: MUTED,
      }}
    >
      <span style={{ color: color("home"), display: "inline-flex" }}>
        <HomeIcon />
      </span>
      <span style={{ color: color("trophy"), display: "inline-flex" }}>
        <TrophyIcon />
      </span>
      <span style={{ color: color("user"), display: "inline-flex" }}>
        <UserIcon />
      </span>
    </div>
  );
}

/* The smiling mascot face (open eyes). */
function MascotFace({ width = 58 }: { width?: number }) {
  return (
    <svg width={width} height={(width * 72) / 58} viewBox="0 0 96 120" aria-hidden="true">
      <path d="M48 16C58 34 80 46 80 76C80 98 66 110 48 110C30 110 16 98 16 76C16 48 36 40 48 16Z" fill="#FB6F4C" />
      <path d="M48 58C55 68 63 74 63 84C63 95 57 101 48 101C39 101 33 95 33 84C33 74 41 68 48 58Z" fill="#FFC24B" />
      <circle cx="40" cy="72" r="4.5" fill="#2C2622" />
      <circle cx="56" cy="72" r="4.5" fill="#2C2622" />
      <circle cx="41.6" cy="70.4" r="1.4" fill="#fff" />
      <circle cx="57.6" cy="70.4" r="1.4" fill="#fff" />
      <path d="M41 82Q48 89 55 82" fill="none" stroke="#2C2622" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/* The blissfully-focused mascot face (closed eyes). */
function MascotFocused({ width = 62 }: { width?: number }) {
  return (
    <svg width={width} height={(width * 78) / 62} viewBox="0 0 96 120" aria-hidden="true">
      <path d="M48 16C58 34 80 46 80 76C80 98 66 110 48 110C30 110 16 98 16 76C16 48 36 40 48 16Z" fill="#FB6F4C" />
      <path d="M48 58C55 68 63 74 63 84C63 95 57 101 48 101C39 101 33 95 33 84C33 74 41 68 48 58Z" fill="#FFC24B" />
      <path d="M35 73Q40 68 45 73" fill="none" stroke="#2C2622" strokeWidth="3" strokeLinecap="round" />
      <path d="M51 73Q56 68 61 73" fill="none" stroke="#2C2622" strokeWidth="3" strokeLinecap="round" />
      <path d="M42 82Q48 89 54 82" fill="none" stroke="#2C2622" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

const chip = (active: boolean): CSSProperties => ({
  fontSize: 11,
  border: "1px solid #E6D9C8",
  color: active ? COCOA : MUTED,
  padding: "4px 9px",
  borderRadius: 14,
  background: "#fff",
});

const avMini = (bg: string): CSSProperties => ({
  width: 20,
  height: 20,
  borderRadius: "50%",
  background: bg,
  color: "#fff",
  fontSize: 10,
  fontWeight: 700,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

/* Screen 1 — home / ready to focus. ------------------------------------- */
function HomeScreen() {
  return (
    <Frame label="Himma home screen">
      <StatusBar />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <span style={{ fontSize: 13, color: COCOA }}>Merhba,ssi rayane</span>
        <span
          style={{
            fontSize: 12,
            background: EMBER,
            color: CREAM,
            padding: "3px 8px",
            borderRadius: 20,
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          <FlameIcon size={12} /> 7
        </span>
      </div>
      <div style={{ display: "flex", justifyContent: "center", margin: "4px 0 8px" }}>
        <MascotFace />
      </div>
      <div style={{ textAlign: "center", fontSize: 15, fontWeight: 600, color: COCOA, marginBottom: 12 }}>
        Ready to lock in?
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center", marginBottom: 14 }}>
        <span style={chip(true)}>Networks</span>
        <span style={chip(false)}>Crypto</span>
        <span style={chip(false)}>Math</span>
      </div>
      <div
        style={{
          background: EMBER,
          color: CREAM,
          textAlign: "center",
          fontSize: 14,
          fontWeight: 600,
          padding: 11,
          borderRadius: 16,
          marginBottom: 12,
        }}
      >
        Start focusing
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: MUTED }}>
        <span style={{ display: "inline-flex" }}>
          <span style={{ width: 16, height: 16, borderRadius: "50%", background: HONEY, border: `1.5px solid ${CREAM}` }} />
          <span style={{ width: 16, height: 16, borderRadius: "50%", background: "#7FB3A0", border: `1.5px solid ${CREAM}`, marginLeft: -6 }} />
          <span style={{ width: 16, height: 16, borderRadius: "50%", background: "#C58BD1", border: `1.5px solid ${CREAM}`, marginLeft: -6 }} />
        </span>
        3 friends studying now
      </div>
      <NavBar active="home" />
    </Frame>
  );
}

/* Screen 2 — active focus session. -------------------------------------- */
function FocusScreen() {
  return (
    <Frame label="Himma focus session screen">
      <StatusBar />
      <div style={{ textAlign: "center", fontSize: 12, color: MUTED, marginBottom: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}>
        <BookIcon size={13} /> Networks
      </div>
      <div style={{ display: "flex", justifyContent: "center", margin: "6px 0 16px", position: "relative" }}>
        <span style={{ position: "absolute", width: 96, height: 96, borderRadius: "50%", background: HONEY, opacity: 0.25, top: -12 }} />
        <MascotFocused />
      </div>
      <div style={{ textAlign: "center", fontSize: 30, fontWeight: 600, color: COCOA, letterSpacing: 1, marginBottom: 4 }}>
        48:12
      </div>
      <div style={{ textAlign: "center", fontSize: 11, color: MUTED, marginBottom: 14 }}>
        Locked in — keep going
      </div>
      <div style={{ height: 6, background: LINE, borderRadius: 6, marginBottom: 18, overflow: "hidden" }}>
        <div style={{ width: "64%", height: "100%", background: EMBER, borderRadius: 6 }} />
      </div>
      <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
        <div style={{ flex: 1, textAlign: "center", fontSize: 13, color: COCOA, border: "1px solid #E6D9C8", background: "#fff", padding: 9, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}>
          <PauseIcon size={13} /> Pause
        </div>
        <div style={{ flex: 1, textAlign: "center", fontSize: 13, color: CREAM, background: COCOA, padding: 9, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}>
          <StopIcon size={13} /> Stop
        </div>
      </div>
      <NavBar active="home" />
    </Frame>
  );
}

/* Screen 3 — campus leaderboard. ---------------------------------------- */
function LeaderboardScreen() {
  const rows = [
    { rk: "1", initial: "Y", color: "#7FB3A0", name: "Younes", hours: "14h 20", me: false },
    { rk: "2", initial: "S", color: "#C58BD1", name: "Salma", hours: "12h 05", me: false },
    { rk: "3", initial: "M", color: "#E0A24B", name: "Mehdi", hours: "10h 40", me: false },
    { rk: "7", initial: "H", color: "#FB6F4C", name: "You", hours: "9h 05", me: true },
  ];
  return (
    <Frame label="Himma leaderboard screen">
      <StatusBar />
      <div style={{ fontSize: 15, fontWeight: 600, color: COCOA }}>Leaderboard</div>
      <div style={{ fontSize: 11, color: MUTED, marginBottom: 10 }}>CSCC 3A · this week</div>
      <div style={{ display: "flex", gap: 4, marginBottom: 10, fontSize: 11 }}>
        <span style={{ flex: 1, textAlign: "center", color: MUTED, padding: "5px 0" }}>Friends</span>
        <span style={{ flex: 1, textAlign: "center", color: CREAM, background: EMBER, padding: "5px 0", borderRadius: 12 }}>Class</span>
        <span style={{ flex: 1, textAlign: "center", color: MUTED, padding: "5px 0" }}>School</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, background: "#FFF0D6", color: "#8A5B00", padding: "6px 8px", borderRadius: 10, marginBottom: 12 }}>
        <CalendarIcon size={13} /> Finals sprint · 9 days left
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 7, fontSize: 12, color: COCOA }}>
        {rows.map((r) => (
          <div
            key={r.rk}
            style={
              r.me
                ? { display: "flex", alignItems: "center", gap: 8, background: "#FCDFD3", padding: "6px", borderRadius: 10, margin: "0 -4px" }
                : { display: "flex", alignItems: "center", gap: 8 }
            }
          >
            <span style={{ width: 16, color: r.me ? EMBER : MUTED }}>{r.rk}</span>
            <span style={avMini(r.color)}>{r.initial}</span>
            <span style={{ flex: 1, fontWeight: r.me ? 700 : 400 }}>{r.name}</span>
            <span style={{ fontWeight: r.me ? 700 : 400 }}>{r.hours}</span>
          </div>
        ))}
      </div>
      <NavBar active="trophy" />
    </Frame>
  );
}

export const APP_SCREENS = {
  home: HomeScreen,
  focus: FocusScreen,
  leaderboard: LeaderboardScreen,
};
