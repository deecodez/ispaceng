import React, { Fragment, useEffect } from 'react';
import { Navbar } from '../../Navbar/Navbar';
import './AboutUs.css';
import { Footer } from '../../Footer/Footer';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import SEO from '../../SEO';
import 'aos/dist/aos.css';
import { initGA } from '../../analytics';

export const AboutUs = () => {
  useEffect(() => {
    initGA();
  }, []);
  
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  
  return (
    <Fragment>
      <Helmet>
        <title>About Ispace</title>
        <meta name='description' content='Our-Story - ispace-technology' />
        <link rel='canonical' href='/about' />
      </Helmet>
      <SEO
        title='About Ispace'
        description='Our-Story - Ispace-technology'
        name='Ispace'
        type='article'
      />
      <Navbar />
      <div className=' flex flex-wrap items-center justify-center mx-auto  justify-between md:flex-row'>
        <div className='about-con' data-aos='zoom-in'>
          <h1
            className=' ml-28 w-2/4 text-[2.9rem] leading-none font-extrabold lg:text-4xl text-zinc-700
                lg:text-left lg:leading-tight mb-2 mt-28 about-t  md:flex-row'
          >
            Spark Your Brand's{' '}
            <span className='text-blue-950'> Brilliance with</span>{' '}
            <span className='text-rose-800'>Excellence</span>{' '}
          </h1>
          <div className='flex ml-28 md:items-center about-con-p'>
            <div className='about-p flex md:items-center'>
              <div className='line-red ml-10 mr-5 line-w w-1'></div>
              <p className='w-2/4 p'>
                Delve into the capabilities of our skilled and visionary team as
                they masterfully craft impactful content. From dynamic
                brainstorming sessions and polished presentations to the
                creation of distinct brand identities and a captivating array of
                visuals, we breathe life into every aspect of your brand's
                presence.
              </p>
            </div>
          </div>
        </div>
        <div className=' container flex about-des justify-between mt-20'>
          <div className='about-h1'>
            <h1
              className='max-w-xl text-[2.9rem] leading-none font-extrabold lg:text-5xl
                lg:text-left lg:leading-tight abt-h1'
            >
              About Us
              <div className='line mt-2 mb-4 w-2'></div>
            </h1>
          </div>
          <p className='w-3/6 mt-1 leading-10 des-p'>
            Welcome to Ispace Technology – a leading digital agency that
            provides innovative solutions for businesses of all sizes. Our
            services include marketing, branding, design, and app development,
            and we pride ourselves on delivering high-quality results that drive
            measurable growth for our clients.
            <br></br>
            <br></br>
            <p>
              {' '}
              Our team consists of experienced professionals who are passionate
              about what they do. We bring together diverse skill sets and
              expertise to offer a holistic approach to digital marketing and
              development. Whether you need a new website, a mobile app, or a
              comprehensive marketing strategy, we have the knowledge and
              experience to help you succeed.
            </p>
          </p>
        </div>
        <div className='mt-20 container tt'>
          <div className='flex we-do justify-between'>
            <div>
              <h1
                className='max-w-xl text-[2.9rem] leading-none font-extrabold lg:text-5xl
                lg:text-left lg:leading-tight we-do-h1'
              >
                What We Do
                <div className='line mt-2 mb-4 w-2'></div>
              </h1>
            </div>

            <div className='flex flex-img  mr-10'>
              <div className='mx-4 mb-4 we-logos'>
                <img src='/Img/Img/logo.png' alt='' className='mb-2 img-we' />{' '}
                <img src='/Img/Img/product.png' alt='' />
              </div>
              <div>
                <img src='/Img/Img/marketing.png' alt='' className='mb-2' />{' '}
                <img src='/Img/Img/Development.png' alt='' />
              </div>
            </div>
          </div>
        </div>
        <div className='mt-28 container tt'>
          <h1
            className=' text-[2.9rem] leading-none font-bold lg:text-4xl
                lg:text-left lg:leading-tight mb-5 text-center mr-20 team-h1'
          >
            Our Team
            <div className='line mt-2 mb-4 about-line ml-96'></div>
          </h1>
          <div className='flex ml-20 img-small' data-aos='zoom-in'>
            <div>
              <div className='img-1'>
                <img src='/Img/Img/Mask group.png' alt='' className='w-2/5' />{' '}
                <p className='font-bold'>Shonibare Ayo</p>
                <p>Creative Director</p>
              </div>
              <div className='img-1'>
                <img src='/Img/Img/keran.png' alt='' className='w-2/5' />
                <p className='font-bold'>Emmanuel Happuch Keren</p>
                <p>Lead, Creative Designs</p>
              </div>
              <div className='img-1'>
                <img src='/Img/Img/Ezinne.png' alt='' className='w-2/5' />{' '}
                <p className='font-bold'>Nze Ezinne</p>
                <p className='name'>Intern Digital Marketing Strategist</p>
              </div>
            </div>
            <div>
              <div className='img-1'>
                <img src='/Img/Img/Favour.png' alt='' className='w-2/5' />{' '}
                <p className='font-bold'>Kamange Favour</p>
                <p>Project Lead</p>
              </div>
              <div className='img-1'>
                <img src='/Img/Img/mich.png' alt='' className='w-2/5' />
                <p className='font-bold'>Obaro Michael</p>
                <p>Chief Technical Officer</p>
              </div>
              <div className='img-1'>
                <img src='/Img/Img/joe.png' alt='' className='w-2/5' />
                <p className='font-bold'>Olaoye Joseph</p>
                <p>Intern Content Creator</p>
              </div>
            </div>
            <div>
              <div className='img-1'>
                <img src='/Img/Img/daniel.png' alt='' className='w-2/4 me' />{' '}
                <p className='font-bold'>Daniel Ololo</p>
                <p>Lead/Product Designer</p>
              </div>
              <div className='img-1'>
                <img src='/Img/Img/mavi.png' alt='' className='w-2/4 me' />
                <p className='font-bold'>Felix Marvelous</p>
                <p>Creative Designer</p>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full'>
          <h1
            className='container text-[2.9rem] leading-none font-extrabold lg:text-4xl text-zinc-700
                lg:text-left lg:leading-tight mb-2 mt-28 process-h1 md:flex-row tt'
          >
            Our Process
            <div className='line mt-2 mb-4 line2'></div>
          </h1>
          <div className=''>
            <div className='flex p-5 content-1 md:items-center'>
              <div className='flex content-1'>
                <div className='mb-20 p-01' data-aos='zoom-in'>
                  <h1 className='font-extrabold lg:text-8xl lg:text-left ml-20 p1'>
                    01
                  </h1>
                  <p className='font-extrabold w-3/5 ml-20 text-zinc-700 pp'>
                    {' '}
                    BRAINSTORMING & RESEARCH
                  </p>
                  <p className=' leading-7 w-3/5 ml-20 text-zinc-700 p-01'>
                    We ask the right questions & listen intently to the answers.
                    Research is vital to ensure we fully understand your
                    audience, your business & your industry. We take the
                    necessary steps to clarify your vision, strategies, values &
                    goals. We then distil these insights & present the findings.
                  </p>
                </div>
              </div>
              <div className='flex md:items-center mt-10'>
                <div>
                  <img
                    src='/Img/Img/Rectangle 3828 2.png'
                    alt=''
                    className='mt-4 ml-4 img-p'
                  />
                </div>
                <p className='w-3/6 ml-4 pp2'>
                  Brand Questionnaires Focus Groups Interviews Brand Workshops
                  Surveys Competitor Analysis Brand Audits Industry Analysis &
                  Trends Category Reviews
                </p>
              </div>
            </div>

            <div className='bg-02  w-full'>
              <div className='mb-10 p-01'>
                <div className='flex p-5 content-1 bg-02'>
                  <div className='flex content-1'>
                    <div className='mt-20 mb-20' data-aos='zoom-in'>
                      <h1 className='font-extrabold lg:text-8xl lg:text-left ml-20 p2'>
                        02
                      </h1>
                      <p className='font-extrabold w-3/5 ml-20 text-zinc-700 pp'>
                        BRAND STRATEGY &ANALYSIS
                      </p>
                      <p className=' leading-7 w-3/5 ml-20 text-zinc-700 p-01'>
                        We articulate a new found brand strategy based on
                        factual insights & shrewd intuitive understanding,
                        comprising brand messaging, tone-of-voice, as well as
                        pertinent visual stimuli to indicate the proposed brand
                        essence.
                      </p>
                    </div>
                  </div>
                  <div className='flex abt-02 md:items-center mt-10'>
                    <div>
                      <img
                        src='/Img/Img/Rectangle 3829.png'
                        alt=''
                        className='mt-4 mr-5 img-p'
                      />
                    </div>
                    <p className='w-3/6 ml-4  pp2'>
                      Brand Positioning Brand Architecture Brand Messaging Brand
                      Essence Brand Values Digital / Online Strategy
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex  content-1'>
              <div className='flex p-5 content-1'>
                <div className='mb-20 p-01' data-aos='zoom-in'>
                  <h1 className='font-extrabold lg:text-8xl lg:text-left ml-20 p3'>
                    03
                  </h1>
                  <p className='font-extrabold w-3/5 ml-20 text-zinc-700 pp'>
                    {' '}
                    BRAND DESIGN &APPLICATIONS
                  </p>
                  <p className=' leading-7 w-3/4 ml-20 text-zinc-700 p-01 abt-3'>
                    Once approved, we set about applying the design to the
                    agreed project deliverables. We are adept at crafting
                    consistent & cohesive brand communications, both on &
                    offline, from print & packaging, marketing & advertising to
                    websites & other digital applications.
                  </p>
                </div>
              </div>
              <div className='flex md:items-center mt-10'>
                <div>
                  <img
                    src='/Img/Img/Rectangle 3830.png'
                    alt=''
                    className='mt-4 mr-3 ml-40 img-p abt-img'
                  />
                </div>
                <p className=' leading-7 w-1/2  text-zinc-700 p-02'>
                  Corporate Stationery Corporate Communications Packaging
                  Editorial Marketing Campaigns Advertising Event Materials
                  Responsive Website Design & Development Mobile Website Design
                  & Development Online Banners Video
                </p>
              </div>
            </div>

            <div className='flex p-5 content-1 bg-02 '>
              <div className='mb-40 content-1  p-01'>
                <div className='mt-20 abt-02' data-aos='zoom-in'>
                  <h1 className='font-extrabold lg:text-8xl lg:text-left ml-20  p4'>
                    04
                  </h1>
                  <p className='font-extrabold w-3/5 ml-20 text-zinc-700 pp'>
                    {' '}
                    MARKETING & SUPPORT
                  </p>
                  <p className=' leading-7 w-3/4 ml-20 text-zinc-700 p-01'>
                    We provide regular updates to our clients and work
                    collaboratively with them to ensure that our strategies are
                    aligned with their business goals. Our goal is to help our
                    clients achieve their objectives and grow their business.
                  </p>
                </div>
              </div>
              <div className='flex abt-4 md:items-center'>
                <div>
                  <img
                    src='/Img/Img/Rectangle 3831.png'
                    alt=''
                    className=' mr-3 ml-7 img-p'
                  />
                </div>
                <p className=' leading-7 w-1/2  text-zinc-700 p-02'>
                  Content creation Social media management Email marketing PPC
                  advertising SEO optimization Analytics and reporting
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};
