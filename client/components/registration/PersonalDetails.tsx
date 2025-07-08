import { useState } from "react";
import RegistrationLayout from "./RegistrationLayout";

interface PersonalDetailsProps {
  data: any;
  updateData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
  onSignIn: () => void;
}

const PersonalDetails: React.FC<PersonalDetailsProps> = ({
  data,
  updateData,
  onNext,
  onBack,
  onSignIn,
}) => {
  const [formData, setFormData] = useState({
    firstName: data.firstName || "",
    surname: data.surname || "",
    dateOfBirth: data.dateOfBirth || "",
    gender: data.gender || "",
    emailId: data.emailId || "",
    whatsappNumber: data.whatsappNumber || "",
    fullAddress: data.fullAddress || "",
    state: data.state || "",
    district: data.district || "",
    city: data.city || "",
    pinCode: data.pinCode || "",
    educationQualification: data.educationQualification || "",
    languagesKnown: data.languagesKnown || "",
    yearsOfExperience: data.yearsOfExperience || "",
    profilePhoto: data.profilePhoto || null,
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
    fullWidth = false,
  }: {
    label: string;
    value: string;
    onChange: (value: string) => void;
    type?: string;
    hasDropdown?: boolean;
    hasUpload?: boolean;
    fullWidth?: boolean;
  }) => (
    <div className={`relative ${fullWidth ? "col-span-2" : ""}`}>
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
      step={2}
      stepLabel="Personal Details"
      title="Partner Registration"
      onNext={handleNext}
      onBack={onBack}
      onSignIn={onSignIn}
    >
      <div className="grid grid-cols-3 gap-6">
        <InputField
          label="First Name"
          value={formData.firstName}
          onChange={(value) => handleInputChange("firstName", value)}
        />
        <InputField
          label="Surname"
          value={formData.surname}
          onChange={(value) => handleInputChange("surname", value)}
        />
        <InputField
          label="Date of Birth"
          value={formData.dateOfBirth}
          onChange={(value) => handleInputChange("dateOfBirth", value)}
          type="date"
        />

        <InputField
          label="Gender"
          value={formData.gender}
          onChange={(value) => handleInputChange("gender", value)}
          hasDropdown
        />
        <InputField
          label="Email ID"
          value={formData.emailId}
          onChange={(value) => handleInputChange("emailId", value)}
          type="email"
        />
        <InputField
          label="WhatsApp Number"
          value={formData.whatsappNumber}
          onChange={(value) => handleInputChange("whatsappNumber", value)}
        />

        <InputField
          label="Full Address (Door No)"
          value={formData.fullAddress}
          onChange={(value) => handleInputChange("fullAddress", value)}
          fullWidth
        />
        <InputField
          label="State"
          value={formData.state}
          onChange={(value) => handleInputChange("state", value)}
          hasDropdown
        />

        <InputField
          label="District"
          value={formData.district}
          onChange={(value) => handleInputChange("district", value)}
          hasDropdown
        />
        <InputField
          label="City"
          value={formData.city}
          onChange={(value) => handleInputChange("city", value)}
          hasDropdown
        />
        <InputField
          label="Pin Code"
          value={formData.pinCode}
          onChange={(value) => handleInputChange("pinCode", value)}
        />

        <InputField
          label="Education Qualification"
          value={formData.educationQualification}
          onChange={(value) =>
            handleInputChange("educationQualification", value)
          }
          hasDropdown
        />
        <InputField
          label="Languages Known"
          value={formData.languagesKnown}
          onChange={(value) => handleInputChange("languagesKnown", value)}
        />
        <InputField
          label="Years of Experience in Matchmaking (if any)"
          value={formData.yearsOfExperience}
          onChange={(value) => handleInputChange("yearsOfExperience", value)}
        />

        <InputField
          label="Profile Photo Upload"
          value=""
          onChange={() => {}}
          hasUpload
        />
      </div>
    </RegistrationLayout>
  );
};

export default PersonalDetails;
