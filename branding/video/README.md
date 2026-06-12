# Himma — Brand Video (16:9)

A 22-second motion-design brand film (1920×1080, 30fps) built with
[Remotion](https://remotion.dev) — After-Effects-style animation defined in React,
rendered to a real MP4.

## Film structure

| Time | Scene | What happens |
| --- | --- | --- |
| 0–3.2s | **Logo reveal** | Dark screen → ember glow blooms, flame mark springs in, expanding ring, spark, floating particles → white flash |
| 3.2–7.5s | **Kinetic tagline** | "Dir **himma.**" slams in word-by-word (blur + spring), push-in, → ember panel wipe |
| 7.5–14.7s | **Feature cuts** | 4 fast statements: friends (avatars pop) → anti-cheat (dark) → climb your class → **87%** stat (dark, giant gradient number) |
| 14.7–19.4s | **Product moment** | Phone rises with springing leaderboard rows, "You" row pulses — "Your campus. Live." |
| 19.4–22s | **End card** | Mascot + wordmark + "Join the waitlist" pill + dir-himma.vercel.app, breathing glow |

## Render

```powershell
cd branding/video
npm install          # first time only
npm run render       # → out/himma-brand.mp4
```

## Iterate visually

```powershell
npm run studio       # opens Remotion Studio — live preview with a timeline scrubber
```

Edit `src/HimmaBrand.tsx` (scenes, timings, copy) and `src/brand.ts` (colors).
Frame math: 30fps — 1 second = 30 frames. Scene boundaries are set in the
`<Sequence from={...}>` blocks at the bottom of `HimmaBrand.tsx`.

## Social-media variants

The composition is 16:9. For other formats, add compositions in `src/Root.tsx`
(e.g. 1080×1080 square or 1080×1920 vertical for Reels/TikTok) and adapt layout
per scene. No audio track is included — add a music bed in CapCut/Premiere before
posting (trending audio performs better anyway).
