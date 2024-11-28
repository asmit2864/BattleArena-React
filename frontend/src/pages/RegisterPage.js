import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Use this if you're using React Router for navigation
import axios from 'axios';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [orgName, setOrgName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate password match
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    // Handle registration logic here (e.g., API call to register user)
    try {
      const response = await axios.post('http://localhost:2000/register', {
        name,
        orgName,
        email,
        password
      });

      if (response.status === 200) {
        // Redirect to login page after successful registration
        navigate('/login');
      }
    } catch (err) {
      setError('Error registering user. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className="login-body">
      <div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>

      <Link to="/" className="top-left-box">
        <div className="box-content">
          <p className="box-text">Home</p>
        </div>
      </Link>
      <Link to="/login" className="top-right-box">
        <div className="box-content">
          <p className="box-text">Login</p>
        </div>
      </Link>

      <div className="login-container">
        <h2>Register</h2>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              pattern="[A-Za-z\s]{1,20}"
              title="Please enter a valid name (up to 20 characters, letters and spaces only)"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="org-name">Organisation Name:</label>
            <input
              type="text"
              id="org-name"
              name="orgName"
              value={orgName}
              onChange={(e) => setOrgName(e.target.value)}
              placeholder="Enter your organisation name"
              pattern="[A-Za-z0-9\s]{1,30}"
              title="Please enter a valid organisation name (up to 30 characters, letters, numbers and spaces only)"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$"
              title="Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number."
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input
              type="password"
              id="confirm-password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
          </div>

          <button type="submit" className="login-button">Register</button>
        </form>

        <div className="register-link">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
