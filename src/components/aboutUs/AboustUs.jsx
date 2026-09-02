import React, { useEffect, useRef, useState } from "react";

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function anim(visible, delay = 0, dir = "up") {
  const t = {
    up: visible ? "translateY(0)" : "translateY(36px)",
    left: visible ? "translateX(0)" : "translateX(-36px)",
    right: visible ? "translateX(0)" : "translateX(36px)",
  };
  return {
    opacity: visible ? 1 : 0,
    transform: t[dir] || t.up,
    transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
  };
}

const SvgBlueprint = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    stroke="#f55d1b"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="22"
    height="22"
  >
    <rect x="3" y="3" width="26" height="26" rx="2" />
    <line x1="3" y1="11" x2="29" y2="11" />
    <line x1="11" y1="3" x2="11" y2="29" />
    <path d="M16 16h10M16 20h7M16 24h9" />
    <circle cx="7" cy="7" r="1.5" fill="#f55d1b" stroke="none" />
  </svg>
);

const SvgPowerTower = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    stroke="#f55d1b"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="22"
    height="22"
  >
    <line x1="16" y1="2" x2="16" y2="30" />
    <path d="M7 9l9 4 9-4" />
    <path d="M5 18l11 4 11-4" />
    <line x1="7" y1="9" x2="5" y2="18" />
    <line x1="25" y1="9" x2="27" y2="18" />
    <path d="M13 30h6M12 25h8" />
    <path d="M10 30L8 27M22 30L24 27" />
  </svg>
);

const SvgOreCart = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    stroke="#f55d1b"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="22"
    height="22"
  >
    <path d="M3 7l3.5 16h19L29 7Z" />
    <path d="M9 7l2.5 11M16 7v11M23 7l-2.5 11" />
    <line x1="2" y1="7" x2="30" y2="7" />
    <circle cx="10" cy="27" r="2.5" />
    <circle cx="22" cy="27" r="2.5" />
    <line x1="12.5" y1="27" x2="19.5" y2="27" />
  </svg>
);

const SvgWarehouse = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    stroke="#f55d1b"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="22"
    height="22"
  >
    <path d="M2 13L16 3l14 10v16H2Z" />
    <rect x="12" y="20" width="8" height="9" />
    <rect x="3" y="17" width="7" height="6" />
    <rect x="22" y="17" width="7" height="6" />
    <line x1="2" y1="13" x2="30" y2="13" />
  </svg>
);

const SvgGrowthChart = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    stroke="#f55d1b"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="22"
    height="22"
  >
    <polyline points="3,26 9,20 14,23 19,13 24,16 29,7" />
    <polyline points="26,7 29,7 29,10" />
    <line x1="3" y1="4" x2="3" y2="28" />
    <line x1="3" y1="28" x2="30" y2="28" />
    <circle cx="24" cy="16" r="2" fill="#f55d1b" stroke="none" />
    <circle cx="19" cy="13" r="2" fill="#f55d1b" stroke="none" />
  </svg>
);

const SvgKeyHouse = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    stroke="#f55d1b"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="22"
    height="22"
  >
    <circle cx="9" cy="13" r="5" />
    <circle cx="9" cy="13" r="2.5" />
    <path d="M14 13h16v8h-4v-4h-4v4h-4v-4" />
    <line x1="18" y1="13" x2="18" y2="21" />
  </svg>
);

const SvgAtom = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    stroke="#f55d1b"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="22"
    height="22"
  >
    <circle cx="16" cy="16" r="3" fill="#f55d1b" stroke="none" />
    <ellipse cx="16" cy="16" rx="12" ry="5" />
    <ellipse cx="16" cy="16" rx="12" ry="5" transform="rotate(60 16 16)" />
    <ellipse cx="16" cy="16" rx="12" ry="5" transform="rotate(120 16 16)" />
  </svg>
);

const SvgNetwork = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    stroke="#f55d1b"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="22"
    height="22"
  >
    <circle cx="16" cy="6" r="3" />
    <circle cx="5" cy="24" r="3" />
    <circle cx="27" cy="24" r="3" />
    <circle cx="16" cy="18" r="2.5" fill="#f55d1b" stroke="none" />
    <line x1="16" y1="9" x2="16" y2="15.5" />
    <line x1="8" y1="22.5" x2="13.5" y2="19.5" />
    <line x1="24" y1="22.5" x2="18.5" y2="19.5" />
    <line x1="16" y1="9" x2="8" y2="21.5" />
    <line x1="16" y1="9" x2="24" y2="21.5" />
  </svg>
);

const SvgGears = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    stroke="#f55d1b"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="22"
    height="22"
  >
    <circle cx="11" cy="12" r="4.5" />
    <circle cx="11" cy="12" r="1.8" />
    <path d="M11 3v3M11 21v3M3 12h3M19 12h3M5.3 6.3l2.1 2.1M14.6 15.6l2.1 2.1M5.3 17.7l2.1-2.1M14.6 8.4l2.1-2.1" />
    <circle cx="22" cy="20" r="4.5" />
    <circle cx="22" cy="20" r="1.8" />
    <path d="M22 11v3M22 26v3M14 20h3M27 20h3" />
  </svg>
);

const SvgTelescope = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    stroke="#f55d1b"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="22"
    height="22"
  >
    <path d="M3 20L18 9" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M18 9l7-4" strokeWidth="2" />
    <ellipse cx="25" cy="5.5" rx="3.5" ry="2" transform="rotate(-20 25 5.5)" />
    <line x1="13" y1="17" x2="16" y2="29" />
    <line x1="20" y1="17" x2="16" y2="29" />
    <line x1="11" y1="29" x2="21" y2="29" />
    <circle cx="27" cy="7" r="1.2" fill="#f55d1b" stroke="none" />
  </svg>
);

const SvgMountainFlag = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    stroke="#f55d1b"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="22"
    height="22"
  >
    <path d="M2 28L12 12l6 7 6-10 6 19Z" />
    <line x1="24" y1="9" x2="24" y2="3" />
    <path d="M24 3l7 3-7 3" />
    <circle cx="24" cy="9" r="1.2" fill="#f55d1b" stroke="none" />
  </svg>
);

const SvgDiamond = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    stroke="#f55d1b"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="22"
    height="22"
  >
    <path d="M16 3L29 13 16 29 3 13Z" />
    <path d="M3 13l8-4 5-6 5 6 8 4" />
    <line x1="11" y1="9" x2="16" y2="29" />
    <line x1="21" y1="9" x2="16" y2="29" />
    <line x1="11" y1="9" x2="21" y2="9" />
  </svg>
);

const SvgHardHat = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    stroke="#f55d1b"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="22"
    height="22"
  >
    <path d="M5 19C5 11 9 5 16 5c7 0 11 6 11 14" />
    <rect x="3" y="19" width="26" height="5" rx="2.5" />
    <line x1="16" y1="5" x2="16" y2="12" />
    <line x1="10" y1="8" x2="12.5" y2="14" />
    <line x1="22" y1="8" x2="19.5" y2="14" />
    <path d="M7 24c0 3 2 4 9 4s9-1 9-4" />
  </svg>
);

const SvgPulse = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    stroke="#f55d1b"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="22"
    height="22"
  >
    <polyline points="2,16 7,16 10,6 13,26 16,12 19,20 22,16 30,16" />
    <circle cx="10" cy="6" r="1.5" fill="#f55d1b" stroke="none" />
    <circle cx="16" cy="12" r="1.5" fill="#f55d1b" stroke="none" />
  </svg>
);

const SvgWaterDrop = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    stroke="#f55d1b"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="22"
    height="22"
  >
    <path d="M16 3C16 3 5 15 5 21a11 11 0 0022 0C27 15 16 3 16 3Z" />
    <path d="M11 23c0 2 2 4 5 4" />
    <path d="M21 12c2 3 3 6 1 10" strokeDasharray="2 2" />
  </svg>
);

const SvgStaircase = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    stroke="#f55d1b"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="22"
    height="22"
  >
    <path d="M3 29V23h8v-6h8v-6h8v-6l5-1" />
    <circle cx="27" cy="10" r="2.5" fill="#f55d1b" stroke="none" />
    <line x1="3" y1="29" x2="29" y2="29" strokeOpacity="0.3" />
  </svg>
);

const SvgCheckMark = () => (
  <svg
    viewBox="0 0 16 16"
    width="13"
    height="13"
    fill="none"
    stroke="#f55d1b"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="14 4 6 12 2 8" />
  </svg>
);

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="w-6 h-px bg-[#f55d1b] shrink-0" />
      <span className="text-[10px] font-primary font-semibold tracking-[0.22em] uppercase text-[#f55d1b]">
        {children}
      </span>
    </div>
  );
}

function CapCard({ Icon, title, desc, delay }) {
  const [ref, vis] = useReveal();
  return (
    <div
      ref={ref}
      style={anim(vis, delay)}
      className="group relative bg-white border border-[#000435]/10 rounded-2xl p-6 overflow-hidden cursor-default hover:border-[#f55d1b]/20 transition-colors duration-300"
    >
      <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_0%_0%,rgba(245, 93, 27,0.08)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#f55d1b] group-hover:w-full transition-all duration-500 ease-out" />
      <div className="relative z-10">
        <div className="w-11 h-11 rounded-xl bg-[#f55d1b]/10 flex items-center justify-center mb-4 group-hover:bg-[#f55d1b]/18 transition-colors duration-300">
          <Icon />
        </div>
        <h3 className="font-primary font-semibold text-[#000435] text-sm leading-snug mb-2">
          {title}
        </h3>
        <p className="font-secondary text-[#000435]/70 text-xs leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}

function VmvCard({ Icon, label, heading, delay, children }) {
  const [ref, vis] = useReveal();
  return (
    <div
      ref={ref}
      style={anim(vis, delay)}
      className="group relative bg-white/[0.04] border border-white/10 rounded-2xl p-7 overflow-hidden cursor-default hover:border-[#f55d1b]/30 transition-colors duration-500"
    >
      <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_0%_100%,rgba(245, 93, 27,0.07)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#f55d1b] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="w-11 h-11 rounded-xl bg-[#f55d1b]/12 flex items-center justify-center">
          <Icon />
        </div>
        <p className="text-[9.5px] tracking-[0.2em] text-[#f55d1b] font-primary font-semibold uppercase mb-1">
          {label}
        </p>
        <h3 className="font-primary font-bold text-white text-base leading-snug mb-2">
          {heading}
        </h3>
        {children}
      </div>
    </div>
  );
}

function HseRow({ Icon, title, desc, delay }) {
  const [ref, vis] = useReveal();
  return (
    <div
      ref={ref}
      style={anim(vis, delay, "right")}
      className="group flex items-start gap-4 p-5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#f55d1b]/30 transition-colors duration-300 cursor-default"
    >
      <div className="shrink-0 w-10 h-10 rounded-lg bg-[#f55d1b]/12 flex items-center justify-center group-hover:bg-[#f55d1b]/22 transition-colors duration-300">
        <Icon />
      </div>
      <div>
        <h4 className="font-primary font-semibold text-white text-sm mb-1.5">
          {title}
        </h4>
        <p className="font-secondary text-white/45 text-xs leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}

function LeaderCard({ name, title, bio, img, delay }) {
  const [ref, vis] = useReveal();
  return (
    <div
      ref={ref}
      style={anim(vis, delay)}
      className="group relative flex flex-col bg-[#000435] border border-white/10 rounded-2xl overflow-hidden cursor-default transition-all duration-300 hover:-translate-y-1.5 hover:border-[#f55d1b]/40 hover:shadow-xl hover:shadow-[#000435]/40"
    >
      <div className="relative w-full h-80 sm:h-84 2xl:h-96 overflow-hidden bg-[#000435]">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-start border-t border-white/10">
        <span className="inline-block text-[10px] sm:text-[10.5px] tracking-[0.2em] text-[#f55d1b] font-primary font-bold uppercase mb-1.5">
          {title}
        </span>
        <h3 className="font-primary font-bold text-white text-lg sm:text-xl leading-snug mb-3 group-hover:text-[#f55d1b] transition-colors duration-300">
          {name}
        </h3>
        <p className="font-secondary text-white/70 text-xs sm:text-[13px] leading-relaxed m-0">
          {bio}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#f55d1b] group-hover:w-full transition-all duration-500 ease-out" />
    </div>
  );
}

export default function AboustUs() {
  const vmvRef = useRef(null);
  const vmvBgRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!vmvRef.current || !vmvBgRef.current) return;
      const rect = vmvRef.current.getBoundingClientRect();
      const p = Math.max(
        0,
        Math.min(
          1,
          (window.innerHeight - rect.top) / (window.innerHeight + rect.height),
        ),
      );
      vmvBgRef.current.style.transform = `translateY(${p * 50 - 25}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [whoL, whoLv] = useReveal();
  const [whoR, whoRv] = useReveal();
  const [capH, capHv] = useReveal();
  const [ldH, ldHv] = useReveal();
  const [hseL, hseLv] = useReveal();

  const heroCss = (delay) => ({
    animation: `heroFadeUp 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s both`,
  });

  const caps = [
    {
      Icon: SvgBlueprint,
      title: "Integrated EPC & PMC",
      desc: "End-to-end engineering, procurement, and construction management for roads, bridges, buildings, and large-scale industrial, commercial, and residential complexes.",
    },
    {
      Icon: SvgPowerTower,
      title: "Power Generation & Energy Infrastructure",
      desc: "Developing, operating, and maintaining conventional and renewable energy plants, including generation, transmission, distribution, and tie-line projects on BOT/BOOT models.",
    },
    {
      Icon: SvgOreCart,
      title: "Mining & Materials Trading",
      desc: "Engaging in the extraction and global trading of minerals, metals, and ores, alongside the bulk supply of critical construction materials like cement, steel, and aggregates.",
    },
    {
      Icon: SvgWarehouse,
      title: "Equipment Supply & Logistics",
      desc: "Manufacturing, importing, and supplying heavy machinery, tools, and construction equipment, supported by robust transport and logistics operations.",
    },
    {
      Icon: SvgGrowthChart,
      title: "Project Financing & Investment",
      desc: "Acting as financiers, promoters, and bankers to fund infrastructure ventures, manage securities, and facilitate joint ventures and amalgamations.",
    },
    {
      Icon: SvgKeyHouse,
      title: "Real Estate & Asset Management",
      desc: "Acquiring, developing, leasing, and managing large-scale land holdings, industrial colonies, and townships with modern amenities.",
    },
    {
      Icon: SvgAtom,
      title: "Research & Technical Development",
      desc: "Driving innovation through dedicated R&D labs, scientific research, and technical collaborations to enhance quality control and product improvement.",
    },
    {
      Icon: SvgNetwork,
      title: "Rural & Urban Development",
      desc: "Sponsoring and executing programs aimed at socio-economic welfare, including educational initiatives, scholarship programs, and public infrastructure enhancements.",
    },
    {
      Icon: SvgGears,
      title: "Strategic Partnerships",
      desc: "Building lasting alliances with global leaders in engineering, finance, and technology to deliver world-class solutions and drive sustainable growth.",
    },
  ];

  const mission = [
    "We are committed to delivering quality infrastructure through safe, accountable and efficient execution, backed by experience, technology and innovation. We build lasting partnerships through trust and transparency, continuously strengthen our capabilities, and create enduring value for our clients, communities and the nation.",
  ];

  const vals = [
    "Integrity",
    "Excellence",
    "Safety",
    "Accountability",
    "Collaboration",
    "Innovation",
    "Sustainability",
  ];

  const leaders = [
    {
      name: "Sidharth Jaiswaal",
      title: "Founder & Managing Director",
      bio: "A visionary business leader with extensive experience in infrastructure development, Siddharth drives the group’s strategic direction, business growth and global operations, with a strong focus on long-term value creation.",
      img: "/assets/images/MR. SIDDHARTH JAISWAL.png",
    },
    {
      name: "Shantanu Das",
      title: "Associate Partner",
      bio: "A seasoned business leader with 15+ years of experience across capital equipment and infrastructure, Shantanu brings strong expertise in sales, business development, market expansion and strategic customer relationships.",
      img: "/assets/images/Shantanu Das.png",
    },
    {
      name: "Deepak Dhar",
      title: "Associate Partner",
      bio: "A tunnelling and project management professional with 25+ years of experience across Metro, Railway and Hydropower projects, Deepak brings expertise in project execution, planning, safety, stakeholder management and team leadership.",
      img: "/assets/images/Deepak Dhar.png",
    },
  ];

  const hse = [
    {
      Icon: SvgHardHat,
      title: "Zero-Harm Workplace",
      desc: "Zero-harm workplace through proactive risk identification and safety practices.",
    },
    {
      Icon: SvgPulse,
      title: "Health & Wellbeing",
      desc: "Health & wellbeing of our workforce and stakeholders.",
    },
    {
      Icon: SvgWaterDrop,
      title: "Environmental Responsibility",
      desc: "Environmental responsibility through efficient resource use, waste management and regulatory compliance.",
    },
    {
      Icon: SvgStaircase,
      title: "Continuous Improvement",
      desc: "Continuous improvement through training, monitoring and strong safety standards.",
    },
  ];

  return (
    <main className="bg-white font-primary overflow-x-hidden">
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section
        id="company-profile"
        className="relative min-h-[85vh] sm:min-h-screen flex items-end overflow-hidden pt-24 sm:pt-28"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/images/about-hero.webp')",
            backgroundPosition: "center 40%",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 4, 53,0.35) 0%, rgba(0, 4, 53,0.55) 35%, rgba(0, 4, 53,0.88) 70%, rgba(0, 4, 53,1) 100%)",
          }}
        />

        <div className="relative z-10 w-full max-w-7xl 2xl:max-w-[1580px] mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 pb-14 sm:pb-20 lg:pb-28">
          <div
            style={heroCss(0.05)}
            className="w-8 sm:w-10 h-[2px] bg-[#f55d1b] mb-4 sm:mb-6"
          />

          <h1
            style={heroCss(0.3)}
            className="font-primary font-bold text-white text-2xl xs:text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl leading-tight tracking-tight max-w-3xl mb-4 sm:mb-5 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]"
          >
            Building Infrastructure. <br />
            <span className="text-[#f55d1b]">Powering Progress.</span>
          </h1>
        </div>
      </section>

      <section className="py-14 xs:py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl 2xl:max-w-[1580px] mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 lg:gap-20 items-center">
            <div ref={whoL} style={anim(whoLv, 0)}>
              <h2 className="font-primary font-bold text-[#f55d1b] text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight mb-4 sm:mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 font-secondary text-[#000435]/70 text-xs sm:text-sm leading-relaxed">
                <p>
                  We are more than just a construction company; we are
                  integrated developers, EPC contractors, project managers, and
                  financiers. Our mandate covers the entire lifecycle of
                  infrastructure—from acquiring concessions and arranging
                  financing to executing turnkey projects and maintaining
                  critical assets. Backed by a robust supply chain and a
                  commitment to innovation, we operate across conventional and
                  renewable energy, heavy civil construction, mining, and
                  logistics.
                </p>
                <p>
                  Our strength lies in our ability to execute complex ventures
                  through flexible models, including Build-Operate-Transfer
                  (BOT) and Build-Own-Operate-Transfer (BOOT). We pride
                  ourselves on fostering technical collaborations, driving
                  socio-economic growth, and delivering assets that stand the
                  test of time, ensuring lasting value for our clients,
                  partners, and the communities we serve.
                </p>
              </div>
            </div>
            <div ref={whoR} style={anim(whoRv, 0.12)}>
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                {[
                  ["BOT", "Build-Operate-Transfer Model"],
                  ["BOOT", "Build-Own-Operate-Transfer Model"],
                  ["EPC", "End-to-End Contracting"],
                  ["PMC", "Project Management Consulting"],
                ].map(([k, v], i) => (
                  <div
                    key={i}
                    className="bg-[#000435] rounded-2xl p-5 sm:p-6 flex flex-col gap-1.5 sm:gap-2 cursor-default hover:-translate-y-1 transition-transform duration-300"
                  >
                    <span className="font-primary font-bold text-[#f55d1b] text-lg sm:text-xl">
                      {k}
                    </span>
                    <span className="font-secondary text-white/45 text-xs leading-snug">
                      {v}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="core-capabilities"
        className="py-14 xs:py-16 sm:py-20 lg:py-28 bg-[#000435]/[0.02]"
      >
        <div className="max-w-7xl 2xl:max-w-[1580px] mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
          <div ref={capH} style={anim(capHv, 0)} className="mb-6 sm:mb-8">
            <div className="flex flex-col w-full gap-2 sm:gap-3">
              <h2 className="font-primary font-bold text-[#f55d1b] text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight max-w-2xl">
                Our Core Capabilities
              </h2>
              <p className="font-secondary text-[#000435]/70 text-xs sm:text-sm leading-relaxed max-w-2xl">
                Our comprehensive service portfolio is designed to meet the
                diverse needs of public and private sector clients across India
                and international markets:
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3.5 sm:gap-4">
            {caps.map((c, i) => (
              <CapCard key={i} {...c} delay={i * 0.04} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="mission-vision"
        ref={vmvRef}
        className="py-14 xs:py-16 sm:py-20 lg:py-24 bg-[#000435] relative overflow-hidden"
      >
        <div
          ref={vmvBgRef}
          className="absolute inset-[-50px_0] pointer-events-none will-change-transform"
        >
          <div className="absolute -top-1/4 -right-1/4 w-[480px] h-[480px] rounded-full bg-[radial-gradient(circle,rgba(245, 93, 27,0.09)_0%,transparent_65%)]" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[380px] h-[380px] rounded-full bg-[radial-gradient(circle,rgba(245, 93, 27,0.06)_0%,transparent_65%)]" />
        </div>
        <div className="relative z-10 max-w-7xl 2xl:max-w-[1580px] mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-8 sm:mb-12 flex flex-col items-center">
            <SectionLabel>
              VALUES & GUIDELINES
            </SectionLabel>
            <h2 className="font-primary font-bold text-[#f55d1b] text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight">
              Vision · Mission · Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <VmvCard
              Icon={SvgTelescope}
              label="VISION"
              heading="Building the Infrastructure That Moves Tomorrow."
              delay={0}
            >
              <p className="font-secondary text-white/45 text-xs leading-relaxed">
                To be a trusted infrastructure partner, recognised for
                excellence in execution, engineering capability and enduring
                value, while contributing to the development of stronger,
                smarter and more sustainable communities.
              </p>
            </VmvCard>
            <VmvCard
              Icon={SvgMountainFlag}
              label="MISSION"
              heading="To deliver infrastructure with precision, integrity and purpose."
              delay={0.1}
            >
              <ul className="space-y-2 p-0 m-0 list-none">
                {mission.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="font-secondary text-white/45 text-xs leading-relaxed">
                      {pt}
                    </span>
                  </li>
                ))}
              </ul>
            </VmvCard>
            <VmvCard
              Icon={SvgDiamond}
              label="Our Values"
              heading="The Principles That Guide Every Project."
              delay={0.2}
            >
              <p className="font-secondary text-white/45 text-xs leading-relaxed mb-4">
                The principles that guide every project we undertake and every
                relationship we build.
              </p>
              <div className="flex flex-wrap gap-2">
                {vals.map((v, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-[#f55d1b] font-primary font-semibold text-[11px] cursor-default transition-all duration-300 hover:bg-[#f55d1b] hover:text-white"
                    style={{
                      background: "rgba(245, 93, 27,0.12)",
                      border: "1px solid rgba(245, 93, 27,0.22)",
                    }}
                  >
                    {v}
                  </span>
                ))}
              </div>
            </VmvCard>
          </div>
        </div>
      </section>

      <section id="leadership" className="py-14 xs:py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl 2xl:max-w-[1580px] mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
          <div ref={ldH} style={anim(ldHv, 0)} className="mb-8 sm:mb-12">
            <SectionLabel>Our Leadership</SectionLabel>
            <div className="flex flex-col gap-2 sm:gap-3">
              <h2 className="font-primary font-bold text-[#000435] text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight max-w-2xl">
                Our Leadership
              </h2>
              <p className="font-secondary text-[#000435]/70 text-xs sm:text-sm leading-relaxed max-w-2xl">
                Our leadership team brings together decades of expertise in
                engineering, finance, and operations to deliver world-class
                infrastructure projects.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {leaders.map((l, i) => (
              <LeaderCard key={i} {...l} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="hse"
        className="py-14 xs:py-16 sm:py-20 lg:py-28 bg-[#000435] relative overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none bg-[radial-gradient(ellipse,rgba(245, 93, 27,0.07)_0%,transparent_65%)]" />
        <div className="relative z-10 max-w-7xl 2xl:max-w-[1580px] mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 lg:gap-20 items-start">
            <div ref={hseL} style={anim(hseLv, 0)}>
              <SectionLabel>
                Health, Safety &amp; Environment (HSE)
              </SectionLabel>
              <h2 className="font-primary font-bold text-white text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight mb-4 sm:mb-5">
                Health, Safety &amp; Environment (HSE)
              </h2>
              <p className="font-secondary text-white/60 text-xs sm:text-sm leading-relaxed mb-3">
                At Trion Infra, safety and sustainability are integral to the
                way we build. We are committed to maintaining a safe, healthy
                and environmentally responsible workplace across every project.
              </p>
              <p className="font-secondary text-[#f55d1b] text-xs sm:text-sm font-semibold mb-6 sm:mb-8">
                Our HSE approach focuses on:
              </p>
              <div className="inline-flex items-center gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#f55d1b] text-white font-primary font-semibold text-xs sm:text-sm cursor-default shadow-[0_8px_28px_rgba(245, 93, 27,0.28)]">
                <SvgHardHat />
                <span>
                  We don’t just build infrastructure. We build it responsibly.
                </span>
              </div>
            </div>
            <div className="space-y-3">
              {hse.map((h, i) => (
                <HseRow key={i} {...h} delay={i * 0.08} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
