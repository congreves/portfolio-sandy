import React from "react";
import sveaSolarImg from "../public/assets/projects/2.png";
import wineImg from "../public/assets/projects/5.png";
import chatImg from "../public/assets/projects/4.png";
import ecomImg from "../public/assets/projects/1.png";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <div id="projects" className="w-full lg:h-screen p-2">
      <div className=" max-w-[1240px] mx-auto  flex flex-col justify-center h-full p-4">
        <p className=" py-4 max-w-[70%] uppercase text-md tracking-widest text-gray-600">
          <span className="text-[#73BA9B]">⎯⎯⎯⎯⎯</span> PROJECTS
        </p>
        <h2 className="py-4">What I’ve Built</h2>

        <ul className="pt-4 flex flex-wrap justify-between w-[100%]">
          <li className="lg:w-[48%]">
            {" "}
            <ProjectItem
              title="Viovin"
              role="Frontend Developer"
              backgroundImg={wineImg}
              projectUrl="/viovin"
              tag1="#react"
              tag2="#styledcomponents"
              tag3="#reactrouterdom"
              tag4="#axios"
            />
          </li>
          <li className="lg:w-[48%] ">
            {" "}
            <ProjectItem
              title="Svea Solar"
              role="UI designer"
              backgroundImg={sveaSolarImg}
              projectUrl="/sveasolar"
              tag1="#figma"
              tag2="#designsystems"
              tag3="#wireframing"
              tag4="#prototyping"
            />
          </li>
          <li className="lg:w-[48%] ">
            {" "}
            <ProjectItem
              title="Chatt App"
              role="Frontend Developer"
              backgroundImg={chatImg}
              projectUrl="/chat"
              tag1="#react"
              tag2="#styledcomponents"
              tag3="#sqlite3"
              tag4="#socket.io"
            />
          </li>
          <li className="lg:w-[48%]">
            {" "}
            <ProjectItem
              title="Ecommerce"
              role="Frontend Developer"
              backgroundImg={ecomImg}
              projectUrl="/ecommerce"
              tag1="#react"
              tag2="#recoil"
              tag3="#node.js"
              tag4="#styledcomponents"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
