import React from 'react';
import { data } from "../data/data.js";

const Proyects = () => {

    // projects file
    const project = data;
    //setProject(data);
  
  return (
<div name='work' className='w-auto md:h-auto text-gray-300 bg-[#060a10] mt-40 sm:mb-8'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#6cd1d4]'>
            Work
          </p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>

{/* container for projects */}
<div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">       
          {/* Gird Item */}
{project.map((item, index) => (
  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 w-auto h-auto' key={index}>
      <img className='w-20 mx-auto' src={item.image} alt="HTML icon" />
      <p className='my-4'>{item.name}</p>
      <a href={item.github} className="bg-[#1e264a] p-2 font-mono text-[#ccd6f6] hover:scale-75 duration-200 rounded-lg shadow-gray-600 mb-0">Code</a>
  </div>

))}

</div>
<div >
              <p className='text-xl font-bold inline border-b-4 border-[#6cd1d4] '>More Proyects</p>
              <p className='py-4'>You can find the other projects in my <a href="https://github.com/Nico2706" className='text-[#ccd6f6] font-mono text-lg'>GitHub</a></p>
             
          </div>
      </div>
     
    </div>
  );
};

export default Proyects