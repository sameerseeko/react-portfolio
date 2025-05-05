import React, { useEffect } from 'react';
import { usePageTitle } from '../contexts/PageTitleContext';
import { Button } from '@mui/material'; 
import '../styles/Home.css';
import profileImage from '../assets/images/profile.webp';

const Home = () => {
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    setPageTitle('Home');
  }, [setPageTitle]);

  return (
    <div className="home-container">
      <section className="hero-section">
        {/* Profile Image */}
        <div className="profile-container">
          <img 
            src={profileImage}
            alt="Muhammad Sameer" 
            className="profile-image" 
          />
        </div>
        
        <h1 className="hero-title">Welcome to My Portfolio</h1>
        
        <h2 className="hero-subtitle">
          Hi, I'm <strong>Muhammad Sameer</strong>
        </h2>
        
        <p className="hero-description">
          I'm a passionate web development student currently mastering React.js. 
          This is my first React application showcasing my skills in building 
          modern, responsive web interfaces with Material-UI.
        </p>
        
        <div className="button-group">
          {/* Updated with Material-UI Button components */}
          <Button 
            variant="contained" 
            color="primary" 
            href="projects" 
            className="btn-primary"
          >
            View My Work
          </Button>
          <Button 
            variant="outlined" 
            color="secondary" 
            href="contact" 
            className="btn-outline"
          >
            Contact Me
          </Button>
        </div>
      </section>

      <section className="about-section">
        <h3>About This Project</h3>
        <p>
          This portfolio application demonstrates my understanding of key React concepts including:
        </p>
        <ul className="about-list">
          <li>React Hooks (useState, useEffect, useContext)</li>
          <li>React Router for navigation</li>
          <li>Material-UI component library</li>
          <li>Responsive design principles</li>
          <li>Context API for state management</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
