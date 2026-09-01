import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./VerticleSlides.css";

const SLIDE_DURATION = 5;

const SLIDES = [
  {
    video: "/assets/videos/vid-1.mp4",
    h2: "Building What Moves the Future",
    h3: "From construction and infrastructure to mining and excavation, TRION delivers reliable civil engineering solutions built for performance, precision, and lasting impact.",
  },
  {
    video: "/assets/videos/vid-2.mp4",
    h2: "Strength. Precision. Execution.",
    h3: "With expertise across building works, infrastructure development, mining, crushing, and excavation, we turn complex projects into efficient, well-executed outcomes.",
  },
  {
    video: "/assets/videos/vid-3.mp4",
    h2: "Built on Expertise. Driven by Results.",
    h3: "TRION combines skilled teams, robust execution, and a commitment to quality to deliver projects safely, efficiently, and to the highest standards.",
  },
];

export default function VerticalSlides() {
  const textsRef = useRef([]);
  const fillsRef = useRef([]);
  const directLayersRef = useRef([]);
  const directVideosRef = useRef([]);
  const currentRef = useRef(0);
  const fillTweenRef = useRef(null);
  const transTlRef = useRef(null);
  const isMountedRef = useRef(true);

  function setZOrder(fromIdx, toIdx) {
    directLayersRef.current.forEach((layer, i) => {
      if (!layer) return;
      if (i === toIdx) {
        layer.style.zIndex = 2;
        gsap.to(layer, {
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: "power2.inOut",
        });
      } else if (i === fromIdx) {
        layer.style.zIndex = 1;
        gsap.to(layer, { opacity: 0, duration: 0.9, ease: "power2.inOut" });
      } else {
        layer.style.zIndex = 0;
        gsap.set(layer, { opacity: 0 });
      }
    });
  }

  function startFill(idx, onDone) {
    if (fillTweenRef.current) fillTweenRef.current.kill();

    fillsRef.current.forEach((f, i) => {
      if (!f) return;
      gsap.killTweensOf(f);
      f.style.width = i < idx ? "100%" : "0%";
    });

    const fill = fillsRef.current[idx];
    if (!fill) return;

    fillTweenRef.current = gsap.to(fill, {
      width: "100%",
      duration: SLIDE_DURATION,
      ease: "none",
      onComplete: () => {
        if (isMountedRef.current) onDone();
      },
    });
  }

  function doTransition(fromIdx, toIdx) {
    if (!isMountedRef.current) return;

    const texts = textsRef.current;

    setZOrder(fromIdx, toIdx);

    const nextVid = directVideosRef.current[toIdx];
    if (nextVid && typeof nextVid.play === "function" && nextVid.paused) {
      nextVid.play().catch(() => {});
    }

    if (transTlRef.current) transTlRef.current.kill();

    transTlRef.current = gsap
      .timeline({
        onComplete: () => {
          if (!isMountedRef.current) return;
          currentRef.current = toIdx;
          playSlide(toIdx);
        },
      })
      .to(texts[fromIdx], {
        clipPath: "inset(0% 0% 100% 0%)",
        y: -30,
        opacity: 0,
        duration: 0.45,
      })
      .to(
        texts[toIdx],
        {
          clipPath: "inset(0% 0% 0% 0%)",
          y: 0,
          opacity: 1,
          duration: 0.65,
        },
        "-=0.1",
      );
  }

  function playSlide(idx) {
    if (!isMountedRef.current) return;
    currentRef.current = idx;

    const currentVid = directVideosRef.current[idx];
    if (
      currentVid &&
      typeof currentVid.play === "function" &&
      currentVid.paused
    ) {
      currentVid.play().catch(() => {});
    }

    startFill(idx, () => doTransition(idx, (idx + 1) % SLIDES.length));
  }

  useEffect(() => {
    isMountedRef.current = true;

    const texts = textsRef.current;

    directLayersRef.current.forEach((layer, i) => {
      if (layer) {
        layer.style.zIndex = i === 0 ? "1" : "0";
        layer.style.opacity = i === 0 ? "1" : "0";
      }
    });

    gsap.set(texts, { clipPath: "inset(0% 0% 100% 0%)", y: 30, opacity: 0 });
    gsap.set(texts[0], { clipPath: "inset(0% 0% 0% 0%)", y: 0, opacity: 1 });

    const playAllVideos = () => {
      directVideosRef.current.forEach((vid) => {
        if (vid && typeof vid.play === "function") {
          vid.play().catch(() => {});
        }
      });
    };

    playAllVideos();

    window.addEventListener("touchstart", playAllVideos, { once: true });
    window.addEventListener("click", playAllVideos, { once: true });

    playSlide(0);

    return () => {
      isMountedRef.current = false;
      window.removeEventListener("touchstart", playAllVideos);
      window.removeEventListener("click", playAllVideos);
      if (fillTweenRef.current) fillTweenRef.current.kill();
      if (transTlRef.current) transTlRef.current.kill();
    };
  }, []);

  return (
    <div className="vb-root">
      <section className="vb-stage">
        <div className="vb-layers">
          <div className="vb-overlay" />

          {SLIDES.map((slide, i) => (
            <div
              key={`direct-vid-${i}`}
              className="vb-video-layer"
              ref={(el) => (directLayersRef.current[i] = el)}
              style={{
                zIndex: i === 0 ? 1 : 0,
                opacity: i === 0 ? 1 : 0,
              }}
            >
              <video
                ref={(el) => (directVideosRef.current[i] = el)}
                src={slide.video}
                autoPlay
                muted
                loop
                playsInline
                webkit-playsinline="true"
                preload="auto"
              />
            </div>
          ))}

          <div className="vb-texts">
            {SLIDES.map((slide, i) => (
              <div
                key={i}
                className="vb-txt"
                ref={(el) => (textsRef.current[i] = el)}
              >
                <h2>{slide.h2}</h2>
                <h3>{slide.h3}</h3>
              </div>
            ))}
          </div>

          <div className="vb-progress-bar">
            {SLIDES.map((_, i) => (
              <div className="vb-segment" key={i}>
                <div
                  className="vb-fill"
                  ref={(el) => (fillsRef.current[i] = el)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
