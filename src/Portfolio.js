import React, { useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../node_modules/aos/dist/aos.css';
import About from './components/About';
import Contact from './components/Contact';
import Landing from './components/Landing';
import Projects from './components/Projects';
import './styles/styles.scss';

AOS.init();
gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  useEffect(() => {
    gsap.to('.top-wave', {
      x: -500,
      scrollTrigger: {
        trigger: '.animate-1',
        start: 'center center',
        end: '+=500',
        scrub: 1,
      },
    });
    gsap.to('.bottom-wave', {
      x: -500,
      scrollTrigger: {
        trigger: '.animate-2',
        start: 'bottom bottom',
        end: '+=1000',
        scrub: 1,
      },
    });
  }, []);

  return (
    <div>
      <Landing />
      <div className='animate-1'>
        <img className='top-wave' src='/images/wave-1.png' alt='' />
      </div>
      <About />
      <div className='animate-2'>
        <img className='bottom-wave' src='/images/wave-2.png' alt='' />
      </div>
      <Projects history={history} />
      <Contact />
      <div className='scroll-top'>
        <button className='scroll-top-btn'>
          <i className='fas fa-arrow-up fa-2x'></i>
        </button>
      </div>
    </div>
  );
};

export { Portfolio as default };
