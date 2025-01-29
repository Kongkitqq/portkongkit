import React from "react";
import "./project.css";
import psu_parking from "../../pic/Psu_parking.pdf";
import alert_radar from "../../pic/iot.pdf";
import QIT from "../../pic/ProjectReport.pdf";
const Project = () => {
  return (
    <section className="project-section">
      <span className="projectTitle">Projects</span>
      <div className="project-container">
        <div className="project-list">
          <h3>PSU Parking 2024</h3>
          <p>
            Developed a web-based application to assist users in locating
            parking spots at PSU, integrating Google Maps API for real-time
            navigation. Built RESTful APIs using Node.js and Express.js to
            manage parking data in JSON format. Designed search and filter
            functionalities to enhance user experience.
          </p>
          <ul>
            <li>Technologies Used</li>
            <li>
              Node.js, Express.js, Google Maps API, JSON, HTML, CSS, JavaScript
            </li>
          </ul>
          <div className="project-buttons">
            <a href={psu_parking} className="btn report-btn" target="_blank" rel="noopener noreferrer">Project Report</a>
            <a href="https://github.com/Kongkitqq/Psu-parking" className="btn github-btn" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
        <div className="project-list">
          <h3>AlertRadar Object Detection and Air Quality Monitoring System 2024</h3>
          <p>
            Designed and implemented an IoT-based system to detect objects and
            monitor air quality in real-time. Used sensors HC-SR04, MQ-135 and
            ESP8266 for Wi-Fi connectivity to collect data and send alerts.
            Integrated LINE API for real-time notifications and stored data on
            ThingSpeak for visualization and analysis.
          </p>
          <ul>
            <li>Technologies Used</li>
            <li>
              Node.js, Express.js, Google Maps API, JSON, HTML, CSS, JavaScript
            </li>
          </ul>
          <div className="project-buttons">
            <a href={alert_radar} className="btn report-btn" target="_blank" rel="noopener noreferrer">Project Report</a>
          </div>
        </div>
        <div className="project-list">
          <h3>Startify 2024</h3>
          <p>
            Designed a mobile application prototype allowing users to customize cars and view detailed specifications. Created user flows, wireframes, and prototypes using Figma. Focused on user-centered design principles and responsive interface layouts.
          </p>
          <ul>
            <li>Technologies Used</li>
            <li>Figma, Prototyping, Wireframing, UX/UI Design</li>
          </ul>
          <div className="project-buttons">
            <a href="https://www.figma.com/proto/8XMhHeNjUHDwJ0bciViFnI/UX%2FUI-417_560?node-id=0-1&t=j9cBAODvWFzgq4DO-1" className="btn figma-btn" target="_blank" rel="noopener noreferrer">Figma</a>
          </div>
        </div>
        <div className="project-list">
          <h3>LazShop 2024</h3>
          <p>
          Developed a console-based designed and implemented a role-based system for managing users, products, and transactions using OOP principles. Utilized encapsulation and inheritance to create reusable and maintainable code for Admin, Seller, and Customer functionalities.
          </p>
          <ul>
            <li>Technologies Used</li>
            <li>Java, JSON, OOP</li>
          </ul>
          <div className="project-buttons">
          <a href="https://github.com/Kongkitqq/Lazshop-OOP-using-java-" className="btn github-btn" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
        <div className="project-list">
          <h3>QIT 2023</h3>
          <p>
            Developed a web-based system for managing and displaying products using React for the frontend. Designed a customer interface for browsing products with search, filter, and detailed product views. Built admin interface to manage product inventory, including updates for stock, prices, and product descriptions. Used Fetch API for data transfer between the frontend and backend.
          </p>
          <ul>
            <li>Technologies Used</li>
            <li>React, JavaScript, Fetch API, HTML, CSS</li>
          </ul>
          <div className="project-buttons">
            <a href="https://github.com/Kongkitqq/QIT-" className="btn github-btn" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={QIT} className="btn report-btn" target="_blank" rel="noopener noreferrer">Project Report</a>

          </div>
          
        </div>
        <div className="project-list">
          <h3>Lazhop 2022</h3>
          <p>
            Developed a console-based e-commerce using C  and Data Structures (Linked List) with user authentication, product management, and 
            a discount system. Implemented a wallet-based payment system supporting LazWallet 
            and bank transactions. Designed a shopping cart with add/remove functionalities 
            and real-time price calculations.
          </p>
          <ul>
            <li>Technologies Used</li>
            <li>C, File Handling, Data Structures (Linked List), User Authentication, Payment System</li>
          </ul>
          <div className="project-buttons">
            <a href="https://github.com/Kongkitqq/Lasshop-data-structures-" className="btn github-btn" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          
          </div>
          <div className="project-list">
            <h3>Q-U Cafe Ordering System 2021</h3>
            <p>
              Developed a console-based cafe ordering system with menu selection, 
              order processing, and automated billing. Implemented a promotion system 
              offering discounts based on purchase amount, along with VAT calculation.
            </p>
            <ul>
              <li>Technologies Used</li>
              <li>C, Console-based UI, VAT & Discount System</li>
            </ul>
            <div className="project-buttons">
              <a href="https://github.com/Kongkitqq/Q-U-Cafe-Ordering-System" className="btn github-btn" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>

        </div>
    </section>
  );
};

export default Project;