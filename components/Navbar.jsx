import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";
import logo from "../public/assets/images/logoWhite.png";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";

function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (router.asPath === "/sveasolar" || router.asPath === "/viovin") {
      setNavBg("transparent");
      setLinkColor("#73BA9B");
    } else if (router.asPath === "/" && theme === "light") {
      setNavBg("#ecf0f3");
      setLinkColor("#73BA9B");
    } else if (router.asPath === "/" && theme === "dark") {
      setNavBg("#121212");
      setLinkColor("#73BA9B");
    }
  }, [router, theme]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div
      className={`${"bg-[#ecf0f3] dark:bg-[#121212]"} ${
        shadow
          ? " fixed w-full h-20 shadow-xl z-[100] mb-8 dark:bg-[#121212] dark:shadow-black "
          : " fixed w-full h-20 z-[100] mb-8 bg-[#ecf0f3]  "
      }`}
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 ">
        <Link href="/">
          <a>
            <Image
              src={logo}
              alt="/"
              width="150"
              height="75"
              className="cursor-pointer"
            />
          </a>
        </Link>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="lg:hidden md:hidden rounded-full p-2 bg-[#73BA9B] animate-pulse"
        >
          {theme === "light" ? (
            <MoonIcon className="text-white w-5 h-5" />
          ) : (
            <SunIcon className="text-white w-5 h-5" />
          )}{" "}
        </button>

        <div>
          <ul
            style={{ color: `${linkColor}` }}
            className="hidden md:flex items-center"
          >
            <li className="ml-10 uppercase hover:border-b">
              <Link href="/">Home</Link>
            </li>

            <li className="ml-10  uppercase hover:border-b smooth-scroll">
              <Link href="/#about">About</Link>
            </li>

            <li className="ml-10  uppercase hover:border-b smooth-scroll">
              <Link href="/#skills"> Skills</Link>
            </li>

            <li className="ml-10 uppercase hover:border-b smooth-scroll">
              <Link href="/#projects">Projects </Link>
            </li>

            <li className="ml-10 uppercase hover:border-b smooth-scroll">
              <Link href="/#contact">Contact</Link>
            </li>
            <li className="ml-5 uppercase hover:border-b smooth-scroll">
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="rounded-full p-2 bg-[#73BA9B] animate-pulse"
              >
                {theme === "light" ? (
                  <MoonIcon className="text-white w-5 h-5" />
                ) : (
                  <SunIcon className="text-white w-5 h-5" />
                )}{" "}
              </button>
            </li>
          </ul>

          {/* HAMBURGER MENU */}

          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="md:hidden  text-[#73BA9B] p-2"
          >
            <AiOutlineMenu size={35} />
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? "md:hidden z-[100] fixed left-0 top-0 w-full h-screen bg-black/70"
            : ""
        }
      >
        <div
          className={
            nav
              ? " fixed   left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] dark:bg-[#121212] p-10 ease-in duration-500"
              : "fixed  left-[-120%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image src={logo} width="85" height="45" alt="/" />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg bg-[#73BA9B]   text-white dark:text-[#121212] dark:shadow-black shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Lets build something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <li
                onClick={() => setNav(false)}
                className="py-4 text-sm text-[#73BA9B]"
              >
                <Link href="/"> Home</Link>
              </li>
              <li
                onClick={() => setNav(false)}
                className="py-4 text-sm uppercase hover:border-b text-[#73BA9B]"
              >
                <Link href="/#about"> About</Link>
              </li>
              <li
                onClick={() => setNav(false)}
                className="py-4 text-sm hover:border-b text-[#73BA9B]"
              >
                <Link href="/#skills">Skills </Link>
              </li>
              <li
                onClick={() => setNav(false)}
                className="py-4 text-sm hover:border-b text-[#73BA9B]"
              >
                <Link href="/#projects">Projects </Link>
              </li>
              <li
                onClick={() => setNav(false)}
                className="py-4 text-sm hover:border-b text-[#73BA9B]"
              >
                <Link href="/#contact">Contact </Link>
              </li>
              <li className="py-4 text-sm hover:border-b text-[#73BA9B]">
                <button
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                  className="rounded-full p-2 bg-[#73BA9B] animate-pulse"
                >
                  {theme === "light" ? (
                    <MoonIcon className="text-white w-5 h-5" />
                  ) : (
                    <SunIcon className="text-white w-5 h-5" />
                  )}{" "}
                </button>
              </li>
            </ul>
            <div className="pt-8">
              <button
                className="animate-pulse"
                onClick={() =>
                  router.push("mailto:sandy.congreve@cmeducations.se")
                }
              >
                {" "}
                Lets connect{" "}
              </button>

              <div className="pt-4 flex items-center justify-between my-4 w-full sm:w[80%]">
                <a
                  href="www.linkedin.com/in/sandycongreve"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400  text-[#73BA9B] dark:shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/congreves"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 text-[#73BA9B] dark:shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/sandysonrisa/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 text-[#73BA9B] dark:shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineInstagram />
                  </div>
                </a>
                <a href="/" target="_blank" rel="noreferrer">
                  <div className="rounded-full shadow-lg shadow-gray-400 text-[#73BA9B] dark:shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
/* {Toggle to {theme === "light" ? "Dark" : "Light"}   style={{ backgroundColor: navBg }}*/
