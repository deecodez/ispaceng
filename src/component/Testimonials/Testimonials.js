import React, { Fragment } from 'react';
import "./Testimonials.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export const Testimonials = () => {
  const settings = {
    infinite: true,
    speed: 400,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Fragment>
      <div className='container flex flex-wrap items-center justify-center mx-auto md:px-28 justify-between md:flex-row'>
        <section className='text-area mt-20'>
          <div className='con'>
            <div className='sec-title'>
              <p className='text-red-800'>-Testimonials</p>
              <h1
                className='max-w-xl text-[2.9rem] leading-none font-extrabold lg:text-4xl
                lg:text-left lg:leading-tight test-h1'
              >
                What Our Client say about us.
              </h1>
            </div>

            <div className='test-content'>
              <Slider {...settings}>
                <div className='single-test test-1'>
                  <p>
                    "We have been partnering with iSpace Technology for the past
                    three years to enhance our brand presence and promote our
                    crypto and Blockchain brand, Roqqu. Their expertise in
                    branding, campaign management, influencer marketing, email
                    marketing, and graphics design has been invaluable to us in
                    generating new leads and expanding our audience. We are
                    delighted with the results that iSpace Technology has
                    achieved for us, and we look forward to continuing our
                    partnership for many years to come."
                  </p>
                  <div className='client-info'>
                    <div className='client-pic'>
                      <a href='!#'>
                        <img
                          src='/Img/Img/Roqqu ceo.png'
                          alt=''
                          className='client-pic'
                        />
                      </a>
                    </div>
                    <div className='client-details'>
                      <h6 className='font-bold overflow-hidden '>- Esenomor Benjamin</h6>
                      <span>Roqqu Ceo</span>
                    </div>
                  </div>
                </div>
                <div className='single-test'>
                  <p>
                    “Thanks to iSpace's efforts, Raven Bank has seen a
                    significant increase in our brand awareness and customer
                    engagement. Their innovative ideas and thoughtful approach
                    have helped us to connect with our target audience in new
                    and exciting ways, driving growth and success for our
                    business. We have been consistently impressed with iSpace's
                    professionalism, creativity, and responsiveness. Their team
                    has always been available to answer questions.
                  </p>
                  <div className='client-info'>
                    <div className='client-pic'>
                      <a href='!#'>
                        <img
                          src='/Img/Img/Raven CEO.png'
                          alt=''
                          className='client-pic'
                        />
                      </a>
                    </div>
                    <div className='client-details'>
                      <h6 className='font-bold overflow-hidden'>- Uchenna Nnodim</h6>
                      <span>Ceo Raven Bank</span>
                    </div>
                  </div>
                </div>
                <div className='single-test'>
                  <p>
                    "Working with iSpace has been an exceptional experience for
                    our brand, Style by Mandy. The team at iSpace took the time
                    to listen to our needs and goals, and they provided us with
                    a comprehensive analysis of our brand's online presence.
                    From there, they developed a customized plan that included
                    generating new leads and creating engaging campaigns. Thank
                    you to the entire iSpace team for their outstanding work and
                    partnership
                  </p>
                  <div className='client-info'>
                    <div className='client-pic'>
                      <a href='!#'>
                        <img
                          src='/Img/Img/CEO SBM.jpg'
                          alt=''
                          className='client-pic'
                        />
                      </a>
                    </div>
                    <div className='client-details'>
                      <h6 className='font-bold overflow-hidden'>- Amanda</h6>
                      <span>Ceo Style by Mandy</span>
                    </div>
                  </div>
                </div>
                <div className='single-test'>
                  <p>
                    "I am absolutely thrilled with the exceptional work that the
                    development team at iSpace has accomplished in just one
                    month, collaborating with Devtraco to build our website.
                    Their expertise in web development and design has
                    significantly exceeded our expectations. The iSpace team has
                    showcased unwavering dedication and exceptional skills in
                    creating a visually appealing and highly functional website
                    for us.
                  </p>
                  <div className='client-info'>
                    <div className='client-pic'>
                      <a href='!#'>
                        <img
                          src='/Img/Img/GBS Devetraco.jpg'
                          alt=''
                          className='client-pic'
                        />
                      </a>
                    </div>
                    <div className='client-details'>
                      <h6 className='font-bold  overflow-hidden'>- Max</h6>
                      <span>Head of Sales Devtraco- Max</span>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};
