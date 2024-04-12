import {useState, useEffect} from "react";
import Hero from "./components/Hero/Hero.jsx";
import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx";
import About from "./components/About/About.jsx";
import Speakers from "./components/Speakers/Speakers.jsx";
import Schedule from "./components/Schedule/Schedule.jsx";
import FAQs from "./components/FAQs/FAQs.jsx";
function App() {

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    })
    return (
    <>
        <Hero/>
        <Navbar/>
        <About/>
        <Speakers/>
        <Schedule/>
        <FAQs/>
        <div className = 'cursor'></div>
    </>
  )
}

export default App
