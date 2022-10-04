import React from "react";
import Image from "next/image";

function About() {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#73BA9B]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">Im a creative developer</p>
          <p className="py-2 text-gray-600">
            I’m a highly passionated human being that has a big interest in
            people, culture and the magic that happens when we create group
            synergy.
          </p>
          <p className="py-2 text-gray-600">
            I like to engage with people and brands to understand their needs
            and aspirations, to better design products and services that make
            sense whether they are digital, physical or both. I believe design
            shapes the life we live so it’s important to be mindful of what I
            put out there. Therefore I’d like to discover the hidden privileges
            in design, in order to create better experiences for all-humans and
            not just a part.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src="/../public/assets/about.jpg"
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
