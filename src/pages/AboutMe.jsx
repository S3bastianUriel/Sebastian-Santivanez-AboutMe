import React from 'react';
import '@styles/AboutMe.scss';

import user from '@icons/person-profile-user.png'
import speak from '@icons/conversation.png'
import localization from '@icons/localization.png'

import Footer from '@components/Footer';

const AboutMe = () => {
    return (
        <React.Fragment>
            <section className="aboutme-page">
                <div className="aboutme-content">
                    
                    <div className="aboutme-contents--data">
                        <h2>About Me</h2>
                        <p>I'm a <strong>Front End Developer</strong> with a Graphic Design background. I'm now pursuing the Web Development path, but I studied Graphic Design in college for two years, where I developed a strong aesthetic sense.</p>

                        <p>I'm a complete <strong>pixel perfect enthusiast</strong>, as I have a great attention to detail. I'm really passionate about technology and I enjoy being curious. Furthermore, I'm highly perfectionist yet versatile.</p>

                        <p>I'm fluent in both written and spoken English, as I've got a <strong>B2 English level.</strong></p>
                    </div>

                    <div className="aboutme-content--icons">
                        
                        <div className="aboutme-items">
                            <div className="aboutme-items--pic">
                                <img src={user} className=""></img>
                            </div>
                            
                            <div className="aboutme-items--text">
                                <p>Sebastian Santivañez,<br/> 22 Years old.</p>
                            </div>
                        </div>

                        <div className="aboutme-items">
                            <div className="aboutme-items--pic">
                                <img src={speak} className=""></img>
                            </div>
                            
                            <div className="aboutme-items--text">
                                <p>Spanish & English.</p>
                            </div>

                        </div>

                        <div className="aboutme-items">
                            <div className="aboutme-items--pic">
                                <img src={localization} className=""></img>
                            </div>
                            
                            <div className="aboutme-items--text">
                                <p>Buenos Aires, Argentina.</p>
                            </div>

                        </div>

                    </div>
                </div>
            </section>




            <section className="aboutme-list">
                <div className="aboutme-list--container">
                {/* <div className="aboutme-list--container2"> */}
                    <div className="aboutme-list--item">
                        <h2>Education</h2>

                        <div className="aboutme-list--articule">
                            <h4>Full Stack Developer con JavaScript</h4>
                            <span>Platzi</span>
                            <p>Jan 2022 - Present</p>
                        </div>

                        <div className="aboutme-list--articule">
                            <h4>Platzi English Academy</h4>
                            <span>Platzi</span>
                            <p>Oct 2021 - Present</p>
                        </div>
                    </div>

                    {/* <div className="aboutme-list--item">
                        <h2>Work</h2>

                        <div className="aboutme-list--articule">
                            <p>CARRERA</p>
                            <span>Scholl</span>
                            <p>Time</p>
                        </div>
                    
                    </div> */}


                    {/* </div> */}
                </div>
            </section>


            {/* <footer id="footer"> */}
            {/* <!--Waves Container start--> */}
                {/* <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g class="parallax">
                        <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(145, 145, 145, 0.1)" />
                        <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(145, 145, 145, 0.1)" />
                        <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(145, 145, 145, 0.1)" />
                        <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(145, 145, 145, 0.1)" /> */}
                        {/* <!-- <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                        <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                        <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                        <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" /> --> */}
                    {/* </g>
                </svg>
            </footer> */}

            <Footer />

        </React.Fragment>
    );
}

export default AboutMe;