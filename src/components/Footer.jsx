
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="footer-content">
                <div className="footer-branding">
                    <h2>TM_WAYz</h2>
                    <p>Unity. Friendship. Community.</p>
                </div>

                <div className="footer-divider"></div>

                <div className="footer-location">
                    <h3>📍 Location</h3>
                    <p>Kidanhi PO 670675</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} TM_WAYz Team. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
