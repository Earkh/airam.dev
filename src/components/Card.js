import React from 'react'
import github from './icons/github.png';
import linkedin from './icons/linkedin.png';
import email from './icons/email.png';
import profile from './icons/profile.jpg';

export const Card = () => {
    return (
        <div className="flex flex-wrap md:flex-nowrap shadow-lg mx-2 max-w-2xl bg-white rounded-md">
            <div><img src={profile} alt="github logo" className="w-50 h-auto p-2 rounded-xl" /></div>
            <div className="p-5 my-auto space-y-6">
                <div><h1 className="text-3xl font-semibold text-gray-800">Airam</h1></div>
                <div><h2 className="text-2xl text-gray-600 mt-2">FrontEnd Developer</h2></div>
                <div><p className="text-xl text-gray-400 mt-2">Currently working with Angular and Ionic</p></div>
                <div className="grid grid-cols-3 gap-4 mt-5">
                    <a href="https://github.com/Earkh" className="hover:shadow-2xl"><img src={github} alt="github logo" /></a>
                    <a href="https://www.linkedin.com/in/airam-caraballo-santana/" className="hover:shadow-2xl"><img src={linkedin} alt="linkedin logo" /></a>
                    <a href="mailto:airam.dev@gmail.com" className="hover:shadow-2xl"><img src={email} alt="email logo" /></a>
                </div>
            </div>
        </div>
    )
}

