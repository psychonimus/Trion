import React, { useEffect, useRef, useState } from "react";
import { HiArrowRight } from "react-icons/hi2";
import { IoPlay, IoClose } from "react-icons/io5";
import agencyImg from "/assets/images/about-img.png";

// ── Rolling Digit Subcomponent for smooth vertical number reels ──
function RollingDigit({ digit, delay = 0, isTriggered }) {
  const digitNum = parseInt(digit, 10);
  const isNumber = !isNaN(digitNum);

  if (!isNumber) {
    return <span className="text-3xl sm:text-4xl font-extrabold text-[#ff6b00]">{digit}</span>;
  }

  const repeatCount = 2;
  const numbersList = [];
  for (let r = 0; r < repeatCount; r++) {
    for (let n = 0; n <= 9; n++) {
      numbersList.push(n);
    }
  }
  for (let n = 0; n <= digitNum; n++) {
    numbersList.push(n);
  }

  const targetIndex = numbersList.length - 1;
  const transformValue = isTriggered
    ? `translateY(-${(targetIndex / numbersList.length) * 100}%)`
    : "translateY(0%)";

  return (
    <div className="inline-block h-12 sm:h-14 overflow-hidden leading-none">
      <div
        className="flex flex-col transition-transform duration-[2200ms] ease-[cubic-bezier(0.12,0.98,0.24,1)] will-change-transform"
        style={{
          transform: transformValue,
          transitionDelay: `${delay}s`,
        }}
      >
        {numbersList.map((num, idx) => (
          <div
            key={idx}
            className="h-12 sm:h-14 flex items-center justify-center text-3xl sm:text-4xl font-primary font-extrabold text-[#ff6b00] tracking-tight select-none"
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Rolling Stat Counter ──
function RollingStatItem({ value, label, suffix = "", isTriggered, itemDelay = 0 }) {
  const digits = String(value).split("");

  return (
    <div className="flex flex-col justify-start">
      <div className="flex items-center h-12 sm:h-14 overflow-hidden">
        <div className="inline-flex items-center h-12 sm:h-14">
          {digits.map((digit, idx) => (
            <RollingDigit
              key={idx}
              digit={digit}
              delay={itemDelay + idx * 0.08}
              isTriggered={isTriggered}
            />
          ))}
          {suffix && (
            <span className="text-2xl sm:text-3xl font-extrabold text-[#ff6b00] ml-0.5 self-center font-primary">
              {suffix}
            </span>
          )}
        </div>
      </div>
      <p className="text-xs sm:text-sm font-semibold text-slate-200 mt-1.5 tracking-wide leading-tight m-0">
        {label}
      </p>
    </div>
  );
}

export default function OurAgency() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsVideoModalOpen(false);
      }
    };
    if (isVideoModalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVideoModalOpen]);

  const stats = [
    { value: "25", suffix: "", label: "Global Awards", delay: 0.1 },
    { value: "122", suffix: "", label: "Projects Completed", delay: 0.25 },
    { value: "15", suffix: "+", label: "Years of Experience", delay: 0.4 },
    { value: "98", suffix: "%", label: "Client Satisfaction", delay: 0.55 },
  ];

  return (
    <section
      className="relative bg-white text-slate-900 font-primary py-20 lg:py-28 overflow-hidden"
      ref={sectionRef}
      id="agency"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column — Text Info */}
          <div
            className={`lg:col-span-6 flex flex-col justify-center transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Tag / Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#ff6b00]" />
              <span className="font-mono text-xs text-[#ff6b00] tracking-[0.2em] uppercase font-bold">
                WHO WE ARE
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="font-primary font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-[1.08] mb-6">
              About Us
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl mb-8">
              With 25 years of experience in the field, our team is dedicated to
              designing sustainable and innovative spaces. We combine functionality
              with engineering precision to create structures that enrich lives and endure for generations.
            </p>

            {/* CTA Button */}
            <div>
              <a
                href="#about"
                className="inline-flex items-center gap-4 pl-6 pr-2 py-2 bg-[#ff6b00] hover:bg-[#ff8533] text-white rounded-full font-primary text-sm font-bold tracking-wider uppercase shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 transition-all no-underline w-fit group"
              >
                <span>Explore more about us</span>
                <span className="w-9 h-9 rounded-full bg-white text-[#ff6b00] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <HiArrowRight className="text-lg" />
                </span>
              </a>
            </div>
          </div>

          {/* Right Column — Architecture Showcase with Circular Play Badge */}
          <div
            className={`lg:col-span-6 relative transition-all duration-700 delay-150 ${
              isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-100 aspect-[4/3.2] group">
              <img
                src={agencyImg}
                alt="Modern luxury architectural project"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />

              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Interactive Circular Play Badge */}
              <button
                type="button"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#0a1128]/70 backdrop-blur-md border border-white/25 flex items-center justify-center cursor-pointer shadow-2xl hover:scale-110 transition-transform p-0"
                onClick={() => setIsVideoModalOpen(true)}
                aria-label="Play presentation video"
              >
                {/* Rotating Text SVG */}
                <svg
                  className="absolute inset-0 w-full h-full animate-[spin_16s_linear_infinite] hover:animate-[spin_8s_linear_infinite]"
                  viewBox="0 0 160 160"
                  width="160"
                  height="160"
                >
                  <defs>
                    <path
                      id="playCirclePath"
                      d="M 80, 80 m -56, 0 a 56,56 0 1,1 112,0 a 56,56 0 1,1 -112,0"
                    />
                  </defs>
                  <text className="fill-white font-primary text-[11px] font-bold tracking-[0.24em] uppercase">
                    <textPath
                      href="#playCirclePath"
                      startOffset="50%"
                      textAnchor="middle"
                    >
                      CLICK TO PLAY • CLICK TO PLAY •
                    </textPath>
                  </text>
                </svg>

                {/* Center Play Button Circle */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-[#ff6b00] flex items-center justify-center shadow-lg relative z-10 transition-transform hover:scale-105">
                  <IoPlay className="text-xl ml-1 text-[#ff6b00]" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Floating Glassmorphic Stats Banner */}
        <div
          className={`relative z-10 w-full max-w-4xl mx-auto mt-10 lg:-mt-14 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-[#0a1128]/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 sm:p-8 shadow-[0_24px_60px_rgba(10,17,40,0.4)]">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-start">
              {stats.map((stat, idx) => (
                <RollingStatItem
                  key={idx}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  isTriggered={isVisible}
                  itemDelay={stat.delay}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Popup */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 bg-[#0a1128]/90 backdrop-blur-xl z-[99999] flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/15"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer z-10 transition-all"
              onClick={() => setIsVideoModalOpen(false)}
              aria-label="Close presentation video"
            >
              <IoClose className="text-2xl" />
            </button>
            <div className="relative pb-[56.25%] h-0">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Agency Presentation Video"
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}