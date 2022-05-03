import React from "react";


function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-dark text-white sticky-top nav-color">
            <div class="container">
                <a class="navbar-brand fs-4 fw-bold" href="#home">SEUN-DAVID</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto">
                        <a class="nav-link text-white fs-6 fw-bold me-3" aria-current="page" href="#about">About Me</a>
                        <a class="nav-link text-white fs-6 fw-bold me-3" href="#services">Services</a>
                        <a class="nav-link text-white fs-6 fw-bold me-3" href="#portfolio">Portfolio</a>
                        <a class="nav-link text-white fs-6 fw-bold" href="#contact">Contact Me</a>
                    </div>
                </div>
            </div>
        </nav>
    ) 
}

export default Navbar; 