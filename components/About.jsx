import React from "react";
import Image from "next/image";

import Link from "next/link";

function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-4 gap-8">
        <div className="col-span-4 p-4">
          <p className=" py-4 max-w-[60%] uppercase text-md tracking-widest text-gray-600">
            <span className="text-[#73BA9B]">⎯⎯⎯⎯⎯</span> ABOUT
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="pt-4 text-gray-600">
            Hi, I'm Sandy Congreve{" "}
            <span className="text-[#73BA9B] font-bold">28 years</span> old from
            Uppsala, Sweden. I{" "}
            <span className="text-[#73BA9B] font-bold">
              love dancing, culture and psychology.
            </span>
          </p>
        </div>
        <div className="col-span-2 p-4">
          <h3>Background</h3>
          <p className="py-4">
            I started my journey in tech at{" "}
            <a
              className="text-[#73BA9B] font-bold underline"
              href="https://www.hyperisland.com/programs-and-courses/digital-creative"
            >
              Hyper Island,
            </a>
            where I gained experience working directly with clients solving
            cases mostly revolving UX, branding and strategy in agile teams.
            Since I have a passion for people and design I choose to develop my
            role within UX/UI. During my studies I started working as a UI
            designer at{" "}
            <a
              className="text-[#73BA9B] font-bold underline"
              href="https://sveasolar.com/"
            >
              Svea Solar
            </a>{" "}
            designing for their site in Figma. I worked closely with
            stakeholders & frontend engineers, gaining knowledge of building
            resuable components and the importance of consistency across design
            and code.
            <br></br> <br></br>
            <span className="text-[#73BA9B] font-bold">
              Fast forward to today
            </span>{" "}
            these experiences inspired me to study Frontend/App Development at{" "}
            <a
              className="text-[#73BA9B] font-bold underline"
              href="https://cmeducations.se/utbildningar/program/frontend-app-developer"
            >
              Changemaker Educations
            </a>
            . I identified myself more as a designer-developer then tecnical so
            with that said I&#39;m a react and CSS nerd. I can&#39;t shut up
            about utility-first driven CSS and consistency in development.
          </p>

          <Link href="/#projects">
            <button className="py-2 cursor-pointer mt-10 hover:scale-105 ease-in duration-300 ">
              Check out some of my latest projects.
            </button>
          </Link>
        </div>
        <div className="col-span-2 p-4 ">
          <h3>Goals & Needs</h3>

          <p className="py-4">
            <span className="text-[#73BA9B]">➸</span> Experimenting & learnings
            about cutting-edge CSS and JS frameworks.
            <br />
            <span className="text-[#73BA9B]">➸</span> Develop my skills working
            methodically in projects within a team, with designer & developers.
            <br />
            <span className="text-[#73BA9B]">➸</span> A mentor that has
            experience within frontend that are present and supportive.
            <br />
            <span className="text-[#73BA9B]">➸</span> I wish to be in an
            environment where I can learn but also make mistakes to learn from.
            I'm not perfect and probably never will be, but I'll do my best to
            always try and give my all.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
