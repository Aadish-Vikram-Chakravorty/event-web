import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const aboutText = document.querySelector('.about-text blockquote');
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollFraction = scrollY / maxScroll;
      const black = Math.min(1, scrollFraction * 2);
      aboutText.style.color = `rgba(0, 0, 0, ${black})`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <VideoBackground />
      <OverlayText />
      <GoldenLine />
      <AboutSection />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#" className="nav-links">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-links">About</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-links">Services</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-links">Contact</a>
          </li>
        </ul>
        <div className="navbar-logo-container">
          <a href="#" className="navbar-logo">Stylish Logo</a>
          <p className="navbar-tagline">Dance the night away</p>
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
    </div>
  );
}

function OverlayText() {
  return (
    <div className="overlay-text">
      <h1>Welcome to Our Event</h1>
      <p>Join us for a night of fun and excitement!</p>
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
          <blockquote>
            "An amazing night full of energy and unforgettable moments!"
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export default App;
