import React, { useState, useEffect } from "react";
import "../styles/WorkSection.css";
import projectImage1 from "../images/sales_website.jpeg";
import projectImage2 from "../images/Example-of-a-mobile-app.jpg";
import projectImage3 from "../images/software-development-project-ideas.png";

const WorkSection = () => {
    const projects = [
        {
            title: "E-Commerce Website",
            description:
                "This e-commerce website offers a seamless shopping experience with features like user authentication, dynamic product catalogs, and a secure payment gateway. Designed to deliver exceptional performance and an intuitive user interface.",
            image: projectImage1,
        },
        {
            title: "Project 2",
            description: "Description of Project 2.",
            image: projectImage2,
        },
        {
            title: "Project 3",
            description: "Description of Project 3.",
            image: projectImage3,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevProject = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    return (
        <section className="work-section">
            <div className="carousel-container">
                <button className="carousel-prev" onClick={prevProject}>
                    &#10094;
                </button>

                <div className="work-container">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`work-box ${
                                index === currentIndex
                                    ? "active"
                                    : index === (currentIndex + 1) % projects.length
                                        ? "next"
                                        : index === (currentIndex - 1 + projects.length) % projects.length
                                            ? "prev"
                                            : "behind"
                            }`}
                        >
                            <div className="work-left">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="work-image"
                                />
                            </div>
                            <div className="work-right">
                                <h2 className="work-title">{project.title}</h2>
                                <p className="work-description">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="carousel-next" onClick={nextProject}>
                    &#10095;
                </button>
            </div>
        </section>
    );
};

export default WorkSection;

