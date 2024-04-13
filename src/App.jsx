import {useState, useEffect, useRef} from "react";
import Hero from "./components/Hero/Hero.jsx";
import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx";
import About from "./components/About/About.jsx";
import Speakers from "./components/Speakers/Speakers.jsx";
import Schedule from "./components/Schedule/Schedule.jsx";
import FAQs from "./components/FAQs/FAQs.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
    const myCursor = useRef(null);
    const handleMove = (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        myCursor.current.style.top = `${posY}px`
        myCursor.current.style.left = `${posX}px`
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMove);

        return () => {
            window.addEventListener('mousemove', handleMove)
        }
    }, [])


    return (
        <>
            <div className='cursor' ref = {myCursor}></div>
            <Hero/>
            <Navbar/>
            <About/>
            <Speakers/>
            <Schedule/>
            <FAQs/>
            <Footer/>
        </>
    )
}

export default App