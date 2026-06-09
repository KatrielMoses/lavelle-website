"use client";

import { useEffect, useState } from "react";
import { Cloud, Server, Shield, Activity, Network } from "lucide-react";

export function CloudPortGatewayIllustration() {
  const [errorBranch, setErrorBranch] = useState<number | null>(null);
  const [burstGlow, setBurstGlow] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const errInterval = setInterval(() => {
      const branchId = Math.floor(Math.random() * 4);
      setErrorBranch(branchId);
      setTimeout(() => setErrorBranch(null), 1000);
    }, 3000);

    const burstInterval = setInterval(() => {
      setBurstGlow(true);
      setTimeout(() => setBurstGlow(false), 800);
    }, 7000);

    return () => {
      clearInterval(errInterval);
      clearInterval(burstInterval);
    };
  }, []);

  const branchYs = [80, 193, 306, 420];
  const destYs = [100, 250, 400];

  return (
    <div className="w-full bg-[#0a0c10] rounded-xl border border-white/10 shadow-inner overflow-hidden h-[120px] sm:h-[140px]">
      <svg 
        viewBox="0 0 800 500" 
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
           <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
             <stop offset="0%" stopColor="#1e3a8a" />
             <stop offset="100%" stopColor="#0f172a" />
           </linearGradient>
           
           <filter id="neon-blue" x="-50%" y="-50%" width="200%" height="200%">
             <feGaussianBlur stdDeviation="8" result="blur1" />
             <feGaussianBlur stdDeviation="16" result="blur2" />
             <feMerge>
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
             </feMerge>
           </filter>

           <filter id="neon-amber" x="-50%" y="-50%" width="200%" height="200%">
             <feGaussianBlur stdDeviation="6" result="blur1" />
             <feMerge>
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
             </feMerge>
           </filter>
        </defs>

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes flow-path {
            from { stroke-dashoffset: 24; }
            to { stroke-dashoffset: 0; }
          }
          .anim-flow {
            animation: flow-path 1.5s linear infinite;
          }
          @keyframes pulse-hex {
            0%, 100% { filter: drop-shadow(0 0 15px rgba(37,99,235,0.4)); }
            50% { filter: drop-shadow(0 0 35px rgba(59,130,246,0.7)); }
          }
          .anim-hex {
            animation: pulse-hex 4s ease-in-out infinite;
          }
        `}} />

        {/* --- LINES LAYER --- */}
        <g strokeLinecap="round">
          {/* Branch Lines */}
          {branchYs.map((y, i) => (
             <g key={`b-line-${i}`} style={{ opacity: mounted ? 1 : 0, transition: `opacity 0.5s ease ${i * 0.15}s` }}>
               {/* Base faint line */}
               <line x1="120" y1={y} x2="400" y2="250" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
               {/* Flowing line */}
               <line 
                 x1="120" y1={y} x2="400" y2="250" 
                 stroke={errorBranch === i ? "#f59e0b" : "#2563eb"} 
                 strokeWidth="2.5" 
                 strokeDasharray="6 18" 
                 className="anim-flow"
                 style={{ transition: "stroke 0.3s ease" }}
               />
             </g>
          ))}

          {/* Dest Lines */}
          {destYs.map((y, i) => {
             const isDC = i === 1;
             const isBurst = isDC && burstGlow;
             const strokeColor = isBurst ? "#60a5fa" : "#2563eb";
             const strokeW = isDC ? 3.5 : 2;
             
             return (
               <g key={`d-line-${i}`} style={{ opacity: mounted ? 1 : 0, transition: `opacity 0.5s ease ${0.6 + i * 0.15}s` }}>
                 <line x1="400" y1="250" x2="680" y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth={strokeW} />
                 <line 
                   x1="400" y1="250" x2="680" y2={y} 
                   stroke={strokeColor} 
                   strokeWidth={strokeW} 
                   strokeDasharray="6 18" 
                   className="anim-flow"
                   style={{ 
                     transition: "stroke 0.3s ease, filter 0.3s ease",
                     filter: isBurst ? "drop-shadow(0 0 8px #60a5fa)" : "none"
                   }}
                 />
               </g>
             );
          })}
        </g>

        {/* --- NODES LAYER --- */}
        
        {/* Center Hexagon */}
        <g 
          className="anim-hex" 
          style={{ opacity: mounted ? 1 : 0, transition: 'opacity 1s ease', transformOrigin: '400px 250px', transform: mounted ? 'scale(1)' : 'scale(0.8)' }}
        >
          {/* Hexagon shape */}
          <polygon 
            points="490,250 445,328 355,328 310,250 355,172 445,172" 
            fill="url(#hexGrad)" 
            stroke="#3b82f6" 
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {/* Center Icon */}
          <Activity x={360} y={210} width={80} height={80} strokeWidth={1.5} className="text-[#60a5fa]" style={{ filter: "drop-shadow(0 0 10px rgba(96,165,250,0.5))" }} />
        </g>

        {/* Left Branch Boxes */}
        {branchYs.map((y, i) => {
          const isErr = errorBranch === i;
          return (
            <g 
              key={`b-node-${i}`} 
              style={{ opacity: mounted ? 1 : 0, transition: `all 0.5s ease ${i * 0.1}s`, transformOrigin: `120px ${y}px`, transform: mounted ? 'scale(1)' : 'scale(0)' }}
            >
              <rect 
                x={120 - 35} y={y - 35} 
                width={70} height={70} 
                rx={16} 
                fill="#0f172a" 
                stroke={isErr ? "#f59e0b" : "rgba(255,255,255,0.15)"} 
                strokeWidth="2"
                style={{ transition: "stroke 0.3s ease", filter: isErr ? "url(#neon-amber)" : "drop-shadow(0 0 10px rgba(0,0,0,0.5))" }}
              />
              <Network x={120 - 18} y={y - 18} width={36} height={36} strokeWidth={1.5} className={isErr ? "text-[#f59e0b]" : "text-[#94a3b8]"} />
            </g>
          );
        })}

        {/* Right Destination Boxes */}
        {destYs.map((y, i) => {
          const Icon = i === 0 ? Cloud : i === 1 ? Server : Shield;
          return (
            <g 
              key={`d-node-${i}`} 
              style={{ opacity: mounted ? 1 : 0, transition: `all 0.5s ease ${0.5 + i * 0.1}s`, transformOrigin: `680px ${y}px`, transform: mounted ? 'scale(1)' : 'scale(0)' }}
            >
              <rect 
                x={680 - 40} y={y - 40} 
                width={80} height={80} 
                rx={20} 
                fill="#0f172a" 
                stroke="rgba(255,255,255,0.15)" 
                strokeWidth="2"
                style={{ filter: "drop-shadow(0 0 10px rgba(0,0,0,0.5))" }}
              />
              <Icon x={680 - 20} y={y - 20} width={40} height={40} strokeWidth={1.5} className="text-[#93c5fd]" />
            </g>
          );
        })}

      </svg>
    </div>
  );
}
