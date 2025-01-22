// src/components/Projects.js
import React from 'react';
import '../styles/Projects.css';


const Projects = () => (
    <section className="projects">
        <h2 className="projects-title">My Work</h2>
        <div className="projects-wrapper">
            <div className="project-box">
                <h3>Project 1</h3>
                <p className="tagline">This is a tagline for Project 1.</p>
            </div>
            <div className="project-box">
                <h3>Project 2</h3>
                <p className="tagline">This is a tagline for Project 2.</p>
            </div>
            <div className="project-box">
                <h3>Project 3</h3>
                <p className="tagline">This is a tagline for Project 3.</p>
            </div>
            <div className="project-box">
                <h3>Project 4</h3>
                <p className="tagline">This is a tagline for Project 4.</p>
            </div>
        </div>
    </section>
);

export default Projects;
