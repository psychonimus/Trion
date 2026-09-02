"use client";
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Globe, ArrowUpRight } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";
import {
  FooterBackgroundGradient,
  TextHoverEffect,
} from "@/components/ui/hover-footer";
import FooterLogo from "../../assets/logo/trion-verticle.png";

export default function Footer() {
  const companyLinks = [
    { label: "Company Profile", href: "/about#company-profile" },
    { label: "Vision, Mission & Values", href: "/about#mission-vision" },
    { label: "Executive Leadership", href: "/about#leadership" },
    { label: "HSE Standards & Safety", href: "/about#hse" },
    { label: "Strategic Alliances", href: "/strategicAlliances" },
    { label: "Corporate Governance", href: "/corporate" },
  ];

  const serviceLinks = [
    { label: "Integrated EPC & PMC", href: "/services#service-01" },
    { label: "Power Generation & Distribution", href: "/services#service-02" },
    { label: "Mining & Materials Supply", href: "/services#service-03" },
    { label: "Heavy Equipment & Machinery", href: "/services#service-04" },
    {
      label: "Infrastructure Financing & Assets",
      href: "/services#service-05",
    },
    { label: "Technical R&D & Innovation", href: "/services#service-06" },
    { label: "Rural-Urban Development", href: "/services#service-07" },
    { label: "Mining & Crushing Services", href: "/services#service-08" },
    { label: "Excavation & Earthworks", href: "/services#service-09" },
  ];

  const contactInfo = [
    {
      icon: <Mail size={16} className="text-[#f55d1b] shrink-0" />,
      text: "trioninfraprojects@gmail.com",
      href: "mailto:trioninfraprojects@gmail.com",
    },
    {
      icon: <Globe size={16} className="text-[#f55d1b] shrink-0" />,
      text: "www.trioninfra.com",
      href: "https://www.trioninfra.com",
    },
    {
      icon: <Phone size={16} className="text-[#f55d1b] shrink-0" />,
      text: "+91 22 6789 0123",
      href: "tel:+912267890123",
    },
    {
      icon: <MapPin size={16} className="text-[#f55d1b] shrink-0" />,
      text: "B/1, Rameshwar Darshan N. Dutta Marg, 4 Bungalows, Andheri (West), Mumbai - 400053",
      href: "/contact",
    },
  ];

  const socialLinks = [
    {
      icon: <FaFacebookF size={16} />,
      label: "Facebook",
      href: "https://facebook.com",
    },
    {
      icon: <FaInstagram size={16} />,
      label: "Instagram",
      href: "https://instagram.com",
    },
    {
      icon: <FaXTwitter size={16} />,
      label: "Twitter",
      href: "https://twitter.com",
    },
    {
      icon: <FaLinkedinIn size={16} />,
      label: "LinkedIn",
      href: "https://linkedin.com",
    },
  ];

  return (
    <footer className="bg-[#000435] relative h-fit overflow-hidden shadow-[0_24px_50px_rgba(0,0,0,0.85)] border-t border-white/10 font-primary">
      <div className="max-w-7xl 2xl:max-w-[1580px] mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 pt-10 sm:pt-14 pb-6 sm:pb-10 z-30 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-6 sm:pb-8">
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col space-y-4">
            <Link
              to="/"
              className="flex items-center space-x-2 no-underline w-fit group"
            >
              <img
                src={FooterLogo}
                alt="footer logo"
                className="object-contain h-20 xs:h-24 md:h-36 lg:h-40"
              />
            </Link>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-300 font-sans max-w-sm">
              Trion is a premier Indian infrastructure, civil construction,
              mining, quarry crushing, EPC management, and structural
              engineering enterprise.
            </p>
            <div className="flex flex-wrap gap-2.5 text-slate-400 pt-1">
              {socialLinks.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#000435] border border-white/15 flex items-center justify-center text-slate-300 hover:text-[#f55d1b] hover:border-[#f55d1b]/50 hover:bg-[#f55d1b]/10 transition-all"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-1 lg:col-span-3">
            <h4 className="text-white text-sm sm:text-base font-bold mb-3.5 sm:mb-4 font-primary flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#f55d1b]" />
              Our Services
            </h4>
            <ul className="space-y-2 p-0 m-0 list-none font-sans">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-slate-300 hover:text-[#f55d1b] transition-colors no-underline text-xs sm:text-[13px] inline-flex items-center gap-1.5 group"
                  >
                    <span className="text-[#f55d1b] opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200">
                      &rsaquo;
                    </span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-white text-sm sm:text-base font-bold mb-3.5 sm:mb-4 font-primary flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#f55d1b]" />
              About Us
            </h4>
            <ul className="space-y-2.5 p-0 m-0 list-none font-sans">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-slate-300 hover:text-[#f55d1b] transition-colors no-underline text-xs sm:text-[13px] inline-flex items-center gap-1.5 group"
                  >
                    <span className="text-[#f55d1b] opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200">
                      &rsaquo;
                    </span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-3">
            <h4 className="text-white text-sm sm:text-base font-bold mb-3.5 sm:mb-4 font-primary flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#f55d1b]" />
              Contact Us
            </h4>
            <ul className="space-y-3.5 p-0 m-0 list-none font-sans">
              {contactInfo.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start space-x-2.5 text-slate-300 text-xs sm:text-[13px]"
                >
                  <span className="mt-0.5 shrink-0">{item.icon}</span>
                  <div className="min-w-0 flex-1">
                    {item.href.startsWith("mailto:") ||
                    item.href.startsWith("tel:") ||
                    item.href.startsWith("http") ? (
                      <a
                        href={item.href}
                        className="hover:text-[#f55d1b] transition-colors text-slate-300 no-underline leading-snug break-words block"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <Link
                        to={item.href}
                        className="hover:text-[#f55d1b] transition-colors text-slate-300 no-underline leading-snug break-words block"
                      >
                        {item.text}
                      </Link>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-white/10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f55d1b] hover:bg-[#d94e14] text-white text-xs font-bold font-primary transition-all no-underline shadow-md shadow-orange-500/20"
              >
                <span>Get In Touch</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-16 xs:h-20 sm:h-28 md:h-48 lg:h-60 my-2 sm:my-1 relative z-20 select-none overflow-hidden px-2 sm:px-4 w-full justify-center">
        <TextHoverEffect text="Trion" className="w-full h-full max-w-7xl" />
      </div>

      <div className="border-t border-white/10 relative z-30 bg-[#000435]/80 backdrop-blur-sm">
        <div className="max-w-7xl 2xl:max-w-[1580px] mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 py-3 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-400 font-sans">
          <p className="text-center sm:text-left m-0">
            &copy; {new Date().getFullYear()} Trion Infrastructure Projects. All
            rights reserved.
          </p>
        </div>
      </div>
      <FooterBackgroundGradient />
    </footer>
  );
}
