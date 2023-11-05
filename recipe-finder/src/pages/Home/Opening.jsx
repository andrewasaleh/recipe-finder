import React from 'react';
import './Opening.css';
import { useNavigate } from 'react-router-dom';

function Opening() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/Signup');
  };

  return (
    <div id="main">
      <div className="name">
        <h1>
          <span className="secure">Discover Delicious Recipes</span>
          <br />
          <span className="safe"></span>
        </h1>
        <p className="details">
        Find a wide variety of mouthwatering recipes to satisfy your cravings
        </p>
        <div className="center-container">
          <a href="/signup" className="cv-btn" onClick={handleButtonClick}>
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}

export default Opening;