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
        {/* New Project (Tomato Leaf Disease Classifier) with bullet points and 'In Progress' tag */}
        <div className="project-list">
          <h3>Tomato Leaf Disease Classifier (CNN) 2025</h3>
          <span className="in-progress-tag">In Progress</span>
          <ul className="project-description">
            <li>Designing a web app to classify tomato leaf diseases using CNN (InceptionV3 & EfficientNetB0).</li>
            <li>Models are trained on a custom dataset of 3,000 images (3 classes) via Kaggle, with image augmentation and transfer learning.</li>
            <li>Built with React (frontend), FastAPI (backend), and PostgreSQL.</li>
            <li>Features include user image upload, prediction history, and admin disease management with role-based access.</li>
          </ul>
          <div className="technologies-used">
            <h4>Technologies Used</h4>
            <p>
              React, FastAPI, PostgreSQL, CNN (InceptionV3 & EfficientNetB0), Python, JavaScript
            </p>
          </div>
          <div className="project-buttons">
            <a href="https://www.kaggle.com/code/kongkityeesai/tomato-leaf-disease" className="btn kaggle-btn" target="_blank" rel="noopener noreferrer">Kaggle Model</a>
          </div>
        </div>
        
        {/* The rest of your projects follow below, with the correct structure */}
        <div className="project-list">
          <h3>PSU Parking 2024</h3>
          <ul className="project-description">
            <li>Developed a web-based application to assist users in locating parking spots at PSU, integrating Google Maps API for real-time navigation.</li>
            <li>Built RESTful APIs using Node.js and Express.js to manage parking data in JSON format.</li>
            <li>Designed search and filter functionalities to enhance user experience.</li>
          </ul>
          <div className="technologies-used">
            <h4>Technologies Used</h4>
            <p>
              Node.js, Express.js, Google Maps API, JSON, HTML, CSS, JavaScript
            </p>
          </div>
          <div className="project-buttons">
            <a href={psu_parking} className="btn report-btn" target="_blank" rel="noopener noreferrer">Project Report</a>
            <a href="https://github.com/Kongkitqq/Psu-parking" className="btn github-btn" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>

        <div className="project-list">
          <h3>AlertRadar Object Detection and Air Quality Monitoring System 2024</h3>
          <ul className="project-description">
            <li>Designed and implemented an IoT-based system to detect objects and monitor air quality in real-time.</li>
            <li>Used sensors HC-SR04, MQ-135 and ESP8266 for Wi-Fi connectivity to collect data and send alerts.</li>
            <li>Integrated LINE API for real-time notifications and stored data on ThingSpeak for visualization and analysis.</li>
          </ul>
          <div className="technologies-used">
            <h4>Technologies Used</h4>
            <p>
             C/C++, ESP8266, HC-SR04, MQ-135, LINE API, ThingSpeak
            </p>
          </div>
          <div className="project-buttons">
            <a href={alert_radar} className="btn report-btn" target="_blank" rel="noopener noreferrer">Project Report</a>
          </div>
        </div>

        <div className="project-list">
          <h3>Startify 2024</h3>
          <ul className="project-description">
            <li>Designed a mobile application prototype allowing users to customize cars and view detailed specifications.</li>
            <li>Created user flows, wireframes, and prototypes using Figma.</li>
            <li>Focused on user-centered design principles and responsive interface layouts.</li>
          </ul>
          <div className="technologies-used">
            <h4>Technologies Used</h4>
            <p>Figma, Prototyping, Wireframing, UX/UI Design</p>
          </div>
          <div className="project-buttons">
            <a href="https://www.figma.com/proto/8XMhHeNjUHDwJ0bciViFnI/UX%2FUI-417_560?node-id=0-1&t=j9cBAODvWFzgq4DO-1" className="btn figma-btn" target="_blank" rel="noopener noreferrer">Figma</a>
          </div>
        </div>

        <div className="project-list">
          <h3>LazShop 2024</h3>
          <ul className="project-description">
            <li>Developed a console-based system for managing users, products, and transactions using OOP principles.</li>
            <li>Utilized encapsulation and inheritance to create reusable and maintainable code for Admin, Seller, and Customer functionalities.</li>
          </ul>
          <div className="technologies-used">
            <h4>Technologies Used</h4>
            <p>Java, JSON, OOP</p>
          </div>
          <div className="project-buttons">
          <a href="https://github.com/Kongkitqq/Lazshop-OOP-using-java-" className="btn github-btn" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>

        <div className="project-list">
          <h3>QIT 2023</h3>
          <ul className="project-description">
            <li>Developed a web-based system for managing and displaying products using React for the frontend.</li>
            <li>Designed a customer interface for Browse products with search, filter, and detailed product views.</li>
            <li>Built an admin interface to manage product inventory, including updates for stock, prices, and product descriptions.</li>
            <li>Used Fetch API for data transfer between the frontend and backend.</li>
          </ul>
          <div className="technologies-used">
            <h4>Technologies Used</h4>
            <p>React, JavaScript, Fetch API, HTML, CSS</p>
          </div>
          <div className="project-buttons">
            <a href="https://github.com/Kongkitqq/QIT-" className="btn github-btn" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={QIT} className="btn report-btn" target="_blank" rel="noopener noreferrer">Project Report</a>
          </div>
        </div>

        <div className="project-list">
          <h3>Lazhop 2022</h3>
          <ul className="project-description">
            <li>Developed a console-based e-commerce using C and Data Structures (Linked List) with user authentication, product management, and a discount system.</li>
            <li>Implemented a wallet-based payment system supporting LazWallet and bank transactions.</li>
            <li>Designed a shopping cart with add/remove functionalities and real-time price calculations.</li>
          </ul>
          <div className="technologies-used">
            <h4>Technologies Used</h4>
            <p>C, File Handling, Data Structures (Linked List), User Authentication, Payment System</p>
          </div>
          <div className="project-buttons">
            <a href="https://github.com/Kongkitqq/Lasshop-data-structures-" className="btn github-btn" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>

        <div className="project-list">
          <h3>Q-U Cafe Ordering System 2021</h3>
          <ul className="project-description">
            <li>Developed a console-based cafe ordering system with menu selection, order processing, and automated billing.</li>
            <li>Implemented a promotion system offering discounts based on purchase amount, along with VAT calculation.</li>
            <li>Technologies Used</li>
            <li>C, Console-based UI, VAT & Discount System</li>
          </ul>
          <div className="technologies-used">
            <h4>Technologies Used</h4>
            <p>C, Console-based UI, VAT & Discount System</p>
          </div>
          <div className="project-buttons">
            <a href="https://github.com/Kongkitqq/Q-U-Cafe-Ordering-System" className="btn github-btn" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Project;