import Loader from 'react-loaders';
import Airbnb from '../../assets/images/airbnb.jpg';
import Facebook from '../../assets/images/facebook.jpg'
import Vinted from '../../assets/images/vinted.png'
import Uber from '../../assets/images/uber.png';
import Tripadvisor from '../../assets/images/trip-advisor.jpg'
import { useEffect, useRef, useState } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const Work = () => {
    // useState hook to manage letterClass state 
    const [letterClass, setLetterClass] = useState('text-animate');

    // useEffect hook to change letterClass after certain time : 
    // We add the class 'text-animate-hover' to each letter after 3s
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    })

    return (
        <>
            <div className='container work-page'>
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                        // props for the components that feature animation 
                        letterClass={letterClass}
                        strArray={['M','y',' ','w','o','r','k']}
                        idx={15}
                        />
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi in, maxime totam reprehenderit facere soluta esse. Explicabo hic ab, autem nobis commodi incidunt voluptatem eaque?
                    </p>
                </div>
                <div className="projects-container">
                {/* using Splide to feature a carousel of projects */}
                <Splide
                    options={ {
                        rewind: false,
                        width : '100%',
                        gap   : '1rem',
                        type   : 'loop',
                        perPage: 4, 
                        perMove : 1 ,
                        pagination : false,
                        breakpoints : {
                            640 : {
                                perPage : 2
                            }
                        }
                    } }
                    >
                    {/* slide item with project info and a link to view more */}
                    <SplideSlide>
                        <div className="project-item">
                            <div className="project-img">
                                <img src={Airbnb} alt=""/>
                            </div>
                            <div className="project-text">
                                <h3 className="project-title">
                                    Airbnb
                                </h3>
                                <p className="project-desc">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores debitis amet distinctio recusandae labore sequi rem doloremque dicta non illum!
                                </p>
                            </div>
                            <span className='view-project'>
                                <a target='_blank' href="https://github.com/Uncle-Sam-Mako">View project</a>
                            </span>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="project-item">
                            <div className="project-img">
                                <img src={Uber} alt=""/>
                            </div>
                            <div className="project-text">
                                <h3 className="project-title">
                                    Uber Eats
                                </h3>
                                <p className="project-desc">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores debitis amet distinctio recusandae labore sequi rem doloremque dicta non illum!
                                </p>
                            </div>
                            <span className='view-project'>
                                <a target='_blank' href="https://github.com/Uncle-Sam-Mako">View project</a>
                            </span>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="project-item">
                            <div className="project-img">
                                <img src={Tripadvisor} alt=""/>
                            </div>
                            <div className="project-text">
                                <h3 className="project-title">
                                    Trip advisor
                                </h3>
                                <p className="project-desc">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores debitis amet distinctio recusandae labore sequi rem doloremque dicta non illum!
                                </p>
                            </div>
                            <span className='view-project'>
                                <a target='_blank' href="https://github.com/Uncle-Sam-Mako">View project</a>
                            </span>
                        </div>
                    </SplideSlide>
                </Splide>
                    
                </div>
            </div>
            {/* Loader from react-loaders*/}
            <Loader type="pacman"/>
        </>
    )
}

export default Work;