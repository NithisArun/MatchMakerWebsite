import { useState } from "react";
import { Upload, Copy } from "lucide-react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

const WebsiteDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
            <Sidebar activeItem="Website" />
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar activeItem="Website" />
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <TopBar title="Website" onMenuClick={() => setSidebarOpen(true)} />

        {/* Content Area */}
        <div className="p-6">
          {/* Business Details Section */}
          <div className="bg-white rounded-[10px] border border-slate-200 mb-6 p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Business Name */}
                <div className="w-full">
                  <div className="relative">
                    <div className="flex flex-col bg-slate-50 rounded-t-[4px] border-b border-slate-800">
                      <div className="flex items-center px-4 py-3 h-[56px]">
                        <div className="flex-1">
                          <label className="text-slate-800 font-open-sans text-[14px] font-normal leading-[16.8px]">
                            Business Name
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Contact No and Owner Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="w-full">
                    <div className="relative">
                      <div className="flex flex-col bg-slate-50 rounded-t-[4px] border-b border-slate-800">
                        <div className="flex items-center px-4 py-3 h-[56px]">
                          <div className="flex-1">
                            <label className="text-slate-800 font-open-sans text-[14px] font-normal leading-[16.8px]">
                              Business Contact No
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="relative">
                      <div className="flex flex-col bg-slate-50 rounded-t-[4px] border-b border-slate-800">
                        <div className="flex items-center px-4 py-3 h-[56px]">
                          <div className="flex-1">
                            <label className="text-slate-800 font-open-sans text-[14px] font-normal leading-[16.8px]">
                              Owner Name
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Owner Contact No and WhatsApp Contact No */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="w-full">
                    <div className="relative">
                      <div className="flex flex-col bg-slate-50 rounded-t-[4px] border-b border-slate-800">
                        <div className="flex items-center px-4 py-3 h-[56px]">
                          <div className="flex-1">
                            <label className="text-slate-800 font-open-sans text-[14px] font-normal leading-[16.8px]">
                              Owner Contact No
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="relative">
                      <div className="flex flex-col bg-slate-50 rounded-t-[4px] border-b border-slate-800">
                        <div className="flex items-center px-4 py-3 h-[56px]">
                          <div className="flex-1">
                            <label className="text-slate-800 font-open-sans text-[14px] font-normal leading-[16.8px]">
                              Whatsapp Contact No
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Logo Upload */}
              <div className="flex flex-col items-center justify-center space-y-4">
                <button className="flex items-center gap-2 px-4 py-2 border border-blue-900 text-blue-900 rounded-full font-open-sans text-[14px] leading-[16.8px] h-[48px]">
                  <Upload size={20} />
                  Upload Logo
                </button>
                <p className="text-black font-open-sans text-[11px] leading-[13.2px]">
                  Logo Size : 250*50 px
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 mt-6">
              <button className="px-4 py-2 text-blue-900 rounded-full font-open-sans text-[14px] leading-[16.8px] h-[48px] min-w-[66px]">
                Clear
              </button>
              <button className="bg-blue-900 text-white px-4 py-2 rounded-full font-open-sans text-[14px] leading-[16.8px] h-[48px] min-w-[63px]">
                Save
              </button>
            </div>
          </div>

          {/* Domain Configuration Section */}
          <div className="bg-white rounded-[10px] border border-slate-200 p-6">
            <div className="space-y-6">
              {/* Domain Name */}
              <div className="w-full max-w-[546px]">
                <div className="relative">
                  <div className="flex flex-col bg-slate-50 rounded-t-[4px] border-b border-slate-800">
                    <div className="flex items-center px-4 py-3 h-[56px]">
                      <div className="flex-1">
                        <label className="text-slate-800 font-open-sans text-[14px] font-normal leading-[16.8px]">
                          Domain Name
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Buy New Domain Button */}
              <div className="flex justify-start">
                <button className="bg-blue-100 text-blue-900 px-4 py-2 rounded-full font-open-sans text-[14px] leading-[16.8px] h-[48px] min-w-[145px]">
                  Buy New Domain
                </button>
              </div>

              {/* CNAME Field */}
              <div className="w-full max-w-[546px] relative">
                <div className="relative">
                  <div className="flex flex-col bg-slate-100 rounded-t-[4px] border-b border-slate-800 opacity-60">
                    <div className="flex items-center px-4 py-3 h-[56px]">
                      <div className="flex-1">
                        <label className="text-slate-600 font-open-sans text-[14px] font-normal leading-[16.8px]">
                          Cname
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 hover:bg-slate-100 rounded">
                  <Copy size={20} className="text-slate-600" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 mt-6">
              <button className="px-4 py-2 text-blue-900 rounded-full font-open-sans text-[14px] leading-[16.8px] h-[48px] min-w-[66px]">
                Clear
              </button>
              <button className="bg-blue-900 text-white px-4 py-2 rounded-full font-open-sans text-[14px] leading-[16.8px] h-[48px] min-w-[63px]">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteDashboard;
