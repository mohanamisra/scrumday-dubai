import { useState } from 'react'
import './About.css'
import dubaiImg from '../../assets/dubai.jpg'

function About() {

    return (
        <div className = 'about-container'>
            <div className = 'image'>
                <img src = {dubaiImg}/>
            </div>
            <div className='about-content'>
                <h1 className='heading'>
                    About Scrumday Dubai
                </h1>
                <p className='text'>
                    A space dedicated to the region's agile software and digital
                    product development community - <span className = 'bold-text'>now in Dubai!</span>
                <br/>
                <br/>
                    We come together to share experiences, teach, learn and build
                    relationships in a self-organized, non-profit environment.
                <br/>
                <br/>
                    Join us for an amazing learning experience like no other!
                </p>

            </div>
        </div>
    )
}

export default About
