"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { 
  ArrowRight, 
  Cpu, 
  ShieldCheck, 
  Globe2,
  Cloud,
  Network,
  Code2,
  ActivitySquare,
  Layers,
  Server,
  Zap,
  Split,
  Router,
  Lock,
  Wifi
} from "lucide-react";
import { TECHNOLOGY_CONTENT } from "@/lib/technology-content";

interface TechClientProps {
  techId: string;
}

const FADE_UP_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

function renderVisual(techId: string, shouldReduceMotion: boolean | null) {
  switch (techId) {
    case "scaleaon-sd-wan":
      return (
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full">
          <div className="relative h-40 w-40 flex items-center justify-center mb-8">
            <motion.div className="absolute inset-0 border border-[#1A9AE6]/30 rounded-full" animate={shouldReduceMotion ? {} : { scale: [1, 1.5], opacity: [1, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} />
            <motion.div className="absolute inset-0 border border-[#1A9AE6]/30 rounded-full" animate={shouldReduceMotion ? {} : { scale: [1, 1.5], opacity: [1, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.5 }} />
            <div className="h-20 w-20 bg-gradient-to-br from-[#0078D4] to-[#005A9E] rounded-2xl shadow-xl shadow-[#0078D4]/20 flex items-center justify-center z-10 ring-1 ring-white/20">
              <Network className="h-10 w-10 text-white" />
            </div>
            
            <motion.div className="absolute -top-4 -left-4 h-12 w-12 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 flex items-center justify-center shadow-lg" animate={shouldReduceMotion ? {} : { y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
              <Server className="h-6 w-6 text-[#1A9AE6]" />
            </motion.div>
            <motion.div className="absolute -bottom-4 -right-4 h-12 w-12 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 flex items-center justify-center shadow-lg" animate={shouldReduceMotion ? {} : { y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
              <Cloud className="h-6 w-6 text-[#1A9AE6]" />
            </motion.div>
          </div>
        </div>
      );

    case "sd-net-converged-branch-networking":
      return (
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full">
          <div className="w-full max-w-sm flex flex-col gap-6 mb-8 items-center">
             <div className="h-16 w-16 bg-gradient-to-br from-[#0078D4] to-[#005A9E] rounded-2xl shadow-xl flex items-center justify-center z-20 ring-1 ring-white/20">
               <Router className="h-8 w-8 text-white" />
             </div>
             
             <div className="flex w-full justify-between items-center relative">
               <motion.div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 h-[1px] w-full bg-gradient-to-r from-transparent via-[#1A9AE6]/50 to-transparent" />
               <motion.div className="h-1 w-20 bg-white/50 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 shadow-[0_0_8px_2px_#1A9AE6]" animate={shouldReduceMotion ? {} : { left: ["20%", "80%", "20%"] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
               
               <div className="h-12 w-12 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 flex items-center justify-center z-10"><Lock className="h-5 w-5 text-emerald-400" /></div>
               <div className="h-12 w-12 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 flex items-center justify-center z-10"><Wifi className="h-5 w-5 text-[#1A9AE6]" /></div>
               <div className="h-12 w-12 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 flex items-center justify-center z-10"><Globe2 className="h-5 w-5 text-purple-400" /></div>
             </div>
          </div>
        </div>
      );

    case "built-to-scale":
      return (
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full">
          <div className="relative flex items-end justify-center gap-3 mb-10 h-40 w-64 bg-[#0A1015]/90 rounded-2xl border border-white/10 shadow-2xl p-6 overflow-hidden">
             <motion.div className="w-8 bg-[#1A9AE6]/60 rounded-t-lg border-t border-x border-[#1A9AE6]" animate={shouldReduceMotion ? {} : { height: ["40%", "70%", "40%"] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
             <motion.div className="w-8 bg-[#0078D4]/80 rounded-t-lg border-t border-x border-[#0078D4]" animate={shouldReduceMotion ? {} : { height: ["60%", "90%", "60%"] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5, ease: "easeInOut" }} />
             <motion.div className="w-8 bg-emerald-400/60 rounded-t-lg border-t border-x border-emerald-400" animate={shouldReduceMotion ? {} : { height: ["80%", "100%", "80%"] }} transition={{ duration: 3, repeat: Infinity, delay: 1, ease: "easeInOut" }} />
             <motion.div className="w-8 bg-[#1A9AE6]/80 rounded-t-lg border-t border-x border-[#1A9AE6]" animate={shouldReduceMotion ? {} : { height: ["50%", "80%", "50%"] }} transition={{ duration: 3, repeat: Infinity, delay: 1.5, ease: "easeInOut" }} />
             <div className="absolute bottom-6 left-0 right-0 h-[1px] bg-white/20" />
          </div>
        </div>
      );

    case "built-to-be-simple":
      return (
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full">
          <div className="relative mb-10 flex items-center justify-center bg-[#0A1015]/90 rounded-2xl border border-white/10 shadow-2xl p-8 w-72">
            <motion.div className="flex items-center gap-2" animate={shouldReduceMotion ? {} : { scale: [0.95, 1.05, 0.95] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
              <div className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center bg-white/10 shadow-inner"><Split className="h-4 w-4 text-white/70" /></div>
              <motion.div className="h-[1px] w-6 bg-gradient-to-r from-transparent to-[#1A9AE6]" />
              <div className="h-16 w-16 bg-[#003F72] rounded-full shadow-[0_0_20px_rgba(26,154,230,0.3)] flex items-center justify-center z-10 ring-1 ring-white/20">
                <ActivitySquare className="h-6 w-6 text-white" />
              </div>
              <motion.div className="h-[1px] w-6 bg-gradient-to-r from-[#1A9AE6] to-transparent" />
              <div className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center bg-white/10 shadow-inner"><Globe2 className="h-4 w-4 text-white/70" /></div>
            </motion.div>
          </div>
        </div>
      );

    case "built-to-be-programmable":
      return (
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full">
          <div className="mb-8 w-64 h-32 bg-[#0A1015]/90 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col">
             <div className="h-6 w-full bg-black/60 flex items-center px-3 gap-1.5 border-b border-white/5">
               <div className="h-2 w-2 rounded-full bg-red-500/80" />
               <div className="h-2 w-2 rounded-full bg-amber-500/80" />
               <div className="h-2 w-2 rounded-full bg-green-500/80" />
             </div>
             <div className="p-4 flex-1 flex flex-col gap-2 overflow-hidden justify-center">
               <motion.div className="h-2 w-3/4 bg-emerald-400/20 rounded-full overflow-hidden relative">
                 <motion.div className="absolute top-0 bottom-0 left-0 bg-emerald-400" animate={shouldReduceMotion ? {} : { width: ["0%", "100%", "0%"] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
               </motion.div>
               <motion.div className="h-2 w-1/2 bg-[#1A9AE6]/20 rounded-full overflow-hidden relative">
                 <motion.div className="absolute top-0 bottom-0 left-0 bg-[#1A9AE6]" animate={shouldReduceMotion ? {} : { width: ["0%", "100%", "0%"] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }} />
               </motion.div>
               <motion.div className="h-2 w-5/6 bg-purple-400/20 rounded-full overflow-hidden relative">
                 <motion.div className="absolute top-0 bottom-0 left-0 bg-purple-400" animate={shouldReduceMotion ? {} : { width: ["0%", "100%", "0%"] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }} />
               </motion.div>
             </div>
          </div>
        </div>
      );

    case "our-approach-to-hybrid-wan":
      return (
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full">
          <div className="flex items-center justify-center gap-4 w-full mb-8">
             <div className="h-16 w-16 bg-[#0A1015]/80 backdrop-blur-md rounded-xl border border-white/10 shadow-lg flex flex-col items-center justify-center flex-none">
               <span className="text-xs font-bold text-white mb-1">HQ</span>
               <Server className="h-5 w-5 text-[#1A9AE6]" />
             </div>
             <div className="flex flex-col gap-4 flex-1 h-20 justify-center">
                <div className="w-full h-2 rounded-full bg-[#0A1015]/60 overflow-hidden border border-white/5 relative shadow-inner">
                   <motion.div className="absolute top-0 bottom-0 bg-[#0078D4]" animate={shouldReduceMotion ? {} : { left: ["-20%", "120%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} style={{ width: "30%" }} />
                </div>
                <div className="w-full h-2 rounded-full bg-[#0A1015]/60 overflow-hidden border border-white/5 relative shadow-inner">
                   <motion.div className="absolute top-0 bottom-0 bg-emerald-400" animate={shouldReduceMotion ? {} : { left: ["-20%", "120%"] }} transition={{ duration: 1.2, repeat: Infinity, ease: "linear", delay: 0.5 }} style={{ width: "40%" }} />
                </div>
             </div>
             <div className="h-16 w-16 bg-[#0A1015]/80 backdrop-blur-md rounded-xl border border-white/10 shadow-lg flex flex-col items-center justify-center flex-none">
               <span className="text-xs font-bold text-white mb-1">Branch</span>
               <Network className="h-5 w-5 text-[#1A9AE6]" />
             </div>
          </div>
        </div>
      );

    case "quality-of-experience":
      return (
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full">
          <div className="relative mb-10 w-64 h-32 flex items-center justify-center bg-[#0A1015]/90 rounded-2xl border border-white/10 shadow-2xl p-6">
             <svg viewBox="0 0 200 100" className="w-full h-full overflow-visible">
               <motion.path 
                 d="M 0,50 L 20,40 L 40,60 L 60,30 L 80,70 L 100,20 L 120,50 L 140,40 L 160,50 L 180,45 L 200,50" 
                 fill="none" stroke="#FF4D4D" strokeWidth="2" strokeDasharray="4 4" opacity="0.3"
               />
               <motion.path 
                 d="M 0,50 C 50,50 100,50 200,50" 
                 fill="none" stroke="#10B981" strokeWidth="4" 
                 initial={{ pathLength: 0 }}
                 animate={shouldReduceMotion ? {} : { pathLength: 1 }}
                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
               />
               <circle cx="200" cy="50" r="4" fill="#10B981" />
             </svg>
          </div>
        </div>
      );

    case "our-approach-to-security":
      return (
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full min-h-[300px]">
          {/* Central Secure Core */}
          <div className="relative flex items-center justify-center w-64 h-64">
            {/* Outer Perimeter (Firewall / Edge) */}
            <motion.div 
              className="absolute inset-0 rounded-full border border-[#0078D4]/20"
              style={{ borderTopColor: "rgba(0, 120, 212, 0.6)" }}
              animate={shouldReduceMotion ? {} : { rotate: 360 }} 
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }} 
            />
            
            {/* Middle Layer (Anomaly Detection / AI) */}
            <motion.div 
              className="absolute inset-4 rounded-full border border-emerald-500/20 border-dashed"
              animate={shouldReduceMotion ? {} : { rotate: -360 }} 
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }} 
            />
            
            {/* Inner Layer (Zero Trust Isolation) */}
            <motion.div 
              className="absolute inset-10 rounded-full border border-[#1A9AE6]/30 bg-[#0A1015]/80 backdrop-blur-md flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.1)]"
              animate={shouldReduceMotion ? {} : { scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="h-20 w-20 bg-gradient-to-br from-[#003F72] to-[#0A1015] rounded-full flex items-center justify-center z-10 ring-1 ring-emerald-400/50 shadow-[inset_0_0_20px_rgba(16,185,129,0.3)]">
                <ShieldCheck className="h-8 w-8 text-emerald-400" />
              </div>
            </motion.div>

            {/* Granular Threat / Safe Packet Simulation (1s and 0s) */}
            {/* Safe Data Stream 1 */}
            <motion.div 
              className="absolute top-[40%] left-0 text-[10px] font-mono text-emerald-400 font-bold"
              animate={shouldReduceMotion ? {} : { 
                x: [-100, 80],
                opacity: [0, 1, 1, 0]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0 }}
            >
              1
            </motion.div>
            
            {/* Safe Data Stream 2 */}
            <motion.div 
              className="absolute top-[60%] left-0 text-[10px] font-mono text-emerald-400 font-bold"
              animate={shouldReduceMotion ? {} : { 
                x: [-120, 90],
                opacity: [0, 1, 1, 0]
              }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "linear", delay: 0.5 }}
            >
              0
            </motion.div>
            
            {/* Threat Packet 1 being blocked at outer perimeter */}
            <motion.div 
              className="absolute top-1/4 right-0 text-[12px] font-mono text-red-500 font-bold"
              animate={shouldReduceMotion ? {} : { 
                x: [100, 35],
                y: [0, 5],
                scale: [1, 1, 1.5],
                opacity: [0, 1, 0],
                rotate: [0, 45]
              }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeIn", delay: 0 }}
            >
              1
            </motion.div>
            
            {/* Threat Packet 2 being blocked at middle layer */}
            <motion.div 
              className="absolute bottom-1/4 left-0 text-[12px] font-mono text-amber-500 font-bold"
              animate={shouldReduceMotion ? {} : { 
                x: [-100, -35],
                y: [0, -5],
                scale: [1, 1, 1.5],
                opacity: [0, 1, 0],
                rotate: [0, -45]
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeIn", delay: 0.8 }}
            >
              0
            </motion.div>
            
            {/* Additional granular stream */}
            <motion.div 
              className="absolute top-1/3 left-0 text-[8px] font-mono text-emerald-400/80 font-bold"
              animate={shouldReduceMotion ? {} : { 
                x: [-80, 70],
                opacity: [0, 0.8, 0]
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 1.2 }}
            >
              101
            </motion.div>

            {/* Layer Labels */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <span className="text-xs uppercase tracking-widest text-white font-semibold bg-[#0A1015]/90 px-3 py-1 rounded-md border border-white/10 backdrop-blur-md shadow-lg">Perimeter</span>
              <div className="h-6 w-[1px] bg-gradient-to-b from-white/20 to-transparent" />
            </div>
            
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <div className="h-6 w-[1px] bg-gradient-to-t from-emerald-400/30 to-transparent" />
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold bg-[#0A1015]/90 px-3 py-1 rounded-md border border-emerald-400/20 backdrop-blur-md shadow-lg">Zero Trust Core</span>
            </div>
          </div>
        </div>
      );

    case "sd-wan":
      return (
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full max-w-sm mx-auto">
          {/* Control Plane */}
          <motion.div 
            className="relative z-20 flex flex-col items-center justify-center w-48 rounded-2xl border border-white/10 bg-[#0A1015]/90 backdrop-blur-md shadow-2xl p-4 gap-3"
            animate={shouldReduceMotion ? {} : { y: [-5, 5, -5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-xs uppercase tracking-widest text-white font-bold whitespace-nowrap bg-white/5 px-4 py-1.5 rounded-full border border-white/10">Control Plane</span>
            <div className="h-10 w-10 rounded-xl bg-[#003F72] shadow-[0_0_20px_rgba(26,154,230,0.3)] flex items-center justify-center ring-1 ring-white/30">
              <Cloud className="h-5 w-5 text-white" />
            </div>
          </motion.div>

          {/* Dynamic Data Streams */}
          <div className="relative flex justify-center w-32 h-16 my-3 z-10">
            {/* Left Stream */}
            <div className="w-[1px] h-full bg-gradient-to-b from-[#1A9AE6]/60 to-[#0078D4]/60 mx-auto relative overflow-hidden">
              <motion.div className="absolute top-0 left-0 w-full h-1/2 bg-white shadow-[0_0_8px_2px_#1A9AE6]" animate={shouldReduceMotion ? {} : { y: ["-100%", "200%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0 }} />
            </div>
            {/* Center Stream */}
            <div className="w-[1px] h-full bg-gradient-to-b from-[#1A9AE6]/60 to-[#0078D4]/60 mx-auto relative overflow-hidden">
              <motion.div className="absolute top-0 left-0 w-full h-1/2 bg-white shadow-[0_0_8px_2px_#1A9AE6]" animate={shouldReduceMotion ? {} : { y: ["-100%", "200%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.6 }} />
            </div>
            {/* Right Stream */}
            <div className="w-[1px] h-full bg-gradient-to-b from-[#1A9AE6]/60 to-[#0078D4]/60 mx-auto relative overflow-hidden">
              <motion.div className="absolute top-0 left-0 w-full h-1/2 bg-white shadow-[0_0_8px_2px_#1A9AE6]" animate={shouldReduceMotion ? {} : { y: ["-100%", "200%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1.2 }} />
            </div>
          </div>

          {/* Data Plane Wrapper */}
          <div className="relative w-full">
            {/* Data Plane */}
            <motion.div 
              className="relative z-20 flex flex-col items-center justify-center w-full rounded-2xl border border-white/10 bg-[#0A1015]/90 backdrop-blur-xl shadow-2xl p-5 overflow-hidden gap-5"
              animate={shouldReduceMotion ? {} : { y: [5, -5, 5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 bg-[#0A1015]/40" />
              
              <div className="relative z-10 w-full flex justify-between px-6 mt-2">
                <div className="h-8 w-8 rounded-lg bg-[#0078D4]/20 border border-[#0078D4]/50 flex items-center justify-center backdrop-blur-sm z-20">
                  <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                </div>
                <div className="h-8 w-8 rounded-lg bg-[#0078D4]/20 border border-[#0078D4]/50 flex items-center justify-center backdrop-blur-sm mt-5 z-20">
                  <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                </div>
                <div className="h-8 w-8 rounded-lg bg-[#0078D4]/20 border border-[#0078D4]/50 flex items-center justify-center backdrop-blur-sm z-20">
                  <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                </div>
              </div>

              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-10" viewBox="0 0 320 120">
                <path d="M 60,40 L 160,60" fill="none" stroke="#0078D4" strokeWidth="1" strokeDasharray="4 4" />
                <path d="M 260,40 L 160,60" fill="none" stroke="#0078D4" strokeWidth="1" strokeDasharray="4 4" />
              </svg>

              <span className="relative z-30 text-xs uppercase tracking-widest text-white font-bold whitespace-nowrap bg-white/5 px-4 py-1.5 rounded-full border border-white/10 mt-1">Data Plane</span>
            </motion.div>
          </div>
        </div>
      );

    default:
      return (
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0078D4] to-[#005A9E] shadow-xl shadow-[#0078D4]/20 ring-1 ring-white/20">
            <Cpu className="h-12 w-12 text-white" />
          </div>
        </div>
      );
  }
}

export function TechClient({ techId }: TechClientProps) {
  const tech = TECHNOLOGY_CONTENT[techId];
  const shouldReduceMotion = useReducedMotion();

  if (!tech) {
    return <div className="p-20 text-center text-red-500">Technology concept not found.</div>;
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  // Determine an icon based on ID
  let PrimaryIcon = Cpu;
  if (techId.includes("security")) PrimaryIcon = ShieldCheck;
  else if (techId.includes("programmable")) PrimaryIcon = Code2;
  else if (techId.includes("experience")) PrimaryIcon = ActivitySquare;
  else if (techId.includes("scale")) PrimaryIcon = Layers;

  const featureIcons = [Zap, ShieldCheck, Layers, ActivitySquare, Network, Globe2];

  return (
    <div className="bg-white" key={techId}>
      {/* 1. Hero Section */}
      <section className="relative isolate overflow-hidden bg-[#003F72] px-4 py-24 text-white sm:px-6 sm:py-32 xl:flex xl:min-h-[85svh] xl:items-center xl:px-8">
        {/* Full-width immersive background */}
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_30%_30%,#005A9E_0%,#003F72_70%)] opacity-80" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-white to-transparent opacity-5" />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 xl:grid-cols-2 xl:gap-16 z-10 pt-10 xl:pt-0">
          {/* Left Column (Text) */}
          <div className="mx-auto max-w-2xl xl:mx-0 xl:max-w-none text-left">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-[#E6F3FB] backdrop-blur-md ring-1 ring-white/5">
              <PrimaryIcon className="h-4 w-4 text-[#1A9AE6]" aria-hidden="true" />
              <span className="tracking-widest uppercase">CORE TECHNOLOGY</span>
            </div>
            
            <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl tracking-tight">
              {tech.hero.title}
            </h1>
            
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#E6F3FB]/70 sm:text-xl font-light">
              {tech.hero.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#1A9AE6] to-[#0078D4] px-8 py-4 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(26,154,230,0.4)] focus-visible:outline-none"
              >
                Schedule Architecture Review
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Right Column (Dynamic Visual Panel - UNBOXED) */}
          <div className="relative flex items-center justify-center w-full min-h-[350px] sm:min-h-[400px] xl:min-h-[500px]">
            {/* Subtle glow behind the visualizer to give it depth */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="h-64 w-64 rounded-full bg-[#1A9AE6]/10 blur-[100px]" />
            </div>
            {renderVisual(techId, shouldReduceMotion)}
          </div>
        </div>
      </section>

      {/* 2. Overview */}
      {tech.overview && (
        <section className="border-b border-[#C8D6E5]/40 bg-[#F7FAFD] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <motion.div 
            className="mx-auto max-w-4xl text-center"
            initial={shouldReduceMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={FADE_UP_VARIANTS}
          >
            <p className="font-display text-xl leading-relaxed text-[#1A1A1A] sm:text-2xl sm:leading-loose">
              "{tech.overview}"
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="h-[1px] w-12 bg-[#0078D4]" />
              <span className="text-sm font-semibold uppercase tracking-widest text-[#005A9E]">Engineering Philosophy</span>
              <div className="h-[1px] w-12 bg-[#0078D4]" />
            </div>
          </motion.div>
        </section>
      )}

      {/* 3. Features / Concepts Grid */}
      {tech.features && tech.features.length > 0 && (
        <section className="bg-white px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div 
              className="mx-auto max-w-3xl text-center mb-16"
              initial={shouldReduceMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={FADE_UP_VARIANTS}
            >
              <h2 className="font-display text-3xl text-[#1A1A1A] sm:text-4xl">
                Core Principles
              </h2>
              <p className="mt-4 text-lg text-[#4A4A4A]">
                The technical pillars that empower our SD-WAN fabric.
              </p>
            </motion.div>
            
            <motion.div 
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
              initial={shouldReduceMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              {tech.features.map((feature, i) => {
                const Icon = featureIcons[i % featureIcons.length];
                return (
                  <motion.div 
                    key={feature.name} 
                    variants={shouldReduceMotion ? {} : FADE_UP_VARIANTS}
                    whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.2 } }}
                    className="group relative flex flex-col rounded-xl bg-white p-8 shadow-sm ring-1 ring-[#C8D6E5]/50 transition-all duration-300 hover:shadow-xl hover:ring-[#0078D4]/30"
                  >
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#E6F3FB] text-[#0078D4] ring-1 ring-[#0078D4]/10 transition-colors duration-300 group-hover:bg-[#0078D4] group-hover:text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-xl text-[#1A1A1A]">{feature.name}</h3>
                    <p className="mt-4 text-base leading-7 text-[#4A4A4A]">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}
