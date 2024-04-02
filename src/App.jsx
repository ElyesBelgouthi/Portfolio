import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Layout from "./components/Layout";
import HomeSection from "./components/Home";
import AboutSection from "./components/About";
import ExpertiseSection from "./components/Expertise";

function App() {
  return (
    <>
      <Header />
      <Layout></Layout>
      <HomeSection />
      <AboutSection />
      <ExpertiseSection />
    </>
  );
}

export default App;
