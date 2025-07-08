import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface KeywordSearchProps {
  onSearch: (searchData: { searchType: string; keyword: string }) => void;
  onAdvancedSearch: () => void;
}

const KeywordSearch = ({ onSearch, onAdvancedSearch }: KeywordSearchProps) => {
  const [searchType, setSearchType] = useState("Any");
  const [keyword, setKeyword] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const searchOptions = ["Any", "Surname", "Full Name"];

  const handleSearch = () => {
    onSearch({ searchType, keyword });
  };

  const handleClear = () => {
    setSearchType("Any");
    setKeyword("");
    onSearch({ searchType: "Any", keyword: "" });
  };

  return (
    <div className="w-full bg-white rounded-lg border border-slate-200 p-8">
      <div className="flex h-12 mb-4">
        {/* Tabs */}
        <div className="flex border-b border-slate-300">
          <div className="flex flex-col justify-end items-center px-4 bg-white">
            <div className="flex py-[14px] justify-center items-center">
              <span className="text-blue-800 text-center font-open-sans text-sm">
                Keyword Search
              </span>
            </div>
            <div className="w-[106px] h-[3px] bg-blue-800 rounded-t-full"></div>
          </div>
          <button
            onClick={onAdvancedSearch}
            className="flex flex-col justify-end items-center px-4 bg-white hover:bg-gray-50"
          >
            <div className="flex py-[14px] justify-center items-center">
              <span className="text-blue-900 text-center font-open-sans text-sm">
                Advance Search
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Search Fields */}
      <div className="flex items-end gap-4">
        {/* Search Type Dropdown */}
        <div className="relative w-[210px]">
          <div className="relative">
            <div
              className="h-14 px-4 bg-slate-100 rounded-t border-b border-slate-800 flex items-center justify-between cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <span className="text-slate-800 font-open-sans text-sm">
                {searchType}
              </span>
              <ChevronDown className="w-6 h-6 text-slate-800" />
            </div>

            {showDropdown && (
              <div className="absolute top-full left-0 w-[210px] bg-white border border-slate-300 rounded-b shadow-lg z-10">
                {searchOptions.map((option) => (
                  <div
                    key={option}
                    className="h-10 px-5 flex items-center cursor-pointer hover:bg-gray-50"
                    onClick={() => {
                      setSearchType(option);
                      setShowDropdown(false);
                    }}
                  >
                    <span className="text-gray-900 font-open-sans text-sm">
                      {option}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Keyword Input */}
        <div className="flex-1 h-14 px-4 bg-slate-50 rounded-t border-b border-slate-800 flex items-center">
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Enter keyword..."
            className="w-full bg-transparent text-slate-800 font-open-sans text-sm outline-none"
          />
        </div>

        {/* Action Buttons */}
        <button
          onClick={handleClear}
          className="h-12 px-4 text-blue-900 font-open-sans text-sm hover:bg-gray-50 rounded"
        >
          Clear
        </button>
        <button
          onClick={handleSearch}
          className="h-12 px-4 bg-blue-900 text-white font-open-sans text-sm rounded hover:bg-blue-800 transition-colors"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default KeywordSearch;
