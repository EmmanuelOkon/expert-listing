import { useState } from "react";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AdminNavList } from "#/utils/static";
import { motion } from "framer-motion";

const NavTabs = ({
  defaultValue = AdminNavList[0]?.value,
}: {
  defaultValue?: string;
}) => {
  const [activeTab, setActiveTab] = useState(defaultValue);
  return (
    <nav
      aria-label="Dashboard sections"
      className="w-full h-16.75 border-b border-[#F4F4F5] bg-white "
    >
      <div className="mx-auto w-full 2xl:max-w-360 lg:max-w-[1280px] px-4 sm:px-5 md:px-6 h-full flex flex-row justify-between items-center">
        <TabsList
          className="flex h-full w-full max-w-310 mx-auto items-center justify-between bg-transparent rounded-none p-0"
          // className="flex w-full lg:h-9.5 min-w-max items-center gap-1 overflow-x-auto rounded-none bg-transparent px-0 py-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {AdminNavList.map((tab) => {
            const isActive = activeTab === tab.value;
            return (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className="relative h-9.5 inline-flex items-center justify-center border-b-2 border-transparent  text-sm text-deep-gray data-[state=active]:text-primary-green data-[state=active]:shadow-none cursor-pointer transition-colors duration-200 text-semibold hover:text-primary-green px-6! flex-none"
                // className="relative inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl border-b-2 border-transparent px-4 text-sm font-medium text-[#6A7282] transition-colors duration-200 hover:text-primary-green focus-visible:ring-2 focus-visible:ring-primary-green/30 data-[state=active]:border-primary-green data-[state=active]:text-primary-green data-[state=active]:shadow-none"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-[#176D5826] rounded-md z-0"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                )}
                <tab.icon className="h-4 w-4" aria-hidden="true" />
                <span className="whitespace-nowrap">{tab.title}</span>
              </TabsTrigger>
            );
          })}
        </TabsList>
      </div>
    </nav>
  );
};

export default NavTabs;
