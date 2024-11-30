import React from "react";
import "../styles/AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to NeoFlix</h1>
          <p>Your ultimate destination for unlimited entertainment.</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-container">
          <h2>About Us</h2>
          <p>
            At NeoFlix, our mission is to bring you the best movies, shows, and
            content from around the world. With a passion for storytelling and
            innovation, we have redefined how people watch their favorite
            entertainment.
          </p>
        </div>
        <div className="about-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGd-UbuuWty6_q-ZMHF0JjXqwh2pCQC0Qhjw&s" /* Replace with a relevant Netflix image */
            alt="About NeoFlix"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
