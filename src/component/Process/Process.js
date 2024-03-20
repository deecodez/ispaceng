import React, { Fragment, useEffect } from 'react'
import './Process.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Process = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  
  return (
    <Fragment>
      <div className='col w-full md:items-center mt-40 h-full'>
        <div className=' container flex flex-wrap items-center justify-center mx-auto justify-between md:flex-row'>
          <div className=''>
            <div className=''>
              <h1
                className='w-3/5 text-[2.9rem] leading-none font-extrabold lg:text-4xl text-zinc-700
                lg:text-left lg:leading-tight mb-2 md:px-28  mt-0  md:flex-row pro-h1'
              >
                Our Process
              </h1>
              <div className='flex md:items-center'>
                <div className='line-red ml-40 mr-5 pro-p'></div>
                <p className='w-1/3 pro-p1'>
                  Ispace methodology thrives on collaboration between us & our
                  clients. This influences, shapes & determines the correct
                  final project outcome, ensuring dynamic results.
                </p>
              </div>
              <div
                className='flex container pro-con justify-between flex-wrap items-center justify-center mx-auto mt-5  md:px-28 md:flex-row'
                data-aos='zoom-in'
              >
                <div className='ml-10 mob'>
                  <h1 className='font-extrabold lg:text-8xl lg:text-left p1'>
                    O1
                  </h1>
                  <p className='font-extrabold w-4/5 text-zinc-700  pro-des'>
                    BRAINSTORMING & RESEARCH
                  </p>
                </div>
                <div>
                  <h1 className='font-extrabold lg:text-8xl lg:text-left p2'>
                    O2
                  </h1>
                  <p className='font-extrabold w-4/5 text-zinc-700  pro-des'>
                    BRAND STRATEGY &ANALYSIS
                  </p>
                </div>
                <div>
                  <h1 className='font-extrabold lg:text-8xl lg:text-left p3'>
                    03
                  </h1>
                  <p className='font-extrabold w-4/5 text-zinc-700  pro-des'>
                    BRAND DESIGN &APPLICATIONS
                  </p>
                </div>
                <div>
                  <h1 className='font-extrabold lg:text-8xl lg:text-left p4'>
                    04
                  </h1>
                  <p className='font-extrabold w-4/5 text-zinc-700 pro-des'>
                    MARKETING & SUPPORT
                  </p>
                </div>
              </div>
            </div>
            <img
              src='/Img/Img/group 149.png'
              alt=''
              className='absolute w-40 left-2/4 position'
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
