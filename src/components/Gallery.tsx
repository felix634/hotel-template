"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  {
    src: "https://images.pexels.com/photos/1488327/pexels-photo-1488327.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    alt: "Hotel étterem",
    label: "Étterem",
    span: "md:row-span-2",
  },
  {
    src: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    alt: "Medence",
    label: "Medence & Spa",
    span: "md:col-span-1",
  },
  {
    src: "https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    alt: "Hotel bár",
    label: "Rooftop Bár",
    span: "md:col-span-1",
  },
  {
    src: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    alt: "Lobby",
    label: "Lobby",
    span: "md:row-span-2",
  },
  {
    src: "https://images.pexels.com/photos/3201763/pexels-photo-3201763.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    alt: "Konferencia terem",
    label: "Rendezvény",
    span: "md:col-span-1",
  },
  {
    src: "https://images.pexels.com/photos/3771823/pexels-photo-3771823.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    alt: "Spa kezelés",
    label: "Wellness",
    span: "md:col-span-1",
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="galeria" className="relative py-32">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-gold text-xs tracking-[0.5em] uppercase">
            Inspiráció
          </span>
          <h2 className="font-heading text-4xl md:text-6xl mt-4 mb-6">
            A Grand Royale <span className="gold-gradient italic">Világa</span>
          </h2>
          <div className="luxury-line" />
        </motion.div>

        {/* Masonry gallery */}
        <div className="grid md:grid-cols-3 gap-4 auto-rows-[250px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative overflow-hidden ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover grayscale-[50%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.2s]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/10 transition-all duration-500" />

              {/* Label overlay */}
              <div className="absolute inset-0 flex items-end p-6">
                <motion.div
                  className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
                >
                  <div className="w-8 h-px bg-gold mb-2" />
                  <span className="text-cream text-sm tracking-widest uppercase font-heading">
                    {img.label}
                  </span>
                </motion.div>
              </div>

              {/* Border on hover */}
              <div className="absolute inset-2 border border-gold/0 group-hover:border-gold/30 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
