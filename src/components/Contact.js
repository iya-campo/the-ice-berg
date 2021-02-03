import React from 'react';

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <div className='content-container-normal'>
        <h1 data-aos='fade-right'>
          Contact Me ~<img src='images/sailboat.svg' alt=''></img>
        </h1>
        <div className='contact-details'>
          <div data-aos='fade-right'>
            <span className='cnt-label'>call me at...</span>
            <h1 className='cnt-val'>+(63) 998 536 5568</h1>
          </div>
          <div data-aos='fade-right' data-aos-delay='100'>
            <span className='cnt-label'>or send me an email!</span>
            <h1 className='cnt-val'>ilyannacampo@gmail.com</h1>
          </div>
        </div>
        <div className='d-flex justify-content-center'>
          <a href='https://www.facebook.com/floofin/'>
            <img src='images/icons/facebook.svg' className='social' alt=''></img>
          </a>
          {/* <a href="https://steamcommunity.com/id/floofinstein/"><image src="res/icons/twitter.svg" className="social"></image></a> */}
          <a href='https://github.com/iya-campo'>
            <img src='images/icons/github.svg' className='social' alt=''></img>
          </a>
          <a href='https://www.linkedin.com/in/ilyanna-frances-campo-093b2b187/'>
            <img src='images/icons/linkedin.svg' className='social' alt=''></img>
          </a>
        </div>
        <p className='footer'>©2020 Iya.</p>
      </div>
    </div>
  );
};

export { Contact as default };
