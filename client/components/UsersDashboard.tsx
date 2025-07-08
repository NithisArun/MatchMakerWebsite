import { useState } from "react";
import { Edit, Trash2 } from "lucide-react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { cn } from "@/lib/utils";

type UsersTab = "Users" | "Roles";

interface User {
  id: number;
  name: string;
  email: string;
  mobile: string;
  role: string;
  status: "Active" | "Inactive";
}

interface Role {
  id: number;
  name: string;
  createdOn: string;
  status: "Active" | "Inactive";
}

const UsersDashboard = () => {
  const [activeTab, setActiveTab] = useState<UsersTab>("Users");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const tabs: UsersTab[] = ["Users", "Roles"];

  // Sample data
  const users: User[] = [
    {
      id: 1,
      name: "Sumanth",
      email: "Sumanth@gmail.com",
      mobile: "8844993399",
      role: "Manager",
      status: "Active",
    },
  ];

  const roles: Role[] = [
    {
      id: 1,
      name: "Manager",
      createdOn: "Jan 23, 2025",
      status: "Active",
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "Users":
        return (
          <div className="space-y-6">
            {/* Add User Button */}
            <div className="flex justify-end mb-4">
              <button className="bg-blue-900 text-white px-3 py-1.5 rounded-full text-[14px] font-open-sans leading-[16.8px] hover:bg-blue-800 transition-colors min-w-[85px] h-[48px]">
                Add User
              </button>
            </div>

            {/* Table Header */}
            <div className="w-full">
              <div className="border-b border-slate-300 pb-4">
                <div className="grid grid-cols-12 gap-4 text-[11px] font-open-sans text-slate-600 uppercase">
                  <div className="col-span-1 pl-8">S No</div>
                  <div className="col-span-2">Name</div>
                  <div className="col-span-3">Email ID</div>
                  <div className="col-span-2">Mobile</div>
                  <div className="col-span-1">Role</div>
                  <div className="col-span-1">Status</div>
                  <div className="col-span-2">Actions</div>
                </div>
              </div>

              {/* Table Content */}
              <div className="space-y-0">
                {users.map((user) => (
                  <div
                    key={user.id}
                    className="grid grid-cols-12 gap-4 py-4 border-b border-slate-300 items-center"
                  >
                    <div className="col-span-1 pl-8 text-[14px] font-open-sans text-slate-800">
                      {user.id}
                    </div>
                    <div className="col-span-2 text-[14px] font-open-sans text-slate-800">
                      {user.name}
                    </div>
                    <div className="col-span-3 text-[14px] font-open-sans text-slate-800">
                      {user.email}
                    </div>
                    <div className="col-span-2 text-[14px] font-open-sans text-slate-800">
                      {user.mobile}
                    </div>
                    <div className="col-span-1 text-[14px] font-open-sans text-slate-800">
                      {user.role}
                    </div>
                    <div className="col-span-1">
                      <span className="inline-flex items-center px-2 py-1 rounded-lg border border-lime-200 bg-lime-50 text-green-700 text-[14px] font-open-sans font-semibold">
                        {user.status}
                      </span>
                    </div>
                    <div className="col-span-2 flex items-center gap-2">
                      {/* Toggle Switch */}
                      <div className="flex items-center">
                        <div className="w-[52px] h-[32px] bg-green-600 rounded-full flex items-center justify-end px-1">
                          <div className="w-[24px] h-[24px] bg-white rounded-full"></div>
                        </div>
                      </div>
                      {/* Edit Button */}
                      <button className="w-[48px] h-[48px] flex items-center justify-center rounded-full hover:bg-slate-100">
                        <Edit size={20} className="text-blue-900" />
                      </button>
                      {/* Delete Button */}
                      <button className="w-[48px] h-[48px] flex items-center justify-center rounded-full hover:bg-slate-100">
                        <Trash2 size={20} className="text-blue-900" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "Roles":
        return (
          <div className="space-y-6">
            {/* Add User Button */}
            <div className="flex justify-end mb-4">
              <button className="bg-blue-900 text-white px-3 py-1.5 rounded-full text-[14px] font-open-sans leading-[16.8px] hover:bg-blue-800 transition-colors min-w-[85px] h-[48px]">
                Add User
              </button>
            </div>

            {/* Table Header */}
            <div className="w-full">
              <div className="border-b border-slate-300 pb-4">
                <div className="grid grid-cols-12 gap-4 text-[11px] font-open-sans text-slate-600 uppercase">
                  <div className="col-span-1 pl-8">S No</div>
                  <div className="col-span-3">Role Name</div>
                  <div className="col-span-3"></div>
                  <div className="col-span-2">Created On</div>
                  <div className="col-span-1">Status</div>
                  <div className="col-span-2">Actions</div>
                </div>
              </div>

              {/* Table Content */}
              <div className="space-y-0">
                {roles.map((role) => (
                  <div
                    key={role.id}
                    className="grid grid-cols-12 gap-4 py-4 border-b border-slate-300 items-center"
                  >
                    <div className="col-span-1 pl-8 text-[14px] font-open-sans text-slate-800">
                      {role.id}
                    </div>
                    <div className="col-span-3 text-[14px] font-open-sans text-slate-800">
                      {role.name}
                    </div>
                    <div className="col-span-3"></div>
                    <div className="col-span-2 text-[14px] font-open-sans text-slate-800">
                      {role.createdOn}
                    </div>
                    <div className="col-span-1">
                      <span className="inline-flex items-center px-2 py-1 rounded-lg border border-lime-200 bg-lime-50 text-green-700 text-[14px] font-open-sans font-semibold">
                        {role.status}
                      </span>
                    </div>
                    <div className="col-span-2 flex items-center gap-2">
                      {/* Toggle Switch */}
                      <div className="flex items-center">
                        <div className="w-[52px] h-[32px] bg-green-600 rounded-full flex items-center justify-end px-1">
                          <div className="w-[24px] h-[24px] bg-white rounded-full"></div>
                        </div>
                      </div>
                      {/* Delete Button */}
                      <button className="w-[48px] h-[48px] flex items-center justify-center rounded-full hover:bg-slate-100">
                        <Trash2 size={20} className="text-blue-900" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
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
        <Sidebar activeItem="Users" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <TopBar title="User" onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        {/* Content Area */}
        <div className="flex-1 p-4 lg:p-[22px]">
          <div className="bg-white rounded-[10px] border border-slate-200 min-h-[calc(100vh-140px)] lg:min-h-[787px]">
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
                        ? "text-blue-800"
                        : "text-slate-600 hover:bg-slate-50",
                    )}
                  >
                    {tab}
                    {activeTab === tab && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-16px)] h-[3px] bg-blue-800 rounded-t-full" />
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

export default UsersDashboard;
