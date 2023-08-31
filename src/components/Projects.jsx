import React from 'react'
import passGen from '../assets/portfolio/passwordGenerator.png'
import razorpayClone from '../assets/portfolio/razorpayClone.png'
import musicPlayer from '../assets/portfolio/musicPlayer.png'
import formValidator from '../assets/portfolio/formValidator.png';
import weatherApp from '../assets/portfolio/weatherApp.png';
import memesGenerator from '../assets/portfolio/memeGenerator.png';



function Portfolio() {

    const portfolioArray = [
        {
            id: 1,
            src: passGen,
            name: 'Password Generator',
            live: 'https://rajsatyammm.github.io/Password_Generator/',
            code: 'https://github.com/Rajsatyammm/Password_Generator',
        },
        {
            id: 2,
            src: razorpayClone,
            name: 'Razorpay Clone',
            live: 'https://grand-duckanoo-07e26e.netlify.app/',
            code: 'https://github.com/Rajsatyammm/Razorpay_Clone',
        },
        {
            id: 3,
            src: musicPlayer,
            name: 'Music Player',
            live: 'https://rajsatyammm.github.io/Music_Player/',
            code: 'https://github.com/Rajsatyammm/Music_Player',
        },
        {
            id: 4,
            src: formValidator,
            name: 'Form Validator',
            live: 'https://rajsatyammm.github.io/Form_Validation/',
            code: 'https://github.com/Rajsatyammm/Form_Validation',
        },
        {
            id: 5,
            src: weatherApp,
            name: 'Weather App',
            live: 'https://rajsatyammm.github.io/Weather-App/',
            code: 'https://github.com/Rajsatyammm/Weather-App',
        },
        {
            id: 6,
            src: memesGenerator,
            name: 'Memes Generator',
            live: 'https://rajsatyammm.github.io/meme-generator/',
            code: 'https://github.com/Rajsatyammm/meme-generator',
        },
    ]


    return (
        <div
            name='projects'
            className='bg-gradient-to-b from-black to-gray-800 w-full text-white'
        >
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        Projects
                    </p>
                    <p className='py-6'>
                        Check out some of my work right here
                    </p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-8'>
                    {
                        portfolioArray.map(({ id, src, name, live, code }) => (

                            <div key={id} className='shadow-md shadow-gray-600 rounded-2xl'>
                                <img className='rounded-lg duration-200 hover:scale-105'
                                    src={src}
                                    alt="" />
                                <p className='text-center mt-3'>{name}</p>
                                <div className='flex items-center justify-center space-x-4 mt-2'>
                                    <button className='w-1/2 px-4 py-2 duration-200 hover:scale-105 hover:shadow-lg hover:text-green-300'>
                                        <a href={live} target='_blank' rel="noreferrer">
                                            Demo
                                        </a>
                                    </button>
                                    <button className='w-1/2 px-4 py-2 duration-200 hover:scale-105'>
                                        <a href={code} target='_blank' rel="noreferrer">
                                            Code
                                        </a>
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )

}

export default Portfolio