import React from 'react';
import './skills.css';
import { Typography } from '@mui/material';

export const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <Typography variant="h4" align="center" className="skillsTitle">
        Skills
      </Typography>

      <div className="skills-container">
        <div className="skills-list">
          <h3 className="skills-heading">Languages & Frameworks</h3>
          <ul className="skills-items">
            <li className="skills-item">
              Python, C, JavaScript, HTML/CSS, SQL
            </li>
            <li className="skills-item">
              React, Node.js, FastAPI, Tailwind CSS, Material UI (MUI)
            </li>
          </ul>

          <h3 className="skills-heading">Database</h3>
          <ul className="skills-items">
            <li className="skills-item">PostgreSQL, MySQL</li>
          </ul>

          <h3 className="skills-heading">Machine Learning & AI</h3>
          <ul className="skills-items">
            <li className="skills-item">
              TensorFlow, PyTorch, scikit-learn, Keras, Pandas, NumPy
            </li>
          </ul>
        </div>

        <div className="software-list">
          <h3 className="skills-heading">Tools</h3>
          <ul className="skills-items">
            <li className="skills-item">
              Git, Postman, Swagger, Figma, Jira, Visual Studio Code
            </li>
            <li className="skills-item">
              Jupyter Notebook, Anaconda, Kaggle
            </li>
            <li className="skills-item">Railway, Render, pgAdmin</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
