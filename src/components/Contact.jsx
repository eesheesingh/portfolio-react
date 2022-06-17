import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-screen bg-[#8890c5] flex justify-center items-center p-4 ' name='contact'>
        <form method='POST' action="https://getform.io/f/e58b4c52-5880-445b-a324-c11a42341245" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#c83349] text-gray-800'>Contact Me</p>
                <p className='text-gray-800 py-4'>Shoot me an Email - chiro.singh9769@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email'/>
            <textarea name="message" className='p-2 bg-[#ccd6f6]' id="" cols="30" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#c83349] hover:border-[#c83349] duration-1000 px-4 py-4 my-8 mx-auto flex items-center'>Let's Talk</button>
        </form>
    </div>
  )
}

export default Contact