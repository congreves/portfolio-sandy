import Image from "next/image";
import React from "react";
import wineImg from "../public/assets/projects/viovin.png";
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
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">VioVin - Website</h2>
          <h3>Figma / React / Styled Components / React-Router-Dom</h3>
        </div>
      </div>

      {/* Project content */}
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="pb-2">Project</p>
          <h2 className="pb-4">Overview</h2>
          <p className="pb-4">
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
          <div className="flex ">
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
        <div className="flex justify-center py-12">
          <Link href="/#projects">
            <div className="rounded-full  dark:shadow-black shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-[#73BA9B]">
              <HiArrowLeft className="text-[#73BA9B]" sixe={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default viovin;
