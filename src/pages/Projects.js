import React, { useEffect } from 'react';
import { usePageTitle } from '../contexts/PageTitleContext';
import '../styles/Projects.css';
import { Typography } from '@mui/material';

const projects = [
  {
    title: 'Chess Game',
    description: 'A fully functional chess game with multiplayer support and move validation.',
    technologies: ['React', 'Node.js', 'Socket.io', 'Chess.js'],
    demoUrl: '#',
    codeUrl: '#',
    image: '/images/chess.jpg'
  },
  {
    title: 'Language Translator',
    description: 'Real-time translation app supporting 10+ languages using translation APIs.',
    technologies: ['React', 'Python', 'Flask', 'Google Translate API'],
    demoUrl: '#',
    codeUrl: '#',
    image: '/images/translator.jpg'
  },
  {
    title: 'Library Database',
    description: 'Management system for tracking books, borrowers, and transactions.',
    technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
    demoUrl: '#',
    codeUrl: '#',
    image: '/images/library.jpg'
  },
  {
    title: 'Anime Database',
    description: 'MyAnimeList-inspired platform with user ratings and recommendations.',
    technologies: ['React', 'Next.js', 'MongoDB', 'GraphQL'],
    demoUrl: '#',
    codeUrl: '#',
    image: '/images/anime.jpg'
  },
  {
    title: 'P2P Lightweight App',
    description: 'Decentralized file sharing application using WebRTC technology.',
    technologies: ['React', 'WebRTC', 'IndexedDB', 'WebSockets'],
    demoUrl: '#',
    codeUrl: '#',
    image: '/images/p2p.jpg'
  }
];

function Projects() {
  const { setPageTitle } = usePageTitle();
  
  useEffect(() => {
    setPageTitle('Projects');
  }, [setPageTitle]);

  return (
    <div className="projects-container">
      <Typography variant="h3" className="projects-title">My Projects</Typography>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            {/* Remove the image */}
            {/* <img src={project.image} alt={project.title} className="project-image" /> */}

            <div className="project-content">
              <Typography variant="h5" className="project-title">{project.title}</Typography>
              <Typography variant="body1" className="project-description">{project.description}</Typography>
              
              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
