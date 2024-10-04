import React from "react";
import "./main.css";

const Contact = () => {
    return (
        <section id="contact">
            <div className="contact-header">
                <h2>Learn More</h2>
            </div>
            <div className="contact-container">
                <div className="social-media">
                    <h3>Social Media</h3>
                    <ul>
                        <li>
                            <img src="images/mesgr-icon.png" alt="Messenger" />
                            <div className="social-info">
                                <p><a href="https://www.facebook.com/jomari.estoya?mibextid=ZbWKwLwL" target="_blank" rel="noopener noreferrer">John Estoya</a></p>
                            </div>
                        </li>
                        <li>
                            <img src="images/ig-icon.png" alt="Instagram" />
                            <div className="social-info">
                                <p><a href="https://www.instagram.com/jhn_estoya?igsh=MXRkb3JvMnZ1NG90Nw==" target="_blank" rel="noopener noreferrer">@jhn_estoya</a></p>
                            </div>
                        </li>
                        <li>
                            <img src="images/fbicon.png" alt="Facebook" />
                            <div className="social-info">
                                <p><a href="https://www.facebook.com/jomari.estoya?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">John Estoya</a></p>
                            </div>
                        </li>
                        <li>
                            <img src="images/Email Icon.png" alt="Email" />
                            <div className="social-info">
                                <p><a href="https://www.youtube.com/@SDPTSolutions" target="_blank" rel="noopener noreferrer">Visit: YouTube</a></p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="get-in-touch">
                    <h3>Get in Touch</h3>
                    <form action="mailto:tinapa218@gmail.com" method="post" enctype="text/plain">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" required></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
