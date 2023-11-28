import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import './LoginSignup.css';

const bodyStyle = {
  margin: 0,
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); 
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate('/recipe-explore');
      })
      .catch((error) => {
        
        setError(error.message);
        console.log(error);
      });
  };

  return (
    <div style={bodyStyle}>
      <div className="container">
        <div className="header">
          <div className="text">Login</div>
          <div className="description">Get ready to share your recipes!</div>
        </div>
        <div className="inputs">
          <form onSubmit={login}>
            <label>Email</label>
            <div className="input">
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <label>Password</label>
            <div className="input">
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* Display error message if there's an error */}
            {error && <div className="error-message">{error}</div>}
          </form>
        </div>
        <div className="continue-button" onClick={login}>
          Sign in
        </div>
        <div className="redirect-signup">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
