// Footer.js
import React from 'react';
import './Footer.css';
import logo from '../../assets/scrum_logo.png';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-top'>
                <div className='footer-left'>
                    <div className = 'footer-logo'>
                        <img src = {logo} className = 'footer-logo-img'/>
                    </div>
                    <h1 className='footer-heading'>
                        Join the agile movement, <br/>right in the heart of Dubai
                    </h1>
                    <p className='footer-top-text'>
                        Scrumday Dubai, 2024
                    </p>
                </div>
                <div className='footer-right'>
                    <p className='footer-socials-heading'>
                        Follow us on
                    </p>
                    <div className='footer-socials-icons'>
                        <FaFacebook className = 'icon'/>
                        <FaInstagram className = 'icon'/>
                        <FaLinkedin className = 'icon'/>
                    </div>
                </div>
            </div>
            <div className='divider'></div>
            <div className='footer-bottom'>
                &copy; Scrumday Dubai '24
            </div>
        </div>
    );
}

export default Footer;
