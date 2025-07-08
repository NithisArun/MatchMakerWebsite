import React from "react";

interface RegistrationLayoutProps {
  step: number;
  stepLabel: string;
  title: string;
  children: React.ReactNode;
  onBack?: () => void;
  onNext?: () => void;
  onRegister?: () => void;
  onSignIn: () => void;
  isLastStep?: boolean;
  nextButtonText?: string;
}

const RegistrationLayout: React.FC<RegistrationLayoutProps> = ({
  step,
  stepLabel,
  title,
  children,
  onBack,
  onNext,
  onRegister,
  onSignIn,
  isLastStep = false,
  nextButtonText = "Save and Next",
}) => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Navigation */}
      <div className="flex h-[70px]">
        {/* Left Brand Section */}
        <div className="w-[210px] bg-slate-800 flex items-center px-6">
          <div>
            <div className="text-white font-barlow-semi-condensed text-xl">
              <span className="font-bold">MatchMakers </span>
              <span className="font-normal">Suite</span>
            </div>
            <div className="text-white font-barlow-semi-condensed text-xs opacity-90">
              By Quantuva
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-white shadow-sm flex items-center px-6">
          <h1 className="text-2xl font-light text-zinc-800 font-open-sans">
            Registration
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-[131px] py-8">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-light text-slate-600 font-open-sans mb-2">
            Partner Registration
          </h2>
          <div className="text-sm font-bold text-slate-900 font-open-sans mb-4">
            Step {step} of 6
          </div>
          <div className="text-sm font-semibold text-slate-700 font-open-sans">
            {stepLabel}
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-lg border border-slate-200 p-12 mb-8">
          {children}
        </div>

        {/* Bottom Actions */}
        <div className="flex justify-between items-center">
          <button
            onClick={onSignIn}
            className="text-sm font-semibold text-slate-700 hover:text-blue-800 font-open-sans"
          >
            Already have account? <span className="text-blue-800">Sign In</span>
          </button>

          <div className="flex gap-4">
            {onBack && (
              <button
                onClick={onBack}
                className="border border-blue-900 text-blue-900 px-4 py-3 rounded-full text-sm font-open-sans hover:bg-blue-50 transition-colors"
              >
                Back
              </button>
            )}

            {isLastStep ? (
              <button
                onClick={onRegister}
                className="bg-blue-900 text-white px-6 py-3 rounded-full text-sm font-open-sans hover:bg-blue-800 transition-colors"
              >
                Register
              </button>
            ) : (
              <button
                onClick={onNext}
                className="bg-blue-900 text-white px-8 py-3 rounded-full text-sm font-open-sans hover:bg-blue-800 transition-colors"
              >
                {nextButtonText}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationLayout;
