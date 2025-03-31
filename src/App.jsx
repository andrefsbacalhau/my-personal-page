import React from "react";
import BlurBackground from "./components/BlurBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import Contacts from "./components/Contacts";
import Internships from "./components/Interships";
import Education from "./components/Education";

const App = () => {
  return (
    <div className="overflow-hidden antialiased">
      <Navbar />
      <BlurBackground />
      <Hero />
      <About />
      <Projects />
      <Education />
      <Internships />
      <Experience />
      <Contacts />
    </div>
  );
};

export default App;
