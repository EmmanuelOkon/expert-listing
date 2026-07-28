import { ChevronRight } from "lucide-react";
import type { OverviewStat } from "../../data/mockDashboardData";
import { DashboardIcons } from "#/assets/icons/DashboardIcons";

interface OverviewCardProps {
  stat: OverviewStat;
}

const iconMap = {
  listings: DashboardIcons.HouseListing,
  users: DashboardIcons.Profile,
};

export function OverviewCard({ stat }: OverviewCardProps) {
  const Icon = iconMap[stat.icon];
  const isWide = stat.metrics.length > 3;

  return (
    <div className="bg-white rounded-2xl border border-[#E4E4E4] h-full">
      {/* Header */}
      <div className="flex items-center justify-between bg-[#F9FAFB] rounded-t-2xl border-b border-[#E4E4E4] p-4 ">
        <div className="flex items-center gap-2">
          <Icon className="text-[#4545FE] w-6 h-6 " />
          <span className="text-sm font-semibold text-[#292929]">
            {stat.title}
          </span>
        </div>
        <button
          id={`view-all-${stat.id}`}
          className="text-xs text-[#4545FE] font-medium hover:underline flex items-center gap-0.5 cursor-pointer transition-colors duration-300"
        >
          View all{" "}
          <span className="text-[10px] font-bold" aria-hidden="true">
            <ChevronRight className="w-4 h-4" />
          </span>
        </button>
      </div>

      {/* Metrics Grid */}
      <div
        className={`grid gap-y-3 p-4 gap-x-4 ${
          isWide ? "grid-cols-3" : "grid-cols-3"
        }`}
      >
        {stat.metrics.map((metric) => (
          <div key={metric.label} className="flex flex-col gap-0.5 lg:gap-3">
            <span className="text-sm text-[#525252] font-medium">
              {metric.label}
            </span>
            <span className="text-lg lg:text-2xl font-semibold text-[#141414] leading-tight">
              {metric.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
