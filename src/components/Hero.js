import React from 'react'
import bgImg1 from "../../design/images/bg-intro-desktop.svg"
import bgImg2 from "../../design/images/image-mockups.png"
import Image from 'next/image'

function Hero() {
  return (
    <div className='h-[44rem] bg-[#fafafa] flex flex-row'>
        <div className="relative flex flex-col justify-center items-start px-[10rem] w-[46rem] gap-[2rem] mt-[-2rem]">
            <h1 className='text-[3rem] leading-[4rem] text-[#363636]'>
                Next generation digital banking
            </h1>
            <p className='mt-[-1rem] text-[#808080]'>
                Take your financial life online. Your Easybank account will be a one-stop-shop 
                for spending, saving, budgeting, investing, and much more.
            </p>
            <button className="w-[11.5rem] h-[3.2rem] rounded-[2rem] bg-gradient-to-r from-green-400 to-cyan-500 text-white ">
                Request invite
            </button>
        </div>
        <div className='absolute inset-0 z-0'>
            <div className=''>
                <Image
                    src={bgImg1}
                    alt=""
                    className='mt-[-10rem] relative ml-[40rem] '
                />
            </div>
            <div >
                <Image
                    src={bgImg2}
                    alt=""
                    className=' mt-[-55rem] relative ml-[54rem] z-0'
                />
            </div>
        </div>
    </div>
  )
}

export default Hero