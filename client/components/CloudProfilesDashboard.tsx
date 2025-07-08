import { useState } from "react";
import Sidebar from "./Sidebar";
import KeywordSearch from "./profiles/KeywordSearch";
import AdvancedSearch from "./profiles/AdvancedSearch";
import ProfileCard from "./profiles/ProfileCard";

const CloudProfilesDashboard = () => {
  const [searchMode, setSearchMode] = useState<"keyword" | "advanced">(
    "keyword",
  );
  const [memberFilter, setMemberFilter] = useState<
    "all" | "paid" | "deactivated"
  >("all");

  // Mock data for demonstration
  const mockProfiles = [
    {
      id: "1",
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      name: "Rahul Kumar",
      age: 28,
      height: "5'8\"",
      caste: "Brahmin",
      location: "Mumbai, Maharashtra",
      profession: "Software Engineer",
      maritalStatus: "Never Married",
      status: "free" as const,
    },
    {
      id: "2",
      photo:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      name: "Priya Sharma",
      age: 26,
      height: "5'4\"",
      caste: "Rajput",
      location: "Delhi, Delhi",
      profession: "Doctor",
      maritalStatus: "Never Married",
      status: "premium" as const,
    },
    {
      id: "3",
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      name: "Amit Patel",
      age: 30,
      height: "5'10\"",
      caste: "Patel",
      location: "Ahmedabad, Gujarat",
      profession: "Business Owner",
      maritalStatus: "Divorced",
      status: "deactivated" as const,
    },
  ];

  const filteredProfiles = mockProfiles.filter((profile) => {
    if (memberFilter === "all") return true;
    if (memberFilter === "paid") return profile.status === "premium";
    if (memberFilter === "deactivated") return profile.status === "deactivated";
    return true;
  });

  const handleKeywordSearch = (searchData: any) => {
    console.log("Cloud keyword search:", searchData);
    // Implement search logic
  };

  const handleAdvancedSearch = (searchData: any) => {
    console.log("Cloud advanced search:", searchData);
    // Implement search logic
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeItem="Cloud Profiles" />

      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="h-16 bg-white border-b border-gray-200 flex items-center px-6">
          <h1 className="text-xl font-semibold text-gray-800">
            Cloud Profiles
          </h1>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-auto">
          {/* Search Section */}
          <div className="mb-6">
            {searchMode === "keyword" ? (
              <KeywordSearch
                onSearch={handleKeywordSearch}
                onAdvancedSearch={() => setSearchMode("advanced")}
              />
            ) : (
              <AdvancedSearch
                onSearch={handleAdvancedSearch}
                onKeywordSearch={() => setSearchMode("keyword")}
              />
            )}
          </div>

          {/* Member Filter Tabs */}
          <div className="mb-6">
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setMemberFilter("all")}
                className={`px-6 py-3 text-sm font-medium border-b-2 ${
                  memberFilter === "all"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                All Members ({mockProfiles.length})
              </button>
              <button
                onClick={() => setMemberFilter("paid")}
                className={`px-6 py-3 text-sm font-medium border-b-2 ${
                  memberFilter === "paid"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Paid Members (
                {mockProfiles.filter((p) => p.status === "premium").length})
              </button>
              <button
                onClick={() => setMemberFilter("deactivated")}
                className={`px-6 py-3 text-sm font-medium border-b-2 ${
                  memberFilter === "deactivated"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Deactivated (
                {mockProfiles.filter((p) => p.status === "deactivated").length})
              </button>
            </div>
          </div>

          {/* Profiles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredProfiles.map((profile) => (
              <ProfileCard key={profile.id} profile={profile} />
            ))}
          </div>

          {/* Legend */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <h3 className="text-sm font-medium text-gray-700 mb-3">
              Member Status Legend
            </h3>
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-gray-300 rounded"></div>
                <span className="text-sm text-gray-600">Free Members</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-emerald-500 rounded"></div>
                <span className="text-sm text-gray-600">Premium Members</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-rose-500 rounded"></div>
                <span className="text-sm text-gray-600">
                  Deactivated Members
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudProfilesDashboard;
