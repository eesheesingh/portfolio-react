import { click } from '@testing-library/user-event/dist/click'
import React, {useState} from 'react'
import {FaBars, FaInstagram, FaTimes} from 'react-icons/fa'
import { FaGithub, FaLinkedin} from 'react-icons/fa'
import{GrResume} from 'react-icons/gr'
import LOGO from '../assets/logo.png'
import { HiOutlineMail } from 'react-icons/hi'
import {Link} from 'react-scroll';
import resume from '../assets/myresume.pdf'
// bg-[#0a192f]
const Navbar = () => {
    const [nav, setNav]=useState(false)
    const handleClick = ()=>setNav(!nav)
  return (
    
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#8890c5] text-gray-800'>
        <div>

            {/* menu */}
            <img src={LOGO} alt="" />
        </div>
           <ul className='hidden md:flex'>
            <li> <Link to='home' smooth={true} duration={500} >
          Home 
        </Link> </li>
            <li><Link to='about' smooth={true} duration={500} >
          About 
        </Link></li>
            <li><Link to='skills' smooth={true} duration={500} >
          Skills 
        </Link></li>
            <li><Link to='work' smooth={true} duration={500} >
          Work 
        </Link></li>
            <li><Link to='contact' smooth={true} duration={500} >
          Contact 
        </Link></li>
           </ul>

{/* hamburger */}
<div onClick={handleClick} className='md:hidden z-10'>
    {!nav ? <FaBars /> : <FaTimes />}
</div>

{/* mobile menu */}

    <ul className={!nav ?'hidden':'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to='home' smooth={true} duration={500} >
          Home 
        </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to='about' smooth={true} duration={500} >
          About 
        </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to='skills' smooth={true} duration={500} >
          Skills 
        </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to='work' smooth={true} duration={500} >
          Work 
        </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to='contact' smooth={true} duration={500} >
          Contact 
        </Link></li>
    </ul>


{/* social icons */}
<div className='hidden lg:flex fixed flex-col top-[35%] left-0 '>
    <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800 '>
            <a href="https://www.linkedin.com/in/eesheepal-singh-80057b204/" className='flex justify-between items-center w-full text-gray-300 '>
                LinkedIn <FaLinkedin size={30}/>
            </a>
        </li>

        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3333] '>
            <a href="https://github.com/eesheesingh" target="_blank" className='flex justify-between items-center w-full text-gray-300 '>
                Github <FaGithub size={30}/>
            </a>
        </li>

        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#800000] '>
            <a href="mailto:chiro.singh9769@gmail.com" target="_blank" className='flex justify-between items-center w-full text-gray-300 '>
                Email <HiOutlineMail size={30}/>
            </a>
        </li>

        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#e047b2] '>
            <a href="https://www.instagram.com/eesheepal/" target="_blank" className='flex justify-between items-center w-full text-gray-300 '>
                Instagram <FaInstagram size={30}/>
            </a>
        </li>

        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#fff] '>
            <a href={resume} download className='flex justify-between items-center w-full text-gray-800 '>
                Resume <GrResume size={30}/>
            </a>
        </li>
    </ul>
</div>

    </div>
  )
}

export default Navbar