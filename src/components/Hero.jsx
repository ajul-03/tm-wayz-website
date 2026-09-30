import React, { useState, useEffect } from 'react';
import './Hero.css';
import fallbackImage from '../assets/images/team-main.jpg';

const HERO_IMAGES = [
  '/images/herosection/WhatsApp Image 2026-09-15 at 11.01.14 PM.jpeg',
  '/images/herosection/WhatsApp Image 2026-09-15 at 11.01.32 PM.jpeg',
  '/images/herosection/WhatsApp Image 2026-09-15 at 11.02.12 PM.jpeg',
  '/images/herosection/WhatsApp Image 2026-09-15 at 11.02.40 PM.jpeg',
  '/images/herosection/WhatsApp Image 2026-09-15 at 11.02.47 PM.jpeg',
  '/images/herosection/WhatsApp Image 2026-09-15 at 11.03.01 PM.jpeg',
  '/images/herosection/WhatsApp Image 2026-09-15 at 11.03.15 PM.jpeg',
  '/images/herosection/WhatsApp Image 2026-09-15 at 11.03.27 PM.jpeg',
  '/images/herosection/WhatsApp Image 2026-09-15 at 11.04.26 PM.jpeg',
  '/images/herosection/WhatsApp Image 2026-09-15 at 11.04.35 PM.jpeg',
  '/images/herosection/WhatsApp Image 2026-09-15 at 11.04.47 PM.jpeg',
  '/images/herosection/WhatsApp Image 2026-09-15 at 11.06.31 J.jpeg',
  '/images/herosection/WhatsApp Image 2026-09-15 at 11.06.31 PM.jpeg',
  '/images/herosection/WhatsApp Image 2026-09-15 at 11.06.32 PM.jpeg',
  '/images/herosection/WhatsApp Image 2026-09-15 at 11.06.34 PM.jpeg',
  '/images/herosection/WhatsApp Image 2026-09-15 at 11.06.37 PM.jpeg',
  '/images/herosection/WhatsApp Image 2026-09-15 at 11.06.43 PM.jpeg',
  '/images/herosection/WhatsApp Image 2026-09-15 at 11.07.01 PM.jpeg',
  '/images/herosection/WhatsApp Image 2026-09-15 at 11.08.03 PM.jpeg',
  '/images/herosection/WhatsApp Image 2026-09-15 at 11.08.14 PM.jpeg'
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        {HERO_IMAGES.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`TM_WAYz Hero Slide ${index + 1}`}
            className={`hero-background-slide ${index === currentIndex ? 'active' : ''}`}
            onError={(e) => {
              e.target.src = fallbackImage;
            }}
          />
        ))}
        <div className="overlay-gradient"></div>
      </div>
      <div className="hero-content">
        <div className="badge-wrapper">
          <a
            href="https://instagram.com/tm_wayzz"
            target="_blank"
            rel="noopener noreferrer"
            className="insta-badge"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="insta-svg"
            >
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
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="arrow-svg"
            >
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
