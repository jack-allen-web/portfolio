import React, {useEffect, useState} from "react";
import "../styles/WorkSection.css"; // Updated CSS file for the work section
import projectImage1 from "../images/sales_website.jpeg"; // Example images for the projects
import projectImage2 from "../images/Example-of-a-mobile-app.jpg";

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
        // Add more projects here
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

    useEffect(() => {
        const intervalId = setInterval(nextProject, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className="work-section">
            <div className="carousel-container">
                <button className="carousel-prev" onClick={prevProject}>
                    &#10094;
                </button>

                <div className={`carousel-item ${currentIndex === currentIndex ? "show" : ""}`}>
                    <div className="work-left">
                        <img
                            src={projects[currentIndex].image}
                            alt={projects[currentIndex].title}
                            className="work-image"
                        />
                    </div>
                    <div className="work-right">
                        <h2 className="work-title">{projects[currentIndex].title}</h2>
                        <p className="work-description">
                            {projects[currentIndex].description}
                        </p>
                    </div>
                </div>

                <button className="carousel-next" onClick={nextProject}>
                    &#10095;
                </button>
            </div>
        </section>
    );
};

export default WorkSection;
