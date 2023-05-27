import Logo from "~/components/Logo";
import Content from "./privacy-policy.mdx";

const PrivacyPolicy = () => {
  return (
    <section className="bg-black py-16  text-indigo-50">
      <main className="container relative  m-auto min-h-screen  px-4">
        <div className="absolute right-0  w-[30rem] sm:w-[40rem] lg:w-[60rem] xl:w-[64rem]">
          <Logo />
        </div>
        <h1 className="relative z-10 py-20 font-attract text-5xl font-bold lg:text-8xl">
          Privacy Policy
        </h1>

        <article className="prose prose-xl relative z-10 m-auto max-w-4xl bg-white/90 px-4 py-16 md:px-8">
          <Content />
        </article>
      </main>
    </section>
  );
};

export default PrivacyPolicy;
