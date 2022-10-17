import React from "react";
import Image from "next/image";
import profileImg from "../public/assets/profileme.jpg";
import Link from "next/link";

function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 p-4">
          <p className=" py-4 max-w-[70%] uppercase text-md tracking-widest text-gray-600">
            <span className="text-[#73BA9B]">⎯⎯⎯⎯⎯</span> ABOUT
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-4 text-gray-600">
            Hi,I'm Sandy Congreve 28 years old from Uppsala, Sweden. Former
            Experience Designer & learning Frontend Developer currently studying
            at ChangeMakers Educations in Stockholm. I&#39;m a react and CSS
            nerd. I can&#39;t shut up about utility-first driven CSS and
            consistency in development.
          </p>
          <h3>Background</h3>
          <p className=" text-gray-600 py-4">--</p>
          <h3>Goal</h3>

          <p className="py-4">..is that I'd like to learn as much I can</p>
          <Link href="/#projects">
            <button className="py-2 cursor-pointer">
              Check out some of my latest projects.
            </button>
          </Link>
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
