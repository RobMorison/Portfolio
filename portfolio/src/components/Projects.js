import React from 'react';
import './Projects.css';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';

const projectsData = [
    {
        name: 'E-Commerce Website',
        link: 'https://github.com/RobMorison/Capstone'
    },
    {
        name: 'Music Library Frontend',
        link: 'https://github.com/RobMorison/music_library_frontend'
    },
    {
        name: 'Music Library Backend',
        link: 'https://github.com/RobMorison/music_library_backend'
    },
    {
        name: 'Youtube Clone',
        link: 'https://github.com/RobMorison/Youtube_Clone'
    },
]

const Projects = () => {
    return ( 
        <section>
            <SectionHeader title="Projects"/>
            <div className="project-grid">
                {projectsData.map(project => {
                    return<ProjectCard name={project.name} link={project.link}/>;
                })}
            </div>
        </section>
     );
}
 
export default Projects;