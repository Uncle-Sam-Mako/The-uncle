import './index.scss';
import Logo from '../../assets/images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faUser, faEnvelope, faCode} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub, faTwitter, faFacebook} from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => {
    return (
        <div className="nav-bar">
            <Link className="logo" to='/'>
                <img src={Logo} alt="logo" />
                <p className="sub-logo">Uncle Sam</p>
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