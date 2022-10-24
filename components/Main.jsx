import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Image from "next/image";
import profileImg from "../public/assets/profileme.jpg";
import { useRouter } from "next/router";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

function Main() {
  const router = useRouter();
  return (
    <div id="home" className="w-full md:h-screen p-2 flex items-center  ">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-8 lg:grid lg:items-center lg:justify-center">
        <div className="grid-cols-1 p-4">
          <div>
            <p className=" uppercase text-sm tracking-widest text-gray-600">
              <span className="text-[#73BA9B]">⎯⎯⎯⎯⎯</span> CREATIVE DEVELOPER
            </p>
            <h1 className="  text-gray-700 text-left  py-4 mt-4">
              <span className="animate-wave-hand">👋🏾</span> Holii, I&#39;m{" "}
              <span className="text-[#73BA9B] text-left">Sandy.</span>
            </h1>
            <p className="  pt-4 text-gray-600 ">
              Curious & engaged frontend-developer student that's <br></br>
              looking for a internship to learn, contribute & develop!
            </p>

            <section className="flex items-start justify-start gap-8 py-6">
              <a
                href="https://www.linkedin.com/in/sandycongreve/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full shadow-xl shadow-gray-400  dark:shadow-black p-4 cursor-pointer hover:scale-110 ease-in duration-300 text-[#73BA9B]">
                  <FaLinkedinIn size={25} />
                </div>
              </a>

              <a
                href="https://github.com/congreves"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full shadow-xl shadow-gray-400   dark:shadow-black p-4 cursor-pointer hover:scale-110 ease-in duration-300 text-[#73BA9B]">
                  <FaGithub size={24} />
                </div>
              </a>

              <a href="https://www.sandycongreve.com/">
                <div className="flex-row rounded-full shadow-xl shadow-gray-400   dark:shadow-black  p-4 cursor-pointer hover:scale-110 ease-in duration-300 text-[#73BA9B]">
                  <BsFillPersonLinesFill size={24} />
                </div>
              </a>
            </section>
            <section className="flex flex-col items-start justify-between max-w-[330px]">
              <a
                href="https://www.slideshare.net/SandyCongreve/a4-cv-2022pdf"
                className=" font-medium tracking-widest uppercase hover:scale-105 ease-in duration-300  rounded-full py-2 px-4 border-2 border-[#73BA9B] text-[#73BA9B]"
              >
                Download my CV
              </a>
              <button
                className="mt-6 hover:scale-105 ease-in duration-300 animate-pulse"
                type="button"
                onClick={() =>
                  router.push("mailto:sandy.congreve@cmeducations.se")
                }
              >
                {" "}
                Lets connect{" "}
              </button>
            </section>
          </div>
        </div>
        <div className=" grid p-4 hover:scale-105 ease-in duration-300 max-w-[50%]  lg:max-w-md items-center justify-self-center align">
          <Image
            className="rounded-xl h-auto m-auto  dark:shadow-black shadow-xl shadow-gray-400  "
            src={profileImg}
            alt="/"
          />
        </div>
        <div className="hidden lg:flex flex justify-center py-12 mt-8">
          <Link href="/">
            <div className=" rounded-full bg-[#73BA9B] dark:shadow-black shadow-lg shadow-gray-400 p-8 cursor-pointer hover:scale-110 ease-in duration-300 text-[#73BA9B] animate-bounce ...">
              <HiOutlineChevronDoubleDown
                className="text-[#121413]"
                sixe={40}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Main;

/*<div className="col-span-2">
<Blob />
</div>*/
