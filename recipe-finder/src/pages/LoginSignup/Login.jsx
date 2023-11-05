import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getAuth } from 'firebase/auth'; 
import app from '../../App.js'; 
import './LoginSignup.css';

const bodyStyle = {
  margin: 0,
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const auth = getAuth(app); 
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/MainContent'); // Redirect to the homepage after a successful login
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  }

  return (
    <div style={bodyStyle}>
      <div className="container">
        <div className="header">
          <div className="text">Login</div>
          <div className="description">Get ready to share your recipes!</div>
        </div>
        <div className="inputs">
          <authlabel>Email</authlabel>
          <div className="input">
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <authlabel>Password</authlabel>
          <div className="input">
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="continue-button" onClick={handleLogin}>
          Sign in
        </div>
        <div className="redirect-signup">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
