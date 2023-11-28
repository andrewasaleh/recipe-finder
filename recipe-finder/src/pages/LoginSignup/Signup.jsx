import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase';
import './LoginSignup.css';
import Footer from '../Home/Footer';

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
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [emailExists, setEmailExists] = useState(false);
  const [passwordLengthError, setPasswordLengthError] = useState(false);
  const navigate = useNavigate();

  
  const signup = async (e) => {
    e.preventDefault();

    // Reset all error states
    setEmailExists(false);
    setPasswordMatch(true);
    setShowPasswordError(false);
    setPasswordLengthError(false);

    if (password.length < 6) {
      setPasswordLengthError(true);
      return;
    }

    if (password !== confirmedPassword) {
      setPasswordMatch(false);
      setShowPasswordError(true);
      return;
    }

    try {
      // Create user account
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Log the user credential to the console
      console.log(userCredential);

      // Update user profile with full name
      await updateProfile(userCredential.user, {
        displayName: fullName,
      });

      // Navigate to '/recipes'
      navigate('/recipe-form');
    } catch (error) {
      console.error(error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={bodyStyle}>
      <div className="container">
        <div className="header">
          <div className="text">Sign Up</div>
          <div className="description">Create a new account to get started.</div>
        </div>
        <div className="inputs">
          <form onSubmit={signup}>
            <label>Username</label>
            <div className="input">
              <input
                type="text"
                placeholder="Enter Username"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <label>Email</label>
            <div className={`input ${emailExists ? 'email-error' : ''}`}>
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailExists(false);
                }}
              />
            </div>
            {emailExists && (
              <div className="error-box">
                Email already exists. Please use a different email.
              </div>
            )}
            <label>Password</label>
            <div className={`input ${!passwordMatch || passwordLengthError ? 'input-error' : ''}`}>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="password-toggle" onClick={togglePasswordVisibility}>
                <img src={showPassword ? hidePasswordIcon : showPasswordIcon} alt="Toggle Password" />
              </div>
            </div>
            {passwordLengthError && (
              <div className="error-box">
                Password must be at least 6 characters long.
              </div>
            )}
            <label>Confirm Password</label>
            <div className={`input ${!passwordMatch ? 'input-error' : ''}`}>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Re-enter Password"
                value={confirmedPassword}
                onChange={(e) => setConfirmedPassword(e.target.value)}
              />
              <div className="password-toggle" onClick={togglePasswordVisibility}>
                <img src={showPassword ? hidePasswordIcon : showPasswordIcon} alt="Toggle Password" />
              </div>
            </div>
            {showPasswordError && (
              <div className="error-box">
                Passwords do not match. Please try again.
              </div>
            )}
          </form>
        </div>
        <div className="continue-button" onClick={signup}>
          Create an account
        </div>
        <div className="redirect-login">
          Already have an account? <Link to="/login">Login</Link>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Signup;
