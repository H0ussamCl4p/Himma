# Himma — Brand Kit

Premium light + neon-orange identity for **Himma**, the study-focus & campus-leaderboard
app for Moroccan students. همة = drive, ambition, fire.

> Source of truth for the live site styles: [`src/app/globals.css`](../src/app/globals.css).
> Figma file: [Himma — Brand & Product Design](https://www.figma.com/design/t2gVSsJ1sNiXeLqra7NTFQ)

## Folder contents

| Path | What |
| --- | --- |
| `logo/himma-mascot.svg` | Flame mascot **with face** — hero moments, empty states, success screens |
| `logo/himma-mark.svg` | Clean flame **without face** — avatars, watermarks, favicons, small sizes |
| `logo/himma-app-icon.svg` | App icon, light tile (current production icon) |
| `logo/himma-app-icon-dark.svg` | App icon, dark tile (dark contexts, alt stores) |
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
- Wordmark: lowercase `himma` in Space Grotesk 600. The period in taglines ("Dir himma.") is intentional.

## Voice

- Darija-first, confident, warm: "Dir himma.", "Merhba", "Ready to lock in?"
- Competitive but friendly — pushes you, never stresses you.
- Honest: "Real scores only. Zero fake hours, ever."

## Mascot

The flame mascot is the brand. Gradient body (`#FF9A5C → #FF6A2C → #E2521A`),
honey core (`#FFE7A8 → #FFB23E`), dark face strokes `#1A0F08`.
Use the **faceless mark** below 32px — the face stops reading at small sizes.
