import React from "react";
import Todo from './Images/Todo - Google Chrome 2_27_2022 12_07_43 PM.png'
import News from './Images/newss.PNG'
import Auth from './Images/Auth.PNG'
import Toc from './Images/Toc.PNG'
import {FaHtml5} from 'react-icons/fa'
import {FaCss3Alt} from 'react-icons/fa'
import {FaBootstrap} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {GrReactjs} from 'react-icons/gr'
import {Link} from 'react-router-dom'

const Portfolio = () => {
    return(
        <section className="pt-5 pb-5" id="portfolio">
            <div className="container">
                <h1 className="text-center fs-2 fw-bold about-header pt-4 pb-4">My Portfolio</h1>
                <div className="d-lg-flex flex-nowrap gap-5 pt-5 pb-5">
                    <div className="about-flex">
                        <img src={Todo} alt="" style={{width: '100%', height: '100%'}} />
                    </div>
                    <div className="about-flex">
                        <div className="container">
                            <h4 className="fs-4 fw-bold pt-5 pb-3">To-do Web Application</h4>
                            <h6 className="portfolio-font pb-2">A web application that enables you add your To-do lists and allows you track your progress.</h6>
                            <div style={{display: "flex", flexDirection: "row", justifyCcontent: "center", paddingTop: "5px", paddingBottom: '45px'}}>
                                <div><FaHtml5 className="me-3" color="#e34c26" size={20}/></div>
                                <div><FaCss3Alt className="me-3" color="#264de4" size={20}/></div>
                                <div><FaBootstrap className="me-3" color="#563d7c" size={20}/></div>
                                <div><IoLogoJavascript color=" #f0db4f" size={20}/></div>
                            </div>
                            <button type="button" className="btn btn-outline-light2"><a href="https://seuntodo.netlify.app" target="blank" className="ms-0" style={{textDecoration: 'none', color: '#400c7b', border: '1px solid #400c7b', padding: '12px 20px', borderRadius: '30px', fontWeight: '500'}}>Visit site</a></button>
                        </div>
                    </div>
                </div>
            </div>
            <hr />

            <div className="container">
                <div className="d-lg-flex flex-nowrap gap-5 pt-5 pb-5">
                    <div className="about-flex">
                        <img src={News} alt="" style={{width: '100%', height: '100%'}} />
                    </div>
                    <div className="about-flex">
                        <div className="container">
                            <h4 className="fs-4 fw-bold pt-5 pb-3">News Aggregator</h4>
                            <h6 className="portfolio-font pb-2">A web application that deploys latest news to the news feed from a news api for your consumption.</h6>
                            <div style={{display: "flex", flexDirection: "row", justifyCcontent: "center", paddingTop: "5px", paddingBottom: '45px'}}>
                                <div><GrReactjs className="me-3" color="#61dbfb" size={20}/></div>
                                <div><FaBootstrap className="me-3" color="#563d7c" size={20}/></div>
                                <div><IoLogoJavascript color=" #f0db4f" size={20}/></div>
                            </div>
                            <button type="button" class="btn btn-outline-light2"><a href="https://seundavidnews.netlify.app" target="blank" style={{textDecoration: 'none', color: '#400c7b', border: '1px solid #400c7b', padding: '12px 20px', borderRadius: '30px', fontWeight: '500'}}>Visit site</a></button>
                        </div>
                    </div>
                </div>
            </div>
            <hr />

            <div className="container">
                <div className="d-lg-flex flex-nowrap gap-5 pt-5 pb-5">
                    <div className="about-flex">
                        <img src={Auth} alt="" style={{width: '100%', height: '100%'}} />
                    </div>
                    <div className="about-flex">
                        <div className="container">
                            <h4 className="fs-4 fw-bold pt-5 pb-3">Authentication Application</h4>
                            <h6 className="portfolio-font pb-2">This is a simple Authentication and Authorization log in and log out web application.</h6>
                            <div style={{display: "flex", flexDirection: "row", justifyCcontent: "center", paddingTop: "5px", paddingBottom: '45px'}}>
                                <div><GrReactjs className="me-3" color="#61dbfb" size={20}/></div>
                                <div><FaBootstrap className="me-3" color="#563d7c" size={20}/></div>
                                <div><IoLogoJavascript color=" #f0db4f" size={20}/></div>
                            </div>
                            <button type="button" class="btn btn-outline-light2"><a href="https://seunauthapp.netlify.app" target="blank" style={{textDecoration: 'none', color: '#400c7b', border: '1px solid #400c7b', padding: '12px 20px', borderRadius: '30px', fontWeight: '500'}}>Visit site</a></button>
                        </div>
                    </div>
                </div>
            </div>
            <hr />

            <div className="container">
                <div className="d-lg-flex flex-nowrap gap-5 pt-5 pb-5">
                    <div className="about-flex">
                        <img src={Toc} alt="" style={{width: '100%', height: '100%'}} />
                    </div>
                    <div className="about-flex">
                        <div className="container">
                            <h4 className="fs-4 fw-bold pt-5 pb-3">An Auditing Company Website</h4>
                            <h6 className="portfolio-font pb-2">This is a websites for an accounting/auditing company</h6>
                            <div style={{display: "flex", flexDirection: "row", justifyCcontent: "center", paddingTop: "5px", paddingBottom: '45px'}}>
                                <div><FaHtml5 className="me-3" color="#e34c26" size={20}/></div>
                                <div><FaCss3Alt className="me-3" color="#264de4" size={20}/></div>
                                <div><FaBootstrap className="me-3" color="#563d7c" size={20}/></div>
                                <div><IoLogoJavascript color=" #f0db4f" size={20}/></div>
                            </div>
                            <button type="button" class="btn btn-outline-light2"><a href="https://www.tocprofessionals.com" target="blank" style={{textDecoration: 'none', color: '#400c7b', border: '1px solid #400c7b', padding: '12px 20px', borderRadius: '30px', fontWeight: '500'}}>Visit site</a></button>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </section>
    )
}

export default Portfolio;