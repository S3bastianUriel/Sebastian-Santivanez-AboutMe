import React from 'react';
import '@styles/Home.scss';

// import 
import seba from '@logos/seba.png';
import github from '@logos/github-logo.png';
import platzi from '@logos/platzi.png';
import linkedin from '@logos/linkedin.png';
import dark_eye from '@logos/watch-dark-eye_icon.png';
// import github from '@icons/github.svg';



//PROJECTS cover
// import tesla from '@projects/TESLA.jpg';
import e_commerce from '@projects/e_commerce3-cover.png';
import moviesapp from '@projects/Movies_&_TV_app.png';
import btsworld from '@projects/btsworld-cover.png';



//SKILLS COVER 
import css from '@logos/css-logo.png';
import git from '@logos/Git-Icon.png';
import sass from '@logos/sass-logo.png';
import html from '@logos/HTML5_logo.png';
import webpack from '@logos/webpack-logo.png';
import js from '@logos/javascript-logo.png';
import react from '@logos/react-logo.svg';
import node from '@logos/nodejs-icon-1.jpg'
import ts from '@logos/typescript-logo.png'

// import ModalMenu from '@components/ModalMenu'
import Footer from '@components/Footer';


const Home = () => {
    return (
        <React.Fragment>


                            {/* PROFILE */}
        <section className="profile">
            <div className="profile-section">
                <div className="profile-container ">
                    <div className="profile-item">
                        <div className="profile-container--picture">
                            <div className="story">
                                {/* <a href="https://www.linkedin.com/in/sebastian-uriel-santiva%C3%B1ez-645087234/"  target="_blank" ></a> */}
                                <img className="profile-container--picture---img" src={seba} alt="profile__pic" />
                            </div>
                        </div>
                    </div>
                    <div className="profile-container--name">
                        <h1>Hi! My name is <strong>Sebastian Santivañez</strong>. <br/>I'm a <strong>Frontend Developer</strong> from Argentina.</h1>
                    </div>
                </div>

                <div className="profile-socialmedia">
                    <div className="profile-socialmedia--item">
                        <div className="profile-socialmedia--logo">      
                            <a href=""  target="_blank" >
                                <img src={github} className="profile-socialmedia--icon" alt="socialmedia__icon"/>
                            </a>
                        </div>
                        <p>Github</p>
                    </div>

                    <div className="profile-socialmedia--item">
                        <div className="profile-socialmedia--logo">      
                            <a href=""  target="_blank" >
                                <img src={linkedin} className="profile-socialmedia--icon" alt="socialmedia__icon"/>
                            </a>
                        </div>
                        <p>LinkedIn</p>
                    </div>

                    <div className="profile-socialmedia--item">
                        <div className="profile-socialmedia--logo">      
                            <a href=""  target="_blank" >
                                <img src={platzi} className="profile-socialmedia--icon" alt="socialmedia__icon"/>
                            </a>
                        </div>
                        <p>Platzi</p>
                    </div>
                    {/* <ul>
                        <li>
                            <div className="profile-socialmedia--item">
                                <a href=""  target="_blank" >
                                    <img src={linkedin} className="profile-socialmedia--icon" alt="socialmedia__icon"/>
                                </a>
                            </div>
                        </li>
                        <li>
                        <p class="text-sm">LinkedIn</p>
                        </li>
                    </ul> */}
                </div>  
            </div>
        </section>

        {/* <sectiow */}

                            {/* ABOUTME */}
        <section className="aboutme">
            <div className="aboutme-section">
                <div className="aboutme-content--data">
                        <h2> <strong>About Me</strong>  </h2>
                        <p>I'm a <strong>Front End Developer</strong> with a Graphic Design background. I'm now pursuing the Web Development path, but I studied Graphic Design in college for two years, where I developed a strong aesthetic sense.</p>

                        <p>I'm a complete <strong>pixel perfect enthusiast</strong>, as I have a great attention to detail. I'm really passionate about technology and I enjoy being curious. Furthermore, I'm highly perfectionist yet versatile.</p>

                        <p>I'm fluent in both written and spoken English, as I've got a <strong>B2 English level.</strong></p>
                    </div>
            </div>
        </section>
       

                            {/* PROJECTS */}
        <section className="project">
            <div className="project-title--section">
                <h2>Project dashboard</h2>
            </div>

            <div className="project-list--container">

                <div className="project-list--item ">

                        <div className="project-cover">
                            <div className="project-cover2">
                                <img src={e_commerce} className="project-cover--img" />
                                <div className="project-cover--details">

                                <a href="https://yardsale-sebastian.netlify.app"  target="_blank" >
                                    <img src={dark_eye} className="project-cover--details---icon" />
                                </a>

                                <a href="https://github.com/S3bastianUriel/YardSale-ReactJS.git"  target="_blank" >
                                    <img src={github} className="project-cover--details---icon" />
                                </a>
                                </div>
                            </div>
                        </div>

                        <div className="project-list--text">
                            <p className="project-type">E-commerce</p>
                            <p className="project-name">Yard Sale</p>
                            <p className="project-text">Fully responsive layout made with React and SCSS for the {/*all environment*/}project. In this project you can add products to the shopping cart, delete products, calculate the total value of the purchase. Every product is brought from a API.</p>
                            <div className="project-stack">
                                <p>React Hooks</p>
                                <p>Sass</p>
                                <p>Webpack</p>
                                <p>API</p>
                                
                            </div>
                        </div>
                        {/* <div className="projects-list--cover">
                        </div> */}
                </div>


                <div className="project-list--item">

                        <div className="project-cover">
                            <div className="project-cover2">
                                <img src={moviesapp} className="project-cover--img"></img>
                                <div className="project-cover--details">
                                    <a href="https://s3bastianuriel.github.io/Movies-app-/"  target="_blank" >
                                        <img src={dark_eye} className="project-cover--details---icon"></img>
                                    </a>
                                    <a href="https://github.com/S3bastianUriel/Movies-app-"  target="_blank" >
                                        <img src={github} className="project-cover--details---icon"></img>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="project-list--text project-list--text---blockInfo---selfEnd">
                            <p className="project-type">App</p>
                            <p className="project-name" >Movies-App</p>
                            <p className="project-text">A mobile responsive layout project made with JavaScript for the section of trending, categories, favorites along with the use of Local Storage. Every movie/serie is brought from a API.</p>
                            <div className="project-stack project-stack--blockInfo---selfEnd" >
                                <p>JavaScript</p>
                                <p>HTML</p>
                                <p>CSS</p>
                                <p>API</p>
                            </div>
                        </div>
                        {/* <div className="projects-list--cover">
                        </div> */}
                </div>

                <div className="project-list--item">

                        <div className="project-cover">
                            <div className="project-cover2">
                                <img src={btsworld} className="project-cover--img"></img>
                                <div className="project-cover--details">
                                    <a href="https://btsworld-home.netlify.app/" target="_blank">
                                        <img src={dark_eye} className="project-cover--details---icon"></img>
                                    </a>
                                    <a href="https://github.com/S3bastianUriel/BTSWorld" target="_blank">
                                        <img src={github} className="project-cover--details---icon"></img>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="project-list--text">
                            <p className="project-type">Website</p>
                            <p className="projects-name" >BTS World</p>
                            <p className="projects-text">A totally personalized website about BTS. Fully responsive layout made with React and SCSS for the interactions to the users.</p>
                            <div className="project-stack">
                                <p>ReactJs</p>
                                <p>Sass</p>
                                <p>Webpack</p>
                                
                            </div>
                        </div>
                        {/* <div className="projects-list--cover">
                        </div> */}
                </div>
                    
            </div>
            {/* <h2>Featured Proyects</h2>
            <div className="project-section">

                <div className="project-container">
                    <h2>BTS World</h2>

                    <div className="project-item">
                        
                        <div className="project-item--cover">
                            <img src={tesla} className="project-item--cover---img" width="100%" alt=""   />
                            <div className="project-item--cover---details">
                                <img src={github} className="project-item--cover---details----img"></img>
                                <img src={dark_eye} className="project-item--cover---details----img"></img>
                            </div>
                        </div>

                        <div className="project-item--text">
                            <ul>
                                <span>Un website inspirado en el 
                                grupo surcoreano BTS ene a zeta i ene a zeta i ene a zeta i ene a zeta ia zeta i ene a zeta i ene a zeta a zeta i ene a zeta i ene a zeta i<br /> </span>
                            </ul>
                        </div>    
                    </div>
                
                </div>


            </div> */}
            
        </section>
        

        <section className="intersection">
            <div className="button-item">
                <div className="border-button">
                    <div className="button" >

                        <a href="/Projects" className="button-text">More Projects</a>


                        {/* <p href="/Projects" className="button-text> More Projects</p> */}

                    </div>
                </div>
            </div>
        </section>


                            {/* SKILLS */}
    <section className="skill">

        <div className="skill-title">
                <h2>Skills dashboard</h2>
        </div>

        <div className="skill-section">
            <div className="skill-list">

                <div className="skill-container">
                    <div className="skill-item">
                        <img src={html} className="skill-item--img" alt="" />
                    </div>
                    <p>HTML5</p>
                </div>

                <div className="skill-container">
                    <div className="skill-item">
                        <img src={css} className="skill-item--img" alt="" />
                    </div>
                    <p>CSS3</p>
                </div>

                <div className="skill-container">
                    <div className="skill-item">
                        <img src={webpack} className="skill-item--img" alt="" />
                    </div>
                    <p>Webpack</p>
                </div>

                <div className="skill-container">
                    <div className="skill-item">
                        <img src={sass} className="skill-item--img" alt="" />
                    </div>
                    <p>Sass</p>
                </div>
            
                <div className="skill-container">
                    <div className="skill-item">
                        <img src={js} className="skill-item--img" alt="" />
                    </div>
                    <p>JavaScript</p>
                </div>
            
                <div className="skill-container">
                    <div className="skill-item">
                        <img src={ts} className="skill-item--img" alt="" />
                    </div>
                    <p>TypeScript</p>
                </div>

                <div className="skill-container">
                    <div className="skill-item">
                        <img src={react} className="skill-item--img" alt="" />
                    </div>
                    <p>React JS</p>
                </div>

                <div className="skill-container">
                    <div className="skill-item">
                        <img src={node} className="skill-item--img" alt="" />
                    </div>
                    <p>Node JS</p>
                </div>

                <div className="skill-container">
                    <div className="skill-item">
                        <img src={git} className="skill-item--img" alt="" />
                    </div>
                    <p>Git</p>
                </div>

                <div className="skill-container">
                    <div className="skill-item">
                        <img src={github} className="skill-item--img" alt="" />
                    </div>
                    <p>GitHub</p>
                </div>


            </div>
        </div>
    </section>


        <Footer />

        </React.Fragment>

    );
}

export default Home;