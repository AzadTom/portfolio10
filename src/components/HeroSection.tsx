"use client";

import Image from "next/image";
import NavBar from "./NavBar";
import { SpinningText } from "./shadcn-space/spinning-text/spinning-text-02";
import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";

const title = ["Meeting", "users", "at", "their", "level", "of"];
const subtitle = ["familiarity", "&", "readiness."];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const HeroSection = () => {
  return (
    <section>
      <NavBar />

      <section className="pt-2 lg:pt-0">
        <div
          id="hero"
          className="flex flex-col-reverse gap-5 sm:flex-row sm:justify-between"
        >
          {/* Left Content */}
          <div className="flex flex-1 max-w-2xl flex-col items-start">
            <motion.h1
              variants={container}
              initial="hidden"
              animate="visible"
              className="max-w-3xl text-5xl font-bold leading-[0.95] tracking-[-0.06em] text-color2 sm:text-5xl lg:text-[4.2rem] xl:text-[4.9rem]"
            >
              {title.map((word, index) => (
                <motion.span
                  key={index}
                  variants={item}
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}

              <span className="mt-2 block text-color3">
                {subtitle.map((word, index) => (
                  <motion.span
                    key={index}
                    variants={item}
                    className="inline-block mr-3"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.9,
                duration: 0.6,
              }}
              className="mt-6 max-w-xl text-base leading-7 text-color1 sm:text-lg font-open-sans"
            >
              Designing intuitive experiences that align with users&apos;
              existing mental models and technical expertise while enabling
              gradual adoption of complex systems &amp; technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1.3,
                duration: 0.5,
              }}
              className="mt-10 w-fit self-start fixed right-5 bottom-5 z-50 sm:static"
            >
              <SpinningText text="Explore Work">
                <ArrowDown className="h-14 w-14 rounded-full bg-[#E6E9F0] p-4 text-slate-900" />
              </SpinningText>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="w-full flex-[0.5]"
          >
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
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;