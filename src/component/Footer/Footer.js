import React, { Fragment, useState } from 'react'
import {LuExternalLink} from "react-icons/lu"
import "./Footer.css";
import MyModal from '../Modal/Modal';

export const Footer = () => {
  const [isShow, setIsShow] = useState(false);

  const toggleModal = () => {
    setIsShow(!isShow);
  };
  return (
    <Fragment>
      <div className='footer-bg'>
        <div className='container  items-center justify-center mx-auto md:px-28 justify-between md:flex-row'>
          <div className='flex justify-between footer-items'>
            <div className='footer-t'>
              <div className=''>
                <h1
                  className='max-w-xl text-[2.9rem] leading-10 font-extrabold lg:text-5xl
                lg:text-left lg:leading-tight mb-3 w-3/5 text-white text-white-2'
                >
                  Let’s Discuss Your Projects & Ideas{' '}
                  <span className='text-rose-800'>.</span>
                </h1>
              </div>
              <button className='mr-32 text-cl' onClick={toggleModal}>
                <span className='text-blue-950 font-light flex btn footer-bt footer-420 md:items-center ml-auto'>
                  Get in Touch{' '}
                  <img src='/Img/Img/fire 1.png' className='ml-1 ' alt='' />
                </span>
              </button>
            </div>
            <div className='text-white'>
              <div className='flex'>
                <p className='f-p'>Email Address</p>
                <a
                  href='mailto:info@ispaceng.com'
                  target='blank'
                  className='flex md:items-center f-p ml-20 email'
                >
                  @ispaceng.com
                  <LuExternalLink />
                </a>
              </div>
              <div className='line mt-2 mb-4'></div>
              <div className='flex'>
                <p className='f-p'>Instagram</p>
                <a
                  href='https://instagram.com/ispaceng?igshid=NTc4MTIwNjQ2YQ=='
                  target='blank'
                  className='flex md:items-center f-p ml-auto'
                >
                  @ispaceng.com
                  <LuExternalLink />
                </a>
              </div>
              <div className='line mt-2 mb-4'></div>
              <div className='flex'>
                <p className='f-p'>LinkedIn</p>
                <a
                  href='https://www.linkedin.com/company/ispace-tech/'
                  target='blank'
                  className='flex md:items-center f-p ml-auto'
                >
                  @ispaceng.com
                  <LuExternalLink />
                </a>
              </div>
              <div className='line mt-2 mb-4'></div>
              <div className='flex'>
                <p className='f-p'>Medium</p>
                <a
                  href='https://medium.com/@ispaceng.com'
                  target='blank'
                  className='flex md:items-center f-p ml-auto'
                >
                  @ispaceng.com
                  <LuExternalLink />
                </a>
              </div>
              <div className='line mt-2 mb-4'></div>
              <div className='flex'>
                <p className='f-p'>Twitter</p>
                <a
                  href='https://twitter.com/ispaceng?s=21&t=cMsT_sOtNKSprN6t_Vms7Q'
                  target='blank'
                  className='flex md:items-center f-p ml-auto'
                >
                  @ispaceng.com
                  <LuExternalLink />
                </a>
              </div>
              <div className='line mt-2 mb-4'></div>
            </div>
          </div>
          <div className='line mt-20 mb-4'></div>
        </div>
      </div>
      <MyModal isShow={isShow} setIsShow={toggleModal} />
    </Fragment>
  );
}
