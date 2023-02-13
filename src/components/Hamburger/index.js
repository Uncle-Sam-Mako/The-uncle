import './index.scss'
import React, { useState } from 'react';

const HamburgerButton = ({menuIsOpen, setMenuIsOpen}) => {


    const handleClick = () => {
        setMenuIsOpen(!menuIsOpen);
        document.getElementById('hamburger-button').classList.toggle('open');
        document.getElementById('nav-bar').classList.toggle('active');
    };

    return (
        <div className="hamburger-container">
            <div id="hamburger-button" className="hamburger-button" onClick={handleClick}>
                <div className={menuIsOpen ? "line line1" : "line"} />
                <div className={menuIsOpen ? "line line2" : "line"} />
                <div className={menuIsOpen ? "line line3" : "line"} />
            </div>
        </div>
    )
}

export default HamburgerButton;

