import React from 'react';
import profilePic from "../images/avatar.svg";

import '../styles/AboutMe.css'

const AboutMe = () => (
    <>
        <div className="about-me-container">
            <div className="about-me-header">
                <div className="about-me-header-icon">
                    <img src={profilePic} alt="avatar" />
                </div>
                <div className="about-me-header-title">
                    <h3>A bit more about me...</h3>
                </div>
            </div>
        </div>
    </>
);

export default AboutMe;