import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#8890c5] text-gray-800'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
           <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-[#c83349]'>About</p>
            </div>
            <div>

            </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold '>
                    <p>Hi, Eeshee Here. Pleased to Meet You</p>
                </div>
                <div>
                    <p>
                    I am a Student at Bennett University pursuing Btech Computer Science Engineering. 
          I am working and learing towards acquiring the best outcome
                    </p>
                </div>
            </div>
           </div>
        </div>
    
  )
}

export default About