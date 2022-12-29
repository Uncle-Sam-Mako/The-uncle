import { useState } from "react";
import { Link } from "react-router-dom";
import './index.scss';



const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm
                Uncle Sam
                <br />
                web developer
                </h1>
                <h2>Frontend Developer | Javascript Expert | Designer</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home;