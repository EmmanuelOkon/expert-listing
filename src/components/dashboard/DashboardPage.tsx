import { useState } from "react";
import { Header } from "./Header";
import NavTabs from "./NavTabs";
import { WelcomeHeader } from "./WelcomeHeader";
import { SalesOverviewCard } from "./SalesOverviewCard";
import { OverviewCard } from "./OverviewCard";
import { PropertyCard } from "./PropertyCard";
import { overviewStats, propertyCards } from "../../data/mockDashboardData";
import { Tabs, TabsContent } from "@/components/ui/tabs";
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
    <section className="mx-auto w-full max-w-[1400px] px-4 sm:px-5 md:px-6">
      <div className="flex min-h-[55vh] flex-col items-center justify-center gap-4 py-10 text-center sm:min-h-[60vh] md:py-14">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-green sm:text-base">
          {title}
        </p>
        <DashboardIcons.Construction
          className="h-20 w-20 text-primary-green sm:h-24 sm:w-24 md:h-32 md:w-32"
          aria-hidden="true"
        />
        <h2 className="text-2xl font-semibold text-primary-green sm:text-3xl">
          Coming soon
        </h2>
      </div>
    </section>
  );
}

function DashboardTabContent() {
  return (
    <main className="mx-auto w-full max-w-[1400px] px-4 py-4 sm:px-5 md:px-6 md:py-6">
      <WelcomeHeader firstName="Ahmed" />

      <div className="mb-6 grid grid-cols-1 gap-5 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <SalesOverviewCard />
        </div>

        <div className="flex flex-col gap-5 lg:col-span-4">
          {overviewStats.map((stat) => (
            <div key={stat.id} className="flex-1 flex flex-col">
              <OverviewCard stat={stat} />
            </div>
          ))}
        </div>
      </div>

      <div
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 lg:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Property cards"
      >
        {propertyCards.map((card) => (
          <div
            key={card.id}
            className="min-w-[85%] flex-[0_0_85%] snap-start sm:min-w-[72%] sm:flex-[0_0_72%] md:min-w-[56%] md:flex-[0_0_56%]"
          >
            <PropertyCard card={card} />
          </div>
        ))}
      </div>

      <div className="hidden gap-5 lg:grid lg:grid-cols-3">
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
        {/* <NavTabs activeTab={activeTab} /> */}
        <TabsContent
          value={activeTab}
          className="mt-0 w-full border-0 p-0 outline-none"
        >
          <AnimatePresence mode="wait">
            <motion.section
              key={activeTab}
              className="w-full py-5"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {activePanel}
            </motion.section>
          </AnimatePresence>
        </TabsContent>
      </Tabs>
    </div>
  );
}
