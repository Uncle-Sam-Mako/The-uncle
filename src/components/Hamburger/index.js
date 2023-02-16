import './index.scss'
import React from 'react';



// Hamburger Button component : Must take the states of its parent (Layout) in props.
const HamburgerButton = ({menuIsOpen, setMenuIsOpen}) => {

    // This function toggles between open and closed for the hamburger menu
    const handleClick = () => {
        setMenuIsOpen(!menuIsOpen);
        document.getElementById('hamburger-button').classList.toggle('open');
        document.getElementById('nav-bar').classList.toggle('active');
    };

    return (
        <div className="hamburger-container">
            {/* This div handles the click event with handleClick() as it's callback. */}
            <div id="hamburger-button" className="hamburger-button" onClick={handleClick}> 
                <div className={menuIsOpen ? "line line1" : "line"} />
                <div className={menuIsOpen ? "line line2" : "line"} />
                <div className={menuIsOpen ? "line line3" : "line"} />
            </div>
        </div>
    )
}

export default HamburgerButton;


