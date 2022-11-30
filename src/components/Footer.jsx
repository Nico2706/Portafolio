
import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import {AiOutlineHome} from "react-icons/ai"
import {BsFillFileEarmarkPersonFill} from "react-icons/bs"
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Flecha from "../assets/scroll-down.gif"
import { Link } from 'react-scroll';
import pdf from "../assets/Curriculum+vitae.pdf"

const Footer = () => {
  return (
    <div className='md:shadow-md shadow-[#040c16]  duration-500 flex justify-between md:hidden' >
    <button className='bg-[#060a10] p-2 font-mono text-[#ccd6f6] hover:scale-x-150 duration-200 rounded-lg shadow-gray-600'>
    <a href={pdf} download><BsFillFileEarmarkPersonFill/></a> 
    </button>
    <button className='bg-[#060a10] p-2 font-mono text-[#ccd6f6] hover:scale-x-150 duration-200 rounded-lg shadow-gray-600'>
      <a href='https://www.linkedin.com/in/carlos-nicolas-augusto-richter/'><FaLinkedin/></a> 
    </button>
    <button className='bg-[#060a10] p-2 font-mono text-[#ccd6f6] hover:scale-x-150 duration-200 rounded-lg shadow-gray-600'>
    <a href="https://github.com/Nico2706s"><FaGithub/></a> 
    </button>
    <button className='bg-[#060a10] p-2 font-mono text-[#ccd6f6] hover:scale-x-150 duration-200 rounded-lg shadow-gray-600'>
    <Link to='home' smooth={true} duration={800}> <AiOutlineHome/></Link> 
    </button>
    
</div>
  )
}

export default Footer