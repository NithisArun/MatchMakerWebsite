import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import RichTextEditor from "./RichTextEditor";
import { cn } from "@/lib/utils";

type MarketingTab = "Email Marketing" | "SMS Marketing" | "WhatsApp Marketing";

const MarketingDashboard = () => {
  const [activeTab, setActiveTab] = useState<MarketingTab>("Email Marketing");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const tabs: MarketingTab[] = [
    "Email Marketing",
    "SMS Marketing",
    "WhatsApp Marketing",
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Email Marketing":
        return (
          <div className="space-y-6">
            {/* Select Contacts Field */}
            <div className="w-full">
              <div className="relative">
                <div className="flex flex-col bg-slate-50 rounded-t-[4px] border-b border-slate-800">
                  <div className="flex items-center px-4 py-3 h-[56px]">
                    <div className="flex-1">
                      <label className="text-slate-800 font-open-sans text-[14px] font-normal leading-[16.8px]">
                        Select Contacts
                      </label>
                    </div>
                    <button className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-slate-100">
                      <ChevronDown size={24} className="text-slate-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Rich Text Editor */}
            <RichTextEditor />
          </div>
        );

      case "SMS Marketing":
        return (
          <div className="space-y-6">
            {/* Select Contacts Field */}
            <div className="w-full">
              <div className="relative">
                <div className="flex flex-col bg-slate-50 rounded-t-[4px] border-b border-slate-800">
                  <div className="flex items-center px-4 py-3 h-[56px]">
                    <div className="flex-1">
                      <label className="text-slate-800 font-open-sans text-[14px] font-normal leading-[16.8px]">
                        Select Contacts
                      </label>
                    </div>
                    <button className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-slate-100">
                      <ChevronDown size={24} className="text-slate-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Transactional ID Field */}
            <div className="w-full max-w-[350px]">
              <div className="relative">
                <div className="flex flex-col bg-slate-50 rounded-t-[4px] border-b border-slate-800">
                  <div className="flex items-center px-4 py-3 h-[56px]">
                    <div className="flex-1">
                      <label className="text-slate-800 font-open-sans text-[14px] font-normal leading-[16.8px]">
                        Transactional ID
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Message Content Area */}
            <div className="w-full h-[172px] border border-slate-300 rounded-lg bg-white"></div>

            {/* Send Button */}
            <div className="flex justify-end pt-4">
              <button className="bg-blue-900 text-white px-4 py-2.5 rounded-full text-[14px] font-open-sans leading-[16.8px] hover:bg-blue-800 transition-colors min-w-[65px]">
                Send
              </button>
            </div>
          </div>
        );

      case "WhatsApp Marketing":
        return (
          <div className="space-y-6">
            {/* Select Contacts Field */}
            <div className="w-full">
              <div className="relative">
                <div className="flex flex-col bg-slate-50 rounded-t-[4px] border-b border-slate-800">
                  <div className="flex items-center px-4 py-3 h-[56px]">
                    <div className="flex-1">
                      <label className="text-slate-800 font-open-sans text-[14px] font-normal leading-[16.8px]">
                        Select Contacts
                      </label>
                    </div>
                    <button className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-slate-100">
                      <ChevronDown size={24} className="text-slate-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Message Content Area */}
            <div className="w-full h-[172px] border border-slate-300 rounded-lg bg-white"></div>

            {/* Send Button */}
            <div className="flex justify-end pt-4">
              <button className="bg-blue-900 text-white px-4 py-2.5 rounded-full text-[14px] font-open-sans leading-[16.8px] hover:bg-blue-800 transition-colors min-w-[65px]">
                Send
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed lg:relative z-50 transition-transform duration-300 ease-in-out lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <Sidebar activeItem="Marketing" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <TopBar
          title="Marketing"
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        />

        {/* Content Area */}
        <div className="flex-1 p-4 lg:p-[22px]">
          <div className="bg-white rounded-[10px] border border-slate-200 min-h-[calc(100vh-140px)] lg:min-h-[783px]">
            {/* Tab Navigation */}
            <div className="border-b">
              <div className="flex overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "px-4 py-3 text-[14px] font-open-sans relative whitespace-nowrap flex-shrink-0",
                      activeTab === tab
                        ? "text-blue-900"
                        : "text-blue-800 hover:bg-slate-50",
                    )}
                  >
                    {tab}
                    {activeTab === tab && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-16px)] h-[3px] bg-blue-900 rounded-t-full" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-4 lg:p-8">{renderTabContent()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingDashboard;
