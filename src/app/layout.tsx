import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fredoka",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

const description =
  "The app that turns your study hours into a friendly competition with your class. Join the waitlist.";

export const metadata: Metadata = {
  metadataBase: new URL("https://himma.app"),
  title: "Himma — Dir himma",
  description,
  applicationName: "Himma",
  keywords: ["Himma", "Moroccan students", "study", "leaderboard", "focus", "university"],
  icons: {
    icon: [{ url: "/himma-app-icon.svg", type: "image/svg+xml" }],
    shortcut: ["/himma-app-icon.svg"],
    apple: [{ url: "/himma-app-icon.svg" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Himma — Dir himma",
    description,
    siteName: "Himma",
    images: [
      {
        url: "/himma-app-icon.svg",
        width: 1024,
        height: 1024,
        alt: "Himma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Himma — Dir himma",
    description,
    images: ["/himma-app-icon.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable}`}>
      <body>{children}</body>
    </html>
  );
}
