import React, { useEffect, useState } from "react";
import "./home.css";
import bg from "../../pic/profile.png";
import resume from "../../pic/Resume_Kongkit_Yeesai.pdf";
import tran from "../../pic/Tran.pdf";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const TITLES = [
  "Backend Developer",
  "Full-Stack Developer",
  "Software Engineer",
];

export const Home = () => {
  const { t } = useTranslation();
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = TITLES[titleIndex];
    let timeout;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        80,
      );
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length - 1)),
        45,
      );
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % TITLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, titleIndex]);

  return (
    <section id="Name">
      <div className="content-container">
        <div
          className="text-content"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <span className="homeName">
            <span className="Kyai">K</span>ongkit Yeesai
          </span>

          {/* Typewriter role */}
          <div className="typewriter-container">
            <span className="typewriter-text">{displayed}</span>
            <span className="typewriter-cursor">|</span>
          </div>

          <p className="homePara">{t("home.bio")}</p>

          {/* Social icons */}
          <div className="social-links">
            <a
              href="https://github.com/Kongkitqq"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="mailto:kongkit.ys@gmail.com"
              className="social-icon"
              aria-label="Email"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>

          <div className="button-container">
            <a
              href={resume}
              className="btn btn-resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("home.viewResume")}
            </a>
            <a
              href={tran}
              className="btn btn-transcript"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("home.viewTranscript")}
            </a>
          </div>
        </div>

        <div
          className="image-container"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div className="profile-blob">
            <img src={bg} alt="Profile" className="profile-picture" />
          </div>
          {/* Additional decorative bubbles */}
          <div className="floating-bubble bubble-1"></div>
          <div className="floating-bubble bubble-2"></div>
          <div className="floating-bubble bubble-3"></div>
        </div>
      </div>
    </section>
  );
};
export default Home;
