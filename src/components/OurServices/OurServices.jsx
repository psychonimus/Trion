import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { HiArrowRight, HiChevronLeft, HiChevronRight } from "react-icons/hi2";

import architectureImg from "/assets/images/building.webp";
import interiorImg from "/assets/images/mining.webp";
import engineerImg from "/assets/images/infra.webp";
import planningImg from "/assets/images/excavation.webp";

const SvgCorner = () => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="#f55d1b"
    strokeWidth="1.2"
    className="w-3.5 h-3.5 opacity-80"
  >
    <path d="M1 15V1h14" />
  </svg>
);

const SvgCross = () => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="#f55d1b"
    strokeWidth="1.2"
    className="w-3.5 h-3.5 opacity-70"
  >
    <line x1="8" y1="2" x2="8" y2="14" />
    <line x1="2" y1="8" x2="14" y2="8" />
  </svg>
);

const SvgSparkle = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#f55d1b"
    strokeWidth="1.8"
    className="w-4 h-4 shrink-0"
  >
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3" />
  </svg>
);

const SvgIconEPC = () => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="#f55d1b"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-10 h-10"
  >
    <rect x="4" y="6" width="40" height="36" />
    <line x1="4" y1="16" x2="44" y2="16" />
    <line x1="16" y1="6" x2="16" y2="42" />
    <path d="M22 22h16M22 28h12M22 34h15" />
    <circle cx="10" cy="11" r="2" fill="#f55d1b" stroke="none" />
    <path d="M32 6v10M38 6v10" />
    <path d="M28 22l6 12M34 22l-6 12" stroke="#ffffff" strokeOpacity="0.3" />
  </svg>
);

const SvgIconPower = () => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="#f55d1b"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-10 h-10"
  >
    <line x1="24" y1="3" x2="24" y2="45" />
    <path d="M11 12l13 6 13-6" />
    <path d="M7 25l17 8 17-8" />
    <line x1="11" y1="12" x2="7" y2="25" />
    <line x1="37" y1="12" x2="41" y2="25" />
    <line x1="18" y1="45" x2="30" y2="45" />
    <path d="M15 36h18" />
    <path d="M12 45l5-9M36 45l-5-9" />
    <circle cx="24" cy="21" r="2" fill="#f55d1b" stroke="none" />
  </svg>
);

const SvgIconMining = () => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="#f55d1b"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-10 h-10"
  >
    <polygon points="24,4 42,16 24,44 6,16" />
    <line x1="6" y1="16" x2="42" y2="16" />
    <line x1="16" y1="16" x2="24" y2="44" />
    <line x1="32" y1="16" x2="24" y2="44" />
    <line
      x1="12"
      y1="28"
      x2="36"
      y2="28"
      strokeDasharray="2 2"
      stroke="#ffffff"
    />
    <circle cx="24" cy="24" r="2" fill="#f55d1b" stroke="none" />
  </svg>
);

const SvgIconMachinery = () => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="#f55d1b"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-10 h-10"
  >
    <path d="M6 32h26v6H6z" />
    <circle cx="12" cy="38" r="3.5" />
    <circle cx="26" cy="38" r="3.5" />
    <path d="M9 32V20h14l6 12" />
    <path d="M28 20l9-9h7v6l-5 5" />
    <line x1="17" y1="20" x2="17" y2="28" />
    <circle cx="37" cy="11" r="1.5" fill="#f55d1b" stroke="none" />
  </svg>
);

const SvgIconFinance = () => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="#f55d1b"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-10 h-10"
  >
    <polyline points="6,36 15,27 23,31 32,18 42,9" />
    <polyline points="35,9 42,9 42,16" />
    <line x1="6" y1="42" x2="42" y2="42" />
    <line x1="6" y1="6" x2="6" y2="42" />
    <rect x="10.5" y="36" width="4.5" height="6" />
    <rect x="19.5" y="31" width="4.5" height="11" />
    <rect x="28.5" y="22" width="4.5" height="20" />
    <rect x="37.5" y="14" width="4.5" height="28" />
    <circle cx="32" cy="18" r="2" fill="#f55d1b" stroke="none" />
  </svg>
);

const SvgIconRD = () => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="#f55d1b"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-10 h-10"
  >
    <circle cx="24" cy="24" r="4" fill="#f55d1b" stroke="none" />
    <ellipse cx="24" cy="24" rx="20" ry="8" />
    <ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(60 24 24)" />
    <ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(120 24 24)" />
  </svg>
);

const SvgIconUrban = () => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="#f55d1b"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-10 h-10"
  >
    <path d="M4 42h40" />
    <path d="M7 42V21l9-6v27" />
    <path d="M16 24l11-8v26" />
    <path d="M27 16l14-6v32" />
    <line x1="11" y1="27" x2="11" y2="30" />
    <line x1="11" y1="34" x2="11" y2="37" />
    <line x1="21" y1="24" x2="21" y2="27" />
    <line x1="21" y1="31" x2="21" y2="34" />
    <line x1="33" y1="18" x2="33" y2="21" />
    <line x1="33" y1="25" x2="33" y2="28" />
    <line x1="33" y1="32" x2="33" y2="35" />
  </svg>
);

const SvgIconCrushing = () => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="#f55d1b"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-10 h-10"
  >
    <polygon points="6,12 18,6 30,12 18,18" />
    <path d="M6 12v9l12 6 12-6V12" />
    <polygon points="30,21 42,27 30,33 18,27" />
    <path d="M30 30v9l12-6v-9" />
    <circle cx="12" cy="40" r="2" fill="#f55d1b" stroke="none" />
    <circle cx="21" cy="42" r="1.5" fill="#f55d1b" stroke="none" />
    <circle cx="27" cy="39" r="2" fill="#f55d1b" stroke="none" />
  </svg>
);

const SvgIconExcavation = () => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="#f55d1b"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-10 h-10"
  >
    <path d="M4 40h40" />
    <path d="M6 31c6-3 12-3 18 1.5s12 4.5 18 0" />
    <path d="M9 21l11 10" />
    <path d="M20 15l7.5 7.5" />
    <path d="M27 9l9 9" />
    <path d="M12 12l24 24" strokeDasharray="3 3" stroke="#ffffff" />
    <circle cx="9" cy="21" r="3" fill="#f55d1b" stroke="none" />
  </svg>
);

const SERVICES_DATA = [
  {
    num: "01",
    id: "service-01",
    shortTitle: "EPC & PMC",
    title:
      "1. Integrated EPC & PMC (Engineering, Procurement, and Construction Management)",
    IconComponent: SvgIconEPC,
    image: "/assets/images/infra.webp",
    caption: "Highways, Bridges, Flyovers & Turnkey Industrial Facilities",
    align: "left",
    content:
      "We deliver comprehensive EPC and PMC services for large-scale infrastructure projects, managing the entire lifecycle from blueprint to handover. Our expertise spans the construction of highways, bridges, flyovers, commercial complexes, residential townships, and industrial facilities. As seasoned construction management consultants, we oversee every critical phase, including detailed engineering, procurement of high-grade materials, resource allocation, and strict quality assurance. By integrating cutting-edge project management software and lean construction techniques, we ensure on-time, on-budget delivery while adhering to the highest safety and environmental standards. Whether you require end-to-end turnkey construction solutions or specialized project supervision, our team acts as a seamless extension of your vision, mitigating risks and optimizing efficiency at every stage.",
  },
  {
    num: "02",
    id: "service-02",
    shortTitle: "Power Systems",
    title: "2. Power Generation, Transmission & Distribution",
    IconComponent: SvgIconPower,
    image: "/assets/images/img-2.webp",
    caption: "Substations, High-Voltage Evacuation & Hybrid Renewable Plants",
    align: "right",
    content:
      "As a premier energy infrastructure company, we specialize in the development, operation, and maintenance of power generation stations, transmission lines, and distribution networks. Our portfolio includes projects based on conventional thermal and hydro resources, as well as cutting-edge renewable energy systems such as solar, wind, and hybrid power plants. We execute BOT (Build-Operate-Transfer), BOOT (Build-Own-Operate-Transfer), and BOLT (Build-Own-Lease-Transfer) models, offering flexible financing and operational frameworks for public and private utilities. Beyond generation, we manage high-voltage tie-lines, substations, and grid connectivity to ensure reliable power evacuation and distribution. Our end-to-end capabilities also include the acquisition of existing power assets, performance optimization, and long-term O&M (Operations and Maintenance) contracts, ensuring energy security and sustainability for industrial, commercial, and residential consumers.",
  },
  {
    num: "03",
    id: "service-03",
    shortTitle: "Mining & Materials",
    title: "3. Mining, Minerals & Construction Materials Supply",
    IconComponent: SvgIconMining,
    image: "/assets/images/mining.webp",
    caption: "Mineral Concessions, Quarrying & Pan-India Bulk Materials Supply",
    align: "left",
    content:
      "We are a dominant force in the mining and trading of minerals, metals, and ores, backed by robust concessions and a highly efficient supply chain network. Our mining operations are conducted with a strong emphasis on sustainable extraction practices, environmental stewardship, and worker safety. In parallel, we operate a large-scale trading and distribution vertical for essential construction raw materials, including cement, steel, aggregates, asphalt, and specialized building products. By managing the entire value chain—from quarrying and processing to logistics and just-in-time delivery—we guarantee a consistent, high-quality supply for our own projects and external clients. Our ability to procure materials in bulk and distribute them across India and international markets provides a significant cost advantage, making us a trusted partner for developers, government agencies, and subcontractors.",
  },
  {
    num: "04",
    id: "service-04",
    shortTitle: "Heavy Machinery",
    title: "4. Heavy Equipment, Machinery & Tools Trading",
    IconComponent: SvgIconMachinery,
    image: "/assets/images/img-1.webp",
    caption: "Global OEM Import, Earthmovers, Cranes & 24/7 Plant Support",
    align: "right",
    content:
      "Our equipment and machinery division facilitates the global import, export, manufacturing, and supply of heavy construction plant and tools. We provide a comprehensive inventory ranging from earthmovers, cranes, and concrete batching plants to precision tools, welding equipment, and safety gear. Recognizing that equipment downtime is a major cost driver, we offer 24/7 after-sales support, spare parts availability, and flexible leasing options. Our deep industry connections allow us to source high-performance machinery from leading international OEMs while also manufacturing cost-effective alternatives domestically. Whether you need to acquire, lease, or service critical plant machinery for a megaproject, our trading vertical ensures you have the right equipment, in the right place, at the right time.",
  },
  {
    num: "05",
    id: "service-05",
    shortTitle: "Financing & Assets",
    title: "5. Infrastructure Financing, Investment & Asset Management",
    IconComponent: SvgIconFinance,
    image: "/assets/images/img-3.webp",
    caption:
      "Project Syndication, Debt-Equity Structuring & Asset Monetization",
    align: "left",
    content:
      "We function as infrastructure financiers, promoters, and investment bankers, providing the crucial capital layer that brings megaprojects to life. Our financial services include project financing, syndication, underwriting of shares and debentures, and equity participation in joint ventures. We specialize in raising funds from domestic and international banks, financial institutions, and government agencies, structuring debt-equity ratios to maximize returns while minimizing exposure. Beyond funding, we excel in asset management and real estate development, acquiring and monetizing land, industrial colonies, townships, and commercial properties. Our team evaluates concessions, licenses, and governmental contracts to identify high-yield investment opportunities. By blending financial acumen with deep operational knowledge, we de-risk projects and deliver superior value to investors and stakeholders.",
  },
  {
    num: "06",
    id: "service-06",
    shortTitle: "Technical R&D",
    title: "6. Technical R&D, Collaborations & Skill Development",
    IconComponent: SvgIconRD,
    image: "/assets/images/about-img.webp",
    caption: "Advanced Materials Testing, Process Automation & Skill Centers",
    align: "right",
    content:
      "Innovation is the cornerstone of our operations; hence, we invest heavily in scientific and technical research and development. Our state-of-the-art research laboratories and experimental workshops focus on testing new construction materials, improving energy efficiency, and developing sustainable building technologies. We actively foster technical collaborations and licensing agreements with global and domestic firms to acquire cutting-edge know-how in quality control, product innovation, and process automation. Beyond internal R&D, we are committed to human capital development through sponsored scholarships, merit awards, vocational training programs, and academic partnerships. By nurturing talent and pioneering new methodologies, we aim to elevate industry standards and contribute to the nation’s technological self-reliance.",
  },
  {
    num: "07",
    id: "service-07",
    shortTitle: "Urban Development",
    title: "7. Rural-Urban Development & Social Infrastructure",
    IconComponent: SvgIconUrban,
    image: "/assets/images/building.webp",
    caption: "Townships, Affordable Housing, Water Utilities & Green Building",
    align: "left",
    content:
      "As part of our commitment to nation-building, we actively undertake rural, semi-urban, and urban development programs that go beyond conventional construction. This vertical focuses on creating social infrastructure, including affordable housing, schools, hospitals, water supply systems, sanitation networks, and integrated townships. We partner with government bodies and local authorities to execute welfare-oriented projects that uplift communities and promote economic inclusion. Our initiatives also encompass environmental sustainability, such as waste-to-energy plants and green building certifications. By aligning our business goals with social responsibility, we deliver projects that foster long-term community prosperity, improve living standards, and support India's broader socio-economic growth agenda.",
  },
  {
    num: "08",
    id: "service-08",
    shortTitle: "Mining & Crushing",
    title: "8. Mining and Crushing Services",
    IconComponent: SvgIconCrushing,
    image: "/assets/images/project-1.webp",
    caption: "Controlled Drilling, Blasting & Precision Aggregate Production",
    align: "right",
    content:
      "We offer dependable, end-to-end mining and crushing services tailored for construction, infrastructure development, quarrying, and large-scale material supply projects. Our operations are meticulously planned to ensure maximum productivity, responsible resource handling, and a consistent supply of high-quality processed materials. In the extraction phase, we provide comprehensive drilling and blasting services, including controlled rock breaking, material recovery, and site preparation, all executed with strict adherence to safety protocols and environmental regulations. Our crushing operations further process raw rock and extracted minerals into precise, usable aggregates for road base construction, concrete production, foundations, drainage systems, backfilling, and general civil works. By aligning our extraction techniques and crushing methodologies with site-specific conditions, project quantities, and logistical requirements, we guarantee a seamless, efficient supply chain that keeps your infrastructure projects moving forward on time and within budget.",
  },
  {
    num: "09",
    id: "service-09",
    shortTitle: "Earthworks",
    title: "9. Excavation and Earthworks Services",
    IconComponent: SvgIconExcavation,
    image: "/assets/images/excavation.webp",
    caption: "Bulk Earthmoving, Site Clearing, Grading & Sub-Grade Finishing",
    align: "left",
    content:
      "We deliver professional excavation and earthworks services for construction sites, infrastructure projects, mining operations, and land development, utilizing modern equipment and methodical planning to prepare sites safely and efficiently. Our comprehensive site clearing services remove vegetation, debris, surface obstructions, and demolition waste, creating clean, accessible working areas ready for foundations, roads, utilities, and subsequent civil works. We follow this with precision grading and leveling, including ground leveling, slope formation, platform preparation, road and pavement grading, drainage fall preparation, and final surface finishing, ensuring optimal site usability, proper water runoff, and robust foundations for future structures. Our earthmoving and disposal capabilities encompass bulk excavation, soil and rock removal, embankment construction, backfilling, trenching, material relocation, and responsible spoil disposal. By coordinating every phase from initial clearing to final grading and material transport, we maintain an organized, productive, and safe construction environment, ensuring your project progresses seamlessly from ground preparation to vertical construction.",
  },
];

const ITEMS_PER_PAGE = 5;

export default function OurServices() {
  const [currentPage, setCurrentPage] = useState(0);
  const [activeSlot, setActiveSlot] = useState(0);

  const sectionRef = useRef(null);
  const bgImagesRef = useRef([]);
  const contentWrapperRef = useRef(null);
  const hasAnimatedIn = useRef(false);

  const totalPages = Math.ceil(SERVICES_DATA.length / ITEMS_PER_PAGE);
  const currentServices = SERVICES_DATA.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE,
  );

  const activeGlobalIndex = currentPage * ITEMS_PER_PAGE + activeSlot;

  useEffect(() => {
    if (totalPages <= 1) return;

    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1 >= totalPages ? 0 : prev + 1));
      setActiveSlot(0);
    }, 4000);

    return () => clearInterval(timer);
  }, [totalPages]);

  useEffect(() => {
    bgImagesRef.current.forEach((imgEl, index) => {
      if (!imgEl) return;
      if (index === activeGlobalIndex) {
        gsap.to(imgEl, {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          overwrite: "auto",
        });
      } else {
        gsap.to(imgEl, {
          opacity: 0,
          scale: 1.06,
          duration: 0.8,
          ease: "power2.out",
          overwrite: "auto",
        });
      }
    });
  }, [activeGlobalIndex]);

  useEffect(() => {
    if (contentWrapperRef.current) {
      gsap.fromTo(
        contentWrapperRef.current.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.06,
          ease: "power2.out",
          overwrite: "auto",
        },
      );
    }
  }, [currentPage]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedIn.current) {
          hasAnimatedIn.current = true;

          const ctx = gsap.context(() => {
            gsap.fromTo(
              sectionRef.current,
              { opacity: 0 },
              { opacity: 1, duration: 0.8, ease: "power2.out" },
            );
          }, sectionRef);

          return () => ctx.revert();
        }
      },
      { threshold: 0.2 },
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

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    setActiveSlot(0);
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1 >= totalPages ? 0 : prev + 1));
    setActiveSlot(0);
  };

  return (
    <div className="bg-[#000435] py-12 border-t border-b border-white/10">
      <section className="px-6 sm:px-8 lg:px-12 flex items-center justify-between max-w-7xl 2xl:max-w-[1580px] mx-auto mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-5 h-[2px] bg-[#f55d1b]" />
            <span className="font-mono text-xs text-[#f55d1b] tracking-[0.2em] uppercase font-bold">
              CAPABILITIES
            </span>
          </div>
          <h2
            className="font-primary font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight"
            style={{ color: "#ffffff" }}
          >
            Our Services
          </h2>
        </div>

        {totalPages > 1 && (
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-white/20 bg-[#000435] flex items-center justify-center text-white hover:bg-[#f55d1b] hover:border-[#f55d1b] hover:text-white transition-all shadow-md"
              aria-label="Previous page"
            >
              <HiChevronLeft className="text-lg" />
            </button>
            <span className="text-sm font-mono font-bold text-slate-300 px-2">
              {currentPage + 1} / {totalPages}
            </span>
            <button
              type="button"
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-white/20 bg-[#000435] flex items-center justify-center text-white hover:bg-[#f55d1b] hover:border-[#f55d1b] hover:text-white transition-all shadow-md"
              aria-label="Next page"
            >
              <HiChevronRight className="text-lg" />
            </button>
          </div>
        )}
      </section>

      <section
        ref={sectionRef}
        id="services"
        className="relative w-full h-[80vh] min-h-[340px] max-h-[380px] 2xl:max-h-[460px] overflow-hidden flex flex-col justify-end bg-[#000435] font-primary select-none"
      >
        <div className="absolute inset-0 w-full h-full overflow-hidden z-[1] pointer-events-none">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => (bgImagesRef.current[index] = el)}
              className="absolute inset-0 w-full h-full bg-cover bg-[center_30%] bg-no-repeat will-change-[opacity,transform] origin-center"
              style={{
                backgroundImage: `url(${service.image})`,
                opacity: index === 0 ? 1 : 0,
              }}
            />
          ))}
          <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_top,rgba(10,17,40,0.96)_0%,rgba(10,17,40,0.65)_35%,rgba(10,17,40,0.25)_65%,rgba(10,17,40,0.45)_100%)] z-[2]" />
        </div>

        <div
          ref={contentWrapperRef}
          className="relative z-[3] w-full h-full flex flex-col lg:flex-row"
        >
          {currentServices.map((service, slotIdx) => {
            const isActive = slotIdx === activeSlot;

            return (
              <div
                key={service.id}
                className={`group relative w-full lg:w-1/5 lg:flex-1 h-auto lg:h-full flex flex-col justify-end p-5 sm:p-6 lg:px-4 lg:py-6 xl:px-6 xl:py-8 border-b border-white/10 lg:border-b-0 cursor-pointer outline-none transition-[flex,background-color] duration-500 [transition-timing-function:cubic-bezier(0.25,1,0.5,1)] ${
                  isActive
                    ? "min-h-[220px] bg-[#000435]/70 lg:bg-[#000435]/40 backdrop-blur-sm"
                    : "min-h-[140px] sm:min-h-[160px] bg-transparent hover:bg-white/[0.04]"
                }`}
                onMouseEnter={() => setActiveSlot(slotIdx)}
                onClick={() => setActiveSlot(slotIdx)}
                tabIndex={0}
                role="button"
                aria-label={`View ${service.tag} service details`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setActiveSlot(slotIdx);
                  }
                }}
              >
                {slotIdx < currentServices.length - 1 && (
                  <div
                    className={`absolute top-0 right-0 w-[1px] h-full transition-[background] duration-400 hidden lg:block ${
                      isActive
                        ? "bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05)_0%,rgba(245, 93, 27,0.5)_50%,rgba(255,255,255,0.4)_85%,rgba(255,255,255,0.08)_100%)]"
                        : "bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.18)_40%,rgba(255,255,255,0.25)_80%,rgba(255,255,255,0.08)_100%)]"
                    }`}
                  />
                )}

                <div className="relative flex flex-col items-start gap-2.5 w-full origin-bottom-left z-[4]">
                  <span
                    className={`font-mono text-[10px] tracking-widest uppercase font-bold transition-colors ${
                      isActive ? "text-[#f55d1b]" : "text-white/50"
                    }`}
                  >
                    {service.shortTitle || `SERVICE // ${service.num}`}
                  </span>

                  <h3
                    className={`m-0 font-primary text-lg sm:text-xl lg:text-[1.08rem] xl:text-[1.18rem] 2xl:text-[1.28rem] font-bold leading-[1.22] tracking-tight transition-[color,transform] duration-350 line-clamp-2 ${
                      isActive
                        ? "text-white"
                        : "text-white/80 group-hover:text-white"
                    }`}
                  >
                    {service.title}
                  </h3>

                  <div
                    className={`grid transition-[grid-template-rows,opacity,margin-top] duration-500 [transition-timing-function:cubic-bezier(0.25,1,0.5,1)] w-full overflow-hidden [&>*]:min-h-0 ${
                      isActive
                        ? "grid-rows-[1fr] opacity-100 mt-1"
                        : "grid-rows-[0fr] opacity-0 mt-0"
                    }`}
                  >
                    <div className="overflow-hidden min-h-0">
                      {service.caption && (
                        <p className="m-0 mb-4 font-secondary text-sm sm:text-base lg:text-[0.92rem] font-normal leading-[1.5] text-slate-200">
                          {service.caption}
                        </p>
                      )}

                      <Link
                        to={`/services#${service.id}`}
                        className="group/btn relative inline-flex items-center gap-2 hover:gap-3 no-underline font-primary text-xs sm:text-sm font-semibold text-[#f55d1b] hover:text-white py-1 transition-[gap,color] duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-[#f55d1b] after:transition-[width] after:duration-350"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>Discover More</span>
                        <HiArrowRight className="text-base sm:text-lg transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {totalPages > 1 && (
          <div className="relative z-10 flex justify-center items-center gap-2 py-4">
            {Array.from({ length: totalPages }).map((_, pageIdx) => (
              <button
                key={pageIdx}
                type="button"
                onClick={() => {
                  setCurrentPage(pageIdx);
                  setActiveSlot(0);
                }}
                className={`transition-all duration-300 rounded-full ${
                  currentPage === pageIdx
                    ? "w-8 h-2 bg-[#f55d1b] shadow-md shadow-orange-500/40"
                    : "w-2 h-2 bg-white/35 hover:bg-white/70"
                }`}
                aria-label={`Go to page ${pageIdx + 1}`}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
