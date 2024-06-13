import { useState } from "react";
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

import Navigation from "../components/Navigation";
import IndividualProject from "../components/IndividualProject";
import FeaturedProject from "../components/FeaturedProject";

import { project_list } from "../assets/project_list";

const featuredProjectVariants = {
  hidden: { 
    opacity: 0, 
    y: -20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.4 } }
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

export default function ProjectPage() {
    const [currentProject, setCurrentProject] = useState(project_list[0]);
    const [animationKey, setAnimationKey] = useState(0);  

    function handleProjectClick(project) {
      if (project.title !== currentProject.title) {
        setCurrentProject(project);
        setAnimationKey(prevKey => prevKey + 1);
      }
    }

    return (
      <div className="bg-gradient-to-45">
        <Helmet>
          <title>Christian Tropeano | Projects</title>
          <meta name="description"
            content="The Projects page for my personal website."></meta>
          <meta name="keywords" content="Christian, Tropeano, christiantropeano"></meta>
          <meta name="author" content="Christian Tropeano"></meta>
        </Helmet>
        <Navigation />
        <div className="mx-auto w-max">
          <h1 className="reg-header">Projects</h1>
        </div>
        <div className="flex mx-4 space-x-4">
          <motion.div 
            id="project-container" 
            className="w-1/2 tabphone:w-full tablet:h-120 tablet:overflow-y-scroll phone:h-80 bg-project-scroller h-128 space-y-2 overflow-y-auto rounded-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            >
              {project_list.map((project, index) => {
                return (
                  <motion.div key={index} variants={itemVariants}>
                    <IndividualProject 
                    key={index}
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    onClickFunction={() => handleProjectClick(project)}
                   />
                </motion.div>
                );
              })}
          </motion.div>
          <motion.div
            key={animationKey}
            variants={featuredProjectVariants}
            initial="hidden"
            animate="visible"
            className="w-1/2 tabphone:hidden">
              <FeaturedProject 
                image={currentProject.image} 
                title={currentProject.title} 
                extendedDescription={currentProject.extendedDescription}
                link={currentProject.link}
                />
          </motion.div>
        </div>
      </div>
    );
  }