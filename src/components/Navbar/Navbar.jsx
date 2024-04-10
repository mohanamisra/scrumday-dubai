import { useState } from 'react'
import './Navbar.css'

function Navbar() {

    return (
        <div className = 'container'>
            <div className='left'>
                <div className='logo'>
                    <img src = '../../assets/logo.svg'/>
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
