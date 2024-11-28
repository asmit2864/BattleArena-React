import React from 'react';
import { Link } from 'react-router-dom';

const GamePage = () => {
    return (
        <div className="game1-body">
            <video id="video-bg" autoPlay loop muted>
                <source src="game1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="info-container">
                <div className="info-content">
                    <h2 style={{ fontSize: '60px', position: 'absolute', marginTop: '-5px' }}>vALORanT</h2>
                    <div className="tournament-info" style={{ marginLeft: '10px' }}>
                        <h2>What to Expect</h2>
                        <p>Get ready for adrenaline-fueled action as you dive into the world of competitive Valorant. Our tournaments offer:</p>
                        <ul>
                            <li>Intense 5v5 team battles</li>
                            <li>Solo duels for individual glory</li>
                            <li>Varied formats to suit different playstyles</li>
                            <li>Regular events with unique challenges and rewards</li>
                            <li>A vibrant esports community to connect with</li>
                        </ul>
                    </div>

                    <div className="eligibility">
                        <h2>Eligibility</h2>
                        <p>To participate in our Valorant tournaments, you must:</p>
                        <ul>
                            <li>Have a valid Valorant account</li>
                            <li>Meet any age or region-specific requirements</li>
                            <li>Adhere to fair play and sportsmanship standards</li>
                        </ul>
                    </div>

                    <div className="gameplay">
                        <h2>How It's Played</h2>
                        <p>Valorant is a tactical first-person shooter that combines precise gunplay with unique agent abilities. In our tournaments, teams compete across multiple rounds on dynamic maps, strategizing and coordinating to achieve objectives and outmaneuver opponents. Matches are fast-paced and action-packed, requiring teamwork, communication, and individual skill to succeed.</p>
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

export default GamePage;
