import React from "react";
import "./project.css";

const Project = () => {
  return (
    <section className="project-section">
      <span className="projectTitle">Projects</span>
      <div className="project-container">
        <div className="project-list">
          <h3>PSU Parking</h3>
          <p>
            Developed a web-based application to assist users in locating
            parking spots at PSU, integrating Google Maps API for real-time
            navigation. Built RESTful APIs using Node.js and Express.js to
            manage parking data in JSON format. Designed search and filter
            functionalities to enhance user experience.
          </p>
          <ul>
            <li>Technologies Used:</li>
            <li>
              Node.js, Express.js, Google Maps API, JSON, HTML, CSS, JavaScript
            </li>
          </ul>
          <div className="project-buttons">
            <a href="#" className="btn report-btn"target="_blank" rel="noopener noreferrer">Project Report </a>
            <a href="#" className="btn github-btn" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
        <div className="project-list">
          <h3>AlertRadar Object Detection and Air Quality Monitoring System</h3>
          <p>
            Designed and implemented an IoT-based system to detect objects and
            monitor air quality in real-time. Used sensors HC-SR04,MQ-135 and
            ESP8266 for Wi-Fi connectivity to collect data and send alerts.
            Integrated LINE API for real-time notifications and stored data on
            ThingSpeak for visualization and analysis.
          </p>
          <ul>
            <li>Technologies Used:</li>
            <li>
              Node.js, Express.js, Google Maps API, JSON, HTML, CSS, JavaScript
            </li>
          </ul>
          <div className="project-buttons">
          <a href="#" className="btn report-btn"target="_blank" rel="noopener noreferrer">Project Report </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
