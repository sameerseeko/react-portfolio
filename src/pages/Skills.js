import React, { useEffect, useRef, useState } from 'react';
import '../styles/Skills.css';
import { Typography, useTheme } from '@mui/material';
import { FaReact, FaJs, FaNodeJs, FaPython, FaDatabase, FaCss3Alt, FaGit } from 'react-icons/fa'; // Import icons

const skills = [
  { name: 'React', level: 85, icon: <FaReact /> },
  { name: 'JavaScript', level: 90, icon: <FaJs /> },
  { name: 'Node.js', level: 75, icon: <FaNodeJs /> },
  { name: 'Python', level: 80, icon: <FaPython /> },
  { name: 'MongoDB', level: 70, icon: <FaDatabase /> },
  { name: 'CSS', level: 85, icon: <FaCss3Alt /> },
  { name: 'Material-UI', level: 80, icon: <FaJs /> },  // Use appropriate icon
  { name: 'Git', level: 75, icon: <FaGit /> }
];

function Skills() {
  const [animatedSkills, setAnimatedSkills] = useState({});
  const containerRef = useRef(null);
  const theme = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            skills.forEach((skill, index) => {
              setTimeout(() => {
                setAnimatedSkills(prev => ({
                  ...prev,
                  [index]: true
                }));
              }, index * 150); // Staggered animation
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      className="skills-container" 
      ref={containerRef}
      style={{
        backgroundColor: theme.palette.background.paper,
        padding: '2rem',
        borderRadius: '8px'
      }}
    >
      <Typography 
        variant="h3" 
        className="skills-title"
        sx={{ color: theme.palette.text.primary }}
      >
        My Skills
      </Typography>
      
      {skills.map((skill, index) => (
        <div key={index} className="skill-item">
          <div className="skill-name">
            {/* Render icon alongside skill name */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ marginRight: '8px' }}>
                {skill.icon}
              </div>
              <Typography variant="body1" sx={{ color: theme.palette.text.primary }}>
                {skill.name}
              </Typography>
            </div>
            <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
              {skill.level}%
            </Typography>
          </div>
          <div 
            className="skill-bar" 
            style={{ backgroundColor: theme.palette.divider }}
          >
            <div 
              className="skill-progress"
              style={{
                width: animatedSkills[index] ? `${skill.level}%` : '0',
                backgroundColor: theme.palette.primary.main
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
