import { useState } from 'react'
import './Hero.css'
import heroVideo from '../../assets/scrumday-hero-video.mp4'

import Navbar from "../Navbar/Navbar.jsx";

function Hero() {

    return (
        <>
            <div className = 'hero'>
                <div className = 'overlay'></div>
                <video src = {heroVideo} autoPlay loop muted/>
                <div className = 'content'>
                    <h1>Hello world</h1>
                    <p>Scrumday Dubai</p>
                </div>
            </div>
        </>
    )
}

export default Hero
