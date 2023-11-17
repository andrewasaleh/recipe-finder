import React from 'react';
import './About.css'; 
import previewImage from '../Assets/images/home/preview.png';

function About() {
  return (
    <section className="about-us">
      <div className="about-text">
        <h2>About Us</h2>
        <p>
          Welcome to our recipe website, where we share our passion for cooking and delicious food. We are a team of food enthusiasts who love to experiment with ingredients, create mouthwatering recipes, and inspire others to do the same.
        </p>
      </div>
      <div className="about-image">
        <img src={previewImage} alt= "" /> 
      </div>
    </section>
  );
}

export default About;
