import React from "react";
import logoImg from "../public/assets/images/logoWhite.png";
import Image from "next/image";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";

function Footer() {
  return (
    <section class="py-10  sm:pt-16 lg:pt-24">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-12 lg:hidden">
          <div>
            <ul class="mt-8 space-y-4 dark:text-[#ecf0f3]">
              <li className=" hover:text-[#73BA9B]">
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

        <hr class="mt-16 mb-10 border-[#73BA9B]" />

        <div class="flex flex-wrap items-center justify-between">
          <Image class="h-8 auto md:order-1" src={logoImg} alt="" />

          <div className="pt-4 flex items-end justify-end m-4 w-full sm:w[80%]">
            <a
              href="https://linkedin.com/in/sandycongreve"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400  text-[#73BA9B] dark:shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaLinkedinIn size={25} />
              </div>
            </a>
            <a
              href="https://github.com/congreves"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 text-[#73BA9B] dark:shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaGithub size={25} />
              </div>
            </a>
            <a
              href="https://www.instagram.com/sandysonrisa/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 text-[#73BA9B] dark:shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiOutlineInstagram size={25} />
              </div>
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              <div className="rounded-full shadow-lg shadow-gray-400 text-[#73BA9B] dark:shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </a>
          </div>

          <p class="w-full mt-8 text-sm text-center text-[#73BA9B] md:mt-0 md:w-auto md:order-2">
            © Copyright 2022, All Rights Reserved by Sandy Congreve
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
