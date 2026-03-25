"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Waves,
  UtensilsCrossed,
  Dumbbell,
  Wine,
  Car,
  Gem,
  TreePalm,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Waves,
    title: "Spa & Wellness",
    desc: "Világszínvonalú spa központunk masszázzsal, szaunával és medencével várja.",
  },
  {
    icon: UtensilsCrossed,
    title: "Fine Dining",
    desc: "Michelin-csillagos éttermünkben a magyar és nemzetközi konyha remekei.",
  },
  {
    icon: Dumbbell,
    title: "Fitness Központ",
    desc: "Korszerű edzőterem személyi edzővel, 0-24 nyitva tartással.",
  },
  {
    icon: Wine,
    title: "Rooftop Bár",
    desc: "Koktélok és borok a tetőteraszon, lenyűgöző panorámával Budapestre.",
  },
  {
    icon: Car,
    title: "Limuzin Szolgálat",
    desc: "Személyes sofőrszolgálat repülőtéri transzferrel és városnézéssel.",
  },
  {
    icon: Gem,
    title: "Concierge",
    desc: "24 órás concierge szolgálat, egyedi élmények és programok szervezése.",
  },
  {
    icon: TreePalm,
    title: "Kertkapcsolat",
    desc: "Belső kert oázis a város közepén, nyugodt pihenésre és meditációra.",
  },
  {
    icon: Sparkles,
    title: "Esküvők & Események",
    desc: "Mesés helyszín esküvőkre, gálákra és céges rendezvényekre.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="szolgaltatasok"
      className="relative py-32 bg-dark-light"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-gold) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-gold text-xs tracking-[0.5em] uppercase">
            Prémium Kényelem
          </span>
          <h2 className="font-heading text-4xl md:text-6xl mt-4 mb-6">
            Szolgáltatás<span className="gold-gradient italic">aink</span>
          </h2>
          <div className="luxury-line" />
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative p-8 bg-dark/50 border border-gold/5 hover:border-gold/25 transition-all duration-500 overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 flex items-center justify-center border border-gold/20 mb-6 group-hover:border-gold/50 transition-colors duration-300">
                    <Icon
                      size={24}
                      className="text-gold/70 group-hover:text-gold transition-colors duration-300"
                    />
                  </div>
                  <h3 className="font-heading text-xl mb-3 text-cream group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-cream/40 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[40px] border-r-[40px] border-b-gold/0 border-r-gold/0 group-hover:border-b-gold/10 group-hover:border-r-gold/10 transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
