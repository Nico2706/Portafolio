import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-[120] bg-[#060a10] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/59331357-2150-4fe3-99b5-4675134ca75c" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#6cd1d4] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - nicolasrichter27@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2 rounded-md' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6] rounded-md' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2 rounded-md' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:rounded-2xl duration-500 hover:bg-[#6cd1d4] hover:border-black px-4 py-3 my-8 mx-auto flex items-center'>Send Message</button>
        </form>
    </div>
  )
}

export default Contact