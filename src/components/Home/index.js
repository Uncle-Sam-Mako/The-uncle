import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters";
import './index.scss';
import Loader from 'react-loaders'
import homeImg from '../../assets/images/home_img.png'



const Home = () => {
    // State hook to store the value of letterClass, which can be passed to a styled component as a prop
    const [letterClass, setLetterClass] = useState('text-animate');

    // Arrays to hold the values needed to render each letter of text.
    const nameArray = ['U','n','c','l','e',' ', 'S','a','m'];
    const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r'];

    // Run the setTimeout function to update letterClass with the value 'text-animate-hover'
    // This change will allow the component/text to interact with the hover animation 

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover') ;
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
                        <img src={homeImg} alt="The portfolio owner" />
                    </div>
                </div>
                
            </div>
            {/* The page loader */}
            <Loader type="pacman"/>
        </>
    )
}


export default Home;