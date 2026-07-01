import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-watermark">KIDANHI</div>
            <div className="about-container">
                <div className="about-grid">
                    <div className="about-header-block">
                        <span className="about-pretitle">Our Story</span>
                        <h2 className="about-title">The Brotherhood</h2>
                        <div className="about-underline"></div>
                    </div>
                    
                    <div className="about-body-block">
                        <p className="about-lead">
                            We are more than just a team; we are a brotherhood born from the heart of a vibrant village in Kerala. Bound by unity, fueled by friendship, and driven by passion, TM_WAYz represents the spirit of togetherness, local culture, and ultimate vibes.
                        </p>
                        
                        <div className="about-stats">
                            <div className="stat-card glass-panel">
                                <span className="stat-num">5</span>
                                <span className="stat-label">Bands of Unity</span>
                            </div>
                            <div className="stat-card glass-panel">
                                <span className="stat-num">2025</span>
                                <span className="stat-label">First Milestone Trip</span>
                            </div>
                            <div className="stat-card glass-panel">
                                <span className="stat-num">20+</span>
                                <span className="stat-label">Active Brothers</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
