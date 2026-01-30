
import React from 'react';
import './TeamList.css';
import { teamData } from '../data/teamData';

const TeamList = () => {
    return (
        <section className="team" id="team">
            <div className="section-header">
                <h2>Our Team</h2>
                <div className="underline"></div>
                <p className="section-subtitle">TM_WAYz - The people who make it happen</p>
            </div>

            <div className="team-grid">
                {teamData.map((member) => (
                    <div
                        key={member.id}
                        className={`team-card ${member.isHighlight ? 'highlight-card' : ''}`}
                    >
                        <div className="image-wrapper">
                            {member.image ? (
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    style={{ objectPosition: member.imgPosition || 'center' }}
                                />
                            ) : (
                                <div className="no-image-placeholder">
                                    <span>TM_WAYz</span>
                                </div>
                            )}
                        </div>
                        <div className="card-content">
                            {member.highlightTitle && <span className="badge">{member.highlightTitle}</span>}
                            <h3>{member.name}</h3>
                            <p className="role">{member.role}</p>
                            {member.description && <p className="description">{member.description}</p>}

                            {/* Instagram Section */}
                            <div className="social-links">
                                <a
                                    href={`https://instagram.com/${member.instagram || 'tm_wayzz'}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="card-insta-link"
                                >
                                    <span>Follow</span> <span className="insta-icon-small">📸</span>
                                </a>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamList;
