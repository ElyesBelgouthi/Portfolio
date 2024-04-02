import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Layout from "./components/Layout";
import HomeSection from "./components/Home";

function App() {
  return (
    <>
      <Header />
      <Layout></Layout>
      <HomeSection />
    </>
  );
}

export default App;
