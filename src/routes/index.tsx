import { createFileRoute, redirect } from "@tanstack/react-router";
import { URLS } from "@/utils/routes";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ to: URLS.DASHBOARD_HOME });
  },
});
