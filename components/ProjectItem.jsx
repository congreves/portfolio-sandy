import React from "react";
import Image from "next/image";
import Link from "next/link";

function ProjectItem(props) {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400  dark:shadow-black rounded-xl p-4 group hover:backdrop-filter hover:backdrop-blur-xl hover: border-gray-200 hover:bg-opacity-60 dark:border-none cursor-pointer hover:scale-105 ease-in-out duration-300">
      <section className="flex flex-col">
        <Image
          className="rounded-xl group-hover:opacity-10   "
          src={props.backgroundImg}
          alt="/"
        />

        <label className="p-2">{props.role}</label>
        <section className="flex ">
          <small>{props.tag1}</small> <small>{props.tag2}</small>{" "}
          <small>{props.tag3}</small><small>{props.tag4}</small>
        </section>
      </section>
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-[#121212] tracking-wide text-center">
          {props.title}
        </h3>
        <p className="pb-4 pt-2 text-center "></p>
        <Link href={props.projectUrl}>
          <button className="text-center  font-bold text-lg cursor-pointer">
            More Info
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProjectItem;
