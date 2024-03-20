import React, { Fragment, useEffect } from 'react'
import "./Hero.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <Fragment>
      <section
        id='home'
        className='py5 container flex flex-wrap items-center justify-center mx-auto md:px-20 md:flex-row'
        data-aos='fade-up'
      >
        <div className='container  hero-b flex flex-wrap items-center justify-center mx-auto md:flex-row'>
          <div className='mb-14 lg:mb-0 lg:w-1/2  mt-28 hero-text-sm'>
            <p className='w-full lg:text-left lg:max-w-md text-red-800 hero-p'>
              _BRANDING, MARKETING, DESIGN & DIGITAL CREATIVE AGENCY
            </p>
            <h1
              className='max-w-xl text-[2.9rem] leading-none font-extrabold text-white lg:text-7xl
                lg:text-left lg:leading-tight mb-5 hero-h1'
            >
              CREATIVE EFFECTIVE SOLUTION <br></br>FOR BRANDS
            </h1>
          </div>
          <div className='lg:w-1/2 vid'>
            <video
              muted
              autoPlay
              loop
              width={500}
              height={500}
              className=' mt-40 hero-text-sm2'
            >
              <source src='/Img/Img/case 1.mp4'></source>
            </video>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
