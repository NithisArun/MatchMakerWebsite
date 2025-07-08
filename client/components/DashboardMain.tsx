import { useState } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { cn } from "@/lib/utils";

interface StatCard {
  title: string;
  value: string;
  borderColor: string;
}

const DashboardMain = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const statCards: StatCard[] = [
    {
      title: "Total Members Registered",
      value: "5000",
      borderColor: "border-l-green-700",
    },
    {
      title: "Free Members",
      value: "3000",
      borderColor: "border-l-green-700",
    },
    {
      title: "Premium Members",
      value: "2000",
      borderColor: "border-l-green-700",
    },
    {
      title: "Cloud Members",
      value: "1,50,000",
      borderColor: "border-l-green-700",
    },
    {
      title: "Male Members",
      value: "2500",
      borderColor: "border-l-green-700",
    },
    {
      title: "Female Members",
      value: "2500",
      borderColor: "border-l-green-700",
    },
    {
      title: "Referral Earnings",
      value: "₹5000",
      borderColor: "border-l-green-700",
    },
    {
      title: "Wallet Balance",
      value: "₹5000",
      borderColor: "border-l-green-700",
    },
  ];

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <div
        className={cn(
          "fixed lg:relative z-50 transition-transform duration-300 ease-in-out lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <Sidebar activeItem="Dashboard" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <TopBar
          title="Dashboard"
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        />

        {/* Content Area */}
        <div className="flex-1 p-4 lg:p-[22px]">
          <div className="max-w-7xl mx-auto">
            {/* Statistics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {statCards.map((card, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-lg shadow-sm border-l-[6px] ${card.borderColor} p-6`}
                >
                  <div className="flex flex-col space-y-3">
                    <h3 className="text-sm font-semibold text-slate-700 leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-3xl font-normal text-slate-900 leading-tight">
                      {card.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Overlay for Mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default DashboardMain;
