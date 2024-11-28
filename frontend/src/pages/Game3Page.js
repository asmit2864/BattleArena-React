import React from 'react';
import { Link } from 'react-router-dom';

const Game3Page = () => {
    return (
        <div className="game1-body">
            <video id="video-bg" autoPlay loop muted>
                <source src="game3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="info-container">
                <div className="info-content">
                    <h2 
                        style={{ fontFamily: 'pubgFont', position: 'absolute', fontSize: '90px', marginTop: '-35px' }}
                    >
                        PUBG
                    </h2>
                    <div className="tournament-info" style={{ marginLeft: '10px' }}>
                        <h2>What to Expect</h2>
                        <p>Prepare for thrilling battles and intense competition in our PUBG tournaments. Here's what you can look forward to:</p>
                        <ul>
                            <li>Heart-pounding matches with up to 100 players</li>
                            <li>Various game modes, including classic, arcade, and custom matches</li>
                            <li>Strategic gameplay requiring survival skills, teamwork, and quick thinking</li>
                            <li>Exciting events with diverse challenges and exclusive rewards</li>
                        </ul>
                    </div>

                    <div className="eligibility">
                        <h2>Eligibility</h2>
                        <p>To participate in our PUBG tournaments, you must:</p>
                        <ul>
                            <li>Have a valid PUBG account</li>
                            <li>Meet any age or region-specific requirements</li>
                            <li>Abide by fair play and sportsmanship standards</li>
                        </ul>
                    </div>

                    <div className="gameplay">
                        <h2>How It's Played</h2>
                        <p>PUBG is a battle royale game where players parachute onto an island, scavenge for weapons and equipment, and compete to be the last one standing. In our tournaments, teams or individual players face off against each other in a variety of settings, utilizing tactics, strategy, and skill to survive and emerge victorious. Matches are dynamic and unpredictable, requiring adaptability and cunning to succeed.</p>
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

export default Game3Page;
