// import { TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { AdminNavList } from "#/utils/static";

// const NavTabs = () => {
//   return (
//     <div className="bg-white h-16.75 border-b border-[#F4F4F5] flex flex-row w-full justify-between items-center px-4">
//       <TabsList className="flex h-full w-full max-w-310 mx-auto items-center justify-between bg-transparent rounded-none p-0">
//         {AdminNavList.map((tab) => (
//           <TabsTrigger
//             key={tab.value}
//             value={tab.value}
//             className="h-9.5 inline-flex items-center justify-center gap-2 rounded-md border-b-2 border-transparent px-5 text-sm text-deep-gray data-[state=active]:text-primary-green data-[state=active]:shadow-none data-[state=active]:bg-[#176D5826]  group-data-[orientation=horizontal]/tabs:after:bg-primary-gold cursor-pointer hover:bg-[#176D5826]/60 transition-all ease-in-out duration-300 text-semibold hover:text-primary-green"
//           >
//             <tab.icon className="h-5 w-5" />
//             <span>{tab.title}</span>
//           </TabsTrigger>
//         ))}
//       </TabsList>
//     </div>
//   );
// };

// export default NavTabs;

import { useState } from "react";
import { motion } from "framer-motion";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AdminNavList } from "#/utils/static";

const NavTabs = ({
  defaultValue = AdminNavList[0]?.value,
}: {
  defaultValue?: string;
}) => {
  // Track active state to trigger the Framer Motion animation
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <div className="bg-white h-16.75 border-b border-[#F4F4F5] flex flex-row w-full justify-between items-center px-4">
      <TabsList className="flex h-full w-full max-w-310 mx-auto items-center justify-between bg-transparent rounded-none p-0">
        {AdminNavList.map((tab) => {
          const isActive = activeTab === tab.value;

          return (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className="relative h-9.5 inline-flex items-center justify-center border-b-2 border-transparent  text-sm text-deep-gray data-[state=active]:text-primary-green data-[state=active]:shadow-none cursor-pointer transition-colors duration-200 text-semibold hover:text-primary-green px-6! flex-none"
            >
              {/* Sliding background highlight */}
              {isActive && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 bg-[#176D5826] rounded-md z-0"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                />
              )}

              {/* Tab Icon & Label layered above the sliding background */}
              <span className="relative z-10 flex items-center gap-2">
                <tab.icon className="h-5 w-5" />
                <span>{tab.title}</span>
              </span>
            </TabsTrigger>
          );
        })}
      </TabsList>
    </div>
  );
};

export default NavTabs;
