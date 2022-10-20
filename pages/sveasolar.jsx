import Image from "next/image";
import React from "react";
import sveaSolarImg from "../public/assets/projects/sveasolar.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";

function sveasolar() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10 " />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={sveaSolarImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Svea Solar - Re-Design Landing Page</h2>
          <h3>Figma / Design Systems / Adobe Premiere Pro</h3>
        </div>
      </div>

      {/**/}
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="pb-2">Project</p>
          <h2 className="pb-4">Overview</h2>
          <p className="pb-4">
            - Redesigned the solar park page for Svea Solar.
            <br></br>- Did lo-fi wireframing and hi-fi prototyping in Figma and
            delivered mock-ups.
            <br></br>- Iterative process working closely with stakholders,
            designers and frontend engineers.
            <br></br>- Created short banner video in premier pro which was
            included in the site.
            <br></br>- Contributed and worked on a developing design system in
            Figma throughout my time at the company.
          </p>
          <div className="flex ">
            <a href="https://sveasolar.com/solar-park/">
              <button className="px-8 py-2 cursor-pointer hover:scale-110 ease-in duration-300 m-4">
                Demo
              </button>
            </a>
          </div>
        </div>
        <div className="col-span-4 md:col-span-1 dark:shadow-black shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-1 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Figma
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Design Systems
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Adobe Premiere Pro
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

export default sveasolar;
