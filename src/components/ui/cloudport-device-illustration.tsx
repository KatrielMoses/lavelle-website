"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";

const Port = ({ label, status }: { label: string; status: "active" | "pulse" | "standby" }) => {
  let dotClass = "bg-white/20";
  if (status === "active") dotClass = "bg-[#22c55e]";
  else if (status === "standby") dotClass = "bg-[#f59e0b]";
  else if (status === "pulse") dotClass = "bg-[#22c55e] animate-pulse";

  return (
    <div className="flex flex-col items-center gap-[3px]">
      <div className={`w-1.5 h-1.5 rounded-full ${dotClass}`} />
      <span className="text-[6.5px] text-white/50 font-medium tracking-wider uppercase">{label}</span>
    </div>
  );
};

const FlowStep = ({ 
  index, 
  phase, 
  label 
}: { 
  index: number; 
  phase: number; 
  label: string; 
}) => {
  const isActive = phase === index;
  const isComplete = phase > index || (index === 3 && phase === 3);

  let bgClass = "bg-white/5 border-white/10 text-white/40";
  if (isComplete) {
    bgClass = "bg-[#22c55e]/10 border-[#22c55e]/30 text-[#22c55e]";
  } else if (isActive) {
    bgClass = "bg-[#0078D4]/20 border-[#0078D4]/50 text-[#1A9AE6]";
  }

  return (
    <div className={`flex items-center justify-center gap-1 px-2 py-1 rounded-full border transition-colors duration-500 ${bgClass}`}>
      {isComplete && (
        <Check className="w-2.5 h-2.5 shrink-0" />
      )}
      <span className="text-[7.5px] font-medium whitespace-nowrap">{label}</span>
    </div>
  );
};

const Arrow = ({ phase, threshold }: { phase: number; threshold: number }) => {
  const isLit = phase >= threshold;
  return (
    <div className="flex-1 flex items-center justify-center px-0.5">
      <div className={`h-[1px] w-full min-w-[6px] max-w-[12px] transition-colors duration-500 ${isLit ? 'bg-[#1A9AE6]' : 'bg-white/10'}`} />
      <div className={`w-0 h-0 border-t-[3px] border-t-transparent border-l-[4px] border-b-[3px] border-b-transparent transition-colors duration-500 ${isLit ? 'border-l-[#1A9AE6]' : 'border-l-white/10'}`} />
    </div>
  );
};

export function CloudportDeviceIllustration() {
  const [upSpeed, setUpSpeed] = useState(847);
  const [downSpeed, setDownSpeed] = useState(1.2);
  const [phase, setPhase] = useState(0);

  // Speed simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setUpSpeed(prev => {
        const variance = Math.floor(Math.random() * 11) - 5; // -5 to +5
        return Math.max(800, Math.min(900, prev + variance));
      });
      setDownSpeed(prev => {
        const variance = (Math.random() * 0.04) - 0.02; // -0.02 to +0.02
        return Number(Math.max(1.1, Math.min(1.3, prev + variance)).toFixed(2));
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  // Provisioning sequence
  useEffect(() => {
    const cycle = () => {
      setPhase(0);
      setTimeout(() => setPhase(1), 800);
      setTimeout(() => setPhase(2), 1600);
      setTimeout(() => setPhase(3), 2400);
      setTimeout(cycle, 4400); // 2400 + 2000ms pause
    };
    
    // Initial start
    const initialTimers = [
      setTimeout(() => setPhase(1), 800),
      setTimeout(() => setPhase(2), 1600),
      setTimeout(() => setPhase(3), 2400),
      setTimeout(cycle, 4400),
    ];

    return () => initialTimers.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative mx-auto h-28 max-w-md w-full rounded-xl border border-white/15 bg-[#1A1A1A] shadow-xl shadow-[#003F72]/20 flex flex-col justify-center px-4 gap-4 overflow-hidden">
      
      {/* Device */}
      <div className="w-full h-[46px] bg-[#1a1a2e] rounded border border-white/10 flex items-center justify-between px-3 relative shadow-inner shrink-0">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-[#0078D4] opacity-80" />
        
        {/* WAN Ports */}
        <div className="flex items-center gap-2.5">
          <Port label="FIBER" status="active" />
          <Port label="LTE" status="pulse" />
          <Port label="BROADBAND" status="active" />
          <Port label="MPLS" status="standby" />
        </div>

        {/* Throughput */}
        <div className="bg-[#0f0f1a] border border-white/10 rounded px-2.5 py-1.5 flex items-center gap-3 font-mono text-[9px] text-[#2563eb] shadow-inner">
           <span className="flex items-center gap-1 font-medium tracking-wide">
             <span className="text-[#0078D4]">↑</span> {upSpeed} Mbps
           </span>
           <span className="flex items-center gap-1 font-medium tracking-wide">
             <span className="text-[#0078D4]">↓</span> {downSpeed.toFixed(2)} Gbps
           </span>
        </div>

        {/* LAN Ports */}
        <div className="flex items-center gap-2.5">
          <Port label="LAN 1" status="active" />
          <Port label="LAN 2" status="active" />
        </div>
      </div>

      {/* Flow Diagram */}
      <div className="w-full flex items-center justify-between">
        <FlowStep index={0} phase={phase} label="Device Powers On" />
        <Arrow phase={phase} threshold={1} />
        <FlowStep index={1} phase={phase} label="Calls CloudStation" />
        <Arrow phase={phase} threshold={2} />
        <FlowStep index={2} phase={phase} label="Gets Config" />
        <Arrow phase={phase} threshold={3} />
        <FlowStep index={3} phase={phase} label={phase >= 3 ? "Online in 47s" : "Online"} />
      </div>

    </div>
  );
}
