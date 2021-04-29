import React from 'react'
import './Card.css'
import github from './icons/github.png';
import linkedin from './icons/linkedin.png';
import email from './icons/email.png';
import profile from './icons/profile.jpg';

export const Card = () => {
    return (
        <div id="card">
            <div><img id="profile" src={profile} alt="github logo" /></div>
            <div><h1>Airam</h1></div>
            <div><h2>Web Developer</h2></div>
            <div id="socialMedia">
                <a href="https://github.com/Earkh"><img src={github} alt="github logo" /></a>
                <a href="https://www.linkedin.com/in/airam-caraballo-santana/"><img src={linkedin} alt="linkedin logo" /></a>
                <a href="mailto:airam.dev@gmail.com"><img src={email} alt="email logo" /></a>
            </div>
        </div>
    )
}
