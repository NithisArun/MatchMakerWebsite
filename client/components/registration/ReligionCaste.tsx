import { useState } from "react";
import RegistrationLayout from "./RegistrationLayout";

interface ReligionCasteProps {
  data: any;
  updateData: (data: any) => void;
  onRegister: () => void;
  onBack: () => void;
  onSignIn: () => void;
}

const ReligionCaste: React.FC<ReligionCasteProps> = ({
  data,
  updateData,
  onRegister,
  onBack,
  onSignIn,
}) => {
  const [formData, setFormData] = useState({
    interReligionMarriages: data.interReligionMarriages || "",
    intercasteMarriages: data.intercasteMarriages || "",
    religionsServed: data.religionsServed || [],
    castes: data.castes || [],
    subCastes: data.subCastes || [],
    specialCommunitiesFocus: data.specialCommunitiesFocus || "",
    referenceId: data.referenceId || "",
    referenceContact: data.referenceContact || "",
    termsAccepted: data.termsAccepted || false,
    declarationAccepted: data.declarationAccepted || false,
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (field: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [field]: checked }));
  };

  const handleRegister = () => {
    updateData(formData);
    onRegister();
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

  const CheckboxField = ({
    label,
    checked,
    onChange,
  }: {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
  }) => (
    <div className="flex items-center space-x-3">
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only"
        />
        <div
          className={`w-5 h-5 rounded border-2 flex items-center justify-center cursor-pointer transition-colors ${
            checked ? "bg-blue-800 border-blue-800" : "border-slate-400"
          }`}
          onClick={() => onChange(!checked)}
        >
          {checked && (
            <svg
              className="w-3 h-3 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M10.43 16.9L6.43 12.9L7.83 11.5L10.43 14.1L17.03 7.5L18.43 8.9L10.43 16.9Z" />
            </svg>
          )}
        </div>
      </div>
      <label className="text-sm text-slate-700 font-open-sans cursor-pointer">
        {label}
      </label>
    </div>
  );

  return (
    <RegistrationLayout
      step={6}
      stepLabel="Religion and Caste He/She Serves"
      title="Partner Registration"
      onRegister={handleRegister}
      onBack={onBack}
      onSignIn={onSignIn}
      isLastStep={true}
    >
      <div className="space-y-6">
        {/* Form Fields Grid */}
        <div className="grid grid-cols-3 gap-6">
          <InputField
            label="Inter-religion Marriages Supported? (Yes/No)"
            value={formData.interReligionMarriages}
            onChange={(value) =>
              handleInputChange("interReligionMarriages", value)
            }
            hasDropdown
          />
          <InputField
            label="Intercaste Marriages Supported? (Yes/No)"
            value={formData.intercasteMarriages}
            onChange={(value) =>
              handleInputChange("intercasteMarriages", value)
            }
            hasDropdown
          />
          <InputField
            label="Religions Served (Multi-select:)"
            value={formData.religionsServed.join(", ")}
            onChange={(value) =>
              handleInputChange("religionsServed", value.split(", "))
            }
            hasDropdown
          />

          <InputField
            label="Castes"
            value={formData.castes.join(", ")}
            onChange={(value) => handleInputChange("castes", value.split(", "))}
            hasDropdown
          />
          <InputField
            label="Sub-castes"
            value={formData.subCastes.join(", ")}
            onChange={(value) =>
              handleInputChange("subCastes", value.split(", "))
            }
            hasDropdown
          />
          <InputField
            label="Special Communities Focus"
            value={formData.specialCommunitiesFocus}
            onChange={(value) =>
              handleInputChange("specialCommunitiesFocus", value)
            }
            hasDropdown
          />

          <InputField
            label="Reference ID"
            value={formData.referenceId}
            onChange={(value) => handleInputChange("referenceId", value)}
          />
          <InputField
            label="Reference/Verification Contact"
            value={formData.referenceContact}
            onChange={(value) => handleInputChange("referenceContact", value)}
          />
        </div>

        {/* Checkboxes */}
        <div className="space-y-4 pt-6">
          <CheckboxField
            label="Terms and Conditions Agreement"
            checked={formData.termsAccepted}
            onChange={(checked) =>
              handleCheckboxChange("termsAccepted", checked)
            }
          />
          <CheckboxField
            label="Declaration of Authenticity"
            checked={formData.declarationAccepted}
            onChange={(checked) =>
              handleCheckboxChange("declarationAccepted", checked)
            }
          />
        </div>
      </div>
    </RegistrationLayout>
  );
};

export default ReligionCaste;
