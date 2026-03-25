"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import { Maximize2, Users, Wifi, Coffee } from "lucide-react";

const rooms = [
  {
    name: "Klasszikus Szoba",
    description:
      "Elegáns berendezéssel és panorámás kilátással a belvárosra. A tökéletes választás a városnéző utazóknak.",
    price: "45.000",
    image:
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    size: "35 m²",
    guests: "2 fő",
    features: ["King méretű ágy", "Városi panoráma", "Márvány fürdő"],
  },
  {
    name: "Deluxe Lakosztály",
    description:
      "Tágas élettér külön hálóval és nappali résszel. Dunai panoráma és prémium felszereltség vár Önre.",
    price: "75.000",
    image:
      "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    size: "65 m²",
    guests: "3 fő",
    features: ["Különálló nappali", "Duna panoráma", "Jacuzzi kád"],
  },
  {
    name: "Elnöki Lakosztály",
    description:
      "A luxus netovábbja — privát terasszal, személyi butlerrel és a hotel legexkluzívabb szolgáltatásaival.",
    price: "150.000",
    image:
      "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    size: "120 m²",
    guests: "4 fő",
    features: ["Privát terasz", "Butler szolgálat", "Saját szauna"],
  },
  {
    name: "Romantikus Suite",
    description:
      "Pároknak tervezett, meghitt lakosztály rózsaszirom dekorációval, pezsgővel és kilátással a Duna felett.",
    price: "95.000",
    image:
      "https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    size: "55 m²",
    guests: "2 fő",
    features: ["Baldachinos ágy", "Privát erkély", "Pezsgő csomag"],
  },
];

export default function Rooms() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-45%"]);

  return (
    <section id="szobak" ref={sectionRef} className="relative py-32">
      {/* Section header */}
      <div ref={headerRef} className="max-w-7xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-gold text-xs tracking-[0.5em] uppercase">
            Szálláshelyek
          </span>
          <h2 className="font-heading text-4xl md:text-6xl mt-4 mb-6">
            Exkluzív <span className="gold-gradient italic">Szobáink</span>
          </h2>
          <div className="luxury-line" />
          <p className="text-cream/50 mt-6 max-w-2xl mx-auto">
            Minden szobánk egyedi élményt kínál, a klasszikus eleganciától a
            modern luxusig. Válassza ki az Önhöz leginkább illő szállást.
          </p>
        </motion.div>
      </div>

      {/* Horizontal scroll rooms */}
      <div ref={scrollRef} className="relative h-[200vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-8 pl-12">
            {rooms.map((room, i) => (
              <motion.div
                key={room.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="group relative w-[85vw] md:w-[45vw] lg:w-[35vw] flex-shrink-0"
              >
                {/* Room card */}
                <div className="relative bg-dark-card border border-gold/10 overflow-hidden hover:border-gold/30 transition-all duration-500">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-[1.5s]"
                      sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, 35vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent" />

                    {/* Price badge */}
                    <div className="absolute top-4 right-4 bg-dark/80 backdrop-blur-sm border border-gold/30 px-4 py-2">
                      <span className="text-gold font-heading text-lg">
                        {room.price}
                      </span>
                      <span className="text-cream/50 text-xs"> Ft/éj</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="font-heading text-2xl mb-3 text-cream group-hover:text-gold transition-colors duration-300">
                      {room.name}
                    </h3>
                    <p className="text-cream/50 text-sm leading-relaxed mb-6">
                      {room.description}
                    </p>

                    {/* Room info */}
                    <div className="flex items-center gap-6 mb-6 text-cream/40 text-xs">
                      <div className="flex items-center gap-2">
                        <Maximize2 size={14} />
                        <span>{room.size}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={14} />
                        <span>{room.guests}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Wifi size={14} />
                        <span>Wi-Fi</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Coffee size={14} />
                        <span>Minibar</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {room.features.map((f) => (
                        <span
                          key={f}
                          className="text-[11px] tracking-wider text-gold/70 border border-gold/15 px-3 py-1 uppercase"
                        >
                          {f}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href="#kapcsolat"
                      className="inline-block w-full text-center py-3 border border-gold/30 text-gold text-sm tracking-widest uppercase hover:bg-gold hover:text-dark transition-all duration-300"
                    >
                      Foglalás
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
