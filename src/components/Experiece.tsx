'use client';

import { motion } from "motion/react";
import { BriefcaseBusiness } from "lucide-react";

type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  accentClass: string;
};

const experiences: ExperienceItem[] = [
  {
    company: "Involead Services Pvt. Ltd.",
    role: "Sr. UI/UX Designer",
    duration: "Dec 2023 - Present",
    accentClass: "shadow-[0_0_0_1px_rgba(59,130,246,0.18),8px_0_0_0_rgba(59,130,246,0.18)]",
  },
  {
    company: "DataMetricks Consultancy\nPvt. Ltd.",
    role: "UI/UX Designer",
    duration: "Jun 2022 - Dec 2023",
    accentClass: "shadow-[0_0_0_1px_rgba(191,219,254,0.9),8px_0_0_0_rgba(191,219,254,0.9)]",
  },
  {
    company: "Internships & Freelance\nProjects",
    role: "UI/UX Design | Brand Identity",
    duration: "2020 - 2024",
    accentClass: "shadow-[0_0_0_1px_rgba(191,219,254,0.9),8px_0_0_0_rgba(191,219,254,0.9)]",
  },
];

const Experiece = () => {
  return (
    <section className="mx-auto w-full max-w-[1100px] px-5 py-10 sm:px-6 lg:px-10">
      <div className="relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="relative"
        >
          <motion.span
            aria-hidden="true"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.08 }}
            viewport={{ once: true, amount: 0.25 }}
            className="absolute left-[1rem] top-4 h-[calc(100%-1rem)] w-px origin-top border-l border-dashed border-slate-300"
          />

          <div className="space-y-12 sm:space-y-16">
            {experiences.map((item, index) => (
              <div key={item.company} className="grid grid-cols-[2rem_1fr] items-start">
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.08, x: 2 }}
                  transition={{
                    delay: index * 0.12 + 0.05,
                    duration: 0.35,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.25 }}
                  className="relative z-10 mt-6 flex h-5 w-5 items-center justify-center justify-self-center rounded-full border border-slate-300 bg-white text-[#4585CA] shadow-sm"
                >
                  <BriefcaseBusiness className="h-3 w-3" strokeWidth={2.2} />
                </motion.div>

                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{
                    y: -4,
                    rotate: index === 0 ? -0.4 : 0,
                    boxShadow: "0 18px 32px rgba(15, 23, 42, 0.12)",
                  }}
                  transition={{
                    delay: index * 0.12,
                    duration: 0.45,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.25 }}
                  className={[
                    "group relative rounded-[1.35rem] border border-slate-300 bg-white px-5 py-5 text-color2 shadow-[0_10px_22px_rgba(15,23,42,0.08)] sm:px-6 sm:py-6",
                    item.accentClass,
                    index === 0 ? "rotate-[-1.2deg]" : "rotate-0",
                    index === 1 ? "rotate-[0.15deg]" : "",
                    index === 2 ? "rotate-[0.25deg]" : "",
                    "transition-shadow duration-300",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <h3 className="max-w-[18ch] whitespace-pre-line text-[1.05rem] font-semibold leading-[1.15] tracking-[-0.03em] text-[#52627A] transition-colors duration-300 group-hover:text-[#3F5573] sm:text-[1.3rem]">
                    {item.company}
                  </h3>

                  <p className="mt-4 text-[0.95rem] font-semibold text-[#1E4ED8] transition-transform duration-300 group-hover:translate-x-0.5 sm:text-[1.05rem]">
                    {item.role}
                  </p>

                  <p className="mt-2 text-sm italic text-slate-900 transition-opacity duration-300 group-hover:opacity-90 sm:text-[0.96rem]">
                    {item.duration}
                  </p>
                </motion.article>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experiece;
