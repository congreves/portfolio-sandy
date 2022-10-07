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

function Skills(props) {
  return (
    <div id="skills" className="ww-full lg:h-screen p-2">
      <div className="max-v-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#73BA9B]">
          Skills
        </p>
        <h2 className=" py-4">What I Can Do</h2>
        <div className="grid md:grid.grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={htmlImg} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={cssImg} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={jsImg} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={reactImg} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={nextJsImg} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items justify-center">
                <h3>NextJS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={gitImg} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items justify-center">
                <h3>Git</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={styledImg} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items justify-center">
                <h3>Styled Components</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={figmaImg} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items justify-center">
                <h3>Figma</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
