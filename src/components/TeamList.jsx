import React from 'react';
import './TeamList.css';
import { teamData } from '../data/teamData';

const TeamList = () => {
    return (
        <section className="team" id="team">
            <div className="section-header">
                <span className="section-pretitle">The Crew</span>
                <h2 className="section-title">Meet The Brotherhood</h2>
                <div className="section-underline"></div>
            </div>

            <div className="team-container">
                <div className="team-grid">
                    {teamData.map((member) => (
                        <div
                            key={member.id}
                            className={`team-card glass-panel ${member.isHighlight ? 'highlight-card' : ''}`}
                        >
                            <div className="image-wrapper">
                                {member.image ? (
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        style={{ objectPosition: member.imgPosition || 'center' }}
                                        loading="lazy"
                                    />
                                ) : (
                                    <div className="no-image-placeholder">
                                        <span>TM_WAYZ</span>
                                    </div>
                                )}
                                {member.highlightTitle && <span className="card-badge">{member.highlightTitle}</span>}
                            </div>
                            
                            <div className="card-content">
                                <h3>{member.name}</h3>
                                <p className="aesthetic-role">{member.aestheticRole}</p>
                                <p className="role">{member.role}</p>
                                {member.description && <p className="description">{member.description}</p>}
                                
                                <div className="social-links">
                                    <a
                                        href={`https://instagram.com/${member.instagram || 'tm_wayzz'}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="card-insta-link"
                                        aria-label={`Follow ${member.name} on Instagram`}
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="insta-icon-svg">
                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                        </svg>
                                        <span>Follow</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamList;
