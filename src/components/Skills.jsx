import React from 'react'
import HTML from '../assets/html.png'
import CSS  from '../assets/css.png'
import JS  from '../assets/js.png'
import BOOTSTRAP  from '../assets/bootstrap.png'
import TAILWAIND  from '../assets/tailwind.png'
import MYSQL  from '../assets/mysql.png'
import PHP  from '../assets/php.png'
import REACT  from '../assets/reaact.png'
import PYTHON  from '../assets/python.png'
import JAVA  from '../assets/javalogo.png'
import AWS from '../assets/aws.png'

const Skills = () => {
  return (
    <div name="skills" className='bg-[#8890c5] text-gray-800'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-[#c83349] text-center'>Skills Summary</p>
        </div>
        <div className='w-full grid  grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>

        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt="html" />
                <p className='my-4'>HTML-Intermidiate</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt="CSS" />
                <p className='my-4'>CSS-Intermidiate</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JS} alt="JS" />
                <p className='my-4'>JavaScript-Beginner</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={BOOTSTRAP} alt="BOOTSTRAP" />
                <p className='my-4'>Bootstrap-Intermidiate</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={TAILWAIND} alt="TAILWAIND" />
                <p className='my-4'>Tailwind-Intermidiate</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto pt-10' src={MYSQL} alt="MySql" />
                <p className='my-4'>MySQL-Intermidiate</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto pt-10' src={PHP} alt="PHP" />
                <p className='my-4'>PHP-Beginner</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto pt-10' src={REACT} alt="REACT" />
                <p className='my-4'>React-Beginner</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto pt-8' src={PYTHON} alt="PYTHON" />
                <p className='my-4'>Python-Intermidiate</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JAVA} alt="JAVA" />
                <p className='my-4'>Java-Intermidiate</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto pt-8' src={AWS} alt="AWS" />
                <p className='my-4'>AWS-Intermidiate</p>
            </div>

            </div>
        </div>
    </div>
    
  )
}

export default Skills;