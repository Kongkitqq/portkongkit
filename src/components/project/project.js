import React, { useState } from "react";
import "./project.css";
import psu_parking from "../../pic/Psu_parking.pdf";
import alert_radar from "../../pic/iot.pdf";
import QIT from "../../pic/ProjectReport.pdf";
import { useTranslation } from "react-i18next";

import project1 from "../../pic/project1.png";
import project2 from "../../pic/project2.png";
import project3 from "../../pic/project3.png";
import project4 from "../../pic/project4.png";
import project5 from "../../pic/project5.png";
import project6 from "../../pic/project6.png";

const reportFiles = { psu_parking, alert_radar, QIT };
const imageFiles = {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
};

const Project = () => {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null); // Lightbox state
  const projects = t("projects.items", { returnObjects: true });

  const featured = projects.filter((p) => p.featured);
  const extra = projects.filter((p) => !p.featured);
  const visible = showAll ? projects : featured;

  // Close modal on Escape key
  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedImg(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section className="project-section">
      <span className="projectTitle">{t("projects.title")}</span>
      <div className="project-container">
        {visible.map((project, index) => (
          <div className="project-list" key={index}>
            {project.image && (
              <div
                className="project-image-container"
                onClick={() =>
                  setSelectedImg(imageFiles[project.image] || project.image)
                }
                title="Click to enlarge"
              >
                <img
                  src={imageFiles[project.image] || project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="image-overlay">
                  <span>{t("projects.viewImage")}</span>
                </div>
              </div>
            )}
            <div className="project-card-content">
              <h3>{project.title}</h3>
              {project.inProgress && (
                <span className="in-progress-tag">
                  {t("projects.inProgress")}
                </span>
              )}
              {project.isSeniorProject && (
                <span className="senior-project-tag">
                  {t("projects.seniorProject")}
                </span>
              )}
              {project.isCourseProject && (
                <span className="course-project-tag">
                  {t("projects.courseProject")}
                </span>
              )}
              {project.isWorkScholarship && (
                <span className="work-scholarship-tag">
                  {t("projects.workScholarship")}
                </span>
              )}
              <ul className="project-description">
                {project.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <div className="project-buttons">
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    className="btn demo-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🌐 {t("projects.liveDemo")}
                  </a>
                )}
                {project.links.kaggle && (
                  <a
                    href={project.links.kaggle}
                    className="btn kaggle-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("projects.kaggleModel")}
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    className="btn github-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("projects.gitHub")}
                  </a>
                )}
                {project.links.report && (
                  <a
                    href={reportFiles[project.links.report]}
                    className="btn report-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("projects.projectReport")}
                  </a>
                )}
                {project.links.figma && (
                  <a
                    href={project.links.figma}
                    className="btn figma-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("projects.figma")}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div className="image-lightbox" onClick={() => setSelectedImg(null)}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedImg} alt="Project Preview" />
            <button
              className="lightbox-close"
              onClick={() => setSelectedImg(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Show more / less toggle */}
      {extra.length > 0 && (
        <div className="project-toggle-wrapper">
          <button
            className="project-toggle-btn"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll
              ? "▲ " + t("projects.showLess")
              : "▼ " + t("projects.showMore", { count: extra.length })}
          </button>
        </div>
      )}
    </section>
  );
};

export default Project;
