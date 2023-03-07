import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faReact, faGitAlt, faHtml5, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { useOutletContext } from 'react-router-dom';

//This is the About component which requires a state variable letterClass
const About = () => {

    //initializes letterClass as text-animate
    const [letterClass, setLetterClass] = useState('text-animate');

    // Get the SetPageTitle function from useOutletContext hook
    const [setPageTitle] = useOutletContext() ;

    //useEffect runs after the component renders
    useEffect(() => {
        // invoke setPageTitle function to update the page title
        setPageTitle('Uncle Sam | About Me')

        // After 3 seconds add text-animate-hover class to letter 
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    });

    
    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass} 
                            strArray={['A','b','o','u','t',' ','m','e']}
                            idx={15}
                        />
                    </h1>
                    <p className='paragraph_1'>
                        I'm a web developer with a passion for creating innovative, user-friendly websites and applications. With over 5 years of experience in the field, I have developed a wide range of websites and applications using HTML, CSS, JavaScript, Python, ReactJS, PostgreSQL and other web technologies.                     
                    </p>
                    <p className='paragraph_2'>
                        I am highly organized and detail-oriented with excellent problem solving skills. My goal is to create websites that are both visually appealing and functionally sound. 
                    </p>
                    <p className='paragraph_3'>
                        I strive to stay up to date with the latest web development trends and technologies in order to provide my clients with the best possible solutions.
                    </p>
                </div>
                <div className="stage-cube-container">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>    
                        <div className="face6">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                    </div>
                </div>
            </div>

        </>
        
    )
};

export default About;