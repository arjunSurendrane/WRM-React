import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Chart from "../Component/Online/Chart";
import UserCard from "../Component/Online/userCard";
import Sidebar from "../Component/Sidebar";

export default function Online() {
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
      <Navbar heading={"Online"} />
      <div className="md:mx-[18%] absolute items-center">
        <Chart />
        <UserCard />
      </div>
    </div>
  );
}
