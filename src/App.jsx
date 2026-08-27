/**
 * Arcoh — App Entry Point (Usage Example)
 *
 * ─── REQUIRED DEPENDENCIES ───────────────────────────────────────────────────
 * Run in your project root BEFORE using these components:
 *
 *   npm install react react-dom react-router-dom
 *
 * Add to your public/index.html <head>:
 *   <link
 *     href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap"
 *     rel="stylesheet"
 *   />
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { gsap } from 'gsap';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import VerticalSlides from './components/VerticleSlides/VerticleSlides';
import OurAgency from './components/OurAgency/OurAgency';
import OurServices from './components/OurServices/OurServices';
import FeaturedProjects from './components/FeaturedProjects/FeaturedProjects';
import CtaSection from './components/CtaSection/CtaSection';
import Footer from './components/Footer/Footer';
import './App.css';

export default function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Synchronize Lenis with GSAP Ticker for 60fps+ stutter-free scrolling
    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      {/* Sticky Navbar — fixed at top of viewport */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* <HeroSection /> */}
        <VerticalSlides />
        <OurAgency />
        <OurServices />
        <FeaturedProjects />
        <CtaSection />
      </main>

      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
}
