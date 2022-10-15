import Image from "next/image";
import React from "react";
import wineImg from "../public/assets/projects/viovin.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";

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
          <h3>Figma / React / Styled Components / Netlify</h3>
        </div>
      </div>

      {/* Project content */}
      <div className="max-w-[1240] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            eum quae exercitationem ea aperiam ipsa, iusto dicta sint
            reiciendis? Voluptatem perspiciatis, eum vitae saepe dicta porro
            vero autem accusantium magni!
          </p>
          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          <button className="px-8 py-2 mt-4">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
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
                <RiRadioButtonFill className="pr-1" /> Javas Script
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Netlify
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
