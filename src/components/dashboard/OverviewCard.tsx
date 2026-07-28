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

  return (
    <div className="h-full rounded-2xl border border-[#E4E4E4] bg-white">
      {/* Header */}
      <div className="flex items-center justify-between rounded-t-2xl border-b border-[#E4E4E4] bg-[#F9FAFB] p-4 sm:p-5">
        <div className="flex items-center gap-2">
          <Icon className="h-5 w-5 text-[#4545FE] sm:h-6 sm:w-6" />
          <span className="text-sm font-semibold text-[#292929] sm:text-base">
            {stat.title}
          </span>
        </div>
        <button
          id={`view-all-${stat.id}`}
          className="inline-flex min-h-11 items-center gap-1 text-xs font-medium text-[#4545FE] transition-colors duration-300 hover:underline focus-visible:ring-2 focus-visible:ring-[#4545FE]/30 sm:text-sm"
        >
          View all{" "}
          <span className="text-[10px] font-bold" aria-hidden="true">
            <ChevronRight className="w-4 h-4" />
          </span>
        </button>
      </div>

      {/* Metrics Grid */}
      <div className="grid gap-x-4 gap-y-4 p-4 sm:grid-cols-2 sm:p-5 lg:grid-cols-3">
        {stat.metrics.map((metric) => (
          <div key={metric.label} className="flex flex-col gap-1">
            <span className="text-sm font-medium text-[#525252]">
              {metric.label}
            </span>
            <span className="text-lg font-semibold leading-tight text-[#141414] sm:text-xl lg:text-2xl">
              {metric.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
