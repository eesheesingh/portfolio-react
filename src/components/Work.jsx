import React from 'react'
import banner from '../assets/banner.jpg'
import geozapp from '../assets/geozapp.png'
import wallet from '../assets/wallet.png'
import diabetes from '../assets/diabetes.png'
import avatar from '../assets/maleavatar.png'
import bgmovie from '../assets/bgmovie.jpg'
import gzsymbol from '../assets/gzsymbol.PNG'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#8890c5]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-800 border-[#c83349]'>My Project Summary</p>
            </div>

             
            <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>


                <div style={{backgroundImage:`url(${banner})`}}
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100 duration-1000'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            AnimZone                        
                            </span>
                        <div className='pt-8 text-center'>
                            <a href=" https://eesheesingh.github.io/AnimZone/" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg'>
                                    Demo</button>
                            </a>
                            <a href=" https://github.com/eesheesingh/AnimZone.git" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg'>
                                    GitHub</button>
                            </a>
                        </div>
                    </div>
                    </div>

                    <div style={{backgroundImage:`url(${geozapp})`}}
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100 duration-1000'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            GeoZapp-EVC India                        
                            </span>
                        <div className='pt-8 text-center'>
                            <a href=" https://youtu.be/TVkHlWkFoUs " target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/PiyushKumar-18-AI/GeoZapp-EVC-India.git" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>GitHub</button>
                            </a>
                        </div>
                    </div>
                    </div>

                    <div style={{backgroundImage:`url(${wallet})`}}
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100 duration-1000'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Wallet Buddy                        
                            </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/eesheesingh/Wallett-Buddy.git" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg'>Github</button>
                            </a>
                            
                        </div>
                    </div>
                    </div>

                    <div style={{backgroundImage:`url(${diabetes})`}}
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100 duration-1000'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        Diabetes Prediction System                        
                            </span>
                        <div className='pt-8 text-center'>
                            <a href="https://youtu.be/r9xSVMsz-fA " target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg'>Demo</button>
                            </a>
                            <a href=" https://github.com/eesheesingh/DiabetesPedictionSystem.git "target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg'>GitHub</button>
                            </a>
                        </div>
                    </div>
                    </div>

                    <div style={{backgroundImage:`url(${bgmovie})`}}
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100 duration-1000'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        Side Scroller                       
                            </span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/eesheesingh/Slide-Scroller.git" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://eesheesingh.github.io/Slide-Scroller/" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg'>GitHub</button>
                            </a>
                        </div>
                    </div>
                    </div>

                    {/* <div style={{backgroundImage:`url(${avatar})`}}
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'> */}

                    {/* hover effect */}
                    {/* <div className='opacity-0 group-hover:opacity-100 duration-1000'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        Login/Sign-Up Page Using PHP
                            </span>
                        <div className='pt-8 text-center'>
                            
                            <a href="https://github.com/eesheesingh/Login-Signup-Page.git" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg'>GitHub</button>
                            </a>
                        </div>
                    </div>
                    </div> */}

                    <div style={{backgroundImage:`url(${gzsymbol})`}}
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100 duration-1000'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        "GameZone" Using Wordpress
                            </span>
                        <div className='pt-8 text-center'>
                            
                            <a href="http://gamezoneeeshee.rf.gd/" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg'>Demo</button>
                            </a>
                        </div>
                    </div>
                    </div>

                    
                </div>
            </div>
        </div>
   
   
  )
}

export default Work