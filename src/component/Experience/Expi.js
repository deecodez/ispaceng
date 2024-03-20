import React, { Fragment, useEffect } from 'react'
import './Expi.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Expi = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <Fragment>
      <div className='container flex flex-wrap items-center justify-center mx-auto md:px-10 justify-between md:flex-row'>
        <div className=''>
          <h1
            className='w-3/5 md:text-[2.9rem] leading-none font-extrabold lg:text-4xl text-zinc-700
                 lg:leading-tight mb-2 px-20  mt-28 exp-t '
          >
            Bringing Brands to Life with{' '}
            <span className='text-blue-950'>Strategy</span>{' '}
            <span className='text-rose-800'>&</span>{' '}
            <span className='text-rose-800'>Design</span>
          </h1>
          <div className='flex exp-p md:items-center'>
            <div className='line-red line-red-1 line-360 ml-28 mr-5'></div>
            <p className='w-1/3 exp-p'>
              Discover the power of our adept content creators and innovative
              team in crafting impactful business content, encompassing
              everything from dynamic brainstorm sessions and polished
              presentations to brand identities and captivating visuals.
            </p>
          </div>
          <div className='flex container justify-between flex-wrap items-center justify-center mx-auto mt-5  md:px-20 md:flex-row'>
            <img src='/Img/Img/deadline 1.png' alt='' className='deadline' />
            <img
              src='/Img/Img/group 148.png'
              alt=''
              className='w-28 absolute top-3/6 left-2/4 md:mt-96 red-logo'
            />
            <div className='mr-10 exp-year  x-p' data-aos='fade-right'>
              <h1 className='font-extrabold exp-year lg:text-7xl lg:text-left text-blue-950'>
                10
              </h1>
              <p className='mb-3 text-rose-800'>Years Experience</p>
              <h1 className='font-extrabold exp-year lg:text-7xl lg:text-left text-blue-950'>
                200+
              </h1>
              <p className='mb-3 text-rose-800'>Clients</p>
              <h1 className='font-extrabold exp-year lg:text-7xl lg:text-left text-blue-950'>
                50+
              </h1>
              <p className='mb-3 text-rose-800'>Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
