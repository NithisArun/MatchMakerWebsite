import {
  LayoutGrid,
  Users,
  Cloud,
  Coins,
  Wallet,
  Globe,
  Megaphone,
  Phone,
  Settings,
  LogOut,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeItem?: string;
}

const Sidebar = ({ activeItem = "Marketing" }: SidebarProps) => {
  const navigate = useNavigate();

  const navigationItems = [
    { icon: LayoutGrid, label: "Dashboard", href: "/dashboard" },
    { icon: Users, label: "Profiles", href: "/profiles" },
    { icon: Cloud, label: "Cloud Profiles", href: "/cloud-profiles" },
    { icon: Coins, label: "Subscription Plans", href: "/subscription-plans" },
    { icon: Wallet, label: "Wallet", href: "/wallet" },
    { icon: Globe, label: "Website", href: "/website" },
    { icon: Megaphone, label: "Marketing", href: "/marketing" },
    { icon: Users, label: "Users", href: "/users" },
    { icon: Phone, label: "Contact Us", href: "/contact-us" },
  ];

  const handleLogout = () => {
    // Clear any authentication data here if needed
    navigate("/");
  };

  return (
    <div className="w-[210px] h-screen bg-slate-900 flex flex-col">
      {/* Logo/Header Section */}
      <div className="h-[70px] bg-slate-800 opacity-50 flex items-center px-[26px]">
        <div className="text-white">
          <div className="font-barlow text-[20px] leading-[24px]">
            <span className="font-bold">MatchMakers </span>
            <span className="font-normal">Suite</span>
          </div>
          <div className="font-barlow text-[12px] leading-[14px] mt-[0px]">
            By Quantuva
          </div>
        </div>
      </div>

      {/* Add New Member Button */}
      <div className="px-[18px] pt-[11px] pb-[11px]">
        <button className="w-[174px] h-[34px] bg-blue-400 rounded text-sky-950 font-open-sans text-[11px] font-semibold">
          Add New Member
        </button>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 flex flex-col">
        <nav className="flex-1">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.label === activeItem;

            return (
              <Link
                key={item.label}
                to={item.href}
                className={cn(
                  "flex items-center gap-2 px-[26px] py-3 cursor-pointer",
                  isActive
                    ? "bg-slate-800 border-l-4 border-blue-400"
                    : "bg-slate-900 hover:bg-slate-800",
                )}
              >
                <Icon
                  size={20}
                  className={cn(isActive ? "text-blue-300" : "text-slate-300")}
                />
                <span
                  className={cn(
                    "font-open-sans text-[14px] leading-[16.8px]",
                    isActive ? "text-blue-300" : "text-slate-300",
                  )}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom Navigation */}
        <div className="mt-auto">
          <Link
            to="/settings"
            className="flex items-center gap-2 px-[26px] py-3 cursor-pointer bg-slate-900 hover:bg-slate-800 h-[44px]"
          >
            <Settings size={20} className="text-slate-300" />
            <span className="font-open-sans text-[14px] leading-[16.8px] text-slate-300">
              Settings
            </span>
          </Link>

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-[26px] py-3 cursor-pointer bg-slate-900 hover:bg-slate-800 h-[44px] text-left"
          >
            <LogOut size={20} className="text-slate-300" />
            <span className="font-open-sans text-[14px] leading-[16.8px] text-slate-300">
              Logout
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
