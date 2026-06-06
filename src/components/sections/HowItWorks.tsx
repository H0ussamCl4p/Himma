"use client";

import { useEffect, useRef } from "react";
import type { ComponentType } from "react";
import { APP_SCREENS } from "@/components/mockups/AppMockups";

type Step = {
  step: string;
  Screen: ComponentType;
  title: string;
  body: string;
  side: "left" | "right";
};

const STEPS: Step[] = [
  {
    step: "01",
    Screen: APP_SCREENS.home,
    title: "Start your focus",
    body: "Pick your subject, start the timer, and watch your ember light up while you study.",
    side: "left",
  },
  {
    step: "02",
    Screen: APP_SCREENS.leaderboard,
    title: "Climb the leaderboard",
    body: "Compare your hours with your class and friends, every week. Competition that pushes you, not stresses you.",
    side: "right",
  },
  {
    step: "03",
    Screen: APP_SCREENS.focus,
    title: "Zero cheating",
    body: "Built-in anti-cheat detection. A real leaderboard, or nothing. No fake scores, ever.",
    side: "left",
  },
];

export function HowItWorks() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = timelineRef.current;
    if (!root) return;

    const entries = Array.from(root.querySelectorAll<HTMLElement>(".tl-entry"));
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Reveal entries as they enter the viewport.
    if (prefersReduced) {
      entries.forEach((el) => el.classList.add("in"));
      if (fillRef.current) fillRef.current.style.height = "100%";
      return;
    }

    const io = new IntersectionObserver(
      (records) => {
        records.forEach((r) => {
          if (r.isIntersecting) {
            r.target.classList.add("in");
            io.unobserve(r.target);
          }
        });
      },
      { threshold: 0.35 }
    );
    entries.forEach((el) => io.observe(el));

    // Grow the spine's progress fill as the section scrolls past mid-viewport.
    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = root.getBoundingClientRect();
      const line = window.innerHeight * 0.5;
      const progress = (line - rect.top) / rect.height;
      const clamped = Math.max(0, Math.min(1, progress));
      if (fillRef.current) fillRef.current.style.height = `${clamped * 100}%`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="how">
      <h2 className="rv d2">How it works</h2>
      <p className="hsub rv d2">Three screens. One habit.</p>

      <div className="timeline" ref={timelineRef}>
        <div className="tl-spine">
          <div className="tl-fill" ref={fillRef} />
        </div>

        {STEPS.map(({ step, Screen, title, body, side }) => (
          <div className={`tl-entry ${side}`} key={title}>
            <span className="tl-node" aria-hidden="true" />
            <span className="tl-step" aria-hidden="true">
              {step}
            </span>
            <h4 className="tl-title">{title}</h4>
            <p className="tl-body">{body}</p>
            <div className="tl-stage">
              <div className="tl-phone3d" tabIndex={0}>
                <Screen />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
