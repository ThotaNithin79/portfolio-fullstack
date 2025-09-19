import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Hero.css';

const Hero = () => {
  return (
    // The "id='about'" is important for the navbar link to work
    <section id="about" className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Nithin Thota</h1>
          <h2 className="hero-subtitle">
            I'm a{' '}
            <span className="hero-typewriter">
              {/* This component creates the typing effect */}
              <Typewriter
                words={['Full Stack Web Developer', 'Java Developer', 'Software Engineer']}
                loop={true}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <p>
            MCA graduate skilled in Java, Spring Boot, React, and MySQL. 
            I build dynamic, responsive web applications from concept to deployment. 
            Seeking to apply my technical expertise to contribute to impactful solutions.
          </p>
          <div className="hero-links">
            <a 
              href="https://www.linkedin.com/in/nithin-thota-359811289/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hero-button primary"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/ThotaNithin79" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hero-button secondary"
            >
              GitHub
            </a>
          </div>
        </div>
        {/* You can add an image or a graphic here in the future if you like */}
        {/* <div className="hero-visual">
          <img src="/path-to-your-image.png" alt="Nithin Thota" />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;