import Logo from "~/components/Logo";
import NextHeroButton from "~/components/NextHeroButton";

export default function Home() {
  return (
    <main>
      <section className="bg-black">
        <div className="container relative m-auto flex h-screen flex-col items-center justify-center gap-8">
          <div className="absolute left-0 w-[30rem] sm:w-[40rem] lg:w-[60rem] xl:w-[64rem]">
            <Logo />
          </div>
          <div className="inset-x-0 z-10 animate-appear-up overflow-hidden bg-black p-4 opacity-0">
            <p
              className={
                "font-attract text-2xl font-bold text-slate-200 sm:text-4xl lg:text-6xl"
              }
            >
              Astra Surge is a tight-knit collective of developers and designers
              driven by a shared passion for building potent software.
            </p>
          </div>
          <NextHeroButton />
        </div>
      </section>
      <section className="min-h-screen bg-black" />
    </main>
  );
}
