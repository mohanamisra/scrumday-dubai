import { useState, useEffect } from 'react'
import './Speakers.css'
import p1 from '../../assets/p1.jpg'
import p2 from '../../assets/p2.jpg'
import p3 from '../../assets/p3.jpg'
import p4 from '../../assets/p4.jpg'
import p5 from '../../assets/p5.jpg'
import p6 from '../../assets/p6.jpg'
import Slider from "../Slider/Slider.jsx";

function Speakers() {
    const slides = [
        {face : p1,
        name: 'jane'},
        {face : p2,
        name: 'ahmad'},
        {face : p3,
        name: 'raul'},
        {face : p4,
        name: 'mary'},
        {face : p5,
        name: 'kane'},
        {face : p6,
        name: 'joe'},
    ]
    return (
        <div className = 'speakers-container'>
            <div className = 'speaker-content'>
                <h1 className = 'speaker-heading'>Speaker Details</h1>
                <p className = 'speaker-text'>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat."
                </p>
            </div>
            <div className = 'speaker-details'>
                <Slider slides = {slides}/>
            </div>
        </div>
    )
}

export default Speakers
