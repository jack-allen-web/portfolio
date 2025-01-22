// src/components/Skills.js
import React from 'react';
import { FaPython, FaJava, FaAws, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiDjango, SiPostgresql, SiDocker, SiKubernetes, SiGraphql } from 'react-icons/si';
import '../styles/Skills.css';


const Skills = () => (
    <section className="skills-section" id="skills">
        <h2>My Skills</h2>
        <div className="skills-container">
            <div className="skill-item">
                <FaPython className="skill-icon" />
                <p>Python</p>
            </div>
            <div className="skill-item">
                <FaJava className="skill-icon" />
                <p>Java</p>
            </div>
            <div className="skill-item">
                <SiJavascript className="skill-icon" />
                <p>JavaScript</p>
            </div>
            <div className="skill-item">
                <SiTypescript className="skill-icon" />
                <p>TypeScript</p>
            </div>
            <div className="skill-item">
                <FaReact className="skill-icon" />
                <p>React</p>
            </div>
            <div className="skill-item">
                <FaNodeJs className="skill-icon" />
                <p>Node.js</p>
            </div>
            <div className="skill-item">
                <SiDjango className="skill-icon" />
                <p>Django</p>
            </div>
            <div className="skill-item">
                <SiPostgresql className="skill-icon" />
                <p>PostgreSQL</p>
            </div>
            <div className="skill-item">
                <FaDatabase className="skill-icon" />
                <p>SQL</p>
            </div>
            <div className="skill-item">
                <FaAws className="skill-icon" />
                <p>AWS</p>
            </div>
            <div className="skill-item">
                <SiDocker className="skill-icon" />
                <p>Docker</p>
            </div>
            <div className="skill-item">
                <SiKubernetes className="skill-icon" />
                <p>Kubernetes</p>
            </div>
        </div>
    </section>
);

export default Skills;
