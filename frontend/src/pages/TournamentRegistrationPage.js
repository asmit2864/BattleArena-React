import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TournamentRegistrationPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        teamName: '',
        playersNames: '',
        email: '',
        tournamentID: '',
        gameName: 'VALORANT', // Default game selection
    });

    const { teamName, playersNames, email, tournamentID, gameName } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:2000/playersRegistration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.text();
            if (response.ok) {
                alert(result);
                navigate('/dashboard'); // Redirect to dashboard after successful registration
            } else {
                alert(result); // Display error message from the server
            }
        } catch (error) {
            console.error('Error during registration:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="login-body">
            <div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
            </div>

            <button onClick={() => navigate('/dashboard')} className="top-left-box">
                <div className="box-content">
                    <p className="box-text">Dashboard</p>
                </div>
            </button>

            <div className="login-container">
                <h2>Registration</h2>

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label htmlFor="teamName">Team Name:</label>
                        <input
                            type="text"
                            id="teamName"
                            name="teamName"
                            value={teamName}
                            onChange={handleChange}
                            placeholder="Enter your team name"
                            pattern="[A-Za-z0-9\s]{1,30}"
                            title="Please enter a valid team name (up to 30 characters, letters, numbers and spaces only)"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="playersNames">Players:</label>
                        <input
                            type="text"
                            id="playersNames"
                            name="playersNames"
                            value={playersNames}
                            onChange={handleChange}
                            placeholder="Enter your players names (e.g, Ram, Shayam)"
                            pattern="[A-Za-z\s,]{1,60}"
                            title="Please enter valid names separated by comma (up to 50 characters, letters, spaces, and commas only)"
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
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tID">Tournament ID:</label>
                        <input
                            type="text"
                            id="tID"
                            name="tournamentID"
                            value={tournamentID}
                            onChange={handleChange}
                            placeholder="Enter ID of the tournament"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="game">Select Game:</label>
                        <select
                            name="gameName"
                            value={gameName}
                            onChange={handleChange}
                        >
                            <option>VALORANT</option>
                            <option>Counter-Strike 2</option>
                            <option>PUBG</option>
                            <option>WARZONE</option>
                        </select>
                    </div>
                    <button type="submit" className="login-button">Register</button>
                </form>
            </div>
        </div>
    );
};

export default TournamentRegistrationPage;
