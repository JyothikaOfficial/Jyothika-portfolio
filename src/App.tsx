// src/App.tsx
import React from "react";
import "./index.css";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Internship from "./components/Internship";
import Contact from "./components/Contact";

const App: React.FC = () => (
  <div className="bg-black text-white min-h-screen">
    <Nav />
    <main className="pt-20 space-y-20">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Internship />
      <Contact />
    </main>
  </div>
);

export default App;
