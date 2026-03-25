"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface ParallaxDividerProps {
  image: string;
  text: string;
  subtext?: string;
}

export default function ParallaxDivider({
  image,
  text,
  subtext,
}: ParallaxDividerProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative h-[50vh] overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y }}>
        <Image
          src={image}
          alt=""
          fill
          className="object-cover scale-125"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-dark/70" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <h3 className="font-heading text-3xl md:text-5xl lg:text-6xl gold-gradient italic">
          {text}
        </h3>
        {subtext && (
          <p className="text-cream/50 mt-4 text-lg tracking-wider">{subtext}</p>
        )}
      </motion.div>
    </section>
  );
}
