import React from 'react';
import './Skills.css'

const Skills = () => {
    return ( 
        <>
        <h2>Skills</h2>
        <div className='skills'>
            <p>Languages:</p>
            <ul>
                <li>Python</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>SQL</li>
            </ul>
            <p>Libraries & Frameworks</p>
            <ul>
                <li>Django Rest Framework</li>
                <li>React.js</li>
                <li>Bootstrap</li>
                <li>Third-Party APIs</li>
            </ul>
            <p>Tools:</p>
            <ul>
                <li>Postman</li>
                <li>MySQL</li>
                <li>Visual Studio Code</li>
                <li>GitHub</li>
            </ul>
        </div>
        </>
     );
}
 
export default Skills;