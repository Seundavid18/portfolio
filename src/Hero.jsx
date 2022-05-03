import React from "react";
import {BsEmojiSmile} from 'react-icons/bs'
import {AiOutlineDownload} from 'react-icons/ai'
import {Link} from 'react-router-dom'

function Hero() {
    return(
        <section className="pb-5" id="home">
            <div className="hero">
                <div className="container">
                    <div className="hero-padding">
                        <div className="text-white text-center">
                            <h1 className="pb-2">SEUN DAVID DEV</h1>
                            <h6 className="pb-5">Specialized in Front-end and Back-End development. <br /> If you're a business seeking a web presence or are looking <br /> to hire, contact me here</h6>
                            <div className="d-grid justify-content-center gap-4 d-lg-flex pt-4">
                                <button class="btn btn-light1" type="button"><a href="#contact" style={{textDecoration: 'none', color: '#400c7b'}}>Hire Me<span className="ps-3"><BsEmojiSmile size={20} /></span></a></button>
                                <button type="button" class="btn-outline-light1"><Link to="" style={{color: '#fff', textDecoration: 'none'}}>Download Cv<span className="ps-2"><AiOutlineDownload size={20} /></span></Link></button>
                            </div>                        
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;