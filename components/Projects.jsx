import React from "react";
import sveaSolarImg from "../public/assets/projects/sveasolar.jpg";
import wineImg from "../public/assets/projects/viovin.png";
import chatImg from "../public/assets/projects/chat.png";
import ecomImg from "../public/assets/projects/ecommerce.png";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <div id="projects" className="w-full p-2">
      <div className="max-w-[1240px] mx-auto py-16 p-4">
        <p className=" py-4 max-w-[70%] uppercase text-md tracking-widest text-gray-600">
          <span className="text-[#73BA9B]">⎯⎯⎯⎯⎯</span> PROJECTS
        </p>
        <h2 className="py-4">What I’ve Built</h2>
        <div className="pt-4 grid md:grid-cols-2 gap-16">
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
        </div>
      </div>
    </div>
  );
}

export default Projects;
