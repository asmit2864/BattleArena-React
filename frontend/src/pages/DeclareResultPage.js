import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DeclareResultPage = () => {
    const navigate = useNavigate();
    const [tournamentID, setTournamentID] = useState('');
    const [winner, setWinner] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous error

        try {
            const response = await fetch('http://localhost:2000/createResult', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ tournamentID, winner }),
            });

            if (response.ok) {
                alert('Result declared successfully');
                navigate('/dashboard');
            } else {
                const errorMessage = await response.json();
                setError(errorMessage.message || 'An error occurred.');
            }
        } catch (err) {
            setError('An unexpected error occurred.');
        }
    };

    return (
        <div className="login-body">
            <div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
            </div>

            <button onClick={() => navigate(-1)} className="top-left-box">
                <div className="box-content">
                    <p className="box-text">Dashboard</p>
                </div>
            </button>

            <div className="login-container">
                <h2>Declare Results</h2>

                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="tID">Tournament ID:</label>
                        <input
                            type="text"
                            id="tID"
                            name="tournamentID"
                            placeholder="Enter ID of the tournament"
                            value={tournamentID}
                            onChange={(e) => setTournamentID(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="winner">Winner Team:</label>
                        <input
                            type="text"
                            id="winner"
                            name="winner"
                            placeholder="Enter name of the winner team"
                            value={winner}
                            onChange={(e) => setWinner(e.target.value)}
                            pattern="[A-Za-z0-9\s]{1,30}"
                            title="Please enter a valid tournament name (up to 30 characters, letters, numbers and spaces only)"
                            required
                        />
                    </div>

                    <button type="submit" className="login-button">Declare</button>
                </form>
            </div>
        </div>
    );
};

export default DeclareResultPage;
