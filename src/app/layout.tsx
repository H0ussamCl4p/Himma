import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const description =
  "The app that turns your study hours into a friendly competition with your class. Join the waitlist.";

export const metadata: Metadata = {
  metadataBase: new URL("https://forge-get.com"),
  title: "Forge — Forge ahead",
  description,
  applicationName: "Forge",
  keywords: ["Forge", "study", "leaderboard", "focus", "students", "university", "streaks"],
  icons: {
    icon: [{ url: "/forge-app-icon.svg", type: "image/svg+xml" }],
    shortcut: ["/forge-app-icon.svg"],
    apple: [{ url: "/forge-app-icon.svg" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Forge — Forge ahead",
    description,
    siteName: "Forge",
    images: [
      {
        url: "/forge-app-icon.svg",
        width: 1024,
        height: 1024,
        alt: "Forge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Forge — Forge ahead",
    description,
    images: ["/forge-app-icon.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
