import React from 'react';

const Landing = () => {
  return (
    <div className='centered-container home'>
      <div className='w-100'>
        <div className='content-container home__container'>
          <div className='home__welcome' data-aos='fade-right'>
            <h1>Ahoy! Welcome aboard.</h1>
          </div>
          <div className='home__pengwing' data-aos='flip-up'>
            <img src='images/penguin.png' alt='' />
          </div>
          <div className='home__intro' data-aos='fade-left'>
            <h1>
              I'm <b>IYA</b>.
            </h1>
            <h3>An aspiring developer with a passion for designing and coding websites.</h3>
          </div>
          <img className='scroll-indicator' src='images/icons/scroll-down.svg' alt='' />
        </div>
      </div>
    </div>
  );
};

export { Landing as default };
