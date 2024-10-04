import React from "react";
import "./main.css";

const Js = () => {
    return (
        <section id="js">
            <h2 className="projects-title2">JavaScript</h2>
            <div className="projects-list">
                <button 
                    className="project" 
                    onClick={() => window.open('https://www.youtube.com/watch?v=V01uCwftQ5o', '_blank', 'noopener noreferrer')}
                >
                    <p className="view-text">Click to view</p>
                    <h3 className="project-title">IDE &<br /> Hello World</h3>
                </button>
                <button 
                    className="project" 
                    onClick={() => window.open('https://www.youtube.com/watch?v=qkhhXIl1PK0', '_blank', 'noopener noreferrer')}
                >
                    <p className="view-text">Click to view</p>
                    <h3 className="project-title">Variables<br /> & Data types</h3>
                </button>
                <button 
                    className="project" 
                    onClick={() => window.open('https://www.youtube.com/watch?v=eQodSdcyhUg', '_blank', 'noopener noreferrer')}
                >
                    <p className="view-text">Click to view</p>
                    <h3 className="project-title">Numbers &<br /> Operators</h3>
                </button>
                <button 
                    className="project" 
                    onClick={() => window.open('https://www.youtube.com/watch?v=02Jetg4QVfU', '_blank', 'noopener noreferrer')}
                >
                    <p className="view-text">Click to view</p>
                    <h3 className="project-title">Strings</h3>
                </button>
                <button 
                    className="project" 
                    onClick={() => window.open('https://www.youtube.com/watch?v=Fud9LnJ6DCQ', '_blank', 'noopener noreferrer')}
                >
                    <p className="view-text">Click to view</p>
                    <h3 className="project-title">Arrays</h3>
                </button>
            </div>
        </section>
    );
};

export default Js;
