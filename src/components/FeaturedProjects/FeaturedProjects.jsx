import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { HiArrowRight } from 'react-icons/hi2';
import './FeaturedProjects.css';

const PROJECTS = [
  {
    id: '01',
    number: '01/',
    title: 'Redevelopment of Maneckji Cooper School',
    location: 'Juhu, Mumbai',
    scope: 'All civil, Interiors, MEP and Façade Works',
    image: '/assets/images/building.png',
    link: '#project-1',
  },
  {
    id: '02',
    number: '02/',
    title: 'Anant National University Academic Block 2',
    location: 'Bopal, Ahmedabad',
    scope: 'All civil, architectural and MEP work',
    image: '/assets/images/project-2.jpg',
    link: '#project-2',
  },
  {
    id: '03',
    number: '03/',
    title: 'DFCC Corridor CTP-11',
    location: 'Virar, Mumbai',
    scope: 'Supply/Installation crusher plant to supply ballast and blanket from boulders',
    image: '/assets/images/infra.png',
    link: '#project-3',
  },
  {
    id: '04',
    number: '04/',
    title: 'Supply of Aggregate for CPRR',
    location: 'Tiruvallur, Tamil Nadu',
    scope: 'Supply of aggregate for CPRR - Chennai',
    image: '/assets/images/excavation.png',
    link: '#project-4',
  },
  {
    id: '05',
    number: '05/',
    title: 'Malt-Factory Project',
    location: 'Dahanu, Maharashtra',
    scope: 'All civil and Interiors Works',
    image: '/assets/images/img-2.jpg',
    link: '#project-5',
  },
  {
    id: '06',
    number: '06/',
    title: 'Beach House Project',
    location: 'Alibaug, Maharashtra',
    scope: 'Shell and core order for all civil works.',
    image: '/assets/images/project-3.jpg',
    link: '#project-6',
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
          {PROJECTS.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              ref={(el) => (rowsRef.current[index] = el)}
              className="project-row"
            >
              {/* Left Column: Number Index */}
              <div className="project-col-num">
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
                <h3 className="project-title-text">{project.title}</h3>
              </div>

              {/* Project Specs */}
              <div className="project-col-specs">
                <div className="project-spec-item">
                  <span className="project-spec-label">Location:</span>
                  <span className="project-spec-value">{project.location}</span>
                </div>
                {project.scope && (
                  <div className="project-spec-item">
                    <span className="project-spec-label">Scope:</span>
                    <span className="project-spec-value">{project.scope}</span>
                  </div>
                )}
                {project.area && (
                  <div className="project-spec-item">
                    <span className="project-spec-label">Area:</span>
                    <span className="project-spec-value">{project.area}</span>
                  </div>
                )}
                {project.style && (
                  <div className="project-spec-item">
                    <span className="project-spec-label">Style:</span>
                    <span className="project-spec-value">{project.style}</span>
                  </div>
                )}
              </div>

              {/* View Project CTA */}
              <div className="project-col-action">
                <span className="project-action-btn">
                  <span>View project</span>
                  <HiArrowRight className="project-action-arrow" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}