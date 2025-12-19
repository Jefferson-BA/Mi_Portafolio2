import { useState } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./components/Hero";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProyectCard from "./components/ProyectCard";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      <main>
        {/* HOME */}
        <section id="home">
          <Hero />
        </section>

        {/* SKILLS / HERRAMIENTAS */}
        <section id="skills">
          <ProyectCard />
        </section>

        {/* LANDING */}
        <section id="landing">
          <LandingPage />
        </section>

        {/* ABOUT */}
        <section id="about">
          <AboutPage />
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <ProjectsPage />
        </section>

        {/* CONTACT */}
        <section id="contact">
          <ContactPage />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
