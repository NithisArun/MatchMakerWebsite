import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FloatingLabelInput from "./ui/FloatingLabelInput";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just navigate to dashboard without actual authentication
    // In a real app, you would validate credentials here
    navigate("/dashboard");
  };

  const handleRegister = () => {
    navigate("/registration");
  };

  const handleForgotPassword = () => {
    // Handle forgot password (would be implemented later)
    console.log("Forgot password clicked");
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Left Side - Branding */}
      <div className="w-[840px] bg-slate-900 flex flex-col relative">
        {/* Logo/Branding */}
        <div className="p-6">
          <div className="bg-slate-800 rounded-md p-4 w-fit">
            <div className="text-white">
              <div className="text-xl font-bold font-barlow-semi-condensed">
                <span className="font-bold">MatchMakers </span>
                <span className="font-normal">Suite</span>
              </div>
              <div className="text-xs text-white opacity-90 font-barlow-semi-condensed">
                By Quantuva
              </div>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-slate-700 opacity-10 rounded-t-xl"></div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center px-8">
        <div className="w-full max-w-md space-y-8">
          {/* Quantuva Logo */}
          <div className="text-center mb-8">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F9b750bbc04374942900505df90dd8094%2Fc15ae17856544204818a5ae2456c104a?alt=media&token=4e74bed0-c876-4516-bce4-f14e7826f39f&apiKey=9b750bbc04374942900505df90dd8094"
              alt="Quantuva"
              className="h-8 mx-auto"
            />
          </div>

          {/* Welcome Header */}
          <div className="text-center">
            <h1 className="text-4xl font-normal text-slate-800 font-open-sans mb-2">
              Welcome Back :)
            </h1>
            <p className="text-sm text-slate-600 font-open-sans">
              Fill the below form to login
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Username Field */}
            <FloatingLabelInput
              label="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            {/* Password Field */}
            <FloatingLabelInput
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-4">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-sm text-blue-900 font-open-sans hover:underline"
              >
                Forget password
              </button>

              <button
                type="submit"
                className="bg-blue-900 text-white px-6 py-3 rounded-full text-sm font-open-sans hover:bg-blue-800 transition-colors"
              >
                Login
              </button>
            </div>
          </form>

          {/* Register Button */}
          <div className="text-center pt-8">
            <button
              onClick={handleRegister}
              className="border border-slate-300 text-slate-600 px-6 py-3 rounded-full text-sm font-open-sans hover:bg-slate-50 transition-colors"
            >
              Register now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
