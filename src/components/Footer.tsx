"use client";

import { motion } from "framer-motion";
import { Globe, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-dark-light border-t border-gold/10">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20 py-20">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <span className="font-heading text-2xl tracking-[0.3em] text-gold font-semibold">
                GRAND ROYALE
              </span>
              <p className="text-[10px] tracking-[0.5em] text-gold/50 uppercase mt-1">
                Hotel & Spa — Budapest
              </p>
            </div>
            <p className="text-cream/40 text-sm leading-relaxed max-w-sm">
              Több mint egy évszázados hagyomány és elegancia Budapest szívében.
              Fedezze fel a luxus új dimenzióját a Grand Royale Hotel & Spa-ban.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 border border-gold/20 flex items-center justify-center text-gold/50 hover:text-gold hover:border-gold/50 transition-all duration-300"
              >
                <Globe size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-gold/20 flex items-center justify-center text-gold/50 hover:text-gold hover:border-gold/50 transition-all duration-300"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-gold text-xs tracking-[0.3em] uppercase mb-6">
              Navigáció
            </h4>
            <ul className="space-y-3">
              {[
                { href: "#rolunk", label: "Rólunk" },
                { href: "#szobak", label: "Szobáink" },
                { href: "#szolgaltatasok", label: "Szolgáltatások" },
                { href: "#galeria", label: "Galéria" },
                { href: "#velemenyek", label: "Vélemények" },
                { href: "#kapcsolat", label: "Foglalás" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-cream/40 text-sm hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-gold text-xs tracking-[0.3em] uppercase mb-6">
              Információk
            </h4>
            <ul className="space-y-3">
              {[
                "Foglalási feltételek",
                "Adatvédelmi nyilatkozat",
                "ÁSZF",
                "Cookie szabályzat",
                "Karrierlehetőségek",
                "Sajtókapcsolat",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-cream/40 text-sm hover:text-gold transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold/5">
        <div className="max-w-6xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/25 text-xs tracking-wider">
            © 2026 Grand Royale Hotel & Spa. Minden jog fenntartva.
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-cream/15 text-xs tracking-wider"
          >
            Készítette: Ön neve / Cége
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
