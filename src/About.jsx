import React, {useEffect, useState} from "react";
import {HiOutlineMail} from 'react-icons/hi'
import {BiPhoneCall} from 'react-icons/bi'


const About = () => {

   

    // const [scroll, setScroll] = useState ()
    
        
    //         setTimeout(function(){
    //             window.onscroll = function (){
    //                 const newScroll = {
    //                     opacity: 1,
    //                 }
    //                 setScroll(newScroll)
    //             }
    //         }, 3000)   
        
    
    
       
    

    return(
        <section className="pt-5 pb-5 bg-white" id="about">
            <div className="container">
                <h1 className="text-center fs-2 fw-bold about-header pt-4">About Me</h1>
                <div className="d-lg-flex flex-nowrap gap-3 pt-5">
                    <div className="about-flex">
                        <h4 className="fs-5">Hello! I'm Seun David</h4>
                        <h6 className="about-font fs-6">I am a Full stack developer, fluent in English and specialized in web development.
                        I have a great passion on designing and always love to create a new web project. Thus i am a highly skilled, enthusiastic, self-motivated Full stack developer able to do any kind of work in web designing and development. I have developed few websites and my clients are satisfied. My goal when working with a client is to bring the client’s tasks, wants and imaginations to life. I am efficient and try to keep up to date also upgrade my skills. 
                        I use the best ways and tools to satisfy my clients imaginations. <br />
                        
                        UI/UX (wireframe, mock-up and prototyping) <br />
                        Wordpress, create and customize any commercial theme. <br />
                        Web programming, web development: frontend and backend <br />
                        Adobe creative suites such as XD, Illustrator. <br />
                        HTML, CSS, Bootstrap, Javascript, React, Node.js, Express.js and more....
                        </h6>
                        <div className="d-lg-flex flex-nowrap gap-3 pt-2">
                            <h6 className="about-font1 fs-6"><span style={{color: '#400c7b'}}><HiOutlineMail /></span> Email: oyewumidavid84@gmail.com</h6>
                            <h6 className="about-font1 fs-6"><span style={{color: '#400c7b'}}><BiPhoneCall /></span> Phone Number: 09059630747</h6>
                        </div>
                    </div>
                    <div className="about-flex">
                        <div className="skill-image">
                            <div className="skill-image-overlay">
                                <h6>
                                    HTML, CSS, Bootstrap, Javascript, React, Node.js, Express.js and more....
                                </h6>

                                        <div className="bar pt-3 pb-3">
                                            <div className="info">
                                                <h5 style={{fontSize: '14px'}}>HTML
                                                    <span className="float-end">90%</span>
                                                </h5>
                                            </div>
                                            <div className="progress-line1"><span className="html"></span></div>
                                        </div>   

                                        <div className="bar pt-3 pb-3">
                                            <div className="info">
                                                <h5 style={{fontSize: '14px'}}>CSS
                                                    <span className="float-end">85%</span>
                                                </h5>
                                            </div>
                                            <div className="progress-line2"><span className="css"></span></div>
                                        </div>   

                                        <div className="bar pt-3 pb-3">
                                            <div className="info">
                                                <h5 style={{fontSize: '14px'}}>JAVASCRIPT
                                                    <span className="float-end">80%</span>
                                                </h5>
                                            </div>
                                            <div className="progress-line3"><span className="javascript"></span></div>
                                        </div>   

                                        <div className="bar pt-3 pb-3">
                                            <div className="info">
                                                <h5 style={{fontSize: '14px'}}>REACT JS
                                                    <span className="float-end">85%</span>
                                                </h5>
                                            </div>
                                            <div className="progress-line4"><span className="react"></span></div>
                                        </div>   

                                        <div className="bar pt-3 pb-3">
                                            <div className="info">
                                                <h5 style={{fontSize: '14px'}}>UI/UX
                                                    <span className="float-end">75%</span>
                                                </h5>
                                            </div>
                                            <div className="progress-line5"><span className="ui-ux"></span></div>
                                        </div>   

                                        <div className="bar pt-3 pb-3">
                                            <div className="info">
                                                <h5 style={{fontSize: '14px'}}>WORDPRESS
                                                    <span className="float-end">81%</span>
                                                </h5>
                                            </div>
                                            <div className="progress-line6"><span className="wordpress"></span></div>
                                        </div>   

                                        <div className="bar pt-3 pb-3">
                                            <div className="info">
                                                <h5 style={{fontSize: '14px'}}>NODE JS
                                                    <span className="float-end">73%</span>
                                                </h5>
                                            </div>
                                            <div className="progress-line7"><span className="node"></span></div>
                                        </div>   

                                        <div className="bar pt-3 pb-3">
                                            <div className="info">
                                                <h5 style={{fontSize: '14px'}}>EXPRESS JS
                                                    <span className="float-end">75%</span>
                                                </h5>
                                            </div>
                                            <div className="progress-line8"><span className="express"></span></div>
                                        </div>   
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;