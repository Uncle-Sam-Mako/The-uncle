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
                        I am passionate about creating beautiful and functional websites tailored to my clients' needs. My work reflects my commitment to quality and attention to detail. Take a look at some of my recent projects and see for yourself!
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
                                    Wikifilm is a movie information search website made with HTML, SCSS, JS and powered by TMDB API. It offers an intuitive and easy-to-use interface to find information about movies. Results are sorted by genre, year of release and keywords for a more precise search. Wikifilm is a small website that offers complete and up-to-date information about movies, as well as reviews and recommendations. 
                             
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
                                    Inzu is a modern real estate website template that offers an easy and efficient way to find the perfect home. Users can quickly and easily browse thousands of properties in their area. From single family homes to luxury condos, Inzu has something for everyone. 
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
                                    This modern web portfolio template is built with ReactJS and designed to showcase your work in a sleek, professional way. With its intuitive design and easy-to-use features, you can quickly create an impressive online presence that will help you stand out from the crowd. Whether you're a freelancer, small business owner, or creative professional, this template will help you make a lasting impression.
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
                                    The Uncle is an interactive portfolio website designed to showcase the work of a creative professional. Built with HTML, CSS, and Reactjs, The Uncle provides an intuitive and engaging experience for visitors. From the homepage, users can explore the portfolio of projects and services offered by the creative professional.
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
                                    This template is a modern, responsive design built with HTML, CSS, and Bootstrap. It features a clean and minimalistic layout that is easy to navigate and looks great on any device. The template includes a header with navigation links, a hero image, and sections for content. It also includes a footer with social media links and copyright information. The code is well organized and commented for easy customization. This template is perfect for creating professional websites quickly and easily.
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