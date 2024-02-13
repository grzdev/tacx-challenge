import React from 'react'
import img1 from "../../design/images/image-confetti.jpg"
import img2 from "../../design/images/image-currency.jpg"
import img3 from "../../design/images/image-plane.jpg"
import img4 from "../../design/images/image-restaurant.jpg"
import Image from 'next/image'

const data = [
    {
      icon: img2,
      header: ' Receive money in any currency with no fees',
      by: 'By Claire Robinson',
      paragraph: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …'
    },
    {
      icon: img4,
      header: 'Treat yourself without worrying about money',
      by: 'By Wilson Hutton',
      paragraph: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …'
    },
    {
      icon: img3,
      header: 'Take your Easybank card wherever you go',
      by: 'By Wilson Huttong',
      paragraph: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …'
    },
    {
      icon: img1,
      header: 'Our invite-only Beta accounts are now live!',
      by: 'By Claire Robinson',
      paragraph: '  After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...'
    }
];

function Articles() {
  return (
    <div>
      {/* Desktop view */}
      <div className='h-[48rem] bg-[#fafafa] hidden md:flex justify-center items-start gap-[3rem] px-[10rem] flex-col'>
        <h1 className='text-[2.5rem] text-[#363636] mt-[-1rem]'>
          Latest Articles
        </h1>
        <div className='flex flex-row gap-[1.5rem] cursor-pointer'>
          {data.map((item, index) => (
            <div key={index}>
              <div className='w-[17rem] h-[26rem] bg-white rounded-[0.6rem] flex flex-col'>
                <Image 
                  src={item.icon} 
                  alt='' 
                  className='rounded-t-lg h-[11rem]' 
                />
                <div className='flex flex-col justify-center items-start p-[2rem] gap-[0.8rem]'>
                  <h1 className='text-[0.8rem] font-medium text-[#9f9f9f]'>
                    {item.by}
                  </h1>
                  <h1 className='text-[1.2rem] leading-[1.6rem] font-semibold tracking-tight hover:text-green-500 transition-colors duration-300'>
                    {item.header}
                  </h1>
                  <p className='text-[0.8rem] font-medium text-[#9f9f9f]'>
                    {item.paragraph}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile view */}
      <div className='flex justify-center flex-col md:hidden h-[120rem] bg-[#fafafa] px-[1rem]'>
        <h1 className='text-[2rem] text-center text-[#363636] mt-[1rem]'>
          Latest Articles
        </h1>
        <div className='flex flex-col justify-center items-center mt-[2rem] gap-[2rem]'>
          {data.map((item, index) => (
            <div key={index}>
              <div className='w-[20rem] h-[24rem] bg-white rounded-[0.6rem] flex flex-col'>
                <Image 
                  src={item.icon} 
                  alt='' 
                  className='rounded-t-lg h-[11rem]' 
                />
                <div className='flex flex-col justify-center items-start py-[2rem] px-[1.5rem] gap-[0.8rem]'>
                  <h1 className='text-[0.8rem] font-medium text-[#9f9f9f]'>
                    {item.by}
                  </h1>
                  <h1 className='text-[1.2rem] leading-[1.6rem] font-medium tracking-tight'>
                    {item.header}
                  </h1>
                  <p className='text-[0.8rem] font-medium text-[#9f9f9f]'>
                    {item.paragraph}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Articles