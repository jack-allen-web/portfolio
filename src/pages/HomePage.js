import React from 'react';
import NavBar from '../components/NavBar'
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Work from "../components/WorkSection";
import "../styles/Global.css"

const HomePage = () => (
    <>
        <NavBar />
        <Header />
        <AboutMe />
        <Work />
    </>
);

export default HomePage;
