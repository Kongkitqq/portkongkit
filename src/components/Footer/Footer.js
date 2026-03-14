import React from "react";
import "./Footer.css";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2>KONGKIT</h2>
            <p>{t("footer.designedBy")} Kongkit Yeesai</p>
          </div>

          <div className="footer-links">
            <h4>{t("footer.contactMe")}</h4>
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              <a href="mailto:kongkit.y@psu.ac.th">kongkit.ys@gmail.com</a>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faPhone} className="contact-icon" />
              <a href="tel:080-123-4567">088-784-8844</a>
            </div>
          </div>

          <div className="footer-social">
            <h4>Social</h4>
            <div className="social-icons">
              <a
                href="https://github.com/Kongkitqq"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Kongkit Yeesai. {t("footer.rightsReserved")}
          </p>
          <div className="visitor-badge-container">
            <img
              src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fkongkitqq.github.io%2Fportkongkit&countColor=%23007bff"
              alt="Visitor Counter"
              style={{ height: "24px", opacity: 0.9 }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
