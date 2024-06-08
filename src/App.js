import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <VideoBackground />
      <GoldenLine />
      <AboutSection />
      <GoldenLine2 />
      <Gallery />
      <ContactUs />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="nav-left">
          <a href="#" className="nav-links">Home</a>
          <a href="#about" className="nav-links">About</a>
          <a href="#gallery" className="nav-links">Gallery</a>
          <a href="#contact" className="nav-links">Contact Us</a>
        </div>
        <div className="navbar-logo-container">
          <a href="#home" className="navbar-logo">NIRVANA</a>
          <p className="navbar-tagline">Live It. Love It.</p>
        </div>
        <a href="#" className="join-us-btn">Join Us</a>
      </div>
    </nav>
  );
}


function VideoBackground() {
  return (
    <div className="video-container">
      <video autoPlay loop muted className="video">
        <source src="https://videos.pexels.com/video-files/3722010/3722010-hd_1280_720_24fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay-text">
        <h1>Welcome to Nirvana</h1>
        <p>Live the Experience</p>
      </div>
    </div>
  );
}

function GoldenLine() {
  return <hr className="golden-line" />;
}

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <h2 className="about-title">About</h2>
      <div className="about-content">
        <div className="about-photos">
          <img src="https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Event 1" className="about-photo" />
          <img src="https://images.pexels.com/photos/3811021/pexels-photo-3811021.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Event 2" className="about-photo" />
          <img src="https://images.pexels.com/photos/1805895/pexels-photo-1805895.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Event 3" className="about-photo" />
        </div>
        <div className="about-text">
          <q>
            An amazing night full of energy and unforgettable moments!
          </q>
        </div>
      </div>
    </section>
  );
}
function GoldenLine2() {
  return <hr className="golden-line" />;
}

function Gallery() {
  return (
    <section id="about" className="about-section">
      <h2 className="gallery-title">Gallery - A Glimpse into the Past</h2>
        <div className="gallery-photos">
        <marquee behavior="scroll" direction="left">
          <img src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Event 1" className="about-photo" />
          <img src="https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Event 2" className="about-photo" />
          <img src="https://images.pexels.com/photos/12311815/pexels-photo-12311815.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Event 2" className="about-photo" />
          <img src="https://images.pexels.com/photos/776113/pexels-photo-776113.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Event 2" className="about-photo" />
          <img src="https://images.pexels.com/photos/2240763/pexels-photo-2240763.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Event 3" className="about-photo" />
          <img src="https://images.pexels.com/photos/8092933/pexels-photo-8092933.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Event 3" className="about-photo" />
          <img src="https://images.pexels.com/photos/1625355/pexels-photo-1625355.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Event 3" className="about-photo" />
          </marquee>
        </div>
    </section>
  );
}

function ContactUs() {
  return (
    <footer id="contact" className="contact-section">
      <img src='https://vitbhopal.ac.in/file/2024/02/logo-300x145.png'></img>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f">Facebook</i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter">Twitter</i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram">Instagram</i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in">LinkedIn</i>
        </a>
      </div>
    </footer>
  );
}

export default App;
