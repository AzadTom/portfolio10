'use client';

import "swiper/css";
import "swiper/css/scrollbar";

import { motion } from "motion/react";
import { Scrollbar, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { LucideIcon } from "lucide-react";

type WorkflowCardData = {
  title: string;
  Icon: LucideIcon;
  bullets: string[];
};

type WorkflowScrollbarSwiperProps = {
  cards: WorkflowCardData[];
};

const WorkflowScrollbarSwiper = ({ cards }: WorkflowScrollbarSwiperProps) => {
  return (
    <div className="min-w-0 w-full overflow-hidden md:hidden">
      <Swiper
        spaceBetween={12}
        slidesPerView={1}
        centeredSlides={false}
        watchOverflow={false}
        mousewheel={{ forceToAxis: true }}
        scrollbar={{ draggable: true, hide: false }}
        modules={[Scrollbar, Mousewheel]}
        className="workflow-scrollbar-swiper"
        breakpoints={{
          360: {
            slidesPerView: 1.2,
            spaceBetween: 12,
          },
          480: {
            slidesPerView: 1.2,
            spaceBetween: 14,
          },
          640: {
            slidesPerView: 1.2,
            spaceBetween: 16,
          },
        }}
      >
        {cards.map(({ title, Icon, bullets }) => (
          <SwiperSlide key={title} className="h-auto">
            <motion.article
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="min-h-[15rem] rounded-[1.4rem] bg-[#FBE7F2] p-4 text-[#EC407A] shadow-[0_1px_0_rgba(15,23,42,0.04)]"
            >
              <div className="flex items-center gap-2 font-open-sans text-base font-medium">
                <Icon className="h-5 w-5 shrink-0" strokeWidth={2} />
                <span>{title}</span>
              </div>

              <ul className="mt-4 space-y-2 pl-1 font-open-sans text-sm leading-6">
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#EC407A]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .workflow-scrollbar-swiper {
          width: 100%;
          padding-bottom: 1.25rem;
        }

        .workflow-scrollbar-swiper .swiper-scrollbar {
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 4px;
          background: rgba(69, 133, 202, 0.12);
          border-radius: 9999px;
        }

        .workflow-scrollbar-swiper .swiper-scrollbar-drag {
          background: #4585ca;
          border-radius: 9999px;
        }
      `}</style>
    </div>
  );
};

export default WorkflowScrollbarSwiper;
