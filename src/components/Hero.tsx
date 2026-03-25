"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0" style={{ scale }}>
        <Image
          src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Grand Royale Hotel"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/60 to-dark" />
      </motion.div>

      {/* Floating gold particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out ${
                Math.random() * 3
              }s infinite`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6"
        >
          <div className="flex items-center gap-4 justify-center mb-4">
            <div className="w-16 h-px bg-gold/60" />
            <span className="text-gold text-xs tracking-[0.5em] uppercase">
              Budapest szívében
            </span>
            <div className="w-16 h-px bg-gold/60" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tight mb-6 drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
        >
          <span className="block gold-gradient">Grand</span>
          <span className="block text-cream mt-2">Royale</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-cream/60 text-lg md:text-xl max-w-xl mb-10 font-light leading-relaxed"
        >
          Ahol a hagyomány és a modern elegancia találkozik.
          <br />
          Felejthetetlen pillanatok várják.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#szobak"
            className="group relative px-10 py-4 bg-gold text-dark font-semibold text-sm tracking-widest uppercase overflow-hidden transition-all duration-300"
          >
            <span className="relative z-10">Szobáink Felfedezése</span>
            <div className="absolute inset-0 bg-gold-light translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </a>
          <a
            href="#rolunk"
            className="px-10 py-4 border border-cream/20 text-cream text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-all duration-300"
          >
            Történetünk
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-gold/40 text-[10px] tracking-[0.4em] uppercase">
            Görgessen
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-gold/60 to-transparent"
          />
        </motion.div>
      </motion.div>

      {/* Side decorations */}
      <motion.div
        style={{ y, opacity }}
        className="absolute top-1/2 left-8 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3"
      >
        <div className="w-px h-20 bg-gold/20" />
        <span className="text-gold/30 text-[10px] tracking-[0.3em] [writing-mode:vertical-rl] rotate-180">
          EST. 1896
        </span>
        <div className="w-px h-20 bg-gold/20" />
      </motion.div>

      <motion.div
        style={{ y, opacity }}
        className="absolute top-1/2 right-8 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3"
      >
        <div className="w-px h-20 bg-gold/20" />
        <span className="text-gold/30 text-[10px] tracking-[0.3em] [writing-mode:vertical-rl]">
          ★★★★★
        </span>
        <div className="w-px h-20 bg-gold/20" />
      </motion.div>
    </section>
  );
}
