'use client'
import { motion } from "framer-motion";
import React, { ReactNode } from "react";
interface FramerProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
}
const Framer = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  className = ""
}: FramerProps) => {
  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 }
  };

  return (
    <div>
      <motion.div
        initial={{
          opacity: 0,
          ...directions[direction]
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0
        }}
        transition={{
          duration: duration,
          delay: delay,
          ease: "easeOut"
        }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Framer;
