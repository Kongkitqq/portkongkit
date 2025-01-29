import Navbar  from "./components/navbar/navbar";
import Home from "./components/intro/home";
import Skills from "./components/skills/skills";  
import Project from "./components/project/project";
import ScrollToTopButton from "./components/ScrollToTopButton";
function App() {
  return (
    <div className="App">
       <Navbar />
      <section id="home"><Home /></section>
      <section id="skills"><Skills /></section>
      <section id="about"></section>  
      <section id="project"><Project /></section>
      <ScrollToTopButton />

    </div>
  );
}

export default App;
