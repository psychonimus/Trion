"use client";
import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

const TRION_PATH = `
  M 24 20 H 68 V 29 H 51.5 V 80 H 40.5 V 29 H 24 Z
  M 78 20 H 108 C 117 20 123 26 123 36 C 123 44 118 49 110 51.5 L 124 80 H 111.5 L 99 53 H 89 V 80 H 78 Z
  M 89 29 V 43 H 106 C 111 43 113.5 40.5 113.5 36 C 113.5 31.5 111 29 106 29 Z
  M 134 20 H 145 V 80 H 134 Z
  M 182.5 20 C 198 20 210 33 210 50 C 210 67 198 80 182.5 80 C 167 80 155 67 155 50 C 155 33 167 20 182.5 20 Z
  M 182.5 30 C 192 30 199 39 199 50 C 199 61 192 70 182.5 70 C 173 70 166 61 166 50 C 166 39 173 30 182.5 30 Z
  M 221 20 H 232.5 L 265 67.5 V 20 H 276 V 80 H 264.5 L 232 32.5 V 80 H 221 Z
`.trim();

export const TextHoverEffect = ({ className }) => {
  const svgRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(150);
  const mouseY = useMotionValue(50);

  const springConfig = { damping: 22, stiffness: 280, mass: 0.1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    if (!svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 300;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = (e) => {
    handleMouseMove(e);
    setHovered(true);
  };

  const handleTouchMove = (e) => {
    if (!svgRef.current || !e.touches || !e.touches[0]) return;
    const rect = svgRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = ((touch.clientX - rect.left) / rect.width) * 300;
    const y = ((touch.clientY - rect.top) / rect.height) * 100;
    mouseX.set(x);
    mouseY.set(y);
    setHovered(true);
  };

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchMove}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setHovered(false)}
      className={cn("select-none uppercase cursor-pointer", className)}
    >
      <defs>
        {/* Soft Aura Glow filter */}
        <filter id="orangeGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <linearGradient
          id="trionTextGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#f55d1b" />
          <stop offset="25%" stopColor="#f55d1b" />
          <stop offset="50%" stopColor="#f55d1b" />
          <stop offset="75%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f55d1b" />
        </linearGradient>

        {/* Buttery Smooth Spring-Interpolated Radial Mask */}
        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="65"
          cx={smoothX}
          cy={smoothY}
        >
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#000435" stopOpacity="0" />
        </motion.radialGradient>

        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>
      </defs>

      {/* Full Hit-Test Surface */}
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="transparent"
        className="cursor-pointer"
        style={{ pointerEvents: "all" }}
      />

      {/* Subtle Base Dark Outline */}
      <path
        d={TRION_PATH}
        fillRule="evenodd"
        fill="transparent"
        stroke="rgba(255, 255, 255, 0.2)"
        strokeWidth="0.8"
        className="pointer-events-none transition-opacity duration-300"
        style={{ opacity: hovered ? 0.7 : 0.2 }}
      />

      {/* Animated Orange Outline */}
      <motion.path
        d={TRION_PATH}
        fillRule="evenodd"
        fill="transparent"
        stroke="#f55d1b"
        strokeWidth="0.85"
        className="pointer-events-none"
        initial={{ strokeDashoffset: 1400, strokeDasharray: 1400 }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1400,
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
        }}
      />

      {/* Cursor Spotlight Glow Fill & Stroke */}
      <g mask="url(#textMask)" className="pointer-events-none">
        <path
          d={TRION_PATH}
          fillRule="evenodd"
          fill="url(#trionTextGradient)"
          fillOpacity={hovered ? 0.28 : 0}
          stroke="url(#trionTextGradient)"
          strokeWidth="1.2"
          filter="url(#orangeGlow)"
          style={{ transition: "fill-opacity 0.2s ease" }}
        />
        <path
          d={TRION_PATH}
          fillRule="evenodd"
          fill="none"
          stroke="#ffffff"
          strokeWidth="0.6"
          opacity="0.9"
        />
      </g>
    </svg>
  );
};

export const FooterBackgroundGradient = () => {
  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 10%, rgba(0, 4, 53, 0.95) 50%, rgba(245, 93, 27, 0.15) 100%)",
      }}
    />
  );
};
