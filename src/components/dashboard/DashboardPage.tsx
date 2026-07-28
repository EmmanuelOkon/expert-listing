import { useState } from "react";
import { Header } from "./Header";
import NavTabs from "./NavTabs";
import { WelcomeHeader } from "./WelcomeHeader";
import { SalesOverviewCard } from "./SalesOverviewCard";
import { OverviewCard } from "./OverviewCard";
import { PropertyCard } from "./PropertyCard";
import { overviewStats, propertyCards } from "../../data/mockDashboardData";
import { Tabs } from "@/components/ui/tabs";
import { AdminNavList } from "#/utils/static";
import { AnimatePresence, motion } from "framer-motion";
import { DashboardIcons } from "#/assets/icons/DashboardIcons";

const tabPlaceholderCopy: Record<string, { title: string }> = {
  listings: {
    title: "Listings",
  },
  users: {
    title: "Users",
  },
  request: {
    title: "Request",
  },
  applications: {
    title: "Applications",
  },
  tasks: {
    title: "Tasks",
  },
};

function TabPlaceholder({ title }: { title: string }) {
  return (
    <section className="max-w-[1400px] mx-auto w-full px-4 md:px-6">
      <div className="min-h-[calc(100vh-180px)] flex flex-col items-center justify-center h-full my-auto ">
        <p className="text-2xl font-bold text-primary-green uppercase tracking[0.2em]">
          {title}
        </p>
        <DashboardIcons.Construction className="w-32 text-primary-green" />
        <h2 className="mt-2 text-2xl font-semibold text-primary-green ">
          Coming soon
        </h2>
      </div>
    </section>
  );
}

function DashboardTabContent() {
  return (
    <main className="2xl:max-w-360 lg:max-w-[1280px] mx-auto px-4 ">
      <WelcomeHeader firstName="Ahmed" />

      <div className="grid grid-cols-1 lg:grid-cols-12 max-w-7xl gap-5 mb-6 w-full">
        <div className="lg:col-span-8">
          <SalesOverviewCard />
        </div>

        <div className="lg:col-span-4 flex flex-col gap-5">
          {overviewStats.map((stat) => (
            <div key={stat.id} className="flex-1 flex flex-col">
              <OverviewCard stat={stat} />
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {propertyCards.map((card) => (
          <PropertyCard key={card.id} card={card} />
        ))}
      </div>
    </main>
  );
}

export function DashboardPage() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const activeTabConfig = AdminNavList.find((tab) => tab.value === activeTab);

  const activePanel = (() => {
    if (activeTab === "dashboard") {
      return <DashboardTabContent />;
    }

    const placeholder = tabPlaceholderCopy[activeTab];

    return (
      <TabPlaceholder
        title={
          placeholder?.title ?? String(activeTabConfig?.title ?? activeTab)
        }
      />
    );
  })();

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <Header />

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="justify-start p-0"
      >
        <NavTabs />
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="py-5">{activePanel}</div>
          </motion.div>
        </AnimatePresence>
      </Tabs>
    </div>
  );
}
