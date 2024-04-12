import { useState, useEffect } from 'react'
import './Navbar.css'
import Speakers from "../Speakers/Speakers.jsx";

function Navbar() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const navbar = document.getElementById("navbar");

        const sticky = navbar.offsetTop;

        function handleScroll() {
            if (window.pageYOffset >= sticky) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`container ${isSticky ? 'sticky' : ''}`} id="navbar">
            <div className='left'>
                <div className='logo'>
                    Logo
                </div>
            </div>
            <div className='right'>
                <div className='speakers'><a href = '#speakers'>Speakers</a></div>
                <div className='schedule'><a href = '#schedule'>Schedule</a></div>
                <div className='faqs'><a href = '#faqs'>FAQs</a></div>
            </div>
        </div>
    )
}

export default Navbar
