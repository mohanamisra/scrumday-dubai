import { useState } from 'react'
import './Hero.css'
import heroVideo from '../assets/scrumday-hero-video.mp4'

function Hero() {

    return (
        <div className = 'hero'>
            <video src = {heroVideo} autoPlay loop muted/>
        </div>
    )
}

export default Hero
