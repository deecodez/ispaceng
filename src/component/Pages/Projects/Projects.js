import React, { Fragment, useEffect } from 'react'
import './Projects.css'
import { Navbar } from '../../Navbar/Navbar'
import Insight from '../../Insight/Insight'
import { Footer } from '../../Footer/Footer'
import{BsArrowUpRight } from "react-icons/bs"
import {Link} from "react-router-dom"
import { Helmet } from 'react-helmet-async';
import SEO from '../../SEO';
import { initGA } from '../../analytics'

export const Projects = () => {

  useEffect(() => {
    initGA();
  }, []);

  return (
    <Fragment>
      <Helmet>
        <title>Our Projects</title>
        <meta name='description' content='Our-Projects - ispace-technology' />
        <link rel='canonical' href='/projects' />
      </Helmet>
      <SEO
        title='Ispace Projects'
        description='Our-Projects - Ispace-technology'
        name='Ispace'
        type='article'
      />

      <Navbar />
      <div className='creative-bg'>
        <div className='container flex flex-wrap cre items-center justify-center mx-auto md:px-20 justify-between md:flex-row'>
          <div className='flex creative-top cre'>
            <div className='flex'>
              <div className='cre-2 flex'>
                <div className=''>
                  <h1
                    className=' text-[2.9rem] leading-none font-extrabold lg:text-4xl text-zinc-700
                    lg:text-left lg:leading-tight ml-14 mt-28  md:flex-row cre-h1'
                  >
                    We Create And Innovate.
                  </h1>
                  <div className='flex md:items-center creative-p'>
                    <div className='line-red ml-10 mr-5 line-w'></div>
                    <p className='w-3/4  cre-p  text-left'>
                      We are driven by our love for enlivening businesses and
                      our desire to stay ahead of the game. By constantly
                      creating and innovating, we help businesses reach their
                      full potential in the ever-evolving digital landscape. Our
                      team of experts is committed to delivering the best
                      results for our clients, while staying true to our values
                      of creativity, innovation, and excellence.
                    </p>
                  </div>
                </div>
                <div className='flex mr-20 mt-48 logo-des'>
                  <div className='mr-5'>
                    <img
                      src='/Img/Img/logo.png'
                      alt=''
                      className='mb-2 logo-w'
                    />{' '}
                    <img src='/Img/Img/product.png' alt='' />
                  </div>
                  <div>
                    <img
                      src='/Img/Img/marketing.png'
                      alt=''
                      className='mb-2 logo-w'
                    />{' '}
                    <img src='/Img/Img/Development.png' alt='' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-4'>
            <div className='flex justify-between img-flex mx-10 mb-10'>
              <div className='mr-5 eje'>
                <img src='/Img/Img/Ejemen.png' alt='' className='eje'></img>
                <div className='flex eje2 items-center justify-between'>
                  <p className='font-bold mt-2 mb-2'>Ejemen</p>
                  <Link to='/projects'>
                    <BsArrowUpRight className='font-bold' />
                  </Link>
                </div>
                <div className='flex eje2'>
                  <img src='Img/Img/Frame 55165.png' alt='' className='mr-2' />
                  <img src='/Img/Img/Frame 55166.png' alt='' className='mr-2' />
                  <img src='/Img/Img/Frame 55167.png' alt='' />
                </div>
              </div>
              <div className='ml-5'>
                <img
                  src='/Img/Img/roqqu 2.png'
                  alt=''
                  className='rounded eje2'
                ></img>
                <div className='flex  eje2 items-center justify-between'>
                  <p className='font-bold mt-2 mb-2'>Roqqu</p>
                  <Link to='/projects'>
                    <BsArrowUpRight className='font-bold' />
                  </Link>
                </div>
                <div className='flex'>
                  <img
                    src='Img/Img/Frame 55165 (1).png'
                    alt=''
                    className='mr-2'
                  />
                  <img src='/Img/Img/Frame 55167.png' alt='' />
                </div>
              </div>
            </div>
            <div className='flex img-flex justify-between mx-10'>
              <div className='mr-5'>
                <img
                  src='/Img/Img/foodnow 22.png'
                  alt=''
                  className='rounded eje'
                ></img>
                <div className='flex eje items-center justify-between'>
                  <p className='font-bold mt-2 mb-2'>Food Now</p>
                  <Link to='/projects'>
                    <BsArrowUpRight className='font-bold' />
                  </Link>
                </div>
                <div className='flex eje'>
                  <img src='Img/Img/Frame 55165.png' alt='' className='mr-2' />
                  <img
                    src='Img/Img/Frame 55165 (1).png'
                    alt=''
                    className='mr-2'
                  />
                  <img src='/Img/Img/Frame 55166 (1).png' alt='' />
                </div>
              </div>
              <div className='ml-5'>
                <img
                  src='/Img/Img/raven 2.png'
                  alt=''
                  className='rounded eje2'
                ></img>
                <div className='flex  eje2 items-center justify-between'>
                  <p className='font-bold mt-2 mb-2'>Raven Bank</p>
                  <Link to='/projects'>
                    <BsArrowUpRight className='font-bold' />
                  </Link>
                </div>
                <div className='flex'>
                  <img src='' alt='' className='mr-2' />
                  <img
                    src='Img/Img/Frame 55165 (1).png'
                    alt=''
                    className='mr-2'
                  />
                  <img src='/Img/Img/Frame 55167.png' alt='' />
                </div>
              </div>
            </div>
            <div className='flex img-flex justify-between mx-10 mt-10'>
              <div className='mr-5'>
                <img
                  src='/Img/Img/raven 2 (1).png'
                  alt=''
                  className='rounded eje'
                ></img>
                <div className='flex eje items-center justify-between'>
                  <p className='font-bold mt-2 mb-2'>OGA</p>
                  <Link to='/projects'>
                    <BsArrowUpRight className='font-bold' />
                  </Link>
                </div>
                <div className='flex eje'>
                  <img src='Img/Img/Frame 55165.png' alt='' className='mr-2' />
                  <img
                    src='Img/Img/Frame 55165 (1).png'
                    alt=''
                    className='mr-2'
                  />
                  <img src='/Img/Img/Frame 55166 (1).png' alt='' />
                </div>
              </div>
              <div className='ml-5'>
                <img
                  src='/Img/Img/Agoden.png'
                  alt=''
                  className='rounded eje2'
                ></img>
                <div className='flex eje2 items-center justify-between'>
                  <p className='font-bold mt-2 mb-2'>AGODEN</p>
                  <Link to='/projects'>
                    <BsArrowUpRight className='font-bold' />
                  </Link>
                </div>
                <div className='flex eje'>
                  <img src='' alt='' className='mr-2' />
                  <img
                    src='Img/Img/Frame 55165 (1).png'
                    alt=''
                    className='mr-2'
                  />
                  <img src='/Img/Img/Frame 55167.png' alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Insight />
      <Footer />
    </Fragment>
  );
}
