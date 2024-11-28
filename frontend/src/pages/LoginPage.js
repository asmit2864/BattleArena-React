import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom'; // Use this if you're using React Router for navigation
// import './styles.css'; // Link your CSS file
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., form validation, API calls)
    try {
        const response = await axios.post('http://localhost:2000/login', {
            email,
            password
        });

        if (response.status === 200) {
            // Redirect to the dashboard or perform any action after successful login
            navigate('/dashboard');
        }
    } catch (err) {
        // setError('Invalid email or password');
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
      <Link to="/register" className="top-right-box">
        <div className="box-content">
          <p className="box-text">Register</p>
        </div>
      </Link>

      <div className="login-container">
        <h2>Login</h2>

        <form onSubmit={handleSubmit} className="login-form">
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
              title="Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number."
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <br />
        <div className="register-link">
          Don't have an account? <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
