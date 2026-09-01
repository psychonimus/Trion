import React, { useState, useRef, useEffect, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiUsers,
  FiStar,
  FiFileText,
  FiShield,
  FiHelpCircle,
  FiZap,
  FiTruck,
  FiTrendingUp,
  FiCpu,
  FiHome,
  FiTarget,
  FiBook,
} from "react-icons/fi";
import {
  LuHardHat,
  LuHandshake,
  LuMountain,
  LuDrill,
  LuShovel,
  LuBuilding2,
  LuFlag,
} from "react-icons/lu";

// Services menu — mirrors the 9 services in ServicesPage.jsx
const productLinks = [
  {
    title: "Integrated EPC & PMC",
    href: "/services",
    hash: "#service-01",
    description: "Highways, bridges, flyovers & turnkey industrial facilities",
    icon: LuHardHat,
  },
  {
    title: "Power Generation & Distribution",
    href: "/services",
    hash: "#service-02",
    description: "Substations, high-voltage evacuation & hybrid renewable plants",
    icon: FiZap,
  },
  {
    title: "Mining, Minerals & Materials Supply",
    href: "/services",
    hash: "#service-03",
    description: "Mineral concessions, quarrying & pan-India bulk supply",
    icon: LuMountain,
  },
  {
    title: "Heavy Equipment & Machinery Trading",
    href: "/services",
    hash: "#service-04",
    description: "Global OEM import, earthmovers, cranes & 24/7 plant support",
    icon: FiTruck,
  },
  {
    title: "Infrastructure Financing & Assets",
    href: "/services",
    hash: "#service-05",
    description: "Project syndication, debt-equity structuring & asset monetization",
    icon: FiTrendingUp,
  },
  {
    title: "Technical R&D & Skill Development",
    href: "/services",
    hash: "#service-06",
    description: "Advanced materials testing, process automation & skill centres",
    icon: FiCpu,
  },
  {
    title: "Rural-Urban Development",
    href: "/services",
    hash: "#service-07",
    description: "Townships, affordable housing, water utilities & green building",
    icon: LuBuilding2,
  },
  {
    title: "Mining & Crushing Services",
    href: "/services",
    hash: "#service-08",
    description: "Controlled drilling, blasting & precision aggregate production",
    icon: LuDrill,
  },
  {
    title: "Excavation & Earthworks",
    href: "/services",
    hash: "#service-09",
    description: "Bulk earthmoving, site clearing, grading & sub-grade finishing",
    icon: LuShovel,
  },
];

// About menu — mirrors the actual sections in AboutUs.jsx
const companyLinks = [
  {
    title: "Company Profile",
    href: "/about",
    hash: "#company-profile",
    description: "Our story, identity, and 25+ years of infrastructure delivery",
    icon: FiUsers,
  },
  {
    title: "Executive Leadership",
    href: "/about",
    hash: "#leadership",
    description: "Directors and senior leadership driving Trion's global operations",
    icon: LuFlag,
  },
  {
    title: "Vision & Mission",
    href: "/about",
    hash: "#mission-vision",
    description: "Engineering excellence, enduring value, and sustainable progress",
    icon: FiTarget,
  },
  {
    title: "Core Values & Culture",
    href: "/about",
    hash: "#mission-vision",
    description: "Integrity, safety, accountability, excellence, and innovation",
    icon: FiShield,
  },
  {
    title: "Core Capabilities Portfolio",
    href: "/about",
    hash: "#core-capabilities",
    description: "EPC, power, mining, machinery, financing, and urban development",
    icon: FiStar,
  },
  {
    title: "Health, Safety & Environment (HSE)",
    href: "/about",
    hash: "#hse",
    description: "Zero-harm workplace, environmental stewardship, and compliance",
    icon: FiFileText,
  },
];

function GridCard({ link, onClick }) {
  const Icon = link.icon;
  return (
    <Link
      to={link.href + (link.hash || "")}
      className="flex items-start gap-3 p-3.5 bg-[#000435] border border-white/10 hover:border-[#f55d1b]/60 rounded-xl transition-all duration-150 hover:bg-[#f55d1b]/10 no-underline group"
      onClick={onClick}
    >
      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#f55d1b]/15 text-[#f55d1b] border border-[#f55d1b]/30 shrink-0 text-sm group-hover:scale-105 transition-transform mt-0.5">
        <Icon />
      </div>
      <div className="flex flex-col">
        <span className="text-[12.5px] font-bold text-white group-hover:text-[#f55d1b] transition-colors leading-tight mb-1 whitespace-normal">
          {link.title}
        </span>
        {link.description && (
          <p className="text-[11px] text-slate-300 leading-snug m-0 whitespace-normal">
            {link.description}
          </p>
        )}
      </div>
    </Link>
  );
}

function LargeItem({ link, onClick }) {
  const Icon = link.icon;
  return (
    <Link
      to={link.href + (link.hash || "")}
      className="flex items-start gap-2.5 p-2 rounded-lg transition-all duration-150 hover:bg-[#f55d1b]/10 no-underline group"
      onClick={onClick}
    >
      <div className="flex items-center justify-center w-5 h-5 text-[#f55d1b] shrink-0 text-xs mt-0.5">
        <Icon />
      </div>
      <div className="flex flex-col">
        <span className="text-[11.5px] font-semibold text-white group-hover:text-[#f55d1b] transition-colors leading-tight whitespace-normal">
          {link.title}
        </span>
        {link.description && (
          <p className="text-[10.5px] text-slate-400 leading-snug m-0 mt-0.5 whitespace-normal">
            {link.description}
          </p>
        )}
      </div>
    </Link>
  );
}

function SmallItem({ item, onClick }) {
  const Icon = item.icon;
  return (
    <Link
      to={item.href + (item.hash || "")}
      className="flex items-center gap-2.5 p-2 rounded-lg text-slate-200 hover:text-white hover:bg-[#f55d1b]/15 transition-all duration-150 no-underline group"
      onClick={onClick}
    >
      <Icon className="text-[#f55d1b] text-xs shrink-0" />
      <span className="text-[11.5px] font-semibold tracking-wide group-hover:text-white whitespace-normal">
        {item.title}
      </span>
    </Link>
  );
}

function CapsuleDropdown({
  label,
  to,
  isOpen,
  isActive,
  onOpen,
  onClose,
  onClick,
  children,
}) {
  return (
    <div
      className="relative inline-flex items-center"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <Link
        to={to}
        className={`inline-flex items-center justify-center gap-1 px-3.5 py-1.5 font-primary text-[11px] font-bold tracking-[0.1em] uppercase rounded-full whitespace-nowrap transition-all duration-150 no-underline select-none ${
          isActive
            ? "bg-[#f55d1b] text-white shadow-md shadow-orange-500/40 font-extrabold"
            : "text-slate-200 hover:text-white hover:bg-white/10"
        }`}
        onClick={onClick}
      >
        <span>{label}</span>
        <FiChevronDown
          className={`text-[10px] transition-transform duration-200 ${
            isOpen ? "rotate-180 text-[#f55d1b]" : "text-slate-300"
          }`}
        />
      </Link>

      {/* Solid Opaque Dropdown Flyout Panel */}
      <div
        className={`absolute top-[calc(100%+12px)] left-1/2 z-[1200] bg-[#000435] border border-slate-700/80 rounded-2xl shadow-[0_24px_50px_rgba(0,0,0,0.85)] transition-all duration-150 ${
          isOpen
            ? "opacity-100 pointer-events-auto -translate-x-1/3 translate-y-0 scale-100"
            : "opacity-0 pointer-events-none -translate-x-1/2 translate-y-2 scale-95"
        }`}
        role="region"
        aria-label={`${label} submenu`}
      >
        <div className="p-5 font-primary bg-[#000435] rounded-2xl">{children}</div>
      </div>
    </div>
  );
}

function MobileAccordionItem({ label, to, links, isOpen, onToggle, onCloseMenu }) {
  const contentRef = useRef(null);

  return (
    <div className="rounded-xl overflow-hidden mb-1 bg-[#000435]/80 border border-slate-800">
      <div className="flex items-center justify-between w-full">
        <Link
          to={to}
          className="flex-1 px-4 py-2.5 font-primary text-xs font-bold tracking-wider uppercase text-white hover:text-[#f55d1b] no-underline"
          onClick={onCloseMenu}
        >
          {label}
        </Link>
        <button
          type="button"
          className="p-2.5 text-[#f55d1b] hover:text-white"
          onClick={onToggle}
          aria-expanded={isOpen}
        >
          <FiChevronDown
            className={`text-sm transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      <div
        className="transition-[max-height] duration-200 ease-in-out overflow-hidden"
        style={{
          maxHeight: isOpen
            ? `${contentRef.current ? contentRef.current.scrollHeight : 500}px`
            : "0px",
        }}
      >
        <div className="flex flex-col gap-1 px-3 pb-3" ref={contentRef}>
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.title}
                to={link.href + (link.hash || "")}
                className="flex items-center gap-2.5 p-2 rounded-lg bg-[#000435] border border-slate-800 hover:bg-[#f55d1b]/15 hover:border-[#f55d1b]/30 transition-all no-underline text-white"
                onClick={onCloseMenu}
              >
                <Icon className="text-[#f55d1b] text-sm shrink-0" />
                <div className="flex flex-col min-w-0">
                  <span className="text-[11.5px] font-bold text-white leading-tight truncate">
                    {link.title}
                  </span>
                  {link.description && (
                    <span className="text-[10px] text-slate-400 leading-tight mt-0.5 truncate">
                      {link.description}
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(null);
  const [openMobileSection, setOpenMobileSection] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeoutRef = useRef(null);
  const navRef = useRef(null);

  const handleOpen = (name) => {
    clearTimeout(timeoutRef.current);
    setActiveMenu(name);
  };

  const handleClose = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 120);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setActiveMenu(null);
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const mobileSections = [
    { id: "about", name: "ABOUT", to: "/about", list: companyLinks },
    { id: "services", name: "SERVICES", to: "/services", list: productLinks },
  ];


  const currentPath = location.pathname;

  return (
    <header className="fixed top-3 sm:top-4 left-0 right-0 z-[1000] w-full px-4 sm:px-6 lg:px-8 pointer-events-none flex justify-center font-primary">
      <div className="w-full max-w-7xl 2xl:max-w-[1580px] mx-auto pointer-events-auto relative" ref={navRef}>
        <nav className="relative flex items-center justify-between h-[52px] sm:h-[56px] px-3 sm:px-5 bg-[#000435]/85 backdrop-blur-md backdrop-saturate-150 border border-white/15 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.12)] transition-all duration-200">
          <Link
            to="/"
            className="flex items-center select-none cursor-pointer pl-4 sm:pl-5 pr-5 sm:pr-6 py-1 no-underline group"
          >
            <span className="font-primary text-sm sm:text-[15px] font-black text-[#f55d1b] tracking-[0.22em] uppercase transition-transform duration-150 group-hover:scale-105">
              TRION
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-0.5 p-0.5 bg-[#000435]/80 backdrop-blur-sm border border-white/10 rounded-full">
            <Link
              to="/"
              className={`inline-flex items-center justify-center px-3 py-1 font-primary text-[10.5px] font-bold tracking-[0.08em] uppercase rounded-full whitespace-nowrap transition-all duration-150 no-underline select-none ${
                currentPath === "/"
                  ? "bg-[#f55d1b] text-white shadow-sm shadow-orange-500/40 font-extrabold"
                  : "text-slate-300 hover:text-white hover:bg-white/10"
              }`}
              onClick={() => setActiveMenu(null)}
            >
              HOME
            </Link>

            <CapsuleDropdown
              label="ABOUT"
              to="/about"
              isOpen={activeMenu === "about"}
              isActive={currentPath.startsWith("/about")}
              onClick={() => setActiveMenu(null)}
              onOpen={() => handleOpen("about")}
              onClose={handleClose}
            >
              <div className="flex gap-7 min-w-[720px] max-w-[760px] bg-[#000435]">
                <div className="flex-1">
                  <span className="block text-[10px] font-mono font-bold tracking-[0.18em] uppercase text-[#f55d1b] mb-2.5">
                    ORGANIZATION & LEADERSHIP
                  </span>
                  <div className="flex flex-col gap-2.5">
                    {companyLinks.slice(0, 2).map((link) => (
                      <GridCard
                        key={link.title}
                        link={link}
                        onClick={() => setActiveMenu(null)}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex-1 border-l border-slate-800 pl-6">
                  <span className="block text-[10px] font-mono font-bold tracking-[0.18em] uppercase text-[#f55d1b] mb-2.5">
                    VALUES, CAPABILITIES & SAFETY
                  </span>
                  <div className="flex flex-col gap-1.5">
                    {companyLinks.slice(2).map((link) => (
                      <LargeItem
                        key={link.title}
                        link={link}
                        onClick={() => setActiveMenu(null)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </CapsuleDropdown>

            <CapsuleDropdown
              label="SERVICES"
              to="/services"
              isOpen={activeMenu === "services"}
              isActive={currentPath.startsWith("/services")}
              onClick={() => setActiveMenu(null)}
              onOpen={() => handleOpen("services")}
              onClose={handleClose}
            >
              <div className="flex gap-7 min-w-[780px] max-w-[820px] bg-[#000435]">
                <div className="flex-[1.2]">
                  <span className="block text-[10px] font-mono font-bold tracking-[0.18em] uppercase text-[#f55d1b] mb-2.5">
                    CORE DISCIPLINES
                  </span>
                  <ul className="flex flex-col gap-2.5 p-0 m-0 list-none">
                    {productLinks.slice(0, 3).map((link) => (
                      <li key={link.title}>
                        <GridCard
                          link={link}
                          onClick={() => setActiveMenu(null)}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-[1] border-l border-slate-800 pl-6">
                  <span className="block text-[10px] font-mono font-bold tracking-[0.18em] uppercase text-[#f55d1b] mb-2.5">
                    SPECIALIZED CAPABILITIES
                  </span>
                  <ul className="grid grid-cols-1 gap-1.5 p-0 m-0 list-none">
                    {productLinks.slice(3).map((link) => (
                      <li key={link.title}>
                        <SmallItem
                          item={link}
                          onClick={() => setActiveMenu(null)}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CapsuleDropdown>

            <Link
              to="/projects"
              className={`inline-flex items-center justify-center px-3 py-1 font-primary text-[10.5px] font-bold tracking-[0.08em] uppercase rounded-full whitespace-nowrap transition-all duration-150 no-underline select-none ${
                currentPath.startsWith("/projects")
                  ? "bg-[#f55d1b] text-white shadow-sm shadow-orange-500/40 font-extrabold"
                  : "text-slate-300 hover:text-white hover:bg-white/10"
              }`}
              onClick={() => setActiveMenu(null)}
            >
              PROJECTS
            </Link>

            <Link
              to="/strategicAlliances"
              className={`inline-flex items-center justify-center px-3 py-1 font-primary text-[10.5px] font-bold tracking-[0.08em] uppercase rounded-full whitespace-nowrap transition-all duration-150 no-underline select-none ${
                currentPath.startsWith("/strategicAlliances")
                  ? "bg-[#f55d1b] text-white shadow-sm shadow-orange-500/40 font-extrabold"
                  : "text-slate-300 hover:text-white hover:bg-white/10"
              }`}
              onClick={() => setActiveMenu(null)}
            >
              STRATEGIC ALLIANCES
            </Link>

            <Link
              to="/blogs"
              className={`inline-flex items-center justify-center px-3 py-1 font-primary text-[10.5px] font-bold tracking-[0.08em] uppercase rounded-full whitespace-nowrap transition-all duration-150 no-underline select-none ${
                currentPath.startsWith("/blogs")
                  ? "bg-[#f55d1b] text-white shadow-sm shadow-orange-500/40 font-extrabold"
                  : "text-slate-300 hover:text-white hover:bg-white/10"
              }`}
              onClick={() => setActiveMenu(null)}
            >
              BLOGS
            </Link>

            <Link
              to="/contact"
              className={`inline-flex items-center justify-center px-3 py-1 font-primary text-[10.5px] font-bold tracking-[0.08em] uppercase rounded-full whitespace-nowrap transition-all duration-150 no-underline select-none ${
                currentPath.startsWith("/contact")
                  ? "bg-[#f55d1b] text-white shadow-sm shadow-orange-500/40 font-extrabold"
                  : "text-slate-300 hover:text-white hover:bg-white/10"
              }`}
              onClick={() => setActiveMenu(null)}
            >
              CONTACT
            </Link>
          </div>

          <div className="flex items-center gap-2 pr-1 sm:pr-2">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center justify-center px-4 py-1.5 bg-[#f55d1b] hover:bg-[#f55d1b] text-white font-primary text-[10.5px] font-extrabold tracking-[0.06em] uppercase rounded-full whitespace-nowrap shadow-sm shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 no-underline select-none"
            >
              GET IN TOUCH
            </Link>

            <button
              type="button"
              className="lg:hidden flex items-center justify-center w-8 h-8 rounded-full bg-white/10 border border-slate-700 text-white hover:bg-[#f55d1b]/20 hover:border-[#f55d1b] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <FiX size={16} /> : <FiMenu size={16} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden fixed top-[68px] left-3 right-3 max-h-[calc(100vh-84px)] overflow-y-auto bg-[#000435] border border-slate-700/90 rounded-2xl shadow-[0_24px_50px_rgba(0,0,0,0.85)] p-4 transition-all duration-200 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0 scale-100"
            : "opacity-0 pointer-events-none -translate-y-2 scale-95"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex flex-col gap-1">
          <Link
            to="/"
            className={`flex items-center px-4 py-2.5 font-primary text-xs font-bold tracking-wider uppercase rounded-xl transition-colors no-underline ${
              currentPath === "/"
                ? "bg-[#f55d1b] text-white"
                : "text-slate-200 hover:text-white hover:bg-white/10"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            HOME
          </Link>

          {mobileSections.map((section) => (
            <MobileAccordionItem
              key={section.id}
              label={section.name}
              to={section.to}
              links={section.list}
              isOpen={openMobileSection === section.id}
              onToggle={() =>
                setOpenMobileSection((prev) =>
                  prev === section.id ? null : section.id
                )
              }
              onCloseMenu={() => setMobileMenuOpen(false)}
            />
          ))}

          <Link
            to="/projects"
            className={`flex items-center px-4 py-2.5 font-primary text-xs font-bold tracking-wider uppercase rounded-xl transition-colors no-underline ${
              currentPath.startsWith("/projects")
                ? "bg-[#f55d1b] text-white"
                : "text-slate-200 hover:text-white hover:bg-white/10"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            PROJECTS
          </Link>

          <Link
            to="/strategicAlliances"
            className={`flex items-center px-4 py-2.5 font-primary text-xs font-bold tracking-wider uppercase rounded-xl transition-colors no-underline ${
              currentPath.startsWith("/strategicAlliances")
                ? "bg-[#f55d1b] text-white"
                : "text-slate-200 hover:text-white hover:bg-white/10"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            STRATEGIC ALLIANCES
          </Link>

          <Link
            to="/blogs"
            className={`flex items-center px-4 py-2.5 font-primary text-xs font-bold tracking-wider uppercase rounded-xl transition-colors no-underline ${
              currentPath.startsWith("/blogs")
                ? "bg-[#f55d1b] text-white"
                : "text-slate-200 hover:text-white hover:bg-white/10"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            BLOGS
          </Link>

          <Link
            to="/contact"
            className={`flex items-center px-4 py-2.5 font-primary text-xs font-bold tracking-wider uppercase rounded-xl transition-colors no-underline ${
              currentPath.startsWith("/contact")
                ? "bg-[#f55d1b] text-white"
                : "text-slate-200 hover:text-white hover:bg-white/10"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            CONTACT
          </Link>

          <Link
            to="/contact"
            className="mt-2 flex items-center justify-center p-3 bg-[#f55d1b] text-white font-primary text-xs font-extrabold tracking-wider uppercase rounded-xl shadow-md shadow-orange-500/40 no-underline"
            onClick={() => setMobileMenuOpen(false)}
          >
            GET IN TOUCH
          </Link>
        </div>
      </div>
    </header>
  );
}
