import React from "react";
import Image from "next/image";
import profileImg from "../public/assets/profileme.jpg";

function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#73BA9B]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">Im a creative developer</p>
          <p className="py-2 text-gray-600">
            ...that has a big interest in people, culture and the magic that
            happens when we create group synergy.
          </p>
          <p className="py-2 text-gray-600">
            Former Experience Designer & learning Frontend Developer currently
            studying at Change Makers Educations in Stockholm. I&#39;m a react
            and CSS nerd. I can&#39;t shut up about utility-first driven CSS and
            consistency in development.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </div>
        <div className="w-full h-auto m-auto  dark:shadow-black shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 ">
          <Image
            className="rounded-xl"
            src={profileImg}
            alt="/"
            width="500%"
            height="500%"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
