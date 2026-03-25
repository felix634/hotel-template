"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Kovács Mária",
    role: "Üzletasszony, Budapest",
    text: "A Grand Royale Hotel minden alkalommal felülmúlja a várakozásaimat. A személyzet figyelmes, a szobák gyönyörűek, és a spa élmény páratlan. Ez az egyetlen hely, ahol igazán el tudok lazulni.",
    rating: 5,
  },
  {
    name: "Thomas & Sarah Miller",
    role: "Nászutasok, London",
    text: "A Romantikus Suite-ben töltöttük a nászutunkat, és álomszerű volt. A Duna-parti kilátás, a pezsgős reggeli, és a személyes concierge szolgálat — minden tökéletes volt.",
    rating: 5,
  },
  {
    name: "Dr. Szabó Péter",
    role: "Visszatérő vendég",
    text: "Immár 8 éve rendszeresen visszatérek a Grand Royale-ba. Az étterem minősége változatlanul kiváló, a wellness részleg pedig a város legjobb rejtett kincse. Mindig otthon érzem magam.",
    rating: 5,
  },
  {
    name: "Elena Rossi",
    role: "Étteremkritikus, Milánó",
    text: "A fine dining étterem megérdemli a nemzetközi elismerést. A séf kreativitása és a magyar hagyományok modern interpretációja lenyűgöző. Kötelező útcél minden ínyenc számára.",
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section
      id="velemenyek"
      className="relative py-32 bg-dark-light overflow-hidden"
    >
      {/* Large quote decoration */}
      <div className="absolute top-20 left-10 text-gold/5">
        <Quote size={300} strokeWidth={0.5} />
      </div>

      <div ref={ref} className="max-w-5xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-gold text-xs tracking-[0.5em] uppercase">
            Vendégeink Mondták
          </span>
          <h2 className="font-heading text-4xl md:text-6xl mt-4 mb-6">
            Élmények <span className="gold-gradient italic">szavakban</span>
          </h2>
          <div className="luxury-line" />
        </motion.div>

        {/* Testimonial slider */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-8">
                {Array.from({ length: testimonials[current].rating }).map(
                  (_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-gold fill-gold"
                    />
                  )
                )}
              </div>

              {/* Quote text */}
              <p className="font-heading text-xl md:text-2xl lg:text-3xl text-cream/80 leading-relaxed mb-10 italic">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>

              {/* Author */}
              <div>
                <div className="w-12 h-px bg-gold mx-auto mb-4" />
                <p className="text-gold font-heading text-lg">
                  {testimonials[current].name}
                </p>
                <p className="text-cream/40 text-sm mt-1 tracking-wider">
                  {testimonials[current].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prev}
              className="w-12 h-12 border border-gold/20 flex items-center justify-center text-gold/50 hover:text-gold hover:border-gold/50 transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1 transition-all duration-500 ${
                    i === current
                      ? "w-8 bg-gold"
                      : "w-2 bg-gold/20 hover:bg-gold/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 border border-gold/20 flex items-center justify-center text-gold/50 hover:text-gold hover:border-gold/50 transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
