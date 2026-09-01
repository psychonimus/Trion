import React, { useState, useEffect, useRef } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import * as THREE from "three";
import KineticGrid from "@/components/ui/kinetic-grid";

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
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, visible];
}

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

function MultiBuildingBlueprintCanvas({ onPhaseUpdate }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();

    const aspect = width / height;
    const calcD = (w) => (w < 640 ? 9.8 : w < 1024 ? 9.2 : 8.6);
    let d = calcD(width);

    const camera = new THREE.OrthographicCamera(
      -d * aspect,
      d * aspect,
      d,
      -d,
      1,
      100,
    );

    camera.position.set(13, 13.5, 13);
    camera.lookAt(-0.4, 3.1, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      premultipliedAlpha: false,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.backgroundColor = "transparent";
    renderer.domElement.style.display = "block";
    container.appendChild(renderer.domElement);

    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    const matBlueprintPlinth = new THREE.MeshBasicMaterial({
      color: 0x080f21,
      transparent: true,
      opacity: 0.95,
    });
    const matBlueprintFace = new THREE.MeshBasicMaterial({
      color: 0x0c1938,
      transparent: true,
      opacity: 0.35,
    });
    const matGlassFace = new THREE.MeshBasicMaterial({
      color: 0x142b5c,
      transparent: true,
      opacity: 0.45,
    });
    const matWhiteLine = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.9,
    });
    const matCyanLine = new THREE.LineBasicMaterial({
      color: 0x7dd3fc,
      transparent: true,
      opacity: 0.65,
    });
    const matOrangeLine = new THREE.LineBasicMaterial({
      color: 0xff6b00,
      transparent: true,
      opacity: 0.95,
    });

    const basePlinth = new THREE.Mesh(
      new THREE.BoxGeometry(14.2, 0.3, 14.2),
      matBlueprintPlinth,
    );
    basePlinth.position.y = -0.15;
    masterGroup.add(basePlinth);

    const siteGrid = new THREE.GridHelper(14.2, 28, 0xff6b00, 0x182d52);
    siteGrid.position.y = 0.005;
    masterGroup.add(siteGrid);

    const boundaryPts = [
      new THREE.Vector3(-6.5, 0.015, -6.5),
      new THREE.Vector3(6.5, 0.015, -6.5),
      new THREE.Vector3(6.5, 0.015, 6.5),
      new THREE.Vector3(-6.5, 0.015, 6.5),
      new THREE.Vector3(-6.5, 0.015, -6.5),
    ];
    const boundaryLine = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(boundaryPts),
      matOrangeLine,
    );
    masterGroup.add(boundaryLine);

    const createCADBlock = (
      w,
      h,
      depth,
      x,
      y,
      z,
      edgeMat = matWhiteLine,
      faceMat = matBlueprintFace,
    ) => {
      const g = new THREE.Group();
      const geom = new THREE.BoxGeometry(w, h, depth);
      const mesh = new THREE.Mesh(geom, faceMat);
      mesh.position.y = h / 2;
      g.add(mesh);

      const edges = new THREE.EdgesGeometry(geom);
      const lines = new THREE.LineSegments(edges, edgeMat);
      lines.position.y = h / 2;
      g.add(lines);

      g.position.set(x, y, z);
      return g;
    };

    const makeBuildingStructure = (
      bx,
      bz,
      bw,
      bdepth,
      maxH,
      numFloors,
      isTower = false,
    ) => {
      const buildingGroup = new THREE.Group();
      buildingGroup.position.set(bx, 0, bz);

      const foundation = createCADBlock(
        bw + 0.4,
        0.2,
        bdepth + 0.4,
        0,
        0,
        0,
        matOrangeLine,
        matBlueprintFace,
      );
      buildingGroup.add(foundation);

      const colsGroup = new THREE.Group();
      const colMeshes = [];
      const colStepX = bw / 2;
      const colStepZ = bdepth / 2;
      for (let ix = -1; ix <= 1; ix++) {
        for (let iz = -1; iz <= 1; iz++) {
          const col = createCADBlock(
            0.14,
            maxH,
            0.14,
            ix * colStepX,
            0.2,
            iz * colStepZ,
            matOrangeLine,
            matBlueprintFace,
          );
          colsGroup.add(col);
          colMeshes.push(col);
        }
      }
      buildingGroup.add(colsGroup);

      const beamsGroup = new THREE.Group();
      const beamMeshes = [];
      for (let fl = 1; fl <= numFloors; fl++) {
        const floorH = (maxH / numFloors) * fl;
        const b1 = createCADBlock(
          bw,
          0.1,
          0.1,
          0,
          floorH + 0.15,
          -bdepth / 2,
          matCyanLine,
          matBlueprintFace,
        );
        const b2 = createCADBlock(
          bw,
          0.1,
          0.1,
          0,
          floorH + 0.15,
          bdepth / 2,
          matCyanLine,
          matBlueprintFace,
        );
        const b3 = createCADBlock(
          0.1,
          0.1,
          bdepth,
          -bw / 2,
          floorH + 0.15,
          0,
          matCyanLine,
          matBlueprintFace,
        );
        const b4 = createCADBlock(
          0.1,
          0.1,
          bdepth,
          bw / 2,
          floorH + 0.15,
          0,
          matCyanLine,
          matBlueprintFace,
        );
        beamsGroup.add(b1);
        beamsGroup.add(b2);
        beamsGroup.add(b3);
        beamsGroup.add(b4);
        beamMeshes.push(b1, b2, b3, b4);
      }
      buildingGroup.add(beamsGroup);

      const slabsGroup = new THREE.Group();
      const slabMeshes = [];
      for (let fl = 1; fl <= numFloors; fl++) {
        const floorH = (maxH / numFloors) * fl;
        const slab = createCADBlock(
          bw + 0.2,
          0.08,
          bdepth + 0.2,
          0,
          floorH + 0.15,
          0,
          matWhiteLine,
          matBlueprintFace,
        );
        slabsGroup.add(slab);
        slabMeshes.push(slab);
      }
      buildingGroup.add(slabsGroup);

      const coreH = maxH + (isTower ? 0.8 : 0.4);
      const core = createCADBlock(
        bw * 0.4,
        coreH,
        bdepth * 0.4,
        0,
        0.2,
        0,
        matOrangeLine,
        matBlueprintFace,
      );
      buildingGroup.add(core);

      const wallsGroup = new THREE.Group();
      const wall1 = createCADBlock(
        0.15,
        maxH,
        bdepth * 0.95,
        -bw / 2,
        0.2,
        0,
        matWhiteLine,
        matBlueprintFace,
      );
      const wall2 = createCADBlock(
        bw * 0.95,
        maxH,
        0.15,
        0,
        0.2,
        -bdepth / 2,
        matWhiteLine,
        matBlueprintFace,
      );
      wallsGroup.add(wall1);
      wallsGroup.add(wall2);
      buildingGroup.add(wallsGroup);

      const glassFacade = createCADBlock(
        bw * 0.95,
        maxH * 0.95,
        bdepth * 0.95,
        0,
        0.2,
        0,
        matCyanLine,
        matGlassFace,
      );
      buildingGroup.add(glassFacade);

      const roofStructure = createCADBlock(
        bw * 0.8,
        0.4,
        bdepth * 0.8,
        0,
        maxH + 0.2,
        0,
        matOrangeLine,
        matBlueprintFace,
      );
      buildingGroup.add(roofStructure);

      masterGroup.add(buildingGroup);

      return {
        group: buildingGroup,
        foundation,
        colsGroup,
        colMeshes,
        maxH,
        beamsGroup,
        beamMeshes,
        slabsGroup,
        slabMeshes,
        core,
        wallsGroup,
        glassFacade,
        roofStructure,
      };
    };

    const makeCraneStructure = (cx, cz, totalH = 6.4) => {
      const craneGroup = new THREE.Group();
      craneGroup.position.set(cx, 0, cz);

      const mastBase = createCADBlock(
        0.8,
        0.25,
        0.8,
        0,
        0,
        0,
        matOrangeLine,
        matBlueprintFace,
      );
      craneGroup.add(mastBase);

      const mastGroup = new THREE.Group();
      const mastTower = createCADBlock(
        0.35,
        totalH,
        0.35,
        0,
        0.25,
        0,
        matOrangeLine,
        matBlueprintFace,
      );
      mastGroup.add(mastTower);

      for (let mh = 1.0; mh < totalH; mh += 1.0) {
        const br = createCADBlock(
          0.42,
          0.08,
          0.42,
          0,
          mh + 0.25,
          0,
          matWhiteLine,
          matBlueprintFace,
        );
        mastGroup.add(br);
      }
      craneGroup.add(mastGroup);

      const jibAssembly = new THREE.Group();
      jibAssembly.position.set(0, totalH + 0.25, 0);

      const cabin = createCADBlock(
        0.5,
        0.5,
        0.5,
        0.3,
        0,
        0.2,
        matCyanLine,
        matBlueprintFace,
      );
      jibAssembly.add(cabin);

      const apexTower = createCADBlock(
        0.2,
        1.0,
        0.2,
        0,
        0.5,
        0,
        matOrangeLine,
        matBlueprintFace,
      );
      jibAssembly.add(apexTower);

      const frontJib = createCADBlock(
        4.6,
        0.2,
        0.2,
        2.3,
        0.1,
        0,
        matWhiteLine,
        matBlueprintFace,
      );
      jibAssembly.add(frontJib);

      const counterJib = createCADBlock(
        1.8,
        0.2,
        0.2,
        -0.9,
        0.1,
        0,
        matWhiteLine,
        matBlueprintFace,
      );
      jibAssembly.add(counterJib);

      const counterWeight = createCADBlock(
        0.6,
        0.4,
        0.4,
        -1.5,
        -0.1,
        0,
        matOrangeLine,
        matBlueprintFace,
      );
      jibAssembly.add(counterWeight);

      const cable1Pts = [
        new THREE.Vector3(0, 1.0, 0),
        new THREE.Vector3(3.8, 0.15, 0),
      ];
      jibAssembly.add(
        new THREE.Line(
          new THREE.BufferGeometry().setFromPoints(cable1Pts),
          matCyanLine,
        ),
      );

      const cable2Pts = [
        new THREE.Vector3(0, 1.0, 0),
        new THREE.Vector3(-1.6, 0.15, 0),
      ];
      jibAssembly.add(
        new THREE.Line(
          new THREE.BufferGeometry().setFromPoints(cable2Pts),
          matCyanLine,
        ),
      );

      const trolley = createCADBlock(
        0.3,
        0.15,
        0.3,
        2.6,
        0,
        0,
        matOrangeLine,
        matBlueprintFace,
      );
      jibAssembly.add(trolley);

      const hoistPts = [
        new THREE.Vector3(2.6, 0, 0),
        new THREE.Vector3(2.6, -2.4, 0),
      ];
      const hoistLine = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(hoistPts),
        matCyanLine,
      );
      jibAssembly.add(hoistLine);

      const hook = createCADBlock(
        0.25,
        0.25,
        0.25,
        2.6,
        -2.5,
        0,
        matOrangeLine,
        matBlueprintFace,
      );
      jibAssembly.add(hook);

      craneGroup.add(jibAssembly);
      masterGroup.add(craneGroup);

      return {
        group: craneGroup,
        mastBase,
        mastGroup,
        jibAssembly,
        totalH,
      };
    };

    const crane = makeCraneStructure(-5.2, 0.4, 6.8);
    const bldg1 = makeBuildingStructure(-1.4, 0.2, 3.6, 3.6, 3.8, 3, false);
    const bldg2 = makeBuildingStructure(2.8, -0.4, 3.2, 3.2, 5.6, 5, true);

    const animateBuilding = (bldg, bProg) => {
      if (bProg <= 0) {
        bldg.group.visible = false;
        return;
      }
      bldg.group.visible = true;

      const pFound = Math.min(1, Math.max(0, bProg / 0.15));
      bldg.foundation.scale.set(pFound, pFound, pFound);

      const pCols = Math.min(1, Math.max(0, (bProg - 0.15) / 0.25));
      bldg.colMeshes.forEach((col, idx) => {
        const colProg = Math.min(1, Math.max(0, pCols * 9 - idx));
        col.scale.set(1, colProg, 1);
        col.position.y = 0.2 + (bldg.maxH * colProg) / 2;
      });

      const pBeams = Math.min(1, Math.max(0, (bProg - 0.4) / 0.2));
      bldg.beamMeshes.forEach((bm, idx) => {
        const bmProg = Math.min(
          1,
          Math.max(0, pBeams * bldg.beamMeshes.length - idx),
        );
        bm.scale.set(bmProg, 1, bmProg);
      });

      const pSlabs = Math.min(1, Math.max(0, (bProg - 0.6) / 0.15));
      bldg.slabMeshes.forEach((sl, idx) => {
        const slProg = Math.min(
          1,
          Math.max(0, pSlabs * bldg.slabMeshes.length - idx),
        );
        sl.scale.set(slProg, 1, slProg);
      });

      const pCore = Math.min(1, Math.max(0, (bProg - 0.7) / 0.12));
      bldg.core.scale.set(1, pCore, 1);

      const pWalls = Math.min(1, Math.max(0, (bProg - 0.8) / 0.1));
      bldg.wallsGroup.scale.set(1, pWalls, 1);

      const pGlass = Math.min(1, Math.max(0, (bProg - 0.88) / 0.08));
      bldg.glassFacade.scale.set(pGlass, pGlass, pGlass);

      const pRoof = Math.min(1, Math.max(0, (bProg - 0.94) / 0.06));
      bldg.roofStructure.scale.set(pRoof, pRoof, pRoof);
    };

    let isVisible = true;
    let animId;
    const startTime = Date.now();

    const obs = new IntersectionObserver(
      ([e]) => {
        isVisible = e.isIntersecting;
      },
      { threshold: 0.05 },
    );
    obs.observe(container);

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      const asp = w / h;
      d = calcD(w);
      camera.left = -d * asp;
      camera.right = d * asp;
      camera.top = d;
      camera.bottom = -d;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    const animate = () => {
      if (isVisible) {
        const elapsed = (Date.now() - startTime) / 1000;
        const totalDuration = 10.0;
        const progress = Math.min(1, elapsed / totalDuration);

        const pGrid = Math.min(1, Math.max(0, progress / 0.08));
        siteGrid.scale.set(pGrid, 1, pGrid);
        boundaryLine.scale.set(pGrid, 1, pGrid);

        const pCrane = Math.min(1, Math.max(0, progress / 0.12));
        crane.mastBase.scale.set(pCrane, pCrane, pCrane);
        crane.mastGroup.scale.set(1, pCrane, 1);
        crane.jibAssembly.position.y = crane.totalH * pCrane + 0.25;
        crane.jibAssembly.scale.set(pCrane, pCrane, pCrane);

        let targetJibAngle = 0;
        if (progress < 1.0) {
          if (progress > 0.08 && progress <= 0.52) {
            targetJibAngle = 0.35;
          } else if (progress > 0.52) {
            targetJibAngle = -0.15;
          }
          crane.jibAssembly.rotation.y +=
            (targetJibAngle - crane.jibAssembly.rotation.y) * 0.04;
        } else {
          const oscTime = elapsed - totalDuration;
          const liveAngle = Math.sin(oscTime * 0.6) * 0.45 + 0.1;
          crane.jibAssembly.rotation.y = liveAngle;
        }

        const pB1 = Math.min(1, Math.max(0, (progress - 0.08) / 0.44));
        animateBuilding(bldg1, pB1);

        const pB2 = Math.min(1, Math.max(0, (progress - 0.52) / 0.44));
        animateBuilding(bldg2, pB2);

        let currentPhase = "PHASE 01: MASTERPLAN BLUEPRINT & CRANE SETUP";
        if (progress > 0.08 && progress <= 0.52)
          currentPhase = "CONSTRUCTING BUILDING 01: COMMERCIAL CORE";
        else if (progress > 0.52 && progress < 0.96)
          currentPhase = "CONSTRUCTING BUILDING 02: HIGH-RISE TOWER";
        else if (progress >= 0.96)
          currentPhase = "MASTERPLAN COMPLETE // ACTIVE CRANE MOBILITY";

        if (onPhaseUpdate) {
          onPhaseUpdate(currentPhase);
        }

        renderer.render(scene, camera);
      }
      animId = requestAnimationFrame(animate);
    };

    animateBuilding(bldg1, 0);
    animateBuilding(bldg2, 0);
    renderer.render(scene, camera);

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      obs.disconnect();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [onPhaseUpdate]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full bg-transparent pointer-events-none"
    />
  );
}

function ServiceCard({ service, index, isHighlighted }) {
  const [ref, visible] = useReveal();
  const Icon = service.IconComponent;
  const isImageLeft = service.align === "left";
  const isLight = index % 2 === 0;

  return (
    <article
      id={service.id}
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition:
          "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s ease, border-color 0.6s ease",
      }}
      className={`relative py-16 lg:py-24 border-b transition-colors duration-300 ${
        isHighlighted
          ? "ring-2 ring-[#f55d1b] shadow-[0_0_50px_rgba(245, 93, 27,0.35)] relative z-20"
          : ""
      } ${
        isLight
          ? isHighlighted
            ? "bg-orange-50/20 text-slate-900 border-[#f55d1b]"
            : "bg-white text-slate-900 border-slate-200/80"
          : isHighlighted
            ? "bg-[#000435] text-white border-[#f55d1b]"
            : "bg-[#000435] text-white border-white/[0.08]"
      }`}
    >
      <div className="max-w-7xl 2xl:max-w-[1580px] mx-auto px-6 sm:px-8 lg:px-12">
        <div
          className={`flex items-center justify-between border-b pb-3 mb-8 ${
            isLight ? "border-slate-200" : "border-white/10"
          }`}
        >
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-[1.5px] bg-[#f55d1b]" />
            <span className="font-mono text-[11px] text-[#f55d1b] tracking-[0.2em] uppercase font-bold">
              SECTION // {service.num}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span
              className={`font-mono text-[11px] hidden sm:inline ${
                isLight ? "text-slate-400" : "text-slate-400"
              }`}
            >
              TRION INFRASTRUCTURE
            </span>
            <SvgCorner />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div
            className={`lg:col-span-6 ${
              isImageLeft ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <div className="flex items-center gap-3.5 mb-5">
              <div
                className={`w-14 h-14 rounded-xl border border-[#f55d1b]/35 flex items-center justify-center shadow-lg backdrop-blur-md ${
                  isLight ? "bg-slate-50" : "bg-[#000435]"
                }`}
              >
                <Icon />
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#f55d1b] font-bold block uppercase tracking-wider">
                  CAPABILITY VERTICAL
                </span>
                <span
                  className={`font-mono text-xs font-medium ${
                    isLight ? "text-slate-700" : "text-slate-300"
                  }`}
                >
                  {service.shortTitle}
                </span>
              </div>
            </div>

            <h3
              className={`font-primary font-bold text-xl sm:text-2xl lg:text-[26px] leading-snug tracking-tight mb-4 ${
                isLight ? "text-slate-900" : "text-white"
              }`}
            >
              {service.title}
            </h3>

            <div className="max-w-2xl mb-5">
              <p
                className={`font-secondary text-sm 2xl:text-[15px] leading-[1.7] text-justify sm:text-left ${
                  isLight ? "text-slate-600" : "text-slate-300"
                }`}
              >
                {service.content}
              </p>
            </div>

            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-mono ${
                isLight
                  ? "bg-slate-100 border-slate-200 text-slate-700"
                  : "bg-[#000435] border-white/10 text-slate-300"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#f55d1b]" />
              <span>{service.caption}</span>
            </div>
          </div>

          <div
            className={`lg:col-span-6 ${
              isImageLeft ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <div
              className={`relative group overflow-hidden rounded-2xl border shadow-2xl h-[300px] sm:h-[380px] lg:h-[420px] ${
                isLight
                  ? "border-slate-200 bg-slate-100"
                  : "border-white/15 bg-[#000435]"
              }`}
            >
              <img
                src={service.image}
                alt={service.shortTitle}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter contrast-125 brightness-95"
                loading="lazy"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-75 ${
                  isLight ? "from-white/60" : "from-[#000435]"
                }`}
              />
              <div
                className={`absolute inset-0 border rounded-2xl pointer-events-none ${
                  isLight ? "border-slate-200/50" : "border-white/10"
                }`}
              />

              <div className="absolute top-4 left-4">
                <SvgCorner />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ServicesPage() {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [heroRef, heroVis] = useReveal();
  const [introRef, introVis] = useReveal();
  const [activeIdx, setActiveIdx] = useState(0);
  const [highlightedId, setHighlightedId] = useState(null);
  const [constructionPhase, setConstructionPhase] = useState(
    "PHASE 01: MASTERPLAN BLUEPRINT SETUP",
  );

  useEffect(() => {
    const rawTarget =
      location.hash?.replace("#", "") ||
      searchParams.get("id") ||
      searchParams.get("service");

    if (rawTarget) {
      const foundIdx = SERVICES_DATA.findIndex(
        (s) =>
          s.id === rawTarget ||
          s.id === `service-${rawTarget}` ||
          s.num === rawTarget ||
          s.num === rawTarget.padStart(2, "0"),
      );

      if (foundIdx !== -1) {
        const targetId = SERVICES_DATA[foundIdx].id;
        setActiveIdx(foundIdx);
        setHighlightedId(targetId);

        const timer = setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) {
            if (window.__lenis) {
              window.__lenis.scrollTo(el, { offset: -90, duration: 1.2 });
            } else {
              const y = el.getBoundingClientRect().top + window.scrollY - 90;
              window.scrollTo({ top: y, behavior: "smooth" });
            }
          }
        }, 150);

        const clearHighlightTimer = setTimeout(() => {
          setHighlightedId(null);
        }, 3500);

        return () => {
          clearTimeout(timer);
          clearTimeout(clearHighlightTimer);
        };
      }
    }
  }, [location.hash, searchParams]);

  useEffect(() => {
    const handleScroll = () => {
      SERVICES_DATA.forEach((s, i) => {
        const el = document.getElementById(s.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight * 0.45 &&
            rect.bottom >= window.innerHeight * 0.15
          ) {
            setActiveIdx(i);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-[#000435] font-primary min-h-screen overflow-x-hidden selection:bg-[#f55d1b] selection:text-white">
      <aside className="fixed right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-2 z-40 bg-[#000435]/85 backdrop-blur-md p-2 rounded-2xl border border-white/10 shadow-2xl">
        {SERVICES_DATA.map((s, idx) => {
          const isCurrent = activeIdx === idx;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`font-mono text-[11px] px-2 py-0.5 transition-all duration-300 ${
                isCurrent
                  ? "text-[#f55d1b] font-bold border-l-2 border-[#f55d1b] pl-2"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {s.num}
            </a>
          );
        })}
      </aside>

      <section className="relative min-h-[88vh] lg:min-h-[92vh] flex flex-col justify-center overflow-hidden border-b border-white/10 bg-[#000435]">
        <KineticGrid className="w-full h-full pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-14 lg:pb-16 flex flex-col justify-center">
          <div className="relative z-20 w-full max-w-7xl 2xl:max-w-[1580px] mx-auto px-6 sm:px-8 lg:px-12 flex-1 flex flex-col justify-center my-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div
                ref={heroRef}
                className="lg:col-span-6 z-20"
                style={{
                  opacity: heroVis ? 1 : 0,
                  transform: heroVis ? "translateY(0)" : "translateY(24px)",
                  transition:
                    "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-6 h-[1.5px] bg-[#f55d1b]" />
                  <span className="font-mono text-[11px] text-[#f55d1b] tracking-[0.25em] uppercase font-bold">
                    SERVICES
                  </span>
                </div>

                <h1 className="font-primary font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-[1.1] mb-6">
                  ENGINEERED
                  <br />
                  FOR <span className="text-[#f55d1b]">SCALE.</span>
                </h1>

                <div className="border-l-2 border-[#f55d1b]/40 pl-4 mb-6">
                  <p className="font-secondary text-slate-200 text-sm sm:text-base leading-relaxed max-w-lg">
                    At Trion, we provide comprehensive civil construction,
                    infrastructure, mining, excavation, crushing, and building
                    construction services for projects of diverse scales and
                    complexities.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#000435]/80 border border-white/10 max-w-lg shadow-lg font-mono text-xs backdrop-blur-md">
                  <div className="text-[10px] text-slate-400 tracking-widest uppercase mb-1.5 flex items-center gap-2">
                    <SvgCross />
                    <span>MASTERPLAN BLUEPRINT SEQUENCING:</span>
                  </div>
                  <div className="text-[#f55d1b] font-bold text-xs sm:text-[13px] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#f55d1b] animate-pulse" />
                    <span>{constructionPhase}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 relative h-[360px] sm:h-[440px] lg:h-[500px] xl:h-[540px] overflow-hidden shadow-2xl">
                <div className="absolute inset-0 pointer-events-none" />
                <MultiBuildingBlueprintCanvas
                  onPhaseUpdate={setConstructionPhase}
                />
              </div>
            </div>
          </div>
        </KineticGrid>
      </section>

      <section className="py-20 lg:py-28 border-b border-slate-200 bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 relative overflow-hidden">
        {/* Subtle Architectural Dot Grid Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

        <div className="max-w-7xl 2xl:max-w-[1580px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div
            ref={introRef}
            style={{
              opacity: introVis ? 1 : 0,
              transform: introVis ? "translateY(0)" : "translateY(24px)",
              transition:
                "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {/* Header / Technical Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6 mb-12">
              <div>
                <div className="flex items-center gap-2.5 mb-2.5">
                  <span className="w-6 h-[2px] bg-[#f55d1b]" />
                  <span className="font-mono text-[11px] text-[#f55d1b] tracking-[0.25em] uppercase font-bold">
                    CAPABILITIES OVERVIEW
                  </span>
                </div>
                <h2 className="font-primary font-black text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight">
                  Comprehensive Project Execution
                </h2>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-slate-400 font-semibold tracking-wider">
                  SPEC // 09 VERTICALS
                </span>
                <SvgCorner />
              </div>
            </div>

            {/* Creative Bento Grid Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-10">
              {/* Card 1: Multi-Sector Mastery */}
              <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-xl shadow-slate-200/50 flex flex-col justify-between relative overflow-hidden group hover:border-[#f55d1b]/40 transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-500/5 to-transparent rounded-bl-full pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span className="font-mono text-[11px] text-[#f55d1b] tracking-widest uppercase font-bold px-3 py-1 bg-orange-50 border border-orange-200/60 rounded-full">
                      VERTICALS & STANDARDS
                    </span>
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-slate-300" />
                      <span className="w-2 h-2 rounded-full bg-slate-300" />
                      <span className="w-2 h-2 rounded-full bg-[#f55d1b]" />
                    </div>
                  </div>

                  <p className="font-secondary text-slate-700 text-[15px] sm:text-base leading-[1.8] text-justify sm:text-left mb-6">
                    At Trion, we provide comprehensive civil construction,
                    infrastructure, mining, excavation, crushing, and building
                    construction services for projects of diverse scales and
                    complexities. Our expertise, modern equipment, skilled
                    workforce, and strong project management practices enable us
                    to deliver safe, efficient, and quality-driven solutions.
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-2 text-[11px] font-mono text-slate-600">
                  <span className="px-2.5 py-1 bg-slate-100 rounded-md">
                    Civil Construction
                  </span>
                  <span className="px-2.5 py-1 bg-slate-100 rounded-md">
                    Mining & Crushing
                  </span>
                  <span className="px-2.5 py-1 bg-slate-100 rounded-md">
                    High-Rise Towers
                  </span>
                </div>
              </div>

              {/* Card 2: Lifecycle Execution & Certification */}
              <div className="lg:col-span-6 bg-gradient-to-br from-[#000435] to-[#000435] text-white rounded-3xl border border-white/10 p-8 sm:p-10 shadow-2xl flex flex-col justify-between relative overflow-hidden group hover:border-[#f55d1b]/50 transition-all duration-300">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[radial-gradient(ellipse_at_top_right,rgba(245, 93, 27,0.15)_0%,transparent_70%)] pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span className="font-mono text-[11px] text-[#f55d1b] tracking-widest uppercase font-bold px-3 py-1 bg-[#f55d1b]/15 border border-[#f55d1b]/30 rounded-full">
                      FULL LIFECYCLE SCOPE
                    </span>
                    <SvgCross />
                  </div>

                  <p className="font-secondary text-slate-200 text-[15px] sm:text-base leading-[1.8] text-justify sm:text-left mb-6">
                    From site development, earthwork and excavation to road
                    construction, mining, crushing, structural and high-rise
                    construction, we offer integrated solutions that support
                    projects from groundwork to completion.
                  </p>
                </div>

                {/* Slogan Banner */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
                  <div className="inline-flex items-center gap-3 px-4 py-2.5 border border-[#f55d1b]/40 bg-[#f55d1b]/15 rounded-xl shadow-lg backdrop-blur-md">
                    <SvgSparkle />
                    <span className="font-primary font-bold text-white text-xs sm:text-sm tracking-wide">
                      Built on expertise. Delivered with precision.
                    </span>
                  </div>

                  <span className="font-mono text-[11px] text-slate-400">
                    TRION // 2026
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative">
        {SERVICES_DATA.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            index={index}
            isHighlighted={highlightedId === service.id}
          />
        ))}
      </div>
    </main>
  );
}
