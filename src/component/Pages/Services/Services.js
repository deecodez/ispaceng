import React, { Fragment, useEffect } from 'react'
import {Link} from "react-router-dom"
import "./Services.css"
import { Navbar } from '../../Navbar/Navbar';
import { Footer } from '../../Footer/Footer';
import { LuExternalLink } from 'react-icons/lu';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SEO from '../../SEO';
import { initGA } from '../../analytics';

export const Services = () => {
  useEffect(() => {
    initGA();
  }, []);

   useEffect(() => {
     AOS.init({ duration: 2000 });
     initGA();
   }, []);
   
  return (
    <Fragment>
      <Helmet>
        <title>Our Services</title>
        <meta name='description' content='Our-Services - ispace-technology' />
        <link rel='canonical' href='/service' />
      </Helmet>
      <SEO
        title='Ispace Services'
        description='Our-Services - Ispace-technology'
        name='Ispace'
        type='article'
      />

      <Navbar />
      <div className=' mt-40 container sev-page items-center justify-center mx-auto md:px-28 justify-between md:flex-row'>
        <div className=''>
          <h1
            className='w-2/4 text-[2.9rem] leading-none font-extrabold lg:text-4xl text-zinc-700
                lg:text-left lg:leading-tight ml-1  md:flex-row service-h1'
          >
            Welcome to iSpace, where Creativity meets Innovation!
          </h1>
          <div className='about-p flex md:items-center mt-3 about-con-p'>
            <div className=' line-red ml-2 mr-5 line-sev'></div>
            <div className='service'>
              <p className='w-2/4 p-sev'>
                From professional reports and presentations to company profiles
                and brochures, our writers can create effective and engaging
                business content.
              </p>
            </div>
          </div>
        </div>

        <div className='mt-28 t'>
          <h1 className='font-extrabold lg:text-5xl service-h2'>
            Branding and Design
          </h1>
          <p className='w-3/4 p-sev2 leading-9'>
            Our talented designers breathe life into your brand, creating
            captivating visual identities that leave a lasting impression. We
            meticulously craft logos, brand guidelines, and collateral materials
            that reflect your unique essence, helping you stand out in a crowded
            marketplace.
          </p>
          <div className='flex sevice-group'>
            <div className='service-items-desc p-sev2'>
              <p className=' mt-5 mb-5'>
                <span className='text-rose-800 font-bold'>Logo Design :</span>{' '}
                We create a unique and memorable logo that represents your brand
                identity.
              </p>
              <p className='mb-5'>
                <span className='text-rose-800 font-bold'>
                  Brand Guidelines :
                </span>
                We develop comprehensive guidelines that define your brand's
                visual elements, including color palette, typography, logo
                usage, and more.
              </p>
              <p className='mb-4'>
                <span className='text-rose-800 font-bold'>
                  Collateral Materials :
                </span>{' '}
                We design various marketing collateral such as business cards,
                brochures, and stationery, maintaining a consistent brand
                aesthetic.
              </p>
              <Link to='/projects'>
                <li className='flex md:items-center'>
                  View Project <LuExternalLink className='ml-2' />
                </li>
              </Link>
            </div>
            <div>
              <img
                src='/Img/Img/Mask group (4).png'
                alt=''
                className='mt-4 p-sev2 sev-img'
                data-aos='zoom-in'
              />
            </div>
          </div>
        </div>

        <div className='mt-28 t'>
          <h1 className='font-extrabold lg:text-5xl service-h2'>
            Marketing and Strategy
          </h1>
          <p className='w-3/4 p-sev2 leading-9'>
            Unlock your brand's potential with our strategic marketing
            expertise. We develop data-driven strategies tailored to your
            business goals, leveraging cutting-edge techniques to drive growth,
            engage your target audience, and increase conversions.
          </p>
          <div className='flex sevice-group'>
            <div className='service-items-desc p-sev2'>
              <p className=' mt-5 mb-5'>
                <span className='text-rose-800 font-bold'>
                  Market Research :
                </span>
                We conduct in-depth research to understand your target audience,
                competitors, and market trends, providing valuable insights for
                your marketing strategy.
              </p>
              <p className='mb-5'>
                <span className='text-rose-800 font-bold'>
                  Campaign Strategy :
                </span>
                We develop tailored marketing strategies that align with your
                business goals, outlining key messaging, channels, and tactics
                to reach your target audience effectively.
              </p>
              <p className='mb-4'>
                <span className='text-rose-800 font-bold'>
                  Performance Tracking :
                </span>
                We set up analytics and tracking systems to monitor campaign
                performance, providing regular reports and actionable insights
                for optimization.
              </p>
              <Link to='/projects'>
                <li className='flex md:items-center'>
                  View Project <LuExternalLink className='ml-2' />
                </li>
              </Link>
            </div>
            <div>
              <img
                src='/Img/Img/Rectangle 3848 (1).png'
                alt=''
                className='w-full mt-10 ml-1 p-sev2 sev-img'
                data-aos='zoom-in'
              />
            </div>
          </div>
        </div>

        <div className='mt-28 t'>
          <h1 className='font-extrabold lg:text-5xl service-h2'>
            Product Design
          </h1>
          <p className='w-3/4 p-sev2 leading-9'>
            Transform your ideas into remarkable digital experiences that
            captivate and delight. Our product design team combines
            user-centered methodologies with a deep understanding of technology
            to create intuitive, user-friendly interfaces.
          </p>
          <div className='flex sevice-group'>
            <div className='service-items-desc p-sev2'>
              <p className=' mt-5 mb-5'>
                <span className='text-rose-800 font-bold'>
                  User Research and Personals :
                </span>
                We conduct user research to gain a deep understanding of your
                target users, creating user personas that inform the design
                process.
              </p>
              <p className='mb-5'>
                <span className='text-rose-800 font-bold'>
                  Wireframes and Prototypes :
                </span>
                We create low-fidelity wireframes and interactive prototypes to
                visualize the user experience and gather feedback before
                development.
              </p>
              <p className='mb-4'>
                <span className='text-rose-800 font-bold'>
                  User Interface (UI) Design :
                </span>
                We design visually appealing and intuitive interfaces, including
                high-fidelity mockups and design specifications for developers
                to implement.
              </p>
              <Link to='/projects'>
                <li className='flex md:items-center'>
                  View Project <LuExternalLink className='ml-2' />
                </li>
              </Link>
            </div>
            <div>
              <img
                src='/Img/Img/Rectangle 3848 (2).png'
                alt=''
                className='mt-4 ml-1 p-sev2 sev-img'
                data-aos='zoom-in'
              />
            </div>
          </div>
        </div>

        <div className='mt-28 t'>
          <h1 className='font-extrabold lg:text-5xl service-h2'>
            Coding & Development
          </h1>
          <p className='w-3/4 p-sev2  leading-9'>
            Leave the technical complexities to us. Our skilled developers excel
            in building robust and scalable solutions across web, mobile, and
            e-commerce platforms. We embrace the latest coding practices and
            frameworks to ensure optimal performance, security, and a seamless
            user experience.
          </p>
          <div className='flex sevice-group'>
            <div className='service-items-desc p-sev2'>
              <p className='mb-5 mt-5'>
                <span className='text-rose-800 font-bold'>
                  Web Development :
                </span>{' '}
                Our skilled developers build responsive and user-friendly
                websites using the latest technologies, ensuring optimal
                performance across different devices and browsers.
              </p>
              <p className='mb-5'>
                <span className='text-rose-800 font-bold'>
                  {' '}
                  Mobile App Development :
                </span>
                We develop native or cross-platform mobile applications that
                provide seamless experiences on iOS and Android platforms.
              </p>
              <p className=' mb-4'>
                <span className='text-rose-800 font-bold'>
                  {' '}
                  E-commerce Solutions :
                </span>
                We create customized e-commerce platforms that enable secure
                transactions, intuitive browsing, and efficient management of
                products and orders.
              </p>
              <Link to='/projects'>
                <li className='flex md:items-center'>
                  View Project <LuExternalLink className='ml-2' />
                </li>
              </Link>
            </div>
            <div>
              <img
                src='/Img/Img/Rectangle 3848 (3).png'
                alt=''
                className='mt-10 p-sev2 sev-img'
                data-aos='zoom-in'
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
