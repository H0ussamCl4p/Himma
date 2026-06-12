import type { ComponentType } from "react";
import {
  UsersIcon,
  ShieldIcon,
  TrophyIcon,
  FlameIcon,
  ChartIcon,
  GlobeIcon,
} from "@/components/brand/Icons";

type Feature = {
  Icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
  body: string;
};

const FEATURES: Feature[] = [
  {
    Icon: UsersIcon,
    title: "Study with your friends",
    body: "See who's locked in right now. When your friends are studying, you study too — no one wants to be the one who quit early.",
  },
  {
    Icon: ShieldIcon,
    title: "Real scores only",
    body: "Built-in anti-cheat watches every session. The leaderboard is real, or it's nothing. Zero fake hours, ever.",
  },
  {
    Icon: TrophyIcon,
    title: "Climb your class",
    body: "A live weekly leaderboard for your friends, your class, and your whole school. Competition that pushes you, not stresses you.",
  },
  {
    Icon: FlameIcon,
    title: "Keep your streak alive",
    body: "Light up your ember every day. Once you're on a streak, breaking it hurts more than studying — that's the whole point.",
  },
  {
    Icon: ChartIcon,
    title: "Track every subject",
    body: "Anatomy, Networks, Pharmacology, Math — whatever your major, see exactly where your hours go and which subject you've been avoiding before finals.",
  },
  {
    Icon: GlobeIcon,
    title: "Made for Morocco",
    body: "Darija-first and built around your campus, your classes, and your finals calendar. Finally, an app that gets it.",
  },
];

export function WhyForge() {
  return (
    <section className="why">
      <div className="why-head">
        <div className="eyebrow rv">
          <b />
          Why Forge
        </div>
        <h2 className="rv d2">Studying alone is the hard way.</h2>
        <p className="why-sub rv d2">
          Forge turns your study hours into a game you play with your friends — so showing
          up stops being a fight with yourself.
        </p>
      </div>

      <div className="proof rv d3">
        <div className="proof-stat">87%</div>
        <p className="proof-copy">
          Students with study accountability partners spend <b>87% more time</b> actually
          studying than they do alone.
          <span className="proof-src">Stanford research on social accountability</span>
        </p>
      </div>

      <div className="feat-grid">
        {FEATURES.map(({ Icon, title, body }) => (
          <div className="feat-card" key={title}>
            <span className="feat-ico" aria-hidden="true">
              <Icon size={22} />
            </span>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
