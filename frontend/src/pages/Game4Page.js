import React from 'react';
import { Link } from 'react-router-dom';

const Game4Page = () => {
    return (
        <div className="game1-body">
            <video id="video-bg" autoPlay loop muted>
                <source src="game4.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="info-container">
                <div className="info-content">
                    <h2 
                        style={{ fontFamily: 'warzoneFont', position: 'absolute', fontSize: '80px', marginTop: '-30px' }}
                    >
                        WARZONE
                    </h2>
                    <div className="tournament-info" style={{ marginLeft: '10px' }}>
                        <h2>What to Expect</h2>
                        <p>Prepare for intense battles and high-stakes action in our Warzone tournaments. Join the fray and experience:</p>
                        <ul>
                            <li>Thrilling squad-based warfare</li>
                            <li>Solo missions for individual glory</li>
                            <li>Diverse game modes to test your skills</li>
                            <li>Frequent events with unique challenges and rewards</li>
                            <li>A vibrant gaming community to connect with</li>
                        </ul>
                    </div>

                    <div className="eligibility">
                        <h2>Eligibility</h2>
                        <p>To participate in our Warzone tournaments, you must:</p>
                        <ul>
                            <li>Have a valid Call of Duty: Warzone account</li>
                            <li>Meet any age or region-specific requirements</li>
                            <li>Adhere to fair play and sportsmanship standards</li>
                        </ul>
                    </div>

                    <div className="gameplay">
                        <h2>How It's Played</h2>
                        <p>Call of Duty: Warzone is a free-to-play battle royale game that pits players against each other in a massive open-world map. In our tournaments, squads or solo players drop into the battlefield, scavenge for weapons and equipment, and fight to be the last team or player standing. With fast-paced action and strategic gameplay, Warzone tests your combat skills, teamwork, and decision-making under pressure.</p>
                    </div>
                </div>

                <div className="create-tournament">
                    <center>
                        <Link to="/create-tournament">
                            <button>Create Tournament</button>
                        </Link>
                    </center>
                </div>
            </div>
        </div>
    );
};

export default Game4Page;
