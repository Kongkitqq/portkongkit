import { useState, useEffect } from "react";
import Navbar from "./components/navbar/navbar";
import Home from "./components/intro/home";
import Skills from "./components/skills/skills";
import Abount from "./components/About/about";
import Experience from "./components/Experience/experience";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import Project from "./components/project/project";

import Footer from "./components/Footer/Footer";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="App">
      {/* Global animated background blobs */}
      <div className="global-blob-container">
        <div className="g-blob g-blob-1" />
        <div className="g-blob g-blob-2" />
        <div className="g-blob g-blob-3" />
      </div>

      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <Abount />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="project">
        <Project />
      </section>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default App;
