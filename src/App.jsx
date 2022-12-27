import React from "react";
import LandingPage from "./Pages/landingPage";
import { Routes, Route } from "react-router-dom";
import UserLogin from "./Pages/userLogin";
import UserSignup from "./Pages/userSignup";
import OtpPage from "./Pages/OtpPage";
import WorkSpace from "./Pages/WorkspaceHome";
import ForgotPassword from "./Pages/forgotPasswordOtp";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/otpVerification" element={<OtpPage />} />
        <Route path="/workspace" element={<WorkSpace />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;
