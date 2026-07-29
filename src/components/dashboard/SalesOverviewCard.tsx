import { useState } from "react";
import { SalesBarChart } from "./SalesBarChart";
import { MetricCard } from "./MetricCard";
import { financialMetrics, timeRanges } from "../../data/mockDashboardData";
import type { TimeRange } from "../../data/mockDashboardData";

export function SalesOverviewCard() {
  const [activeRange, setActiveRange] = useState<TimeRange>("1 Year");

  return (
    <div className="rounded-[16px] border border-[#E4E4E4] bg-white duration-200">
      {/* Card Header */}
      <div className="mb-4 flex flex-col gap-3 border-b border-[#E4E4E4] p-4 sm:flex-row sm:items-start sm:justify-between sm:p-5 md:p-6">
        <div className="space-y-1">
          <h2 className="text-base font-bold text-main-black sm:text-lg">
            Sales Overview
          </h2>
          <p className="text-xs text-[#667085] sm:text-sm">
            Showing overview Jan 2022 – Sep 2022
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:items-end">
          {/* View Transactions button */}
          <button
            id="btn-view-transactions"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#D6D6D6] bg-transparent px-4 text-xs font-medium text-[#191919] transition-all duration-200 hover:border-[#D0D5DD] hover:bg-gray-50 sm:px-5 sm:text-sm"
          >
            View Transactions
          </button>

          {/* Time Range toggles */}
          <div
            className="flex w-full items-center gap-1 rounded-lg p-0.5 sm:w-auto"
            role="tablist"
            aria-label="Sales overview time range"
          >
            {timeRanges.map((range) => (
              <button
                key={range}
                id={`time-range-${range.replace(" ", "-").toLowerCase()}`}
                onClick={() => setActiveRange(range)}
                aria-pressed={activeRange === range}
                className={`
                  min-h-11 rounded-md px-3 text-xs font-medium transition-all duration-200 cursor-pointer
                  ${
                    activeRange === range
                      ? "bg-[#F5F5F5] text-deep-gray"
                      : "text-[#667085] hover:text-[#344054]"
                  }
                `}
              >
                {range}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Chart + Metrics Grid */}
      <div className="flex flex-col gap-6 p-4 sm:p-5 md:p-6 lg:flex-row">
        {/* Bar Chart */}
        <div className="flex-1 min-w-0">
          <SalesBarChart />
        </div>

        {/* Metric Mini-Cards */}
        <div className="grid grid-cols-2 gap-3 lg:w-auto lg:flex-1 xl:flex-[0_0_280px]">
          {financialMetrics.map((metric) => (
            <MetricCard key={metric.id} metric={metric} />
          ))}
        </div>
      </div>
    </div>
  );
}
