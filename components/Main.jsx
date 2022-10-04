import React from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

function Main() {
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>LET&#39;S BUILD SOMETHING GREAT TOGETHER</p>
                <h1 className='py-4 text-gray-700'>Hi, Im <span className='text-[#73BA9B]'>Sandy</span></h1>
                <h1 className='py-2 text-gray-700'></h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>`Former Experience Designer & learning Frontend Developer currently studying at Change Makers Educations in Stockholm. I&#39;m a react and CSS nerd. I can&#39;t shut up about utility-first driven CSS and consistency in development.</p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-[#73BA9B]">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-[#73BA9B]">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-[#73BA9B]">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-[#73BA9B]">
                  <BsFillPersonLinesFill />
                </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Main