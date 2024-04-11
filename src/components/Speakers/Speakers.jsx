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
        name: 'Jane Doe',
        img: p1,
        desc: '5-time TEDx Speaker'
    },
    {
        name: 'Joe Doe',
        img: p2,
        desc: '5-time TEDx Speaker'
    },
    {
        name: 'Max Filbert',
        img: p3,
        desc: '5-time TEDx Speaker'
    },
    {
        name: 'Ahmad Shah',
        img: p4,
        desc: '5-time TEDx Speaker'
    },
    {
        name: 'Karen Williby',
        img: p5,
        desc: '5-time TEDx Speaker'
    },
    {
        name: 'Suhaas Shah',
        img: p6,
        desc: '5-time TEDx Speaker'
    }
]
function Speakers() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    };


    return (
        <div className = 'speakers-container'>
            <div className = 'speakers-content'>
                <h1 className = 'speakers-heading'>Speaker Details</h1>
                <p className = 'speakers-text'>
                    Explore revolutionary ideas with the region's brightest minds
                    and immerse yourself in the event that will redefine your
                    vision of the agile world.
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
                            <p className = 'speaker-name'>{d.name}</p>
                            <p className = 'speaker-desc'>{d.desc}</p>
                        </div>
                    </div>
                ))}
                </Slider>
            </div>
        </div>
    )
}

export default Speakers
