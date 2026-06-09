import { ArrowDown, CheckCircle2, Search } from "lucide-react";
import type { CloudStationInsightsPreviewContent } from "@/lib/products-content";

interface CloudStationInsightsAnalyticsMockProps {
  fabricLabel: string;
  preview: CloudStationInsightsPreviewContent;
}

const gaugeRadius = 42;
const gaugeCircumference = 264;

export function CloudStationInsightsAnalyticsMock({
  fabricLabel,
  preview,
}: CloudStationInsightsAnalyticsMockProps) {
  const [flowsTab, scoresTab, pathTab] = preview.tabs;
  const [latencyMetric, ...otherMetrics] = preview.metrics;

  return (
    <div className="rounded-xl border border-[#C8D6E5]/70 bg-[#EEF4FA] p-3 shadow-2xl shadow-[#1A1A1A]/25">
      <div className="overflow-hidden rounded-lg border border-[#C8D6E5]/70 bg-[#EEF4FA] text-[#1A1A1A]">
        <div className="flex flex-col gap-3 border-b border-[#C8D6E5]/70 bg-[#F7FAFD] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-lg text-[#003F72]">{preview.title}</p>
            <p className="text-xs leading-5 text-[#4A4A4A]">{preview.subtitle}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="rounded-full border border-[#C8D6E5]/70 bg-[#E6F3FB] px-3 py-1 text-xs font-semibold text-[#003F72]">
              {fabricLabel}
            </div>
            <div className="rounded-full border border-[#22c55e]/25 bg-[#F0FDF4] px-3 py-1 text-xs font-semibold text-[#15803d]">
              {preview.scoreBadge}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 px-5 py-3">
          <span className="csi-tab csi-tab-flows rounded-full border border-[#0078D4]/40 px-3 py-1.5 text-xs font-semibold text-[#003F72]">
            {flowsTab}
          </span>
          <span className="csi-tab csi-tab-scores rounded-full border border-[#C8D6E5]/70 px-3 py-1.5 text-xs font-semibold text-[#4A4A4A]">
            {scoresTab}
          </span>
          <span className="csi-tab csi-tab-path rounded-full border border-[#C8D6E5]/70 px-3 py-1.5 text-xs font-semibold text-[#4A4A4A]">
            {pathTab}
          </span>
        </div>

        <div className="p-4">
          <div className="mt-4 grid gap-4 xl:grid-cols-[1.12fr_0.88fr]">
            <div className="rounded-lg border border-[#C8D6E5]/15 bg-[#151A23] p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#E6F3FB]">
                  {preview.flowTitle}
                </p>
                <Search className="h-4 w-4 text-[#7FB8E8]" aria-hidden="true" />
              </div>

              <div className="mt-3 overflow-hidden rounded-md border border-[#C8D6E5]/12">
                <div className="csi-new-flow grid max-h-0 grid-cols-[1fr_4.5rem_5rem] items-center gap-2 border-b border-[#0078D4]/35 bg-[#123250] px-3 py-0 text-xs opacity-0">
                  <span className="font-semibold text-white">{preview.newFlow.application}</span>
                  <span className="text-right text-[#E6F3FB]">{preview.newFlow.throughput}</span>
                  <span className="h-1.5 overflow-hidden rounded-full bg-white/10">
                    <span className={`csi-flow-bar block h-full rounded-full bg-[#0078D4] ${preview.newFlow.barClass}`} />
                  </span>
                </div>

                {preview.flows.map((flow, index) => (
                  <div
                    key={flow.application}
                    className={`csi-flow-row grid grid-cols-[1fr_4.5rem_5rem] items-center gap-2 border-b border-white/10 px-3 py-2 text-xs last:border-b-0 ${
                      index === 0 ? "csi-shifted-flow" : ""
                    }`}
                  >
                    <span className="font-medium text-white/82">{flow.application}</span>
                    <span className="text-right text-white/62">{flow.throughput}</span>
                    <span className="h-1.5 overflow-hidden rounded-full bg-white/10">
                      <span className={`csi-flow-bar block h-full rounded-full bg-[#0078D4] ${flow.barClass}`} />
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {preview.statPills.map((pill) => (
                  <span
                    key={pill}
                    className="whitespace-nowrap rounded-full border border-[#C8D6E5]/15 bg-[#101722] px-2.5 py-1.5 text-[0.58rem] font-semibold leading-5 text-[#E6F3FB]"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-[#C8D6E5]/15 bg-[#151A23] p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#E6F3FB]">
                  {preview.linkTitle}
                </p>
                <CheckCircle2 className="h-4 w-4 text-[#22c55e]" aria-hidden="true" />
              </div>

              <div className="mt-3 flex items-center gap-4">
                <div className="relative h-28 w-28 flex-none">
                  <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90" aria-hidden="true">
                    <circle
                      cx="60"
                      cy="60"
                      r={gaugeRadius}
                      fill="none"
                      stroke="#1f2937"
                      strokeWidth="9"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r={gaugeRadius}
                      fill="none"
                      stroke="#22c55e"
                      strokeDasharray="108 156"
                      strokeLinecap="round"
                      strokeWidth="4"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r={gaugeRadius}
                      fill="none"
                      stroke="#eab308"
                      strokeDasharray="45 219"
                      strokeDashoffset="-116"
                      strokeLinecap="round"
                      strokeWidth="4"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r={gaugeRadius}
                      fill="none"
                      stroke="#ef4444"
                      strokeDasharray="28 236"
                      strokeDashoffset="-170"
                      strokeLinecap="round"
                      strokeWidth="4"
                    />
                    <circle
                      className="csi-gauge-progress"
                      cx="60"
                      cy="60"
                      r={gaugeRadius}
                      fill="none"
                      stroke="#2563eb"
                      strokeDasharray={gaugeCircumference}
                      strokeLinecap="round"
                      strokeWidth="9"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-display text-2xl text-white">{preview.gaugeValue}</span>
                    <span className="text-[0.65rem] font-semibold text-white/45">
                      / {preview.gaugeTotal}
                    </span>
                  </div>
                </div>

                <div className="min-w-0 flex-1 space-y-2">
                  <div className="csi-latency-row flex items-center justify-between rounded-md border border-white/10 bg-white/[0.04] px-2 py-1.5 text-xs">
                    <span className="text-white/58">{latencyMetric.label}</span>
                    <span className="relative flex min-w-10 items-center gap-1 font-semibold text-[#22c55e]">
                      <span className="csi-latency-normal">{latencyMetric.value}</span>
                      {latencyMetric.spikeValue && (
                        <span className="csi-latency-spike absolute opacity-0">
                          {latencyMetric.spikeValue}
                        </span>
                      )}
                      <ArrowDown className="h-3 w-3" aria-hidden="true" />
                    </span>
                  </div>

                  {otherMetrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.04] px-2 py-1.5 text-xs"
                    >
                      <span className="text-white/58">{metric.label}</span>
                      <span className="flex items-center gap-1 font-semibold text-[#22c55e]">
                        {metric.value}
                        <ArrowDown className="h-3 w-3" aria-hidden="true" />
                      </span>
                    </div>
                  ))}

                  <p className="text-[0.68rem] font-semibold text-[#C8D6E5]/45">{preview.updatedLabel}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-lg border border-[#C8D6E5]/15 bg-[#151A23] p-4">
            <div className="mb-4 flex items-center justify-between gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#E6F3FB]">
                {preview.pathTitle}
              </p>
              <span className="text-[0.68rem] font-semibold text-[#7FB8E8]">{preview.pathTraceLabel}</span>
            </div>

            <div className="relative overflow-hidden px-1 py-2">
              <div className="absolute left-[7%] right-[7%] top-[1.06rem] hidden h-px bg-[#C8D6E5]/18 sm:block" />
              <div className="csi-path-glow absolute left-[7%] right-[7%] top-[1.06rem] hidden h-px bg-[#0078D4] sm:block" />
              <span className="csi-path-packet absolute top-[0.86rem] hidden h-2 w-2 rounded-full bg-[#7FB8E8] sm:block" />

              <div className="relative z-10 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-5">
                {preview.pathHops.map((hop) => (
                  <div key={hop.label} className="flex items-center gap-2 sm:flex-col sm:items-center sm:text-center">
                    <span className="h-2.5 w-2.5 flex-none rounded-full border border-[#7FB8E8] bg-[#151A23]" />
                    <span className="text-[0.62rem] font-semibold leading-4 text-white/76 sm:mt-2">
                      {hop.label}
                    </span>
                    {hop.latency && (
                      <span className="csi-hop-latency rounded-full bg-[#0B1220] px-2 py-0.5 text-[0.6rem] font-semibold text-[#93c5fd] sm:mt-1">
                        {hop.latency}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
