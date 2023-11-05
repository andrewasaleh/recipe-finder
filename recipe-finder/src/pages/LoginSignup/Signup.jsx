import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from 'firebase/auth';
import './LoginSignup.css';

import showPasswordIcon from '../Assets/images/LoginSignup/show-image.png';
import hidePasswordIcon from '../Assets/images/LoginSignup/hide-image.png';

const bodyStyle = {
  margin: 0,
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reenteredPassword, setReenteredPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true); // Password match state
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (password !== reenteredPassword) {
      setPasswordMatch(false);
      return;
    } else {
      setPasswordMatch(true);
    }

    try {
      await createUserWithEmailAndPassword(getAuth, email, password);

      navigate('/MainContent'); 
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div style={bodyStyle}>
      <div className="container">
        <div className="header">
          <div className="text">Sign Up</div>
          <div className="description">Create a new account to get started.</div>
        </div>
        <div className="inputs">
        <authlabel>Full Name</authlabel>
          <div className={`input ${!passwordMatch ? 'input-error' : ''}`}>
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <authlabel>Email</authlabel>
          <div className={`input ${!passwordMatch ? 'input-error' : ''}`}>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <authlabel>Password</authlabel>
          <div className={`input ${!passwordMatch ? 'input-error' : ''}`}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="password-toggle" onClick={togglePasswordVisibility}>
              <img src={showPassword ? hidePasswordIcon : showPasswordIcon} alt="Toggle Password" />
            </div>
          </div>
          <authlabel>Confirm Password</authlabel>
          <div className={`input ${!passwordMatch ? 'input-error' : ''}`}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Re-enter Password"
              value={reenteredPassword}
              onChange={(e) => setReenteredPassword(e.target.value)}
            />
            <div className="password-toggle" onClick={togglePasswordVisibility}>
              <img src={showPassword ? hidePasswordIcon : showPasswordIcon} alt="Toggle Password" />
            </div>
          </div>
        </div>
        <div className="continue-button" onClick={handleSignup}>
          Create an account
        </div>
        <div className="redirect-login">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
