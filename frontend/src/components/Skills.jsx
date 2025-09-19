import React from 'react';
import './Skills.css';
// Import icons from the react-icons library
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiPostman, SiVercel } from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di';
import { GrOracle } from 'react-icons/gr';

const Skills = () => {
  // We're now creating a more structured data object that includes icons
  const skillsData = [
    {
      category: "Programming Languages",
      items: [
        { name: "Java", icon: <FaJava color="#ED8B00" /> },
        { name: "Python", icon: <FaPython color="#306998" /> },
        { name: "JavaScript", icon: <DiJavascript1 color="#F0DB4F" /> },
        { name: "SQL", icon: <SiMysql color="#00758F" /> }
      ]
    },
    {
      category: "Frameworks & Technologies",
      items: [
        { name: "Spring Boot", icon: <SiSpringboot color="#6DB33F" /> },
        { name: "React JS", icon: <FaReact color="#61DAFB" /> },
        { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
        { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> }
      ]
    },
    {
      category: "Databases",
      items: [
        { name: "MySQL", icon: <SiMysql color="#00758F" /> },
        { name: "Oracle", icon: <GrOracle color="#F80000" /> }
      ]
    },
    {
      category: "Tools & Platforms",
      items: [
        { name: "Git/GitHub", icon: <FaGitAlt color="#F1502F" /> },
        { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
      ]
    },
    {
      category: "Core Competencies",
      items: [
        { name: "Data Structures & Algorithms" },
        { name: "Object-Oriented Programming" },
        { name: "RESTful API Development" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-container">
      <h2>Technical Proficiency</h2>
      <div className="skills-grid">
        {skillsData.map((category, index) => (
          <div key={index} className="skill-category-card">
            <h3>{category.category}</h3>
            <div className="skills-list">
              {category.items.map((skill, i) => (
                <div key={i} className="skill-item">
                  {skill.icon} {/* Render the icon if it exists */}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;