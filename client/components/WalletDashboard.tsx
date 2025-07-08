import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { cn } from "@/lib/utils";

interface EarningRecord {
  id: number;
  date: string;
  description: string;
  status: "Success";
  earningType: "Subscription";
  credit: number;
  withdrawal?: number;
}

interface EarningCard {
  title: string;
  amount: number;
  borderColor: string;
}

const WalletDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const earningCards: EarningCard[] = [
    {
      title: "Total Earnings",
      amount: 5000,
      borderColor: "border-l-purple-400",
    },
    {
      title: "Referral Earnings",
      amount: 5000,
      borderColor: "border-l-green-300",
    },
    {
      title: "Subscription Earnings",
      amount: 5000,
      borderColor: "border-l-emerald-300",
    },
    {
      title: "Wallet Balance",
      amount: 5000,
      borderColor: "border-l-green-700",
    },
  ];

  const earningRecords: EarningRecord[] = [
    {
      id: 1,
      date: "23/03/2025",
      description: "Credit: Srinivas register - 1 Year Plan - ",
      status: "Success",
      earningType: "Subscription",
      credit: 999,
    },
    {
      id: 2,
      date: "23/03/2025",
      description: "Credit: Srinivas register - 1 Year Plan - ",
      status: "Success",
      earningType: "Subscription",
      credit: 999,
      withdrawal: 999,
    },
  ];

  const handleRequestWithdrawal = () => {
    navigate("/request-withdrawal");
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
            <Sidebar activeItem="Wallet" />
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar activeItem="Wallet" />
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <TopBar title="Wallet" onMenuClick={() => setSidebarOpen(true)} />

        {/* Content Area */}
        <div className="p-6">
          {/* Request Withdrawal Button */}
          <div className="flex justify-end mb-6">
            <button
              onClick={handleRequestWithdrawal}
              className="bg-blue-900 text-white px-4 py-2 rounded-full font-open-sans text-[14px] leading-[16.8px] h-[48px] min-w-[164px]"
            >
              Request Withdrawal
            </button>
          </div>

          {/* Earnings Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {earningCards.map((card, index) => (
              <div
                key={index}
                className={cn(
                  "bg-white rounded-[10px] p-6 shadow-sm border border-slate-200 border-l-8",
                  card.borderColor,
                )}
              >
                <div className="space-y-3">
                  <h3 className="text-slate-700 font-open-sans text-[14px] font-semibold leading-[16.8px]">
                    {card.title}
                  </h3>
                  <p className="text-slate-900 font-open-sans text-[27px] font-normal leading-[32.4px]">
                    ₹{card.amount}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Transactions Table */}
          <div className="bg-white rounded-[10px] border border-slate-200">
            {/* Table Headers */}
            <div className="grid grid-cols-12 gap-4 px-6 py-3 text-slate-600 font-open-sans text-[11px] font-normal leading-[13.2px] uppercase border-b border-slate-300">
              <div className="col-span-2">Date</div>
              <div className="col-span-3">Description</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-2">Earning Type</div>
              <div className="col-span-1">Credit</div>
              <div className="col-span-2">Withdrawal</div>
            </div>

            {/* Table Rows */}
            {earningRecords.map((record) => (
              <div key={record.id}>
                <div className="grid grid-cols-12 gap-4 px-6 py-3 text-slate-800 font-open-sans text-[14px] font-normal leading-[16.8px] border-b border-slate-300">
                  <div className="col-span-2">{record.date}</div>
                  <div className="col-span-3">{record.description}</div>
                  <div className="col-span-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-[7px] bg-lime-50 border border-lime-200 text-green-700 font-semibold text-[14px]">
                      {record.status}
                    </span>
                  </div>
                  <div className="col-span-2">{record.earningType}</div>
                  <div className="col-span-1 text-green-700">
                    ₹{record.credit}/-
                  </div>
                  <div className="col-span-2 text-red-600">
                    {record.withdrawal ? `₹${record.withdrawal}/-` : ""}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletDashboard;
