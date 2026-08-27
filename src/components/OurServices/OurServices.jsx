import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { HiArrowRight } from 'react-icons/hi2';
import './OurServices.css';

import architectureImg from '/assets/images/building.png';
import interiorImg from '/assets/images/mining.png';
import engineerImg from '/assets/images/infra.png';
import planningImg from '/assets/images/excavation.png';

const SERVICES_DATA = [
    {
        id: 'builidng',
        tag: 'Building',
        title: 'Building Industry',
        subtitle: 'RCC Works, MEP Works, Cladding/Facade Works',
        description: 'Mastercrafted luxury residences blending sustainable natural materials with organic cliffside geometry.',
        image: architectureImg,
        link: '#services-architecture',
    },
    {
        id: 'mining',
        tag: 'Mining',
        title: 'Mining & Crushing',
        subtitle: 'Extraction, Drilling, Blasting, Crushing Operation Transportation & Material Handling',
        description: 'Harmonious living environments with double-height timber ceilings, indoor foliage, and panoramic ocean vistas.',
        image: interiorImg,
        link: '#services-interior',
    },
    {
        id: 'infra',
        tag: 'Infra',
        title: 'Infrastructure',
        subtitle: 'Bridge Construction, Roads & Highways Construction, Highrise Building Construction',
        description: 'Cantilevered multi-tiered structural engineering creating resilient, iconic landmark commercial architecture.',
        image: engineerImg,
        link: '#services-engineer',
    },
    {
        id: 'excavation',
        tag: 'Excavation',
        title: 'Excavation',
        subtitle: 'Site Clearing, Grading, Earth Moving, Disposal',
        description: 'Strategic coastal site planning integrating cantilevered terraces with expansive infinity water horizons.',
        image: planningImg,
        link: '#services-planning',
    },
];

export default function OurServices() {
    const [activeIndex, setActiveIndex] = useState(0); // Engineer active by default as in screenshot
    const sectionRef = useRef(null);
    const bgImagesRef = useRef([]);
    const columnsRef = useRef([]);
    const detailsRef = useRef([]);
    const hasAnimatedIn = useRef(false);

    // Background Crossfade & Scale Animation using GSAP
    useEffect(() => {
        bgImagesRef.current.forEach((imgEl, index) => {
            if (!imgEl) return;
            if (index === activeIndex) {
                gsap.to(imgEl, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.9,
                    ease: 'power2.out',
                    overwrite: 'auto',
                });
            } else {
                gsap.to(imgEl, {
                    opacity: 0,
                    scale: 1.06,
                    duration: 0.9,
                    ease: 'power2.out',
                    overwrite: 'auto',
                });
            }
        });

        // Animate details inside active column
        detailsRef.current.forEach((detailEl, index) => {
            if (!detailEl) return;
            if (index === activeIndex) {
                gsap.fromTo(
                    detailEl.querySelectorAll('.services-anim-target'),
                    { y: 18, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.55,
                        stagger: 0.08,
                        ease: 'power3.out',
                        overwrite: 'auto',
                    }
                );
            }
        });
    }, [activeIndex]);

    // Initial Appearance Animation on Scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimatedIn.current) {
                    hasAnimatedIn.current = true;

                    const ctx = gsap.context(() => {
                        gsap.fromTo(
                            sectionRef.current,
                            { opacity: 0 },
                            { opacity: 1, duration: 0.8, ease: 'power2.out' }
                        );

                        gsap.fromTo(
                            columnsRef.current,
                            { y: 60, opacity: 0 },
                            {
                                y: 0,
                                opacity: 1,
                                duration: 0.9,
                                stagger: 0.12,
                                ease: 'power3.out',
                                delay: 0.2,
                            }
                        );
                    }, sectionRef);

                    return () => ctx.revert();
                }
            },
            { threshold: 0.2 }
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
        <>

            <section className="heading mt-5">
                <h2 className="service-heading text-center">Our Services</h2>
            </section>



            <section className="services-section" ref={sectionRef} id="services">
                {/* Dynamic Background Image Layers */}


                <div className="services-bg-container">
                    {SERVICES_DATA.map((service, index) => (
                        <div
                            key={service.id}
                            ref={(el) => (bgImagesRef.current[index] = el)}
                            className="services-bg-layer"
                            style={{
                                backgroundImage: `url(${service.image})`,
                                opacity: index === 2 ? 1 : 0,
                            }}
                        />
                    ))}
                    {/* Dark Vignette & Atmospheric Gradients */}
                    <div className="services-bg-overlay" />
                </div>

                {/* 4 Interactive Columns */}
                <div className="services-columns-container">
                    {SERVICES_DATA.map((service, index) => {
                        const isActive = index === activeIndex;

                        return (
                            <div
                                key={service.id}
                                ref={(el) => (columnsRef.current[index] = el)}
                                className={`services-column ${isActive ? 'services-column--active' : ''}`}
                                onMouseEnter={() => setActiveIndex(index)}
                                onClick={() => setActiveIndex(index)}
                                tabIndex={0}
                                role="button"
                                aria-label={`View ${service.tag} service details`}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        setActiveIndex(index);
                                    }
                                }}
                            >
                                {/* Column Separator Highlight */}
                                <div className="services-column-line" />

                                {/* Column Content Wrapper */}
                                <div
                                    className="services-column-content"
                                    ref={(el) => (detailsRef.current[index] = el)}
                                >
                                    {/* Category Pill Tag */}
                                    <div className="services-tag-pill services-anim-target">
                                        <span>{service.tag}</span>
                                    </div>

                                    {/* Service Title */}
                                    <h3 className="services-item-title services-anim-target">
                                        {service.title}
                                    </h3>

                                    {/* Extra Subtitle & CTA for Active State */}
                                    <div className="services-active-details">
                                        {service.subtitle && (
                                            <p className="services-item-subtitle services-anim-target">
                                                {service.subtitle}
                                            </p>
                                        )}

                                        {/* Discover More Button */}
                                        <a
                                            href={service.link}
                                            className="services-discover-btn services-anim-target"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <span>Discover More</span>
                                            <HiArrowRight className="services-btn-arrow" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
}