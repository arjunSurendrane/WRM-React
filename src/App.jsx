import React from "react";
import LandingPage from "./Pages/landingPage";
import { Routes, Route } from "react-router-dom";
import UserLogin from "./Pages/userLogin";
import UserSignup from "./Pages/userSignup";
import OtpPage from "./Pages/OtpPage";
import WorkSpace from "./Pages/WorkspaceHome";
import ForgotPassword from "./Pages/forgotPasswordOtp";
import Home from "./Pages/Home";
import Notification from "./Pages/Notification";
import Online from "./Pages/Online";
import Chat from "./Pages/Chat";
import DepartmentList from "./Pages/DepartmentList";
import TaskBoard from "./Pages/TaskBoard";

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
        <Route path="/home" element={<Home />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/online" element={<Online />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/department/list" element={<DepartmentList />} />
        <Route path="/department/board" element={<TaskBoard />} />
      </Routes>
    </div>
  );
}

export default App;
