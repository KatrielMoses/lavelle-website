import {
  Activity,
  Layers3,
  MapPinned,
  Settings,
  SlidersHorizontal,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { CloudStationPreviewContent } from "@/lib/products-content";
import { CloudStationNetworkMap } from "@/components/sections/CloudStationNetworkMap";

interface CloudStationControllerPreviewProps {
  preview: CloudStationPreviewContent;
}

const navIcons: LucideIcon[] = [Layers3, Activity, SlidersHorizontal, Settings];

export function CloudStationControllerPreview({ preview }: CloudStationControllerPreviewProps) {
  return (
    <div className="hidden rounded-xl border border-white/15 bg-white/10 p-3 shadow-2xl shadow-[#1A1A1A]/30 backdrop-blur lg:-mr-8 lg:block lg:origin-center lg:scale-[0.86] xl:-mr-16 xl:scale-[0.94] 2xl:scale-100">
      <div className="overflow-hidden rounded-lg border border-[#C8D6E5]/20 bg-[#0f1117] text-white shadow-2xl shadow-[#1A1A1A]/40">
        <div className="flex h-14 items-center justify-between border-b border-white/10 bg-[#111827] px-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2563eb]">
              <MapPinned className="h-4 w-4 text-white" aria-hidden="true" />
            </div>
            <div>
              <p className="font-display text-sm text-white">{preview.logo}</p>
              <p className="text-xs text-white/55">{preview.customerName}</p>
            </div>
          </div>
          <div className="rounded-full bg-[#E6F3FB] px-4 py-2 text-sm font-semibold text-[#003F72]">
            {preview.label}
          </div>
        </div>

        <div className="flex min-h-[440px] bg-[#0f1117]">
          <aside className="w-[20%] min-w-32 border-r border-white/10 bg-[#090b10] p-3">
            <div className="space-y-2">
              {preview.navItems.map((item, index) => {
                const Icon = navIcons[index] ?? Layers3;

                return (
                  <div
                    key={item}
                    className={[
                      "flex items-center gap-3 rounded-lg px-3 py-3 text-xs font-semibold",
                      index === 0 ? "bg-[#2563eb]/18 text-[#E6F3FB]" : "text-white/58",
                    ].join(" ")}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {item}
                  </div>
                );
              })}
            </div>
          </aside>

          <div className="relative flex-1 overflow-hidden bg-[#0f1117]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_45%,#1f2937_0%,#0f1117_58%,#090b10_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(200,214,229,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(200,214,229,0.035)_1px,transparent_1px)] bg-[size:32px_32px]" />
            <div className="absolute inset-0 bg-[#0f1117]/20" />
            <CloudStationNetworkMap preview={preview} />
          </div>
        </div>
      </div>
    </div>
  );
}
