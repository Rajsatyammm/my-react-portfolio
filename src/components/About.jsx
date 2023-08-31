import React from 'react'

function About() {
    return (
        <div
            name='about'
            className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'
        >

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

                <div className='pb-8'>

                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        About
                    </p>

                </div>


                <p className='text-xl'>
                    Greetings! I'm Satyam Raj, a final-year B.Tech student and seasoned programmer. Proficient in Java, DSA, OOP, HTML, CSS, JavaScript, React, and Node.js. Eager to contribute to innovative projects, I blend problem-solving zeal with continuous learning....
                </p>

                <br />

                {/* <p className='text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsam eligendi quidem reiciendis culpa. Nihil asperiores excepturi ullam maiores vel expedita voluptates iure. Quis, quibusdam, praesentium ut debitis, necessitatibus ullam sunt cum fugit aliquam ab et
                </p> */}
            </div>
        </div>
    )
}

export default About