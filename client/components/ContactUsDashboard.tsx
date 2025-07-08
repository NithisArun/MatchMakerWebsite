import { useState } from "react";
import { Eye } from "lucide-react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { cn } from "@/lib/utils";

type ContactTab = "Email Setup" | "Contact Inquiry";

interface ContactInquiry {
  id: number;
  date: string;
  message: string;
  email: string;
  contactNo: string;
}

const ContactUsDashboard = () => {
  const [activeTab, setActiveTab] = useState<ContactTab>("Contact Inquiry");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const tabs: ContactTab[] = ["Email Setup", "Contact Inquiry"];

  // Sample contact inquiry data
  const contactInquiries: ContactInquiry[] = [
    {
      id: 1,
      date: "23/03/2025",
      message:
        "Few lines of message from the contact form Few lines of message from the contact form...",
      email: "sam@gmail.com",
      contactNo: "9988227733",
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Email Setup":
        return (
          <div className="space-y-6 p-6">
            {/* Contact Form Receiver Email ID Field */}
            <div className="w-[350px]">
              <div className="relative">
                <div className="flex flex-col bg-slate-50 rounded-t-[4px] border-b border-slate-800">
                  <div className="flex items-center px-4 py-3 h-[56px]">
                    <div className="flex-1">
                      <label className="text-slate-800 font-open-sans text-[14px] font-normal leading-[16.8px]">
                        Contact Form Receiver Email ID
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "Contact Inquiry":
        return (
          <div className="space-y-6">
            {/* Table Headers */}
            <div className="grid grid-cols-12 gap-4 px-6 py-3 text-slate-600 font-open-sans text-[11px] font-normal leading-[13.2px] uppercase border-b border-slate-300">
              <div className="col-span-2">Date</div>
              <div className="col-span-4">Message</div>
              <div className="col-span-2">Email</div>
              <div className="col-span-2">Contact No</div>
              <div className="col-span-2">Action</div>
            </div>

            {/* Table Rows */}
            {contactInquiries.map((inquiry) => (
              <div key={inquiry.id}>
                <div className="grid grid-cols-12 gap-4 px-6 py-3 text-slate-800 font-open-sans text-[14px] font-normal leading-[16.8px] border-b border-slate-300">
                  <div className="col-span-2">{inquiry.date}</div>
                  <div className="col-span-4">{inquiry.message}</div>
                  <div className="col-span-2">{inquiry.email}</div>
                  <div className="col-span-2">{inquiry.contactNo}</div>
                  <div className="col-span-2">
                    <button className="p-1 hover:bg-slate-100 rounded">
                      <Eye size={20} className="text-slate-700" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
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
            <Sidebar activeItem="Contact Us" />
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar activeItem="Contact Us" />
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <TopBar title="Contact Us" onMenuClick={() => setSidebarOpen(true)} />

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
                        ? "text-blue-900 border-blue-900 bg-white"
                        : "text-blue-800 border-transparent hover:text-blue-900",
                    )}
                  >
                    {tab}
                  </button>
                ))}
                <div className="flex-1 border-b border-slate-400" />
              </div>
            </div>

            {/* Tab Content */}
            <div
              className={cn(
                "min-h-[300px]",
                activeTab === "Contact Inquiry" ? "min-h-[500px]" : "",
              )}
            >
              {renderTabContent()}
            </div>

            {/* Save Button */}
            <div className="flex justify-end p-6">
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

export default ContactUsDashboard;
