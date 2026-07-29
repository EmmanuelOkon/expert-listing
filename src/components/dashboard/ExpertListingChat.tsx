import { DashboardIcons } from "#/assets/icons/DashboardIcons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface ExpertListingChatProps {
  visible?: boolean;
}

export function ExpertListingChat({ visible = true }: ExpertListingChatProps) {
  if (!visible) {
    return null;
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          id="dashboard-chat-trigger"
          aria-label="Open chat"
          className="fixed bottom-4 right-4 z-[80] flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-[#242526] p-2 shadow-lg transition-all duration-200 hover:scale-105 sm:bottom-5 sm:right-5 md:bottom-6 md:right-6 md:h-13 md:w-13 cursor-pointer"
        >
          <DashboardIcons.Chat
            className="h-6 w-6 text-white sm:h-7 sm:w-7"
            aria-hidden="true"
          />
        </button>
      </PopoverTrigger>

      <PopoverContent
        side="left"
        align="end"
        sideOffset={14}
        collisionPadding={16}
        className="w-[min(16rem,calc(100vw-1.5rem))] rounded-2xl border border-[#E5E7EB] bg-white p-4 shadow-xl sm:w-72"
      >
        <div className="space-y-2">
          <p className="text-sm font-semibold text-[#101828]">Coming soon</p>
          <p className="text-sm leading-6 text-[#667085]">
            Chat support for Expert Listing is on the way.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
}
