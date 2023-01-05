import React from "react";
import MenuButton from "../Component/menuButton";
import Navbar from "../Component/Navbar";
import Sidebar from "../Component/Sidebar";
import Board from "../Component/TaskList/boardView";

export default function TaskBoard() {
  return (
    <div>
      <Sidebar />
      <Navbar
        heading={"List"}
        secHeading={"board"}
        thirdHeading={"calender"}
        active={"s"}
      />
      <div className="md:mx-[18%] absolute items-center">
        <Board />
      </div>
      <MenuButton />
    </div>
  );
}
