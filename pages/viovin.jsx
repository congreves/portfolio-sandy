import Image from "next/image";
import React from "react";
import wineImg from "../public/assets/projects/5.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";
import { GoLinkExternal } from "react-icons/go";

function viovin() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10 " />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={wineImg}
          alt="/"
        />
        <div className="flex flex-col items-start justify-start absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <Link href="/#projects">
            <div className="rounded-full my-5 dark:shadow-black shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#73BA9B] text-white dark:text-[#121212]">
              <HiArrowLeft size={25} />
            </div>
          </Link>
          <div className="flex flex-col justify-center mb-10 ">
            <h2 className="py-2">VioVin - Website</h2>
            <h3>Figma / React / Styled Components / React-Router-Dom</h3>
          </div>
        </div>
      </div>

      {/* Project content */}
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 mt-10">
        <div className="col-span-4">
          <p className="pb-2">Project</p>
          <h3 className="pb-4">Overview</h3>
          <p className="w-[100%]">
            - Created a website for a start-up that wanted to market their
            business for online presence.
            <br></br>- I was responsible for designing, developing and
            publishing the website.
            <br></br>- The site includes three pages & a navigation bar.
            <br></br>- The user is able to read about the company aswell as
            their products.
            <br></br>- The user is able to contact the business through the site
            but not purchase.
            <br></br>- The site is responsive.
          </p>
          <div className="flex mt-4 ">
            <a href="https://www.viovin.se/">
              <button className="px-8 py-2 cursor-pointer hover:scale-110 ease-in duration-300 m-4">
                Demo
              </button>
            </a>
            <a href="https://github.com/congreves/viovin-ecommerce">
              <button className=" flex align-center justify-center px-8 py-2 mt-4 mr-8 cursor-pointer hover:scale-110 ease-in duration-300">
                Code <GoLinkExternal />
              </button>
            </a>
          </div>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl  dark:shadow-black shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-1 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Styled Components
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> react-router-dom
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> axios
              </p>
            </div>
          </div>
        </div>
        <div className=" lg:hidden flex justify-center py-6">
          <Link href="/#projects">
            <div className="rounded-full my-5 dark:shadow-black shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#73BA9B] text-white dark:text-[#121212]">
              <HiArrowLeft size={25} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default viovin;
