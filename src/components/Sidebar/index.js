import './index.scss';
import React from 'react';
import Logo from '../../assets/images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faUser, faPhone, faCode} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'


// Sidebar component : Must take the states of its parent (Layout) in props.

const Sidebar = ({menuIsOpen, setMenuIsOpen}) => {

    // Add an event listener to each `#nav-bar a` tag
    // to toggle the menu when it is clicked
    document.addEventListener('click', e => {
        if (e.target.closest('#nav-bar')) {
            setMenuIsOpen(!menuIsOpen);
        }
    });
    
    

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
                     <FontAwesomeIcon icon={faPhone} color="#4d4d4e" ></FontAwesomeIcon>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="work-link" to="/work">
                     <FontAwesomeIcon icon={faCode} color="#4d4d4e" ></FontAwesomeIcon>
                </NavLink>
            </nav>
            <ul className='social_links'>
                <li>
                    <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/samuel-mako-0ab850187/">
                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href="https://github.com/Uncle-Sam-Mako">
                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href="https://twitter.com/SBwemere">
                        <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href="https://www.instagram.com/samuelmako/">
                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                    </a>
                </li>
            </ul>
        </div>
    )
}



export default Sidebar;