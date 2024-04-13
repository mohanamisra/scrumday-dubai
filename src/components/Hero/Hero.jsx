import {useEffect} from "react";
import './Hero.css'
import heroVideo from '../../assets/heroVideo.mp4'
import {gsap} from "gsap";
import SplitType from "split-type";

function Hero() {

    useEffect(() => {
        const heroText = new SplitType('h1.hero-heading', {types: 'words'});
        const words = heroText.words;

        gsap.fromTo(
            words,
            {
                y: 100,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.05,
                duration: 2,
                ease: 'power4.out',
            }
        )

    }, [])

    return (
        <>
            <div className = 'hero'>
                <div className = 'overlay'></div>
                <video src = {heroVideo} autoPlay loop muted/>
                <div className = 'content'>
                    <h1 className = 'hero-heading'>Join Us At Scrumday Dubai</h1>
                    <p className = 'tagline'>Where Collaboration meets Innovation</p>
                </div>
            </div>
        </>
    )
}

export default Hero
