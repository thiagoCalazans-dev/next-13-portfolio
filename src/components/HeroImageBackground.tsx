"use client";

import { motion } from "framer-motion";

export function HeroImageBackground() {
  return (
    <motion.div
      className="w-[21rem] h-[25rem] rounded-2xl  bg-brand-primary"
      animate={{
        scale: [1, 1],
        rotate: [0, -10],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeatDelay: 1,
      }}
    />
  );
}
