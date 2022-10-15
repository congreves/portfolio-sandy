import React from "react";
import sveaSolarImg from "../public/assets/projects/sveasolar.jpg";
import wineImg from "../public/assets/projects/viovin.png";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className=" py-4 max-w-[70%] uppercase text-md tracking-widest text-gray-600">
          <span className="text-[#73BA9B]">⎯⎯⎯⎯⎯</span> PROJECTS
        </p>
        <h2 className="py-4">What I’ve Built</h2>
        <div className="grid md:grid-cols-2 gap-16">
          <ProjectItem
            title="Svea Solar - Landing Page"
            backgroundImg={sveaSolarImg}
            projectUrl="/sveasolar"
          />
          <ProjectItem
            title="Viovin"
            backgroundImg={wineImg}
            projectUrl="/viovin"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
