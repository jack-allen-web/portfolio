// src/components/NavBar.js
import React from 'react';
import '../styles/NavBar.css';

const NavBar = () => (
    <nav className="navbar">
        <ul className="nav-links">
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
);

export default NavBar;
