import React from 'react';

const ProjectCard = ({name, link}) => {
    return ( 
        <article className='product-card'>
            <h3>{name}</h3>
            <p>{link}</p>
        </article>
     );
}
 
export default ProjectCard;