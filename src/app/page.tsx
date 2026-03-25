"use client";

import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ParallaxDivider from "@/components/ParallaxDivider";
import Rooms from "@/components/Rooms";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <ParallaxDivider
          image="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop"
          text="Érezze a luxust"
          subtext="Ahol minden részlet számít"
        />
        <Rooms />
        <Services />
        <ParallaxDivider
          image="https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop"
          text="Felejthetetlen élmények"
          subtext="Több mint 125 éve"
        />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
