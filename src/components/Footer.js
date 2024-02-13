import React from 'react'
import Logo from "../../design/images/logo2.png"
import icon1 from "../../design/images/icon-facebook.svg"
import icon2 from "../../design/images/icon-youtube.svg"
import icon3 from "../../design/images/icon-twitter.svg"
import icon4 from "../../design/images/icon-pinterest.svg"
import icon5 from "../../design/images/icon-instagram.svg"
import Image from 'next/image'
import { IoLogoFacebook, IoLogoInstagram, IoLogoPinterest, IoLogoTwitter, IoLogoYoutube } from "react-icons/io";

function Footer() {
  return (
    <div>
        {/* Desktop view */}
        <div className='h-[13rem] bg-[#142a4d] hidden md:flex flex-row px-[10rem] py-[3.5rem] justify-between'>
            <div className='flex flex-row gap-[10rem]'>
                <div className='flex flex-col gap-[3.7rem]'>
                    <div className='flex flex-row gap-[0.1rem] mt-[-0.3rem] items-align'>
                        <Image
                            src={Logo}
                            alt=""
                            className='w-[2rem] h-[2rem]'
                        />
                        <h1 className='text-[1.3rem] font-bold text-white mt-[-0.1rem]' >
                            easybank
                        </h1>
                    </div>
                    <div className='flex flex-row gap-[1rem]'>
                        <IoLogoFacebook className='hover:text-green-500 text-white text-[1.4rem] transition-colors duration-300 cursor-pointer'/>

                        <IoLogoYoutube className='hover:text-green-500 text-white text-[1.4rem] transition-colors duration-300 cursor-pointer'/>
                       
                        <IoLogoTwitter className='hover:text-green-500 text-white text-[1.4rem] transition-colors duration-300 cursor-pointer'/>
                        
                        <IoLogoPinterest className='hover:text-green-500 text-white text-[1.4rem] transition-colors duration-300 cursor-pointer'/>
                        
                        <IoLogoInstagram className='hover:text-green-500 text-white text-[1.5rem] transition-colors duration-300 cursor-pointer'/>
                    </div>
                </div>

                <div className='flex flex-col gap-[1rem]'>
                    <h1 className='text-white hover:text-green-500 transition-colors duration-300 cursor-pointer'>
                        About
                    </h1>
                    <h1 className='text-white hover:text-green-500 transition-colors duration-300 cursor-pointer'>
                        Contact
                    </h1>
                    <h1 className='text-white hover:text-green-500 transition-colors duration-300 cursor-pointer'>
                        Blog
                    </h1>
                </div>

                <div className='flex flex-col gap-[1rem]'>
                    <h1 className='text-white hover:text-green-500 transition-colors duration-300 cursor-pointer'>
                        Carreers
                    </h1>
                    <h1 className='text-white hover:text-green-500 transition-colors duration-300 cursor-pointer'>
                        Support
                    </h1>
                    <h1 className='text-white hover:text-green-500 transition-colors duration-300 cursor-pointer'>
                        Privacy Policy
                    </h1>
                </div>
            </div>

            <div>
                <button className="w-[11.5rem] h-[3.2rem] rounded-[2rem] bg-gradient-to-r from-green-400 to-cyan-500 text-white hover:opacity-55 transition-opacity duration-300">
                    Request invite
                </button>
            </div>
        </div>

        {/* Mobile view */}
        <div className='flex flex-col justify-center items-center md:hidden h-[40rem] bg-[#142a4d]'>
            <div className='flex flex-col gap-[1rem]'>
                <div className='flex  justify-center items-center flex-col gap-[2rem]'>
                    <div className='flex flex-row gap-[0.1rem] items-align'>
                        <Image
                            src={Logo}
                            alt=""
                            className='w-[2rem] h-[2rem]'
                        />
                        <h1 className='text-[1.3rem] font-bold text-white mt-[-0.1rem]' >
                            easybank
                        </h1>
                    </div>
                    <div className='flex flex-row gap-[1rem]'>
                        <Image
                            src={icon1}
                            alt=""
                        />
                        <Image
                        src={icon2}
                        alt=""
                        />
                        <Image
                            src={icon3}
                            alt=""
                        />
                        <Image
                            src={icon4}
                            alt=""
                        />
                        <Image
                            src={icon5}
                            alt=""
                        />
                    </div>
                </div>

                <div className='flex flex-col justify-center mt-[2.5rem] items-center gap-[1rem]'>
                    <h1 className='text-white'>
                        About
                    </h1>
                    <h1 className='text-white'>
                        Contact
                    </h1>
                    <h1 className='text-white'>
                        Blog
                    </h1>
                </div>

                <div className='flex flex-col justify-center items-center gap-[1rem]'>
                    <h1 className='text-white'>
                        Carreers
                    </h1>
                    <h1 className='text-white'>
                        Support
                    </h1>
                    <h1 className='text-white'>
                        Privacy Policy
                    </h1>
                </div>
            </div>

            <div className='mt-[3.5rem]'>
                <button className="w-[11.5rem] h-[3.2rem] rounded-[2rem] bg-gradient-to-r from-green-400 to-cyan-500 text-white ">
                    Request invite
                </button>
            </div>

            <div className='mt-[2rem]'>
                <h1 className='text-[#8a8a8a]'>@EasyBank. All Right Reserved</h1>
            </div>
        </div>
    </div>
  )
}

export default Footer