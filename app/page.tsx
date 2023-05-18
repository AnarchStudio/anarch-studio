import Logo from "~/components/Logo";
import NextHeroIcon from "~/components/NextHeroIcon";

export default function Home() {
  return (
    <main>
      <section className="bg-black">
        <div className="container relative m-auto flex h-screen flex-col items-center justify-center gap-8">
          <div className="absolute left-0 w-[30rem] sm:w-[40rem] lg:w-[60rem] xl:w-[64rem]">
            <Logo />
          </div>
          <div className="inset-x-0 z-10 bg-black p-4">
            <p
              className={
                "text-2xl font-bold text-slate-200 sm:text-4xl lg:text-6xl"
              }
            >
              Astra Surge is a tight-knit collective of developers and designers
              driven by a shared passion for building potent software.
            </p>
          </div>
          <NextHeroIcon />
        </div>
      </section>
      <section className="min-h-screen bg-black" />
    </main>
  );
}
