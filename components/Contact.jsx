import React from "react";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";
import contactImg from "../public/assets/images/logo.png";

function Contact() {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className=" py-4 max-w-[70%] uppercase text-md tracking-widest text-gray-600">
          <span className="text-[#73BA9B]">⎯⎯⎯⎯⎯</span> CONTACT
        </p>
        <h2 className="py-4">How To Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* LEFT */}
          <div className="col-span-3 lg:col-span-2 w-full h-full  dark:shadow-black shadow-xl shadow-gray-400  rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300 pt-1"
                  src={contactImg}
                  alt="/"
                  width="350"
                  height="350"
                />
              </div>
              <div>
                <p className="py-2">Sandy Congreve</p>
                <p>Front-End Developer</p>
                <p className="py-4">Im available for internship spring 2023</p>
              </div>
              <div>
                <button>Send me an email</button>
                <div className="flex items justify-between py-4">
                  <div className="rounded-full  dark:shadow-black shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-[#73BA9B]">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full   dark:shadow-black shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-[#73BA9B]">
                    <FaGithub />
                  </div>
                  <div className="rounded-full  dark:shadow-black shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-[#73BA9B]">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full  dark:shadow-black shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-[#73BA9B]">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 w-full h-auto  dark:shadow-black shadow-xl shadow-gray-400 rounded-xl lg:p-4">
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
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className=" rounded-full bg-[#73BA9B] dark:shadow-black shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-[#73BA9B] animate-bounce ...">
              <HiOutlineChevronDoubleUp className="text-[#121413]" sixe={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;

{
  /* RIGHT*/
}

/* <div className="col-span-3 w-full h-auto  dark:shadow-black shadow-xl shadow-gray-400 rounded-xl lg:p-4">
     <div className="p-4">
       <form>
         <div className="grid md:grid-cols-2 gap-4 w-full py-2">
           <div className="flex flex-col">
             <label className="uppercase text-sm py-2">Name</label>
             <input
               className="border rounded-lg p-3 flex border-gray-300"
               type="text"
             />
           </div>

           <div className="flex flex-col">
             <label className="uppercase text-sm py-2">
               Phone Number
             </label>
             <input
               className="border-2 rounded-lg p-3 flex border-gray-300"
               type="text"
             />
           </div>
         </div>
         <div className="flex flex-col py-2">
           <label className="uppercase text-sm py-2">Email</label>
           <input
             className="border-2 rounded-lg p-3 flex border-gray-300"
             type="email"
           />
         </div>
         <div className="flex flex-col py-2">
           <label className="uppercase text-sm py-2">Subject</label>
           <input
             className="border-2 rounded-lg p-3 flex border-gray-300"
             type="email"
           />
         </div>
         <div className="flex flex-col py-2">
           <label className="uppercase text-sm py-2">Message</label>
           <textarea
             className="border-2 rounded-lg p-3  border-gray-300"
             type="text"
             rows="10"
           ></textarea>
         </div>
         <button className="w-full p-4 text-gray-100 mt-4">
           Send Message
         </button>
       </form>
     </div>
   </div>*/
