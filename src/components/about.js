import React from "react";
import "./main.css";

const About = () => {
    return (
        <section id="about">
            <div className="about-container">
                <div className="about-left">
                    <img src="images/hero.png" alt="hero" />
                </div>
                <div className="about-right">
                    <h2>ABOUT</h2>
                    <p className="about-description">
                        Welcome to Web Dev 101—a beginner-friendly<br />
                        resource to learn the fundamentals of web<br />
                        development! Here, you’ll discover how to<br />
                        build and style websites using HTML, CSS,<br />
                        and JavaScript. Whether you're just starting<br />
                        out or brushing up on the basics, our concise<br />
                        tutorials and practical examples will help<br /> 
                        you create your own web projects with<br />
                        confidence. Dive in and start your web<br />
                        development journey today!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
