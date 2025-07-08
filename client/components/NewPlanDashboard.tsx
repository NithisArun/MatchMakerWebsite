import { useState } from "react";
import { Link } from "react-router-dom";
import { Upload } from "lucide-react";
import Sidebar from "./Sidebar";

const NewPlanDashboard = () => {
  const [formData, setFormData] = useState({
    planName: "",
    planDescription: "",
    duration: "",
    scheduleStartDate: "",
    endDate: "",
    originalPrice: "",
    offerPrice1: "",
    offerPrice2: "",
    autoMatchmaking: true,
    profilePicturePrivacy: true,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleClear = () => {
    setFormData({
      planName: "",
      planDescription: "",
      duration: "",
      scheduleStartDate: "",
      endDate: "",
      originalPrice: "",
      offerPrice1: "",
      offerPrice2: "",
      autoMatchmaking: true,
      profilePicturePrivacy: true,
    });
  };

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar activeItem="Subscription Plans" />

      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="h-16 bg-white shadow-sm flex items-center px-6">
          <h1 className="text-2xl font-light text-zinc-800">New Plan</h1>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Form Container */}
          <div className="bg-white rounded-lg border border-slate-200 p-8">
            <div className="grid grid-cols-3 gap-6">
              {/* Row 1 - Plan Name and Description */}
              <div className="flex flex-col">
                <div className="h-14 px-4 bg-slate-100 rounded-t border-b border-slate-800 flex items-center">
                  <input
                    type="text"
                    value={formData.planName}
                    onChange={(e) =>
                      handleInputChange("planName", e.target.value)
                    }
                    placeholder="Enter plan name..."
                    className="w-full bg-transparent text-slate-800 font-open-sans text-sm outline-none"
                  />
                </div>
                <div className="px-2 py-1 text-xs text-slate-600 bg-slate-50">
                  Plan name
                </div>
              </div>

              <div className="col-span-2 flex flex-col">
                <div className="h-14 px-4 bg-slate-100 rounded-t border-b border-slate-800 flex items-center">
                  <input
                    type="text"
                    value={formData.planDescription}
                    onChange={(e) =>
                      handleInputChange("planDescription", e.target.value)
                    }
                    placeholder="Enter plan description..."
                    className="w-full bg-transparent text-slate-800 font-open-sans text-sm outline-none"
                  />
                </div>
                <div className="px-2 py-1 text-xs text-slate-600 bg-slate-50">
                  Plan Description
                </div>
              </div>

              {/* Row 2 - Upload Image */}
              <div className="flex flex-col">
                <div className="h-14 px-4 bg-slate-100 rounded-t border-b border-slate-800 flex items-center justify-between">
                  <span className="text-slate-800 font-open-sans text-sm">
                    Upload image
                  </span>
                  <Upload className="w-6 h-6 text-slate-800" />
                </div>
                <div className="px-2 py-1 text-xs text-slate-600 bg-slate-50">
                  Upload image
                </div>
              </div>

              {/* Row 3 - Duration, Start Date, End Date */}
              <div className="flex flex-col">
                <div className="h-14 px-4 bg-slate-100 rounded-t border-b border-slate-800 flex items-center">
                  <input
                    type="text"
                    value={formData.duration}
                    onChange={(e) =>
                      handleInputChange("duration", e.target.value)
                    }
                    placeholder="Enter duration..."
                    className="w-full bg-transparent text-slate-800 font-open-sans text-sm outline-none"
                  />
                </div>
                <div className="px-2 py-1 text-xs text-slate-600 bg-slate-50">
                  Duration
                </div>
              </div>

              <div className="flex flex-col">
                <div className="h-14 px-4 bg-slate-100 rounded-t border-b border-slate-800 flex items-center">
                  <input
                    type="date"
                    value={formData.scheduleStartDate}
                    onChange={(e) =>
                      handleInputChange("scheduleStartDate", e.target.value)
                    }
                    className="w-full bg-transparent text-slate-800 font-open-sans text-sm outline-none"
                  />
                </div>
                <div className="px-2 py-1 text-xs text-slate-600 bg-slate-50">
                  Schedule Start date
                </div>
              </div>

              <div className="flex flex-col">
                <div className="h-14 px-4 bg-slate-100 rounded-t border-b border-slate-800 flex items-center">
                  <input
                    type="date"
                    value={formData.endDate}
                    onChange={(e) =>
                      handleInputChange("endDate", e.target.value)
                    }
                    className="w-full bg-transparent text-slate-800 font-open-sans text-sm outline-none"
                  />
                </div>
                <div className="px-2 py-1 text-xs text-slate-600 bg-slate-50">
                  End date
                </div>
              </div>

              {/* Row 4 - Pricing */}
              <div className="flex flex-col">
                <div className="h-14 px-4 bg-slate-100 rounded-t border-b border-slate-800 flex items-center">
                  <input
                    type="text"
                    value={formData.originalPrice}
                    onChange={(e) =>
                      handleInputChange("originalPrice", e.target.value)
                    }
                    placeholder="Enter original price..."
                    className="w-full bg-transparent text-slate-800 font-open-sans text-sm outline-none"
                  />
                </div>
                <div className="px-2 py-1 text-xs text-slate-600 bg-slate-50">
                  Original Price
                </div>
              </div>

              <div className="flex flex-col">
                <div className="h-14 px-4 bg-slate-100 rounded-t border-b border-slate-800 flex items-center">
                  <input
                    type="text"
                    value={formData.offerPrice1}
                    onChange={(e) =>
                      handleInputChange("offerPrice1", e.target.value)
                    }
                    placeholder="Enter offer price 1..."
                    className="w-full bg-transparent text-slate-800 font-open-sans text-sm outline-none"
                  />
                </div>
                <div className="px-2 py-1 text-xs text-slate-600 bg-slate-50">
                  Offer Price 1
                </div>
              </div>

              <div className="flex flex-col">
                <div className="h-14 px-4 bg-slate-100 rounded-t border-b border-slate-800 flex items-center">
                  <input
                    type="text"
                    value={formData.offerPrice2}
                    onChange={(e) =>
                      handleInputChange("offerPrice2", e.target.value)
                    }
                    placeholder="Enter offer price 2..."
                    className="w-full bg-transparent text-slate-800 font-open-sans text-sm outline-none"
                  />
                </div>
                <div className="px-2 py-1 text-xs text-slate-600 bg-slate-50">
                  Offer Price 2
                </div>
              </div>
            </div>

            {/* Checkboxes */}
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="autoMatchmaking"
                    checked={formData.autoMatchmaking}
                    onChange={(e) =>
                      handleInputChange("autoMatchmaking", e.target.checked)
                    }
                    className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                </div>
                <label
                  htmlFor="autoMatchmaking"
                  className="text-black font-open-sans text-sm"
                >
                  Auto Matchmaking
                </label>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="profilePicturePrivacy"
                    checked={formData.profilePicturePrivacy}
                    onChange={(e) =>
                      handleInputChange(
                        "profilePicturePrivacy",
                        e.target.checked,
                      )
                    }
                    className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                </div>
                <label
                  htmlFor="profilePicturePrivacy"
                  className="text-black font-open-sans text-sm"
                >
                  Profile Picture privacy
                </label>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4 mt-8">
              <button
                onClick={handleClear}
                className="h-12 px-4 text-blue-900 font-open-sans text-sm hover:bg-gray-50 rounded"
              >
                Clear
              </button>
              <button
                onClick={handleSubmit}
                className="h-12 px-4 bg-blue-900 text-white font-open-sans text-sm rounded hover:bg-blue-800 transition-colors"
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

export default NewPlanDashboard;
