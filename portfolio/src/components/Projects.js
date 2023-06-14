import React from 'react';
import './Projects.css';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import capstone from '../assets/Capstone.JPG';
import musicbackend from '../assets/Music_backend.JPG';
import musicfrontend from '../assets/Music_frontend.JPG';
import youtube from '../assets/Youtube_clone.JPG';


const projectsData = [
    {
        name: 'E-Commerce Website',
        link: 'https://github.com/RobMorison/Capstone',
        preview: capstone
    },
    {
        name: 'Music Library Frontend',
        link: 'https://github.com/RobMorison/music_library_frontend',
        preview: musicfrontend
    },
    {
        name: 'Music Library Backend',
        link: 'https://github.com/RobMorison/music_library_backend',
        preview: musicbackend
    },
    {
        name: 'Youtube Clone',
        link: 'https://github.com/RobMorison/Youtube_Clone',
        preview: youtube
    },
]

const Projects = () => {
    return ( 
        <section id='projects'>
            <SectionHeader title="Projects"/>
            <div className='project-container'>
                <div className="project-grid">
                    {projectsData.map(project => {
                        return<ProjectCard name={project.name} link={project.link} preview={project.preview}/>;
                    })}
                </div>
            </div>
        </section>
     );
}
 
export default Projects;