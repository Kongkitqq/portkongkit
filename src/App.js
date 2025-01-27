import Navbar  from "./components/navbar/navbar";
import Home from "./components/intro/home";
import Skills from "./components/skills/skills";  
import Project from "./components/project/project";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Skills/>
      <Project/> 
    </div>
  );
}

export default App;
