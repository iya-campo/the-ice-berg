import React from 'react';
import Flickity from 'react-flickity-component';
import '../../node_modules/flickity/css/flickity.css';

const flickityOptions = {
  autoPlay: 4000,
  pauseAutoPlayOnHover: true,
  initialIndex: 2,
  wrapAround: true,
};

const Projects = () => {
  return (
    <div className='centered-container work' id='my-work'>
      <div className='w-100'>
        <h1 className='text-center'>My Work</h1>
        <h4 className='text-center'>Here's a few samples of my work.</h4>
        <Flickity className={'carousel'} elementType={'div'} options={flickityOptions} disableImagesLoaded={false} reloadOnUpdate static>
          {/* images are approx. 600x880 */}
          <img src='images/web-samples/react-1.png' alt='' />
          <img src='images/web-samples/react-2.png' alt='' />
          <img src='images/web-samples/react-3.png' alt='' />
          <img src='images/web-samples/react-4.png' alt='' />
          <img src='images/web-samples/web-1.png' alt='' />
          <img src='images/web-samples/web-2.png' alt='' />
          <img src='images/web-samples/mob-1.png' alt='' />
        </Flickity>
        <div className='d-flex justify-content-center'>
          <button className='btn btn--view' disabled>
            View more
          </button>
        </div>
        <div className='work__github'>
          <p className='d-block'>See more of my projects and live demos on Github!</p>
          <a href='https://github.com/iya-campo'>https://github.com/iya-campo</a>
        </div>
      </div>
    </div>
  );
};

export { Projects as default };
