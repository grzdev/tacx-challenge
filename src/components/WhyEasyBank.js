"use client"

import React, { useEffect, useRef } from 'react'
import icon1 from "../../design/images/icon-onboarding.svg"
import icon2 from "../../design/images/icon-budgeting.svg"
import icon3 from "../../design/images/icon-online.svg"
import icon4 from "../../design/images/icon-api.svg"
import Image from 'next/image'

// features data
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

  // div animation
  const animatedDivRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in-from-bottom');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    if (animatedDivRef.current) {
      observer.observe(animatedDivRef.current);
    }

    return () => {
      if (animatedDivRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(animatedDivRef.current);
      }
    };
  }, []);

  const animatedDivRef2 = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in-from-bottom2');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    if (animatedDivRef2.current) {
      observer.observe(animatedDivRef2.current);
    }

    return () => {
      if (animatedDivRef2.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(animatedDivRef2.current);
      }
    };
  }, []);

  // Image fade in
  const animatedFlexRowRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in2');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    if (animatedFlexRowRef.current) {
      observer.observe(animatedFlexRowRef.current);
    }

    return () => {
      if (animatedFlexRowRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(animatedFlexRowRef.current);
      }
    };
  }, []);


  return (
    <div>
      {/* Desktop view */}
      <div className='bg-[#f0f1f4] h-[44rem] px-[10rem] hidden md:flex flex-col justify-center items-start gap-[5rem]'>
        <div>
          <h1 className='text-[2.5rem] text-[#363636]' ref={animatedDivRef}>
            Why Choose EasyBank?
          </h1>
          <p className='mt-[1rem] text-[#808080] w-[38rem]' ref={animatedDivRef2}>
            We leverage Open Banking to turn your bank account into your financial hub. Control 
            your finances like never before.
          </p>
        </div>
        <div className='flex flex-row gap-[2rem]' ref={animatedFlexRowRef}>
          {data.map((item, index) => (
            <div key={index} className='flex flex-col gap-[2rem]'>
              <Image
                src={item.icon}
                alt=""
              />
              <h2 className='text-[1.4rem] font-medium'>
                {item.header}
              </h2>
              <p className='text-[#808080] leading-[1.7rem]'>
                {item.paragraph}
              </p>
            </div>
          ))}
        </div>
      </div> 

      {/* Mobile view */}
      <div className='flex flex-col items-center md:hidden h-[88rem] bg-[#f0f1f4] px-[1rem]'>
        <div>
          <h1 className='text-[2rem] mt-[6rem] leading-[2.5rem] text-center text-[#363636]' ref={animatedDivRef}>
            Why Choose <br/> EasyBank?
          </h1>
          <p className='mt-[1.6rem] text-center text-[#808080]' ref={animatedDivRef2}>
            We leverage Open Banking to turn your bank account into your financial hub. Control 
            your finances like never before.
          </p>
        </div>

        <div className='flex flex-col justify-center items-center mt-[4.55rem] gap-[2.5rem]' ref={animatedFlexRowRef}>
          {data.map((item, index) => (
          <div key={index} className='flex justify-center items-center flex-col gap-[1.2rem]'>
            <Image
              src={item.icon}
              alt=""
            />
            <h2 className='text-[1.4rem]'>
              {item.header}
            </h2>
            <p className='text-[#808080] text-center'>
              {item.paragraph}
            </p>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhyEasyBank