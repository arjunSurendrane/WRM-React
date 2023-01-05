import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import LineUp from "../Component/Home/LineUp";
import MyWork from "../Component/Home/MyWork";
import Navbar from "../Component/Navbar";
import Sidebar from "../Component/Sidebar";

export default function Home() {
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
      <Navbar heading={"Home"} />
      <div className="md:mx-[18%] absolute">
        <LineUp />
        <MyWork />
      </div>
    </div>
  );
}
