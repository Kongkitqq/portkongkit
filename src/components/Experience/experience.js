import React from "react";
import "./experience.css";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
  const internships = t("experience.items", { returnObjects: true });

  return (
    <section className="experience-section">
      <h2 className="experienceTitle">{t("experience.title")}</h2>
      <div className="experience-container">
        {internships.length > 0 ? (
          internships.map((internship, index) => (
            <div className="experience-card" key={index}>
              {internship.type && (
                <span className="experience-type-badge">{internship.type}</span>
              )}
              <h3 className="experience-company">{internship.company}</h3>
              <p className="experience-role">{internship.role}</p>
              <p className="experience-duration">{internship.duration}</p>
              <ul className="experience-description">
                {internship.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <div className="experience-tech">
                <div className="tech-tags">
                  {internship.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-experience">{t("experience.noExperience")}</p>
        )}
      </div>
    </section>
  );
};

export default Experience;
