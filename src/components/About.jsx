import React from 'react'


const About = () => {
  return (
    <div name='about' className='w-auto h-auto bg-[#060a10] text-gray-300 mb-36'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#6cd1d4]'>
              About Me
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi I'm Nicolas, nice to meet you. Please take a look around.
                
              </p>
            </div>
            <div>
              <p>
                I started studying programming 2 years ago when I started college,
                 starting with algorithms and data structures. Where I also learned Python and Java,
                  then I started researching on my own to start studying JavaScript. 
                  </p>  
                  <br />
                  <p>
            I like to create quality software to make applications work properly.   
I always seek to use the latest technologies to develop projects.
I am currently studying Next js 13 to continue my training professionally.
</p>
<br />
<p>
I would also like to learn kotlin or Swift to develop android applications without the need to use React Native and use a more native language.

In my free time I like to go to the gym to relax for a while, I'm a Boca Juniors and Milwaukee bucks fan.
</p> 
<br />
<p>
Looking forward to my first job challenge so I can keep growing in the industry.
I feel that I can help from the first day and I feel that I can work well with my colleagues to continue learning.
</p>

            
            </div>
          </div>
      </div>
    </div>
  )
}

export default About