"use client";

import { useRef, useEffect } from "react";
import { useReducedMotion, motion } from "framer-motion";

// ── Orthographic projection ────────────────────────────────────────────────
// Centre on India so it faces forward
const C_LAT = 18 * Math.PI / 180;
const C_LON = 76 * Math.PI / 180;

function project(latDeg: number, lonDeg: number, R: number, cx: number, cy: number) {
  const φ = latDeg * Math.PI / 180;
  const λ = lonDeg * Math.PI / 180;
  const cosC =
    Math.sin(C_LAT) * Math.sin(φ) +
    Math.cos(C_LAT) * Math.cos(φ) * Math.cos(λ - C_LON);
  if (cosC < 0) return null; // behind the globe
  return {
    x: cx + R * Math.cos(φ) * Math.sin(λ - C_LON),
    y: cy - R * (Math.cos(C_LAT) * Math.sin(φ) - Math.sin(C_LAT) * Math.cos(φ) * Math.cos(λ - C_LON)),
    depth: cosC, // 0 = edge, 1 = centre
  };
}

// ── Nodes ─────────────────────────────────────────────────────────────────
const NODES = [
  { lat: 28.6,   lon:  77.2,  primary: true  }, // Delhi
  { lat: 19.1,   lon:  72.9,  primary: true  }, // Mumbai
  { lat: 12.9,   lon:  77.6,  primary: true  }, // Bangalore
  { lat: 13.1,   lon:  80.3,  primary: false }, // Chennai
  { lat: 22.6,   lon:  88.4,  primary: false }, // Kolkata
  { lat:  1.35,  lon: 103.8,  primary: false }, // Singapore
  { lat: 25.2,   lon:  55.3,  primary: false }, // Dubai
  { lat: 51.5,   lon:  -0.1,  primary: false }, // London
  { lat: 50.1,   lon:   8.7,  primary: false }, // Frankfurt
  { lat: 35.7,   lon: 139.7,  primary: false }, // Tokyo
  { lat: -33.9,  lon: 151.2,  primary: false }, // Sydney
  { lat: 55.8,   lon:  37.6,  primary: false }, // Moscow
];

// ── Signal routes (node index pairs) ──────────────────────────────────────
const ROUTES = [
  [0, 6],  // Delhi → Dubai
  [6, 7],  // Dubai → London
  [1, 5],  // Mumbai → Singapore
  [5, 9],  // Singapore → Tokyo
  [2, 5],  // Bangalore → Singapore
  [7, 8],  // London → Frankfurt
  [4, 5],  // Kolkata → Singapore
  [0, 8],  // Delhi → Frankfurt
  [1, 7],  // Mumbai → London
  [3, 5],  // Chennai → Singapore
  [11, 8], // Moscow → Frankfurt
  [9, 10], // Tokyo → Sydney
];

// ── Bezier arc helpers ────────────────────────────────────────────────────
function arcCtrl(ax: number, ay: number, bx: number, by: number, cx: number, cy: number) {
  const mx = (ax + bx) / 2, my = (ay + by) / 2;
  const dx = mx - cx, dy = my - cy;
  const d = Math.hypot(dx, dy) || 1;
  const bow = Math.hypot(ax - bx, ay - by) * 0.22;
  return { cx: mx + (dx / d) * bow, cy: my + (dy / d) * bow };
}

function bezier(ax: number, ay: number, qx: number, qy: number, bx: number, by: number, t: number) {
  const u = 1 - t;
  return { x: u * u * ax + 2 * u * t * qx + t * t * bx, y: u * u * ay + 2 * u * t * qy + t * t * by };
}

// ── Signals ────────────────────────────────────────────────────────────────
interface Signal { route: number; t: number; speed: number; }

function fresh(exclude = -1): Signal {
  let r = Math.floor(Math.random() * ROUTES.length);
  if (r === exclude) r = (r + 1) % ROUTES.length;
  return { route: r, t: Math.random() * 0.6, speed: 0.0012 + Math.random() * 0.0018 };
}

// ── Component ──────────────────────────────────────────────────────────────
export function NetworkAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    if (shouldReduce) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0, H = 0, dpr = 1, R = 0, cx = 0, cy = 0;

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      W = canvas.offsetWidth; H = canvas.offsetHeight;
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      R = Math.min(W, H) * 0.44;
      cx = W / 2; cy = H / 2;
    };
    resize();
    window.addEventListener("resize", resize);

    const signals: Signal[] = Array.from({ length: 7 }, (_, i) => fresh(i));
    let raf: number;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // ── Globe fill ──────────────────────────────────────────────────
      const bg = ctx.createRadialGradient(cx - R * 0.2, cy - R * 0.15, 0, cx, cy, R);
      bg.addColorStop(0, "rgba(8,28,72,0.55)");
      bg.addColorStop(1, "rgba(2,10,32,0.65)");
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = bg;
      ctx.fill();

      // ── Grid lines ─────────────────────────────────────────────────
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = "rgba(255,255,255,0.055)";

      // Latitude rings
      for (const lat of [-60, -30, 0, 30, 60]) {
        ctx.beginPath();
        let started = false;
        for (let lon = -180; lon <= 180; lon += 3) {
          const p = project(lat, lon, R, cx, cy);
          if (!p) { started = false; continue; }
          started ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y);
          started = true;
        }
        ctx.stroke();
      }

      // Longitude lines
      for (let lon = -180; lon < 180; lon += 30) {
        ctx.beginPath();
        let started = false;
        for (let lat = -90; lat <= 90; lat += 3) {
          const p = project(lat, lon, R, cx, cy);
          if (!p) { started = false; continue; }
          started ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y);
          started = true;
        }
        ctx.stroke();
      }

      // ── Globe rim ──────────────────────────────────────────────────
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(255,255,255,0.12)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // ── Pre-project all nodes ──────────────────────────────────────
      const pts = NODES.map(n => project(n.lat, n.lon, R, cx, cy));

      // ── Signal arcs ────────────────────────────────────────────────
      signals.forEach((sig) => {
        sig.t += sig.speed;
        if (sig.t >= 1) Object.assign(sig, fresh(sig.route));

        const [ai, bi] = ROUTES[sig.route];
        const pa = pts[ai], pb = pts[bi];
        if (!pa || !pb) return;

        const ctrl = arcCtrl(pa.x, pa.y, pb.x, pb.y, cx, cy);

        // Faint full arc
        ctx.beginPath();
        ctx.moveTo(pa.x, pa.y);
        ctx.quadraticCurveTo(ctrl.cx, ctrl.cy, pb.x, pb.y);
        ctx.strokeStyle = "rgba(255,255,255,0.07)";
        ctx.lineWidth = 0.75;
        ctx.stroke();

        // Glowing partial arc (trail up to t)
        const steps = 40;
        const tEnd = sig.t;
        const tStart = Math.max(0, tEnd - 0.18);
        ctx.beginPath();
        for (let i = 0; i <= steps; i++) {
          const tt = tStart + (tEnd - tStart) * (i / steps);
          const p = bezier(pa.x, pa.y, ctrl.cx, ctrl.cy, pb.x, pb.y, tt);
          i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y);
        }
        const gGrad = ctx.createLinearGradient(
          bezier(pa.x, pa.y, ctrl.cx, ctrl.cy, pb.x, pb.y, tStart).x,
          bezier(pa.x, pa.y, ctrl.cx, ctrl.cy, pb.x, pb.y, tStart).y,
          bezier(pa.x, pa.y, ctrl.cx, ctrl.cy, pb.x, pb.y, tEnd).x,
          bezier(pa.x, pa.y, ctrl.cx, ctrl.cy, pb.x, pb.y, tEnd).y,
        );
        gGrad.addColorStop(0, "rgba(255,255,255,0)");
        gGrad.addColorStop(1, "rgba(255,255,255,0.80)");
        ctx.strokeStyle = gGrad;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Signal dot
        const dot = bezier(pa.x, pa.y, ctrl.cx, ctrl.cy, pb.x, pb.y, tEnd);
        const dg = ctx.createRadialGradient(dot.x, dot.y, 0, dot.x, dot.y, 6);
        dg.addColorStop(0, "rgba(255,255,255,0.5)");
        dg.addColorStop(1, "rgba(255,255,255,0)");
        ctx.beginPath(); ctx.arc(dot.x, dot.y, 6, 0, Math.PI * 2);
        ctx.fillStyle = dg; ctx.fill();
        ctx.beginPath(); ctx.arc(dot.x, dot.y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.95)"; ctx.fill();
      });

      // ── Nodes ──────────────────────────────────────────────────────
      NODES.forEach((node, i) => {
        const p = pts[i];
        if (!p) return;
        const r = node.primary ? 3.5 : 2.5;

        // Glow
        const ng = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 4);
        ng.addColorStop(0, `rgba(255,255,255,${node.primary ? 0.18 : 0.10})`);
        ng.addColorStop(1, "rgba(255,255,255,0)");
        ctx.beginPath(); ctx.arc(p.x, p.y, r * 4, 0, Math.PI * 2);
        ctx.fillStyle = ng; ctx.fill();

        // Dot
        ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${0.70 + p.depth * 0.28})`;
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, [shouldReduce]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.5 }}
      className="relative w-full h-full flex items-center justify-center"
    >
      <canvas ref={canvasRef} className="w-full h-full" aria-hidden />
    </motion.div>
  );
}
