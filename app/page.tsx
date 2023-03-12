import Image from "next/image";
import logo from "~/public/logo.png";
import { FiGithub, FiMail } from "react-icons/fi";

export default function Home() {
  return (
    <main>
      <section className="flex h-screen justify-center flex-col items-center gap-8 bg-black">
        <Image
          src={logo}
          alt={"Anarch Studio Logo"}
          className={"w-96"}
          priority
          quality={100}
        />
        <div className="text-center">
          <h1
            className={
              "font-black text-5xl md:text-6xl font-attract text-slate-50  drop-shadow-[6px_-6px_#e71d36]"
            }
          >
            Anarch Studio
          </h1>
          <span className={"font-bold text-2xl md:text-3xl text-slate-200"}>
            Free to create, power to innovate.
          </span>
        </div>
        <div className="flex gap-8 text-3xl text-slate-50 drop-shadow-[2px_-2px_#e71d36]">
          <a
            aria-label="Go to Anarch Studio's gitHub page"
            href="https://github.com/AnarchStudio"
            target="_blank"
          >
            <FiGithub />
          </a>
          <a
            aria-label="Email"
            href="mailto://opensource@anarch.studio"
            target="_blank"
          >
            <FiMail />
          </a>
        </div>
      </section>
    </main>
  );
}
