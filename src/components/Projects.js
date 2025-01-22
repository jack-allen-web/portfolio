// src/components/Projects.js
import React, { useState } from 'react';
import '../styles/Projects.css';

const Projects = () => {
    const projectList = [
        { id: 1, title: 'E-Commerce Platform', image: '../images/software-development-project-ideas.png', description: 'A modern platform for online shopping.' },
        { id: 2, title: 'Mobile Game', image: '/images/project2.jpg', description: 'An addictive, fun mobile gaming experience.' },
        { id: 3, title: 'Social Media Dashboard', image: '/images/project3.jpg', description: 'Analytics and insights for social media platforms.' },
        { id: 4, title: 'Data Visualization Tool', image: '/images/project4.jpg', description: 'Interactive charts and data-driven insights.' },
        { id: 5, title: 'Machine Learning App', image: '/images/project5.jpg', description: 'AI-powered predictions and analysis.' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const goLeft = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projectList.length) % projectList.length);
    };

    const goRight = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectList.length);
    };

    return (
        <section className="projects-section">
            <h2 className="projects-title">My Work</h2>
            <div className="projects-carousel">
                <button className="carousel-control left" onClick={goLeft}>
                    &#8249;
                </button>
                <div className="projects-wrapper">
                    {projectList.map((project, index) => {
                        const offset = (index - currentIndex + projectList.length) % projectList.length;
                        const style = {
                            transform: `translateX(calc(${offset} * 100%))`,
                        };

                        return (
                            <div className="project-card" style={style} key={project.id}>
                                <img src={project.image} alt={project.title} className="project-image" />
                                <div className="project-info">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <button className="carousel-control right" onClick={goRight}>
                    &#8250;
                </button>
            </div>
        </section>
    );
};

export default Projects;
