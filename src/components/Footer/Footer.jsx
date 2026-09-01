"use client";
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
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
  const footerLinks = [
    {
      title: "About Us",
      links: [
        { label: "Company Profile", href: "/about" },
        { label: "Featured Milestones", href: "/about" },
        { label: "Quality Certifications", href: "/about" },
        { label: "Sustainability & ESG", href: "/about" },
        { label: "Strategic Alliances", href: "/strategicAlliances" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Civil & Highway Infra", href: "/services" },
        { label: "Structural & High-Rise", href: "/services" },
        { label: "Mining & Crushing", href: "/services" },
        { label: "Excavation & Earthwork", href: "/services" },
        {
          label: "EPC & Turnkey Contracts",
          href: "/services",
        },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <Mail size={18} className="text-[#ff6b00]" />,
      text: "info@trioninfra.in",
      href: "mailto:info@trioninfra.in",
    },
    {
      icon: <Phone size={18} className="text-[#ff6b00]" />,
      text: "+91 22 6789 0123",
      href: "tel:+912267890123",
    },
    {
      icon: <MapPin size={18} className="text-[#ff6b00]" />,
      text: "Bandra Kurla Complex (BKC), Mumbai - 400051, India",
    },
  ];

  const socialLinks = [
    {
      icon: <FaFacebookF size={18} />,
      label: "Facebook",
      href: "https://facebook.com",
    },
    {
      icon: <FaInstagram size={18} />,
      label: "Instagram",
      href: "https://instagram.com",
    },
    {
      icon: <FaXTwitter size={18} />,
      label: "Twitter",
      href: "https://twitter.com",
    },
    {
      icon: <FaLinkedinIn size={18} />,
      label: "LinkedIn",
      href: "https://linkedin.com",
    },
    { icon: <Globe size={18} />, label: "Globe", href: "/" },
  ];

  return (
    <footer className="bg-[#070d1e]/90 relative h-fit overflow-hidden shadow-[0_24px_50px_rgba(0,0,0,0.85)]">
      <div className="max-w-7xl mx-auto p-8 sm:p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-[#ff6b00] text-3xl font-extrabold">
                &hearts;
              </span>
              <span className="text-white text-3xl font-bold font-primary tracking-wider uppercase">
                Trion
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-300 font-sans">
              Trion is a premier Indian infrastructure, civil construction,
              mining, quarry crushing, and structural engineering enterprise.
            </p>
            <div className="flex space-x-4 text-slate-400 pt-2">
              {socialLinks.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-[#ff6b00] transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-lg font-semibold mb-6 font-primary">
                {section.title}
              </h4>
              <ul className="space-y-3 p-0 m-0 list-none font-sans">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-slate-300 hover:text-[#ff6b00] transition-colors no-underline text-sm inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-white text-lg font-semibold mb-6 font-primary">
              Contact Us
            </h4>
            <ul className="space-y-4 p-0 m-0 list-none font-sans">
              {contactInfo.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center space-x-3 text-slate-300 text-sm"
                >
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-[#ff6b00] transition-colors text-slate-300 no-underline"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="hover:text-[#ff6b00] transition-colors">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-slate-700/60 my-8" />
      </div>

      <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36">
        <TextHoverEffect text="Trion" className="z-50" />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center text-sm space-y-4 md:space-y-0 font-sans">
        <p className="text-center md:text-left text-slate-400 m-0">
          &copy; {new Date().getFullYear()} Trion India. All rights reserved.
        </p>
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}
