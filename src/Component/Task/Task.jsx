import React from "react";
import { BiRightArrow } from "react-icons/bi";
import { AiOutlineUserAdd, AiOutlineCloudUpload } from "react-icons/ai";
import { CgFlagAlt } from "react-icons/cg";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { TbSubtask, TbSend } from "react-icons/tb";
import { Avatar } from "@mui/material";

export default function Task() {
  return (
    <div>
      <div>
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none bg-black bg-opacity-60 focus:outline-none">
          <div className="relative mx-auto max-w-full min-w-[90%]  ">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-center  justify-between p-2 border-b border-solid border-gray-300 rounded-t ">
                <h1 className="font-bold text-lg">{"Department>Task"}</h1>
                <button
                  className="bg-transparent border-0 text-black float-right"
                  onClick={() => setShowModal()}
                >
                  x
                </button>
              </div>
              <div className="relative p-3 flex-auto mb-2 flex justify-between border-b-2">
                <div id="header" className="w-[100%]">
                  <div id="" className="flex justify-between border-r-2 pr-2">
                    <div
                      id=""
                      className="flex justify-around w-[50%] border-r-2"
                    >
                      <div className="flex">
                        <div
                          id=""
                          className=" py-2 px-2 h-8 bg-gray-400 rounded-l"
                        >
                          <p className="text-xs text-white">IN PROGRESS</p>
                        </div>
                        <div
                          id=""
                          className="w-5 h-8  bg-gray-400 rounded-r mx-1 text-center text-white
                          "
                        >
                          {">"}
                        </div>
                      </div>
                      <div className="py-2 ">
                        <AiOutlineUserAdd size={20} color={"gray"} />
                      </div>
                      <div className="py-2 ">
                        <CgFlagAlt size={20} color={"gray"} />
                      </div>
                    </div>
                    <div>
                      <div className="py-2">
                        <MdOutlineDeleteOutline size={20} color={"gray"} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-[100%] flex justify-center">
                  <div className="border-r-2 px-4">
                    <div>
                      <p className="text-[10px] uppercase font-medium text-gray-500">
                        CREATED BY
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-[10px]  font-medium text-gray-500">
                        Arjun
                      </p>
                    </div>
                  </div>
                  <div className="border-r-2 px-4">
                    <div>
                      <p className="text-[10px] uppercase font-medium text-gray-500">
                        start date
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-[10px]  font-medium text-gray-500">
                        19/04/2023
                      </p>
                    </div>
                  </div>
                  <div className="border-r-2 px-4">
                    <div>
                      <p className="text-[10px] uppercase font-medium text-gray-500">
                        due date
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-[10px]  font-medium text-gray-500">
                        22/04/2023
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between px-10 py-10">
                <div className="w-[50%] border-r-2 px-3">
                  <h1 className="text-2xl">Task Name</h1>
                  <div className="mt-5">
                    <p>Discription</p>
                  </div>
                  <div className="mt-5 w-full border-2 border-dotted rounded  text-center py-2 cursor-pointer">
                    <p className="text-sm">+ Add Subtask</p>
                  </div>
                  <div className="mt-5">
                    <ol>
                      <li className="text-sm mt-3">
                        <div className="flex justify-around">
                          <div className="flex">
                            <TbSubtask size={18} />
                            subtaskOne
                          </div>
                          <div>
                            <AiOutlineUserAdd size={20} color={"gray"} />{" "}
                          </div>
                        </div>
                      </li>
                      <li className="text-sm mt-3">
                        <div className="flex justify-around">
                          <div className="flex">
                            <TbSubtask size={18} />
                            subtaskTwo
                          </div>
                          <div>
                            <AiOutlineUserAdd size={20} color={"gray"} />{" "}
                          </div>
                        </div>
                      </li>
                    </ol>
                  </div>
                  <div className="mt-5">
                    <div>
                      <h1>Attachments</h1>
                    </div>
                    <div className=" grid grid-cols-3 gap-4 mr-2">
                      <div className="h-32 w-full  bg-gray-300 m-2"></div>
                      <div className="h-32 w-full  bg-gray-300 m-2"></div>
                      <div className="h-32 w-full  bg-gray-300 m-2"></div>
                      <div className="h-32 w-full  bg-gray-300 m-2"></div>
                      <div className="h-32 w-full  bg-gray-300 m-2"></div>
                      <div className="h-32 w-full  bg-gray-300 m-2"></div>
                    </div>
                  </div>
                </div>
                <div className="w-[50%] px-5 py-5 bg-[#fbfbfb]">
                  <div className="flex justify-between">
                    <div className="w-[10%]">
                      <Avatar>H</Avatar>
                    </div>
                    <div className="w-[90%] shadow-lg  border rounded-b-lg rounded-r-lg  px-5 py-2">
                      <div className="flex justify-between">
                        <div>username</div>
                        <div>time</div>
                      </div>
                      <div>
                        <p className="text-sm">new message</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex py-5">
                <div className="w-[50%] flex justify-center border-r-2">
                  {" "}
                  <label
                    htmlFor="dropzone-file"
                    className="cursor-pointer flex"
                  >
                    <div>
                      <AiOutlineCloudUpload size={20} />
                    </div>
                    <div className="mx-1">
                      <p className="text-sm">Drop files here to attach</p>{" "}
                      <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                      />
                    </div>
                  </label>
                </div>
                <div className="w-[50%] px-5 flex justify-between">
                  <div>
                    <input
                      type="text"
                      placeholder="write comment"
                      className="focus:border-none hover:border-none selection:border-none"
                    />
                  </div>
                  <div>
                    <TbSend size={20} color={"gray"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
