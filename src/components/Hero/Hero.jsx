import { useState } from 'react'
import './Hero.css'
import heroVideo from '../../assets/heroVideo.mp4'

import Navbar from "../Navbar/Navbar.jsx";

function Hero() {

    return (
        <>
            <div className = 'hero'>
                <div className = 'overlay'></div>
                <video src = {heroVideo} autoPlay loop muted/>
                <div className = 'content'>
                    <h1 className = 'hero-heading'>Join Us At Scrumday Dubai</h1>
                    <p className = 'tagline'>Learning, Community, Innovation Reinvented</p>
                </div>
            </div>
        </>
    )
}

export default Hero
