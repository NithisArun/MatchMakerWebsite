import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AdvancedSearchProps {
  onSearch: (searchData: any) => void;
  onKeywordSearch: () => void;
}

const AdvancedSearch = ({ onSearch, onKeywordSearch }: AdvancedSearchProps) => {
  const [formData, setFormData] = useState({
    caste: "",
    subCaste: "",
    memberLanguage: "",
    country: "",
    city: "",
    onBehalf: "",
    familyValue: "",
    state: "",
    highestEducation: "",
    annualIncomeRange: "",
    professionType: "",
    maritalStatus: "",
    dateOfBirthRange: "",
    rashi: "",
    nakshatra: "",
    residenceType: "",
    complexion: "",
    heightRange: "",
    designation: "",
    padam: "",
    dosham: "",
    keyword: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSearch = () => {
    onSearch(formData);
  };

  const handleClear = () => {
    setFormData({
      caste: "",
      subCaste: "",
      memberLanguage: "",
      country: "",
      city: "",
      onBehalf: "",
      familyValue: "",
      state: "",
      highestEducation: "",
      annualIncomeRange: "",
      professionType: "",
      maritalStatus: "",
      dateOfBirthRange: "",
      rashi: "",
      nakshatra: "",
      residenceType: "",
      complexion: "",
      heightRange: "",
      designation: "",
      padam: "",
      dosham: "",
      keyword: "",
    });
  };

  const DropdownField = ({
    label,
    value,
    onChange,
  }: {
    label: string;
    value: string;
    onChange: (value: string) => void;
  }) => (
    <div className="w-[210px]">
      <div className="h-14 px-4 bg-slate-100 rounded-t border-b border-slate-800 flex items-center justify-between">
        <span className="text-slate-800 font-open-sans text-sm">{label}</span>
        <ChevronDown className="w-6 h-6 text-slate-800" />
      </div>
    </div>
  );

  const TextField = ({
    label,
    value,
    onChange,
    fullWidth = false,
  }: {
    label: string;
    value: string;
    onChange: (value: string) => void;
    fullWidth?: boolean;
  }) => (
    <div className={fullWidth ? "col-span-2" : "w-[210px]"}>
      <div className="h-14 px-4 bg-slate-50 rounded-t border-b border-slate-800 flex items-center">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={`Enter ${label.toLowerCase()}...`}
          className="w-full bg-transparent text-slate-800 font-open-sans text-sm outline-none"
        />
      </div>
    </div>
  );

  return (
    <div className="w-full bg-white rounded-lg border border-slate-200 p-8">
      <div className="flex h-12 mb-4">
        {/* Tabs */}
        <div className="flex border-b border-slate-300">
          <button
            onClick={onKeywordSearch}
            className="flex flex-col justify-end items-center px-4 bg-white hover:bg-gray-50"
          >
            <div className="flex py-[14px] justify-center items-center">
              <span className="text-slate-600 text-center font-open-sans text-sm">
                Keyword Search
              </span>
            </div>
          </button>
          <div className="flex flex-col justify-end items-center px-4 bg-white">
            <div className="flex py-[14px] justify-center items-center">
              <span className="text-blue-800 text-center font-open-sans text-sm">
                Advance Search
              </span>
            </div>
            <div className="w-[104px] h-[3px] bg-blue-800 rounded-t-full"></div>
          </div>
        </div>
      </div>

      {/* Search Fields Grid */}
      <div className="grid grid-cols-5 gap-6 mb-6">
        {/* Row 1 */}
        <DropdownField
          label="Caste"
          value={formData.caste}
          onChange={(value) => handleInputChange("caste", value)}
        />
        <DropdownField
          label="Sub-Caste"
          value={formData.subCaste}
          onChange={(value) => handleInputChange("subCaste", value)}
        />
        <DropdownField
          label="Member language"
          value={formData.memberLanguage}
          onChange={(value) => handleInputChange("memberLanguage", value)}
        />
        <DropdownField
          label="Country"
          value={formData.country}
          onChange={(value) => handleInputChange("country", value)}
        />
        <DropdownField
          label="State"
          value={formData.state}
          onChange={(value) => handleInputChange("state", value)}
        />

        {/* Row 2 */}
        <DropdownField
          label="City"
          value={formData.city}
          onChange={(value) => handleInputChange("city", value)}
        />
        <DropdownField
          label="On Behalf"
          value={formData.onBehalf}
          onChange={(value) => handleInputChange("onBehalf", value)}
        />
        <DropdownField
          label="Family Value"
          value={formData.familyValue}
          onChange={(value) => handleInputChange("familyValue", value)}
        />
        <DropdownField
          label="Family status"
          value={formData.familyValue}
          onChange={(value) => handleInputChange("familyValue", value)}
        />
        <DropdownField
          label="Marital Status"
          value={formData.maritalStatus}
          onChange={(value) => handleInputChange("maritalStatus", value)}
        />

        {/* Row 3 */}
        <DropdownField
          label="Highest Education"
          value={formData.highestEducation}
          onChange={(value) => handleInputChange("highestEducation", value)}
        />
        <DropdownField
          label="Annual Income range"
          value={formData.annualIncomeRange}
          onChange={(value) => handleInputChange("annualIncomeRange", value)}
        />
        <DropdownField
          label="Profession type"
          value={formData.professionType}
          onChange={(value) => handleInputChange("professionType", value)}
        />
        <DropdownField
          label="Designation"
          value={formData.designation}
          onChange={(value) => handleInputChange("designation", value)}
        />
        <DropdownField
          label="Residence type"
          value={formData.residenceType}
          onChange={(value) => handleInputChange("residenceType", value)}
        />

        {/* Row 4 */}
        <DropdownField
          label="Date of Birth Range"
          value={formData.dateOfBirthRange}
          onChange={(value) => handleInputChange("dateOfBirthRange", value)}
        />
        <DropdownField
          label="Rashi"
          value={formData.rashi}
          onChange={(value) => handleInputChange("rashi", value)}
        />
        <DropdownField
          label="Nakshatra"
          value={formData.nakshatra}
          onChange={(value) => handleInputChange("nakshatra", value)}
        />
        <DropdownField
          label="Padam"
          value={formData.padam}
          onChange={(value) => handleInputChange("padam", value)}
        />
        <DropdownField
          label="Dosham"
          value={formData.dosham}
          onChange={(value) => handleInputChange("dosham", value)}
        />

        {/* Row 5 */}
        <DropdownField
          label="Complexion"
          value={formData.complexion}
          onChange={(value) => handleInputChange("complexion", value)}
        />
        <DropdownField
          label="Height range"
          value={formData.heightRange}
          onChange={(value) => handleInputChange("heightRange", value)}
        />
      </div>

      {/* Keyword Field */}
      <div className="mb-6">
        <TextField
          label="Keyword"
          value={formData.keyword}
          onChange={(value) => handleInputChange("keyword", value)}
          fullWidth
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4">
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

export default AdvancedSearch;
