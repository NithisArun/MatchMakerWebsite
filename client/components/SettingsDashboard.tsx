import { useState } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { cn } from "@/lib/utils";

type SettingsTab = "Personal Details" | "Business Details" | "Subscription";

const SettingsDashboard = () => {
  const [activeTab, setActiveTab] = useState<SettingsTab>("Personal Details");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const tabs: SettingsTab[] = [
    "Personal Details",
    "Business Details",
    "Subscription",
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Personal Details":
        return (
          <div className="space-y-6 p-6">
            <div className="text-slate-600 font-open-sans text-[14px]">
              Personal details content will be implemented here.
            </div>
          </div>
        );

      case "Business Details":
        return (
          <div className="space-y-6 p-6">
            <div className="text-slate-600 font-open-sans text-[14px]">
              Business details content will be implemented here.
            </div>
          </div>
        );

      case "Subscription":
        return (
          <div className="space-y-6 p-6">
            <div className="text-slate-600 font-open-sans text-[14px]">
              Subscription content will be implemented here.
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="fixed left-0 top-0 h-full">
            <Sidebar activeItem="Settings" />
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar activeItem="Settings" />
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <TopBar title="Settings" onMenuClick={() => setSidebarOpen(true)} />

        {/* Content Area */}
        <div className="p-6">
          <div className="bg-white rounded-[10px] border border-slate-200">
            {/* Tabs */}
            <div className="border-b border-slate-200">
              <div className="flex">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "px-4 py-3 text-[14px] font-open-sans font-normal leading-[16.8px] border-b-2 transition-colors",
                      activeTab === tab
                        ? "text-blue-800 border-blue-800 bg-white"
                        : "text-blue-900 border-transparent hover:text-blue-800",
                    )}
                  >
                    {tab}
                  </button>
                ))}
                <div className="flex-1 border-b border-slate-400" />
              </div>
            </div>

            {/* Tab Content */}
            <div className="min-h-[300px]">{renderTabContent()}</div>

            {/* Search Button */}
            <div className="flex justify-end p-6">
              <button className="bg-blue-900 text-white px-4 py-2 rounded-full font-open-sans text-[14px] leading-[16.8px] h-[48px] min-w-[77px]">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsDashboard;
