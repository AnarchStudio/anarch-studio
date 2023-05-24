import Content from "./privacy-policy.mdx";

const PrivacyPolicy = () => {
  return (
    <section className="min-h-screen bg-black text-white">
      <main className="container m-auto px-2 py-16">
        <h1 className="py-20 font-attract text-5xl font-bold lg:text-8xl">
          Privacy Policy
        </h1>
        <article className="prose prose-invert m-auto  max-w-3xl">
          <Content />
        </article>
      </main>
    </section>
  );
};
export default PrivacyPolicy;
