import { useState } from "react";
import RegistrationLayout from "./RegistrationLayout";
import FloatingLabelInput from "../ui/FloatingLabelInput";

interface MobileVerificationProps {
  data: any;
  updateData: (data: any) => void;
  onNext: () => void;
  onSignIn: () => void;
}

const MobileVerification: React.FC<MobileVerificationProps> = ({
  data,
  updateData,
  onNext,
  onSignIn,
}) => {
  const [mobileNumber, setMobileNumber] = useState(data.mobileNumber || "");
  const [otp, setOtp] = useState(data.otp || "");
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOtp = () => {
    if (mobileNumber.trim()) {
      setOtpSent(true);
      // In a real app, send OTP here
      console.log("Sending OTP to:", mobileNumber);
    }
  };

  const handleNext = () => {
    updateData({ mobileNumber, otp });
    onNext();
  };

  return (
    <RegistrationLayout
      step={1}
      stepLabel="Mobile Number Verification"
      title="Partner Registration"
      onNext={handleNext}
      onSignIn={onSignIn}
    >
      <div className="max-w-md mx-auto space-y-6">
        {/* Mobile Number Field */}
        <div className="relative">
          <div className="relative">
            <input
              type="tel"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              placeholder=" "
              className="peer w-full h-14 px-4 pr-28 border border-slate-400 rounded-md bg-white text-sm font-open-sans focus:outline-none focus:border-blue-900 transition-colors"
            />
            <label className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-600 font-open-sans transition-all duration-200 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1">
              Mobile No
            </label>
            {otpSent && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.55 18L3.85 12.3L5.275 10.875L9.55 15.15L18.725 5.975L20.15 7.4L9.55 18Z" />
                </svg>
              </div>
            )}
          </div>
          {!otpSent && (
            <button
              onClick={handleSendOtp}
              className="absolute right-2 top-1/2 -translate-y-1/2 border border-blue-900 text-blue-900 px-4 py-2 rounded-full text-sm font-open-sans hover:bg-blue-50 transition-colors"
            >
              Send OTP
            </button>
          )}
        </div>

        {/* OTP Field */}
        {otpSent && (
          <div className="relative">
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder=" "
              className="peer w-full h-14 px-4 pr-12 border border-slate-400 rounded-md bg-white text-sm font-open-sans focus:outline-none focus:border-blue-900 transition-colors"
              maxLength={8}
            />
            <label className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-600 font-open-sans transition-all duration-200 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1">
              OTP
            </label>
            {otp.length >= 6 && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.55 18L3.85 12.3L5.275 10.875L9.55 15.15L18.725 5.975L20.15 7.4L9.55 18Z" />
                </svg>
              </div>
            )}
          </div>
        )}
      </div>
    </RegistrationLayout>
  );
};

export default MobileVerification;
