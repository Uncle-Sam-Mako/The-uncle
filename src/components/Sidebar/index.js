import './index.scss';
import React, { useState } from 'react';
import Logo from '../../assets/images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faUser, faEnvelope, faCode, faBars} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub, faTwitter, faFacebook} from '@fortawesome/free-brands-svg-icons'


// Sidebar component : Must take the states of its parent (Layout) in props.

const Sidebar = ({menuIsOpen, setMenuIsOpen}) => {
    // Add an event listener to each `#nav-bar a` tag
    // to toggle the menue when it is clicked
    document.querySelectorAll("#nav-bar a").forEach(elt => {
        elt.addEventListener('click', () => {
            setMenuIsOpen(!menuIsOpen);
        })
    })
    

    // Return a div containing Links, NavLinks, and social media links
    return (
        <div id="nav-bar" className={`nav-bar ${ menuIsOpen ? "active" : "" }`}>
            <Link className="logo" to='/'>
                <img src={Logo} alt="logo" />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                     <FontAwesomeIcon icon={faHome} color="#4d4d4e" ></FontAwesomeIcon>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                     <FontAwesomeIcon icon={faUser} color="#4d4d4e" ></FontAwesomeIcon>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                     <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" ></FontAwesomeIcon>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="work-link" to="/work">
                     <FontAwesomeIcon icon={faCode} color="#4d4d4e" ></FontAwesomeIcon>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel='noreferrer' href="https://www.google.com">
                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href="https://www.google.com">
                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href="https://www.google.com">
                        <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href="https://www.google.com">
                        <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                    </a>
                </li>
            </ul>
        </div>
    )
}



export default Sidebar;