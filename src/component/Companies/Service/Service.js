import React, { Fragment } from 'react';
import './Service.css'
import {BiChevronRight} from 'react-icons/bi'
import { Link } from 'react-router-dom';

export const Service = () => {
  return (
    <Fragment>
      <div className='cre-top container flex flex-wrap items-center justify-center mx-auto md:px-28 mr-20 justify-between md:flex-row mb-28'>
        <h1
          className=' leading-none font-extrabold lg:text-4xl text-zinc-700
                lg:text-left lg:leading-tight mb-2  mt-28  md:flex-row sev-h1'
        >
          Our Services
        </h1>
        <div className=''>
          <div className='flex justify-between sev-con'>
            <div className='card border-none  sub-bg'>
              <img
                src='/Img/Img/Rectangle 3785.png'
                alt='mask-1'
                className='img'
              />
              <div className='intro'>
                <h1 className='ml-12 font-bold lg:text-4xl lg:text-left sev-h1-2 text-white'>
                  Branding & Design
                </h1>
                <p className='text-white sev-h2'>
                  With our expertise in strategic thinking and creative
                  execution, we craft cohesive brand identities that communicate
                  your values, differentiate you from competitors, and captivate
                  your target market helping your business stand out and thrive
                  in today's competitive landscape.
                  <Link
                    to='/service'
                    className=' text-decoration-none text-blue-800 flex items-center mt-2'
                  >
                    View More <BiChevronRight className='mt-1' />
                  </Link>
                </p>
              </div>
            </div>
            <div className='card card2 sub-bg'>
              <img
                src='/Img/Img/Rectangle 3785.png'
                alt='mask-1'
                className='img'
              />
              <div className='intro'>
                <h1 className='ml-12 font-bold lg:text-4xl lg:text-left sev-h1-2 text-white'>
                  Marketing & Strategy
                </h1>
                <p className='text-white sev-h2'>
                  From in-depth market research and targeted campaign planning
                  to innovative digital marketing techniques, we deliver
                  strategic marketing solutions that empower your brand to stand
                  out in a competitive landscape and achieve remarkable results.
                  <Link
                    to='/service'
                    className=' text-decoration-none text-blue-800 flex items-center mt-4 '
                  >
                    View More <BiChevronRight className='mt-1' />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-between sev-con'>
          <div className='card card3 mr-10 sub-bg'>
            <img
              src='/Img/Img/Rectangle 3785.png'
              alt='mask-1'
              className='img'
            />
            <div className='intro'>
              <h1 className='ml-12 font-bold lg:text-4xl lg:text-left sev-h1-2 text-white'>
                Product Design
              </h1>
              <p className='text-white sev-h2'>
                With our expertise in cutting-edge design methodologies and
                creative problem-solving, we specialise in turning your vision
                into remarkable product designs that are not only visually
                stunning but also functional, intuitive, and market-ready.
                <Link
                  to='/service'
                  className=' text-decoration-none text-blue-800 flex items-center mt-4'
                >
                  View More <BiChevronRight className='mt-1' />
                </Link>
              </p>
            </div>
          </div>
          <div className='card card4 sub-bg'>
            <img
              src='/Img/Img/Rectangle 3785.png'
              alt='mask-1'
              className='img'
            />
            <div className='intro'>
              <h1 className='ml-12 font-bold lg:text-4xl sev-h1-2 lg:text-left text-white'>
                Coding & Development
              </h1>
              <p className='text-white sev-h2'>
                From front-end development and back-end programming to database
                management and API integration, we provide comprehensive coding
                and development services that elevate your digital experience
                and drive success in the digital realm.
                <Link
                  to='/service'
                  className=' text-decoration-none text-blue-800 flex items-center mt-4'
                >
                  View More <BiChevronRight className='mt-1' />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
