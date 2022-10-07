import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";
import logo from "../public/assets/images/logo.png";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const [position, setPosition] = useState("fixed");
  const router = useRouter();

  useEffect(() => {
    if (router.asPath === "/sveasolar" || router.asPath === "/viovin") {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

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

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <a>
            <Image
              src={logo}
              alt="/"
              width="100"
              height="100"
              className="cursor-pointer"
            />
          </a>
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/">Home</Link>
            </li>

            <li className="ml-10 text-sm uppercase hover:border-b smooth-scroll">
              <Link href="/#about">About</Link>
            </li>

            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#skills"> Skills</Link>
            </li>

            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#projects">Projects </Link>
            </li>

            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>

          {/* HAMBURGER MENU */}

          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image src={logo} width="85" height="85" alt="/" />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
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
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                <Link href="/"> Home</Link>
              </li>
              <li
                onClick={() => setNav(false)}
                className="py-4 text-sm uppercase hover:border-b"
              >
                <Link href="/#about"> About</Link>
              </li>
              <li
                onClick={() => setNav(false)}
                className="py-4 text-sm hover:border-b"
              >
                <Link href="/#skills">Skills </Link>
              </li>
              <li
                onClick={() => setNav(false)}
                className="py-4 text-sm hover:border-b"
              >
                <Link href="/#projects">Projects </Link>
              </li>
              <li
                onClick={() => setNav(false)}
                className="py-4 text-sm hover:border-b"
              >
                <Link href="/#contact">Contact </Link>
              </li>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#B2675E]">
                Lets connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w[80%]">
                <a
                  href="www.linkedin.com/in/sandycongreve"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/congreves"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <a href="/" target="_blank" rel="noreferrer">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                </a>
                <a href="/" target="_blank" rel="noreferrer">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
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
