// src/components/Navbar.js
import React, { useState } from 'react';
import '../styles/NavBar.css';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <a href="/">Jack Allen</a>
            </div>
            <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                ☰
            </button>
            <div className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#contact" className="cta-button">Contact Me</a>
            </div>
        </nav>
    );
};

export default Navbar;
