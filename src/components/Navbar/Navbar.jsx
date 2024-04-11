import { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        // Get the navbar
        const navbar = document.getElementById("navbar");

        // Get the offset position of the navbar
        const sticky = navbar.offsetTop;

        // Function to handle scroll event
        function handleScroll() {
            if (window.pageYOffset >= sticky) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        }

        // Add event listener for scroll
        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures the effect runs only once

    return (
        <div className={`container ${isSticky ? 'sticky' : ''}`} id="navbar">
            <div className='left'>
                <div className='logo'>
                    Logo
                </div>
            </div>
            <div className='right'>
                <div className='exhibitors'>Exhibitors</div>
                <div className='schedule'>Schedule</div>
                <div className='faqs'>FAQs</div>
            </div>
        </div>
    )
}

export default Navbar
