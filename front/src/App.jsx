// App.js
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Nosotros from "./screens/Nosotros";
import Servicios from "./screens/Servicios";
import Contacto from "./screens/Contacto";

function App() {
  const [section, setSection] = useState("home");

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setSection(sectionId);
    }
  };

  return (
    <>
      <Navbar scrollToSection={scrollToSection} />
      <div id="home">
        <Home />
      </div>
      <div id="nosotros">
        <Nosotros />
      </div>
      <div id="servicios">
        <Servicios />
      </div>
      <div id="contacto">
        <Contacto />
      </div>
    </>
  );
}

export default App;

