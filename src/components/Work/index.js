import Loader from 'react-loaders';
import wikifilm from '../../assets/images/wikifilm.png';
import rhoe from '../../assets/images/rhoe.png'
import the_uncle from '../../assets/images/the_uncle.png'
import inzu from '../../assets/images/inzu.png';
import uncle from '../../assets/images/uncle.png'
import { useEffect, useState } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useOutletContext } from 'react-router-dom';


const Work = () => {
    // useState hook to manage letterClass state 
    const [letterClass, setLetterClass] = useState('text-animate');

    // Get the SetPageTitle function from useOutletContext hook
    const [setPageTitle] = useOutletContext();

    // useEffect hook to change letterClass after certain time : 
    // We add the class 'text-animate-hover' to each letter after 3s
    useEffect(() => {

        // invoke setPageTitle function to update the page title
        setPageTitle('Uncle Sam | Look at My work')

        // After 3 seconds add text-animate-hover class to letter 
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
                            992 : {
                                perPage : 3
                            },
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
                                <img src={wikifilm} alt=""/>
                            </div>
                            <div className="project-text">
                                <h3 className="project-title">
                                    Wikifilm
                                </h3>
                                <p className="project-desc">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores debitis amet distinctio recusandae labore sequi rem doloremque dicta non illum!
                                </p>
                            </div>
                            <span className='view-project'>
                                <a target='_blank' rel="noreferrer" href="https://github.com/Uncle-Sam-Mako">View project</a>
                            </span>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="project-item">
                            <div className="project-img">
                                <img src={inzu} alt=""/>
                            </div>
                            <div className="project-text">
                                <h3 className="project-title">
                                    Inzu 
                                </h3>
                                <p className="project-desc">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores debitis amet distinctio recusandae labore sequi rem doloremque dicta non illum!
                                </p>
                            </div>
                            <span className='view-project'>
                                <a target='_blank' rel="noreferrer" href="https://github.com/Uncle-Sam-Mako">View project</a>
                            </span>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="project-item">
                            <div className="project-img">
                                <img src={uncle} alt=""/>
                            </div>
                            <div className="project-text">
                                <h3 className="project-title">
                                    Uncle Portofolio
                                </h3>
                                <p className="project-desc">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores debitis amet distinctio recusandae labore sequi rem doloremque dicta non illum!
                                </p>
                            </div>
                            <span className='view-project'>
                                <a target='_blank' rel="noreferrer" href="https://github.com/Uncle-Sam-Mako">View project</a>
                            </span>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="project-item">
                            <div className="project-img">
                                <img src={the_uncle} alt=""/>
                            </div>
                            <div className="project-text">
                                <h3 className="project-title">
                                    The Uncle
                                </h3>
                                <p className="project-desc">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores debitis amet distinctio recusandae labore sequi rem doloremque dicta non illum!
                                </p>
                            </div>
                            <span className='view-project'>
                                <a target='_blank' rel="noreferrer" href="https://github.com/Uncle-Sam-Mako">View project</a>
                            </span>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="project-item">
                            <div className="project-img">
                                <img src={rhoe} alt=""/>
                            </div>
                            <div className="project-text">
                                <h3 className="project-title">
                                    Rhoe
                                </h3>
                                <p className="project-desc">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores debitis amet distinctio recusandae labore sequi rem doloremque dicta non illum!
                                </p>
                            </div>
                            <span className='view-project'>
                                <a target='_blank' rel="noreferrer" href="https://github.com/Uncle-Sam-Mako">View project</a>
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