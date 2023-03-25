import Image from "next/image";
import logo from "~/public/logo.png";
import { FiGithub, FiMail } from "react-icons/fi";

export default function Home() {
  return (
    <main>
      <section className="flex h-screen justify-center flex-col items-center gap-8 bg-black">
        <Image
          src={logo}
          alt={"Astra Surge Logo"}
          className={"w-80 md:w-96"}
          priority
          quality={100}
        />
        <div className="text-center p-2">
          <h1
            className={
              "font-black text-5xl md:text-6xl font-attract text-slate-50  drop-shadow-[6px_-6px_#e71d36] mb-4"
            }
          >
            Astra Surge
          </h1>
          <p
            className={
              "font-bold text-2xl md:text-3xl max-w-3xl text-slate-200"
            }
          >
            Astra Surge is a tight-knit collective of developers and designers
            driven by a shared passion for building potent open-source software.
          </p>
        </div>
        <div className="flex gap-8 text-3xl text-slate-50 drop-shadow-[2px_-2px_#e71d36]">
          <a
            aria-label="Go to Astra Surge's gitHub page"
            href="https://github.com/AstraSurge"
            target="_blank"
          >
            <FiGithub />
          </a>
          <a
            aria-label="Email"
            href="mailto:contact@astrasurge.com"
            target="_blank"
          >
            <FiMail />
          </a>
        </div>
      </section>
    </main>
  );
}
