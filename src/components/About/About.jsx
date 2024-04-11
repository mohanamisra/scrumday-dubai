import { useState } from 'react'
import './About.css'
import dubaiImg from '../../assets/dubai.jpg'

function About() {

    return (
        <div className = 'about-container'>
            <div className = 'image'>
                <img src = {dubaiImg}/>
            </div>
            <div className = 'about-content'>
                <h1 className = 'heading'>
                    About Scrumday Dubai
                </h1>
                <div className = 'text'>

                </div>
            </div>
        </div>
    )
}

export default About
