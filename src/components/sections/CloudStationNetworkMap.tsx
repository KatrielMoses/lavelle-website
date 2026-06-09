import Image from "next/image";
import { CheckCircle2, MousePointer2 } from "lucide-react";
import type { CloudStationPreviewContent } from "@/lib/products-content";

interface CloudStationNetworkMapProps {
  preview: CloudStationPreviewContent;
}

export function CloudStationNetworkMap({ preview }: CloudStationNetworkMapProps) {
  return (
    <>
      <div className="absolute left-1/2 top-1/2 h-[94%] aspect-square -translate-x-1/2 -translate-y-1/2">
        <div className="cs-map-zoom-stage absolute inset-0">
          <Image
            src="/images/maps/india-network-map.svg"
            alt={preview.mapAlt}
            fill
            priority
            sizes="520px"
            className="object-contain opacity-90 drop-shadow-[0_18px_44px_rgba(0,0,0,0.36)]"
          />

          <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path className="cs-network-signal cs-network-signal-one" d="M34 31 C36 37 38 42 39 47" />
            <path className="cs-network-signal cs-network-signal-two" d="M30 48 C33 48 36 48 39 47" />
            <path className="cs-network-signal cs-network-signal-three" d="M26 59 C29 56 32 52 35 49" />
            <path className="cs-network-signal cs-network-signal-four" d="M35 59 C35 55 36 51 39 47" />
            <path className="cs-network-signal cs-network-signal-five" d="M36 72 C36 67 36 63 35 59" />
            <path className="cs-network-signal cs-network-signal-six" d="M40 72 C39 67 37 63 35 59" />
            <path className="cs-network-signal cs-network-signal-seven" d="M30 48 C29 52 27 56 26 59" />
            <path className="cs-network-signal cs-network-signal-eight" d="M39 47 C41 51 42 55 42 59" />
            <path className="cs-new-network-signal" d="M30 48 C33 54 36 59 38 63" />
            <path className="cs-new-network-signal cs-new-network-signal-two" d="M35 59 C36 60 37 62 38 63" />
            <path className="cs-new-network-signal cs-new-network-signal-three" d="M36 72 C37 68 38 65 38 63" />
            <path className="cs-new-network-signal cs-new-network-signal-four" d="M40 72 C40 68 39 65 38 63" />
          </svg>

          <div className="cs-network-node left-[34%] top-[31%]" aria-hidden="true" />
          <div className="cs-network-node left-[30%] top-[48%]" aria-hidden="true" />
          <div className="cs-network-node left-[26%] top-[59%]" aria-hidden="true" />
          <div className="cs-network-node left-[36%] top-[72%]" aria-hidden="true" />
          <div className="cs-network-node left-[40%] top-[72%]" aria-hidden="true" />
          <div className="cs-network-node left-[42%] top-[59%]" aria-hidden="true" />

          <div className="cs-core-node left-[39%] top-[47%]" aria-hidden="true" />
          <div className="cs-core-node left-[35%] top-[59%]" aria-hidden="true" />
          <div className="cs-new-core-node left-[38%] top-[63%]" aria-hidden="true" />
        </div>

        <div className="cs-cursor" aria-hidden="true">
          <MousePointer2 className="h-6 w-6 text-white drop-shadow-lg" />
        </div>
        <div className="cs-add-tooltip rounded-lg border border-white/12 bg-[#111827] px-3 py-2 text-xs font-semibold text-white shadow-xl">
          {preview.tooltip}
        </div>
        <div className="cs-click-ripple" aria-hidden="true" />
      </div>

      <div className="absolute right-4 top-4 z-20 rounded-xl border border-white/10 bg-[#090b10]/88 p-4 shadow-xl shadow-black/30 backdrop-blur">
        <div className="space-y-2">
          {preview.stats.map((stat) => (
            <div key={stat.name} className="flex items-center justify-between gap-6 text-xs">
              <span className="text-white/65">{stat.name}</span>
              <span className="font-semibold text-[#22c55e]">{stat.description}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="cs-deploy-modal rounded-xl border border-white/12 bg-[#111827] p-4 shadow-2xl shadow-black/40">
        <div className="mb-4 flex items-center justify-between">
          <p className="font-display text-sm text-white">{preview.modalTitle}</p>
          <CheckCircle2 className="h-4 w-4 text-[#22c55e]" aria-hidden="true" />
        </div>
        <div className="space-y-2">
          {preview.deploymentOptions.map((option, index) => (
            <div
              key={option}
              className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80"
            >
              <span
                className={[
                  "h-3 w-3 rounded-full border",
                  index === 0 ? "border-[#2563eb] bg-[#2563eb]" : "border-white/35",
                ].join(" ")}
              />
              {option}
            </div>
          ))}
        </div>
        <button className="cs-orchestrate-button mt-4 w-full rounded-lg bg-[#2563eb] px-4 py-2 text-xs font-semibold text-white">
          {preview.actionLabel}
        </button>
      </div>
    </>
  );
}
