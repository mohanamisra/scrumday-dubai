import { useState } from 'react'
import Hero from "./components/Hero/Hero.jsx";
import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx";
import About from "./components/About/About.jsx";
import Speakers from "./components/Speakers/Speakers.jsx";
function App() {

  return (
    <>
        <Hero/>
        <Navbar/>
        <About/>
        <Speakers/>
    </>
  )
}

export default App
