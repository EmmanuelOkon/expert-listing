import { DashboardIcons } from "@/assets/icons/DashboardIcons";
import { URLS } from "@/utils/routes";
import { AdminTopNavList } from "@/utils/static";
import { Link } from "@tanstack/react-router";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import {
//   Popover,
//   PopoverContent,
//   PopoverDescription,
//   PopoverHeader,
//   PopoverTitle,
//   PopoverTrigger,
// } from "@/components/ui/popover";

export function Header() {
  const { LogoFull, LogoShort } = DashboardIcons;

  return (
    <header className="bg-primary-green sticky top-0 w-full z-[100]">
      <div className="2xl:max-w-360 lg:max-w-[1280px] mx-auto px-4 py-3">
        <div className="flex items-center justify-between h-[46px]">
          <Link to={URLS.DASHBOARD_HOME} className="flex-shrink-0 outline-none">
            <LogoShort className="h-[38px] w-auto md:hidden" />
            <LogoFull className="hidden h-[45px] w-auto max-w-[200px] md:block" />
          </Link>

          <div className="flex items-center gap-3 md:gap-4">
            {AdminTopNavList.map((item, index) => (
              <Link
                key={index}
                to={item.url}
                id={`header-icon-${index}`}
                className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-md text-white/80 hover:text-white hover:bg-white/10 transition-all duration-150 cursor-pointer"
              >
                <item.icon className="text-red-600" />
              </Link>
            ))}

            <Avatar className="h-9 w-9">
              <AvatarImage
                src="/assets/images/profileImage.png"
                alt="Profile Preview"
                className="object-cover"
              />
              <AvatarFallback className="bg-white text-primary-green text-xl font-medium">
                D
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
}
