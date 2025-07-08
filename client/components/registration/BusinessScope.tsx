import { useState } from "react";
import RegistrationLayout from "./RegistrationLayout";

interface BusinessScopeProps {
  data: any;
  updateData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
  onSignIn: () => void;
}

const BusinessScope: React.FC<BusinessScopeProps> = ({
  data,
  updateData,
  onNext,
  onBack,
  onSignIn,
}) => {
  const [formData, setFormData] = useState({
    statesCovered: data.statesCovered || [],
    businessOperationArea: data.businessOperationArea || "",
    citiesDistrictsCovered: data.citiesDistrictsCovered || [],
    localityRegionFocus: data.localityRegionFocus || "",
    operatesNationally: data.operatesNationally || "",
    servesNriClients: data.servesNriClients || "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    updateData(formData);
    onNext();
  };

  const InputField = ({
    label,
    value,
    onChange,
    hasDropdown = false,
  }: {
    label: string;
    value: string;
    onChange: (value: string) => void;
    hasDropdown?: boolean;
  }) => (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder=" "
        className="peer w-full h-14 px-4 pr-12 border border-slate-400 rounded-md bg-white text-sm font-open-sans focus:outline-none focus:border-blue-900 transition-colors"
      />
      <label className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-600 font-open-sans transition-all duration-200 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1">
        {label}
      </label>
      {hasDropdown && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <svg
            className="w-6 h-6 text-slate-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 15L7 10H17L12 15Z" />
          </svg>
        </div>
      )}
    </div>
  );

  return (
    <RegistrationLayout
      step={5}
      stepLabel="Business Scope"
      title="Partner Registration"
      onNext={handleNext}
      onBack={onBack}
      onSignIn={onSignIn}
    >
      <div className="grid grid-cols-3 gap-6">
        <InputField
          label="States Covered (Multi-select dropdown)"
          value={formData.statesCovered.join(", ")}
          onChange={(value) =>
            handleInputChange("statesCovered", value.split(", "))
          }
          hasDropdown
        />
        <InputField
          label="Business Operation Area Scope"
          value={formData.businessOperationArea}
          onChange={(value) =>
            handleInputChange("businessOperationArea", value)
          }
          hasDropdown
        />
        <InputField
          label="Cities/Districts Covered (Multi-select)"
          value={formData.citiesDistrictsCovered.join(", ")}
          onChange={(value) =>
            handleInputChange("citiesDistrictsCovered", value.split(", "))
          }
          hasDropdown
        />

        <InputField
          label="Locality/Region Focus"
          value={formData.localityRegionFocus}
          onChange={(value) => handleInputChange("localityRegionFocus", value)}
          hasDropdown
        />
        <InputField
          label="Operates Nationally? (Yes/No)"
          value={formData.operatesNationally}
          onChange={(value) => handleInputChange("operatesNationally", value)}
          hasDropdown
        />
        <InputField
          label="Serves NRI Clients? (Yes/No)"
          value={formData.servesNriClients}
          onChange={(value) => handleInputChange("servesNriClients", value)}
          hasDropdown
        />
      </div>
    </RegistrationLayout>
  );
};

export default BusinessScope;
