import { DashboardIcons } from "@/assets/icons/DashboardIcons";
import { URLS } from "@/utils/routes";
import { AdminTopNavList } from "@/utils/static";
import { Link } from "@tanstack/react-router";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Header() {
  const { LogoFull, LogoShort } = DashboardIcons;

  return (
    <header className="bg-primary-green sticky top-0 w-full z-[100]">
      <div className="mx-auto w-full max-w-[1400px] px-3 py-3 sm:px-4 md:px-6">
        <div className="flex min-h-11 items-center justify-between gap-3">
          <Link to={URLS.DASHBOARD_HOME} className="flex-shrink-0 outline-none">
            <LogoShort className="h-9 w-auto md:hidden" />
            <LogoFull className="hidden h-11 w-auto max-w-[200px] md:block" />
          </Link>

          <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
            {AdminTopNavList.map((item, index) => (
              <Link
                key={index}
                to={item.url}
                id={`header-icon-${index}`}
                className="inline-flex h-11 w-11 items-center justify-center rounded-md text-white/80 transition-all duration-150 hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-white/40 sm:h-9 sm:w-9"
              >
                <item.icon
                  className="h-5 w-5 text-red-600"
                  aria-hidden="true"
                />
              </Link>
            ))}

            <Avatar className="h-10 w-10 sm:h-9 sm:w-9">
              <AvatarImage
                src="/assets/images/profileImage.png"
                alt="Profile Preview"
                className="object-cover"
              />
              <AvatarFallback className="bg-white text-lg font-medium text-primary-green">
                D
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
}
