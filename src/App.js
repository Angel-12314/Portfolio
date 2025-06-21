import './App.css';
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Experience from "./Components/Experience"
import Skills from "./Components/Skills"
import Projects from "./Components/Projects"
import { useRef } from 'react'

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <div className="App">
      <Header scrollTargets={{
          homeRef,
          aboutRef,
          skillsRef,
          experienceRef,
          projectsRef,
        }}/>
      <div ref={homeRef}><Hero /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={skillsRef}><Skills /></div>
      <div ref={experienceRef}><Experience /></div>
      <div ref={projectsRef}><Projects /></div>
      
    </div>
  );
}

export default App;
