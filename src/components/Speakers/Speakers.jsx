import { useState, useEffect } from 'react'
import './Speakers.css'
function Speakers() {

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
            </div>
        </div>
    )
}

export default Speakers
