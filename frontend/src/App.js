import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import DashboardPage from "./pages/DashboardPage";
import CreateTournamentPage from "./pages/CreateTournamentPage";
import DeclareResultPage from "./pages/DeclareResultPage";
import TournamentRegistrationPage from "./pages/TournamentRegistrationPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import GamePage from "./pages/GamePage";
import Game2Page from "./pages/Game2Page";
import Game3Page from "./pages/Game3Page";
import Game4Page from "./pages/Game4Page";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define all the routes here */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/create-tournament" element={<CreateTournamentPage />} />
        <Route path="/declare-result" element={<DeclareResultPage />} />
        <Route path="/register-tournament" element={<TournamentRegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/update-profile" element={<UpdateProfilePage />} />
        {/* Game-specific routes */}
        <Route path="/game1" element={<GamePage />} />
        <Route path="/game2" element={<Game2Page />} />
        <Route path="/game3" element={<Game3Page />} />
        <Route path="/game4" element={<Game4Page />} />
        {/* Add a catch-all route for 404 */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
