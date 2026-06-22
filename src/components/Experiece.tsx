"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from "motion/react";
import { BriefcaseBusiness } from "lucide-react";

type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
};

const experiences: ExperienceItem[] = [
  {
    company: "Involead Services Pvt. Ltd.",
    role: "Sr. UI/UX Designer",
    duration: "Dec 2023 - Present",
  },
  {
    company: "DataMetrics Consultancy\nPvt. Ltd.",
    role: "UI/UX Designer",
    duration: "Jun 2022 - Dec 2023",
  },
  {
    company: "Internships & Freelance\nProjects",
    role: "UI/UX Design | Brand Identity",
    duration: "2020 - 2024",
  },
];

function TimelineIcon({
  scrollYProgress,
  index,
}: {
  scrollYProgress: MotionValue<number>;
  index: number;
}) {
  const start = index / experiences.length;
  const end = (index + 0.25) / experiences.length;

  const backgroundColor = useTransform(
    scrollYProgress,
    [start, end],
    ["#fff", "#4585CA"]
  );

  const borderColor = useTransform(
    scrollYProgress,
    [start, end],
    ["#CBD5E1", "#4585CA"]
  );

  const color = useTransform(
    scrollYProgress,
    [start, end],
    ["#94A3B8", "#fff"]
  );

  return (
    <motion.div
      style={{
        backgroundColor,
        borderColor,
        color,
      }}
      className="flex h-8 w-8 items-center justify-center rounded-full border shadow-sm"
    >
      <BriefcaseBusiness className="h-4 w-4" />
    </motion.div>
  );
}

export default function Experience() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 90%"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="mx-auto w-full max-w-[1100px] px-5 py-16">
      <div ref={sectionRef} className="relative">
        {/* Timeline */}
        <div className="absolute left-0 top-0 bottom-0 w-8">
          {/* top curve */}
          <div className="absolute left-[15px] top-0 h-8 w-8 rounded-bl-full border-b border-l border-dashed border-slate-300" />

          {/* gray line */}
          <div className="absolute left-[15px] top-8 bottom-8 border-l border-dashed border-slate-300" />

          {/* blue progress line */}
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute left-[15px] top-8 bottom-8 origin-top border-l-2 border-[#4585CA]"
          />

          {/* bottom curve */}
          <div className="absolute bottom-0 left-[15px] h-8 w-8 rounded-tl-full border-l border-t border-dashed border-slate-300" />
        </div>

        <div className="space-y-16">
          {experiences.map((item, index) => (
            <div key={item.company} className="relative pl-16">
              {/* Timeline Icon */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20">
                <TimelineIcon
                  scrollYProgress={scrollYProgress}
                  index={index}
                />
              </div>

              {/* Main Card */}
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4 }}
                className={`
                  group relative isolate rounded-[28px]
                  border border-slate-300 bg-white
                  px-6 py-6
                  shadow-[0_10px_25px_rgba(15,23,42,0.08)]
                  ${
                    index === 0
                      ? "-rotate-[1deg]"
                      : index === 1
                      ? "rotate-[0.3deg]"
                      : "rotate-[0.5deg]"
                  }
                `}
              >
                {/* Overlay Card */}
                <motion.div
                  initial={{
                    x: 8,
                    y: 8,
                    rotate:
                      index === 0
                        ? 2
                        : index === 1
                        ? -1.5
                        : 1.2,
                  }}
                  whileHover={{
                    x: 12,
                    y: 12,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 -z-10 rounded-[28px] bg-[#dcecff]"
                />

                <h3 className="max-w-[18ch] whitespace-pre-line text-[1.15rem] font-semibold leading-tight tracking-[-0.03em] text-[#52627A] sm:text-[1.3rem]">
                  {item.company}
                </h3>

                <p className="mt-4 text-[0.95rem] font-semibold text-[#1E4ED8] sm:text-[1.05rem]">
                  {item.role}
                </p>

                <p className="mt-2 text-sm italic text-slate-800">
                  {item.duration}
                </p>
              </motion.article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}