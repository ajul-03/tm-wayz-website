import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-info">
                        <h2 className="footer-logo">TM_WAYz</h2>
                        <p className="footer-tagline">Unity. Friendship. Community.</p>
                    </div>
                    
                    <div className="footer-contact">
                        <div className="contact-item">
                            <div className="contact-icon-wrapper">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="map-pin-svg">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </div>
                            <div className="contact-details">
                                <h3>Location</h3>
                                <p>Kidanhi PO 670675</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} TM_WAYz. Born in Kerala.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
