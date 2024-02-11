import React from 'react'
import icon1 from "../../design/images/icon-onboarding.svg"
import icon2 from "../../design/images/icon-budgeting.svg"
import icon3 from "../../design/images/icon-online.svg"
import icon4 from "../../design/images/icon-api.svg"
import Image from 'next/image'

const data = [
    {
      icon: icon3,
      header: 'Online Banking',
      paragraph: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
    },
    {
      icon: icon2,
      header: 'Simple Budgeting',
      paragraph: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.'
    },
    {
      icon: icon1,
      header: 'Fast Onboarding',
      paragraph: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.'
    },
    {
      icon: icon4,
      header: 'Open API',
      paragraph: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'
    }
];

function WhyEasyBank() {
  return (
    <div className='bg-[#f0f1f4] h-[44rem] px-[10rem] flex flex-col justify-center items-start gap-[5rem]'>
        <div>
            <h1 className='text-[2.5rem] text-[#363636]'>
                Why Choose EasyBank
            </h1>
            <p className='mt-[1rem] text-[#808080] w-[38rem]'>
                We leverage Open Banking to turn your bank account into your financial hub. Control 
                your finances like never before.
            </p>
        </div>
        <div className='flex flex-row gap-[2rem]'>
            {data.map((item, index) => (
            <div key={index} className='flex flex-col gap-[2rem]'>
                <Image
                    src={item.icon}
                    alt=""
                />
                <h2 className='text-[1.4rem] font-medium '>
                    {item.header}
                </h2>
                <p className='text-[#808080]'>
                    {item.paragraph}
                </p>
            </div>
            ))}
        </div>
    </div>
  )
}

export default WhyEasyBank