import React from "react";
import sveaSolarImg from "../public/assets/projects/sveasolar.jpg";
import wineImg from "../public/assets/projects/viovin.png";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking wodest uppercase text-[#73BA9B]">
          Projects
        </p>
        <h2 className="py-4">What I’ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Svea Solar - Landing Page"
            backgroundImg={sveaSolarImg}
            projectUrl="/property"
          />
          <ProjectItem
            title="Wine Distrubution Site"
            backgroundImg={wineImg}
            projectUrl="/property"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
