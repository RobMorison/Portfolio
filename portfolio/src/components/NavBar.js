import React from 'react';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';


const NavBar = () => {
    return ( 
    <>
        <header>
            <nav>
                <ul>
                    <a href="#home">
                        <li>Home</li>
                    </a>
                    <a href="#about">
                        <li>About</li>
                    </a>
                    <a href="#education">
                        <li>Education</li>
                    </a>
                    <a href="#skills">
                        <li>Skills</li>
                    </a>
                    <a href="projects">
                        <li>Projects</li>
                    </a>
                    <a href="#contact">
                        <li>Contact</li>
                    </a>
                </ul>
                <a href="https://www.linkedin.com/in/robert-morison"><img src={linkedin} alt='linkedin logo'></img></a>
                <a href="https://github.com/RobMorison"><img src={github} alt='github logo'></img></a>
            </nav>
        </header>
    </>
     );
}
 
export default NavBar;