import React from 'react';
import Flickity from 'react-flickity-component';
import '../../node_modules/flickity/css/flickity.css';

const flickityOptions = {
  initialIndex: 2,
  wrapAround: true,
};

const Projects = () => {
  return (
    <div className='centered-container work' id='my-work'>
      <div className='w-100'>
        <h1 className='text-center'>My Work</h1>
        <h4 className='text-center'>Here's a few samples of my work.</h4>
        <Flickity className={'carousel'} elementType={'div'} options={flickityOptions} disableImagesLoaded={false} reloadOnUpdate static={true}>
          {/* images are approx. 600x880 */}
          <img src='/images/web-samples/react-1.png' alt='' />
          <img src='/images/web-samples/react-2.png' alt='' />
          <img src='/images/web-samples/web-1.png' alt='' />
        </Flickity>
        <div className='d-flex justify-content-center'>
          <button className='view-more' disabled>
            View more
          </button>
        </div>
      </div>
    </div>
  );
};

export { Projects as default };
