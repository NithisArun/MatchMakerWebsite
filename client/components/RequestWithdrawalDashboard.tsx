import { useState } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

const RequestWithdrawalDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [withdrawalAmount, setWithdrawalAmount] = useState("");

  const bankDetails = {
    accountHolder: "Ravi Sharma",
    accountNumber: "123456789012",
    ifscCode: "SBIN0001234",
    bankName: "State Bank of India",
    branch: "Connaught Place, New Delhi",
    accountType: "Savings",
  };

  const availableAmount = 5000;

  const handleClear = () => {
    setWithdrawalAmount("");
  };

  const handleSubmit = () => {
    // Handle withdrawal submission
    console.log("Withdrawal amount:", withdrawalAmount);
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
        <TopBar
          title="Request Withdrawal"
          onMenuClick={() => setSidebarOpen(true)}
        />

        {/* Content Area */}
        <div className="p-6">
          <div className="bg-white rounded-[10px] border border-slate-200 p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Form Fields */}
              <div className="space-y-6">
                {/* Available Amount (Disabled) */}
                <div className="w-full max-w-[360px]">
                  <div className="relative">
                    <div className="flex flex-col bg-slate-100 rounded-t-[4px] border-b border-slate-400 opacity-60">
                      <div className="flex items-center px-4 py-1 h-[56px]">
                        <div className="flex-1 space-y-1">
                          <label className="text-slate-600 font-roboto text-[12px] font-normal leading-[16px] tracking-[0.4px]">
                            Available amount
                          </label>
                          <div className="text-slate-600 font-roboto text-[16px] font-normal leading-[24px] tracking-[0.5px]">
                            {availableAmount}/-
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Withdrawal Amount */}
                <div className="w-full max-w-[360px]">
                  <div className="relative">
                    <input
                      type="number"
                      value={withdrawalAmount}
                      onChange={(e) => setWithdrawalAmount(e.target.value)}
                      className="w-full px-4 py-4 bg-slate-100 border-0 border-b border-slate-800 rounded-t-md text-sm font-open-sans focus:outline-none focus:ring-0 focus:border-slate-800 peer"
                      placeholder=" "
                    />
                    <label className="absolute left-4 top-4 text-slate-800 font-open-sans text-[14px] font-normal leading-[16.8px] pointer-events-none transition-all duration-200 peer-focus:-translate-y-2 peer-focus:scale-75 peer-focus:text-blue-900 peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:scale-75">
                      Enter Withdrawal amount
                    </label>
                  </div>
                  <p className="text-slate-900 font-open-sans text-[11px] leading-[13.2px] mt-1 px-4">
                    Minimum withdrawal amount is 1000/-
                  </p>
                </div>
              </div>

              {/* Right Column - Bank Details */}
              <div className="space-y-4">
                <h3 className="text-black font-open-sans text-[18px] font-bold leading-[21.6px]">
                  Bank Account Details
                </h3>
                <div className="text-slate-900 font-open-sans text-[18px] font-normal leading-[28.8px] space-y-1">
                  <p>Account Holder: {bankDetails.accountHolder}</p>
                  <p>Account Number: {bankDetails.accountNumber}</p>
                  <p>IFSC Code: {bankDetails.ifscCode}</p>
                  <p>Bank Name: {bankDetails.bankName}</p>
                  <p>Branch: {bankDetails.branch}</p>
                  <p>Account Type: {bankDetails.accountType}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 mt-8">
              <button
                onClick={handleClear}
                className="px-4 py-2 text-blue-900 rounded-full font-open-sans text-[14px] leading-[16.8px] h-[48px] min-w-[66px]"
              >
                Clear
              </button>
              <button
                onClick={handleSubmit}
                className="bg-blue-900 text-white px-4 py-2 rounded-full font-open-sans text-[14px] leading-[16.8px] h-[48px] min-w-[79px]"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestWithdrawalDashboard;
