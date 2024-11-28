import React from "react";
import { Link } from "react-router-dom"; // Import React Router's Link for navigation

const AboutPage = () => {
  return (
    <div className="contact-body">
      <h1 className="aboutUs">About Us</h1>
      <p className="aboutUsText">
        Welcome to Battle Arena, your ultimate destination for online gaming
        tournaments.
      </p>

      <div className="about-container">
        <div className="about">
          <h2>Our Mission</h2>
          <p>
            At Battle Arena, we are committed to providing gamers with an
            exhilarating platform to showcase their skills, compete with others,
            and ultimately emerge victorious. Our mission is to foster a vibrant
            gaming community and offer thrilling tournaments across various gaming
            genres.
          </p>
        </div>

        <div className="about">
          <h2>What We Offer</h2>
          <p>
            With Battle Arena, you can participate in competitive gaming
            tournaments, ranging from action-packed shooters to strategic MOBAs.
            Our platform supports a wide range of games, ensuring there's
            something for every gamer.
          </p>
        </div>

        <div className="about">
          <h2>Get in Touch</h2>
          <p>
            Have questions or feedback? We'd love to hear from you! Contact our
            team by clicking the button below. We're here to assist you!
          </p>
          {/* React Router Link for navigation */}
          <Link to="/contact" className="contactSendBtn aboutUsContactBtn">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Footer */}
      <br />
      <br />
      <br />
      <footer className="footer">
        <div className="container">
          <div>
            Follow us on
            &nbsp;&nbsp;
            <a
              href="https://www.facebook.com/"
              style={{ textDecoration: "none", color: "white" }}
            >
              <i className="fa fa-facebook-official" aria-hidden="true"></i>
            </a>
            &nbsp;&nbsp;
            <a
              href="https://www.instagram.com/"
              style={{ textDecoration: "none", color: "white" }}
            >
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
            &nbsp;&nbsp;
            <a
              href="https://www.x.com/"
              style={{ textDecoration: "none", color: "white" }}
            >
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
            &nbsp;&nbsp;
            <a
              href="https://www.linkedin.com/"
              style={{ textDecoration: "none", color: "white" }}
            >
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
            &nbsp;&nbsp;
            <a
              href="https://www.github.com/"
              style={{ textDecoration: "none", color: "white" }}
            >
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
          </div>
          <br />
          <p>&copy; 2024 Gaming Tournament Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
