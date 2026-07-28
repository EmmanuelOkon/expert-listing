import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { buildRootMeta, buildRootSeoLinks } from "../lib/site-meta";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";

import TanStackQueryDevtools from "../integrations/tanstack-query/devtools";
// import NotFound from '../components/shared/NotFound'

import appCss from "../styles.css?url";

import type { QueryClient } from "@tanstack/react-query";
import NotFound from "../components/shared/NotFound";

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: buildRootMeta() as any,
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      ...buildRootSeoLinks(),
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: () => (
    <NotFound
      title="Page not found"
      subtitle="Page Not Found"
      description="The page you are looking for doesn't exist or has been moved."
      backText="Back to Dashboard"
    />
  ),
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
            TanStackQueryDevtools,
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
