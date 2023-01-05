import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Footer from "../Component/Footer";
import MiniDrawer from "../Component/MuiSidebar";
import Navbar from "../Component/Navbar";
import Sidebar from "../Component/Sidebar";

export default function WorkSpace() {
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
      <Navbar heading={"Workspace"} />
      {/* <Footer /> */}
    </div>
  );
}
