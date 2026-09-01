import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });

    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    window.addEventListener("resize", updateHeight);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-[#000435] font-sans px-3 sm:px-6 md:px-10"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl 2xl:max-w-[1580px] mx-auto pb-16 sm:pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-32 lg:pt-40 md:gap-8 lg:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-28 sm:top-36 md:top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-8 w-8 sm:h-10 sm:w-10 absolute left-1 sm:left-2 md:left-3 rounded-full bg-[#000435] flex items-center justify-center border border-white/10 shadow-lg">
                <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-[#f55d1b]/20 border border-[#f55d1b] flex items-center justify-center">
                  <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#f55d1b]" />
                </div>
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold font-primary text-neutral-500">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-12 sm:pl-16 pr-2 sm:pr-4 md:pl-4 w-full min-w-0">
              <h3 className="md:hidden inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#f55d1b]/10 border border-[#f55d1b]/30 text-xs font-mono font-bold text-[#f55d1b] uppercase tracking-widest mb-3">
                CHAPTER {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{ height: height + "px" }}
          className="absolute left-5 sm:left-7 md:left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#f55d1b] via-[#f55d1b] to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
