import React from 'react';
import './skills.css';

export const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <span className="skillsTitle">Skills</span>
      <div className="skills-container">
        <div className="skills-list">
          <h3 className="skills-heading">Technical Skills</h3>
          <ul className="skills-items">
            <li className="skills-item">C, Python, HTML, CSS, JavaScript</li>
            <li className="skills-item">React (Basic), Node.js (Basic)</li>
            <li className="skills-item">User/Process Flows</li>
            <li className="skills-item">UX/UI Design</li>
          </ul>
        </div>
        <div className="software-list">
          <h3 className="skills-heading">Software & Tools</h3>
          <ul className="skills-items">
            <li className="skills-item">Visual Studio Code</li>
            <li className="skills-item">Figma</li>
            <li className="skills-item">Postman</li>
            <li className="skills-item">Microsoft Office</li>
            <li className="skills-item">MySQL (phpMyAdmin)</li>
            <li className="skills-item">XAMPP</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
