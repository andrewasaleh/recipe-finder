import React from 'react';
import './Header.css'; 

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <a href="/">RecipeFinder</a>
        </div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/recipes">Search</a></li>
          <li><a href="/signup">Get Started</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
