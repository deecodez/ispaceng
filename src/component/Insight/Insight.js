import React, { Fragment, useEffect, useState } from 'react';
import './Insight.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Insight() {
  const MEDIUM_USERNAME = 'ispaceng.com';
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`,
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data.items);
      });
  }, []);

  const settings = {
    infinite: true,
    speed: 400,
    autoplay:true,
    slidesToShow: 3,
    slidesToScroll: 3,
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
      <div className='insight-bg mt-20'>
        <section className='container  items-center justify-center mx-auto md:px-28 justify-between md:flex-row'>
          <div>
            <div className='insight-txt' data-aos='fade-right'>
              <h1
                className='max-w-xl text-[2.9rem] leading-none font-extrabold lg:text-4xl
                lg:text-left lg:leading-tight insight-con'
              >
                Innovative Perspectives & Expert Pointers
              </h1>
              <p className='w-1/2 mb-5 insight-con insight-p'>
                Immerse yourself in our collection of articles designed to
                enlighten you about digital marketing and keep you updated with
                the latest happenings to grow your business.
              </p>
            </div>
          </div>

          <Slider {...settings}>
            {posts.map((post) => (
              <div className='card card-w mx-auto'>
                <img
                  src={post.thumbnail}
                  alt={post.Date}
                  width={100}
                  height={100}
                  className='card-img-top'
                />
                <div className='card-body'>
                  <h5 className='card-title'>
                    {' '}
                    <p className='card-t'>{post.title}</p>
                  </h5>
                  <p className='card-text'></p>
                  <a
                    href={post.link}
                    target='blank'
                    className='btns flex md:items-center mt-4'
                  >
                    Learn More{" "}
                    <img
                      src='/Img/Img/Vector (16).png'
                      alt=''
                      className='small mt-1'
                    />
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </section>
      </div>
    </Fragment>
  );
}
