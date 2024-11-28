import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProfilePage = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: '',
        orgName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { name, orgName, email, password, confirmPassword } = user;

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get('http://localhost:2000/users', { withCredentials: true });
                setUser({ ...response.data });
            } catch (error) {
                console.error(error);
                alert('Failed to fetch user data');
            }
        };

        fetchUser();
    }, []);
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSaveChanges = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            const response = await axios.post(
                '/updateProfile',
                { name, orgName, email, password },
                { withCredentials: true }
            );

            if (response.status === 200) {
                alert('Profile updated successfully');
                navigate('/dashboard');
            }
        } catch (error) {
            console.error(error);
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
                <h2>Profile</h2>

                <form className="login-form" onSubmit={handleSaveChanges}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={handleChange}
                            pattern="[A-Za-z\s]{1,20}"
                            title="Please enter a valid name (up to 20 characters, letters and spaces only)"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="org-name">Organisation Name:</label>
                        <input
                            type="text"
                            id="org-name"
                            name="orgName"
                            value={orgName}
                            onChange={handleChange}
                            pattern="[A-Za-z0-9\s]{1,30}"
                            title="Please enter a valid organisation name (up to 30 characters, letters, numbers and spaces only)"
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
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">New Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$"
                            title="Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number."
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
                            onChange={handleChange}
                            placeholder="Confirm your password"
                            required
                        />
                    </div>

                    <br />
                    <button type="submit" className="login-button">Save Changes</button>
                    <br /><br />
                </form>
            </div>
        </div>
    );
};

export default ProfilePage;
