import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/skills";
import About from "./components/About";
import Highlights from "./components/Highlights";
import Experience from "./components/experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Highlights />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}