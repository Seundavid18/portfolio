import React from "react";
import {AiOutlineGithub} from "react-icons/ai";
import {AiFillLinkedin} from 'react-icons/ai';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';

function Footer() {
    return(
        <div>
            <footer>
                <div className="footer">
                    <div className="pt-3">
                        <a href="https://github.com/Seundavid18" target="blank"><AiOutlineGithub size={45} className="me-2" color="#bebebe"/></a>
                        <a href="https://www.linkedin.com/in/david-oyewumi-498504137" target="blank"><AiFillLinkedin size={45} className="me-2" color="#bebebe"/></a>
                        <a href="https://twitter.com/iam_seundavid" target="blank"><AiOutlineTwitter size={45} className="me-2" color="#bebebe"/></a>
                        <a href="https://www.instagram.com/seundavid_dev/" target="blank"><AiOutlineInstagram size={45} className="me-2" color="#bebebe"/></a>
                    </div>
                </div>
                <div className="footer-copy">
                    <h6 className="fs-6 text-center pt-3">&copy; Copyright 2022. All rights reserved by Seun-David</h6>
                </div>
            </footer>
        </div>
    )
}

  
  export default Footer;
