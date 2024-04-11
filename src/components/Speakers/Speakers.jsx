import { useState, useEffect } from 'react'
import './Speakers.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import p1 from '../../assets/p1.jpg'
import p2 from '../../assets/p2.jpg'
import p3 from '../../assets/p3.jpg'
import p4 from '../../assets/p4.jpg'
import p5 from '../../assets/p5.jpg'
import p6 from '../../assets/p6.jpg'

const slides = [
    {
        name: 'Jane',
        img: p1,
        desc: '5-time TEDx Speaker'
    },
    {
        name: 'Joe',
        img: p2,
        desc: '5-time TEDx Speaker'
    },
    {
        name: 'Max',
        img: p3,
        desc: '5-time TEDx Speaker'
    },
    {
        name: 'Karen',
        img: p4,
        desc: '5-time TEDx Speaker'
    },
    {
        name: 'Ahmad',
        img: p5,
        desc: '5-time TEDx Speaker'
    },
    {
        name: 'Shah',
        img: p6,
        desc: '5-time TEDx Speaker'
    }
]
function Speakers() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };


    return (
        <div className = 'speakers-container'>
            <div className = 'speakers-content'>
                <h1 className = 'speakers-heading'>Speaker Details</h1>
                <p className = 'speakers-text'>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat."
                </p>
            </div>
            <div className = 'speakers-details'>
                <Slider {...settings}>
                {slides.map((d, i) => (
                    <div className = 'card' key = {i}>
                        <div>
                            <img src = {d.img} alt = ''/>
                        </div>
                        <div className = 'desc'>
                            <p>{d.name}</p>
                            <p>{d.desc}</p>
                        </div>
                    </div>
                ))}
                </Slider>
            </div>
        </div>
    )
}

export default Speakers