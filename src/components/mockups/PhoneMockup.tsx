import { HeroMascot } from "@/components/brand/Mascot";

type LeaderRow = {
  rank: number;
  initial: string;
  color: string;
  name: string;
  hours: string;
  me?: boolean;
};

const ROWS: LeaderRow[] = [
  { rank: 1, initial: "Y", color: "#5BE3C0", name: "Younes", hours: "14h 20" },
  { rank: 2, initial: "S", color: "#C58BD1", name: "Salma", hours: "12h 05" },
  { rank: 3, initial: "M", color: "#FFB23E", name: "Mehdi", hours: "10h 40" },
  { rank: 7, initial: "H", color: "#FF6A2C", name: "You", hours: "9h 05", me: true },
];

/** The hero's leaderboard phone-mockup preview, with the bobbing mascot above it. */
export function PhoneMockup() {
  return (
    <div className="visual rv d3">
      <div className="glow" />
      <div className="stage">
        <div className="mascot">
          <HeroMascot id="mk-hero" />
        </div>
        <div className="phone">
          <div className="pbar">
          <span>9:41</span>
          <span>▮▮▮</span>
        </div>
        <div className="ptitle">Leaderboard</div>
        <div className="psub">CSCC 3A · this week</div>
        <div className="tabs">
          <span>Friends</span>
          <span className="on">Class</span>
          <span>School</span>
        </div>
        <div className="banner">⏳ Finals sprint · 9 days left</div>
        {ROWS.map((r) => (
          <div className={r.me ? "lrow me" : "lrow"} key={r.rank}>
            <span className="rk">{r.rank}</span>
            <span className="av" style={{ background: r.color }}>
              {r.initial}
            </span>
            <span className="nm">{r.name}</span>
            <span>{r.hours}</span>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
