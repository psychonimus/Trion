import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";
import { IoPlay, IoClose } from "react-icons/io5";
import agencyImg from "/assets/images/about-img.webp";

function RollingDigit({ digit, delay = 0, isTriggered }) {
  const digitNum = parseInt(digit, 10);
  const isNumber = !isNaN(digitNum);

  if (!isNumber) {
    return (
      <span className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-[#f55d1b]">
        {digit}
      </span>
    );
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
    <div className="inline-block h-10 xs:h-12 sm:h-14 overflow-hidden leading-none">
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
            className="h-10 xs:h-12 sm:h-14 flex items-center justify-center text-2xl xs:text-3xl sm:text-4xl font-primary font-extrabold text-[#f55d1b] tracking-tight select-none"
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
}

function RollingStatItem({
  value,
  label,
  suffix = "",
  isTriggered,
  itemDelay = 0,
}) {
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
            <span className="text-2xl sm:text-3xl font-extrabold text-[#f55d1b] ml-0.5 self-center font-primary">
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
      },
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
      className="relative bg-white text-slate-900 font-primary py-14 xs:py-16 sm:py-20 lg:py-28 overflow-hidden"
      ref={sectionRef}
      id="agency"
    >
      <div className="max-w-7xl 2xl:max-w-[1580px] mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xs:gap-10 sm:gap-12 lg:gap-16 items-center">
          <div
            className={`lg:col-span-6 flex flex-col justify-center transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#f55d1b]" />
              <span className="font-mono text-xs text-[#f55d1b] tracking-[0.2em] uppercase font-bold">
                WHO WE ARE
              </span>
            </div>

            <h2 className="font-primary font-black text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-[1.08] mb-4 sm:mb-6">
              About Us
            </h2>

            <p className="text-sm xs:text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl mb-6 sm:mb-8">
              With 25 years of experience in the field, our team is dedicated to
              designing sustainable and innovative spaces. We combine
              functionality with engineering precision to create structures that
              enrich lives and endure for generations.
            </p>

            <div>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 sm:gap-4 pl-5 sm:pl-6 pr-2 py-2 bg-[#f55d1b] hover:bg-[#f55d1b] text-white rounded-full font-primary text-xs sm:text-sm font-bold tracking-wider uppercase shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 transition-all no-underline w-fit group"
              >
                <span>Explore more about us</span>
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-[#f55d1b] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <HiArrowRight className="text-base sm:text-lg" />
                </span>
              </Link>
            </div>
          </div>

          <div
            className={`lg:col-span-6 relative transition-all duration-700 delay-150 ${
              isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-8 scale-95"
            }`}
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-slate-100 aspect-[4/3.2] group">
              <img
                src={agencyImg}
                alt="Modern luxury architectural project"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        <div
          className={`relative z-10 w-full max-w-4xl mx-auto mt-8 sm:mt-10 lg:-mt-14 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div
            className="bg-[#000435]/70
  backdrop-blur-2xl
  border border-white/10
  shadow-2xl rounded-2xl sm:rounded-3xl p-5 sm:p-8"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 items-start">
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

      {isVideoModalOpen && (
        <div
          className="fixed inset-0 bg-[#000435]/90 backdrop-blur-xl z-[99999] flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
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
