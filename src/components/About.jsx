
import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-container">
                <div className="section-header">
                    <h2>About Us</h2>
                    <div className="underline"></div>
                </div>

                <div className="about-content">
                    <p>
                        We are a small team from a rural village called <strong>Kidanhi</strong>. We started as a group of friends, and our village is a beautiful place filled with many young people like us.
                    </p>
                    <p>
                        Our team is divided into five groups, and everyone shares a strong bond of friendship and unity. Whenever any problem arises, we stand together and support each other.
                    </p>
                    <p className="highlight-text">
                        In 2025, we went on our first trip together, which became a very special and memorable moment in our lives.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
