"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ParallaxScrollProps = {
  images: string[];
  className?: string;
};

export const ParallaxScroll = ({ images, className }: ParallaxScrollProps) => {
  const gridRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const scaleFirst = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const bgColor = useTransform(scrollYProgress, [0, 1], ["#ffecd2", "#fcb69f"]);

  const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <motion.div
      style={{ background: bgColor }}
      className={cn("  w-full", className)}
      ref={gridRef}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-20 px-10">
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst, scale: scaleFirst }}
              whileHover={{ scale: 1.15 }}
              key={"grid-1" + idx}
              className="glow"
            >
              <img
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg"
                alt={`thumbnail-${idx}`}
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div
              style={{ y: translateSecond }}
              animate={{
                rotate: [0, 2, -2, 0],
                transition: {
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 1,
                },
              }}
              whileHover={{ scale: 1.15 }}
              key={"grid-2" + idx}
              className="glow"
            >
              <img
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg"
                alt={`thumbnail-${idx}`}
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div
              style={{ y: translateThird }}
              whileHover={{ scale: 1.15 }}
              key={"grid-3" + idx}
              className="glow"
            >
              <img
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg"
                alt={`thumbnail-${idx}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
