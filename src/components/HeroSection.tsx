import Image from "next/image";
import NavBar from "./NavBar";
import { SpinningText } from "./shadcn-space/spinning-text/spinning-text-02";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="">
      <NavBar />
      <section className="pt-2 lg:pt-0">
        <div
          id="hero"
          className="flex flex-col-reverse sm:flex-row sm:justify-between gap-5"
        >
          <div className="flex-1 max-w-2xl flex flex-col items-start">
            <h1 className="max-w-3xl text-5xl font-bold leading-[0.95] tracking-[-0.06em] text-color2 sm:text-5xl lg:text-[4.2rem] xl:text-[4.9rem]">
              Meeting users at their level of{" "}
              <span className="block text-color3">
                familiarity &amp; readiness.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-color1 sm:text-lg font-open-sans">
              Designing intuitive experiences that align with users&apos;
              existing mental models and technical expertise while enabling
              gradual adoption of complex systems &amp; technologies.
            </p>
            <div className="mt-10 w-fit self-start fixed right-5 z-50 bottom-5 sm:block sm:static">
              <SpinningText text="Explore Work">
              <ArrowDown className="h-14 w-14 text-slate-900 bg-[#E6E9F0] rounded-full p-4" />
              </SpinningText>
            </div>
          </div>

          <div className="w-full flex-[0.5]">
            <article className="relative aspect-video">
              <Image
                src="/img/hero_img.svg"
                alt="Hero photo"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 760px"
                className="object-contain object-center"
              />
            </article>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
