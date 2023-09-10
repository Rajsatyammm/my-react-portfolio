import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'


const SocialLinks = () => {

    const socials = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/rajsatyammm',
            style: 'rounded-tr-md',
        },
        {
            id: 2,
            child: (
                <>
                    Github <FaGithub size={30} />
                </>
            ),
            href: 'https://www.github.com/rajsatyammm',
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:rajsatyammm@gmail.com',
        },
        {
            id: 4,
            child: (
                <>
                    LeetCode <SiLeetcode size={30} />
                </>
            ),
            href: 'https://leetcode.com/Rajsatyammm/',
        },
        {
            id: 5,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: '/resume.pdf',
            style: 'rounded-br-md',
            download: true,
        }
    ]

    return (
        <div className='hidden lg:flex flex-col top-[30%] left-0 fixed'>
            <ul>
                {
                    socials.map(({id, child, href, style, download}) => (
                        <li key={id}
                            className={`flex justify-between items-center w-40 h-14 px-4 hover:rounded-md duration-300 bg-gray-500 ml-[-100px] hover:ml-[-10px] + ${style}`}
                        >
                            <a href={href} className="flex justify-between items-center w-full text-white"
                                rel="noreferrer"
                                target='_blank'
                                download={download}
                            >
                                {child}
                            </a>
                        </li>
                    ))
                }
            </ul >
        </div >
    )
}

export default SocialLinks
