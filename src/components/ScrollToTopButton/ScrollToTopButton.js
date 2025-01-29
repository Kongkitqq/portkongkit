import React, { useState, useEffect } from "react";
import "./ScrollToTopButton.css"; // นำเข้าไฟล์ CSS

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`scrollToTopBtn ${visible ? "show" : "hide"}`} // ใช้ className แทน style
    >
      ↑ Top
    </button>
  );
};

export default ScrollToTopButton;
