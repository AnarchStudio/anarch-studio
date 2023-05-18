import "./globals.css";
import { Urbanist, Manrope } from "next/font/google";
import { Metadata } from "next";
import Script from "next/script";
import Logo from "~/components/Logo";
import { FiGithub, FiMail } from "react-icons/fi";
import { FaItchIo } from "react-icons/fa";

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
        <header className=" fixed z-20 w-full bg-black">
          <div className="container m-auto flex h-24 items-center justify-between p-4 font-attract text-3xl">
            <div className="flex gap-4 text-center">
              <div className="inline-block w-8">
                <Logo />
              </div>
              <span className="font-bold drop-shadow-[4px_-4px_#06f]">
                Astra Surge
              </span>
            </div>
            <div className="flex gap-4 text-2xl text-slate-50 drop-shadow-[3px_-3px_#06f]">
              <a
                aria-label="Go to Astra Surge's gitHub page"
                href="https://github.com/AstraSurge"
                target="_blank"
              >
                <FiGithub />
              </a>
              <a
                aria-label="Go to Astra Surge's itch.io page"
                href="https://astrasurge.itch.io/"
                target="_blank"
              >
                <FaItchIo />
              </a>
              <a
                aria-label="Email"
                href="mailto:contact@astrasurge.com"
                target="_blank"
              >
                <FiMail />
              </a>
            </div>
          </div>
        </header>
        {children}
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
