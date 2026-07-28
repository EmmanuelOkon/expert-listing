import { DashboardIcons } from "@/assets/icons/DashboardIcons";

import { URLS } from "./routes";

export interface NavbarProps {
  title: string | React.ReactNode;
  url: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  value?: string;
}

export type NavTabProps = Omit<NavbarProps, "value"> & {
  value: string;
};

export const AdminNavList: NavTabProps[] = [
  {
    title: "Dashboard",
    url: URLS.DASHBOARD_HOME,
    icon: DashboardIcons.Home,
    value: "dashboard",
  },
  {
    title: "Listings",
    url: URLS.DASHBOARD_LISTINGS,
    icon: DashboardIcons.Toolbox,
    value: "listings",
  },
  {
    title: "Users",
    url: URLS.DASHBOARD_USERS,
    icon: DashboardIcons.Profile,
    value: "users",
  },
  {
    title: "Request",
    url: URLS.DASHBOARD_REQUEST,
    icon: DashboardIcons.Article,
    value: "request",
  },
  {
    title: "Applications",
    url: URLS.DASHBOARD_APPLICATIONS,
    icon: DashboardIcons.Scroll,
    value: "applications",
  },
  {
    title: "Tasks",
    url: URLS.DASHBOARD_TASKS,
    icon: DashboardIcons.TaskSquare,
    value: "tasks",
  },
];

export const AdminTopNavList: NavbarProps[] = [
  {
    title: "Messages",
    url: URLS.DASHBOARD_MESSAGES,
    icon: DashboardIcons.Messages,
  },
  {
    title: "Search",
    url: URLS.DASHBOARD_SEARCH,
    icon: DashboardIcons.SearchStatus,
  },
  {
    title: "Waitlist",
    url: URLS.DASHBOARD_WAITLIST,
    icon: DashboardIcons.Waitlist,
  },
  {
    title: "Payout Center",
    url: URLS.DASHBOARD_PAYOUT_CENTER,
    icon: DashboardIcons.PayoutCenter,
  },
  {
    title: "Marketplace",
    url: URLS.DASHBOARD_MARKETPLACE,
    icon: DashboardIcons.Marketplace,
  },
];
