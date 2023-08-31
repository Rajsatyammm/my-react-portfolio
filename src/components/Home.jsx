import React from 'react'
// import Picture from '../assets/picture.png'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

function Home() {
    return (
        <div 
            name="home" 
            className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white'>

            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>

                <div className='flex flex-col justify-center h-full'>

                    <h2 className='text-4xl sm:text-7xl font-bold'>
                        Hi! I'm a Full Stack Developer
                    </h2>

                    <p className='text-grey-500 py-4 max-w-md'>
                    <span className='font-bold text-xl'>I'</span>m <span className='font-bold text-xl'>S</span>atyam raj, <br/>
                        Experienced Java coder skilled in DSA, OOP, React, and Node.js. Committed to staying current, pursuing innovative projects for quality-driven solutions, and continuous self-improvement.
                    </p>

                    <div>

                        <button className='group text-white font-medium w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-t from-cyan-500 to-blue-500'>
                            Resume
                            <span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight className='ml-1' size={25} /></span>
                        </button>

                    </div>

                    <div>

                        <img src='' alt="" className='rounded-2xl mx-auto w-2/3 md:w-full' />

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Home