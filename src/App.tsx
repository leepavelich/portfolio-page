import About from "./components/About";
import "./App.css";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import AcademicPublications from "./components/AcademicPublications";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="App">
        <main>
          <About />
          <WorkExperience />
          <Projects />
          <AcademicPublications />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
