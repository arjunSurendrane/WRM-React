import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Signup from "../Component/Signup";

export default function UserSignup() {
  const [cookies, setCookie] = useCookies();
  const history = useNavigate();
  useEffect(() => {
    if (cookies.userJwt) {
      history("/workspace");
    }
  });
  return (
    <div>
      <Signup />
    </div>
  );
}
