import React from "react";
import "./main.css";

const Css = () => {
    return (
        <section id="css">
            <h2 className="projects-title1">CSS</h2>
            <div className="projects-list">
                <button
                    className="project"
                    onClick={() => window.open('https://www.youtube.com/watch?v=RU-R2BXSCVw', '_blank', 'noopener noreferrer')}
                >
                    <p className="view-text">Click to view</p>
                    <h3 className="project-title">Overview &<br /> Structure</h3>
                </button>
                <button
                    className="project"
                    onClick={() => window.open('https://www.youtube.com/watch?v=mYwL50wgl6A', '_blank', 'noopener noreferrer')}
                >
                    <p className="view-text">Click to view</p>
                    <h3 className="project-title">Linking<br />CSS Files</h3>
                </button>
                <button
                    className="project"
                    onClick={() => window.open('https://www.youtube.com/watch?v=t11-ibOPZA0', '_blank', 'noopener noreferrer')}
                >
                    <p className="view-text">Click to view</p>
                    <h3 className="project-title">Simple<br /> Selectors</h3>
                </button>
                <button
                    className="project"
                    onClick={() => window.open('https://www.youtube.com/watch?v=aGfEp_Vg3u0', '_blank', 'noopener noreferrer')}
                >
                    <p className="view-text">Click to view</p>
                    <h3 className="project-title">Colors &<br /> Units</h3>
                </button>
                <button
                    className="project"
                    onClick={() => window.open('https://www.youtube.com/watch?v=p0y_jxb7XjU', '_blank', 'noopener noreferrer')}
                >
                    <p className="view-text">Click to view</p>
                    <h3 className="project-title">Text Formatting &<br /> Fonts</h3>
                </button>
            </div>
        </section>
    );
};

export default Css;
