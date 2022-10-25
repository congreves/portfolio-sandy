// https://www.youtube.com/watch?v=CMx51wpd7g4
// https://github.com/fireclint/portfolio-nextjs/blob/main/styles/globals.css

import React from "react";
import Image from "next/image";
import jsImg from "../public/assets/skills/javascript.png";
import cssImg from "../public/assets/skills/css.png";
import reactImg from "../public/assets/skills/react.png";
import nextJsImg from "../public/assets/skills/nextjs.png";
import gitImg from "../public/assets/skills/git.png";
import styledImg from "../public/assets/skills/styled-components.png";
import figmaImg from "../public/assets/skills/figma.png";
import htmlImg from "../public/assets/skills/html.png";

function Skills() {
  return (
    <div id="skills" className="w-full lg:h-[75vh]  p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col  align-top h-full p-4">
        <p className=" py-4 max-w-[70%] uppercase text-md tracking-widest text-gray-600">
          <span className="text-[#73BA9B]">⎯⎯⎯⎯⎯</span> SKILLS
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className=" pt-4 grid sm:grid-cols-6 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-center">
          <div className="p-6  dark:shadow-black shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid sm:col-span-2  grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={htmlImg} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items justify-center">
                <h4>HTML</h4>
              </div>
            </div>
          </div>

          <div className="p-6   dark:shadow-black shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={cssImg} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items justify-center">
                <h4>CSS</h4>
              </div>
            </div>
          </div>

          <div className="p-6   dark:shadow-black shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={jsImg} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items justify-center">
                <h4>JavaScript</h4>
              </div>
            </div>
          </div>

          <div className="p-6  dark:shadow-black shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={reactImg} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items justify-center">
                <h4>React</h4>
              </div>
            </div>
          </div>

          <div className="p-6  dark:shadow-black shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={nextJsImg} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items justify-center">
                <h4>NextJS</h4>
              </div>
            </div>
          </div>

          <div className="p-6  dark:shadow-black shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={gitImg} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items justify-center">
                <h4>Git</h4>
              </div>
            </div>
          </div>

          <div className="p-6   dark:shadow-black shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={styledImg} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items justify-center">
                <h4>Styled Components</h4>
              </div>
            </div>
          </div>

          <div className="p-6  dark:shadow-black shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={figmaImg} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items justify-center">
                <h4>Figma</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
