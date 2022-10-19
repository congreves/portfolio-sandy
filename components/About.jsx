import React from "react";
import Image from "next/image";
import profileImg from "../public/assets/profileme.jpg";
import Link from "next/link";

function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 p-4">
          <p className=" py-4 max-w-[70%] uppercase text-md tracking-widest text-gray-600">
            <span className="text-[#73BA9B]">⎯⎯⎯⎯⎯</span> ABOUT
          </p>
          <h2 className="py-4">Who I Am</h2>

          <p className="py-4 text-gray-600">
            Hi,I'm Sandy Congreve 28 years old from Uppsala, Sweden. A globally
            comfortable human that has experience in agile teamwork, who begun
            with UX/UI and ended up diving into Frontend to connect the dots of
            a good user experience.. I&#39;m a react and CSS nerd. I can&#39;t
            shut up about utility-first driven CSS and consistency in
            development.
          </p>
          <h3>Background</h3>
          <p className="py-4">
            I started my journey in tech by studying at Hyper Island. There I
            gained experience working directly with clients solving cases mostly
            revolving mostly revolving UX, branding and strategy. Since I have a
            passion for people and design I choose to develop my role in UX/UI.
            During my studies I started working as a UI designer at Svea Solar
            designing mock-ups for the site and then did my intenship as a UX
            designer.
          </p>

          <h3>Goal</h3>

          <p className="py-4">
            My goals with my internship would be able to grow and experimenting
            with cutting-edge CSS and JS. I’d like to develop my skills working
            methodically in projects with in a team and more experienced
            developers.{" "}
          </p>
          <Link href="/#projects">
            <button className="py-2 cursor-pointer">
              Check out some of my latest projects.
            </button>
          </Link>
        </div>
        <div className="w-full h-auto m-auto  dark:shadow-black shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 ">
          <Image
            className="rounded-xl"
            src={profileImg}
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
