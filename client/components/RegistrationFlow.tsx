import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileVerification from "./registration/MobileVerification";
import PersonalDetails from "./registration/PersonalDetails";
import BusinessDetails from "./registration/BusinessDetails";
import IdProof from "./registration/IdProof";
import BusinessScope from "./registration/BusinessScope";
import ReligionCaste from "./registration/ReligionCaste";

const RegistrationFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Mobile Verification
    mobileNumber: "",
    otp: "",

    // Step 2: Personal Details
    firstName: "",
    surname: "",
    dateOfBirth: "",
    gender: "",
    emailId: "",
    whatsappNumber: "",
    fullAddress: "",
    state: "",
    district: "",
    city: "",
    pinCode: "",
    educationQualification: "",
    languagesKnown: "",
    yearsOfExperience: "",
    profilePhoto: null,

    // Step 3: Business Details
    businessName: "",
    businessType: "",
    businessRegistrationNumber: "",
    gstNumber: "",
    officeContactNumber: "",
    officeWhatsappNumber: "",
    officeAddress: "",
    officeState: "",
    officeDistrict: "",
    officeCity: "",
    socialMediaLink: "",
    numberOfStaff: "",
    servicesProvided: "",
    serviceMode: "",
    allDocuments: null,

    // Step 4: ID Proof
    aadhaarNumber: "",
    panCardNumber: "",
    otherId: "",
    aadhaarUpload: null,
    panUpload: null,
    otherIdUpload: null,

    // Step 5: Business Scope
    statesCovered: [],
    businessOperationArea: "",
    citiesDistrictsCovered: [],
    localityRegionFocus: "",
    operatesNationally: "",
    servesNriClients: "",

    // Step 6: Religion and Caste
    interReligionMarriages: "",
    intercasteMarriages: "",
    religionsServed: [],
    castes: [],
    subCastes: [],
    specialCommunitiesFocus: "",
    referenceId: "",
    referenceContact: "",
    termsAccepted: false,
    declarationAccepted: false,
  });

  const navigate = useNavigate();

  const updateFormData = (stepData: any) => {
    setFormData((prev) => ({ ...prev, ...stepData }));
  };

  const nextStep = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRegister = () => {
    // Process final registration
    console.log("Registration completed:", formData);
    // For now, redirect to login
    navigate("/");
  };

  const handleSignIn = () => {
    navigate("/");
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <MobileVerification
            data={formData}
            updateData={updateFormData}
            onNext={nextStep}
            onSignIn={handleSignIn}
          />
        );
      case 2:
        return (
          <PersonalDetails
            data={formData}
            updateData={updateFormData}
            onNext={nextStep}
            onBack={prevStep}
            onSignIn={handleSignIn}
          />
        );
      case 3:
        return (
          <BusinessDetails
            data={formData}
            updateData={updateFormData}
            onNext={nextStep}
            onBack={prevStep}
            onSignIn={handleSignIn}
          />
        );
      case 4:
        return (
          <IdProof
            data={formData}
            updateData={updateFormData}
            onNext={nextStep}
            onBack={prevStep}
            onSignIn={handleSignIn}
          />
        );
      case 5:
        return (
          <BusinessScope
            data={formData}
            updateData={updateFormData}
            onNext={nextStep}
            onBack={prevStep}
            onSignIn={handleSignIn}
          />
        );
      case 6:
        return (
          <ReligionCaste
            data={formData}
            updateData={updateFormData}
            onRegister={handleRegister}
            onBack={prevStep}
            onSignIn={handleSignIn}
          />
        );
      default:
        return null;
    }
  };

  return <div className="min-h-screen bg-slate-50">{renderCurrentStep()}</div>;
};

export default RegistrationFlow;
