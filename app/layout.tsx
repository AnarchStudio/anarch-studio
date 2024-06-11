import "./globals.css";
import { Bodoni_Moda, Manrope } from "next/font/google";
import { Metadata } from "next";
import Script from "next/script";
import Logo from "~/components/Logo";
import { RxExternalLink } from "react-icons/rx";
import Link from "next/link";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const BodniModa = Bodoni_Moda({
  variable: "--font-bodoni-moda",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Astra Surge",
  description:
    "Astra Surge: Passion-Powered Collective Breathing Life into Software.",
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
    <html
      lang="en"
      className={`${BodniModa.variable} ${manrope.variable}  scroll-smooth`}
    >
      <body>
        <header className="fixed z-20 w-full animate-[cloud-down_1s_.5s_ease-in-out_forwards] bg-black text-white opacity-0 backdrop-blur-sm">
          <div className="container m-auto flex h-16 items-center justify-between p-4">
            <Link href="/" className="flex items-center gap-2 text-2xl">
              <div className="inline-block w-8">
                <Logo />
              </div>
              <span className="font-black">Astra Surge</span>
            </Link>
            <div className="flex gap-2 font-bold lg:gap-4">
              <Link
                className="link-underline"
                href="mailto:contact@astrasurge.com"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </header>

        {children}

        <footer className="bg-black text-white">
          <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 lg:flex-row">
            <div className="flex gap-8 font-thin">
              <a
                aria-label="Go to Astra Surge's google play page"
                href="https://play.google.com/store/apps/dev?id=5460117098987354469"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
              >
                <RxExternalLink />
                GOOGLE PLAY
              </a>
              <a
                aria-label="Go to Astra Surge's itch.io page"
                href="https://astrasurge.itch.io/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
              >
                <RxExternalLink />
                ITCH.IO
              </a>
              <a
                aria-label="Email"
                href="mailto:contact@astrasurge.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
              >
                <RxExternalLink />
                EMAIL
              </a>
            </div>
            <div className="flex flex-col items-center gap-2 font-thin text-slate-400 lg:flex-row lg:gap-6">
              <div>
                <span className="mr-2">@ {new Date().getFullYear()}</span>
                <span className="link-underline">ASTRA SURGE. </span>ALL RIGHTS
                RESERVED.
              </div>
              <Link href="/privacy-policy" className="link-underline">
                PRIVACY POLICY
              </Link>
            </div>
          </div>
        </footer>
        <Script
          id="icarus"
          data-domain="astrasurge.com"
          src="https://icarus.astrasurge.com/js/script.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
