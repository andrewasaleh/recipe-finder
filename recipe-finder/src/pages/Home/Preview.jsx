import React from 'react';
import './Preview.css';
import previewImage from '../Assets/images/home/preview.png';
import './Divider.css';

function Preview() {
  const handleExploreClick = () => {
    // Redirect to the recipes page
    window.location.href = '/recipe-explore';
  };

  return (
    <div id="presentation" style={{ backgroundImage: `url(${previewImage})` }}>
      <div className="tint-overlay"></div>
      <div className="presentation-overlay">
        <div id="presentation-text">
        <h1 className="preview-title">Dive into a Feast of Possibilities</h1>
        <p className="preview-subtitle">Endless Recipes, Infinite Inspiration</p>
          <button className="explore-button" onClick={handleExploreClick}>
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Preview;
