import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters";
import './index.scss';
import Loader from 'react-loaders'
import homeImg from '../../assets/images/home_img.png'



const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['U','n','c','l','e',' ', 'S','a','m'];
    const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r'];

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    })
    
    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        {" "}
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/> <br />
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}/>

                    </h1>
                    <h2>Frontend Developer | Javascript Expert | Designer</h2>
                    <Link to="/contact" className="flat-button">CONTACT ME</Link>
                </div>
                <div className="home-img-container">
                    <div className="home-img">
                        <img src={homeImg} alt="My portfolio image" />
                    </div>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    )
}

export default Home;