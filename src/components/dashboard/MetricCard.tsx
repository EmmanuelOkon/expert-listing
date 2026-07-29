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
        flex flex-col gap-2 rounded-xl border border-[#EAECF0] bg-white p-3 sm:p-4
      `}
    >
      <p
        className={`text-sm font-bold leading-snug break-words sm:text-base ${colors.amount}`}
      >
        {metric.amount}
      </p>

      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-[11px] font-medium text-[#667085] sm:text-xs">
          {metric.label}
        </span>
        <span
          className={`
            inline-flex items-center gap-0.5 text-[11px] font-semibold sm:text-xs
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
