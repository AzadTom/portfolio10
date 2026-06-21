'use client';

import { motion } from "motion/react";
import type { CSSProperties } from "react";
import { useMemo, useState } from "react";

import styles from "./ExploreCircularText.module.css";

type HoverBehavior = "slowDown" | "speedUp" | "pause" | "goBonkers";

type ExploreCircularTextProps = {
  text: string;
  spinDuration?: number;
  onHover?: HoverBehavior;
  className?: string;
};

type HoverConfig = {
  duration: number;
  scale: number;
  paused?: boolean;
};

const getHoveredConfig = (
  onHover: HoverBehavior | undefined,
  spinDuration: number,
) : HoverConfig => {
  switch (onHover) {
    case "slowDown":
      return { duration: spinDuration * 2, scale: 1 };
    case "speedUp":
      return { duration: spinDuration / 4, scale: 1 };
    case "pause":
      return { duration: spinDuration, scale: 1, paused: true };
    case "goBonkers":
      return { duration: spinDuration / 20, scale: 0.92 };
    default:
      return { duration: spinDuration, scale: 1 };
  }
};

const ExploreCircularText = ({
  text,
  spinDuration = 20,
  onHover = "speedUp",
  className = "",
}: ExploreCircularTextProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const letters = useMemo(() => Array.from(text), [text]);
  const hoveredConfig = getHoveredConfig(onHover, spinDuration);
  const activeDuration = isHovered ? hoveredConfig.duration : spinDuration;
  const activeScale = isHovered ? hoveredConfig.scale : 1;
  const playState = isHovered && hoveredConfig.paused ? "paused" : "running";

  return (
    <motion.div
      aria-label={text}
      className={`${styles.circularText} ${className}`.trim()}
      style={
        {
          "--spin-duration": `${activeDuration}s`,
          "--spin-play-state": playState,
        } as CSSProperties
      }
      animate={{ scale: activeScale }}
      transition={{ type: "spring", damping: 18, stiffness: 240 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="img"
    >
      <span className={styles.ring}>
        {letters.map((letter, index) => {
          const angle = (360 / letters.length) * index;

          return (
            <span
              key={`${letter}-${index}`}
              className={styles.letter}
              style={{
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(calc(var(--ring-radius) * -1)) rotate(${-angle}deg)`,
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          );
        })}
      </span>
    </motion.div>
  );
};

export default ExploreCircularText;
