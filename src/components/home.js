import React from 'react';
import './main.css'; 
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section id="home">
        <div className="intro">
            <h1>Hi, Welcome to web development 101!</h1>
            <p>We’re thrilled to have you here as you embark on your journey into the<br />
                world of web development. Whether you’re a complete beginner or<br />
                looking to sharpen your skills, Web Dev 101 is your go-to resource<br />
                for learning the essentials of HTML, CSS, and JavaScript. In<br />
                today’s digital age, having a solid understanding of these core<br />
                technologies is invaluable. They form the foundation of every<br />
                website you interact with and are crucial for anyone looking to<br />
                create their own web projects or pursue a career in web development.<br />
                At Web Dev 101, we’ll guide you through the basics, from structuring<br />
                a webpage with HTML, styling it with CSS, to making it interactive<br />
                with JavaScript. Our goal is to provide you with clear, concise,<br />
                and practical content that you can easily understand<br />
                and apply. So, dive in, explore, and start building your skills!<br />
                We’re here to support you every step of the way.</p>
            <div className="buttons">
                <Link to="/contact" className="btn1">Learn more</Link>
                <Link to="/courses" className="btn2">Start Learning</Link>
            </div>
        </div>
        <div className="profile">
            <img src="./Images/avatar.png" alt="WEBSITE" />
        </div>
    </section>
);
};

export default Home;
