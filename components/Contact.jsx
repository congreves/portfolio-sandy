import React from "react";

import { AiOutlineInstagram } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";
import { useRouter } from "next/router";

function Contact() {
  const router = useRouter();
  return (
    <div id="contact" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full p-4">
        <p className=" py-4 max-w-[70%] uppercase text-md tracking-widest text-gray-600">
          <span className="text-[#73BA9B]">⎯⎯⎯⎯⎯</span> CONTACT
        </p>
        <h2 className="py-4">How To Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* LEFT */}
          <div className="col-span-3 lg:col-span-2 w-full h-full  dark:shadow-black shadow-xl shadow-gray-400  rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <div className="flex justify-center">
                  <iframe
                    src="https://giphy.com/embed/gfl7CKcgs6exW"
                    width="280"
                    height="220"
                    frameBorder="0"
                    class="giphy-embed"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div>
                <p className="py-2">Sandy Congreve</p>
                <p>Front-End Developer</p>
                <p className="py-4">Im available for internship spring 2023</p>
              </div>
              <div>
                <button
                  className="animate-pulse"
                  onClick={() =>
                    router.push("mailto:sandy.congreve@cmeducations.se")
                  }
                >
                  {" "}
                  Lets connect{" "}
                </button>
            
                <div className="mt-8 flex items justify-between py-4">
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
              </div>
            </div>
          </div>
          <div className="col-span-3 w-full h-full  dark:shadow-black shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <iframe
              src="https://www.slideshare.net/slideshow/embed_code/key/2G0w5L1Qf1NxxK?hostedIn=slideshare&page=upload"
              width="100%"
              height="100%"
              frameborder="0"
              marginwidth="0"
              marginheight="0"
              scrolling="no"
            ></iframe>
          </div>
        </div>
        <div className="flex justify-center py-12 mt-8">
          <Link href="/">
            <div className=" rounded-full bg-[#73BA9B] dark:shadow-black shadow-lg shadow-gray-400 p-8 cursor-pointer hover:scale-110 ease-in duration-300 text-[#73BA9B] animate-bounce ...">
              <HiOutlineChevronDoubleUp className="text-[#121413]" sixe={40} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
