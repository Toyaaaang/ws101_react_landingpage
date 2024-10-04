import React, { useState } from "react";
import "./main.css";

const Courses = () => {
    const [activeCourse, setActiveCourse] = useState(null);

    const toggleCourse = (course) => {
        setActiveCourse(activeCourse === course ? null : course);
    };

    return (
        <section id="courses">
            <div className="experience-header">
                <h2>Courses</h2>
            </div>
            <div className="experience-container">
                {/* HTML Course */}
                <div className={`experience ${activeCourse === 'html' ? 'active' : ''}`} onClick={() => toggleCourse('html')}>
                    <img src="images/html.png" alt="HTML" />
                    <h3>Hypertext Mark-up Language</h3>
                    <div className="experience-content">
                        <p>
                            HTML (Hypertext Markup Language) is the standard language for creating the structure of web pages. It defines elements like headings, paragraphs,
                            <br /> images, links, and multimedia, serving as the foundation of any website.
                            <br /><br />
                        </p>
                    </div>
                </div>

                {/* CSS Course */}
                <div className={`experience ${activeCourse === 'css' ? 'active' : ''}`} onClick={() => toggleCourse('css')}>
                    <img src="images/css.png" alt="CSS" />
                    <h3>Cascading Style Sheet</h3>
                    <div className="experience-content">
                        <p>
                            CSS (Cascading Style Sheets) is used to style and visually format web pages. It handles the layout, colors, fonts, and overall design, ensuring your content
                            <br /> looks polished and responsive across different devices.
                        </p>
                    </div>
                </div>

                {/* JavaScript Course */}
                <div className={`experience ${activeCourse === 'js' ? 'active' : ''}`} onClick={() => toggleCourse('js')}>
                    <img src="images/js.png" alt="JavaScript" />
                    <h3>JavaScript</h3>
                    <div className="experience-content">
                        <p>
                            JavaScript is a powerful scripting language that brings web pages to life. It enables dynamic content, user interactions, animations, and real-time data
                            <br /> processing, making websites interactive and engaging.
                            <br />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Courses;
