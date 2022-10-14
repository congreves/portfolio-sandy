import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Blob from "./Blob";

function Main() {
  return (
    <div id="home" className="w-full h-[75vh] text-center md:h-screen">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center ">
        <div className=" grid lg:grid-cols-4 gap-8 ">
          <div className="col-span-2">
            <p className=" py-4 max-w-[70%] uppercase text-sm tracking-widest text-gray-600">
              LET&#39;S BUILD SOMETHING GREAT TOGETHER
            </p>
            <h1 className=" font-satoshi py-4 text-gray-700 text-left">
              <span className="animate-wave-hand">👋🏾</span> Holii, I&#39;m{" "}
              <span className="text-[#73BA9B] text-left">Sandy.</span>
            </h1>
            <h1 className="pt-4 pb-0 text-gray-700 text-left"></h1>
            <p className="py-4 text-gray-600 ">
              Curious & engaged frontend-developer student that's looking for a
              workplace to learn, contribute & develop. Is that you
            </p>
            <div className="flex items-center justify-between max-w-[330px] gap-8 py-4">
              <div className="rounded-full shadow-xl shadow-gray-400  dark:shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-[#73BA9B]">
                <a href="www.linkedin.com/in/sandycongreve">
                  <FaLinkedinIn size={30} />
                </a>
              </div>
              <div className="rounded-full shadow-xl shadow-gray-400   dark:shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-[#73BA9B]">
                <a href="https://github.com/congreves">
                  <FaGithub size={30} />
                </a>
              </div>
              <div className="rounded-full shadow-xl shadow-gray-400   dark:shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-[#73BA9B]">
                <a href="https://www.sandycongreve.com/">
                  {" "}
                  <AiOutlineMail size={30} />{" "}
                </a>
              </div>
              <div className="flex-row rounded-full shadow-xl shadow-gray-400   dark:shadow-black  p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-[#73BA9B]">
                <a href="https://www.sandycongreve.com/">
                  <BsFillPersonLinesFill size={30} />
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <Blob />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
