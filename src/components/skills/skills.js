import React from "react";
import "./skills.css";
import { useTranslation } from "react-i18next";

export const Skills = () => {
  const { t } = useTranslation();
  return (
    <section id="skills" className="skills-section">
      <h2 className="skillsTitle">{t("skills.title")}</h2>

      <div className="skills-content-wrapper">
        <div className="skills-container">
          <div className="skills-list">
            <h3 className="skills-heading">
              {t("skills.languagesFrameworks")}
            </h3>
            <ul className="skills-items">
              <li className="skills-item">
                Python, C, JavaScript, HTML/CSS, SQL
              </li>
              <li className="skills-item">
                React, Node.js, FastAPI, Tailwind CSS, Material UI (MUI)
              </li>
            </ul>

            <h3 className="skills-heading">{t("skills.database")}</h3>
            <ul className="skills-items">
              <li className="skills-item">PostgreSQL, MySQL</li>
            </ul>

            <h3 className="skills-heading">{t("skills.mlAI")}</h3>
            <ul className="skills-items">
              <li className="skills-item">
                TensorFlow, PyTorch, scikit-learn, Keras, Pandas, NumPy
              </li>
            </ul>
          </div>

          <div className="software-list">
            <h3 className="skills-heading">{t("skills.tools")}</h3>
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
      </div>
    </section>
  );
};

export default Skills;
