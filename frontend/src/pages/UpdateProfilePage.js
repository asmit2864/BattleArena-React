import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UpdateProfilePage = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [orgName, setOrgName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSaveChanges = async () => {
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        // Assuming the data will be sent to your backend for updating the user profile
        const response = await fetch('/updateProfile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, orgName, password }),
        });

        if (response.ok) {
            alert('Profile updated successfully');
            navigate('/dashboard'); // Redirect to dashboard after successful update
        } else {
            alert('Failed to update profile');
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
                <h2>Edit Profile</h2>

                <form className="login-form">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
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
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">New Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirm password:</label>
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

                    <br />
                    <button type="button" className="login-button" onClick={handleSaveChanges}>
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfilePage;
