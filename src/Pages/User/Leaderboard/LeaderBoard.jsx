import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import UserLeaderBoard from "../../../Component/User/LeaderBoard/userLeaderBoard";
import Navbar from "../../../Component/User/Navbar/Navbar";
import Sidebar from "../../../Component/User/Sidebar/Sidebar";

export default function LeaderBoard() {
  const [cookies, setCookie] = useCookies();
  const history = useNavigate();
  useEffect(() => {
    if (!cookies.userJwt) {
      history("/");
    }
  });
  return (
    <div>
      <Sidebar />
      <Navbar heading={"LeaderBoard"} active={"h"} />
      <div className="md:mx-[18%] absolute items-center">
        <UserLeaderBoard />
      </div>
    </div>
  );
}
