import React, { useState, useEffect, useRef } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const PROJECTS = [
  {
    number: "01",
    navLabel: "MANECKJI COOPER SCHOOL",
    title: "Redevelopment of Maneckji Cooper School",
    scope: "Civil Construction, Interiors, MEP & Façade Works",
    description: [
      "Trion undertook the comprehensive redevelopment of Maneckji Cooper School, covering end-to-end civil construction, interior development, MEP services, and façade works. The project focuses on creating modern, functional, and durable spaces while maintaining high standards of quality, safety, and execution.",
      "Our scope includes structural and civil works, interior finishes, mechanical, electrical and plumbing installations, and façade development, ensuring seamless integration across all project components.",
      "A complete redevelopment solution, built for functionality, safety, and lasting value.",
    ],
    images: [
      "/assets/images/projects/school_complete_1788182433826.webp",
      "/assets/images/projects/school_before_1788182414514.webp",
      "/assets/images/img-1.webp",
      "/assets/images/building.webp",
    ],
  },
  {
    number: "02",
    navLabel: "ANANT UNIVERSITY",
    title: "Anant National University – Academic Block 2",
    scope: "Civil, Architectural & MEP Works",
    description: [
      "Trion executed the construction of Academic Block 2 at Anant National University, delivering integrated civil, architectural, and MEP works. The project encompasses structural construction, architectural finishes, and essential mechanical, electrical and plumbing systems to create a modern, functional, and efficient academic environment.",
      "With a focus on quality, precision, safety, and timely execution, Trion contributed the development of a future-ready educational facility.",
    ],
    images: [
      "/assets/images/projects/anant_complete_1788182468391.webp",
      "/assets/images/projects/anant_structure_1788182450935.webp",
      "/assets/images/project-2.webp",
      "/assets/images/about-img.webp",
    ],
  },
  {
    number: "03",
    navLabel: "DFCC CORRIDOR – CTP-11",
    title: "DFCC Corridor – CTP-11",
    scope:
      "Crusher Plant Supply & Installation, Ballast and Blanket Material Production",
    description: [
      "We executed the supply and installation of a crusher plant for the production of railway ballast and blanket material from boulders. The scope involves setting up crushing operations to ensure the required material quality, consistency, and supply for the project.",
      "The project reflects Trion’s expertise in crushing plant solutions, material processing, and infrastructure support services.",
    ],
    images: [
      "/assets/images/projects/dfcc_crusher_1788182483833.webp",
      "/assets/images/projects/dfcc_track_1788182500820.webp",
      "/assets/images/mining.webp",
      "/assets/images/infra.webp",
    ],
  },
  {
    number: "04",
    navLabel: "CPRR – CHENNAI",
    title: "Supply of Aggregate for CPRR – Chennai",
    scope: "Aggregate Supply",
    description: [
      "We supplied quality construction aggregates for the CPRR project in Chennai, supporting critical infrastructure and civil construction requirements. The scope includes the reliable supply of specified aggregate materials to meet project quality and quantity requirements.",
      "The project demonstrates Trion’s capability in aggregate supply, material management, and infrastructure project support.",
    ],
    images: [
      "/assets/images/projects/cprr_aggregate_1788182517899.webp",
      "/assets/images/excavation.webp",
      "/assets/images/img-3.webp",
      "/assets/images/img-2.webp",
    ],
  },
  {
    number: "05",
    navLabel: "MALT FACTORY PROJECT",
    title: "Malt Factory Project",
    scope: "Civil & Interior Works",
    description: [
      "We executed comprehensive civil construction and interior works for the Malt Factory Project. The scope covers civil development, structural works, and interior execution to create a robust, functional, and efficient industrial facility.",
      "The project highlights Trion’s expertise in industrial construction, civil works, and interior development, delivered with a focus on quality, safety, and timely execution.",
    ],
    images: [
      "/assets/images/projects/malt_factory_civil_1788182535414.webp",
      "/assets/images/img-2.webp",
      "/assets/images/img-1.webp",
      "/assets/images/about-hero.webp",
    ],
  },
  {
    number: "06",
    navLabel: "BEACH HOUSE PROJECT",
    title: "Beach House Project",
    scope: "Shell & Core – Complete Civil Works",
    description: [
      "Trion executed the shell and core construction works for the Beach House Project, covering the complete range of civil construction activities required to establish the building structure and core infrastructure.",
      "It reflects our expertise in end-to-end civil construction and shell & core execution, with a focus on quality, structural integrity, safety, and efficient project delivery.",
    ],
    images: [
      "/assets/images/project-3.webp",
      "/assets/images/project-1.webp",
      "/assets/images/img-3.webp",
      "/assets/images/cta.webp",
    ],
  },
];

const ARCHIVE_PHOTOS = [
  {
    src: "/assets/images/projects/school_complete_1788182433826.webp",
    width: "w-[300px] sm:w-[380px] lg:w-[440px]",
    ratio: "aspect-[16/10]",
  },
  {
    src: "/assets/images/projects/dfcc_crusher_1788182483833.webp",
    width: "w-[320px] sm:w-[400px] lg:w-[460px]",
    ratio: "aspect-[16/10]",
  },
  {
    src: "/assets/images/projects/dfcc_track_1788182500820.webp",
    width: "w-[340px] sm:w-[420px] lg:w-[480px]",
    ratio: "aspect-[16/10]",
  },
  {
    src: "/assets/images/projects/cprr_aggregate_1788182517899.webp",
    width: "w-[320px] sm:w-[400px] lg:w-[460px]",
    ratio: "aspect-[16/10]",
  },
  {
    src: "/assets/images/projects/malt_factory_civil_1788182535414.webp",
    width: "w-[320px] sm:w-[400px] lg:w-[460px]",
    ratio: "aspect-[16/10]",
  },
  {
    src: "/assets/images/project-3.webp",
    width: "w-[320px] sm:w-[400px] lg:w-[460px]",
    ratio: "aspect-[16/10]",
  },
  {
    src: "/assets/images/projects/anant_complete_1788182468391.webp",
    width: "w-[300px] sm:w-[380px] lg:w-[440px]",
    ratio: "aspect-[16/10]",
  },
];

function CornerBracket({ position = "top-left" }) {
  const rotationClass =
    position === "top-right"
      ? "rotate-90"
      : position === "bottom-right"
        ? "rotate-180"
        : position === "bottom-left"
          ? "-rotate-90"
          : "";

  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={rotationClass}
    >
      <path
        d="M1 13V1H13"
        stroke="#f55d1b"
        strokeWidth="1.3"
        strokeLinecap="square"
      />
    </svg>
  );
}

function CrosshairTarget() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="5.5" stroke="#f55d1b" strokeWidth="0.9" />
      <line x1="10" y1="0" x2="10" y2="20" stroke="#f55d1b" strokeWidth="0.9" />
      <line x1="0" y1="10" x2="20" y2="10" stroke="#f55d1b" strokeWidth="0.9" />
    </svg>
  );
}

function ArrowPrev() {
  return (
    <svg
      width="18"
      height="8"
      viewBox="0 0 18 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 4H2M2 4L5.5 1M2 4L5.5 7"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

function ArrowNext() {
  return (
    <svg
      width="18"
      height="8"
      viewBox="0 0 18 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 4H16M16 4L12.5 1M16 4L12.5 7"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

export default function ProjectsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [imageIndices, setImageIndices] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });

  useEffect(() => {
    const idParam = searchParams.get("id") || searchParams.get("project");
    let targetIdx = -1;

    if (idParam) {
      targetIdx = PROJECTS.findIndex(
        (p) =>
          p.number === idParam ||
          p.number === idParam.padStart(2, "0") ||
          parseInt(p.number, 10) === parseInt(idParam, 10),
      );
    } else if (location.hash) {
      const cleanHash = location.hash.replace("#", "").replace("project-", "");
      targetIdx = PROJECTS.findIndex(
        (p) =>
          p.number === cleanHash ||
          p.number === cleanHash.padStart(2, "0") ||
          parseInt(p.number, 10) === parseInt(cleanHash, 10),
      );
    } else if (location.state && location.state.projectIndex !== undefined) {
      targetIdx = location.state.projectIndex;
    }

    if (targetIdx >= 0 && targetIdx < PROJECTS.length) {
      setActiveProjectIdx(targetIdx);
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (window.__lenis) {
        window.__lenis.scrollTo(0, { immediate: false, duration: 0.8 });
      }
    }
  }, [searchParams, location.hash, location.state]);

  const currentProject = PROJECTS[activeProjectIdx] || PROJECTS[0];
  const activeImageIdx = imageIndices[activeProjectIdx] || 0;

  const selectProject = (index) => {
    setActiveProjectIdx(index);
    if (PROJECTS[index]) {
      setSearchParams({ id: PROJECTS[index].number });
    }
  };

  const selectImage = (imgIdx) => {
    setImageIndices((prev) => ({ ...prev, [activeProjectIdx]: imgIdx }));
  };

  const prevImage = () => {
    const total = currentProject.images.length;
    setImageIndices((prev) => ({
      ...prev,
      [activeProjectIdx]: (activeImageIdx - 1 + total) % total,
    }));
  };

  const nextImage = () => {
    const total = currentProject.images.length;
    setImageIndices((prev) => ({
      ...prev,
      [activeProjectIdx]: (activeImageIdx + 1) % total,
    }));
  };

  const galleryRef = useRef(null);
  const [isGalleryDragging, setIsGalleryDragging] = useState(false);
  const [galleryStartX, setGalleryStartX] = useState(0);
  const [galleryScrollLeft, setGalleryScrollLeft] = useState(0);

  const handleGalleryMouseDown = (e) => {
    if (!galleryRef.current) return;
    setIsGalleryDragging(true);
    setGalleryStartX(e.pageX - galleryRef.current.offsetLeft);
    setGalleryScrollLeft(galleryRef.current.scrollLeft);
  };

  const handleGalleryMouseMove = (e) => {
    if (!isGalleryDragging || !galleryRef.current) return;
    e.preventDefault();
    const x = e.pageX - galleryRef.current.offsetLeft;
    const walk = (x - galleryStartX) * 1.6;
    galleryRef.current.scrollLeft = galleryScrollLeft - walk;
  };

  const handleGalleryMouseUp = () => setIsGalleryDragging(false);

  const scrollGallery = (direction) => {
    if (!galleryRef.current) return;
    const distance = direction === "left" ? -460 : 460;
    galleryRef.current.scrollBy({ left: distance, behavior: "smooth" });
  };

  return (
    <main className="bg-[#000435] text-[#FFFFFF] min-h-screen selection:bg-[#f55d1b]/30 selection:text-white font-sans antialiased overflow-x-hidden pt-12 sm:pt-16">
      <section className="relative w-full bg-[#000435] border-b border-[#000435] overflow-hidden lg:h-[224px] pt-24 pb-8 lg:pt-0 lg:pb-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_90%_at_75%_10%,rgba(18,44,82,0.35),transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

        <div className="max-w-7xl 2xl:max-w-[1580px]  mx-auto w-full h-full relative px-6 sm:px-10 lg:px-0">
          <div className="absolute right-0 top-0 bottom-0 w-[280px] md:w-[380px] lg:w-[380px] xl:w-[360px] pointer-events-none select-none overflow-hidden flex items-center justify-end z-0">
            <img
              src="/assets/images/building-wireframe.webp"
              alt=""
              className="w-full h-auto object-contain opacity-40 mix-blend-lighten"
              draggable="false"
            />
          </div>

          <div className="lg:absolute lg:left-[64px] lg:top-[34px] flex items-center gap-2.5 mb-3 lg:mb-0 relative z-10">
            <span className="w-6 h-[1.5px] bg-[#f55d1b]" />
            <span className="font-mono text-[10.5px] tracking-[0.26em] text-[#f55d1b] uppercase font-semibold">
              OUR UNIQUE PROJECTS
            </span>
          </div>

          <div className="lg:absolute lg:left-[64px] lg:top-[58px] relative z-10">
            <h1 className="font-primary font-bold text-4xl sm:text-5xl lg:text-[58px] tracking-tight leading-[0.92] uppercase">
              <span className="text-white block">PROJECTS</span>
              <span className="text-[#f55d1b] block mt-1">BUILT TO LAST.</span>
            </h1>
          </div>

          <div className="lg:absolute lg:right-[380px] lg:top-[72px] flex items-end gap-6 mt-6 lg:mt-0 relative z-10">
            <span className="hidden lg:block w-px h-14 bg-[#000435] self-stretch" />
          </div>
        </div>
      </section>

      <nav className="sticky top-0 z-40 bg-[#000435]/95 backdrop-blur-md border-b border-[#000435]">
        <div className="max-w-7xl 2xl:max-w-[1580px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
          <div
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            className="flex items-center gap-6 sm:gap-8 lg:gap-10 overflow-x-auto no-scrollbar py-3.5 -mb-[1px] [&::-webkit-scrollbar]:hidden"
          >
            {PROJECTS.map((item, index) => {
              const isActive = index === activeProjectIdx;
              return (
                <button
                  key={item.number}
                  onClick={() => selectProject(index)}
                  className="group relative pb-1.5 flex items-center gap-2 transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer"
                >
                  <span
                    className={`font-mono text-[11px] sm:text-xs font-semibold transition-colors ${
                      isActive
                        ? "text-[#f55d1b]"
                        : "text-[#ffffff] group-hover:text-[#ffffff]"
                    }`}
                  >
                    {item.number}
                  </span>
                  <span
                    className={`font-mono text-[10px] sm:text-[11px] tracking-[0.16em] uppercase font-medium transition-colors ${
                      isActive
                        ? "text-white"
                        : "text-[#ffffff] group-hover:text-[#ffffff]"
                    }`}
                  >
                    {item.navLabel}
                  </span>

                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#f55d1b]"
                      transition={{
                        type: "spring",
                        stiffness: 450,
                        damping: 35,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-1.5 font-mono text-[11px] tracking-widest pl-6 shrink-0 text-[#ffffff] border-l border-[#000435] py-3.5">
            <span className="text-[#f55d1b] font-bold">
              {currentProject.number}
            </span>
            <span>/</span>
            <span>06</span>
          </div>
        </div>
      </nav>

      <section className="py-10 sm:py-12 lg:py-14 border-b border-[#000435] bg-[#000435] relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

        <div className="max-w-7xl 2xl:max-w-[1580px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.number}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
            >
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-5xl sm:text-6xl font-extrabold text-[#f55d1b] tracking-tight leading-none">
                      {currentProject.number}
                    </span>
                    <span className="w-12 h-[1.5px] bg-[#f55d1b]" />
                  </div>

                  <h2 className="font-primary font-bold text-2xl sm:text-[28px] lg:text-[32px] text-white tracking-tight leading-[1.12] mb-6">
                    {currentProject.title}
                  </h2>

                  <div className="border-t border-b border-[#000435] py-4 mb-6">
                    <span className="block font-mono text-[10px] tracking-[0.22em] text-[#f55d1b] uppercase font-semibold mb-1.5">
                      SCOPE OF WORK
                    </span>
                    <p className="font-primary text-[14px] sm:text-[15px] text-[#ffffff] font-medium leading-snug">
                      {currentProject.scope}
                    </p>
                  </div>

                  <div>
                    <span className="block font-mono text-[10px] tracking-[0.22em] text-[#f55d1b] uppercase font-semibold mb-2.5">
                      PROJECT DESCRIPTION
                    </span>
                    <div className="space-y-3 font-sans text-white/70 text-[13px] sm:text-[14px] leading-[1.7]">
                      {currentProject.description.map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="relative bg-[#000435] border border-[#000435] overflow-hidden">
                  <div className="absolute top-2.5 left-2.5 z-20 pointer-events-none">
                    <CornerBracket position="top-left" />
                  </div>
                  <div className="absolute top-2.5 right-2.5 z-20 pointer-events-none">
                    <CornerBracket position="top-right" />
                  </div>
                  <div className="absolute bottom-12 left-2.5 z-20 pointer-events-none">
                    <CornerBracket position="bottom-left" />
                  </div>
                  <div className="absolute bottom-12 right-2.5 z-20 pointer-events-none">
                    <CornerBracket position="bottom-right" />
                  </div>

                  <div className="absolute top-1/2 right-2.5 z-20 pointer-events-none -translate-y-1/2">
                    <CrosshairTarget />
                  </div>

                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#000435]">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={`${currentProject.number}-${activeImageIdx}`}
                        src={currentProject.images[activeImageIdx]}
                        alt={currentProject.title}
                        initial={{ opacity: 0, scale: 1.03 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full h-full object-cover select-none"
                        loading="lazy"
                      />
                    </AnimatePresence>
                  </div>

                  <div className="px-4 py-2.5 bg-[#000435] border-t border-[#000435] flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="font-mono text-[11px] tracking-wider flex items-center gap-1">
                        <span className="font-bold text-[#f55d1b]">
                          {String(activeImageIdx + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[#ffffff]">/</span>
                        <span className="text-[#ffffff]">
                          {String(currentProject.images.length).padStart(
                            2,
                            "0",
                          )}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 ml-2">
                        {currentProject.images.map((_, barIdx) => {
                          const isBarActive = barIdx === activeImageIdx;
                          return (
                            <button
                              key={barIdx}
                              onClick={() => selectImage(barIdx)}
                              aria-label={`View image ${barIdx + 1}`}
                              className={`h-[2px] transition-all duration-300 cursor-pointer ${
                                isBarActive
                                  ? "w-6 bg-[#f55d1b]"
                                  : "w-3 bg-[#000435] hover:bg-[#000435]"
                              }`}
                            />
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <button
                        onClick={prevImage}
                        aria-label="Previous photograph"
                        className="group flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] tracking-wider text-white/60 hover:text-[#f55d1b] transition-colors cursor-pointer"
                      >
                        <ArrowPrev />
                        <span>PREV</span>
                      </button>

                      <span className="h-2.5 w-px bg-[#000435]" />

                      <button
                        onClick={nextImage}
                        aria-label="Next photograph"
                        className="group flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] tracking-wider text-white/60 hover:text-[#f55d1b] transition-colors cursor-pointer"
                      >
                        <span>NEXT</span>
                        <ArrowNext />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2.5 sm:gap-3 mt-3">
                  {currentProject.images.map((imgSrc, tIdx) => {
                    const isThumbActive = tIdx === activeImageIdx;
                    return (
                      <button
                        key={tIdx}
                        onClick={() => selectImage(tIdx)}
                        className={`relative aspect-[16/10] overflow-hidden bg-[#000435] transition-all duration-300 cursor-pointer ${
                          isThumbActive
                            ? "border border-[#f55d1b] ring-1 ring-[#f55d1b] opacity-100"
                            : "border border-[#000435] hover:border-[#000435] opacity-60 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={imgSrc}
                          alt=""
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute bottom-1 right-1.5 pointer-events-none bg-[#000435]/80 border border-[#000435] px-1 py-0.5 rounded-none">
                          <span className="font-mono text-[9px] text-white/90 font-medium tracking-wider">
                            0{tIdx + 1}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-[#000435] border-b border-[#000435] overflow-hidden">
        <div className="max-w-7xl 2xl:max-w-[1580px] mx-auto px-6 sm:px-10 lg:px-16 mb-6 sm:mb-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-5 h-[1.5px] bg-[#f55d1b]" />
                <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.22em] text-[#f55d1b] uppercase font-semibold">
                  ARCHIVAL GALLERY
                </span>
              </div>
              <h2 className="font-primary font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight uppercase">
                MORE PROJECTS
              </h2>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                onClick={() => scrollGallery("left")}
                aria-label="Scroll left"
                className="w-10 h-10 sm:w-11 sm:h-11 border border-[#000435] text-[#ffffff] flex items-center justify-center hover:border-[#f55d1b] hover:text-[#f55d1b] transition-colors active:scale-95 bg-[#000435] cursor-pointer"
              >
                <ArrowPrev />
              </button>
              <button
                onClick={() => scrollGallery("right")}
                aria-label="Scroll right"
                className="w-10 h-10 sm:w-11 sm:h-11 border border-[#000435] text-[#ffffff] flex items-center justify-center hover:border-[#f55d1b] hover:text-[#f55d1b] transition-colors active:scale-95 bg-[#000435] cursor-pointer"
              >
                <ArrowNext />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={galleryRef}
          onMouseDown={handleGalleryMouseDown}
          onMouseMove={handleGalleryMouseMove}
          onMouseUp={handleGalleryMouseUp}
          onMouseLeave={handleGalleryMouseUp}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          className="flex items-center gap-4 sm:gap-5 px-6 sm:px-10 lg:px-16 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing select-none py-1 [&::-webkit-scrollbar]:hidden"
        >
          {ARCHIVE_PHOTOS.map((item, idx) => (
            <div
              key={idx}
              className={`shrink-0 ${item.width} ${item.ratio} border border-[#000435] relative group overflow-hidden bg-[#000435]`}
            >
              <img
                src={item.src}
                alt=""
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                draggable={false}
              />
              <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <CornerBracket position="top-left" />
              </div>
              <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <CornerBracket position="bottom-right" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
