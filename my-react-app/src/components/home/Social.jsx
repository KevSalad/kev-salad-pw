import React from 'react'

const Social = () => {
    return (
        <div className="home_social">
            <a href="https://www.linkedin.com/in/kevin-saldana-avilez-4bb0b0207/" 
            className="home_social-icon" target="_blank"> 
                <i class="uil uil-linkedin"></i>
            </a>
            <a href="https://github.com/KevSalad" 
            className="home_social-icon" target="_blank"> 
                <i class="uil uil-github-alt"></i>
            </a>
            {/* <a href="" className="home_social-icon" target="_blank"> 
                <i class="uil uil-instagram"></i>
            </a> */}
        </div>
    )
}

export default Social