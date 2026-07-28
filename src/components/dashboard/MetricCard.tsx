import type { FinancialMetric } from "../../data/mockDashboardData";

interface MetricCardProps {
  metric: FinancialMetric;
}

const colorMap = {
  blue: {
    amount: "text-[#3B82F6]",
    bg: "bg-blue-50",
  },
  green: {
    amount: "text-[#00A859]",
    bg: "bg-green-50",
  },
  deepGreen: {
    amount: "text-[#0C5D56]",
    bg: "bg-green-50",
  },
  orange: {
    amount: "text-[#F97316]",
    bg: "bg-orange-50",
  },
};

export function MetricCard({ metric }: MetricCardProps) {
  const colors = colorMap[metric.color];

  return (
    <div
      className={`
        rounded-xl p-4 border border-[#EAECF0] bg-white
        hover:shadow-md transition-shadow duration-200
        flex flex-col gap-2
      `}
    >
      <p
        className={`text-sm font-bold leading-snug break-all ${colors.amount}`}
      >
        {metric.amount}
      </p>

      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-[10px] text-[#667085] font-medium">
          {metric.label}
        </span>
        <span
          className={`
            inline-flex items-center gap-0.5 text-[10px] font-semibold 
            ${metric.isPositive ? "text-[#12B76A]" : "text-red-600"}
          `}
        >
          <metric.icon
            className={` ${metric.isPositive ? " " : " rotate-180"} `}
          />
          {metric.change}
        </span>
      </div>
    </div>
  );
}
