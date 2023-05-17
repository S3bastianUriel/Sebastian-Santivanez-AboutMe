import React from 'react';
import '@styles/Projects.scss';

// import user from '@icons/person-profile-user.png'
// import speak from '@icons/conversation.png'
// import localization from '@icons/localization.png'

import Footer from '@components/Footer';

//PROJECTS cover
// import tesla from '@projects/FXZ7cEeWYAIDM2d.png';
import e_commerce from '@projects/e_commerce3-cover.png';
import btsworld from '@projects/btsworld-cover.png';
import moviesapp from '@projects/Movies_&_TV_app.png';
import todolist from '@projects/ToDoList.png';
import nicolas from '@projects/nicolas_s.png';





// import linkedin from '@logos/linkedin.png';
// import github3 from '@logos/github-logo.png';
import dark_eye from '@logos/watch-dark-eye_icon.png';
// import eye from '@icons/eye.svg';
import github from '@icons/github.svg';


const AboutMe = () => {
    return (
        <React.Fragment>
            <section className="projects-page">
                <div className="projects-content">
                    
                    {/* <div className="projects-content--data">
                        <h2> <strong>Projects</strong>  </h2>
                        <p>I'm a <strong>Front End Developer</strong> with a Graphic Design background. I'm now pursuing the Web Development path, but I studied Graphic Design in college for two years, where I developed a strong aesthetic sense.</p>

                        <p>I'm a complete <strong>pixel perfect enthusiast</strong>, as I have a great attention to detail. I'm really passionate about technology and I enjoy being curious. Furthermore, I'm highly perfectionist yet versatile.</p>

                        <p>I'm fluent in both written and spoken English, as I've got a <strong>B2 English level.</strong></p>
                    </div>

                    <div className="projects-content--icons">
                        
                        <div className="projects-items">
                            <div className="projects-items--pic"> */}
                                {/* <img src={tesla} className=""></img> */}
                            {/* </div>
                            
                            <div className="projects-items--text">
                                <p>Sebastian Santivañez</p>
                            </div>

                        </div>

                
                  
                    </div> */}

                </div>
            </section>


                            {/* projectsS */}
        <section className="projects">
            <div className="projects-title--section">
                <h2>Projects dashboard</h2>
            </div>

            <div className="projects-list--container">

                <div className="projects-list--item ">

                        <div className="projects-cover">
                            <div className="projects-cover2">
                                <img src={e_commerce} className="projects-cover--img" />
                                <div className="projects-cover--details">

                                <a href="https://yardsale-sebastian.netlify.app"  target="_blank" >
                                    <img src={dark_eye} className="projects-cover--details---icon" />
                                </a>

                                <a href="https://github.com/S3bastianUriel/YardSale-ReactJS.git"  target="_blank" >
                                    <img src={github} className="projects-cover--details---icon" />
                                </a>

                                </div>
                            </div>
                        </div>

                        <div className="projects-list--text">
                            <p className="projects-type">E-commerce</p>
                            <p className="projects-name">Yard Sale</p>
                            <p className="projects-text">Fully responsive layout made with React and SCSS for the {/*all environment*/}project. In this project you can add products to the shopping cart, delete products, calculate the total value of the purchase. Every product is brought from a API.</p>
                            <div className="projects-stack">
                                <p>React Hooks</p>
                                <p>Sass</p>
                                <p>Webpack</p>
                                <p>API</p>
                                
                            </div>
                        </div>
                        {/* <div className="projectss-list--cover">
                        </div> */}
                </div>


                <div className="projects-list--item">

                        <div className="projects-cover">
                            <div className="projects-cover2">
                                <img src={moviesapp} className="projects-cover--img"></img>
                                <div className="projects-cover--details">
                                    <a href="https://s3bastianuriel.github.io/Movies-app-/"  target="_blank" >
                                        <img src={dark_eye} className="projects-cover--details---icon"></img>
                                    </a>
                                    <a href="https://github.com/S3bastianUriel/Movies-app-"  target="_blank" >
                                        <img src={github} className="projects-cover--details---icon"></img>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="projects-list--text projects-list--text---blockInfo---selfEnd">
                            <p className="projects-type">App</p>
                            <p className="projects-name" >Movies-App</p>
                            <p className="projects-text">A mobile responsive layout project made with JavaScript for the section of trending, categories, favorites along with the use of Local Storage. Every movie/serie is brought from a API.</p>
                            <div className="projects-stack projects-stack--blockInfo---selfEnd" >
                                <p>JavaScript</p>
                                <p>HTML</p>
                                <p>CSS</p>
                                <p>API</p>
                                
                            </div>
                        </div>
                        {/* <div className="projectss-list--cover">
                        </div> */}
                </div>

                <div className="projects-list--item">

                        <div className="projects-cover">
                            <div className="projects-cover2">
                                <img src={btsworld} className="projects-cover--img"></img>
                                <div className="projects-cover--details">
                                    <a href=""  target="_blank" >
                                        <img src={dark_eye} className="projects-cover--details---icon"></img>
                                    </a>
                                        
                                    <a href=""  target="_blank" >                                    
                                        <img src={github} className="projects-cover--details---icon"></img>
                                    </a>

                                </div>
                            </div>
                        </div>

                        <div className="projects-list--text">
                            <p className="projects-type">Website</p>
                            <p className="projects-name" >BTS World</p>
                            <p className="projects-text">A totally personalized website about BTS. Fully responsive layout made with React and SCSS for the interactions to the users.</p>
                            <div className="projects-stack">
                                <p>ReactJs</p>
                                <p>Sass</p>
                                <p>Webpack</p>
                                
                            </div>
                        </div>
                        {/* <div className="projectss-list--cover">
                        </div> */}
                </div>

                <div className="projects-list--item">

                        <div className="projects-cover">
                            <div className="projects-cover2">
                                <img src={todolist} className="projects-cover--img"></img>
                                <div className="projects-cover--details">
                                    <a href="https://the-t0-d0-list.netlify.app/"  target="_blank" >
                                        <img src={dark_eye} className="projects-cover--details---icon"></img>
                                    </a>
                                    <a href="https://github.com/S3bastianUriel/ToDoList"  target="_blank" >
                                        <img src={github} className="projects-cover--details---icon"></img>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="projects-list--text projects-list--text---blockInfo---selfEnd">
                            <p className="projects-type">Diary</p>
                            <p className="projects-name" >To Do List</p>
                            <p className="projects-text">A list about pending tasks that you can search tasks specifics or mark as completed and deleted it, along with the use of Local Storage.</p>
                            <div className="projects-stack projects-stack--blockInfo---selfEnd" >
                                <p>JavaScript</p>
                                <p>HTML</p>
                                <p>CSS</p>
                                
                            </div>
                        </div>
                        {/* <div className="projectss-list--cover">
                        </div> */}
                </div>


                <div className="projects-list--item">
                        <div className="projects-cover">
                            <div className="projects-cover2">
                                <img src={nicolas} className="projects-cover--img"></img>
                                <div className="projects-cover--details">
                                    <a href="https://nicolassantivanez.netlify.app/"  target="_blank" >
                                        <img src={dark_eye} className="projects-cover--details---icon"></img>
                                    </a>
                                    <a href="https://github.com/S3bastianUriel/Pagina-de-nico-"  target="_blank" >
                                        <img src={github} className="projects-cover--details---icon"></img>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="projects-list--text ">
                            <p className="projects-type">Landing Page</p>
                            <p className="projects-name" >Nicolas Santivañez</p>
                            <p className="projects-text">A personal website fully layout responsive made with React and SCSS</p>
                            <div className="projects-stack " >
                                <p>React</p>
                                <p>Webpack</p>
                                <p>Sass</p>
                                
                            </div>
                        </div>
                        {/* <div className="projectss-list--cover">
                        </div> */}
                </div>

                


                    
            </div>


            {/* <h2>Featured Proyects</h2>
            <div className="projects-section">

                <div className="projects-container">
                    <h2>BTS World</h2>

                    <div className="projects-item">
                        
                        <div className="projects-item--cover">
                            <img src={tesla} className="projects-item--cover---img" width="100%" alt=""   />
                            <div className="projects-item--cover---details">
                                <img src={github} className="projects-item--cover---details----img"></img>
                                <img src={dark_eye} className="projects-item--cover---details----img"></img>
                            </div>
                        </div>

                        <div className="projects-item--text">
                            <ul>
                                <span>Un website inspirado en el 
                                grupo surcoreano BTS ene a zeta i ene a zeta i ene a zeta i ene a zeta ia zeta i ene a zeta i ene a zeta a zeta i ene a zeta i ene a zeta i<br /> </span>
                            </ul>
                        </div>    
                    </div>
                
                </div>


            </div> */}
            

        </section>

          

            <Footer />

                
        </React.Fragment>
    );
}

export default AboutMe;