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
      icon: <Mail size={16} className="text-[#ff6b00] shrink-0" />,
      text: "trioninfraprojects@gmail.com",
      href: "mailto:trioninfraprojects@gmail.com",
    },
    {
      icon: <Globe size={16} className="text-[#ff6b00] shrink-0" />,
      text: "www.trioninfra.com",
      href: "https://www.trioninfra.com",
    },
    {
      icon: <Phone size={16} className="text-[#ff6b00] shrink-0" />,
      text: "+91 22 6789 0123",
      href: "tel:+912267890123",
    },
    {
      icon: <MapPin size={16} className="text-[#ff6b00] shrink-0" />,
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
    <footer className="bg-[#070d1e]/95 relative h-fit overflow-hidden shadow-[0_24px_50px_rgba(0,0,0,0.85)] border-t border-white/10 font-primary">
      <div className="max-w-7xl mx-auto p-6 sm:p-10 lg:p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12">
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <Link
              to="/"
              className="flex items-center space-x-2 no-underline w-fit"
            >
              <span className="text-[#ff6b00] text-3xl font-extrabold">
                &hearts;
              </span>
              <span className="text-white text-3xl font-bold font-primary tracking-wider uppercase">
                Trion
              </span>
            </Link>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-300 font-sans max-w-sm">
              Trion is a premier Indian infrastructure, civil construction,
              mining, quarry crushing, EPC management, and structural
              engineering enterprise.
            </p>
            <div className="flex space-x-3 text-slate-400 pt-2">
              {socialLinks.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#0e1b38] border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#ff6b00] hover:border-[#ff6b00]/40 transition-all"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white text-base font-bold mb-4 font-primary flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ff6b00]" />
              Our Services
            </h4>
            <ul className="space-y-2 p-0 m-0 list-none font-sans">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-slate-300 hover:text-[#ff6b00] transition-colors no-underline text-xs sm:text-[13px] inline-flex items-center gap-1.5 group"
                  >
                    <span className="text-[#ff6b00] opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200">
                      &rsaquo;
                    </span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white text-base font-bold mb-4 font-primary flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ff6b00]" />
              About Us
            </h4>
            <ul className="space-y-2.5 p-0 m-0 list-none font-sans">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-slate-300 hover:text-[#ff6b00] transition-colors no-underline text-xs sm:text-[13px] inline-flex items-center gap-1.5 group"
                  >
                    <span className="text-[#ff6b00] opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200">
                      &rsaquo;
                    </span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-3">
            <h4 className="text-white text-base font-bold mb-4 font-primary flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ff6b00]" />
              Contact Us
            </h4>
            <ul className="space-y-3.5 p-0 m-0 list-none font-sans">
              {contactInfo.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start space-x-2.5 text-slate-300 text-xs"
                >
                  <span className="mt-0.5">{item.icon}</span>
                  {item.href.startsWith("mailto:") ||
                  item.href.startsWith("tel:") ||
                  item.href.startsWith("http") ? (
                    <a
                      href={item.href}
                      className="hover:text-[#ff6b00] transition-colors text-slate-300 no-underline leading-tight break-words"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="hover:text-[#ff6b00] transition-colors text-slate-300 no-underline leading-tight"
                    >
                      {item.text}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-4 pt-4 border-t border-white/10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff6b00] hover:bg-[#ff8533] text-white text-xs font-bold font-primary transition-all no-underline shadow-md shadow-orange-500/20"
              >
                <span>Get In Touch</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        <hr className="border-t border-slate-700/60 my-6" />
      </div>

      <div className="lg:flex hidden h-[30rem] -mt-52 -mb-28 relative z-30 select-none">
        <TextHoverEffect text="Trion" className="z-50" />
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center text-xs text-slate-400 py-6 border-t border-white/5 font-sans relative z-10">
        <p className="text-center m-0">
          &copy; {new Date().getFullYear()} Trion Infrastructure Projects. All
          rights reserved.
        </p>
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}
