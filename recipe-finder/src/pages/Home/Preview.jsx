import React from 'react';
import './Preview.css';
import previewImage from '../Assets/images/home/preview.png';
import './Divider.css';

function Preview() {
  return (
    <div id="presentation" style={{ backgroundImage: `url(${previewImage})` }}>
      <div className="presentation-overlay">
        <div id="presentation-text">
          <h1>Discover Delicious Recipes</h1>
          <button>Explore</button>
        </div>
      </div>
    </div>
  );
}

export default Preview;
