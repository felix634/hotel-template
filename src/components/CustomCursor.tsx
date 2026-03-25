"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 20);
      cursorY.set(e.clientY - 20);
      dotX.set(e.clientX - 4);
      dotY.set(e.clientY - 4);
    };

    const handlePointerOver = () => {
      const ring = document.getElementById("cursor-ring");
      if (ring) {
        ring.style.transform = "scale(2)";
        ring.style.borderColor = "var(--color-gold)";
        ring.style.backgroundColor = "rgba(201, 168, 76, 0.1)";
      }
    };

    const handlePointerOut = () => {
      const ring = document.getElementById("cursor-ring");
      if (ring) {
        ring.style.transform = "scale(1)";
        ring.style.borderColor = "rgba(201, 168, 76, 0.5)";
        ring.style.backgroundColor = "transparent";
      }
    };

    window.addEventListener("mousemove", moveCursor);

    const interactives = document.querySelectorAll(
      "a, button, [data-cursor-hover]"
    );
    interactives.forEach((el) => {
      el.addEventListener("pointerenter", handlePointerOver);
      el.addEventListener("pointerleave", handlePointerOut);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactives.forEach((el) => {
        el.removeEventListener("pointerenter", handlePointerOver);
        el.removeEventListener("pointerleave", handlePointerOut);
      });
    };
  }, [cursorX, cursorY, dotX, dotY]);

  return (
    <AnimatePresence>
      <motion.div
        id="cursor-ring"
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-gold/50 pointer-events-none z-[9999] hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          transition: "transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease",
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-gold pointer-events-none z-[9999] hidden md:block"
        style={{
          x: dotX,
          y: dotY,
        }}
      />
    </AnimatePresence>
  );
}
