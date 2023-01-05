import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import ChatScreen from "../Component/Chat/Chat";
import Navbar from "../Component/Navbar";
import Sidebar from "../Component/Sidebar";

export default function Chat() {
  const [cookies, setCookie] = useCookies();
  const history = useNavigate();
  useEffect(() => {
    // if (!cookies.userJwt) {
    //   history("/");
    // }
  });
  return (
    <div>
      <Sidebar />
      <Navbar heading={"Chat"} />
      <div className="md:mx-[18%] absolute items-center">
        <ChatScreen />
      </div>
    </div>
  );
}
