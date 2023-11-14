import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reenteredPassword, setReenteredPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true); // Password match state
  const navigate = useNavigate();

  const signup = (e) => {
    e.preventDefault();

    if (password !== reenteredPassword) {
      setPasswordMatch(false);
      return;
    } else {
      setPasswordMatch(true);
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate('/Login');
      })
      .catch((error) => {
        console.log(error);
      });
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
            <label>Email</label>
            <div className={`input ${!passwordMatch ? 'input-error' : ''}`}>
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <label>Password</label>
            <div className={`input ${!passwordMatch ? 'input-error' : ''}`}>
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
            <label>Confirm Password</label>
            <div className={`input ${!passwordMatch ? 'input-error' : ''}`}>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Re-enter Password"
                value={reenteredPassword}
                onChange={(e) => setReenteredPassword(e.target.value)}
              />
              <div className="password-toggle" onClick={togglePasswordVisibility}>
                <img src={showPassword ? hidePasswordIcon : showPasswordIcon} alt="Toggle Password" />
              </div>
            </div>
          </form>
        </div>
        <div className="continue-button" onClick={signup}>
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
