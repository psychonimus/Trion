import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function LordIcon({
  src,
  trigger = "loop",
  colors = "primary:#000435,secondary:#f55d1b",
  size = 28,
  className = "",
}) {
  return React.createElement("lord-icon", {
    src,
    trigger,
    colors,
    style: { width: `${size}px`, height: `${size}px` },
    class: className,
  });
}

function CrosshairIcon({ className = "w-6 h-6 text-[#f55d1b]" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="16"
        cy="16"
        r="10"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="3 2"
      />
      <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1" />
      <line
        x1="16"
        y1="2"
        x2="16"
        y2="30"
        stroke="currentColor"
        strokeWidth="1"
      />
      <line
        x1="2"
        y1="16"
        x2="30"
        y2="16"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}

const ALLIANCES_LIST = [
  { id: "01", refId: "ketan", name: "KETAN CONSTRUCTIONS" },
  { id: "02", refId: "sf-marina", name: "SF MARINA" },
  { id: "03", refId: "tridel", name: "TRIDEL TECHNOLOGIES" },
  { id: "04", refId: "lombardi", name: "LOMBARDI ENGINEERING" },
  { id: "05", refId: "radius", name: "RADIUS EQUIPMENTS" },
];

export default function StrategicAlliances() {
  const [activeSection, setActiveSection] = useState("01");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 280;
      for (const item of ALLIANCES_LIST) {
        const el = document.getElementById(item.refId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (refId) => {
    const el = document.getElementById(refId);
    if (!el) return;
    const pos = el.getBoundingClientRect().top + window.pageYOffset - 72;
    window.scrollTo({ top: pos, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-white text-[#000435] font-sans antialiased overflow-x-hidden pt-12 sm:pt-14 selection:bg-[#f55d1b] selection:text-white">
      {/* <div className="fixed left-3 sm:left-4 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col items-center gap-4 py-3 px-1.5">
        {ALLIANCES_LIST.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.refId)}
              className="flex flex-col items-center gap-1 group cursor-pointer bg-transparent border-0"
              title={item.name}
            >
              <span
                className={`font-mono text-[11px] font-bold transition-colors ${
                  isActive
                    ? "text-[#f55d1b]"
                    : "text-[#000435]/40 group-hover:text-[#000435]"
                }`}
              >
                {item.id}
              </span>
              <span
                className={`w-1 h-3 transition-all ${
                  isActive
                    ? "bg-[#f55d1b] h-5"
                    : "bg-[#000435]/20 group-hover:bg-[#000435]/40"
                }`}
              />
            </button>
          );
        })}
      </div> */}

      <section className="relative pt-24 xs:pt-28 pb-12 sm:pb-16 bg-white border-b border-[#000435]/10 overflow-hidden">
        <div className="max-w-7xl 2xl:max-w-[1580px] mx-auto px-4 xs:px-6 sm:px-10 md:px-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-5">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-5 h-[1.5px] bg-[#f55d1b]" />
                  <span className="font-mono text-[10.5px] tracking-[0.25em] text-[#f55d1b] uppercase font-bold">
                    GLOBAL COLLABORATIONS
                  </span>
                </div>

                <h1 className="font-primary font-bold text-3xl xs:text-4xl sm:text-5xl text-[#000435] tracking-tight uppercase leading-[0.96] mb-4">
                  STRATEGIC
                  <br />
                  <span className="text-[#f55d1b]">ALLIANCES.</span>
                </h1>

                <p className="font-sans text-xs xs:text-[13.5px] sm:text-[14.5px] text-[#4A5568] max-w-md leading-relaxed mb-6 sm:mb-8">
                  Our strategic alliances bring together domain leaders and
                  technical experts, enabling Trion Infrastructure to deliver
                  complex, large-scale projects with precision, speed and
                  reliability.
                </p>
              </div>
            </div>

            <div className="md:col-span-7 flex justify-center items-center">
              <div className="relative w-full max-w-[760px]">
                <img
                  src="/assets/images/StrategicAlliances/hero-infrastructure.webp"
                  alt="Infrastructure Engineering Network"
                  className="w-full h-auto object-contain max-h-[440px]"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#000435]/10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-0 items-center">
            <div className="flex items-center gap-3 xs:gap-3.5 md:pr-6 md:border-r md:border-[#000435]/15 group cursor-default">
              <div className="w-10 h-10 xs:w-12 xs:h-12 rounded-full aspect-square flex items-center justify-center bg-[#f55d1b]/10 shrink-0">
                <LordIcon
                  src="https://cdn.lordicon.com/uqpazftn.json"
                  trigger="loop"
                  colors="primary:#000435,secondary:#f55d1b"
                  size={26}
                />
              </div>
              <span className="font-primary font-bold text-xs sm:text-[13px] text-[#000435] uppercase tracking-wider leading-tight">
                TRUSTED
                <br />
                PARTNERS
              </span>
            </div>
            <div className="flex items-center gap-3 xs:gap-3.5 md:px-6 md:border-r md:border-[#000435]/15 group cursor-default">
              <div className="w-10 h-10 xs:w-12 xs:h-12 rounded-full aspect-square flex items-center justify-center bg-[#f55d1b]/10 shrink-0">
                <LordIcon
                  src="https://cdn.lordicon.com/vlycxjwx.json"
                  trigger="loop"
                  colors="primary:#000435,secondary:#f55d1b"
                  size={26}
                />
              </div>
              <span className="font-primary font-bold text-xs sm:text-[13px] text-[#000435] uppercase tracking-wider leading-tight">
                TECHNICAL
                <br />
                EXCELLENCE
              </span>
            </div>
            <div className="flex items-center gap-3 xs:gap-3.5 md:px-6 md:border-r md:border-[#000435]/15 group cursor-default">
              <div className="w-10 h-10 xs:w-12 xs:h-12 rounded-full aspect-square flex items-center justify-center bg-[#f55d1b]/10 shrink-0">
                <LordIcon
                  src="https://cdn.lordicon.com/cjieiyzp.json"
                  trigger="loop"
                  colors="primary:#000435,secondary:#f55d1b"
                  size={26}
                />
              </div>
              <span className="font-primary font-bold text-xs sm:text-[13px] text-[#000435] uppercase tracking-wider leading-tight">
                GLOBAL
                <br />
                PRESENCE
              </span>
            </div>
            <div className="flex items-center gap-3 xs:gap-3.5 md:pl-6 group cursor-default">
              <div className="w-10 h-10 xs:w-12 xs:h-12 rounded-full aspect-square flex items-center justify-center bg-[#f55d1b]/10 shrink-0">
                <LordIcon
                  src="https://cdn.lordicon.com/gqdnbnwt.json"
                  trigger="loop"
                  colors="primary:#000435,secondary:#f55d1b"
                  size={26}
                />
              </div>
              <span className="font-primary font-bold text-xs sm:text-[13px] text-[#000435] uppercase tracking-wider leading-tight">
                DELIVERING
                <br />
                IMPACT
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="ketan"
        className="py-10 md:py-14 bg-white border-b border-[#000435]/10 scroll-mt-14"
      >
        <div className="max-w-7xl 2xl:max-w-[1580px] mx-auto px-6 sm:px-10 md:px-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-5">
              <h2 className="font-primary font-bold text-3xl sm:text-4xl text-[#000435] tracking-tight uppercase leading-[1.08] mb-2">
                KETAN
                <br />
                CONSTRUCTIONS LIMITED
              </h2>

              <p className="font-serif italic font-semibold text-[13px] sm:text-[14px] text-[#f55d1b] mb-4">
                Partner for Turnkey Infrastructure & Civil Engineering
              </p>

              <p className="font-sans text-[13.5px] sm:text-[14.5px] text-[#4A5568] leading-[1.8] max-w-lg">
                Ketan Constructions Limited brings decades of proven excellence
                in large-scale civil engineering. As our preferred partner for
                turnkey EPC projects, they provide deep expertise in irrigation
                systems, high-voltage power transmission networks, and national
                highway development. Their ability to execute complex,
                geographically dispersed projects complements our vision for
                integrated infrastructure growth.
              </p>
            </div>

            <div className="md:col-span-7 flex justify-center items-center">
              <div className="relative w-full max-w-[720px]">
                <img
                  src="/assets/images/StrategicAlliances/ketan-highway-bridge.webp"
                  alt="Ketan Constructions Highway and Power Network"
                  className="w-full h-auto object-contain max-h-[420px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="sf-marina"
        className="py-10 md:py-14 bg-[#000435] text-white border-b border-[#000435] scroll-mt-14"
      >
        <div className="max-w-7xl 2xl:max-w-[1580px] mx-auto px-6 sm:px-10 md:px-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center mb-12">
            <div className="md:col-span-7 flex justify-center items-center">
              <div className="relative w-full max-w-[700px]">
                <img
                  src="/assets/images/StrategicAlliances/sf-marina-dock.webp"
                  alt="SF Marina Floating Concrete Structures"
                  className="w-full h-auto object-contain max-h-[380px]"
                />
              </div>
            </div>
            <div className="md:col-span-5">
              <h2 className="font-primary font-bold text-3xl sm:text-4xl text-white tracking-tight uppercase leading-[1.08] mb-2">
                SF MARINA
              </h2>

              <p className="font-serif italic font-semibold text-[13px] sm:text-[14px] text-[#f55d1b] mb-4">
                Partner for Floating Concrete & Marine Structures
              </p>

              <p className="font-sans text-[13.5px] sm:text-[14.5px] text-white/70 leading-[1.8] max-w-lg">
                When a project touches the water, we call upon SF Marina. They
                are global pioneers in floating concrete construction,
                delivering durable, prefabricated floating structures that defy
                harsh marine environments. Through this alliance, we are
                equipped to handle specialized marine projects including
                floating docks, breakwaters, and modular pontoon systems,
                ensuring precision engineering and long-term structural
                integrity.
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center">
            <div className="border-r border-white/10 last:border-r-0 px-3 group cursor-default flex flex-col items-center">
              <div className="w-12 h-12 rounded-full aspect-square flex items-center justify-center bg-white/10 shrink-0 mb-2">
                <LordIcon
                  src="https://cdn.lordicon.com/surcxhka.json"
                  trigger="loop"
                  colors="primary:#FFFFFF,secondary:#f55d1b"
                  size={28}
                />
              </div>
              <span className="block font-primary font-bold text-2xl sm:text-3xl text-[#f55d1b] leading-tight mb-1">
                150,000+
              </span>
              <span className="block font-primary font-bold text-[10px] sm:text-[11px] text-white/70 uppercase tracking-wider">
                BERTHS INSTALLED
              </span>
            </div>

            <div className="border-r border-white/10 last:border-r-0 px-3 group cursor-default flex flex-col items-center">
              <div className="w-12 h-12 rounded-full aspect-square flex items-center justify-center bg-white/10 shrink-0 mb-2">
                <LordIcon
                  src="https://cdn.lordicon.com/cjieiyzp.json"
                  trigger="loop"
                  colors="primary:#FFFFFF,secondary:#f55d1b"
                  size={28}
                />
              </div>
              <span className="block font-primary font-bold text-2xl sm:text-3xl text-white leading-tight mb-1">
                60
              </span>
              <span className="block font-primary font-bold text-[10px] sm:text-[11px] text-white/70 uppercase tracking-wider">
                COUNTRIES
              </span>
            </div>

            <div className="border-r border-white/10 last:border-r-0 px-3 group cursor-default flex flex-col items-center">
              <div className="w-12 h-12 rounded-full aspect-square flex items-center justify-center bg-white/10 shrink-0 mb-2">
                <LordIcon
                  src="https://cdn.lordicon.com/ssdupzsv.json"
                  trigger="loop"
                  colors="primary:#FFFFFF,secondary:#f55d1b"
                  size={28}
                />
              </div>
              <span className="block font-primary font-bold text-2xl sm:text-3xl text-white leading-tight mb-1">
                100
              </span>
              <span className="block font-primary font-bold text-[10px] sm:text-[11px] text-white/70 uppercase tracking-wider">
                YEARS OF EXCELLENCE
              </span>
            </div>

            <div className="px-3 group cursor-default flex flex-col items-center">
              <div className="w-12 h-12 rounded-full aspect-square flex items-center justify-center bg-white/10 shrink-0 mb-2">
                <LordIcon
                  src="https://cdn.lordicon.com/xyboiuok.json"
                  trigger="loop"
                  colors="primary:#FFFFFF,secondary:#f55d1b"
                  size={28}
                />
              </div>
              <span className="block font-primary font-bold text-xl sm:text-2xl text-[#f55d1b] leading-tight mb-1 uppercase">
                PIONEER IN
              </span>
              <span className="block font-primary font-bold text-[10px] sm:text-[11px] text-white/70 uppercase tracking-wider">
                FLOATING CONCRETE
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="tridel"
        className="py-10 md:py-14 bg-white border-b border-[#000435]/10 scroll-mt-14"
      >
        <div className="max-w-7xl 2xl:max-w-[1580px] mx-auto px-6 sm:px-10 md:px-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center mb-12">
            <div className="md:col-span-5">
              <h2 className="font-primary font-bold text-3xl sm:text-4xl text-[#000435] tracking-tight uppercase leading-[1.08] mb-2">
                TRIDEL
                <br />
                TECHNOLOGIES
              </h2>

              <p className="font-serif italic font-semibold text-[13px] sm:text-[14px] text-[#f55d1b] mb-4">
                Partner for Marine Infrastructure & Environmental Solutions
              </p>

              <p className="font-sans text-[13.5px] sm:text-[14.5px] text-[#4A5568] leading-[1.8] max-w-lg">
                Tridel Technologies supports our deep-water and coastal
                infrastructure capabilities. Their expertise spans marine
                construction, sub-sea engineering, and environmental industry
                solutions. Whether we are building port facilities, coastal
                protection systems, or undertaking sensitive marine
                environmental remediation, Tridel Technologies provides the
                technical backbone and specialized equipment required for
                success.
              </p>
            </div>

            <div className="md:col-span-7 flex justify-center items-center">
              <div className="relative w-full max-w-[720px]">
                <img
                  src="/assets/images/StrategicAlliances/tridel-marine.webp"
                  alt="Tridel Technologies Marine Infrastructure"
                  className="w-full h-auto object-contain max-h-[400px]"
                />
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[#000435]/10 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4 items-center text-center">
            {/* 01: Products */}
            <div className="border-r border-[#000435]/10 last:border-r-0 px-2 group cursor-default flex flex-col items-center">
              <div className="w-12 h-12 rounded-full aspect-square flex items-center justify-center bg-[#f55d1b]/10 shrink-0 mb-2">
                <LordIcon
                  src="https://cdn.lordicon.com/slkvcfos.json"
                  trigger="loop"
                  colors="primary:#000435,secondary:#f55d1b"
                  size={26}
                />
              </div>
              <span className="block font-primary font-bold text-2xl sm:text-3xl text-[#f55d1b] leading-tight mb-1">
                26
              </span>
              <span className="block font-primary font-bold text-[10px] text-[#4A5568] uppercase tracking-wider">
                PRODUCTS
              </span>
            </div>

            {/* 02: Services */}
            <div className="border-r border-[#000435]/10 last:border-r-0 px-2 group cursor-default flex flex-col items-center">
              <div className="w-12 h-12 rounded-full aspect-square flex items-center justify-center bg-[#f55d1b]/10 shrink-0 mb-2">
                <LordIcon
                  src="https://cdn.lordicon.com/nobciafz.json"
                  trigger="loop"
                  colors="primary:#000435,secondary:#f55d1b"
                  size={26}
                />
              </div>
              <span className="block font-primary font-bold text-2xl sm:text-3xl text-[#f55d1b] leading-tight mb-1">
                12
              </span>
              <span className="block font-primary font-bold text-[10px] text-[#4A5568] uppercase tracking-wider">
                SERVICES
              </span>
            </div>

            {/* 03: Global Offices */}
            <div className="border-r border-[#000435]/10 last:border-r-0 px-2 group cursor-default flex flex-col items-center">
              <div className="w-12 h-12 rounded-full aspect-square flex items-center justify-center bg-[#f55d1b]/10 shrink-0 mb-2">
                <LordIcon
                  src="https://cdn.lordicon.com/zpxybbhl.json"
                  trigger="loop"
                  colors="primary:#000435,secondary:#f55d1b"
                  size={26}
                />
              </div>
              <span className="block font-primary font-bold text-2xl sm:text-3xl text-[#f55d1b] leading-tight mb-1">
                3
              </span>
              <span className="block font-primary font-bold text-[10px] text-[#4A5568] uppercase tracking-wider">
                GLOBAL OFFICES
              </span>
            </div>

            {/* 04: Govt & Industry Clients */}
            <div className="border-r border-[#000435]/10 last:border-r-0 px-2 group cursor-default flex flex-col items-center">
              <div className="w-12 h-12 rounded-full aspect-square flex items-center justify-center bg-[#f55d1b]/10 shrink-0 mb-2">
                <LordIcon
                  src="https://cdn.lordicon.com/uqpazftn.json"
                  trigger="loop"
                  colors="primary:#000435,secondary:#f55d1b"
                  size={26}
                />
              </div>
              <span className="block font-primary font-bold text-2xl sm:text-3xl text-[#f55d1b] leading-tight mb-1">
                50+
              </span>
              <span className="block font-primary font-bold text-[10px] text-[#4A5568] uppercase tracking-wider">
                GOVT. & INDUSTRY CLIENTS
              </span>
            </div>

            {/* 05: Projects Delivered */}
            <div className="border-r border-[#000435]/10 last:border-r-0 px-2 group cursor-default flex flex-col items-center">
              <div className="w-12 h-12 rounded-full aspect-square flex items-center justify-center bg-[#f55d1b]/10 shrink-0 mb-2">
                <LordIcon
                  src="https://cdn.lordicon.com/egiwmiit.json"
                  trigger="loop"
                  colors="primary:#000435,secondary:#f55d1b"
                  size={26}
                />
              </div>
              <span className="block font-primary font-bold text-2xl sm:text-3xl text-[#f55d1b] leading-tight mb-1">
                170+
              </span>
              <span className="block font-primary font-bold text-[10px] text-[#4A5568] uppercase tracking-wider">
                PROJECTS DELIVERED
              </span>
            </div>

            {/* 06: Years */}
            <div className="border-r border-[#000435]/10 last:border-r-0 px-2 group cursor-default flex flex-col items-center">
              <div className="w-12 h-12 rounded-full aspect-square flex items-center justify-center bg-[#f55d1b]/10 shrink-0 mb-2">
                <LordIcon
                  src="https://cdn.lordicon.com/kbtmbyzy.json"
                  trigger="loop"
                  colors="primary:#000435,secondary:#f55d1b"
                  size={26}
                />
              </div>
              <span className="block font-primary font-bold text-2xl sm:text-3xl text-[#f55d1b] leading-tight mb-1">
                10+
              </span>
              <span className="block font-primary font-bold text-[10px] text-[#4A5568] uppercase tracking-wider">
                YEARS
              </span>
            </div>

            {/* 07: Countries Served */}
            <div className="px-2 group cursor-default flex flex-col items-center">
              <div className="w-12 h-12 rounded-full aspect-square flex items-center justify-center bg-[#f55d1b]/10 shrink-0 mb-2">
                <LordIcon
                  src="https://cdn.lordicon.com/cjieiyzp.json"
                  trigger="loop"
                  colors="primary:#000435,secondary:#f55d1b"
                  size={26}
                />
              </div>
              <span className="block font-primary font-bold text-2xl sm:text-3xl text-[#f55d1b] leading-tight mb-1">
                15+
              </span>
              <span className="block font-primary font-bold text-[10px] text-[#4A5568] uppercase tracking-wider">
                COUNTRIES SERVED
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="lombardi"
        className="py-10 md:py-14 bg-[#000435] text-white border-b border-[#000435] scroll-mt-14"
      >
        <div className="max-w-7xl 2xl:max-w-[1580px] mx-auto px-6 sm:px-10 md:px-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center mb-12">
            <div className="md:col-span-7 flex justify-center items-center">
              <div className="relative w-full max-w-[700px]">
                <img
                  src="/assets/images/StrategicAlliances/lombardi-structural.webp"
                  alt="Lombardi Structural Engineering Blueprint"
                  className="w-full h-auto object-contain max-h-[380px]"
                />
              </div>
            </div>

            <div className="md:col-span-5">           

              <h2 className="font-primary font-bold text-3xl sm:text-4xl text-white tracking-tight uppercase leading-[1.08] mb-2">
                LOMBARDI
                <br />
                ENGINEERING
              </h2>

              <p className="font-serif italic font-semibold text-[13px] sm:text-[14px] text-[#f55d1b] mb-4">
                Partner for Engineering Consultancy & Design Services
              </p>

              <p className="font-sans text-[13.5px] sm:text-[14.5px] text-white/70 leading-[1.8] max-w-lg">
                Great construction begins with brilliant design. Lombardi
                Engineering is our trusted partner for high-level engineering
                consultancy, providing structural analysis, geotechnical
                investigations, and detailed design engineering. They reinforce
                our commitment to quality by ensuring every project component,
                from high-rise foundations to transmission towers is backed by
                rigorous calculations and international engineering standards.
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            <div className="flex items-center gap-3.5 group cursor-default">
              <div className="w-12 h-12 rounded-full aspect-square flex items-center justify-center bg-white/10 shrink-0">
                <LordIcon
                  src="https://cdn.lordicon.com/eszyyflr.json"
                  trigger="loop"
                  colors="primary:#FFFFFF,secondary:#f55d1b"
                  size={28}
                />
              </div>
              <div>
                <span className="block font-primary font-bold text-xl sm:text-2xl text-[#f55d1b] leading-none mb-1">
                  180+
                </span>
                <span className="block font-primary font-bold text-[10.5px] text-white/70 uppercase tracking-wider">
                  SKILLED TECHNICIANS
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 group cursor-default">
              <div className="w-12 h-12 rounded-full aspect-square flex items-center justify-center bg-white/10 shrink-0">
                <LordIcon
                  src="https://cdn.lordicon.com/puvaffet.json"
                  trigger="loop"
                  colors="primary:#FFFFFF,secondary:#f55d1b"
                  size={28}
                />
              </div>
              <div>
                <span className="block font-primary font-bold text-sm sm:text-base text-white leading-tight mb-0.5">
                  FULL PROJECT
                </span>
                <span className="block font-primary font-bold text-[10.5px] text-white/70 uppercase tracking-wider">
                  LIFECYCLE SERVICES
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 group cursor-default">
              <div className="w-12 h-12 rounded-full aspect-square flex items-center justify-center bg-white/10 shrink-0">
                <LordIcon
                  src="https://cdn.lordicon.com/zpxybbhl.json"
                  trigger="loop"
                  colors="primary:#FFFFFF,secondary:#f55d1b"
                  size={28}
                />
              </div>
              <div>
                <span className="block font-primary font-bold text-sm sm:text-base text-white leading-tight mb-0.5">
                  SPECIALIZED
                </span>
                <span className="block font-primary font-bold text-[10.5px] text-white/70 uppercase tracking-wider">
                  SECTOR EXPERTISE
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 group cursor-default">
              <div className="w-12 h-12 rounded-full aspect-square flex items-center justify-center bg-white/10 shrink-0">
                <LordIcon
                  src="https://cdn.lordicon.com/cjieiyzp.json"
                  trigger="loop"
                  colors="primary:#FFFFFF,secondary:#f55d1b"
                  size={28}
                />
              </div>
              <div>
                <span className="block font-primary font-bold text-sm sm:text-base text-white leading-tight mb-0.5">
                  WORLDWIDE
                </span>
                <span className="block font-primary font-bold text-[10.5px] text-white/70 uppercase tracking-wider">
                  PRESENCE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="radius"
        className="py-10 md:py-14 bg-white border-b border-[#000435]/10 scroll-mt-14"
      >
        <div className="max-w-7xl 2xl:max-w-[1580px] mx-auto px-6 sm:px-10 md:px-14">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center mb-12">
            <div className="md:col-span-5">
             

              <h2 className="font-primary font-bold text-3xl sm:text-4xl text-[#000435] tracking-tight uppercase leading-[1.08] mb-2">
                RADIUS
                <br />
                EQUIPMENTS
              </h2>

              <p className="font-serif italic font-semibold text-[13px] sm:text-[14px] text-[#f55d1b] mb-4">
                Partner for Construction Equipment & Crushing Solutions
              </p>

              <p className="font-sans text-[13.5px] sm:text-[14.5px] text-[#4A5568] leading-[1.8] max-w-lg">
                Mobilizing the right machinery is critical to project
                acceleration. Radius Equipments is our supply-chain partner for
                all heavy construction equipment, earthmoving machinery, and
                aggregate processing solutions. Their extensive inventory and
                maintenance expertise ensure our sites are never delayed by
                equipment shortages, providing everything from high-capacity
                cranes to advanced crushing and screening plants.
              </p>
            </div>

            <div className="md:col-span-7 flex justify-center items-center">
              <div className="relative w-full max-w-[720px]">
                <img
                  src="/assets/images/StrategicAlliances/radius-crushing.webp"
                  alt="Radius Equipments Aggregate Crushing Plant"
                  className="w-full h-auto object-contain max-h-[380px]"
                />
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[#000435]/10 grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            <div className="flex items-center gap-3.5 group cursor-default">
              <div className="w-12 h-12 rounded-full aspect-square flex items-center justify-center bg-[#f55d1b]/10 shrink-0">
                <LordIcon
                  src="https://cdn.lordicon.com/abfverha.json"
                  trigger="loop"
                  colors="primary:#000435,secondary:#f55d1b"
                  size={28}
                />
              </div>
              <div>
                <span className="block font-primary font-bold text-xl sm:text-2xl text-[#f55d1b] leading-none mb-1">
                  18+
                </span>
                <span className="block font-primary font-bold text-[10.5px] text-[#4A5568] uppercase tracking-wider">
                  YEARS OF EXPERTISE
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 group cursor-default">
              <div className="w-12 h-12 rounded-full aspect-square flex items-center justify-center bg-[#f55d1b]/10 shrink-0">
                <LordIcon
                  src="https://cdn.lordicon.com/qhgmphtg.json"
                  trigger="loop"
                  colors="primary:#000435,secondary:#f55d1b"
                  size={28}
                />
              </div>
              <div>
                <span className="block font-primary font-bold text-xl sm:text-2xl text-[#000435] leading-none mb-1">
                  5
                </span>
                <span className="block font-primary font-bold text-[10.5px] text-[#4A5568] uppercase tracking-wider">
                  SPECIALIZED DIVISIONS
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 group cursor-default">
              <div className="w-12 h-12 rounded-full aspect-square flex items-center justify-center bg-[#f55d1b]/10 shrink-0">
                <LordIcon
                  src="https://cdn.lordicon.com/zzcjjxew.json"
                  trigger="loop"
                  colors="primary:#000435,secondary:#f55d1b"
                  size={28}
                />
              </div>
              <div>
                <span className="block font-primary font-bold text-sm sm:text-base text-[#000435] leading-tight mb-0.5 uppercase">
                  PAN-INDIA
                </span>
                <span className="block font-primary font-bold text-[10.5px] text-[#4A5568] uppercase tracking-wider">
                  & GCC PRESENCE
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 group cursor-default">
              <div className="w-12 h-12 rounded-full aspect-square flex items-center justify-center bg-[#f55d1b]/10 shrink-0">
                <LordIcon
                  src="https://cdn.lordicon.com/gqdnbnwt.json"
                  trigger="loop"
                  colors="primary:#000435,secondary:#f55d1b"
                  size={28}
                />
              </div>
              <div>
                <span className="block font-primary font-bold text-sm sm:text-base text-[#000435] leading-tight mb-0.5 uppercase">
                  MULTI-SECTOR
                </span>
                <span className="block font-primary font-bold text-[10.5px] text-[#4A5568] uppercase tracking-wider">
                  EXPERTISE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-[#000435] text-white border-t border-[#000435] relative overflow-hidden">
        <div className="max-w-7xl 2xl:max-w-[1580px] mx-auto px-6 sm:px-10 md:px-14 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between">
            <div className="md:col-span-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[#f55d1b] font-bold text-xs">+</span>
                <span className="font-mono text-[10.5px] tracking-[0.22em] text-[#f55d1b] uppercase font-bold">
                  STRONGER TOGETHER —
                </span>
              </div>

              <h2 className="font-primary font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight uppercase leading-[1.12]">
                ENGINEERED TOGETHER.
                <br />
                <span className="text-[#f55d1b]">READY FOR WHAT'S NEXT.</span>
              </h2>
            </div>

            <div className="md:col-span-4">
              <p className="font-sans text-[13.5px] sm:text-[14.5px] text-white/70 leading-relaxed">
                Our strategic alliances extend Trion's capabilities across
                infrastructure, marine engineering, environmental solutions,
                design consultancy and construction equipment.
              </p>
            </div>

            <div className="md:col-span-3 flex md:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-transparent hover:bg-white/10 text-white font-primary font-bold text-xs tracking-[0.14em] uppercase border border-white/30 hover:border-white transition-all duration-150 no-underline"
              >
                <span>START A CONVERSATION</span>
                <span className="text-[#f55d1b] font-mono text-sm">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
