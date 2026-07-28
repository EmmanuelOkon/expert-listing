import { useState } from "react";
import { SalesBarChart } from "./SalesBarChart";
import { MetricCard } from "./MetricCard";
import { financialMetrics, timeRanges } from "../../data/mockDashboardData";
import type { TimeRange } from "../../data/mockDashboardData";

export function SalesOverviewCard() {
  const [activeRange, setActiveRange] = useState<TimeRange>("1 Year");

  return (
    <div className="bg-white rounded-[16px] border border-[#E4E4E4] p-5md:p-6 transition-shadow duration-200">
      {/* Card Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4 border-b border-[#E4E4E4] p-5 md:p-6 ">
        <div>
          <h2 className="text-base font-bold text-main-black">
            Sales Overview
          </h2>
          <p className="text-xs text-[#667085] mt-0.5">
            Showing overview Jan 2022 – Sep 2022
          </p>
        </div>

        <div className="flex flex-col items-end gap-2 flexwrap">
          {/* View Transactions button */}
          <button
            // type="button"
            id="btn-view-transactions"
            className="text-xs font-medium bg-transparent lg:px-5 h-11 lg:py-4 rounded-full border border-[#D6D6D6] text-[#191919] hover:bg-gray-50 hover:border-[#D0D5DD] transition-all duration-200 cursor-pointer flex items-center justify-center "
          >
            View Transactions
          </button>

          {/* Time Range toggles */}
          <div className="flex items-center rounded-lg p-0.5">
            {timeRanges.map((range) => (
              <button
                key={range}
                id={`time-range-${range.replace(" ", "-").toLowerCase()}`}
                onClick={() => setActiveRange(range)}
                className={`
                  text-xs px-3 py-1.5 rounded-md font-medium transition-all duration-200 cursor-pointer
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
      <div className="flex flex-col lg:flex-row gap-6 p-5 md:p-6">
        {/* Bar Chart */}
        <div className="flex-1 min-w-0">
          <SalesBarChart />
        </div>

        {/* Metric Mini-Cards */}
        <div className="grid grid-cols-2 gap-3 lg:w-64 xl:w-72 shrink-0">
          {financialMetrics.map((metric) => (
            <MetricCard key={metric.id} metric={metric} />
          ))}
        </div>
      </div>
    </div>
  );
}
