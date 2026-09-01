import { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { gsap } from "gsap";
import Navbar from "./components/Navbar/Navbar";
import VerticalSlides from "./components/VerticleSlides/VerticleSlides";
import OurAgency from "./components/OurAgency/OurAgency";
import OurServices from "./components/OurServices/OurServices";
import FeaturedProjects from "./components/FeaturedProjects/FeaturedProjects";
import CtaSection from "./components/CtaSection/CtaSection";
import Footer from "./components/Footer/Footer";
import AboustUs from "./components/aboutUs/AboustUs";
import ServicesPage from "./components/ServicesPage/ServicesPage";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import CorporatePage from "./components/CorporatePage/CorporatePage";
import ContactPage from "./components/ContactPage/ContactPage";
import "./App.css";
import StrategicAlliances from "./components/strategicAlliances/StrategicAlliances";
import BlogsPage from "./components/blogs/BlogsPage";

function ScrollToTop({ lenisRef }) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait for the new page to render, then scroll to the hashed section
      const timer = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el && lenisRef?.current) {
          lenisRef.current.scrollTo(el, { offset: -80, duration: 1.2 });
        } else if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 120);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
      if (lenisRef?.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      }
    }
  }, [pathname, hash, lenisRef]);

  return null;
}

function HomePage() {
  return (
    <main>
      <VerticalSlides />
      <OurAgency />
      <OurServices />
      <FeaturedProjects />
      <CtaSection />
    </main>
  );
}

export default function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      syncTouch: false,
      touchInertiaMultiplier: 1,
    });
    lenisRef.current = lenis;
    window.__lenis = lenis;

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
      <ScrollToTop lenisRef={lenisRef} />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboustUs />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/corporate" element={<CorporatePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/strategicAlliances" element={<StrategicAlliances />} />
        <Route path="/blogs" element={<BlogsPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}


