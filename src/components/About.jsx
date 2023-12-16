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
                    👋 Hello! I'm Satyam Raj, a seasoned Java developer with expertise in building robust and scalable web applications. My skill set encompasses a wide range of Java technologies, including Servlets, JSP, JSTL, and JDBC. I specialize in leveraging powerful frameworks like Hibernate and the Spring Framework to create efficient and maintainable code.
                </p>
                <br />
                <p className='text-xl'>
                    🚀 Additionally, I thrive in the world of Data Structures and Algorithms, applying my knowledge to optimize solutions and enhance application performance.
                </p>
                <br />
                <p className='text-xl'>
                    💻 On the front-end, I am adept at crafting seamless user experiences using the MERN stack (MongoDB, Express.js, React, Node.js). I bring projects to life with a touch of Redux.js for state management, ensuring a smooth and interactive user interface.
                </p>
                <br />
                <p className='text-xl'>
                    🌐 Whether it's backend development with Java or creating dynamic and responsive frontend interfaces, I am passionate about delivering high-quality software solutions. Let's build something amazing together!
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