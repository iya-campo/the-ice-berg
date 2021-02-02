import React from 'react';
import Pill from './Pill';

const About = () => {
  const skills = [
    'React',
    'Laravel',
    'Spring Boot',
    'Flask',
    'JavaScript',
    'PHP',
    'Java',
    'Python',
    'HTML5',
    'CSS3',
    'jQuery',
    'AJAX',
    'JSON',
    'Bootstrap',
  ];
  const tools = [
    'Eclipse',
    'IntelliJ IDEA',
    'VS Code',
    'GIT',
    'Android Studio',
    'Python IDLE',
    'MySQL Workbench',
    'NetBeans',
    'Notepad++',
    'Dev-C++',
    'Photoshop',
    'Illustrator',
    'MS Office',
  ];

  return (
    <div className='content-container centered-container about' id='about-me' data-aos='fade-up'>
      <div className='w-100'>
        <div className='d-flex justify-content-center'>
          <img className='anchor' src='images/anchor.svg' alt=''></img>
        </div>
        <div className='d-flex justify-content-center'>
          <a href='#about-me' className='nav-link'>
            About Me
          </a>
          <a href='#my-work' className='nav-link'>
            My Work
          </a>
          <a href='#contact' className='nav-link'>
            Contact
          </a>
        </div>
        <div className='row justify-content-center align-items-center mt-5 mb-5'>
          <div className='col-md-6 about-desc' data-aos='fade-right'>
            <h1>About Me</h1>
            <h3>
              A li’l rough on the edges, but ever-willing to constantly refine. Writes clean, structured code to create websites with a dash of
              creativity.
              {/* I've been working as a developer for over a year and a half, but, having the passion for making websites */}
            </h3>
          </div>
          <div className='col-md-4' data-aos='fade-left'>
            <div className='d-flex justify-content-center'>
              <img className='os-icon' src='images/icons/windows.png' alt=''></img>
              <img className='os-icon' src='images/icons/linux.png' alt=''></img>
              <img className='os-icon' src='images/icons/android.png' alt=''></img>
            </div>
            <div className='d-flex justify-content-center'>
              <h4>Operating Systems</h4>
            </div>
          </div>
        </div>
        <div className='row justify-content-end'>
          <div className='col-md-5 lang' data-aos='fade-left'>
            <h2>The tech I use...</h2>
            <div>
              {skills.map((skill) => (
                <Pill key={skill} name={skill} />
              ))}
            </div>
          </div>
          <div className='col-md-5 tool' data-aos='fade-left' data-aos-delay='100'>
            <h2>...as well as dev tools.</h2>
            <div>
              {tools.map((tool) => (
                <Pill key={tool} name={tool} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { About as default };
