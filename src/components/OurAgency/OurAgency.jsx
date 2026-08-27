import React, { useEffect, useRef, useState } from "react";
import { HiArrowRight } from "react-icons/hi2";
import { IoPlay, IoClose } from "react-icons/io5";
import agencyImg from "/assets/images/about-img.png";
import "./OurAgency.css";

// ── Rolling Digit Subcomponent for smooth vertical number reels ──
function RollingDigit({ digit, delay = 0, isTriggered }) {
  const digitNum = parseInt(digit, 10);
  const isNumber = !isNaN(digitNum);

  // If not a number (e.g. + or %), render static character
  if (!isNumber) {
    return <span className="stat-char">{digit}</span>;
  }

  // Create a strip of numbers (0-9 repeated + target digit) to give a satisfying rolling reel effect
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
    <div className="digit-wheel-container">
      <div
        className="digit-wheel-strip"
        style={{
          transform: transformValue,
          transitionDelay: `${delay}s`,
        }}
      >
        {numbersList.map((num, idx) => (
          <div key={idx} className="digit-item">
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
    <div className="agency-stat-item">
      <div className="stat-number-wrapper">
        <div className="stat-digits-row">
          {digits.map((digit, idx) => (
            <RollingDigit
              key={idx}
              digit={digit}
              delay={itemDelay + idx * 0.08}
              isTriggered={isTriggered}
            />
          ))}
          {suffix && <span className="stat-suffix">{suffix}</span>}
        </div>
      </div>
      <p className="stat-label">{label}</p>
    </div>
  );
}

export default function OurAgency() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Intersection Observer to trigger smooth appearance & rolling numbers on scroll
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

  // Handle ESC key to close video modal
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
    { value: "122", suffix: "", label: "Project Completed", delay: 0.25 },
    { value: "15", suffix: "+", label: "Years of Experience", delay: 0.4 },
    { value: "98", suffix: "%", label: "Client Satisfaction", delay: 0.55 },
  ];

  return (
    <section
      className={`agency-section ${isVisible ? "agency--animated" : ""}`}
      ref={sectionRef}
      id="agency"
    >
      <div className="container">
        <div className="agency-container">
        {/* Main 2-Column Content Layout */}
        <div className="agency-main-grid">
          {/* Left Column — Text Info */}
          <div className="agency-left-col">
            {/* Tag / Eyebrow */}
            <div className="agency-tag-wrap">
              {/* <span className="agency-dot">•</span> */}
              {/* <span className="agency-tag-text">About</span> */}
            </div>

            {/* Main Heading */}
            <h2 className="agency-heading">About Us</h2>

            {/* Description */}
            <p className="agency-description">
              With 25 years of experience in the field, our team is dedicated to
              designing sustainable and innovative spaces. We combine functionality
              with beauty to create buildings that enrich lives wonderful
              serenity has taken possession of my entire soul.
            </p>

            {/* CTA Button */}
            <div className="agency-btn-wrap">
              <a href="#about" className="agency-cta-btn">
                <span className="agency-btn-text">Explore more about us</span>
                <span className="agency-btn-arrow-box">
                  <HiArrowRight className="agency-btn-icon" />
                </span>
              </a>
            </div>
          </div>

          {/* Right Column — Architecture Showcase with Circular Play Badge */}
          <div className="agency-right-col">
            <div className="agency-media-card">
              <div className="agency-media-inner">
                <img
                  src={agencyImg}
                  alt="Modern luxury architectural house"
                  className="agency-showcase-img"
                  loading="lazy"
                />

                {/* Subtle vignette/sheen overlay */}
                <div className="agency-img-overlay" />

                {/* Interactive Circular Play Badge */}
                <button
                  type="button"
                  className="agency-play-badge"
                  onClick={() => setIsVideoModalOpen(true)}
                  aria-label="Play agency presentation video"
                >
                  {/* Rotating Text SVG */}
                  <svg
                    className="agency-rotating-text"
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
                    <text className="agency-path-text">
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
                  <div className="agency-play-center-btn">
                    <IoPlay className="agency-play-icon" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Glassmorphic Stats Banner Overlapping Bottom */}
        <div className="agency-stats-wrapper">
          <div className="agency-stats-card">
            <div className="agency-stats-grid">
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
      </div>

      {/* Video Modal Popup */}
      {isVideoModalOpen && (
        <div
          className="agency-video-modal-backdrop"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="agency-video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="agency-modal-close-btn"
              onClick={() => setIsVideoModalOpen(false)}
              aria-label="Close video"
            >
              <IoClose size={26} />
            </button>
            <div className="agency-video-iframe-wrap">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Agency Architectural Video"
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