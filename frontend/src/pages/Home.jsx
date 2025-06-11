// src/pages/Home.jsx
import React from "react";
import Card from "../components/Card";  // Shop section
import About from "../components/About";  // About section

function Home() {
  return (
    <div>
      {/* Shop Section (with ID for scrolling) */}
      <section id="shop">
        <Card />
      </section>

      {/* About Section (with ID for scrolling) */}
      <section id="about">
        <About />
      </section>
    </div>
  );
}

export default Home;