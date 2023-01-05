import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Notifications from "../Component/Notification/notifications";
import Sidebar from "../Component/Sidebar";

export default function Notification() {
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
      <Navbar heading={"Notification"} />
      <div className="md:mx-[18%] absolute items-center">
        <Notifications />
      </div>
    </div>
  );
}
