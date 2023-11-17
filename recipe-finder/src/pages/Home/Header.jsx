import React from 'react';
import AuthDetails from '../LoginSignup/AuthDetails'; 
import './Header.css'; 
import '../LoginSignup/AuthDetails';


function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <a href="/">RecipeFinder</a>
        </div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/recipes">Recipes</a></li>
          <li><a href="/add-recipes">Add Recipes</a></li>
          <li><a href="/signup">Get Started</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
        <AuthDetails />
      </nav>
    </header>
  );
}

export default Header;
