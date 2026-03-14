import React from "react";
import "./about.css";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="about-section">
      <h2 className="aboutTitle" data-aos="fade-up">
        {t("about.title")}
      </h2>

      <div className="about-content-wrapper">
        <div className="about-container">
          <div
            className="about-details"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h3 className="about-heading">{t("about.personal")}</h3>
            <ul className="about-items">
              <li className="about-item">
                <strong>{t("about.name")}:</strong> {t("about.nameValue")}
              </li>
              <li className="about-item">
                <strong>{t("about.age")}:</strong> {t("about.ageValue")}
              </li>
              <li className="about-item">
                <strong>{t("about.education")}:</strong>{" "}
                {t("about.educationValue")}
              </li>
              <li className="about-item">
                <strong>{t("about.university")}:</strong>{" "}
                {t("about.universityValue")}
              </li>
              <li className="about-item">
                <strong>{t("about.gpax")}:</strong> {t("about.gpaxValue")}
              </li>
            </ul>
          </div>

          <div
            className="contact-info"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h3 className="about-heading">{t("about.contact")}</h3>
            <ul className="about-items">
              <li className="about-item">
                <strong>{t("about.phone")}:</strong>{" "}
                <a href="tel:+66887848844">088-784-8844</a>
              </li>
              <li className="about-item">
                <strong>{t("about.email")}:</strong>{" "}
                <a href="mailto:kongkit.ys@gmail.com">kongkit.ys@gmail.com</a>
              </li>
              <li className="about-item">
                <strong>{t("about.address")}:</strong> {t("about.addressValue")}
              </li>
              <li className="about-item">
                <strong>{t("about.github")}:</strong>{" "}
                <a
                  href="https://github.com/Kongkitqq"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/Kongkitqq
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
