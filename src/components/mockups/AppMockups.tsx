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
import { HeroMascot, SparkleMascot } from "@/components/brand/Mascot";

/* Shared light phone-screen pieces for the three app mockups. ------------- */

const TEXT = "#1a1714";
const MUTED = "var(--muted)";
const FAINT = "#9a958c";
const LINE = "var(--line)";
const SURF = "var(--surface-2)";
const EMBER = "var(--ember)";
const EMBER2 = "var(--ember-2)";
const EMBER_DEEP = "var(--ember-deep)";
const HONEY = "var(--honey)";
const ON_EMBER = "#fff";
const AV_INK = "#1a1714";
const EMBER_GRAD = "linear-gradient(180deg, var(--ember-2), var(--ember))";

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
        color: MUTED,
        marginBottom: 12,
      }}
    >
      <span>9:41</span>
      <span aria-hidden="true">▮▮▮</span>
    </div>
  );
}

function NavBar({ active }: { active: "home" | "trophy" | "user" }) {
  const color = (k: string) => (active === k ? EMBER : FAINT);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        borderTop: `1px solid ${LINE}`,
        paddingTop: 10,
        marginTop: 14,
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

const chip = (active: boolean): CSSProperties => ({
  fontSize: 11,
  border: active ? "1px solid rgba(255,106,44,0.3)" : `1px solid ${LINE}`,
  color: active ? EMBER_DEEP : MUTED,
  background: active ? "rgba(255,106,44,0.1)" : SURF,
  padding: "4px 10px",
  borderRadius: 14,
});

const avMini = (bg: string): CSSProperties => ({
  width: 20,
  height: 20,
  borderRadius: "50%",
  background: bg,
  color: AV_INK,
  fontSize: 10,
  fontWeight: 700,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

/* Screen 1 — home / ready to focus. ------------------------------------- */
function HomeScreen() {
  return (
    <Frame label="Forge home screen">
      <StatusBar />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <span style={{ fontSize: 13, color: TEXT }}>Merhba, ssi Rayane</span>
        <span
          style={{
            fontSize: 12,
            fontWeight: 600,
            background: EMBER_GRAD,
            color: ON_EMBER,
            padding: "3px 9px",
            borderRadius: 20,
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          <FlameIcon size={12} /> 7
        </span>
      </div>
      <div style={{ display: "flex", justifyContent: "center", margin: "6px 0 8px" }}>
        <HeroMascot id="mk-home" width={58} height={73} />
      </div>
      <div style={{ textAlign: "center", fontSize: 15, fontWeight: 600, color: TEXT, marginBottom: 13 }}>
        Ready to lock in?
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center", marginBottom: 14 }}>
        <span style={chip(true)}>Networks</span>
        <span style={chip(false)}>Crypto</span>
        <span style={chip(false)}>Math</span>
      </div>
      <div
        style={{
          background: EMBER_GRAD,
          color: ON_EMBER,
          textAlign: "center",
          fontSize: 14,
          fontWeight: 600,
          padding: 12,
          borderRadius: 16,
          marginBottom: 12,
          boxShadow: "0 8px 20px -8px rgba(255,106,44,0.55)",
        }}
      >
        Start focusing
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: MUTED }}>
        <span style={{ display: "inline-flex" }}>
          <span style={{ width: 16, height: 16, borderRadius: "50%", background: HONEY, border: `1.5px solid #fff` }} />
          <span style={{ width: 16, height: 16, borderRadius: "50%", background: "#5be3c0", border: `1.5px solid #fff`, marginLeft: -6 }} />
          <span style={{ width: 16, height: 16, borderRadius: "50%", background: "#c58bd1", border: `1.5px solid #fff`, marginLeft: -6 }} />
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
    <Frame label="Forge focus session screen">
      <StatusBar />
      <div style={{ textAlign: "center", fontSize: 12, color: MUTED, marginBottom: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}>
        <BookIcon size={13} /> Networks
      </div>
      <div style={{ display: "flex", justifyContent: "center", margin: "6px 0 16px", position: "relative" }}>
        <span style={{ position: "absolute", width: 96, height: 96, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,106,44,0.25), transparent 65%)", top: -12 }} />
        <SparkleMascot id="mk-focus" width={62} height={78} />
      </div>
      <div style={{ textAlign: "center", fontFamily: "var(--display)", fontSize: 32, fontWeight: 600, color: TEXT, letterSpacing: 1, marginBottom: 4 }}>
        48:12
      </div>
      <div style={{ textAlign: "center", fontSize: 11, color: MUTED, marginBottom: 14 }}>
        Locked in — keep going
      </div>
      <div style={{ height: 6, background: SURF, borderRadius: 6, marginBottom: 18, overflow: "hidden" }}>
        <div style={{ width: "64%", height: "100%", background: "linear-gradient(90deg, var(--honey), var(--ember))", borderRadius: 6 }} />
      </div>
      <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
        <div style={{ flex: 1, textAlign: "center", fontSize: 13, color: TEXT, border: `1px solid ${LINE}`, background: SURF, padding: 10, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}>
          <PauseIcon size={13} /> Pause
        </div>
        <div style={{ flex: 1, textAlign: "center", fontSize: 13, color: ON_EMBER, background: EMBER_GRAD, padding: 10, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 5, fontWeight: 600 }}>
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
    { rk: "1", initial: "Y", color: "#5be3c0", name: "Younes", hours: "14h 20", me: false },
    { rk: "2", initial: "S", color: "#c58bd1", name: "Salma", hours: "12h 05", me: false },
    { rk: "3", initial: "M", color: HONEY, name: "Mehdi", hours: "10h 40", me: false },
    { rk: "7", initial: "H", color: EMBER, name: "You", hours: "9h 05", me: true },
  ];
  return (
    <Frame label="Forge leaderboard screen">
      <StatusBar />
      <div style={{ fontFamily: "var(--display)", fontSize: 16, fontWeight: 600, color: TEXT }}>Leaderboard</div>
      <div style={{ fontSize: 11, color: FAINT, marginBottom: 11 }}>CSCC 3A · this week</div>
      <div style={{ display: "flex", gap: 4, marginBottom: 11, fontSize: 11, background: SURF, padding: 3, borderRadius: 13 }}>
        <span style={{ flex: 1, textAlign: "center", color: MUTED, padding: "5px 0" }}>Friends</span>
        <span style={{ flex: 1, textAlign: "center", color: ON_EMBER, background: EMBER_GRAD, padding: "5px 0", borderRadius: 10, fontWeight: 600 }}>Class</span>
        <span style={{ flex: 1, textAlign: "center", color: MUTED, padding: "5px 0" }}>School</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, background: "rgba(255,178,62,0.14)", border: "1px solid rgba(255,178,62,0.3)", color: EMBER_DEEP, padding: "7px 9px", borderRadius: 10, marginBottom: 12 }}>
        <CalendarIcon size={13} /> Finals sprint · 9 days left
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12, color: TEXT }}>
        {rows.map((r) => (
          <div
            key={r.rk}
            style={
              r.me
                ? { display: "flex", alignItems: "center", gap: 8, background: "rgba(255,106,44,0.1)", border: "1px solid rgba(255,106,44,0.28)", padding: "7px 6px", borderRadius: 11 }
                : { display: "flex", alignItems: "center", gap: 8, padding: "7px 6px" }
            }
          >
            <span style={{ width: 16, color: r.me ? EMBER_DEEP : FAINT, fontWeight: 600 }}>{r.rk}</span>
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
