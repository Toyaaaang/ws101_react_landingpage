import React from "react";
import "./main.css";

const Html = () => {
    return (
        <section id="html">
            <h2>HTML</h2>
            <div className="projects-list">
                <button 
                    className="project" 
                    onClick={() => window.open('https://www.youtube.com/watch?v=29l2qxSJSIw', '_blank', 'noopener noreferrer')}
                >
                    <p className="view-text">Click to view</p>
                    <h3 className="project-title">Overview &<br /> Structure</h3>
                </button>
                <button 
                    className="project" 
                    onClick={() => window.open('https://www.youtube.com/watch?v=pU8B8dEMeTo', '_blank', 'noopener noreferrer')}
                >
                    <p className="view-text">Click to view</p>
                    <h3 className="project-title">Text Elements<br /> & Formatting</h3>
                </button>
                <button 
                    className="project" 
                    onClick={() => window.open('https://www.youtube.com/watch?v=EP8JQhiQb4Q', '_blank', 'noopener noreferrer')}
                >
                    <p className="view-text">Click to view</p>
                    <h3 className="project-title">Attributes &<br /> Linking</h3>
                </button>
                <button 
                    className="project" 
                    onClick={() => window.open('https://www.youtube.com/watch?v=KC_TB9dsZ5g', '_blank', 'noopener noreferrer')}
                >
                    <p className="view-text">Click to view</p>
                    <h3 className="project-title">Images &<br /> File paths</h3>
                </button>
                <button 
                    className="project" 
                    onClick={() => window.open('https://www.youtube.com/watch?v=C8HuXXlmQLc', '_blank', 'noopener noreferrer')}
                >
                    <p className="view-text">Click to view</p>
                    <h3 className="project-title">Audio &<br /> Video</h3>
                </button>
            </div>
        </section>
    );
};

export default Html;
