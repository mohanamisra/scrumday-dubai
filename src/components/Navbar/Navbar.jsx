import { useState, useEffect } from 'react'
import './Navbar.css'

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
                <div className='exhibitors'>Exhibitors</div>
                <div className='schedule'>Schedule</div>
                <div className='faqs'>FAQs</div>
            </div>
        </div>
    )
}

export default Navbar
