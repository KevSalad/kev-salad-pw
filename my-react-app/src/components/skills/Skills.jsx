import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import DataScience from "./DataScience";

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title"> Skills </h2>
            <span className="section__subtitle"> Technical  </span>

            <div className="skills_container container grid">
                <Frontend />
                <DataScience />
                <Backend />
            </div>
            
        
        </section>
    )
}

export default Skills
