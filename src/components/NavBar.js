// src/components/NavBar.js
import React, { useState, useEffect } from 'react';
import '../styles/NavBar.css';

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50); // Start transition after scrolling 50px
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className="navbar">
            <ul className={`nav-links ${isScrolled ? "scrolled" : ""}`}>
                <li><a className="active" href="#projects">Work</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;