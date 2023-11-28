import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase'; 

import './Opening.css';
import Bowl from '../Assets/videos/Bowl.mp4';

function Opening() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe();
  }, []);

  const handleButtonClick = () => {
    navigate('/signup');
  };

  return (
    <div id="main">
      <video src={Bowl} autoPlay loop muted />
      <div className="name">
        <h1>
          <span className="secure">Discover Delicious Recipes</span>
          <br />
          <span className="safe"></span>
        </h1>
        <p className="details">
          Find a wide variety of mouthwatering recipes to satisfy your cravings
        </p>
        {user === null && (
          <div className="center-container">
            <a href="/signup" className="cv-btn" onClick={handleButtonClick}>
              Get Started
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Opening;
