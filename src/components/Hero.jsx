
import React from 'react';
import './Hero.css';
import mainImage from '../assets/images/team-main.jpg';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-background">
                <img src={mainImage} alt="TM_WAYz Team" />
                <div className="overlay"></div>
            </div>
            <div className="hero-content">
                <h1>TM_WAYz</h1>
                <p className="subtitle">Unity. Friendship. Community.</p>
                <a href="https://instagram.com/tm_wayzz" target="_blank" rel="noopener noreferrer" className="insta-link">
                    <span className="insta-icon">📸</span> @tm_wayzz
                </a>
                <br />
                <a href="#about" className="cta-button">Discover Our Story</a>
            </div>
        </section>
    );
};

export default Hero;
