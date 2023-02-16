import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faReact, faGitAlt, faHtml5, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
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
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum voluptate blanditiis maiores animi delectus itaque distinctio temporibus voluptatem, unde velit pariatur aut nostrum impedit quisquam eveniet dolore laudantium commodi fuga?
                    </p>
                    <p className='paragraph_2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque veniam dignissimos est, corporis ab magni id dolores minus, ipsum amet magnam, tempora reprehenderit! Doloremque modi quasi beatae corporis, ut alias.
                    </p>
                    <p className='paragraph_3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque veniam dignissimos est, corporis. modi quasi beatae corporis, ut alias.
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
            {/* The page loader */}
            <Loader type="pacman"/>
        </>
        
    )
};

export default About;