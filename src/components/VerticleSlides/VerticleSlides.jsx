import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./VerticleSlides.css";

/* ─── tunables ─── */
const SLIDE_DURATION = 5;        // seconds each slide is DISPLAYED (progress bar duration)
const BLIND_COUNT    = 12;
const BLIND_BASE_DUR = 0.9;      // base duration for one blind strip
const BLIND_STAGGER  = 0.02;     // stagger between strips
// Total time for all blinds to fully open: base + (count-1)*stagger ≈ 1.12 s
const BLIND_TOTAL    = BLIND_BASE_DUR + (BLIND_COUNT - 1) * BLIND_STAGGER;

const svgNS = "http://www.w3.org/2000/svg";

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
  const layersRef     = useRef([]);   // svg elements
  const textsRef      = useRef([]);   // .vb-txt elements
  const fillsRef      = useRef([]);   // .vb-fill elements
  const blindsSetsRef = useRef([]);   // pre-built blinds per layer
  const videosRef     = useRef([]);   // video elements
  const currentRef    = useRef(0);
  const fillTweenRef  = useRef(null); // active progress-bar tween
  const transTlRef    = useRef(null); // active transition timeline
  const isMountedRef  = useRef(true);
  const [vbDims, setVbDims] = useState({ w: 177.78, h: 100 });

  /* ── helpers ── */
  function createBlinds(g, isFirstLayer, vbWidth) {
    g.innerHTML = "";
    const w = vbWidth / BLIND_COUNT;
    const blinds = [];
    let currentX = 0;

    for (let i = 0; i < BLIND_COUNT; i++) {
      const centerX   = currentX + w / 2;
      const rectLeft  = document.createElementNS(svgNS, "rect");
      const rectRight = document.createElementNS(svgNS, "rect");

      [rectLeft, rectRight].forEach((r) => {
        r.setAttribute("y",      "0");
        r.setAttribute("height", "100");
        r.setAttribute("width",  isFirstLayer ? w / 2 + 0.1 : "0");
        r.setAttribute("fill",   "white");
        r.setAttribute("shape-rendering", "crispEdges");
      });

      if (isFirstLayer) {
        rectLeft.setAttribute("x",  centerX - w / 2);
        rectRight.setAttribute("x", centerX);
      } else {
        rectLeft.setAttribute("x",  centerX);
        rectRight.setAttribute("x", centerX);
      }

      g.appendChild(rectLeft);
      g.appendChild(rectRight);
      blinds.push({ left: rectLeft, right: rectRight, x: centerX, w: w / 2 });
      currentX += w;
    }
    return blinds;
  }

  function openBlinds(blinds) {
    return gsap.to(
      blinds.flatMap((b) => [b.left, b.right]),
      {
        attr: {
          x:     (i) => { const b = blinds[Math.floor(i / 2)]; return i % 2 === 0 ? b.x - b.w : b.x; },
          width: (i) => { const b = blinds[Math.floor(i / 2)]; return b.w + 0.05; },
        },
        duration: BLIND_BASE_DUR,
        ease: "power2.inOut",
        stagger: { each: BLIND_STAGGER, from: "start" },
      }
    );
  }

  function closeBlinds(blinds) {
    gsap.set(
      blinds.flatMap((b) => [b.left, b.right]),
      {
        attr: {
          x:     (i) => { const b = blinds[Math.floor(i / 2)]; return b.x; },
          width: "0",
        },
      }
    );
  }

  /** Bring the incoming layer on top; keep the outgoing layer above rest. */
  function setZOrder(fromIdx, toIdx) {
    layersRef.current.forEach((l, i) => {
      if (!l) return;
      if (i === toIdx)   l.style.zIndex = 2;
      else if (i === fromIdx) l.style.zIndex = 1;
      else               l.style.zIndex = 0;
    });
  }

  /**
   * Fill the progress bar for `idx` over SLIDE_DURATION seconds.
   * Previous bars → 100 %, future bars → 0 %.
   * Calls `onDone` exactly when the fill completes.
   */
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
      onComplete: () => { if (isMountedRef.current) onDone(); },
    });
  }

  /**
   * Run the blind-open transition from `fromIdx` → `toIdx`.
   *
   * Precise timeline (t = 0 is transition start):
   *   t = 0.00  old text exits              (0.5 s)
   *   t = 0.30  blinds start opening        (-=0.2 overlap with text exit)
   *   t = 1.42  blinds fully open           (0.30 + BLIND_TOTAL ≈ 1.42 s)
   *   t = 1.47  new text starts entering    (+=0.05 buffer after blinds done)
   *   t = 2.17  new text fully visible
   *
   * After the timeline completes, `playSlide(toIdx)` is called → infinite loop.
   */
  function doTransition(fromIdx, toIdx) {
    if (!isMountedRef.current) return;

    const texts  = textsRef.current;
    const blinds = blindsSetsRef.current;

    // Ensure the incoming layer is rendered on top so its blinds are visible
    setZOrder(fromIdx, toIdx);
    // Reset the incoming layer's blinds to fully-closed before opening them
    closeBlinds(blinds[toIdx]);

    if (transTlRef.current) transTlRef.current.kill();

    transTlRef.current = gsap.timeline({
      onComplete: () => {
        if (!isMountedRef.current) return;
        // Settle z-order: new slide stays at 1, old slide drops to 0
        layersRef.current.forEach((l, i) => {
          if (l) l.style.zIndex = i === toIdx ? 1 : 0;
        });
        currentRef.current = toIdx;
        playSlide(toIdx);
      },
    })
      // 1. Exit old text
      .to(texts[fromIdx], {
        clipPath: "inset(0% 0% 100% 0%)",
        y: -40,
        opacity: 0,
        duration: 0.5,
      })
      // 2. Open blinds — starts 0.2 s before text exit finishes (overlap)
      .add(openBlinds(blinds[toIdx]), "-=0.2")
      // 3. New text enters — "+=0.05" is relative to timeline end after .add(),
      //    which equals blinds_start(0.30) + BLIND_TOTAL(1.12) = 1.42 s.
      //    So text starts at 1.47 s, exactly after blinds are fully open.
      .to(texts[toIdx], {
        clipPath: "inset(0% 0% 0% 0%)",
        y: 0,
        opacity: 1,
        duration: 0.7,
      }, "+=0.05");
  }

  /**
   * Master loop entry point.
   * Shows slide `idx`, fills its progress bar, then triggers the transition.
   * Transition's onComplete calls playSlide(next) → perfect infinite loop, no drift.
   */
  function playSlide(idx) {
    if (!isMountedRef.current) return;
    currentRef.current = idx;
    startFill(idx, () => doTransition(idx, (idx + 1) % SLIDES.length));
  }

  function rebuildBlinds() {
    const width    = window.innerWidth;
    const height   = window.innerHeight;
    const vbWidth  = (width / height) * 100;
    const vbHeight = 100;

    setVbDims({ w: vbWidth, h: vbHeight });

    layersRef.current.forEach((svg, i) => {
      if (!svg) return;
      svg.setAttribute("viewBox", `0 0 ${vbWidth} ${vbHeight}`);

      const maskRect = svg.querySelector("mask rect");
      if (maskRect) {
        maskRect.setAttribute("width",  vbWidth);
        maskRect.setAttribute("height", vbHeight);
      }

      const fo = svg.querySelector("foreignObject");
      if (fo) {
        fo.setAttribute("width",  vbWidth);
        fo.setAttribute("height", vbHeight);
      }

      const g = svg.querySelector("g[id]");
      if (g) {
        // Slide 0 starts open (visible); all others start closed (hidden)
        blindsSetsRef.current[i] = createBlinds(g, i === 0, vbWidth);
      }
    });
  }

  /* ── lifecycle ── */
  useEffect(() => {
    isMountedRef.current = true;
    rebuildBlinds();

    const texts  = textsRef.current;
    const layers = layersRef.current;

    // Slide 0 on top; all others behind
    layers.forEach((l, i) => { if (l) l.style.zIndex = i === 0 ? 1 : 0; });

    // Hide all texts, then reveal only slide 0
    gsap.set(texts, { clipPath: "inset(0% 0% 100% 0%)", y: 40, opacity: 0 });
    gsap.set(texts[0], { clipPath: "inset(0% 0% 0% 0%)", y: 0, opacity: 1 });

    // Ensure all videos start playing smoothly
    videosRef.current.forEach((vid) => {
      if (vid) {
        vid.play().catch(() => {});
      }
    });

    // Kick off the perfectly-synced infinite loop
    playSlide(0);

    const onResize = () => {
      clearTimeout(window.__vbResizeTimer);
      window.__vbResizeTimer = setTimeout(rebuildBlinds, 250);
    };
    window.addEventListener("resize", onResize);

    return () => {
      isMountedRef.current = false;
      window.removeEventListener("resize", onResize);
      if (fillTweenRef.current) fillTweenRef.current.kill();
      if (transTlRef.current)   transTlRef.current.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ── render ── */
  return (
    <div className="vb-root">
      <section className="vb-stage">
        <div className="vb-layers">
          <div className="vb-overlay" />

          {/* SVG layers */}
          {SLIDES.map((slide, i) => (
            <svg
              key={i}
              className="vb-layer"
              viewBox={`0 0 ${vbDims.w} ${vbDims.h}`}
              preserveAspectRatio="none"
              ref={(el) => (layersRef.current[i] = el)}
            >
              <defs>
                <mask id={`vb-mask${i + 1}`} maskUnits="userSpaceOnUse">
                  <rect x="0" y="0" width={vbDims.w} height={vbDims.h} fill="black" />
                  <g id={`vb-blinds${i + 1}`} />
                </mask>
              </defs>
              <foreignObject
                x="0"
                y="0"
                width={vbDims.w}
                height={vbDims.h}
                mask={`url(#vb-mask${i + 1})`}
              >
                <video
                  ref={(el) => (videosRef.current[i] = el)}
                  src={slide.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "brightness(0.8)",
                  }}
                />
              </foreignObject>
            </svg>
          ))}

          {/* Progress bar */}
          <div className="vb-progress-bar">
            {SLIDES.map((_, i) => (
              <div className="vb-segment" key={i}>
                <div className="vb-fill" ref={(el) => (fillsRef.current[i] = el)} />
              </div>
            ))}
          </div>

          {/* Texts */}
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

        </div>
      </section>
    </div>
  );
}