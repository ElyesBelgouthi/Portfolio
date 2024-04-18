import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Layout from "./components/Layout";
import HomeSection from "./components/Home";
import AboutSection from "./components/About";
import ExpertiseSection from "./components/Expertise";
import CareerSection from "./components/Career";
import ProjectsSection from "./components/Projects";
import ContactSection from "./components/Contact";
import EducationSection from "./components/Education";

function App() {
  return (
    <>
      <Header />
      <Layout></Layout>
      <HomeSection />
      <AboutSection />
      <ExpertiseSection />
      <section id="career-section">
        <EducationSection />
        <CareerSection />
      </section>

      <ProjectsSection />
      <ContactSection />
    </>
  );
}

export default App;
