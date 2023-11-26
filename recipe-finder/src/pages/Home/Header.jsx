import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header-container">
      <nav className="nav-bar">
        <div className="logo">
          <a href="/" className="brand-name"> 🥣 RecipeFinder</a>
        </div>
        <ul className="nav-links">
          <li><a href="/" className="nav-link">Home</a></li>
          <li><a href="/recipes" className="nav-link">Explore Recipes</a></li>
          <li><a href="/signup" className="nav-link">Join the Culinary Adventure</a></li>
          <li><a href="/login" className="nav-link rounded-login-button">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
