// src/components/Header.js
import React from 'react';
import '../styles/Header.css';

const Header = () => (
    <header className="header">
        <div className="header-content">
            <h1 className="header-title">I'm Jack.</h1>
            <p className="header-tagline">Software Engineer | Problem Solver | Innovator</p>
            {/*<div className="header-buttons">*/}
            {/*    <a href="#projects" className="cta-button secondary">View My Work</a>*/}
            {/*    <a href="#contact" className="cta-button primary">Contact Me</a>*/}
            {/*</div>*/}
        </div>
    </header>
);

export default Header;
