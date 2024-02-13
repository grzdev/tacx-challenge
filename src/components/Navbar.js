"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Logo from "../../design/images/logo.svg"
import openIcon from "../../design/images/icon-hamburger.svg"
import closeIcon from "../../design/images/icon-close.svg"
import { Icon } from '@iconify/react'


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };

  return (
    <div>
        {/* Desktop view */}
        <nav className="hidden md:flex relative top-0 left-0 right-0 z-50 border-b-2 bg-white border-white h-[5rem] flex flex-row justify-between items-center px-[10rem]">
            <div>
                <Image
                    src={Logo}
                    alt=""
                />
            </div>

            <div className="flex flex-row gap-[2rem]">
                <h1 className="nav-link text-gray-400 hover:text-black hover:font-semibold transition-colors duration-300 font-medium cursor-pointer">
                    Home
                </h1>
                <h1 className="nav-link text-gray-400 hover:text-black hover:font-semibold transition-colors duration-300 font-medium cursor-pointer">
                    About
                </h1>
                <h1 className="nav-link text-gray-400 hover:text-black hover:font-semibold transition-colors duration-300 font-medium cursor-pointer">
                    Contact
                </h1>
                <h1 className="nav-link text-gray-400 hover:text-black hover:font-semibold transition-colors duration-300 font-medium cursor-pointer">
                    Blog
                </h1>
                <h1 className="nav-link text-gray-400 hover:text-black hover:font-semibold transition-colors duration-300 font-medium cursor-pointer">
                    Careers
                </h1>
            </div>

            <div>
                <button className="w-[11.5rem] h-[3.2rem] rounded-[2rem] bg-gradient-to-r from-green-400 to-cyan-500 text-white hover:opacity-55 transition-opacity duration-300">
                    Request invite
                </button>
            </div>
        </nav>

        {/* Mobile view */}
        <div className="block md:hidden fixed top-0 left-0 z-50 w-full">
            <div className="flex justify-between border-b-2 bg-white border-white items-center px-[1.5rem] h-[4.5rem] py-2">
                <div>
                    <Image
                        src={Logo}
                        alt=""
                        className=''
                    />
                </div>
                <div className="flex items-center">
                    {isOpen ? (
                        <button onClick={toggleNavbar}>
                            <Image
                                src={closeIcon}
                                alt=''
                            />
                        </button>
                    ) : (
                        <button onClick={toggleNavbar}>
                            <Image
                                src={openIcon}
                                alt=''
                            />
                        </button>
                    )}
                </div>
            </div>
            {isOpen && (
                <div className="bg-white rounded-lg shadow-md mt-4 mx-4 p-4 w-22rem h-20rem">
                <div className="flex flex-col items-center justify-center">
                    <a href="#" className="text-gray-700 text-lg py-2">
                    Home
                    </a>
                    <a href="#" className="text-gray-700 text-lg py-2">
                    About
                    </a>
                    <a href="#" className="text-gray-700 text-lg py-2">
                    Contact
                    </a>
                    <a href="#" className="text-gray-700 text-lg py-2">
                    Blog
                    </a>
                    <a href="#" className="text-gray-700 text-lg py-2">
                    Careers
                    </a>
                </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default Navbar