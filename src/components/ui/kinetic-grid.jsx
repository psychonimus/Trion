import React, { useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

const CELL_SIZE = 30;
const INFLUENCE_RADIUS = 160;
const MAX_WARP = 12;
const LERP_SPEED = 0.12;

export default function KineticGrid({
  children,
  className,
  globalColor = "default",
}) {
  const canvasRef = useRef(null);

  const mouseRef = useRef({ x: -9999, y: -9999 });
  const targetMouseRef = useRef({ x: -9999, y: -9999 });
  const ripplesRef = useRef([]);
  const rafRef = useRef(0);
  const sizeRef = useRef({ w: 0, h: 0 });

  const getWarpedPoint = useCallback(
    (gx, gy, col, row, mouse, ripples, cols, rows) => {
      const edgeMargin = 1.5;
      const colPin = Math.min(col / edgeMargin, (cols - 1 - col) / edgeMargin, 1);
      const rowPin = Math.min(row / edgeMargin, (rows - 1 - row) / edgeMargin, 1);
      const pinFactor = colPin * colPin * rowPin * rowPin;

      const dx = gx - mouse.x;
      const dy = gy - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      const proximity = Math.max(0, 1 - dist / INFLUENCE_RADIUS) * pinFactor;

      let rx = 0, ry = 0;
      for (let i = 0; i < ripples.length; i++) {
        const r = ripples[i];
        const rdx = gx - r.x;
        const rdy = gy - r.y;
        const rdist = Math.sqrt(rdx * rdx + rdy * rdy);
        const waveWidth = 40;
        const diff = rdist - r.radius;
        if (Math.abs(diff) < waveWidth) {
          const strength = (1 - Math.abs(diff) / waveWidth) * r.opacity * 10 * pinFactor;
          const angle = Math.atan2(rdy, rdx);
          const sign = diff < 0 ? -1 : 1;
          rx += Math.cos(angle) * strength * sign * -1;
          ry += Math.sin(angle) * strength * sign * -1;
        }
      }

      if (dist < INFLUENCE_RADIUS && dist > 0 && pinFactor > 0) {
        const t = dist / INFLUENCE_RADIUS;
        const eased = t < 0.01 ? 0 : (1 - t) * (1 - t) * Math.min(1, dist / 40);
        const warpAmt = eased * MAX_WARP * pinFactor;
        const angle = Math.atan2(dy, dx);
        return {
          pt: {
            x: gx - Math.cos(angle) * warpAmt + rx,
            y: gy - Math.sin(angle) * warpAmt + ry,
          },
          proximity,
        };
      }

      return { pt: { x: gx + rx, y: gy + ry }, proximity };
    },
    []
  );

  const draw = useCallback(
    (now) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const { w: W, h: H } = sizeRef.current;
      if (W === 0 || H === 0) return;
      const mouse = mouseRef.current;
      const ripples = ripplesRef.current;

      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#0a1128";
      ctx.fillRect(0, 0, W, H);

      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        const age = (now - r.born) / 1000;
        r.radius = Math.max(0, age * 350);
        r.opacity = Math.max(0, 1 - age * 1.4);
        if (r.opacity <= 0) ripples.splice(i, 1);
      }

      const cols = Math.max(2, Math.ceil(W / CELL_SIZE)) + 1;
      const rows = Math.max(2, Math.ceil(H / CELL_SIZE)) + 1;
      const cellW = W / (cols - 1);
      const cellH = H / (rows - 1);

      const pts = [];
      const prox = [];

      for (let row = 0; row < rows; row++) {
        pts[row] = [];
        prox[row] = [];
        for (let col = 0; col < cols; col++) {
          const { pt, proximity } = getWarpedPoint(
            col * cellW,
            row * cellH,
            col,
            row,
            mouse,
            ripples,
            cols,
            rows
          );
          pts[row][col] = pt;
          prox[row][col] = proximity;
        }
      }

      ctx.beginPath();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.07)";
      ctx.lineWidth = 1;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols - 1; col++) {
          if (prox[row][col] <= 0.05 && prox[row][col + 1] <= 0.05) {
            ctx.moveTo(pts[row][col].x, pts[row][col].y);
            ctx.lineTo(pts[row][col + 1].x, pts[row][col + 1].y);
          }
        }
      }
      for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows - 1; row++) {
          if (prox[row][col] <= 0.05 && prox[row + 1][col] <= 0.05) {
            ctx.moveTo(pts[row][col].x, pts[row][col].y);
            ctx.lineTo(pts[row + 1][col].x, pts[row + 1][col].y);
          }
        }
      }
      ctx.stroke();

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols - 1; col++) {
          const avg = (prox[row][col] + prox[row][col + 1]) / 2;
          if (avg > 0.05) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 142, 60, ${(avg * 0.7).toFixed(3)})`;
            ctx.lineWidth = 1 + avg * 0.6;
            ctx.moveTo(pts[row][col].x, pts[row][col].y);
            ctx.lineTo(pts[row][col + 1].x, pts[row][col + 1].y);
            ctx.stroke();
          }
        }
      }

      for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows - 1; row++) {
          const avg = (prox[row][col] + prox[row + 1][col]) / 2;
          if (avg > 0.05) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 142, 60, ${(avg * 0.7).toFixed(3)})`;
            ctx.lineWidth = 1 + avg * 0.6;
            ctx.moveTo(pts[row][col].x, pts[row][col].y);
            ctx.lineTo(pts[row + 1][col].x, pts[row + 1][col].y);
            ctx.stroke();
          }
        }
      }

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const p = pts[row][col];
          const pr = prox[row][col];
          if (pr > 0.15) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 1.6 + pr * 1.2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 155, 80, ${(pr * 0.8).toFixed(3)})`;
            ctx.fill();
          }
        }
      }

      for (let i = 0; i < ripples.length; i++) {
        const r = ripples[i];
        ctx.beginPath();
        ctx.arc(r.x, r.y, Math.max(0, r.radius), 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 142, 60, ${(r.opacity * 0.35).toFixed(3)})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }
    },
    [getWarpedPoint]
  );

  const animate = useCallback(
    (now) => {
      const m = mouseRef.current;
      const t = targetMouseRef.current;

      m.x += (t.x - m.x) * LERP_SPEED;
      m.y += (t.y - m.y) * LERP_SPEED;

      draw(now);
      rafRef.current = requestAnimationFrame(animate);
    },
    [draw]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const setSize = () => {
      const parent = canvas.parentElement;
      const w = parent ? parent.clientWidth : window.innerWidth;
      const h = parent ? parent.clientHeight : window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      sizeRef.current = { w, h };
    };

    setSize();
    window.addEventListener("resize", setSize);

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const onMouseLeave = () => {
      targetMouseRef.current = { x: -9999, y: -9999 };
    };

    const onClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      ripplesRef.current.push({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        radius: 0,
        opacity: 1,
        born: performance.now(),
      });
    };

    const parent = canvas.parentElement || window;
    parent.addEventListener("mousemove", onMouseMove);
    parent.addEventListener("mouseleave", onMouseLeave);
    parent.addEventListener("click", onClick);

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", setSize);
      parent.removeEventListener("mousemove", onMouseMove);
      parent.removeEventListener("mouseleave", onMouseLeave);
      parent.removeEventListener("click", onClick);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [animate]);

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      />
      <div className="relative z-10 w-full h-full pointer-events-auto">
        {children}
      </div>
    </div>
  );
}
