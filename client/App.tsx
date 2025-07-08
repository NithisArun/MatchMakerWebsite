import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Index from "./pages/Index";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import ContactUs from "./pages/ContactUs";
import Wallet from "./pages/Wallet";
import Website from "./pages/Website";
import RequestWithdrawal from "./pages/RequestWithdrawal";
import Marketing from "./pages/Marketing";
import Registration from "./pages/Registration";
import Profiles from "./pages/Profiles";
import CloudProfiles from "./pages/CloudProfiles";
import SubscriptionPlans from "./pages/SubscriptionPlans";
import NewPlan from "./pages/NewPlan";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/marketing" element={<Index />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/website" element={<Website />} />
          <Route path="/request-withdrawal" element={<RequestWithdrawal />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/cloud-profiles" element={<CloudProfiles />} />
          <Route path="/subscription-plans" element={<SubscriptionPlans />} />
          <Route path="/subscription-plans/new" element={<NewPlan />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
