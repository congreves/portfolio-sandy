import Image from "next/image";
import React from "react";
import chatImg from "../public/assets/projects/4.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";

function chat() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10 " />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={chatImg}
          alt="/"
        />
        <div className="flex flex-col items-start justify-start absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <Link href="/#projects">
            <div className="rounded-full my-5 dark:shadow-black shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#73BA9B] text-white dark:text-[#121212]">
              <HiArrowLeft size={25} />
            </div>
          </Link>
          <div className="flex flex-col justify-center mb-10 ">
            <h2 className="py-2">Realtime-Chatt App / School Project</h2>
            <h3>React / Sqlite3 / Socket.io / StyledComponents</h3>
          </div>
        </div>
      </div>

      {/**/}
      <div className="max-w-[1240px] mx-auto  p-2 grid md:grid-cols-5 gap-8 pt-8 mt-10">
        <div className="col-span-4">
          <p className="pb-2">Project</p>
          <h3 className="pb-4">Overview</h3>
          <p className="w-[100%]">
            - The backend is built using Node and Socket.io
            <br></br>- Has a associated frontend It must save message and room
            long-term, i a database
            <br></br>- Has support for multiple chat rooms
            <br></br>- You can create and delete chat rooms
            <br></br>- When you delete a chat room, its message is deleted
            <br></br>- Chat rooms created have unique names
            <br></br>- Every one message has info about who wrote it and when
            <br></br>- Contains a middleware that saves logs with relevant info
            in a or individual files (timestamp, who wrote it, in which channel)
            It validates messages on the backend so that a user cannot send an
            empty message.
          </p>
          <div className="flex mt-4 ">
            <a href="https://github.com/congreves/chat-client-front">
              <button className="px-8 py-2 cursor-pointer hover:scale-110 ease-in duration-300 m-2">
                Frontend Code
              </button>
            </a>
            <a href="https://github.com/congreves/chat-server">
              <button className="px-8 py-2  cursor-pointer hover:scale-110 ease-in duration-300 m-2">
                Backend Code
              </button>
            </a>
          </div>
        </div>
        <div className="col-span-4 md:col-span-1 dark:shadow-black shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-1 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> react
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> sqlite3
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> socket.io
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> styledComponents
              </p>
            </div>
          </div>
        </div>
        <div className=" lg:hidden flex justify-center py-6">
          <Link href="/#projects">
            <div className="rounded-full  dark:shadow-black shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#73BA9B] text-white dark:text-[#121212]">
              <HiArrowLeft size={25} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default chat;
