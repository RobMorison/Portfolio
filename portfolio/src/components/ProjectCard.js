import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({name, link}) => {


    console.log(link)
    return ( 
        <article className='product-card'>
            <h3>{name}</h3>
            <a href={link}>Project link</a>
            
        </article>
     );
}
 
export default ProjectCard;