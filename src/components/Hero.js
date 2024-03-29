import React from 'react'
import bgImg1 from "../../design/images/bg-intro-desktop.svg"
import bgImg2 from "../../design/images/image-mockups.png"
import Image from 'next/image'


function Hero() {
  return (
    <div>
        {/* Desktop view */}
        <div className='hidden md:flex h-[42rem] bg-[#fafafa] flex-row'>
            <div className="animated-content flex flex-col justify-center items-start px-[10rem] w-[46rem] gap-[2rem] mt-[-2rem]">
                <h1 className='animate-slide-up-fade-in text-[3rem] leading-[4rem] text-[#363636]'>
                    Next generation digital banking
                </h1>
                <p className='animate-slide-up-fade-in2 mt-[-1rem] text-[#ababab]'>
                    Take your financial life online. Your Easybank account will be a one-stop-shop 
                    for spending, saving, budgeting, investing, and much more.
                </p>
                <button className="animate-slide-up-fade-in3 w-[11.5rem] h-[3.2rem] rounded-[2rem] bg-gradient-to-r from-green-400 to-cyan-500 text-white hover:opacity-55 transition-opacity duration-300">
                    Request invite
                </button>
            </div>
            <div className='absolute inset-0 z-0'>
                <div className='animated-image'>
                    <Image
                        src={bgImg1}
                        alt=""
                        className='mt-[-11rem] relative ml-[40rem] animate-fade-in'
                    />
                </div>
                <div className='animated-image'>
                    <Image
                        src={bgImg2}
                        alt=""
                        className=' mt-[-54rem] relative ml-[54rem] animate-slide-in-from-right'
                    />
                </div>
            </div>
        </div>

        {/* Mobile view */}
        <div className='flex flex-col h-[53rem] md:hidden bg-[#fafafa] px-[1rem] overflow-x-hidden'>
            <div className='absolute inset-0 z-0' style={{ overflowX: 'hidden' }}>
                <div className='w-[45rem] h-[40rem] overflow-x-hidden'>
                    <Image
                        src={bgImg1}
                        alt=""
                        className='mt-[-12rem] ml-[-6rem] relative object-cover'
                        layout="responsive"
                    />
                </div>
                <div >
                    <Image
                        src={bgImg2}
                        alt=""
                        className=' mt-[-43.8rem] relative z-0'
                    />
                </div>
            </div>
            
            <div className=' animated-content flex flex-col z-0 mt-[28rem] justify-center items-center gap-[2rem]' >
                <h1 className='animate-slide-up-fade-in text-[2.5rem] text-center text-[#363636] leading-[3rem]'>
                    Next generation digital banking
                </h1>
                <p className='animate-slide-up-fade-in2 text-center text-[#ababab] mt-[-1rem]'>
                    Take your financial life online. Your Easybank account will be a one-stop-shop 
                    for spending, saving, budgeting, investing, and much more.      
                </p>
                <button className="animate-slide-up-fade-in3 w-[11.5rem] h-[3.2rem] rounded-[2rem] bg-gradient-to-r from-green-400 to-cyan-500 text-white ">
                    Request invite
                </button>
            </div>
        </div>
    </div>
  )
}

export default Hero