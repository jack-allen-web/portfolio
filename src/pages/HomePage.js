import React from 'react';
import NavBar from '../components/NavBar'
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import "../styles/global.css"

const HomePage = () => (
    <>
        <NavBar />
        <Header />
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
    </>
);

export default HomePage;
