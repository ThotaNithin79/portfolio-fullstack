import React from 'react';
import './Projects.css';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

// It's a good practice to use a placeholder image.
// You can create simple graphics for each project (e.g., on Canva) and put them in `frontend/src/assets`
// For now, we'll use a generic placeholder.
import expenseShareImage from '../assets/expense-share-image.png';
import hrmsImage from '../assets/hrms-image.png';
import evImage from '../assets/ev-charging-image.png';

const Projects = () => {
  // Update this data with your actual GitHub repo links and eventually live demo links
  const projectData = [
    {
      title: "Room Bill Sharing Application",
      image: expenseShareImage,
      description: "A full-stack expense sharing app to manage and split roommate expenses, featuring proof attachments, contribution calculation, and secure, role-based access.",
      technologies: ["React JS", "Spring Boot", "MySQL", "JWT Security"],
      githubLink: "https://github.com/ThotaNithin79/ROOM-BILL-SHARING-APPLICATION", // <-- ADD YOUR GITHUB LINK
      liveLink: "#" // <-- Add deployed link later
    },
    {
      title: "HRMS Application Frontend",
      image: hrmsImage,
      description: "The frontend for a Human Resource Management System with role-based dashboards for Admins and Employees, including modules for attendance, leave, and payroll.",
      technologies: ["React JS", "REST APIs", "Component Architecture"],
      githubLink: "#", // <-- If you have a link, add it. Use "#" if private.
      liveLink: "#"
    },
    {
      title: "EV Charging Point System",
      image:  evImage,
      description: "A web application to display real-time availability of EV charging points, featuring a slot booking system to reserve charging times efficiently.",
      technologies: ["Java", "Servlets", "MySQL", "HTML/CSS"],
      githubLink: "#", // <-- ADD YOUR GITHUB LINK
      liveLink: "#"
    }
  ];

  return (
    <section id="projects" className="projects-container">
      <h2>Projects & Experience</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image-container">
              <img src={project.image} alt={`${project.title} screenshot`} className="project-image" />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaGithub /> View Code
                </a>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FiExternalLink /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;