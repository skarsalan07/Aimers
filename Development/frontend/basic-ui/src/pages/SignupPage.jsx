import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/LoginPage.css';


const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [interests, setInterests] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
          interests: interests.split(','),
        }),
      });

      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else {
        navigate('/login');
      }
    } catch (err) {
      setError('An error occurred during signup.');
    }
  };

  return (
    <div className="login-box">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <div className="user-box">
          <input
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            required
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
          />
          <label>Interests (comma-separated)</label>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button type="submit" className="glow-button">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Sign Up
        </button>
      </form>
      <p style={{ color: '#fff', marginTop: '20px' }}>
        Already have an account?{' '}
        <a href="/login" style={{ color: '#03E9F4' }}>Login</a>
      </p>
    </div>
  );
};

export default SignupPage;
