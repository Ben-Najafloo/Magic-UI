import Link from 'next/link'
import React from 'react';
import { FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FastContact } from './FastContact';


const Footer = () => {
    return (


        <footer className="border-t-2 bg-white dark:bg-black ">
            <div className="mx-auto w-full max-w-screen-xl lg:px-4 px-2 pt-4 pb-6">
                <div className='justify-end w-full flex mb-5'>
                    <FastContact />
                </div>


                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://behnam.tech/" className="hover:underline">Behnam Tech</a> | All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <Link target='blank' href="https://www.linkedin.com/in/behnam-najafloo" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <FaLinkedin className="w-4 h-4" />
                        </Link>
                        <Link target='blank' href="https://wa.me/393517184843" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <FaWhatsapp className="w-4 h-4" />
                        </Link>
                        <Link target='blank' href="https://github.com/Ben-Najafloo/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <FaGithub className="w-4 h-4" />
                        </Link>
                        <Link href="mailto:behnamnajaflou@gmail.com" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <IoMdMail className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer
