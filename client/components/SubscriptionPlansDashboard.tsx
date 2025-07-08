import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const SubscriptionPlansDashboard = () => {
  const [plans] = useState([
    {
      id: 1,
      sNo: "01",
      planName: "Stater",
      description: "Few lines of info related to plan Few lines of info....",
      duration: "90",
      planPrice: "999/-",
      status: "Active",
      isActive: true,
    },
    {
      id: 2,
      sNo: "02",
      planName: "Basic",
      description: "Few lines of info related to plan Few lines of info....",
      duration: "90",
      planPrice: "999/-",
      status: "Inactive",
      isActive: false,
    },
  ]);

  const togglePlanStatus = (planId: number) => {
    // Toggle plan status logic would go here
    console.log("Toggle plan status for:", planId);
  };

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar activeItem="Subscription Plans" />

      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="h-16 bg-white shadow-sm flex items-center px-6">
          <h1 className="text-2xl font-light text-zinc-800">
            Subscription Plans
          </h1>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Content Container */}
          <div className="bg-white rounded-lg border border-slate-200 h-full">
            {/* Header with Add New Plan Button */}
            <div className="flex justify-end p-6 pb-0">
              <Link
                to="/subscription-plans/new"
                className="bg-blue-900 text-white px-4 py-3 rounded-full text-sm font-open-sans hover:bg-blue-800 transition-colors"
              >
                Add New Plan
              </Link>
            </div>

            {/* Table */}
            <div className="p-6">
              {/* Table Headers */}
              <div className="grid grid-cols-7 gap-4 pb-4 border-b border-slate-300">
                <div className="text-slate-600 text-xs font-open-sans uppercase font-normal">
                  S No
                </div>
                <div className="text-slate-600 text-xs font-open-sans uppercase font-normal">
                  Plan Name
                </div>
                <div className="text-slate-600 text-xs font-open-sans uppercase font-normal">
                  Description
                </div>
                <div className="text-slate-600 text-xs font-open-sans uppercase font-normal">
                  Duration
                </div>
                <div className="text-slate-600 text-xs font-open-sans uppercase font-normal">
                  Plan Price
                </div>
                <div className="text-slate-600 text-xs font-open-sans uppercase font-normal">
                  Status
                </div>
                <div className="text-slate-600 text-xs font-open-sans uppercase font-normal">
                  Action
                </div>
              </div>

              {/* Table Rows */}
              {plans.map((plan) => (
                <div key={plan.id}>
                  <div className="grid grid-cols-7 gap-4 py-3 items-center">
                    <div className="text-slate-800 text-sm font-open-sans">
                      {plan.sNo}
                    </div>
                    <div className="text-slate-800 text-sm font-open-sans">
                      {plan.planName}
                    </div>
                    <div className="text-slate-800 text-sm font-open-sans">
                      {plan.description}
                    </div>
                    <div className="text-slate-800 text-sm font-open-sans">
                      {plan.duration}
                    </div>
                    <div className="text-slate-800 text-sm font-open-sans">
                      {plan.planPrice}
                    </div>
                    <div>
                      {plan.isActive ? (
                        <span className="px-2 py-1 bg-lime-50 border border-lime-200 rounded text-green-700 text-sm font-semibold">
                          Active
                        </span>
                      ) : (
                        <span className="px-2 py-1 bg-rose-50 border border-rose-200 rounded text-rose-700 text-sm font-semibold">
                          Inactive
                        </span>
                      )}
                    </div>
                    <div>
                      <button
                        onClick={() => togglePlanStatus(plan.id)}
                        className={`relative inline-flex h-8 w-12 rounded-full transition-colors ${
                          plan.isActive ? "bg-green-600" : "bg-slate-400"
                        }`}
                      >
                        <span
                          className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform mt-1 ${
                            plan.isActive ? "translate-x-5" : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                  <div className="border-b border-slate-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlansDashboard;
