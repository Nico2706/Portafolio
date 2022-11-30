import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Flecha from "../assets/scroll-down.gif"
import { Link } from 'react-scroll';
import pdf from "../assets/Curriculum+vitae.pdf"



const Home = () => {
  return (
    <div name="home">
    <div name='home' className='w-full h-screen bg-[#060a10] mt-0'>
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full items-center'>
      <p className='text-[#6cd1d4]'>Hi!, My name is</p>
      <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
        Nicolas Richter
      </h1>
      <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
        Fullstack Developer
      </h2>
      <p className='text-[#8892b0] py-4 max-w-[700px] flex text-center content-center'>
      I am a fullstack developer with javascript as my main language,
      I like to learn by doing proyects.
      Always looking for the latest technologies to keep training myself.
      I am currently looking for my first work experience.
      </p>
      <div className='hidden md:flex justify-between space-x-10 '>
       
        <button className='text-[#060a10] font-bold group border-2 px-6 py-3 my-2 flex items-center bg-[#5197b4] hover:bg-[#326273] rounded-xl hover:border-[#5197b4] hover:rounded-lg hover:transition-colors  animate-pulse'>      
        <Link to='about' smooth={true} duration={800}>
            About
          </Link>     
        </button> 
        <button className='text-[#060a10] font-bold group border-2 px-6 py-3 my-2 flex items-center bg-[#5197b4] hover:bg-[#326273] rounded-xl hover:border-[#5197b4] hover:rounded-lg hover:transition-colors   animate-pulse'>
        <Link to='skills' smooth={true} duration={800}>
            Skills
          </Link>
        </button>
        <button className='text-[#060a10] font-bold group border-2 px-6 py-3 my-2 flex items-center bg-[#5197b4] hover:bg-[#326273] rounded-xl hover:border-[#5197b4] hover:rounded-lg hover:transition-colors   animate-pulse'>
        <Link to='work' smooth={true} duration={800}>
            Proyects
          </Link>
        </button>
        <button className='text-[#060a10] font-bold group border-2 px-6 py-3 my-2 flex items-center bg-[#5197b4] hover:bg-[#326273] rounded-xl hover:border-[#5197b4] hover:rounded-lg hover:transition-colors   animate-pulse'>
        <Link to='contact' smooth={true} duration={800}>
            Contact
          </Link>
          </button>
    
        
        
      </div>
      <div className='flex justify-center bg-[#060a10] md:hidden'>
        <img src={Flecha} alt="flechita" className='w-20' />
      </div>
    </div>
  </div>
  <div className='hidden lg:flex fixed flex-col top-[35%] left-0 mb-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[1px] duration-500 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/carlos-nicolas-augusto-richter/'
            >
                             Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[1px] duration-500 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/Nico2706'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[1px] duration-500 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href={pdf}
              download={pdf}
            >
              Curriculum  <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
  </div>
  )
}

export default Home