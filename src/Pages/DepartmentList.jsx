import React from "react";
import MenuButton from "../Component/menuButton";
import Navbar from "../Component/Navbar";
import Sidebar from "../Component/Sidebar";
import AddTask from "../Component/Task/addTask";
import List from "../Component/TaskList/List";

export default function DepartmentList() {
  return (
    <div>
      <Sidebar />
      <Navbar
        heading={"List"}
        secHeading={"board"}
        thirdHeading={"calender"}
        active={"h"}
      />
      <div className="md:mx-[18%] absolute items-center">
        <List />
      </div>
      <MenuButton />
    </div>
  );
}
