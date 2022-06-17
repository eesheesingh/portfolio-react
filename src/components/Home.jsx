import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className=' w-full h-screen bg-[#8890c5]'>
        
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-primary-600' >Hi I'm</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#034f84]' >Eesheepal Singh</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#1B2430]'>I'm a Student</h2>
            <p className='text-[#36486b] py-4 max-w-[700px]'>pursuing Btech</p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#c83349] hover:border-[#c83349] duration-500'>
                    <Link to='about' smooth={true} duration={500} >
          View More 
        </Link>
                <span className='group-hover:rotate-90 duration-1000'>
                <HiArrowNarrowRight className='ml-3 '/>
                </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home