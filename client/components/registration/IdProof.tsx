import { useState } from "react";
import RegistrationLayout from "./RegistrationLayout";

interface IdProofProps {
  data: any;
  updateData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
  onSignIn: () => void;
}

const IdProof: React.FC<IdProofProps> = ({
  data,
  updateData,
  onNext,
  onBack,
  onSignIn,
}) => {
  const [formData, setFormData] = useState({
    aadhaarNumber: data.aadhaarNumber || "",
    panCardNumber: data.panCardNumber || "",
    otherId: data.otherId || "",
    aadhaarUpload: data.aadhaarUpload || null,
    panUpload: data.panUpload || null,
    otherIdUpload: data.otherIdUpload || null,
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
    type = "text",
    hasDropdown = false,
    hasUpload = false,
  }: {
    label: string;
    value: string;
    onChange: (value: string) => void;
    type?: string;
    hasDropdown?: boolean;
    hasUpload?: boolean;
  }) => (
    <div className="relative">
      <input
        type={type}
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
      {hasUpload && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <svg
            className="w-6 h-6 text-slate-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z" />
          </svg>
        </div>
      )}
    </div>
  );

  return (
    <RegistrationLayout
      step={4}
      stepLabel="ID Proof"
      title="Partner Registration"
      onNext={handleNext}
      onBack={onBack}
      onSignIn={onSignIn}
    >
      <div className="grid grid-cols-3 gap-6">
        <InputField
          label="Aadhaar Number"
          value={formData.aadhaarNumber}
          onChange={(value) => handleInputChange("aadhaarNumber", value)}
        />
        <InputField
          label="PAN Card Number"
          value={formData.panCardNumber}
          onChange={(value) => handleInputChange("panCardNumber", value)}
          hasDropdown
        />
        <InputField
          label="Other ID (Driving License / Voter ID / Passport)"
          value={formData.otherId}
          onChange={(value) => handleInputChange("otherId", value)}
        />

        <InputField
          label="Aadhar Upload"
          value=""
          onChange={() => {}}
          hasUpload
        />
        <InputField label="Pan Upload" value="" onChange={() => {}} hasUpload />
        <InputField label="Upload" value="" onChange={() => {}} hasUpload />
      </div>
    </RegistrationLayout>
  );
};

export default IdProof;
