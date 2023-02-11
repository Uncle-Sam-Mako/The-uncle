import './index.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'



const Hamburger = () => {
    return (
        <div className="hamburger-container">
            <button id="hamburger">
                <FontAwesomeIcon icon={faBars} color="#fff" ></FontAwesomeIcon>
            </button>
        </div>
    )
}

export default Hamburger;