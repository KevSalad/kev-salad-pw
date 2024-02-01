import React from "react";

const Info = () => {
    return (
        <div className="about_info grid">
            <div className="about_box">   
                <i class="uil uil-user"></i>
                <h3 className="about_title"> Who: </h3>
                <span className="about_sub"> Kevin Saldana Avilez </span>
                <p className="about_sub"> - Computer Science B.S. - Mathematics Minor - </p>
            </div>

            <div className="about_box">   
                <i class="uil uil-rocket"></i>
                <h3 className="about_title"> About: </h3>
                <span className="about_sub"> 
                    I am a recent graduate from the University of Houston with a B.S. in Computer Science and a minor in Mathematics. My interests lie within Software Development, Data Science, and Web Development.
                </span>
            </div>
        </div>
    )
}

export default Info;