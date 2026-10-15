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

// Flip-book stop-motion speed (every 0.28 seconds)
const FLIP_INTERVAL_MS = 280;

const Hero = ({ isIntroActive = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Preload all 20 images into the browser cache so flip-book loop runs with zero lag
  useEffect(() => {
    HERO_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Rapid flip-book / stop-motion animation loop
  useEffect(() => {
    if (isIntroActive) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, FLIP_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [isIntroActive]);

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        {HERO_IMAGES.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`TM_WAYz Hero Frame ${index + 1}`}
            className={`hero-background-slide ${index === currentIndex ? 'active' : ''}`}
            loading={index < 4 ? 'eager' : 'lazy'}
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
