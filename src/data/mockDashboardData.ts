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
  statLabel: string;
  statValue: string;
  title?: string;
  location?: string;
  bgImage: string;
  badges?: Array<{ label: string; active: boolean }>;
  showNav?: boolean;
  showChat?: boolean;
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
    statLabel: "TOTAL SITE VISITS",
    statValue: "11k",
    bgImage: "/listingOne.webp",
    showNav: false,
    showChat: false,
  },
  {
    id: "most-clicked",
    type: "most-clicked",
    statLabel: "MOST CLICKED",
    statValue: "40k",
    title: "Urban Prime Plaza Premiere",
    location: "Ikoyi, Lagos",
    bgImage: "/listingTwo.jpg",
    badges: [
      { label: "Live Listings", active: true },
      { label: "All Listings", active: false },
    ],
    showNav: true,
    showChat: false,
  },
  {
    id: "most-clicked",
    type: "most-clicked",
    statLabel: "MOST CLICKED",
    statValue: "40k",
    title: "Urban Prime Plaza Premiere",
    location: "Ikoyi, Lagos",
    bgImage: "/listingThree.jpg",
    badges: [
      { label: "Live Listings", active: true },
      { label: "All Listings", active: false },
    ],
    showNav: true,
    showChat: false,
  },
  {
    id: "most-watchlisted",
    type: "most-watchlisted",
    statLabel: "MOST WATCHLISTED",
    statValue: "20k",
    title: "Urban Prime Plaza Premiere",
    location: "Ikoyi, Lagos",
    bgImage: "/listingFour.jpg",
    badges: [
      { label: "Live Listings", active: false },
      { label: "All Listings", active: true },
    ],
    showNav: true,
    showChat: true,
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
