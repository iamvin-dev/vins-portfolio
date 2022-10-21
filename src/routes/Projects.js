import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProjectsArr = [
    {
        name: 'Portfolio Website',
        link: 'https://github.com/iamvin-dev/vins-portfolio',
        description:
            'This is my portfolio website. It displays a lot of infos about me and my projects.',
        image: 'https://media.discordapp.net/attachments/1026285749173223478/1033018220988342342/unknown.png?width=1288&height=671',
        tags: ['JavaScript', 'React', 'Website', 'TailwindCSS', 'Vercel'],
    },
];

const filterArr = [
    'All',
    'JavaScript',
    'NextJS',
    'Website',
    'TailwindCSS',
    'Vercel',
    'Azure',
    'React',
    'API',
    'Node',
]





function Projects() {
    const [filter, setFilter] = React.useState('All');
    const [projects, setProjects] = React.useState(ProjectsArr);



    React.useEffect(() => {
        if (filter == 'All') {
            setProjects(ProjectsArr);
            return;
        }
        const filteredProjects = ProjectsArr.filter((project) => {
            return project.tags.includes(filter);
        });
        setProjects(filteredProjects);
    }, [filter, projects.length]);

    
    return (
        <div>
            <Navbar />
            <div className="flex ml-10 mb-10 mr-10 md:mr-40 md:ml-40 p-2 md:p-0 flex-col mt-10 md:mt-36 gap-5 md:gap-10 xl:flex-col">
                <motion.div initial={{ opacity: 0, y: 180 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", duration: 0.5 }} className="flex flex-col gap-2 max-w-xl ">
                    <h1 className="text-5xl font-semibold text-gray-100">My Projects</h1>
                    <motion.div className='pl-2'>
                        <p className="text-gray-400 text-lg">Here are some of my projects. I have made a lot of projects, but these are the ones that I am most proud of.</p>
                    </motion.div>

                </motion.div>

                <motion.div initial={{ opacity: 0, y: 180 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", duration: 0.5 }} className="flex flex-col gap-2 max-w-xl "> 
                    <h1 className="text-2xl font-semibold text-gray-100">Filter</h1>
                    <motion.div className='pl-2'>
                        <h2 className="text-gray-400 text-lg mb-2">Filtering: {filter}</h2>
                        <div className="flex flex-wrap gap-2">
                            {filterArr.map((filter) => (
                                <button onClick={(() => {setFilter(filter)})} className="custom-bg rounded-md p-2 text-gray-400 text-sm font-semibold cursor-pointer filter-bg">{filter}</button>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>               
                <motion.div initial={{ opacity: 0, y: 180 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", duration: 0.7 }} className="flex flex-col gap-2">

                    <div className="flex flex-col gap-2">

                        <div className="flex flex-wrap gap-5">
                            {projects.map((project) => (
                                <motion.div initial={{ opacity: 0, y: 180 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", duration: 0.7 }} key={project.name} className="flex white-shadow  p-7 max-w-lg rounded-lg flex-col gap-2 custom-bg">
                                    <div className='flex-grow'>
                                        <img src={project.image} alt="project image" className="rounded-lg mb-5 w-max h-32 md:h-64" />
                                        <a href={project.link} className="text-2xl pb-2 font-semibold text-gray-100">{project.name}</a>
                                        <p className="text-gray-400 text-lg pb-16">{project.description}</p>
                                    </div>

                                    <div className="flex flex-wrap  gap-2">
                                        {project.tags.map((tag) => (
                                            <div key={tag} className="flex p-2 items-center justify-center rounded-lg tag-bg ">
                                                <p className="text-gray-400 text-sm">{tag}</p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Projects;
