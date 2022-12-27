import React from "react";
import Login from "../Component/Login";
import Modal from "../Component/Modal";

export default function ForgotPassword() {
  return (
    <div>
      <Login />
      <Modal
        setShowModal={() => ""}
        heading={"OTP"}
        placeholder={"Enter OTP"}
        button={"Submit"}
        url={"/workspace"}
        api={"/user/verifyOtpLogin"}
      />
    </div>
  );
}
