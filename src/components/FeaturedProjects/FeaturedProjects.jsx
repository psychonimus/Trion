import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './FeaturedProjects.css';

// ─── Custom Creative Architectural & Infrastructure SVG Icons ─────────────────

function SvgIconSchool() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 10L12 4L22 10L12 16L2 10Z" stroke="#ff6b00" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 12.5V17.5C6 19 8.686 20.5 12 20.5C15.314 20.5 18 19 18 17.5V12.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 10V16" stroke="#ff6b00" strokeWidth="1.75" strokeLinecap="round"/>
    </svg>
  );
}

function SvgIconCampus() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="6" width="18" height="15" rx="2" stroke="#ffffff" strokeWidth="1.5"/>
      <path d="M3 11H21" stroke="#ff6b00" strokeWidth="1.5" strokeDasharray="2 2"/>
      <path d="M8 15V17M12 15V17M16 15V17" stroke="#ff6b00" strokeWidth="1.75" strokeLinecap="round"/>
      <path d="M12 2L15 6H9L12 2Z" fill="#ff6b00" fillOpacity="0.3" stroke="#ff6b00" strokeWidth="1.5"/>
    </svg>
  );
}

function SvgIconFreightCorridor() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 19L9 5M20 19L15 5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M6.5 15H17.5M7.8 11.5H16.2M9.2 8H14.8" stroke="#ff6b00" strokeWidth="1.75" strokeLinecap="round"/>
      <circle cx="12" cy="17" r="1.5" fill="#ff6b00"/>
    </svg>
  );
}

function SvgIconAggregate() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="12,3 20,8 17,19 7,19 4,8" stroke="#ff6b00" strokeWidth="1.5" fill="#ff6b00" fillOpacity="0.15"/>
      <path d="M12 3V19M4 8L17 19M20 8L7 19" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.7"/>
    </svg>
  );
}

function SvgIconIndustrial() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 21V9L8 12V9L13 12V3H21V21H3Z" stroke="#ffffff" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M16 7H18M16 11H18M16 15H18" stroke="#ff6b00" strokeWidth="1.75" strokeLinecap="round"/>
    </svg>
  );
}

function SvgIconVilla() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 11L12 4L22 11" stroke="#ff6b00" strokeWidth="1.75" strokeLinecap="round"/>
      <path d="M4 11V20H20V11" stroke="#ffffff" strokeWidth="1.5"/>
      <rect x="9" y="13" width="6" height="7" stroke="#ff6b00" strokeWidth="1.5" fill="#ff6b00" fillOpacity="0.2"/>
    </svg>
  );
}

function SvgIconPin() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block mr-1 text-[#ff6b00]">
      <path d="M12 21C16 17 20 13.4183 20 9C20 4.58172 16.4183 1 12 1C7.58172 1 4 4.58172 4 9C4 13.4183 8 17 12 21Z" stroke="#ff6b00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="9" r="3" fill="#ff6b00"/>
    </svg>
  );
}

function SvgIconTools() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block mr-1 text-slate-400">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="#ffffff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function SvgActionArrow() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-action-arrow">
      <circle cx="12" cy="12" r="10" stroke="#ff6b00" strokeWidth="1.5" strokeDasharray="3 3"/>
      <path d="M9 12H15M15 12L12 9M15 12L12 15" stroke="#ff6b00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

const PROJECTS = [
  {
    id: '01',
    number: '01/',
    title: 'Redevelopment of Maneckji Cooper School',
    location: 'Juhu, Mumbai',
    scope: 'All civil, Interiors, MEP and Façade Works',
    image: '/assets/images/building.png',
    link: '#project-1',
    Icon: SvgIconSchool,
    tag: 'INSTITUTIONAL',
  },
  {
    id: '02',
    number: '02/',
    title: 'Anant National University Academic Block 2',
    location: 'Bopal, Ahmedabad',
    scope: 'All civil, architectural and MEP work',
    image: '/assets/images/project-2.jpg',
    link: '#project-2',
    Icon: SvgIconCampus,
    tag: 'EDUCATION CAMPUS',
  },
  {
    id: '03',
    number: '03/',
    title: 'DFCC Corridor CTP-11',
    location: 'Virar, Mumbai',
    scope: 'Supply/Installation crusher plant to supply ballast and blanket from boulders',
    image: '/assets/images/infra.png',
    link: '#project-3',
    Icon: SvgIconFreightCorridor,
    tag: 'RAILWAY CORRIDOR',
  },
  {
    id: '04',
    number: '04/',
    title: 'Supply of Aggregate for CPRR',
    location: 'Tiruvallur, Tamil Nadu',
    scope: 'Supply of aggregate for CPRR - Chennai',
    image: '/assets/images/excavation.png',
    link: '#project-4',
    Icon: SvgIconAggregate,
    tag: 'EXPRESSWAY AGGREGATE',
  },
  {
    id: '05',
    number: '05/',
    title: 'Malt-Factory Project',
    location: 'Dahanu, Maharashtra',
    scope: 'All civil and Interiors Works',
    image: '/assets/images/img-2.jpg',
    link: '#project-5',
    Icon: SvgIconIndustrial,
    tag: 'INDUSTRIAL FACILITY',
  },
  {
    id: '06',
    number: '06/',
    title: 'Beach House Project',
    location: 'Alibaug, Maharashtra',
    scope: 'Shell and core order for all civil works.',
    image: '/assets/images/project-3.jpg',
    link: '#project-6',
    Icon: SvgIconVilla,
    tag: 'LUXURY RESIDENCE',
  },
];

export default function FeaturedProjects() {
  const sectionRef = useRef(null);
  const rowsRef = useRef([]);
  const hasAnimatedIn = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedIn.current) {
          hasAnimatedIn.current = true;

          const ctx = gsap.context(() => {
            // Header animation
            gsap.fromTo(
              '.projects-header-anim',
              { y: 35, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.9,
                stagger: 0.12,
                ease: 'power3.out',
              }
            );

            // Project rows staggered reveal
            gsap.fromTo(
              rowsRef.current,
              { y: 50, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.85,
                stagger: 0.15,
                ease: 'power3.out',
                delay: 0.2,
              }
            );
          }, sectionRef);

          return () => ctx.revert();
        }
      },
      { threshold: 0.15 }
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

  return (
    <section className="featured-projects-section" ref={sectionRef} id="portfolio">
      {/* Subtle Background Circle Decor */}
      <div className="projects-decor-circle" />

      <div className="projects-container">
        {/* Section Header */}
        <div className="projects-header">
          <div className="projects-eyebrow projects-header-anim">
            <span className="projects-dot">•</span>
            <span>Featured work</span>
          </div>

          <h2 className="projects-main-title projects-header-anim">
            Projects.
          </h2>
        </div>

        {/* Projects List Rows */}
        <div className="projects-list">
          {PROJECTS.map((project, index) => {
            const ProjectIcon = project.Icon;
            return (
              <a
                key={project.id}
                href={project.link}
                ref={(el) => (rowsRef.current[index] = el)}
                className="project-row group"
              >
                {/* Left Column: Number Index & Custom Creative Icon */}
                <div className="project-col-num flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0e1b38] border border-white/10 flex items-center justify-center shadow-md group-hover:border-[#ff6b00]/50 group-hover:bg-[#ff6b00]/10 transition-all duration-300">
                    <ProjectIcon />
                  </div>
                  <span className="project-num-text">{project.number}</span>
                </div>

                {/* Thumbnail Image */}
                <div className="project-col-thumb">
                  <div className="project-thumb-frame">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-thumb-img"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Project Title */}
                <div className="project-col-title">
                  <span className="font-mono text-[10px] text-[#ff6b00] tracking-widest uppercase font-bold block mb-1">
                    {project.tag}
                  </span>
                  <h3 className="project-title-text">{project.title}</h3>
                </div>

                {/* Project Specs */}
                <div className="project-col-specs">
                  <div className="project-spec-item flex items-center">
                    <span className="project-spec-label flex items-center gap-1">
                      <SvgIconPin />
                      <span>Location:</span>
                    </span>
                    <span className="project-spec-value">{project.location}</span>
                  </div>
                  {project.scope && (
                    <div className="project-spec-item flex items-start">
                      <span className="project-spec-label flex items-center gap-1">
                        <SvgIconTools />
                        <span>Scope:</span>
                      </span>
                      <span className="project-spec-value">{project.scope}</span>
                    </div>
                  )}
                </div>

                {/* View Project CTA */}
                <div className="project-col-action">
                  <span className="project-action-btn group-hover:text-[#ff6b00] transition-colors">
                    <span>View project</span>
                    <SvgActionArrow />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}