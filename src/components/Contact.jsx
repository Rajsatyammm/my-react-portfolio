// import React, { useState } from 'react'

function Contact() {

    // const [name, setName] = useState("")
    // const [email, setEmail] = useState("")
    // const [text, setText] = useState("")

    // const nameHandler = (e) => {
    //     setName(e.target.value)
    // }

    // const emailHandler = (e) => {
    //     setEmail(e.target.value)
    // }

    // const textHandler = (e) => {
    //     setText(e.target.value)
    // }

    // const submitHandler = () => {
    //     const userData = {
    //         name: name,
    //         email: email,
    //         text: text,
    //     }
    //     console.log(userData)
    // }

    return (
        <div
            name='contact'
            className='w-full md:h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white min-h-[160vh]'
        >
            <div className='flex flex-col p-4 justify-center lg:h-full max-w-screen-lg mx-auto'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        Contact
                    </p>
                    <p className='py-6'>
                        Submit the form below to get in touch with me
                    </p>
                </div>

                <div className='flex justify-center'>

                    <form action="https://getform.io/f/c2633d3c-d070-4018-9c7e-b1033bff5ebc"
                    method='POST'
                        // onSubmit={submitHandler}
                        className='flex flex-col w-full md:w-1/2'
                    >
                        <input
                            type="text"
                            name='name'
                            // value={name}
                            placeholder='Enter your name'
                            // onChange={nameHandler}
                            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                        /> 

                        <input
                            type="email"
                            name='email'
                            // value={email}
                            placeholder='Enter your email'
                            // onChange={emailHandler}
                            className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                        />

                        <textarea
                            name="message"
                            rows="6"
                            // onChange={textHandler}
                            // value={text}
                            placeholder='Enter your message'
                            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                        ></textarea>

                        <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-4 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
                            Let's talk
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default Contact