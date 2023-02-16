import './index.scss';
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import AnimatedLogo from '../AnimatedLogo';
import { useOutletContext } from 'react-router-dom';


const Contact = () => {

    // Declare a state called letterClass, which will store the string 'text-animate'
    const [letterClass, setLetterClass] = useState('text-animate');
    
    // Get the SetPageTitle function from useOutletContext hook
    const [setPageTitle] = useOutletContext();

    // Create a reference to the form element
    const refForm = useRef();

    // handle contact form submit action
    const sendMail = (e) => {
        e.preventDefault();

        // use emailjs.sendForm() to send the contact form data
        emailjs.sendForm('service_vtvbp1l', 'template_saue0i7', refForm.current, 'X3nuAVol7mhODf1fU')

            // show alert when message has been sent
            .then(function() {
                alert('Message successfully sent!');
                window.location.reload(false)
            }, 

            // show alert if sent failed
            function(error) {
                alert('Failed to send the message');
            });
    }

    //useEffect runs after the component renders
    useEffect(() => {
        // invoke setPageTitle function to update the page title
        setPageTitle('Uncle Sam | Contact Me')

        // After 3 seconds add text-animate-hover class to letter 
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    })


// Render component with container class of contact-page
return (
    <>
        <div className="container contact-page">
            {/* Render text-zone section with heading containing component AnimatedLetters which contains strArray and index set */}
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['C','o','n','t','a','c','t',' ','m','e']}
                        idx={15}
                        />
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi in, maxime totam reprehenderit facere soluta esse. Explicabo hic ab, autem nobis commodi incidunt voluptatem eaque?
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendMail}>
                            <ul>
                                <span className="group">
                                <li className='half'>
                                    <input type="text" name="name" placeholder='Name' required/>
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder='Email' required/>
                                </li>
                                </span>
                                <li className=''>
                                    <input type="text" name="subject" placeholder='Subject' required/>
                                </li>
                                <li>
                                    <textarea placeholder='Message' name="message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" value="Submit" className='flat-button' />
                                </li>
                            </ul> 
                        </form>
                    </div>
                </div>
                <div className="animated-logo">
                    <AnimatedLogo></AnimatedLogo>
                </div>
            </div>
            {/* THe page loader */}
            <Loader type="pacman"></Loader>
        </>
    )
}

export default Contact