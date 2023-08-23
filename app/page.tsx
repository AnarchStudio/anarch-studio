import Logo from "~/components/Logo";
import NextHeroButton from "~/components/NextHeroButton";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="sticky top-0 h-screen bg-black text-white backdrop-blur">
        <div className="container relative m-auto flex h-screen flex-col items-center justify-center ">
          <div className="absolute left-0 w-[30rem] sm:w-[40rem] lg:w-[60rem] xl:w-[64rem]">
            <Logo className=" transform-gpu drop-shadow-[0px_0px_128px_#0d469b]" />
          </div>
          <div className="inset-x-0 animate-appear-up overflow-hidden  p-4 opacity-0 ">
            <p className="font-attract text-6xl font-extrabold  lg:text-8xl">
              Passion-Powered Collective Breathing Life into Software.
            </p>
          </div>
          <div>
            <NextHeroButton />
          </div>
        </div>
      </section>

      <section className="sticky top-0 min-h-screen overflow-hidden  bg-white py-16 text-black">
        <div className="absolute right-0 top-0 -z-10 w-full -translate-y-1/2  md:w-2/3  lg:w-2/3 lg:-translate-y-3/4 ">
          <Image
            src="/dream_snap_home_hero_cloud.jpg"
            alt="cloud"
            unoptimized
            width={2048}
            height={2048}
            className="h-full w-full object-cover"
          />
        </div>
        <div className=" absolute bottom-0 right-0 -z-10 w-full translate-y-1/2 md:w-2/3 md:translate-y-1/3 lg:w-1/2 ">
          <Image
            src="/dream_snap_home_hero_girl.jpg"
            alt="Dream Snap Hero"
            unoptimized
            width={2048}
            height={2048}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="container relative m-auto flex h-screen max-h-[70rem] min-h-[60rem] items-center  px-4">
          <div className="z-10 flex flex-col gap-8 md:gap-16">
            <div className="relative">
              <div className="relative z-10 h-16 w-16 lg:h-28 lg:w-28">
                <Image
                  sizes="100px"
                  src="/dream_snap_logo.png"
                  fill
                  alt="Dream Snap Logo"
                  unoptimized
                />
              </div>
              <div className="absolute left-8 top-0 h-16 w-16 rounded-full lg:left-14 lg:h-28 lg:w-28">
                <Image
                  src="/dream_snap_icon_shadow.png"
                  alt="Dream Snap Shadow"
                  unoptimized
                  fill
                />
              </div>
              <span className="absolute left-28 top-3 font-attract text-4xl font-light md:text-5xl lg:left-48 lg:top-6 lg:text-7xl">
                DREAM SNAP
              </span>
            </div>
            <h1 className="max-w-4xl font-attract text-6xl font-semibold text-black lg:text-7xl">
              Interpret, track and analyze your dreams
            </h1>
            <div className="inline-flex gap-6 font-crap">
              <Link
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.astrasurge.dreams&utm_source=astra_surge_official_website&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
              >
                <Image
                  width={200}
                  height={60}
                  unoptimized
                  alt="Get it on Google Play"
                  src="/get_it_on_google_play.png"
                />
              </Link>
              <Link
                href="https://www.producthunt.com/posts/dream-snap?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-dream&#0045;snap"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=410889&theme=neutral"
                  alt="Dream&#0032;Snap - Log&#0032;dreams&#0044;&#0032;uncover&#0032;their&#0032;meanings&#0044;&#0032;and&#0032;explore&#0032;patterns | Product Hunt"
                  unoptimized
                  height={60}
                  width={280}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
