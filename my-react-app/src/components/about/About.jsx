import React from "react";
import "./about.css";
import Info from "./Info";
import CV from "../../assets/KSAResume.pdf";


const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title"> About Me </h2>
            <span className="section__subtitle"> Introduction </span>

            <div className="about_container container grid">
                <div className="about_data">
                    <Info />

                    <a download="" href={CV} className="button button-flex about-button"> 
                        Resume <i class="uil uil-file-alt"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About;