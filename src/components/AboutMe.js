import React, { useState } from 'react';
import profilePic from "../images/avatar.svg";
import '../styles/AboutMe.css';

const AboutMe = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="about-me">
            <div className="about-me-container">
                <div className="about-me-header">
                    <div className="about-me-header-icon">
                        <img src={profilePic} alt="avatar" />
                    </div>
                    <div className="about-me-header-title">
                        <h3>A bit more about me...</h3>
                    </div>
                </div>

                {/* Description Section */}
                <div className="about-me-description-container">
                    <p className="about-me-description">
                        Hey there! 👋 I'm a software engineer who loves to bring ideas to life through code. Whether it's building sleek e-commerce platforms, crafting intuitive mobile apps, or designing robust web applications, I love to create!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
