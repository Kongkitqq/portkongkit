import React from "react";
import "./about.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="aboutTitle">About</h2>

      <div className="about-container">
        <div className="about-details">
          <h3 className="about-heading">Personal </h3>
          <ul className="about-items">
            <li className="about-item"><strong>Name:</strong> Mr. Kongkit Yeesai (Ikkiw)</li>
            <li className="about-item"><strong>Age:</strong> 21</li> {/* ใส่ปีเกิดแทนวันเกิดเต็ม */}
            <li className="about-item"><strong>Education:</strong> Bachelor of Science (ICT)</li>
            <li className="about-item"><strong>University:</strong> Prince of Songkla University, Hat Yai</li>
            <li className="about-item"><strong>GPA:</strong> 3.54 | 3rd-Year Student</li>
          </ul>
        </div>

        <div className="contact-info">
          <h3 className="about-heading">Contact Information</h3>
          <ul className="about-items">
            <li className="about-item"><strong>Phone:</strong> 0887848844</li>
            <li className="about-item"><strong>Email:</strong> <a href="mailto:kongkit.ys@gmail.com">kongkit.ys@gmail.com</a></li>
            <li className="about-item"><strong>Address:</strong> 59, Krasae Sin, Songkhla, Thailand</li>
            <li className="about-item"><strong>GitHub:</strong> <a href="https://github.com/Kongkitqq" target="_blank">github.com/Kongkitqq</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
