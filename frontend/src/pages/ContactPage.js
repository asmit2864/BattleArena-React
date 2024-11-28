import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; // Import EmailJS for browser
import { FaEnvelope, FaPhone, FaMapMarker, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const sendMail = (e) => {
    e.preventDefault(); // Prevent the default form submission
    setIsSending(true);

    const templateParams = {
      from_name: name,
      email_id: email,
      message: message,
    };

    emailjs
      .send(
        'service_3nf9sqi', // Replace with your EmailJS Service ID
        'template_l7bq75k', // Replace with your EmailJS Template ID
        templateParams,
        'NCj-_d4fqh_cSGv06' // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          alert('Message Sent Successfully!');
          setName('');
          setEmail('');
            setMessage('');
          },
          (error) => {
            console.error('Failed to send message:', error);
            alert('Failed to send message. Please try again later.');
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <div className="contact-body">
      <h1 className="contactHead">Contact Us</h1>
      <p className="contactText">Feel free to reach out to us with any questions or inquiries.</p>

      <div className="contact-container">
        <div className="contact-info">
          <p>
            <FaEnvelope style={{ fontSize: '30px', marginRight: '10px' }} />
            <span style={{ fontSize: '20px' }}>asmitk2864@gmail.com</span>
          </p>
          <p>
            <FaPhone style={{ fontSize: '30px', marginRight: '20px' }} />
            <span style={{ fontSize: '20px' }}>+918937993669</span>
          </p>
          <p>
            <FaMapMarker style={{ fontSize: '30px', marginRight: '27px' }} />
            <span style={{ fontSize: '20px' }}>LPU, Phagwara, 144411, Punjab, INDIA</span>
          </p>
        </div>

        <div className="contact-form">
          <h2 className="sendMessage">Send Us a Message</h2>
          <form id="contact-form" onSubmit={sendMail}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="full_name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              pattern="[A-Za-z\s]{1,20}"
              title="Please enter a valid name (up to 20 characters, letters and spaces only)"
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="emailID"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message1"
              name="message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>

            <button type="submit" className="contactSendBtn" disabled={isSending}>
              {isSending ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div>
            Follow us on
            &nbsp;&nbsp;<a href="https://www.facebook.com/" style={{ textDecoration: 'none', color: 'white' }}>
              <FaFacebook />
            </a>
            &nbsp;&nbsp;<a href="https://www.instagram.com/" style={{ textDecoration: 'none', color: 'white' }}>
              <FaInstagram />
            </a>
            &nbsp;&nbsp;<a href="https://www.x.com/" style={{ textDecoration: 'none', color: 'white' }}>
              <FaTwitter />
            </a>
            &nbsp;&nbsp;<a href="https://www.linkedin.com/" style={{ textDecoration: 'none', color: 'white' }}>
              <FaLinkedin />
            </a>
            &nbsp;&nbsp;<a href="https://www.github.com/" style={{ textDecoration: 'none', color: 'white' }}>
              <FaGithub />
            </a>
          </div>
          <br />
          <p>&copy; 2024 Gaming Tournament Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
