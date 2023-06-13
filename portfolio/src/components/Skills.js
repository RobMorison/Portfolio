import React from 'react';
import './Skills.css'

const Skills = () => {
    return ( 
        <>
        <h2>Skills</h2>
        <div className='skills'>
            <div className='languages'>
                <p>Languages:</p>
                <div className='grid-container'>
                        <div class='grid-item'>Python</div>
                        <div class='grid-item'>JavaScript</div>
                        <div class='grid-item'>HTML</div>
                        <div class='grid-item'>CSS</div>
                        <div class='grid-item'>SQL</div>
                </div>
            </div>
            <div>
                <p>Libraries & Frameworks</p>
                <div className='grid-container'>
                    <div class='grid-item'>Django Rest Framework</div>
                    <div class='grid-item'>React.js</div>
                    <div class='grid-item'>Bootstrap</div>
                    <div class='grid-item'>Third-Party APIs</div>
                </div>
            </div>
            <div>
                <p>Tools:</p>
                <div className='grid-container'>
                    <div class='grid-item'>Postman</div>
                    <div class='grid-item'>MySQL</div>
                    <div class='grid-item'>Visual Studio Code</div>
                    <div class='grid-item'>GitHub</div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Skills;