import React from "react";
import "./main.css";
import { Link } from "react-router-dom";
import hero from './assets/Image/hero.png'

const Nav =() =>{
    return(
        <header>
        <input type="checkbox" id="nav-toggle" class="nav-toggle"/>
        <label for="nav-toggle" class="nav-toggle-label">
            <span></span>
        </label>
        <nav>
            <ul><li><img className="hero" src={hero} alt="Hero"/></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/html">HTML</Link></li>
                <li><Link to="/css">CSS</Link></li>
                <li><Link to="/js">JavaScript</Link></li>
                <li><Link to="/contact">LearnMore</Link></li>
            </ul>
        </nav>
    </header>
    );
};
export default Nav;