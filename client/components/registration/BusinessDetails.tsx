import { useState } from "react";
import RegistrationLayout from "./RegistrationLayout";

interface BusinessDetailsProps {
  data: any;
  updateData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
  onSignIn: () => void;
}

const BusinessDetails: React.FC<BusinessDetailsProps> = ({
  data,
  updateData,
  onNext,
  onBack,
  onSignIn,
}) => {
  const [formData, setFormData] = useState({
    businessName: data.businessName || "",
    businessType: data.businessType || "",
    businessRegistrationNumber: data.businessRegistrationNumber || "",
    gstNumber: data.gstNumber || "",
    officeContactNumber: data.officeContactNumber || "",
    officeWhatsappNumber: data.officeWhatsappNumber || "",
    officeAddress: data.officeAddress || "",
    officeState: data.officeState || "",
    officeDistrict: data.officeDistrict || "",
    officeCity: data.officeCity || "",
    socialMediaLink: data.socialMediaLink || "",
    numberOfStaff: data.numberOfStaff || "",
    servicesProvided: data.servicesProvided || "",
    serviceMode: data.serviceMode || "",
    allDocuments: data.allDocuments || null,
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
      step={3}
      stepLabel="Business Details"
      title="Partner Registration"
      onNext={handleNext}
      onBack={onBack}
      onSignIn={onSignIn}
    >
      <div className="grid grid-cols-3 gap-6">
        <InputField
          label="Business/Agency Name"
          value={formData.businessName}
          onChange={(value) => handleInputChange("businessName", value)}
        />
        <InputField
          label="Business Type"
          value={formData.businessType}
          onChange={(value) => handleInputChange("businessType", value)}
          hasDropdown
        />
        <InputField
          label="Business Registration Number (if any)"
          value={formData.businessRegistrationNumber}
          onChange={(value) =>
            handleInputChange("businessRegistrationNumber", value)
          }
        />

        <InputField
          label="GST Number (if applicable)"
          value={formData.gstNumber}
          onChange={(value) => handleInputChange("gstNumber", value)}
        />
        <InputField
          label="Office Contact Number"
          value={formData.officeContactNumber}
          onChange={(value) => handleInputChange("officeContactNumber", value)}
        />
        <InputField
          label="WhatsApp Number"
          value={formData.officeWhatsappNumber}
          onChange={(value) => handleInputChange("officeWhatsappNumber", value)}
        />

        <InputField
          label="Office Address (if different from personal)"
          value={formData.officeAddress}
          onChange={(value) => handleInputChange("officeAddress", value)}
          fullWidth
        />
        <InputField
          label="State"
          value={formData.officeState}
          onChange={(value) => handleInputChange("officeState", value)}
          hasDropdown
        />

        <InputField
          label="District"
          value={formData.officeDistrict}
          onChange={(value) => handleInputChange("officeDistrict", value)}
          hasDropdown
        />
        <InputField
          label="City"
          value={formData.officeCity}
          onChange={(value) => handleInputChange("officeCity", value)}
          hasDropdown
        />
        <InputField
          label="Social Media Link (optional)"
          value={formData.socialMediaLink}
          onChange={(value) => handleInputChange("socialMediaLink", value)}
        />

        <InputField
          label="Number of Staff (if any)"
          value={formData.numberOfStaff}
          onChange={(value) => handleInputChange("numberOfStaff", value)}
        />
        <InputField
          label="Services Provided"
          value={formData.servicesProvided}
          onChange={(value) => handleInputChange("servicesProvided", value)}
          hasDropdown
        />
        <InputField
          label="Service Mode (Offline / Online / Both)"
          value={formData.serviceMode}
          onChange={(value) => handleInputChange("serviceMode", value)}
        />

        <InputField
          label="All documents Upload"
          value=""
          onChange={() => {}}
          hasUpload
        />
      </div>
    </RegistrationLayout>
  );
};

export default BusinessDetails;
