import { salesChartData } from "../../data/mockDashboardData";

const Y_LABELS = ["50m", "40m", "30m", "20m", "10m", "0"];
const MAX_VALUE = 50;
const CHART_HEIGHT = 160;
const BAR_COLORS = {
  a: "#3B82F6", // blue
  b: "#22C55E", // green
  c: "#EF4444", // red
};

// interface TooltipState {
//   visible: boolean;
//   x: number;
//   y: number;
//   month: string;
//   valueA: number;
//   valueB: number;
//   valueC: number;
// }

export function SalesBarChart() {
  return (
    <div className="relative w-full">
      <svg
        viewBox="0 0 420 190"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full"
        role="img"
        aria-label="Sales bar chart showing monthly data"
      >
        {/* Y-axis labels */}
        {Y_LABELS.map((label, i) => {
          const y = 10 + (i / (Y_LABELS.length - 1)) * CHART_HEIGHT;
          return (
            <g key={label}>
              <text
                x="28"
                y={y + 4}
                fontSize="9"
                fill="#9CA3AF"
                textAnchor="end"
                fontFamily="Inter, sans-serif"
              >
                {label}
              </text>
              <line
                x1="32"
                x2="416"
                y1={y}
                y2={y}
                stroke="#F3F4F6"
                strokeWidth="0.8"
              />
            </g>
          );
        })}

        {/* Bars */}
        {salesChartData.map((point, i) => {
          const slotWidth = (416 - 32) / salesChartData.length;
          const barGroupW = slotWidth * 0.75;
          const barW = barGroupW / 3 - 1;
          const slotX = 32 + i * slotWidth + slotWidth * 0.125;

          const toH = (v: number) =>
            Math.max(2, (v / MAX_VALUE) * CHART_HEIGHT);
          const hA = toH(point.valueA);
          const hB = toH(point.valueB);
          const hC = toH(point.valueC);
          const baseY = 10 + CHART_HEIGHT;

          return (
            <g key={point.month} className="group">
              {/* Bar A – blue */}
              <rect
                x={slotX}
                y={baseY - hA}
                width={barW}
                height={hA}
                rx="2"
                fill={BAR_COLORS.a}
                opacity="0.85"
                className="transition-opacity duration-200 hover:opacity-100"
              />
              {/* Bar B – green */}
              <rect
                x={slotX + barW + 1}
                y={baseY - hB}
                width={barW}
                height={hB}
                rx="2"
                fill={BAR_COLORS.b}
                opacity="0.85"
                className="transition-opacity duration-200 hover:opacity-100"
              />
              {/* Bar C – red */}
              <rect
                x={slotX + 2 * (barW + 1)}
                y={baseY - hC}
                width={barW}
                height={hC}
                rx="2"
                fill={BAR_COLORS.c}
                opacity="0.85"
                className="transition-opacity duration-200 hover:opacity-100"
              />
              {/* Month label */}
              <text
                x={slotX + barGroupW / 2}
                y={baseY + 14}
                fontSize="9"
                fill="#9CA3AF"
                textAnchor="middle"
                fontFamily="Inter, sans-serif"
              >
                {point.month}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Legend */}
      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 px-2">
        {[
          { color: BAR_COLORS.a, label: "Inflow" },
          { color: BAR_COLORS.b, label: "MRR" },
          { color: BAR_COLORS.c, label: "Payout" },
        ].map(({ color, label }) => (
          <div key={label} className="flex items-center gap-1.5">
            <span
              className="w-2.5 h-2.5 rounded-sm"
              style={{ backgroundColor: color }}
            />
            <span className="text-[10px] text-[#9CA3AF]">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
