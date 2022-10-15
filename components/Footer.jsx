import React from "react";
import logoImg from "../public/assets/images/logoWhite.png";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";

function Footer() {
  return (
    <section class="py-10  sm:pt-16 lg:pt-24">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-12">
          <div>
            <ul class="mt-8 space-y-4">
              <li className="hover:text-[#73BA9B]">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-[#73BA9B]">
                <Link href="/#about">About</Link>
              </li>
              <li className="hover:text-[#73BA9B]">
                <Link href="/#skills"> Skills</Link>
              </li>
              <li className="hover:text-[#73BA9B]">
                <Link href="/#projects">Projects </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr class="mt-16 mb-10 border-gray-800" />

        <div class="flex flex-wrap items-center justify-between">
          <Image class="h-8 auto md:order-1" src={logoImg} alt="" />

          <ul class="flex items-center space-x-3 md:order-3">
            <li>
              <div className="rounded-full shadow-xl shadow-gray-400  dark:shadow-black p-4 cursor-pointer hover:scale-110 ease-in duration-300 text-[#73BA9B]">
                <a href="www.linkedin.com/in/sandycongreve">
                  <FaLinkedinIn size={24} />
                </a>
              </div>
            </li>

            <li>
              <div className="rounded-full shadow-xl shadow-gray-400   dark:shadow-black p-4 cursor-pointer hover:scale-110 ease-in duration-300 text-[#73BA9B]">
                <a href="https://github.com/congreves">
                  <FaGithub size={24} />
                </a>
              </div>
            </li>

            <li>
              <div className="rounded-full shadow-xl shadow-gray-400   dark:shadow-black p-4 cursor-pointer hover:scale-110 ease-in duration-300 text-[#73BA9B]">
                <a href="https://www.sandycongreve.com/">
                  {" "}
                  <AiOutlineMail size={24} />{" "}
                </a>
              </div>
            </li>

            <li>
              <div className="flex-row rounded-full shadow-xl shadow-gray-400   dark:shadow-black  p-4 cursor-pointer hover:scale-110 ease-in duration-300 text-[#73BA9B]">
                <a href="https://www.sandycongreve.com/">
                  <BsFillPersonLinesFill size={24} />
                </a>
              </div>
            </li>
          </ul>

          <p class="w-full mt-8 text-sm text-center text-gray-100 md:mt-0 md:w-auto md:order-2">
            © Copyright 2022, All Rights Reserved by Sandy Congreve
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
