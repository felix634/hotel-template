"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const stats = [
  { number: "1896", label: "Alapítás éve" },
  { number: "128", label: "Luxus szoba" },
  { number: "12", label: "Díj és elismerés" },
  { number: "98%", label: "Vendég elégedettség" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="rolunk" className="relative py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/3 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-gold text-xs tracking-[0.5em] uppercase">
            Történetünk
          </span>
          <h2 className="font-heading text-4xl md:text-6xl mt-4 mb-6">
            Több mint egy <span className="gold-gradient italic">szálloda</span>
          </h2>
          <div className="luxury-line" />
        </motion.div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
                alt="Hotel lobby"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 border border-gold/20" />
            </div>

            {/* Floating accent image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-8 -right-8 w-48 h-48 md:w-64 md:h-64 overflow-hidden border-4 border-dark shadow-2xl"
            >
              <Image
                src="https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                alt="Hotel detail"
                fill
                className="object-cover"
                sizes="256px"
              />
            </motion.div>

            {/* Gold corner accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-gold/30" />
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <p className="text-cream/70 text-lg leading-relaxed mb-6">
              A Grand Royale Hotel 1896 óta áll Budapest szívében, a Duna
              partján. Több mint egy évszázados történelmünk során mindig is a
              vendégszeretet és az elegancia szimbóluma voltunk.
            </p>
            <p className="text-cream/50 leading-relaxed mb-10">
              Épületünk ötvözi a századfordulós építészet lenyűgöző elemeit a
              kortárs luxus minden kényelmével. Minden szobánk egyedi
              tervezésű, minden részletében a tökéletességre törekedve. A
              Grand Royale nem csupán szállás — hanem egy élmény, amelyet
              vendégeink újra és újra keresnek.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                  className="border-l-2 border-gold/30 pl-4"
                >
                  <span className="font-heading text-3xl md:text-4xl gold-gradient">
                    {stat.number}
                  </span>
                  <p className="text-cream/50 text-sm mt-1 tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
