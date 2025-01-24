// src/components/Contact.js
import React from 'react';
import '../styles/Contact.css';

// todo: add chatbot to handle the contact method for the user

const Contact = () => (
    <section className="contact-section" id="contact">
        <h2>Get in Touch</h2>
        <p>If you'd like to collaborate or just say hi, drop me a message below!</p>
        <form className="contact-form">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
        </form>
    </section>
);

export default Contact;
