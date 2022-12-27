import React from "react";
import { HiOutlineHome, HiStatusOnline } from "react-icons/hi";
import { AiOutlineNotification } from "react-icons/ai";
import { BiChat } from "react-icons/bi";
import { MdWorkspacesOutline } from "react-icons/md";

export default function Sidebar() {
  return (
    <div className="md:visible invisible">
      <aside className="w-64" aria-label="Sidebar">
        <div className="overflow-y-auto absolute z-[-1] border-r-2 py-36 px-3  w-[15%]  h-[900px] max-h-full">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className=" flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-100"
              >
                <HiOutlineHome size={20} />

                <span className="ml-3">Home</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-100"
              >
                <AiOutlineNotification size={20} />

                <span className="flex-1 ml-3 whitespace-nowrap">
                  Notification
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-100"
              >
                <HiStatusOnline size={20} />
                <span className="flex-1 ml-3 whitespace-nowrap">Online</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-100"
              >
                <BiChat size={20} />
                <span className="flex-1 ml-3 whitespace-nowrap">Chat</span>
              </a>
            </li>
            <hr />
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-100"
              >
                <MdWorkspacesOutline size={20} />
                <span className="flex-1 ml-3 whitespace-nowrap">Workspace</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
