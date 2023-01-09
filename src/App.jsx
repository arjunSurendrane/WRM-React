import React from "react";
import { Routes, Route } from "react-router-dom";
import Chat from "./Pages/User/Chat/Chat";
import Home from "./Pages/User/Home/Home";
import LandingPage from "./Pages/User/LandingPage/LandingPage";
import LeaderBoard from "./Pages/User/Leaderboard/LeaderBoard";
import ForgotPassword from "./Pages/User/Login/forgotPasswordOtp";
import OtpPage from "./Pages/User/Login/OtpPage";
import UserLogin from "./Pages/User/Login/userLogin";
import Online from "./Pages/User/Online/Online";
import Profile from "./Pages/User/Profile/Profile";
import UserSignup from "./Pages/User/Signup/userSignup";
import DepartmentList from "./Pages/User/Task/DepartmentList";
import TaskBoard from "./Pages/User/Task/TaskBoard";
import Subscribe from "./Pages/User/Upgrade/Subscribe";
import WorkSpace from "./Pages/WorkspaceHome";
import TaskView from "./Pages/TaskView";
import Notification from "./Pages/User/Notification/Notification";

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
        <Route path="/task" element={<TaskView />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/subscribe" element={<Subscribe />} />
      </Routes>
    </div>
  );
}

export default App;
