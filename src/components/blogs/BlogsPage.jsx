import { motion, useScroll, useSpring } from "framer-motion";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Boxes,
  CheckCircle2,
  Clock,
  Compass,
  Cpu,
  FileSpreadsheet,
  HardHat,
  Layers,
  Radio,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Workflow,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import * as THREE from "three";

const BLOG_POSTS = [
  {
    id: "future-of-infra",
    tag: "INFRASTRUCTURE 2026",
    category: "Civil Infrastructure",
    title:
      "The Future of Infrastructure Construction in India: 6 Trends Shaping 2026",
    subtitle:
      "How digitalisation, prefabrication, and safety standards are revolutionising India's rapid development.",
    image: "/assets/images/blogs/blog-1-future-infra.webp",
    caption: "FIG 1.0 — HIGH-SPEED RAIL & EXPRESSWAYS",
    icon: TrendingUp,
    badgeText: "6 Macro Drivers",
    stats: [
      { label: "Execution Velocity", val: "+45%" },
      { label: "BIM Compliance", val: "Tier-1" },
      { label: "Quality Audit", val: "100%" },
    ],
    intro: [
      "India's infrastructure landscape is undergoing a significant transformation. With continued development across highways, railways, urban infrastructure, industrial facilities and large-scale construction projects, the focus is shifting from simply building faster to building smarter, safer and more sustainably.",
      "Technology, digitalisation, sustainability and improved project execution are increasingly influencing how infrastructure projects are planned and delivered. Recent industry reports point to growing adoption of BIM, AI, drones, digital monitoring and data-driven project management across major infrastructure projects.",
    ],
    trends: [
      {
        n: "01",
        t: "Digitalisation of Construction",
        b: "Construction is becoming increasingly data-driven. Digital project management platforms, BIM, drone surveys and real-time monitoring are helping project teams improve visibility, coordination and decision-making.",
        b2: "BIM, in particular, is increasingly being adopted for design coordination, clash detection and project planning, especially on large infrastructure projects.",
        icon: Activity,
      },
      {
        n: "02",
        t: "AI in Project Planning & Execution",
        b: "Artificial intelligence is moving beyond experimentation. Construction companies are exploring AI for planning, scheduling, resource optimisation, risk identification, progress monitoring and predictive decision-making.",
        b2: "The objective is simple: identify potential issues earlier and make project execution more predictable.",
        icon: Cpu,
      },
      {
        n: "03",
        t: "Sustainable Construction",
        b: "Environmental responsibility is becoming an integral part of infrastructure development. Efficient resource utilisation, responsible material management, waste reduction and the use of sustainable construction practices are increasingly important considerations.",
        icon: ShieldCheck,
      },
      {
        n: "04",
        t: "Faster Construction Methods",
        b: "Prefabrication, modular construction and improved construction methodologies are helping contractors reduce on-site time while improving consistency and productivity.",
        icon: Zap,
      },
      {
        n: "05",
        t: "Greater Focus on Quality and Safety",
        b: "As infrastructure projects become larger and more complex, quality assurance and safety are becoming increasingly important. The recent focus on independent inspection of highway and expressway projects highlights the growing emphasis on construction quality and long-term asset performance.",
        icon: CheckCircle2,
      },
      {
        n: "06",
        t: "Integrated Project Execution",
        b: "Modern infrastructure projects require closer coordination between civil, structural, architectural, MEP, material supply and specialist contractors. Integrated execution can help reduce coordination gaps, rework and delays.",
        icon: Workflow,
      },
    ],
    calloutHeadline: "Building the Infrastructure of Tomorrow",
    calloutParas: [
      "The future of infrastructure construction will belong to organisations that combine technical expertise, modern technology, disciplined execution and responsible construction practices.",
      "At Trion, our capabilities across civil construction, infrastructure development, excavation, crushing, aggregate supply, building construction and related services enable us to support projects from groundwork to completion.",
    ],
    quote:
      "The future of construction is not just about building more. It is about building better.",
  },
  {
    id: "ai-in-construction",
    tag: "AI & INTELLIGENCE",
    category: "AI & BIM",
    title:
      "AI in Construction: How Technology Is Transforming Project Planning & Execution",
    subtitle:
      "Moving beyond experimentation into predictive scheduling, computer vision, and autonomous site tracking.",
    image: "/assets/images/blogs/blog-2-ai-construction.webp",
    caption: "FIG 2.0 — COMPUTER VISION & REAL-TIME DATA",
    icon: Cpu,
    badgeText: "Predictive Ops",
    stats: [
      { label: "Delay Prevention", val: "92%" },
      { label: "Live Telemetry", val: "24/7" },
      { label: "Precision Rate", val: "99.2%" },
    ],
    intro: [
      "Artificial intelligence is changing the way industries plan, execute and manage complex operations, and construction is no exception.",
      "India's infrastructure sector is increasingly exploring AI across project planning, design, procurement, construction and operations. Industry analysis indicates that AI can support productivity improvements by enabling faster, data-driven decision-making.",
    ],
    features: [
      {
        title: "Project Planning",
        body: "AI can analyse historical project data, timelines and resource requirements to identify potential risks and improve planning.",
        icon: BarChart3,
      },
      {
        title: "Progress Monitoring",
        body: "AI-powered systems can analyse site images, drone footage and project data to provide better visibility into construction progress.",
        icon: Radio,
      },
      {
        title: "Resource Optimisation",
        body: "Equipment, labour and material utilisation can be analysed to identify inefficiencies and improve resource allocation.",
        icon: Target,
      },
      {
        title: "Risk Management",
        body: "AI can help identify patterns associated with potential delays, cost overruns and operational risks.",
        icon: ShieldCheck,
      },
      {
        title: "Quality Control",
        body: "Computer vision and digital monitoring can support the identification of construction inconsistencies and quality issues.",
        icon: CheckCircle2,
      },
    ],
    sideBoxTitle: "AI + BIM + Real-Time Data",
    sideBoxParas: [
      "The real opportunity lies not in using AI as a standalone technology, but in connecting it with BIM, project management platforms, IoT, drone surveys and field data.",
      "This creates a more connected project environment where information can move from the site to decision-makers faster. India's infrastructure sector is already moving towards more integrated digital workflows, although adoption remains uneven.",
    ],
    calloutHeadline: "What This Means for Construction Companies",
    calloutParas: [
      "Technology will not replace engineering expertise or on-site experience. Instead, it can give project teams better information to make faster and more informed decisions.",
      "For infrastructure companies, the future lies in combining people, engineering expertise, equipment and digital intelligence.",
    ],
    quote:
      "Smart construction isn't about replacing experience. It's about making experience more powerful with data.",
  },
  {
    id: "sustainable-infra",
    tag: "ESG & DURABILITY",
    category: "Sustainability",
    title:
      "Sustainable Infrastructure: Building for Performance, Not Just Completion",
    subtitle:
      "Designing for multi-decade resilience through circular materials, low-carbon aggregates, and life-cycle analytics.",
    image: "/assets/images/blogs/blog-3-sustainable-infra.webp",
    caption: "FIG 3.0 — LIFECYCLE ESG & CIRCULAR MATERIALS",
    icon: ShieldCheck,
    badgeText: "Lifecycle ESG",
    stats: [
      { label: "Waste Reduction", val: "38%" },
      { label: "Recycled Aggregate", val: "High" },
      { label: "Asset Durability", val: "50+ Yrs" },
    ],
    intro: [
      "Infrastructure has a long lifecycle. A road, building, industrial facility or railway asset may serve communities for decades. That makes the way it is designed, constructed and maintained just as important as the final structure itself.",
      "Sustainable infrastructure is therefore moving beyond environmental compliance to become a broader approach focused on resource efficiency, durability, operational performance and responsible construction.",
    ],
    pills: [
      "Efficient use of construction materials",
      "Responsible management of aggregates and natural resources",
      "Reduction of construction waste",
      "Efficient equipment and energy utilisation",
      "Recycling and reuse wherever practical",
      "Better construction planning to minimise rework",
      "Long-term durability and maintainability",
    ],
    dualBoxes: [
      {
        title: "Why Material Management Matters",
        body1:
          "Materials form a significant part of infrastructure construction. Efficient sourcing, processing, transportation and utilisation of materials can contribute to better project efficiency while reducing unnecessary waste.",
        body2:
          "This is particularly relevant for projects involving aggregates, crushing, earthwork and large-scale civil construction.",
        icon: Boxes,
      },
      {
        title: "Sustainability Meets Technology",
        body1:
          "Digital technologies can also support sustainable construction by improving planning and reducing inefficiencies.",
        body2:
          "BIM, digital monitoring, drones and data analytics can improve coordination and help project teams identify issues earlier.",
        icon: Sparkles,
      },
    ],
    calloutHeadline: "Building for the Long Term",
    calloutParas: [
      "The true measure of infrastructure is not simply whether it is completed on schedule. It is how effectively it performs over its lifecycle.",
      "That means sustainable infrastructure must consider quality, durability, safety, resource efficiency and environmental responsibility together.",
      "At Trion, responsible execution is integral to our approach to civil construction, infrastructure, mining, crushing and building projects.",
    ],
    quote:
      "Sustainable construction is not an obstacle to progress — it is the highest form of engineering discipline.",
  },
  {
    id: "bim-civil",
    tag: "5D DIGITAL TWIN",
    category: "AI & BIM",
    title:
      "BIM in Civil Construction: From Digital Design to Better Project Execution",
    subtitle:
      "Clash detection, 4D time sequencing, and 5D cost control turning blueprints into flawless execution.",
    image: "/assets/images/blogs/blog-4-bim-civil.webp",
    caption: "FIG 4.0 — 5D DIGITAL TWIN & CLASH COORDINATION",
    icon: Layers,
    badgeText: "5D BIM Modeling",
    stats: [
      { label: "Clash Elimination", val: "99.4%" },
      { label: "Budget Variance", val: "±1.5%" },
      { label: "Format Support", val: "OpenBIM" },
    ],
    intro: [
      "Construction projects involve multiple disciplines, teams and stakeholders. When design, engineering and execution are not properly coordinated, even small discrepancies can lead to rework, delays and additional costs.",
      "This is where Building Information Modelling, or BIM, is becoming increasingly valuable.",
      "BIM creates a digital representation of a project and enables different stakeholders to collaborate around a common information environment. The technology is increasingly being used across major infrastructure projects in India.",
    ],
    features: [
      {
        title: "Better Design Coordination",
        body: "Civil, structural, architectural and MEP teams can coordinate their designs within a common digital environment.",
        icon: Compass,
      },
      {
        title: "Early Clash Detection",
        body: "Potential conflicts between systems can be identified before they reach the construction site.",
        icon: Zap,
      },
      {
        title: "Improved Planning",
        body: "Teams can visualise construction sequences and better understand how different activities interact.",
        icon: Clock,
      },
      {
        title: "Reduced Rework",
        body: "Identifying design and coordination issues earlier can reduce avoidable changes during execution.",
        icon: CheckCircle2,
      },
      {
        title: "Better Project Visibility",
        body: "A connected digital model can provide project stakeholders with greater visibility into project information.",
        icon: Activity,
      },
    ],
    sideBoxTitle: "BIM Beyond 3D",
    sideBoxParas: [
      "BIM is increasingly evolving beyond three-dimensional visualisation.",
      "When integrated with scheduling and cost information, it can support 4D planning and 5D cost management, creating a more comprehensive approach to project delivery.",
    ],
    calloutHeadline: "The Road Ahead",
    calloutParas: [
      "India's infrastructure sector is gradually moving towards greater digitalisation, with BIM, drones, digital twins and real-time monitoring becoming increasingly relevant to large projects.",
      "For construction companies, the opportunity is to combine digital tools with strong engineering and execution capabilities.",
    ],
    quote:
      "The best digital model is one that ultimately leads to better construction on the ground.",
  },
  {
    id: "quality-aggregates",
    tag: "MATERIAL SCIENCE",
    category: "Materials & Fleet",
    title: "Why Quality Aggregates Matter in Infrastructure Construction",
    subtitle:
      "The engineering backbone of structural integrity, uniform gradation, and high-performance concrete.",
    image: "/assets/images/blogs/blog-5-quality-aggregates.webp",
    caption: "FIG 5.0 — MULTI-DECK SCREENING & HIGH-YIELD SUPPLY",
    icon: Boxes,
    badgeText: "High-Yield Supply",
    stats: [
      { label: "Gradation Control", val: "100%" },
      { label: "Abrasion Index", val: "<18%" },
      { label: "Quarry Output", val: "High Cap" },
    ],
    intro: [
      "Aggregates may appear to be one of the simplest components of construction, but they play a fundamental role in the strength, stability and performance of infrastructure.",
      "From roads and railway infrastructure to concrete structures, foundations and industrial projects, the quality and suitability of aggregates can directly influence construction performance.",
    ],
    definitionBox: {
      title: "What Are Construction Aggregates?",
      p1: "Construction aggregates are granular materials such as crushed stone, gravel and other processed materials used in concrete, roads, railway applications and various civil works.",
      p2: "Their characteristics including size, grading, strength, durability and cleanliness, need to meet the requirements of the intended application.",
    },
    features: [
      {
        title: "Strength and Stability",
        body: "Appropriate aggregates contribute to the structural performance of concrete and other construction applications.",
        icon: Target,
      },
      {
        title: "Consistent Grading",
        body: "Correct particle size distribution supports efficient mixing, compaction and application.",
        icon: FileSpreadsheet,
      },
      {
        title: "Durability",
        body: "Infrastructure is exposed to traffic, weather and environmental conditions. Durable materials are therefore essential for long-term performance.",
        icon: ShieldCheck,
      },
      {
        title: "Project Efficiency",
        body: "Consistent material quality can make construction processes more predictable and reduce material-related issues.",
        icon: TrendingUp,
      },
    ],
    crushingBox: {
      title: "The Role of Crushing Operations",
      p1: "For large infrastructure projects, crushing plants play an important role in processing boulders and rock into required aggregate sizes.",
      p2: "Efficient crushing and screening operations help produce materials suited to specific project requirements.",
      p3: "This is particularly important in road, railway and major civil infrastructure projects, where material volumes and specifications can be demanding.",
    },
    calloutHeadline: "More Than Material Supply",
    calloutParas: [
      "Reliable aggregate supply is not simply about delivering material. It involves quality control, processing capability, production consistency, logistics and timely availability.",
      "At Trion, our experience in crushing, aggregate supply and infrastructure support enables us to contribute to projects where material quality and dependable supply are critical.",
    ],
    quote: "Strong infrastructure begins with the right materials.",
  },
  {
    id: "excavation-earthwork",
    tag: "EARTHWORK FLEET",
    category: "Materials & Fleet",
    title:
      "From Excavation to Execution: The Critical Role of Earthwork in Infrastructure Projects",
    subtitle:
      "Ground engineering, bulk earthmoving, and subgrade stabilization as the bedrock of mega infrastructure.",
    image: "/assets/images/blogs/blog-6-excavation-earthwork.webp",
    caption: "FIG 6.0 — PRECISION LASER GRADING & BULK EXCAVATION",
    icon: HardHat,
    badgeText: "Laser Grading",
    stats: [
      { label: "Grading Accuracy", val: "±3mm" },
      { label: "Subgrade Compaction", val: "98%+" },
      { label: "Fleet Readiness", val: "100%" },
    ],
    intro: [
      "Before a building rises, a road is constructed or an infrastructure project takes shape, there is one fundamental stage that sets the foundation for everything that follows: earthwork.",
      "Excavation, grading, site preparation and earthmoving are critical activities that establish the physical conditions required for successful construction.",
    ],
    pills: [
      "Site clearing and preparation",
      "Excavation",
      "Soil cutting and filling",
      "Earthmoving",
      "Grading and levelling",
      "Embankment construction",
      "Material handling",
      "Foundation excavation",
      "Site development",
    ],
    tripleBoxes: [
      {
        title: "Why Proper Excavation Matters",
        body: "Poorly planned excavation can create challenges throughout the project lifecycle. Effective earthwork planning considers soil conditions, excavation depths, equipment requirements, material movement, drainage and construction sequencing.",
        icon: Compass,
      },
      {
        title: "Equipment Makes a Difference",
        body: "Large infrastructure projects require the right combination of machinery and equipment to execute earthwork efficiently. Excavators, loaders, dumpers, graders, compactors and other equipment must be coordinated according to the project's scale and requirements.",
        icon: HardHat,
      },
      {
        title: "Earthwork and Project Timelines",
        body: "Earthwork is often one of the earliest major activities on a construction site. Delays at this stage can impact subsequent construction activities. Efficient planning, equipment utilisation, material movement and site coordination can therefore have a direct impact on overall project progress.",
        icon: Clock,
      },
    ],
    calloutHeadline: "From Groundwork to Completion",
    calloutParas: [
      "For infrastructure companies, earthwork is not simply about moving soil. It is about preparing the site for everything that comes next.",
      "Trion brings together civil construction, excavation, infrastructure, crushing and material-handling capabilities to support projects from initial site preparation through execution.",
    ],
    quote: "Every landmark begins with the ground beneath it.",
  },
];

function ExactCityWireframeHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 600;

    // Three.js Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 0, 20);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.pointerEvents = "none";
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.inset = "0";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    container.appendChild(renderer.domElement);

    // Create Crisp Glow Dot Texture for Small Particles
    const makeParticleTexture = () => {
      const c = document.createElement("canvas");
      c.width = 32;
      c.height = 32;
      const ctx = c.getContext("2d");
      const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, "rgba(255, 255, 255, 1)");
      grad.addColorStop(0.25, "rgba(56, 189, 248, 0.95)");
      grad.addColorStop(0.6, "rgba(14, 165, 233, 0.35)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(16, 16, 16, 0, Math.PI * 2);
      ctx.fill();
      return new THREE.CanvasTexture(c);
    };

    const particleTexture = makeParticleTexture();

    // Small Floating Cyber Particles
    const particleCount = 120;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const initialPositions = new Float32Array(particleCount * 3);
    const speeds = new Float32Array(particleCount);
    const amplitudes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 45;
      const y = (Math.random() - 0.5) * 26;
      const z = (Math.random() - 0.5) * 30;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      initialPositions[i * 3] = x;
      initialPositions[i * 3 + 1] = y;
      initialPositions[i * 3 + 2] = z;

      speeds[i] = 0.4 + Math.random() * 0.8;
      amplitudes[i] = 0.3 + Math.random() * 0.6;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      size: 0.32,
      map: particleTexture,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Mouse Tracking
    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    let clock = new THREE.Clock();
    let animId;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Gentle camera sway
      camera.position.x += (mouseX * 1.2 - camera.position.x) * 0.04;
      camera.position.y += (-mouseY * 0.8 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);

      // Animate small particles: gentle floating & drift
      const pos = geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        // Slow vertical float with upward drift
        pos[i3 + 1] =
          initialPositions[i3 + 1] +
          Math.sin(elapsed * speeds[i] + i) * amplitudes[i] +
          (((elapsed * 0.2 * speeds[i]) % 4) - 2);
        // Subtle horizontal sway
        pos[i3] =
          initialPositions[i3] +
          Math.cos(elapsed * (speeds[i] * 0.7) + i) * (amplitudes[i] * 0.6);
      }
      geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth || window.innerWidth;
      const newH = container.clientHeight || 600;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", handleResize);
      if (
        container &&
        renderer.domElement &&
        container.contains(renderer.domElement)
      ) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      particleTexture.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none"
    >
      {/* Responsive Picture: 9:16 Mobile Portrait & 16:9 Desktop 4K */}
      <picture className="w-full h-full block">
        <source
          media="(max-width: 640px)"
          srcSet="/assets/images/blogs/blog-hero-city-mobile.png?v=5"
        />
        <source
          media="(min-width: 641px)"
          srcSet="/assets/images/blogs/blog-hero-city-4k-sharp.png?v=5"
        />
        <img
          src="/assets/images/blogs/blog-hero-city-4k-sharp.png?v=5"
          alt="Urban Infrastructure Wireframe Skyline"
          className="w-full h-full object-cover object-bottom sm:object-center filter brightness-105 contrast-[1.08] select-none pointer-events-none"
          style={{ imageRendering: "crisp-edges" }}
          loading="eager"
        />
      </picture>

      {/* Desktop Left-Side Text Readability Overlay */}
      <div className="hidden lg:block absolute inset-y-0 left-0 w-[65%] bg-gradient-to-r from-[#000435]/95 via-[#000435]/80 to-transparent pointer-events-none" />

      {/* Mobile/Tablet Bottom-to-Top Text Readability Overlay */}
      <div className="block lg:hidden absolute inset-0 bg-gradient-to-t from-[#000435]/95 via-[#000435]/70 to-transparent pointer-events-none" />

      {/* Subtle bottom fade to blend smoothly into page content */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#000435] to-transparent pointer-events-none" />

      {/* Sharp Technical HUD Indicators */}
      <div className="absolute top-4 sm:top-6 left-4 sm:left-8 hidden sm:flex items-center gap-2 font-mono text-[9px] sm:text-[10px] text-sky-400/90 tracking-widest uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        <span>
          GRID: 28°36&apos;N 77°12&apos;E · ELEV: +142M · BIM 5D ONLINE
        </span>
      </div>

      <div className="absolute top-4 sm:top-6 right-4 sm:right-8 hidden sm:flex items-center gap-2 font-mono text-[9px] sm:text-[10px] text-sky-400/90 tracking-widest uppercase">
        <span>RESOLUTION: 4K WIREFRAME</span>
      </div>
    </div>
  );
}

function CornerCrosshairs() {
  return (
    <>
      <span className="absolute top-3 left-3 font-mono text-[9px] text-[#38bdf8]/60 select-none pointer-events-none">
        +
      </span>
      <span className="absolute top-3 right-3 font-mono text-[9px] text-[#38bdf8]/60 select-none pointer-events-none">
        +
      </span>
      <span className="absolute bottom-3 left-3 font-mono text-[9px] text-[#38bdf8]/60 select-none pointer-events-none">
        +
      </span>
      <span className="absolute bottom-3 right-3 font-mono text-[9px] text-[#38bdf8]/60 select-none pointer-events-none">
        +
      </span>
    </>
  );
}

export default function BlogsPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#000435] via-[#4e71d2] to-[#434885] text-white font-primary relative overflow-x-hidden selection:bg-[#f55d1b] selection:text-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f55d1b] via-[#38bdf8] to-white z-[9999] origin-left"
        style={{ scaleX }}
      />

      <section className="relative z-10 xs:pt-28 sm:pt-36 lg:pt-40 xs:pb-16 sm:pb-24 border-b border-sky-400/20 overflow-hidden min-h-[520px] lg:min-h-[580px] flex items-center">
        <ExactCityWireframeHero />

        <div className="max-w-7xl 2xl:max-w-[1580px] mx-auto xs:px-2 md:px-8 lg:px-12 relative z-10 w-full">
          <div className="max-w-2xl lg:max-w-3xl space-y-5 sm:space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-primary font-black xs:text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl text-white leading-[1.05] tracking-tight uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]"
            >
              ENGINEERING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f55d1b] via-[#38bdf8] to-white">
                THE NEXT DECADE.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-secondary text-sky-50 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl text-left drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] font-normal"
            >
              Authoritative architectural papers exploring modern civil
              execution in India — predictive AI, 5D BIM digital twins, circular
              aggregate technology, and deep ground engineering.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-6 lg:py-8">
        <div className="max-w-7xl 2xl:max-w-[1580px] mx-auto  xs:px-6 sm:px-8 lg:px-12 space-y-10 xs:space-y-12 sm:space-y-14">
          {BLOG_POSTS.map((post, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <article
                key={post.id}
                id={post.id}
                className="scroll-mt-28 rounded-2xl xs:p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-[#0a2360]/35 via-[#061845]/50 to-[#020b24]/70 backdrop-blur-2xl relative overflow-hidden transition-all duration-300 hover:border-[#f55d1b]/60"
              >
                <CornerCrosshairs />

                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-sky-400/20 pb-3 mb-4">
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <div>
                      <span className="font-mono text-xs text-sky-200 font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid xs:grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start xs:mb-8 sm:mb-10">
                  <div
                    className={`lg:col-span-6  xs:space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}
                  >
                    <h2 className="font-primary font-black  xs:text-3xl lg:text-4xl text-white leading-tight tracking-tight uppercase text-left">
                      {post.title}
                    </h2>

                    <p className="font-secondary text-sky-100/90 text-xs sm:text-base leading-relaxed text-left">
                      {post.subtitle}
                    </p>

                    <div className="grid grid-cols-3 gap-2 sm:gap-3 xs:p-3 sm:p-4 rounded-xl bg-sky-950/60  text-center font-mono">
                      {post.stats.map((st, sIdx) => (
                        <div key={sIdx} className="space-y-0.5">
                          <span className="block text-xs sm:text-base font-black text-[#f55d1b]">
                            {st.val}
                          </span>
                          <span className="block text-[9px] sm:text-[10px] text-sky-300 uppercase tracking-wider truncate">
                            {st.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3 sm:space-y-4 pt-1">
                      {post.intro.map((p, pIdx) => (
                        <p
                          key={pIdx}
                          className="font-secondary text-sky-100 text-xs sm:text-[15px] leading-relaxed text-left"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div
                    className={`lg:col-span-6 space-y-5 sm:space-y-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}
                  >
                    <div className="relative rounded-xl overflow-hidden  shadow-2xl group/img aspect-[16/10]">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105 filter contrast-105"
                        loading="lazy"
                      />
                    </div>

                    <div className="xs:p-4 md:p-6 rounded-xl bg-sky-950/50  backdrop-blur-xl text-left">
                      <div className="flex items-center gap-2 mb-2 text-[#f55d1b]">
                        <Sparkles className="w-4 h-4" />
                        <span className="font-mono text-xs font-bold uppercase tracking-wider">
                          Key Takeaway
                        </span>
                      </div>
                      <p className="font-secondary text-xs sm:text-sm text-sky-100 leading-relaxed">
                        {post.quote}
                      </p>
                    </div>
                  </div>
                </div>

                {post.trends && (
                  <div className="xs:mt-6 sm:mt-8 pt-6 sm:pt-8 space-y-5 sm:space-y-6">
                    <div className="flex items-center gap-2.5 pb-2">
                      <span className="w-5 h-[2px] bg-[#f55d1b]" />
                      <h3 className="font-primary font-black text-xs sm:text-base text-white tracking-wide uppercase">
                        6 Strategic Execution Drivers
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
                      {post.trends.map((t) => {
                        const TrendIcon = t.icon;
                        return (
                          <div
                            key={t.n}
                            className="p-4 md:p-5 rounded-xl bg-sky-950/40  hover:border-[#f55d1b]/50 hover:bg-sky-900/30 transition-all duration-300 text-left group backdrop-blur-xl"
                          >
                            <div className="flex items-center justify-between mb-2.5">
                              <span className="font-mono text-xs font-black text-[#f55d1b] bg-[#f55d1b]/15 px-2 py-0.5 rounded-md ">
                                {t.n}
                              </span>
                              <div className="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-200 group-hover:bg-[#f55d1b] group-hover:text-white flex items-center justify-center transition-colors">
                                <TrendIcon className="w-3.5 h-3.5" />
                              </div>
                            </div>
                            <h4 className="font-primary font-bold text-xs sm:text-sm text-white mb-1.5 group-hover:text-[#f55d1b] transition-colors">
                              {t.t}
                            </h4>
                            <p className="font-secondary text-xs text-sky-100/80 leading-relaxed mb-2">
                              {t.b}
                            </p>
                            {t.b2 && (
                              <p className="font-secondary text-xs text-sky-300/80 leading-relaxed pt-2 border-t border-sky-400/20">
                                {t.b2}
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {post.features && (
                  <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-sky-400/20 space-y-5 sm:space-y-6">
                    <div className="flex items-center gap-2.5 pb-2">
                      <span className="w-5 h-[2px] bg-[#f55d1b]" />
                      <h3 className="font-primary font-black text-xs sm:text-base text-white tracking-wide uppercase">
                        Core Technological Pillars
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
                      {post.features.map((f, fIdx) => {
                        const FeatIcon = f.icon;
                        return (
                          <div
                            key={fIdx}
                            className="p-4 md:p-5 rounded-xl bg-sky-950/40  hover:bg-sky-900/30 transition-all duration-300 text-left group backdrop-blur-xl"
                          >
                            <div className="w-8 h-8 rounded-xl bg-[#f55d1b]/15  text-[#f55d1b] flex items-center justify-center mb-3 group-hover:bg-[#f55d1b] group-hover:text-white transition-colors">
                              <FeatIcon className="w-4 h-4" />
                            </div>
                            <h4 className="font-primary font-bold text-xs sm:text-sm text-white mb-1.5 group-hover:text-[#f55d1b] transition-colors">
                              {f.title}
                            </h4>
                            <p className="font-secondary text-xs text-sky-100/80 leading-relaxed">
                              {f.body}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {post.sideBoxTitle && (
                  <div className="mt-6 p-4 md:p-8 rounded-xl bg-sky-950/60  text-left backdrop-blur-xl">
                    <div className="flex items-center gap-2 mb-3">
                      <Zap className="w-4 h-4 text-[#f55d1b]" />
                      <h4 className="font-primary font-bold text-xs sm:text-base text-white uppercase tracking-wide">
                        {post.sideBoxTitle}
                      </h4>
                    </div>
                    <div className="space-y-2.5 sm:space-y-3">
                      {post.sideBoxParas.map((p, sIdx) => (
                        <p
                          key={sIdx}
                          className="font-secondary text-sky-100/90 text-xs sm:text-sm leading-relaxed"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                {post.definitionBox && (
                  <div className="mt-6 p-4 md:p-8 rounded-xl bg-sky-950/40  text-left backdrop-blur-xl">
                    <h4 className="font-primary font-bold text-xs sm:text-base text-white uppercase mb-2">
                      {post.definitionBox.title}
                    </h4>
                    <p className="font-secondary text-sky-100/90 text-xs sm:text-sm leading-relaxed mb-2">
                      {post.definitionBox.p1}
                    </p>
                    <p className="font-secondary text-sky-100/90 text-xs sm:text-sm leading-relaxed">
                      {post.definitionBox.p2}
                    </p>
                  </div>
                )}

                {post.crushingBox && (
                  <div className="mt-6 p-5 sm:p-8 rounded-xl bg-sky-950/40  text-left backdrop-blur-xl">
                    <h4 className="font-primary font-bold text-xs sm:text-base text-white uppercase mb-2 flex items-center gap-2">
                      <Boxes className="w-4 h-4 text-[#f55d1b]" />
                      {post.crushingBox.title}
                    </h4>
                    <p className="font-secondary text-sky-100/90 text-xs sm:text-sm leading-relaxed mb-2">
                      {post.crushingBox.p1}
                    </p>
                    <p className="font-secondary text-sky-100/90 text-xs sm:text-sm leading-relaxed mb-2">
                      {post.crushingBox.p2}
                    </p>
                    <p className="font-secondary text-sky-200/80 text-xs sm:text-sm leading-relaxed">
                      {post.crushingBox.p3}
                    </p>
                  </div>
                )}

                {post.pills && (
                  <div className="mt-6 text-left">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="w-4 h-4 text-[#f55d1b]" />
                      <h4 className="font-primary font-bold text-xs sm:text-sm text-white uppercase">
                        Key Operational Parameters:
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {post.pills.map((pill, pillIdx) => (
                        <span
                          key={pillIdx}
                          className="px-3 py-1.5 rounded-xl bg-sky-950/50    font-secondary text-xs text-sky-200 flex items-center gap-1.5 backdrop-blur-md"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#f55d1b]" />
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {post.dualBoxes && (
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                    {post.dualBoxes.map((box, bIdx) => {
                      const BoxIcon = box.icon;
                      return (
                        <div
                          key={bIdx}
                          className="p-4 md:p-6 rounded-xl bg-sky-950/40    backdrop-blur-xl"
                        >
                          <div className="w-8 h-8 rounded-xl bg-[#f55d1b]/15 border border-[#f55d1b]/30 text-[#f55d1b] flex items-center justify-center mb-3">
                            <BoxIcon className="w-4 h-4" />
                          </div>
                          <h4 className="font-primary font-bold text-xs sm:text-sm text-white mb-2">
                            {box.title}
                          </h4>
                          <p className="font-secondary text-xs sm:text-sm text-sky-100/90 leading-relaxed mb-2">
                            {box.body1}
                          </p>
                          <p className="font-secondary text-xs sm:text-sm text-sky-300/80 leading-relaxed">
                            {box.body2}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                )}

                {post.tripleBoxes && (
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                    {post.tripleBoxes.map((box, bIdx) => {
                      const BoxIcon = box.icon;
                      return (
                        <div
                          key={bIdx}
                          className="p-4 sm:p-5 rounded-xl bg-sky-950/40    backdrop-blur-xl"
                        >
                          <div className="w-8 h-8 rounded-xl bg-sky-500/20 text-[#f55d1b] flex items-center justify-center mb-3">
                            <BoxIcon className="w-4 h-4" />
                          </div>
                          <h4 className="font-primary font-bold text-xs sm:text-sm text-white mb-2">
                            {box.title}
                          </h4>
                          <p className="font-secondary text-xs text-sky-100/90 leading-relaxed">
                            {box.body}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                )}

                <div className="mt-8 p-4 md:p-8 rounded-xl  bg-gradient-to-r from-[#f55d1b]/20 via-sky-950/40 to-transparent text-left relative overflow-hidden backdrop-blur-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-4 h-4 text-[#f55d1b]" />
                    <h4 className="font-primary font-black text-xs sm:text-base text-white uppercase tracking-wide">
                      {post.calloutHeadline}
                    </h4>
                  </div>

                  <div className="space-y-3 mb-4">
                    {post.calloutParas.map((p, cIdx) => (
                      <p
                        key={cIdx}
                        className="font-secondary text-sky-100 text-xs sm:text-sm leading-relaxed"
                      >
                        {p}
                      </p>
                    ))}
                  </div>

                  {post.quote && (
                    <div className="pt-4 border-t border-[#f55d1b]/30 flex items-start gap-3">
                      <span className="font-serif text-2xl text-[#f55d1b] leading-none">
                        “
                      </span>
                      <p className="font-serif italic text-xs sm:text-sm font-bold text-[#f55d1b] leading-relaxed">
                        {post.quote}
                      </p>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative z-10 py-8 md:py-14 border-t border-sky-400/20 bg-gradient-to-b from-[#000435] via-[#010620] to-[#000435] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(56,189,248,0.2)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-primary font-black text-2xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight uppercase mb-6">
            ENGINEER THE FUTURE <br />
            <span className="text-[#f55d1b]">WITH TRION.</span>
          </h2>

          <p className="font-secondary text-sky-100 text-xs sm:text-base leading-relaxed max-w-xl mx-auto mb-10">
            Connect with our executive engineering specialists for technical
            consultation, infrastructure tenders, and turnkey EPC project
            execution across India.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-4 py-2 md:px-8 md:py-3 rounded-full bg-[#f55d1b] hover:bg-[#ff6f30] text-white font-primary font-bold text-xs sm:text-sm uppercase tracking-wider shadow-2xl shadow-orange-500/40 transition-all duration-300 hover:scale-105 no-underline cursor-pointer"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-4 py-2 md:px-8 md:py-3 rounded-full bg-sky-950/60 hover:bg-sky-900/60 text-white border border-sky-400/30 font-primary font-bold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-md transition-all duration-300 no-underline cursor-pointer"
            >
              <span>Explore Services</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
