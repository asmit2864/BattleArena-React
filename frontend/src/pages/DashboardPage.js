import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaHome, FaUser, FaPhone, FaInfo, FaSignOutAlt, FaGamepad, FaArrowLeft, FaBars, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiFileText } from 'react-icons/fi';

const DashboardPage = () => {
  const [username, setUsername] = useState('');
  const [tournaments, setTournaments] = useState([]);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const navigate = useNavigate();

  useEffect(() => {
    // Get username from URL params (using search params is fine if you're using query params)
    const urlParams = new URLSearchParams(window.location.search);
    setUsername(urlParams.get('username'));

    // Fetch tournaments and results
    fetchData();
  }, []);

  const handleLogout = async () => {
    try {
        await fetch('http://localhost:2000/logout', {
            method: 'GET',
            credentials: 'include', // Include cookies/session data
        });

        // Redirect to home page or login page after logout
        window.location.href = '/'; // Or use history.push('/') if using react-router
    } catch (error) {
        console.error("Logout failed", error);
    }
};

  const fetchData = async () => {
    try {
      const tournamentsResponse = await axios.get('http://localhost:2000/tournaments');
      setTournaments(tournamentsResponse.data);

      const resultsResponse = await axios.get('http://localhost:2000/results');
      setResults(resultsResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  const sidebarShow = () => {
    document.getElementById('menu').style.left = '0%';
  };

  const sidebarHide = () => {
    document.getElementById('menu').style.left = '-270px';
  };

  if (loading) {
    return <div>Loading...</div>; // Display a loading message or spinner
  }

  return (
    <div className="dashboard-body">
      <div style={{ display: 'flex' }}>
        <div className="sidebar" id="menu">
          <FaArrowLeft id="closeMenu" onClick={sidebarHide} className="sidebar-icon" />
          <div className="logo">
            <br />
            <br />
            <ul className="menu">
              <li className="active">
                <Link to="/">
                  <FaHome className="sidebar-icon" />
                  <span className="sidebarFont">Home</span>
                </Link>
              </li>
              <li>
                <Link to="/profile">
                  <FaUser className="sidebar-icon" />
                  <span className="sidebarFont">Profile</span>
                </Link>
              </li>
              <li>
                <Link to="/declare-result">
                  <FiFileText className="sidebar-icon" />
                  <span className="sidebarFont">Declare Results</span>
                </Link>
              </li>
              <li>
                <Link to="/register-tournament">
                  <FiFileText className="sidebar-icon" />
                  <span className="sidebarFont">Team Registration</span>
                </Link>
              </li>
              <li>
                <a href="#gameSection">
                  <FaGamepad className="sidebar-icon" />
                  <span className="sidebarFont">Games</span>
                </a>
              </li>
              <li>
                <Link to="/contact">
                  <FaPhone className="sidebar-icon" />
                  <span className="sidebarFont">Contact</span>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <FaInfo className="sidebar-icon" />
                  <span className="sidebarFont">About</span>
                </Link>
              </li>
              <li>
                <Link to="/" onClick={handleLogout}>
                  <FaSignOutAlt className="sidebar-icon" />
                  <span className="sidebarFont">Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ width: '100%' }}>
          <h1 id="username-placeholder" className="welcome-text">
            Welcome, {username}
          </h1>
          <FaBars id="btnn" onClick={sidebarShow} className="sidebar-icon" />

          <Link to="/create-tournament">
            <button className="create-tournament-btn">Create Tournament</button>
          </Link>

          <div className="dashboard-hero-section">
            <div className="dashboard-section">
              <h2 className="section-heading">Your Tournaments</h2>
              <table className="dashboard-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Participants</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {tournaments.map((tournament) => {
                    const date = tournament.tDate.toString().substring(0, 10);
                    return (
                      <tr key={tournament.tournamentID}>
                        <td>{tournament.tournamentID}</td>
                        <td>{tournament.tournamentName}</td>
                        <td>{tournament.participants}/{tournament.numberOfTeams}</td>
                        <td>{date}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="dashboard-section">
              <h2 className="section-heading">Results</h2>
              <table className="dashboard-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Winner</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((result) => (
                    <tr key={result.tournamentID}>
                      <td>{result.tournamentID}</td>
                      <td>{result.tournamentName}</td>
                      <td>{result.winner}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="game-content" id="gameSection">
            <div className="games-available">Games</div>
            <section className="games-section">
              <div className="games1">
                <div className="games-overlay1">
                  <Link to="/game1">
                    <p className="games-overlay-text1">vALORanT</p>
                  </Link>
                </div>
              </div>
              <div className="games2">
                <div className="games-overlay2">
                  <Link to="/game2">
                    <p className="games-overlay-text2">Counter-Strike 2</p>
                  </Link>
                </div>
              </div>
              <div className="games3">
                <div className="games-overlay3">
                  <Link to="/game3">
                    <p className="games-overlay-text3">PUBG</p>
                  </Link>
                </div>
              </div>
              <div className="games4">
                <div className="games-overlay4">
                  <Link to="/game4">
                    <p className="games-overlay-text4">WARZONE</p>
                  </Link>
                </div>
              </div>
            </section>
          </div>

          <footer className="footer">
            <div className="container">
              <div>
                Follow us on
                <a href="https://www.facebook.com/" style={{ textDecoration: 'none', color: 'white' }}>
                  <FaFacebook className="footer-icon" />
                </a>
                <a href="https://www.instagram.com/" style={{ textDecoration: 'none', color: 'white' }}>
                  <FaInstagram className="footer-icon" />
                </a>
                <a href="https://www.x.com/" style={{ textDecoration: 'none', color: 'white' }}>
                  <FaTwitter className="footer-icon" />
                </a>
                <a href="https://www.linkedin.com/" style={{ textDecoration: 'none', color: 'white' }}>
                  <FaLinkedin className="footer-icon" />
                </a>
                <a href="https://www.github.com/" style={{ textDecoration: 'none', color: 'white' }}>
                  <FaGithub className="footer-icon" />
                </a>
              </div>
              <p>&copy; 2024 Gaming Tournament Website. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
