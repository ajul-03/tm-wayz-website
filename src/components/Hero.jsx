import React from 'react';
import './Hero.css';
import mainImage from '../assets/images/team-main.jpg';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-background">
                <img src={mainImage} alt="TM_WAYz Team" />
                <div className="overlay-gradient"></div>
            </div>
            <div className="hero-content">
                <div className="badge-wrapper">
                    <a href="https://instagram.com/tm_wayzz" target="_blank" rel="noopener noreferrer" className="insta-badge">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="insta-svg">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                        <span>@tm_wayzz</span>
                    </a>
                </div>
                <h1 className="hero-title">TM_WAYz</h1>
                <p className="hero-subtitle">Unity. Friendship. Community.</p>
                <div className="cta-wrapper">
                    <a href="#about" className="premium-cta">
                        <span>Discover Our Story</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className="arrow-svg">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
