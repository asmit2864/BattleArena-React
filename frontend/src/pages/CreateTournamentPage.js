import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Using useNavigate instead of useHistory
// import './styles.css'; // Link your CSS file
import axios from 'axios';

const CreateTournamentPage = () => {
  const navigate = useNavigate(); // useNavigate hook for navigation
  
  // State hooks for the form data
  const [tournamentID, setTournamentID] = useState('');
  const [tournamentName, setTournamentName] = useState('');
  const [numberOfTeams, setNumberOfTeams] = useState('');
  const [tDate, setTDate] = useState('');
  const [gameName, setGameName] = useState('VALORANT');
  const [additionalDetails, setAdditionalDetails] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Handle the tournament creation logic here (e.g., API call)
    const tournamentData = {
      tournamentID,
      tournamentName,
      numberOfTeams,
      tDate,
      gameName,
      additionalDetails,
    };
    
    try {
      const response = await axios.post('http://localhost:2000/createTournament', tournamentData); // Send POST request to the backend
      alert(response.data); // Show success/failure message returned by the backend
      navigate(-1); // Navigate back to the dashboard
    } catch (error) {
      console.error('Error creating tournament:', error);
      alert('Failed to create the tournament. Please try again.');
    }
  };

  return (
    <div className="login-body">
      <div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>

      <Link to="/dashboard" onClick={() => navigate()} className="top-left-box">
        <div className="box-content">
          <p className="box-text">Dashboard</p>
        </div>
      </Link>

      <div className="login-container">
        <h2>Create Tournament</h2>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="tID">Tournament ID:</label>
            <input
              type="text"
              id="tID"
              name="tournamentID"
              value={tournamentID}
              onChange={(e) => setTournamentID(e.target.value)}
              placeholder="Enter ID of the tournament"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="tName">Tournament Name:</label>
            <input
              type="text"
              id="tName"
              name="tournamentName"
              value={tournamentName}
              onChange={(e) => setTournamentName(e.target.value)}
              placeholder="Enter name of the tournament"
              pattern="[A-Za-z0-9\s]{1,30}"
              title="Please enter a valid tournament name (up to 30 characters, letters, numbers and spaces only)"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="numTeams">Number of Teams:</label>
            <input
              type="number"
              id="numTeams"
              name="numberOfTeams"
              value={numberOfTeams}
              onChange={(e) => setNumberOfTeams(e.target.value)}
              placeholder="Enter number of teams"
              pattern="[0-9]{1,3}"
              title="Please enter a valid number"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="tDate">Date:</label>
            <input
              type="date"
              id="tDate"
              name="tDate"
              value={tDate}
              onChange={(e) => setTDate(e.target.value)}
              placeholder="Enter date"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="game">Select Game:</label>
            <select
              name="gameName"
              value={gameName}
              onChange={(e) => setGameName(e.target.value)}
            >
              <option>VALORANT</option>
              <option>Counter-Strike 2</option>
              <option>PUBG</option>
              <option>WARZONE</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="addDetails">Additional Details:</label>
            <textarea
              id="addDetails"
              name="additionalDetails"
              value={additionalDetails}
              onChange={(e) => setAdditionalDetails(e.target.value)}
              placeholder="Enter additional details (if any)"
            ></textarea>
          </div>
          <button type="submit" className="login-button">Create</button>
        </form>
      </div>
    </div>
  );
};

export default CreateTournamentPage;
