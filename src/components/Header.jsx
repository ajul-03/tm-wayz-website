
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">TM_WAYz</div>
            <nav className="nav">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#team">Team</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
};

export default Header;
