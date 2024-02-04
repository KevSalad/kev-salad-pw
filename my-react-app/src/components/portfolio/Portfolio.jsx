import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/Create Account Page.png";
import IMG2 from "../../assets/Sign In Page.png";
import IMG3 from "../../assets/MRI.png";

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'UT Hack - Financial Website',
        github: 'https://github.com/KevSalad/UT-Hack-1'
    },
    {
        id: 2,
        image: IMG3,
        title: 'AgTro - Medical Imaging',
        github: 'https://github.com/Medical-Imaging-AgTro'
    },
    {
        id: 3,
        image: IMG2,
        title: 'Fuel Project - Fullstack App',
        github: 'https://github.com/SahranPrasla/COSC-4353-Fuel-Project'
    },
]

const Portfolio = () => {
    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section__title"> Portfolio </h2>
            <span className="section__subtitle"> Projects  </span>

            <div className="portfolio_container container grid ">
                {
                    data.map(({id, title, image, github}) => {
                        return (
                            <article key={id} className="portfolio_content">
                                <div className="portfolio_item-image">
                                    <img src={image} alt={title} className="portfolio_item-img" />
                                </div>
                                <div className="portfolio_item-details">
                                    <h3> {title} </h3>
                                    <div className="portfolio_item-cta">
                                        <a href={github} class="button">GitHub</a>
                                        
                                    </div>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Portfolio;

                /* <article className="portfolio_content">
                    <div className="portfolio_item-image">
                        <img src={IMG2} alt="hi" className="portfolio_item-img" />
                    </div>
                    <h3 className="portfolio_item-title"> Project 2 </h3>

                    <div className="portfolio_item-cta">
                        <a href="https://github.com" class="button">GitHub</a>
                    </div>
                </article> */