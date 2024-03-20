import React, { Fragment } from 'react';
import { Navbar } from './component/Navbar/Navbar';
import { Hero } from './component/Herosection/Hero';
import '../src/component/Navbar/Navbar.css'
import { Companies } from './component/Companies/Companies';
import { Expi } from './component/Experience/Expi';
import { Process } from './component/Process/Process';
import { Service } from './component/Companies/Service/Service';
import { Creative } from './component/Creative/Creative';
import { Testimonials } from './component/Testimonials/Testimonials';
import Insights from './component/Insight/Insight';
import { Footer } from './component/Footer/Footer';
import { Helmet } from 'react-helmet-async';
import { HelmetProvider } from 'react-helmet-async';


export const Home = () => {
  return (
    <HelmetProvider>
      <Fragment>
        <Helmet>
          <title>Enlivening Innovation</title>
          <meta name='description' content='Enlivening Innovation' />
          <link rel='canonical' href='/' />
        </Helmet>
        <div className='bg-col w-full'>
          <Navbar />
          <Hero />
        </div>
        <Companies />
        <Expi />
        <Process />
        <Service />
        <Creative />
        <Testimonials />
        <Insights />
        <Footer />
      </Fragment>
    </HelmetProvider>
  );
};
