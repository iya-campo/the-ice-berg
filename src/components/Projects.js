import React from 'react';
// import 'flickity/css/flickity.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Projects = () => {
  return (
    <div className='centered-container work' id='my-work'>
      <div className='w-100'>
        <h1 className='text-center'>My Work</h1>
        <h4 className='text-center'>Here's a few samples of my work.</h4>
        <div className='d-flex justify-content-center'>
          <div className='carousel-container'>
            <Carousel>
              <div>
                <img src='images/web-samples/react-1.png' />
              </div>
              <div>
                <img src='images/web-samples/react-2.png' />
              </div>
              <div>
                <img src='images/web-samples/react-3.png' />
              </div>
              <div>
                <img src='images/web-samples/react-4.png' />
              </div>
              <div>
                <img src='images/web-samples/web-2.png' />
              </div>
            </Carousel>
          </div>
        </div>
        <div className='work__github'>
          <p className='d-block'>See more of my projects and live demos on Github!</p>
          <a target='_blank' href='https://github.com/iya-campo'>
            https://github.com/iya-campo
          </a>
          <p className='d-block' style={{ marginTop: 30 }}>
            More of my latest works:
          </p>
          <a target='_blank' href='https://poke-app.pages.dev/'>
            https://poke-app.pages.dev/
          </a>
          <br />
          <a target='_blank' href='https://little-pastry-shop.pages.dev/'>
            https://little-pastry-shop.pages.dev/
          </a>
        </div>
      </div>
    </div>
  );
};

export { Projects as default };
