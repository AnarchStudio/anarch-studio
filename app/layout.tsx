import "./globals.css";
import { Urbanist, Manrope } from "next/font/google";
import { Metadata } from "next";
import Script from "next/script";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Astra Surge",
  description:
    "Astra Surge is a tight-knit collective of developers and designers driven by a shared passion for building potent open-source software.",
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${urbanist.variable}`}>
      <body>
        {children}
        <Script id="icarus" data-domain="astrasurge.com" src="https://icarus.astrasurge.com/js/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
