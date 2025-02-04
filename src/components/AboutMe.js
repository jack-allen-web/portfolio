import React, { useState } from 'react';
import profilePic from "../images/avatar.svg";
import '../styles/AboutMe.css';

const AboutMe = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="about-me-container">
            {/* Header Section */}
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
                    Hey there! 👋 I'm a software engineer who loves to bring ideas to life through code. Whether it's building sleek e-commerce platforms, crafting intuitive mobile apps, or designing robust web applications...
                </p>
                {/*<button className="read-more-btn" onClick={toggleExpanded}>*/}
                {/*    {expanded ? 'Read Less' : 'Read More'}*/}
                {/*</button>*/}
                {/*{expanded && (*/}
                {/*    <div className="about-me-expanded-description">*/}
                {/*        <p>*/}
                {/*            My toolkit? Oh, it’s packed with <strong>Python</strong>, <strong>Java</strong>, and a sprinkle of creative magic ✨. With a strong foundation in software development and a passion for problem-solving, I’m always up for a new challenge.*/}
                {/*        </p>*/}
                {/*        <p>*/}
                {/*            When I’m not writing code, you’ll probably find me exploring the latest tech trends, enjoying a good cup of coffee, or experimenting with fun new projects.*/}
                {/*        </p>*/}
                {/*        <p>*/}
                {/*            Let’s connect and see what we can build together! 🚀*/}
                {/*        </p>*/}
                {/*    </div>*/}
                {/*)}*/}
            </div>
        </div>
    );
};

export default AboutMe;
