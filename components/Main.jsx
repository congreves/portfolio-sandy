import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Image from "next/image";
import profileImg from "../public/assets/profileme.jpg";

function Main() {
  return (
    <div id="home" className="w-full h-[75vh] text-center md:h-screen  ">
      <div className="max-w-[1240px] w-full lg:h-full mx-auto p-2 flex justify-center items-center  ">
        <div className=" mt-10 grid lg:grid-cols-4 gap-8  ">
          <div className="col-span-2 p-4">
            <p className=" py-4 uppercase text-sm tracking-widest text-gray-600">
              <span className="text-[#73BA9B]">⎯⎯⎯⎯⎯</span> CREATIVE DEVELOPER
            </p>
            <h1 className=" py-4 text-gray-700 text-left">
              <span className="animate-wave-hand">👋🏾</span> Holii, I&#39;m{" "}
              <span className="text-[#73BA9B] text-left">Sandy.</span>
            </h1>
            <p className="  py-4 text-gray-600 ">
              Curious & engaged frontend-developer student that's <br></br>
              looking for a internship to learn, contribute & develop!
            </p>
            <div className=" flex-wrap">
              <section className="flex items-center justify-between max-w-[330px] gap-8 pt-6">
                <div className="rounded-full shadow-xl shadow-gray-400  dark:shadow-black p-4 cursor-pointer hover:scale-110 ease-in duration-300 text-[#73BA9B]">
                  <a href="www.linkedin.com/in/sandycongreve">
                    <FaLinkedinIn size={24} />
                  </a>
                </div>
                <div className="rounded-full shadow-xl shadow-gray-400   dark:shadow-black p-4 cursor-pointer hover:scale-110 ease-in duration-300 text-[#73BA9B]">
                  <a href="https://github.com/congreves">
                    <FaGithub size={24} />
                  </a>
                </div>
                <div className="rounded-full shadow-xl shadow-gray-400   dark:shadow-black p-4 cursor-pointer hover:scale-110 ease-in duration-300 text-[#73BA9B]">
                  <a href="https://www.sandycongreve.com/">
                    {" "}
                    <AiOutlineMail size={24} />{" "}
                  </a>
                </div>
                <div className="flex-row rounded-full shadow-xl shadow-gray-400   dark:shadow-black  p-4 cursor-pointer hover:scale-110 ease-in duration-300 text-[#73BA9B]">
                  <a href="https://www.sandycongreve.com/">
                    <BsFillPersonLinesFill size={24} />
                  </a>
                </div>
              </section>
              <a
                href="https://www.slideshare.net/SandyCongreve/a4-cv-2022pdf"
                className="flex items-center justify-between max-w-[330px] pt-10 hover:scale-105 ease-in duration-300 "
              >
                <button>DOWNLOAD MY CV</button>
              </a>
            </div>
          </div>
          <div className="lg:col-span-2 sm:col-span-1 p-4 hover:scale-105 ease-in duration-300 ">
            <Image
              className="rounded-xl w-full h-auto m-auto  dark:shadow-black shadow-xl shadow-gray-400 rounded-xl "
              src={profileImg}
              alt="/"
              width="500%"
              height="500%"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

/*<div className="col-span-2">
<Blob />
</div>*/
