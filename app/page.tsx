import Logo from "~/components/Logo";
import NextHeroButton from "~/components/NextHeroButton";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="sticky top-0 h-screen bg-black text-white">
        <div className="container relative m-auto flex h-screen flex-col items-center justify-center">
          <div className="absolute left-0 w-[30rem] sm:w-[40rem] lg:w-[60rem] xl:w-[64rem]">
            <Logo className=" transform-gpu drop-shadow-[0px_0px_128px_#0d469b] " />
          </div>
          <div className="inset-x-0 animate-appear-up overflow-hidden  p-4 opacity-0">
            <p className="font-attract text-4xl font-extrabold  sm:text-5xl lg:text-8xl">
              Passion-Powered Collective Breathing Life into Software.
            </p>
          </div>
          <div>
            <NextHeroButton />
          </div>
        </div>
      </section>

      <section className="sticky top-0 min-h-screen bg-indigo-50  py-16 text-black">
        <div className="container m-auto px-4">
          <div className="flex flex-row gap-4 py-32" id="projects">
            <div className="w-4 bg-[#06f]" />
            <span className="block  font-attract text-6xl  font-bold lg:text-8xl">
              Projects
            </span>
          </div>
          <div className="flex flex-col items-center gap-8 lg:flex-row">
            <div className="flex flex-1 flex-col gap-6 text-slate-900">
              <span className="flex flex-initial gap-2 text-3xl font-bold lg:text-5xl">
                Sword of Time
              </span>
              <p className="text-xl font-thin before:inline-block  lg:text-2xl">
                &quot;Sword of Time&quot; is a pixel-style adventure game
                developed by Astra Surge. Explore the Nethoria continent, meet
                characters, battle foes, and uncover clues about your forgotten
                identity to reveal your incredible destiny. Will you reclaim
                your lost memories in this unforgettable adventure?
              </p>
            </div>
            <div className=" order-first flex-1 lg:order-none">
              <Image
                alt="Sword of Time"
                src="/images/sword_of_time.png"
                width={1920}
                height={1080}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
