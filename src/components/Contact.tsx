"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Cím",
    value: "1051 Budapest, Széchenyi István tér 5-6.",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+36 1 234 5678",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "info@grandroyale.hu",
  },
  {
    icon: Clock,
    label: "Recepció",
    value: "0-24 óráig",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="kapcsolat" className="relative py-32">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px shimmer-border" />

      <div ref={ref} className="max-w-7xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-gold text-xs tracking-[0.5em] uppercase">
            Kapcsolat & Foglalás
          </span>
          <h2 className="font-heading text-4xl md:text-6xl mt-4 mb-6">
            Foglaljon <span className="gold-gradient italic">most</span>
          </h2>
          <div className="luxury-line" />
          <p className="text-cream/50 mt-6 max-w-2xl mx-auto">
            Készséggel állunk rendelkezésére. Töltse ki az alábbi űrlapot, vagy
            vegye fel velünk a kapcsolatot közvetlenül.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-widest text-gold/70 uppercase mb-2">
                    Vezetéknév
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-cream/15 py-3 text-cream focus:border-gold outline-none transition-colors duration-300 placeholder:text-cream/20"
                    placeholder="Kovács"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest text-gold/70 uppercase mb-2">
                    Keresztnév
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-cream/15 py-3 text-cream focus:border-gold outline-none transition-colors duration-300 placeholder:text-cream/20"
                    placeholder="Anna"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-widest text-gold/70 uppercase mb-2">
                    Érkezés
                  </label>
                  <input
                    type="date"
                    className="w-full bg-transparent border-b border-cream/15 py-3 text-cream focus:border-gold outline-none transition-colors duration-300 [color-scheme:dark]"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest text-gold/70 uppercase mb-2">
                    Távozás
                  </label>
                  <input
                    type="date"
                    className="w-full bg-transparent border-b border-cream/15 py-3 text-cream focus:border-gold outline-none transition-colors duration-300 [color-scheme:dark]"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-widest text-gold/70 uppercase mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-cream/15 py-3 text-cream focus:border-gold outline-none transition-colors duration-300 placeholder:text-cream/20"
                    placeholder="kovacs.anna@email.hu"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest text-gold/70 uppercase mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-transparent border-b border-cream/15 py-3 text-cream focus:border-gold outline-none transition-colors duration-300 placeholder:text-cream/20"
                    placeholder="+36 30 123 4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-widest text-gold/70 uppercase mb-2">
                  Szoba típusa
                </label>
                <select className="w-full bg-transparent border-b border-cream/15 py-3 text-cream focus:border-gold outline-none transition-colors duration-300 [&>option]:bg-dark [&>option]:text-cream">
                  <option value="">Válasszon szobát...</option>
                  <option value="classic">Klasszikus Szoba - 45.000 Ft/éj</option>
                  <option value="deluxe">Deluxe Lakosztály - 75.000 Ft/éj</option>
                  <option value="romantic">Romantikus Suite - 95.000 Ft/éj</option>
                  <option value="presidential">Elnöki Lakosztály - 150.000 Ft/éj</option>
                </select>
              </div>

              <div>
                <label className="block text-xs tracking-widest text-gold/70 uppercase mb-2">
                  Megjegyzés
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-cream/15 py-3 text-cream focus:border-gold outline-none transition-colors duration-300 resize-none placeholder:text-cream/20"
                  placeholder="Különleges kívánságok, megjegyzések..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="group w-full py-4 bg-gold text-dark font-semibold text-sm tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-gold-light transition-colors duration-300 mt-4"
              >
                <span>Foglalás Küldése</span>
                <Send
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 space-y-8"
          >
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="flex items-start gap-4 p-4 border border-gold/5 hover:border-gold/20 transition-colors duration-300"
                >
                  <div className="w-10 h-10 flex items-center justify-center border border-gold/20 flex-shrink-0">
                    <Icon size={18} className="text-gold/70" />
                  </div>
                  <div>
                    <span className="text-gold/60 text-xs tracking-widest uppercase">
                      {info.label}
                    </span>
                    <p className="text-cream/80 mt-1">{info.value}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* Map placeholder */}
            <div className="relative aspect-[4/3] bg-dark-lighter border border-gold/10 overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} className="text-gold/30 mx-auto mb-3" />
                  <p className="text-cream/30 text-sm tracking-wider">
                    Interaktív Térkép
                  </p>
                  <p className="text-cream/20 text-xs mt-1">
                    Budapest, Széchenyi tér
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/20 transition-all duration-500" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
