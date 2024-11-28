// src/pages/HomePage.js
import React, { useEffect, useState } from "react";
// import "../styles.css"; // Assuming styles.css is in the src folder or public folder

const HomePage = () => {
  const [backgroundImage, setBackgroundImage] = useState("url('./assets/images/BACKGROUND.jpg')");

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     if (scrollTop > 200) {
  //       setBackgroundImage("url('./assets/images/BACKGROUND1.jpg')");
  //     } else {
  //       setBackgroundImage("url('./assets/images/BACKGROUND.jpg')");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  // const style = {
  //   backgroundImage: backgroundImage,
  //   backgroundAttachment: 'fixed', // Fix the background
  //   backgroundSize: 'cover', // Make sure the image covers the screen
  //   backgroundPosition: 'center center', // Center the image
  //   height: '100vh', // Make sure the div takes full height of the screen
  // };

  const openModal = (modalId) => {
    document.getElementById(modalId).style.display = "block";
  };

  const closeModal = (modalId) => {
    document.getElementById(modalId).style.display = "none";
  };

  return (
    <div style={{ backgroundImage }}>
      <nav className="navbar">
        <a className="navbar-brand" href="#">
          <img src="./assets/images/logo.png" />
          BattleArena
        </a>
        <div className="navbar-links">
          <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/about">ABOUT</a></li>
            <li><a href="#here">GAMES</a></li>
            <li><a href="/contact">CONTACT</a></li>
          </ul>
        </div>
        <div className="login-register-buttons">
          <a href="/login"><button className="login-button-home">Login<i className="fa fa-sign-in" style={{ marginLeft: "5px" }} aria-hidden="true"></i></button></a>
          <div className="separator"></div>
          <a href="/register"><button className="register-button-home">Register<i className="fa fa-user-plus" style={{ marginLeft: "5px", marginRight: "-5px", fontSize: "15px" }} aria-hidden="true"></i></button></a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-text">Rise to the Challenge</h1>
        </div>
      </section>

      {/* Games Section */}
      <div className="main-content">
        <div className="games-available" id="here">
          Games
        </div>
        <section className="games-section">
          {["Valorant", "Counter-Strike 2", "PUBG", "WARZONE"].map((game, index) => (
            <div key={index} className={`games${index + 1}`}>
              <div className={`games-overlay${index + 1}`}>
                <a
                  href="#!"
                  onClick={() => openModal(`video-modal${index + 1}`)}
                >
                  <p className={`games-overlay-text${index + 1}`}>{game}</p>
                </a>
              </div>
              <div id={`video-modal${index + 1}`} className={`modal${index + 1}`}>
                <div className="modal-content">
                  <span
                    className={`close${index + 1}`}
                    onClick={() => closeModal(`video-modal${index + 1}`)}
                  >
                    &times;
                  </span>
                  <video controls muted autoplay loop style={{ width: "100%", borderRadius: "10px" }}>
                    <source src={`game${index + 1}.mp4`} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div>
            Follow us on
            &nbsp;
            <a href="https://www.facebook.com/" style={{ textDecoration: "none", color: "white" }}><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
            &nbsp;
            <a href="https://www.instagram.com/" style={{ textDecoration: "none", color: "white" }}><i className="fa fa-instagram" aria-hidden="true"></i></a>
            &nbsp;
            <a href="https://www.x.com/" style={{ textDecoration: "none", color: "white" }}><i className="fa fa-twitter" aria-hidden="true"></i></a>
            &nbsp;
            <a href="https://www.linkedin.com/" style={{ textDecoration: "none", color: "white" }}><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
            &nbsp;
            <a href="https://www.github.com/" style={{ textDecoration: "none", color: "white" }}><i className="fa fa-github" aria-hidden="true"></i></a>
          </div>
          <br />
          <p>&copy; 2024 Gaming Tournament Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
