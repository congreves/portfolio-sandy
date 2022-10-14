import React from "react";
import Image from "next/image";
import Link from "next/link";

function ProjectItem({ title, backgroundImg, projectUrl }) {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400  dark:shadow-black rounded-xl p-4 group hover:backdrop-filter hover:backdrop-blur-xl hover: border-gray-200 hover:bg-opacity-60 border cursor-pointer hover:scale-105 ease-in-out duration-300">
      <Image
        className="rounded-xl group-hover:opacity-10   "
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-[#121212] tracking-wide text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-center "></p>
        <Link href={projectUrl}>
          <button className="text-center  font-bold text-lg cursor-pointer">
            More Info
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProjectItem;
