import './index.scss';
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import AnimatedLogo from '../AnimatedLogo';



const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef()
    
    const sendMail = (e) => {
        
        e.preventDefault();
        
        // these IDs from the previous steps
        emailjs.sendForm('service_vtvbp1l', 'template_saue0i7', refForm.current, 'X3nuAVol7mhODf1fU')
            .then(function() {
                alert('Message successfully sent!');
                window.location.reload(false)
            }, function(error) {
                alert('Failed to send the message');
            });
   
    }
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    })
    return (
        <>
            <div className="container contact-page">
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
            <Loader type="pacman"></Loader>
        </>
    )
}

export default Contact