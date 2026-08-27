import React, { useState, useRef, useEffect } from "react";
import {
  FiCode,
  FiGlobe,
  FiLayers,
  FiUserPlus,
  FiBarChart2,
  FiShield,
  FiDollarSign,
  FiMenu,
  FiX,
  FiChevronDown,
  FiUsers,
  FiStar,
  FiFileText,
  FiRefreshCcw,
  FiHelpCircle,
} from "react-icons/fi";
import { LuPlug, LuHandshake, LuLeaf } from "react-icons/lu";
import "./Navbar.css";

// ── Navigation Data ───────────────────────────────────────────
const productLinks = [
  {
    title: "Website Builder",
    href: "#",
    description: "Create responsive websites with ease",
    icon: FiGlobe,
  },
  {
    title: "Cloud Platform",
    href: "#",
    description: "Deploy and scale apps in the cloud",
    icon: FiLayers,
  },
  {
    title: "Team Collaboration",
    href: "#",
    description: "Tools to help your teams work better together",
    icon: FiUserPlus,
  },
  { title: "Analytics", href: "#", icon: FiBarChart2 },
  { title: "Integrations", href: "#", icon: LuPlug },
  { title: "E-Commerce", href: "#", icon: FiDollarSign },
  { title: "Security", href: "#", icon: FiShield },
  { title: "API", href: "#", icon: FiCode },
];

const companyLinks = [
  {
    title: "About Us",
    href: "#",
    description: "Learn more about our story and team",
    icon: FiUsers,
  },
  {
    title: "Customer Stories",
    href: "#",
    description: "See how we have helped our clients succeed",
    icon: FiStar,
  },
  {
    title: "Terms of Service",
    href: "#",
    description: "Understand how we operate",
    icon: FiFileText,
  },
  {
    title: "Privacy Policy",
    href: "#",
    description: "How we protect your information",
    icon: FiShield,
  },
  {
    title: "Refund Policy",
    href: "#",
    description: "Details about refunds and cancellations",
    icon: FiRefreshCcw,
  },
  {
    title: "Partnerships",
    href: "#",
    description: "Collaborate with us for mutual growth",
    icon: LuHandshake,
  },
  {
    title: "Blog",
    href: "#",
    description: "Insights, tutorials, and company news",
    icon: LuLeaf,
  },
  {
    title: "Help Center",
    href: "#",
    description: "Find answers to your questions",
    icon: FiHelpCircle,
  },
];

// ── Shared Subcomponents for Dropdown Panels ──────────────────
function GridCard({ link, onClick }) {
  const Icon = link.icon;
  return (
    <a href={link.href} className="nav-grid-card" onClick={onClick}>
      <div className="nav-grid-card__icon-wrap">
        <Icon className="nav-grid-card__icon" />
      </div>
      <div className="nav-grid-card__body">
        <span className="nav-grid-card__title">{link.title}</span>
        {link.description && (
          <p className="nav-grid-card__desc">{link.description}</p>
        )}
      </div>
    </a>
  );
}

function LargeItem({ link, onClick }) {
  const Icon = link.icon;
  return (
    <a href={link.href} className="nav-large-item" onClick={onClick}>
      <div className="nav-large-item__icon-wrap">
        <Icon className="nav-large-item__icon" />
      </div>
      <div className="nav-large-item__body">
        <span className="nav-large-item__title">{link.title}</span>
        {link.description && (
          <p className="nav-large-item__desc">{link.description}</p>
        )}
      </div>
    </a>
  );
}

function SmallItem({ item, onClick }) {
  const Icon = item.icon;
  return (
    <a href={item.href} className="nav-small-item" onClick={onClick}>
      <Icon className="nav-small-item__icon" />
      <span className="nav-small-item__title">{item.title}</span>
    </a>
  );
}

// ── Capsule Dropdown Item ─────────────────────────────────────
function CapsuleDropdown({
  label,
  isOpen,
  isActive,
  onToggle,
  onOpen,
  onClose,
  children,
}) {
  return (
    <div
      className={`nav-capsule-dropdown ${isOpen ? "dropdown-open" : ""}`}
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <button
        type="button"
        className={`nav-capsule-item nav-capsule-btn ${isActive ? "active" : ""} ${
          isOpen ? "open" : ""
        }`}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{label}</span>
        <FiChevronDown
          className={`nav-capsule-chevron ${isOpen ? "rotated" : ""}`}
        />
      </button>

      {/* Flyout Panel */}
      <div
        className={`nav-flyout ${isOpen ? "nav-flyout--visible" : ""}`}
        role="region"
        aria-label={`${label} submenu`}
      >
        <div className="nav-flyout__inner">{children}</div>
      </div>
    </div>
  );
}

// ── Mobile Accordion ──────────────────────────────────────────
function MobileAccordionItem({ label, links, isOpen, onToggle, onCloseMenu }) {
  const contentRef = useRef(null);

  return (
    <div className={`mobile-accordion-item ${isOpen ? "mobile-accordion-item--open" : ""}`}>
      <button
        type="button"
        className="mobile-accordion-trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{label}</span>
        <FiChevronDown
          className={`mobile-accordion-icon ${
            isOpen ? "mobile-accordion-icon--rotated" : ""
          }`}
        />
      </button>

      <div
        className="mobile-accordion-collapse"
        style={{
          maxHeight: isOpen
            ? `${contentRef.current ? contentRef.current.scrollHeight : 500}px`
            : "0px",
        }}
      >
        <div className="mobile-accordion-content" ref={contentRef}>
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.title}
                href={link.href}
                className="mobile-sublink"
                onClick={onCloseMenu}
              >
                <Icon className="mobile-sublink__icon" />
                <div className="mobile-sublink__text">
                  <span className="mobile-sublink__title">{link.title}</span>
                  {link.description && (
                    <span className="mobile-sublink__desc">
                      {link.description}
                    </span>
                  )}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ── Main Navbar ───────────────────────────────────────────────
export default function Navbar() {
  const [activeItem, setActiveItem] = useState("HOME");
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
    }, 150);
  };

  const handleToggle = (name) => {
    setActiveMenu((prev) => (prev === name ? null : name));
  };

  // Close on Escape or click outside
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

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent background scroll when mobile menu is open
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

  const mobileSections = [
    { id: "about", name: "ABOUT", list: companyLinks },
    { id: "services", name: "SERVICES", list: productLinks },
  ];

  return (
    <header className="navbar-wrapper">
      <div className="navbar-container" ref={navRef}>
        <nav className="navbar-pill">
          {/* Brand / Logo */}
          <a href="#home" className="navbar-brand">
            <span className="navbar-brand-text">TRION</span>
          </a>

          {/* Center Navigation Capsule */}
          <div className="navbar-nav-capsule">
            {/* 1. HOME */}
            <a
              href="#home"
              className={`nav-capsule-item ${activeItem === "HOME" ? "active" : ""}`}
              onClick={() => {
                setActiveItem("HOME");
                setActiveMenu(null);
              }}
            >
              HOME
            </a>

            {/* 2. ABOUT (Dropdown) */}
            <CapsuleDropdown
              label="ABOUT"
              isOpen={activeMenu === "about"}
              isActive={activeItem === "ABOUT"}
              onToggle={() => {
                setActiveItem("ABOUT");
                handleToggle("about");
              }}
              onOpen={() => handleOpen("about")}
              onClose={handleClose}
            >
              <div className="company-panel">
                <div className="company-panel__left">
                  <span className="panel-section-title">Overview</span>
                  <div className="company-panel__top-grid">
                    {companyLinks.slice(0, 2).map((link) => (
                      <GridCard
                        key={link.title}
                        link={link}
                        onClick={() => setActiveMenu(null)}
                      />
                    ))}
                  </div>
                  <span className="panel-section-title">Legal & Security</span>
                  <div className="company-panel__mid-grid">
                    {companyLinks.slice(2, 5).map((link) => (
                      <LargeItem
                        key={link.title}
                        link={link}
                        onClick={() => setActiveMenu(null)}
                      />
                    ))}
                  </div>
                </div>
                <div className="company-panel__right">
                  <span className="panel-section-title">Resources</span>
                  <ul className="company-panel__list">
                    {companyLinks.slice(5).map((link) => (
                      <li key={link.title}>
                        <LargeItem
                          link={link}
                          onClick={() => setActiveMenu(null)}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CapsuleDropdown>

            {/* 3. SERVICES (Dropdown) */}
            <CapsuleDropdown
              label="SERVICES"
              isOpen={activeMenu === "services"}
              isActive={activeItem === "SERVICES"}
              onToggle={() => {
                setActiveItem("SERVICES");
                handleToggle("services");
              }}
              onOpen={() => handleOpen("services")}
              onClose={handleClose}
            >
              <div className="product-panel">
                <div className="product-panel__main">
                  <span className="panel-section-title">Core Services</span>
                  <ul className="product-panel__grid">
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
                <div className="product-panel__sidebar">
                  <span className="panel-section-title">Features & Tools</span>
                  <ul className="product-panel__list">
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

            {/* 4. PROJECTS */}
            <a
              href="#projects"
              className={`nav-capsule-item ${activeItem === "PROJECTS" ? "active" : ""}`}
              onClick={() => {
                setActiveItem("PROJECTS");
                setActiveMenu(null);
              }}
            >
              PROJECTS
            </a>

            {/* 5. CAPABILITIES */}
            <a
              href="#capabilities"
              className={`nav-capsule-item ${activeItem === "CAPABILITIES" ? "active" : ""}`}
              onClick={() => {
                setActiveItem("CAPABILITIES");
                setActiveMenu(null);
              }}
            >
              CAPABILITIES
            </a>

            {/* 6. CONTACT */}
            <a
              href="#contact"
              className={`nav-capsule-item ${activeItem === "CONTACT" ? "active" : ""}`}
              onClick={() => {
                setActiveItem("CONTACT");
                setActiveMenu(null);
              }}
            >
              CONTACT
            </a>
          </div>

          {/* Right Section: CTA & Mobile Toggle */}
          <div className="navbar-actions">
            <a href="#contact" className="navbar-cta-btn">
              GET IN TOUCH
            </a>

            {/* Mobile Hamburger */}
            <button
              type="button"
              className="navbar-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`mobile-menu-drawer ${mobileMenuOpen ? "open" : ""}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-menu-links">
          <a
            href="#home"
            className={`mobile-nav-link ${activeItem === "HOME" ? "active" : ""}`}
            onClick={() => {
              setActiveItem("HOME");
              setMobileMenuOpen(false);
            }}
          >
            HOME
          </a>

          {mobileSections.map((section) => (
            <MobileAccordionItem
              key={section.id}
              label={section.name}
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

          <a
            href="#projects"
            className={`mobile-nav-link ${activeItem === "PROJECTS" ? "active" : ""}`}
            onClick={() => {
              setActiveItem("PROJECTS");
              setMobileMenuOpen(false);
            }}
          >
            PROJECTS
          </a>

          <a
            href="#capabilities"
            className={`mobile-nav-link ${activeItem === "CAPABILITIES" ? "active" : ""}`}
            onClick={() => {
              setActiveItem("CAPABILITIES");
              setMobileMenuOpen(false);
            }}
          >
            CAPABILITIES
          </a>

          <a
            href="#contact"
            className={`mobile-nav-link ${activeItem === "CONTACT" ? "active" : ""}`}
            onClick={() => {
              setActiveItem("CONTACT");
              setMobileMenuOpen(false);
            }}
          >
            CONTACT
          </a>

          <a
            href="#contact"
            className="mobile-cta-btn"
            onClick={() => setMobileMenuOpen(false)}
          >
            GET IN TOUCH
          </a>
        </div>
      </div>
    </header>
  );
}
