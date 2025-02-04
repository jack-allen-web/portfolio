import React from 'react';
import NavBar from '../components/NavBar'
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import "../styles/Global.css"
import Work from "../components/WorkSection";

const HomePage = () => (
    <>
        <NavBar />
        <Header />
        <Work />
        {/*<AboutMe />*/}
        {/*<Contact />*/}
        {/*<Footer />*/}
    </>
);

export default HomePage;
