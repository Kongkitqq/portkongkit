import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import resume from "../../pic/Resume_Kongkit_Yeesai.pdf";

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "th" : "en");
  };

  return (
    <nav className="navbar">
      {/* Brand logo removed as requested */}

      {/* Desktop Menu */}
      <div className="desktopMenu">
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-80}
          className="desktopMenuListItem"
        >
          {t("navbar.home")}
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          offset={-80}
          className="desktopMenuListItem"
        >
          {t("navbar.skills")}
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-80}
          className="desktopMenuListItem"
        >
          {t("navbar.about")}
        </Link>
        <Link
          to="experience"
          smooth={true}
          duration={500}
          offset={-80}
          className="desktopMenuListItem"
        >
          {t("navbar.experience")}
        </Link>
        <Link
          to="project"
          smooth={true}
          duration={500}
          offset={-80}
          className="desktopMenuListItem"
        >
          {t("navbar.project")}
        </Link>
      </div>

      <div className="navbar-right">
        <a
          href={resume}
          className="btn-download-nav"
          download="Resume_Kongkit_Yeesai.pdf"
        >
          {t("navbar.downloadResume")}
        </a>
        <button className="lang-toggle" onClick={toggleLanguage}>
          {i18n.language === "en" ? "TH" : "EN"}
        </button>
        <button
          className="lang-toggle theme-toggle"
          onClick={toggleTheme}
          title="Toggle theme"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>

      <div
        className={`menu-icon ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobileMenu ${isOpen ? "active" : ""}`}>
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-80}
          className="mobileMenuListItem"
          onClick={() => setIsOpen(false)}
        >
          {t("navbar.home")}
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          offset={-80}
          className="mobileMenuListItem"
          onClick={() => setIsOpen(false)}
        >
          {t("navbar.skills")}
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-80}
          className="mobileMenuListItem"
          onClick={() => setIsOpen(false)}
        >
          {t("navbar.about")}
        </Link>
        <Link
          to="experience"
          smooth={true}
          duration={500}
          offset={-80}
          className="mobileMenuListItem"
          onClick={() => setIsOpen(false)}
        >
          {t("navbar.experience")}
        </Link>
        <Link
          to="project"
          smooth={true}
          duration={500}
          offset={-80}
          className="mobileMenuListItem"
          onClick={() => setIsOpen(false)}
        >
          {t("navbar.project")}
        </Link>

        <div className="mobile-actions">
          <div className="mobile-toggles">
            <button className="lang-toggle" onClick={toggleLanguage}>
              {i18n.language === "en" ? "🇹🇭 TH" : "🇬🇧 EN"}
            </button>
            <button className="lang-toggle" onClick={toggleTheme}>
              {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
