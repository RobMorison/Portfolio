import React from 'react';
import devcodecamp from '../assets/devcodecamp.png';
import ccsu from '../assets/ccsu.png';
import './Education.css'

const Education = () => {
    return ( 
        <>
        <h2>Education</h2>
        <div className='education'>
            <img src={devcodecamp} alt='devcodecamp logo'></img>
            <p>devCodeCamp</p>
            <p>Full Stack Software Development | 2022-2023</p>
            <p>A 20-week, project based coding bootcamp focused on computer science concepts,
                building real-world full-stack applications.  This course focused on building 
                building qualified job candidates by teaching and applying concepts in a project
                form, allowing students to develop fundamentals in programming, problem solving,
                debugging/error handling, object-oriented programming, web design and development,
                and more.
            </p>
        </div>
        <div className='education'>
        <img src={ccsu} alt ='ccsu logo' height={100}></img>
        <p>Central Connecticut State University</p>
        <p>Bachelor degree in Criminology</p>
        <p>2 year athlete</p>
        <p>Student Football Coach</p>
        </div>
        </>
     );
}
 
export default Education;