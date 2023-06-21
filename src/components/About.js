import React from 'react';
import Pill from './Pill';

const About = () => {
  const skills = [
    'React',
    'Spring Boot',
    'JavaScript',
    'TypeScript',
    'Next JS',
    'Java',
    'Material UI',
    'Bootstrap',
    'SASS',
    'Webpack',
    'HTML5',
    'CSS3',
    'jQuery',
    'AJAX',
    'Redux',
  ];
  const tools = ['VS Code', 'Eclipse', 'IntelliJ', 'Postman', 'Kobiton', 'GIT', 'Yarn / NPM', 'Notepad++', 'Adobe Photoshop', 'Jira'];

  return (
    <div className='content-container-wide centered-container about' id='about-me' data-aos='fade-up'>
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
            <h5>
              Currently a professional developer with nearly four years of experience. I specialize in frontend development, having the capacity to
              create my own designs as well as code them using both markup and web frameworks. I like to think I work efficiently as I am already
              quite familiar with a handful of libraries and techniques which speed up the building process. Furthermore, I'm always on the lookout
              for the latest web trends to learn and eventually use in the future!
            </h5>
          </div>
          <div className='col-md-4' data-aos='fade-left'>
            <div className='d-flex justify-content-center'>
              <img className='os-icon' src='images/icons/windows.png' alt=''></img>
              <img className='os-icon' src='images/icons/linux.png' alt=''></img>
              <img className='os-icon' src='images/icons/android.png' alt=''></img>
            </div>
            <div className='d-flex justify-content-center'>
              <h5>Operating Systems</h5>
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
