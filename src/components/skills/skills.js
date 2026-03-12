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
                Python, JavaScript, HTML/CSS, SQL, C, Go
              </li>
              <li className="skills-item">Node.js, React, Vue.js, FastAPI</li>
            </ul>

            <h3 className="skills-heading">{t("skills.database")}</h3>
            <ul className="skills-items">
              <li className="skills-item">PostgreSQL, MySQL, MongoDB</li>
            </ul>
          </div>

          <div className="software-list">
            <h3 className="skills-heading">{t("skills.mlAI")}</h3>
            <ul className="skills-items">
              <li className="skills-item">
                TensorFlow, scikit-learn, Keras, Pandas, NumPy
              </li>
            </ul>

            <h3 className="skills-heading">{t("skills.tools")}</h3>
            <ul className="skills-items">
              <li className="skills-item">
                Git, Docker, Postman, Swagger, Figma, Jira
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
