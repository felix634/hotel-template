"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#rolunk", label: "Rólunk" },
  { href: "#szobak", label: "Szobáink" },
  { href: "#szolgaltatasok", label: "Szolgáltatások" },
  { href: "#galeria", label: "Galéria" },
  { href: "#velemenyek", label: "Vélemények" },
  { href: "#kapcsolat", label: "Kapcsolat" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-dark/90 backdrop-blur-xl border-b border-gold/10 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-6xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20 flex items-center justify-between">
          <a href="#" className="flex flex-col items-center">
            <span className="font-heading text-2xl tracking-[0.3em] text-gold font-semibold">
              GRAND ROYALE
            </span>
            <span className="text-[10px] tracking-[0.5em] text-gold/60 uppercase">
              Hotel & Spa
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm tracking-widest text-cream/70 hover:text-gold transition-colors duration-300 uppercase"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kapcsolat"
              className="ml-4 px-6 py-2.5 border border-gold/40 text-gold text-sm tracking-widest uppercase hover:bg-gold hover:text-dark transition-all duration-300"
            >
              Foglalás
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden text-gold"
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-dark/98 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 text-gold"
            >
              <X size={32} />
            </button>

            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-2xl tracking-[0.3em] text-cream/80 hover:text-gold transition-colors uppercase font-heading"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
