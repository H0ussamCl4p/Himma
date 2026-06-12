# Forge — Brand Kit

Premium light + neon-orange identity for **Forge**, the study-focus & campus-leaderboard
app. Forge your focus, forge your streak, forge ahead. 🔥

> Source of truth for the live site styles: [`src/app/globals.css`](../src/app/globals.css).
> Figma file: [Forge — Brand & Product Design](https://www.figma.com/design/t2gVSsJ1sNiXeLqra7NTFQ)
> (Formerly "Himma" — renamed June 2026 for a globally pronounceable brand.)

## Folder contents

| Path | What |
| --- | --- |
| `logo/forge-mascot.svg` | Ember mascot **with face** — hero moments, empty states, success screens |
| `logo/forge-mark.svg` | Clean ember **without face** — avatars, watermarks, favicons, small sizes |
| `logo/forge-app-icon.svg` | App icon, light tile (current production icon) |
| `logo/forge-app-icon-dark.svg` | App icon, dark tile (dark contexts, alt stores) |
| `tokens.css` | Copy-paste CSS design tokens |
| `video/` | Remotion motion-design brand video project (16:9 MP4 for social) |

## Color

| Token | Hex | Use |
| --- | --- | --- |
| Background | `#FCFBF9` | Warm off-white page background |
| Surface | `#FFFFFF` | Cards, phone frames |
| Surface 2 | `#F6F4F0` | Recessed rails, chips |
| Line | `#ECE7DF` | Borders |
| Text | `#1A1714` | Primary text (warm near-black) |
| Muted | `#6B6760` | Secondary text |
| **Ember** | `#FF6A2C` | **The brand signal — single hero accent** |
| Ember bright | `#FF8A4C` | Gradient top stop |
| Ember deep | `#E2521A` | Accent text on light, hovers |
| Honey | `#FFB23E` | Streaks, warm banners (secondary only) |
| Mint | `#1FAE8F` | "Live now" status only — never decorative |

**Rules**
- Ember orange is the only hero accent. If everything is orange, nothing is.
- CTA fills use the ember gradient (`#FF8A4C → #FF6A2C`) with **white** text.
- On light surfaces use **soft layered shadows**, not glow.
- Avatar initials use dark text (`#1A1714`) on colored circles.

## Typography

- **Display / headings:** Space Grotesk (600–700), tight letter-spacing (−1 to −2.5px on large sizes)
- **Body / UI:** Inter (400–600)
- Wordmark: lowercase `forge` in Space Grotesk 600. Brand line "Forge ahead." — the period is intentional.

## Voice

- Confident, warm, motivating: "Forge ahead.", "Ready to lock in?", "Keep your streak alive."
- Competitive but friendly — pushes you, never stresses you.
- Honest: "Real scores only. Zero fake hours, ever."

## Mascot

The mascot is a **glowing molten ember** — a hot coal struck off the anvil.
Body gradient (`#FF8A4C → #E85620 → #B83C12`), white-hot radial core
(`#FFF3D0 → #FFC95E → #FFB23E`), dark face `#1A0F08`, rising sparks + a soft
ember halo. The nav mark drops the halo/sparks and the faceless `forge-mark.svg`
is used below ~32px — both keep it crisp at small sizes.
