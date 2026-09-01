import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";
import "./CtaSection.css";

export default function CtaSection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const bgRef = useRef(null);
  const hasAnimatedIn = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedIn.current) {
          hasAnimatedIn.current = true;

          const ctx = gsap.context(() => {
            gsap.fromTo(
              bgRef.current,
              { scale: 1.1, opacity: 0 },
              { scale: 1, opacity: 1, duration: 1.4, ease: "power2.out" },
            );
            const animElements =
              contentRef.current.querySelectorAll(".cta-anim-target");
            gsap.fromTo(
              animElements,
              { y: 40, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.9,
                stagger: 0.12,
                ease: "power3.out",
                delay: 0.2,
              },
            );
          }, sectionRef);

          return () => ctx.revert();
        }
      },
      { threshold: 0.25 },
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
    <section className="cta-wrapper" ref={sectionRef} id="cta">
      <div className="cta-card">
        <div
          className="cta-bg-layer"
          ref={bgRef}
          // style={{ backgroundImage: `url(${ctaBg})` }}
        />
        <div className="cta-overlay" />
        <div className="cta-glow-spot" />

        <div className="cta-content" ref={contentRef}>
          <h2 className="cta-headline cta-anim-target">
            Ready to Shape Your Next Architectural Landmark? <br />
          </h2>

          <p className="cta-description cta-anim-target">
            From monumental infrastructure and precision engineering to
            sustainable luxury developments, our master builders bring your
            grandest visions to life.
          </p>

          <div className="cta-actions cta-anim-target">
            <Link to="/contact" className="cta-btn-primary no-underline">
              <span>Start Your Project</span>
              <div className="cta-btn-icon-box">
                <HiArrowRight className="cta-arrow-icon" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="cta-img">
        <img src="/assets/images/cta.webp" style={{ width: "100%" }} alt="" />
      </div>
    </section>
  );
}
