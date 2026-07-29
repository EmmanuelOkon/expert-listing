// ─── Types ────────────────────────────────────────────────────────────────────

import { DashboardIcons } from "#/assets/icons/DashboardIcons";

export interface SalesChartDataPoint {
  month: string;
  valueA: number; // Blue bar
  valueB: number; // Green bar
  valueC: number; // Red bar
}

export interface FinancialMetric {
  id: string;
  label: string;
  amount: string;
  change: string;
  isPositive: boolean;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  color: "blue" | "green" | "orange" | "deepGreen";
}

export interface OverviewMetric {
  label: string;
  value: string;
}

export interface OverviewStat {
  id: string;
  title: string;
  icon: "listings" | "users";
  metrics: OverviewMetric[];
}

export interface PropertyCard {
  id: string;
  type: "total-visits" | "most-clicked" | "most-watchlisted";
  defaultMode?: string;
  showChat?: boolean;
  modes: Array<{
    value: string;
    label: string;
    slides: Array<{
      bgImage: string;
      statLabel: string;
      statValue: string;
      title: string;
      location: string;
    }>;
  }>;
}

// ─── Sales Chart Data ─────────────────────────────────────────────────────────

export const salesChartData: SalesChartDataPoint[] = [
  { month: "Jan", valueA: 18, valueB: 30, valueC: 10 },
  { month: "Feb", valueA: 22, valueB: 15, valueC: 18 },
  { month: "Mar", valueA: 28, valueB: 35, valueC: 12 },
  { month: "Apr", valueA: 12, valueB: 20, valueC: 8 },
  { month: "May", valueA: 35, valueB: 42, valueC: 22 },
  { month: "Jun", valueA: 48, valueB: 30, valueC: 40 },
  { month: "Jul", valueA: 25, valueB: 38, valueC: 28 },
  { month: "Aug", valueA: 40, valueB: 22, valueC: 35 },
  { month: "Sep", valueA: 38, valueB: 45, valueC: 30 },
];

// ─── Financial Metrics ────────────────────────────────────────────────────────

export const financialMetrics: FinancialMetric[] = [
  {
    id: "total-inflow",
    label: "Total Inflow",
    amount: "₦120,000,000.00",
    icon: DashboardIcons.ChartArrow,
    change: "2.5%",
    isPositive: true,
    color: "blue",
  },
  {
    id: "mrr",
    label: "MRR",
    amount: "₦50,000,000.00",
    icon: DashboardIcons.ChartArrow,
    change: "2.5%",
    isPositive: true,
    color: "green",
  },
  {
    id: "payout",
    label: "Payout",
    amount: "₦200,000,000.00",
    icon: DashboardIcons.ChartArrow,
    change: "0.5%",
    isPositive: false,
    color: "orange",
  },
  {
    id: "riders-credit",
    label: "Total Riders' Credit",
    amount: "₦100,000,000.00",
    icon: DashboardIcons.ChartArrow,
    change: "0.5%",
    isPositive: true,
    color: "deepGreen",
  },
];

// ─── Overview Stats ───────────────────────────────────────────────────────────

export const overviewStats: OverviewStat[] = [
  {
    id: "listings",
    title: "Listings Overview",
    icon: "listings",
    metrics: [
      { label: "Total", value: "2.2k" },
      { label: "Published", value: "1.2k" },
      { label: "Unpublished", value: "1k" },
    ],
  },
  {
    id: "users",
    title: "User Overview",
    icon: "users",
    metrics: [
      { label: "Total", value: "20.7k" },
      { label: "Riders", value: "8.5k" },
      { label: "Subscribers", value: "7.5k" },
      { label: "Free Users", value: "3.3k" },
      { label: "Agent", value: "8.1k" },
      { label: "Developers", value: "1.5k" },
    ],
  },
];

// ─── Property Cards ───────────────────────────────────────────────────────────

export const propertyCards: PropertyCard[] = [
  {
    id: "total-visits",
    type: "total-visits",
    defaultMode: "overview",
    showChat: false,
    modes: [
      {
        value: "overview",
        label: "Overview",
        slides: [
          {
            bgImage: "/listingOne.webp",
            statLabel: "TOTAL SITE VISITS",
            statValue: "11k",
            title: "Traffic overview",
            location: "Last 7 days",
          },
          {
            bgImage: "/listingTwo.jpg",
            statLabel: "TOTAL SITE VISITS",
            statValue: "12.4k",
            title: "Traffic spikes during peak hours",
            location: "Ikoyi, Lagos",
          },
          {
            bgImage: "/building-brick.png",
            statLabel: "TOTAL SITE VISITS",
            statValue: "13.1k",
            title: "New visits after fresh listings",
            location: "Victoria Island, Lagos",
          },
        ],
      },
    ],
  },
  {
    id: "most-clicked",
    type: "most-clicked",
    defaultMode: "live",
    showChat: false,
    modes: [
      {
        value: "live",
        label: "Live Listings",
        slides: [
          {
            bgImage: "/listingTwo.jpg",
            statLabel: "MOST CLICKED",
            statValue: "40k",
            title: "Urban Prime Plaza Premiere",
            location: "Ikoyi, Lagos",
          },
          {
            bgImage: "/listingThree.jpg",
            statLabel: "MOST CLICKED",
            statValue: "41.2k",
            title: "Urban Prime Plaza Premiere - Sky Unit",
            location: "Ikoyi, Lagos",
          },
          {
            bgImage: "/listingFour.jpg",
            statLabel: "MOST CLICKED",
            statValue: "39.6k",
            title: "Urban Prime Plaza Premiere - Corner Suite",
            location: "Ikoyi, Lagos",
          },
        ],
      },
      {
        value: "all",
        label: "All Listings",
        slides: [
          {
            bgImage: "/building-brick.png",
            statLabel: "ALL LISTINGS",
            statValue: "128",
            title: "Urban Prime Collection",
            location: "Ikoyi, Lagos",
          },
          {
            bgImage: "/building-glass.png",
            statLabel: "ALL LISTINGS",
            statValue: "136",
            title: "Urban Prime Portfolio",
            location: "Lekki, Lagos",
          },
          {
            bgImage: "/listingOne.webp",
            statLabel: "ALL LISTINGS",
            statValue: "142",
            title: "Urban Prime Featured Homes",
            location: "Victoria Island, Lagos",
          },
        ],
      },
    ],
  },
  {
    id: "most-watchlisted",
    type: "most-watchlisted",
    defaultMode: "all",
    showChat: true,
    modes: [
      {
        value: "live",
        label: "Live Listings",
        slides: [
          {
            bgImage: "/listingFour.jpg",
            statLabel: "MOST WATCHLISTED",
            statValue: "20k",
            title: "Urban Prime Plaza Premiere",
            location: "Ikoyi, Lagos",
          },
          {
            bgImage: "/listingOne.webp",
            statLabel: "MOST WATCHLISTED",
            statValue: "21.3k",
            title: "Urban Prime Plaza Premiere - Penthouse",
            location: "Ikoyi, Lagos",
          },
          {
            bgImage: "/listingTwo.jpg",
            statLabel: "MOST WATCHLISTED",
            statValue: "22k",
            title: "Urban Prime Plaza Premiere - Garden Suite",
            location: "Ikoyi, Lagos",
          },
        ],
      },
      {
        value: "all",
        label: "All Listings",
        slides: [
          {
            bgImage: "/building-brick.png",
            statLabel: "ALL LISTINGS",
            statValue: "94",
            title: "Watchlist collection",
            location: "Lagos Mainland",
          },
          {
            bgImage: "/building-glass.png",
            statLabel: "ALL LISTINGS",
            statValue: "101",
            title: "Saved homes collection",
            location: "Lekki, Lagos",
          },
          {
            bgImage: "/listingThree.jpg",
            statLabel: "ALL LISTINGS",
            statValue: "110",
            title: "Top watched residences",
            location: "Victoria Island, Lagos",
          },
        ],
      },
    ],
  },
];

// ─── Nav Items ────────────────────────────────────────────────────────────────

export const navItems = [
  { id: "dashboard", label: "Dashboard", active: true },
  { id: "listings", label: "Listings", active: false },
  { id: "users", label: "Users", active: false },
  { id: "request", label: "Request", active: false },
  { id: "applications", label: "Applications", active: false },
  { id: "tasks", label: "Tasks", active: false },
] as const;

export type TimeRange = "1 Week" | "1 Month" | "1 Year";
export const timeRanges: TimeRange[] = ["1 Week", "1 Month", "1 Year"];
