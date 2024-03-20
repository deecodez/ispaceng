import React, { Fragment, useState, useEffect } from 'react';
import { FaHamburger } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css';
import MyModal from '../Modal/Modal';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Navbar = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  const [isShow, setIsShow] = useState(false);

  const toggleModal = () => {
    setIsShow(!isShow);
  };
useEffect(() => {
  AOS.init({ duration: 2000 });
}, []);

  return (
    <Fragment>
      <div className='w-full sticky top-0 bg-col-2 z-10 nav-bar'>
        <div>
          <div className='flex items-center top-0 justify-between py-2 md:px-20 px-2'>
            <div>
              <span>
                <Link to='/'>
                  <img
                    src='/Img/Img/LOGO V copy 1.png'
                    alt=''
                    className='w-28 cursor-pointer ml-20 ispace-img'
                  />
                </Link>
              </span>
            </div>
            <div className='links-items'>
              <ul className=' md:flex md:items-center cursor-pointer text-white links'>
                <li className='md:ml-16 links'>
                  <Link to='/about'>About Us</Link>
                </li>
                <li className='md:ml-16 relative links' x-data='{dropdownOpen:false}'>
                  <Link to='/service'>Services</Link>
                </li>
                <li className='md:ml-16 links'>
                  <Link to='/projects'>Projects</Link>
                </li>
                <li className='md:ml-16 links'>
                  <Link to='/partner'>Partner</Link>
                </li>
                <li className='md:ml-16 links' onClick={toggleModal}>
                  Pricing
                </li>
                <button
                  className='md:ml-16 mr-32 text-cl'
                  onClick={toggleModal}
                >
                  <span className='font-light flex btn md:items-center ml-auto'>
                    Get in Touch{' '}
                    <img src='/Img/Img/fire 1.png' className='ml-1' alt='' />
                  </span>
                </button>
              </ul>
              <div>
                <button
                  className='mobile-menu-icon'
                  onClick={() => setShowDropDown(!showDropDown)}
                >
                  <FaHamburger className='bugar' />
                </button>
              </div>
            </div>
          </div>
          <div
            className={`${showDropDown ? 'show-dropdown' : 'hide-dropdown'}`}
          >
            <ul className='py-4 md:px-20 px-7 md:flex md:items-center cursor-pointer text-white links-mobile'>
              <li className='md:ml-16 link-mobile'>
                <Link to='/about'>About Us</Link>
              </li>
              <li
                className='md:ml-16 relative link-mobile'
                x-data='{dropdownOpen:false}'
              >
                <Link to='/service'>Services</Link>
              </li>
              <li className='md:ml-16 link-mobile'>
                <Link to='/projects'>Projects</Link>
              </li>
              <li className='md:ml-16 link-mobile'>
                <Link to='/partner'>Partner</Link>
              </li>
              <li className='md:ml-16 link-mobile'>
                <button onClick={toggleModal} to='/'>
                  Pricing
                </button>
              </li>
              <button className='md:ml-16 mr-32 text-cl'>
                <span className=''>
                  <button
                    className='font-light flex btn md:items-center ml-auto'
                    onClick={toggleModal}
                  >
                    Get in Touch{' '}
                    <img src='/Img/Img/fire 1.png' className='ml-1' alt='' />
                  </button>
                </span>
              </button>
            </ul>
          </div>
        </div>
      </div>
      <MyModal isShow={isShow} setIsShow={toggleModal} />
    </Fragment>
  );
};
