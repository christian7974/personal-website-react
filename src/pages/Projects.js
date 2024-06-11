import Navigation from "../components/Navigation";
import IndividualProject from "../components/IndividualProject";
import FeaturedProject from "../components/FeaturedProject";

import { project_list } from "../assets/project_list";
import { useState } from "react";

export default function ProjectPage() {
    var [currentProject, setCurrentProject] = useState(project_list[0]);
    console.log(currentProject)
    return (
      <>
        <Navigation />
        <div className="mx-auto w-max">
          <h1 className="reg-header">Projects</h1>
        </div>
        <div className="flex mx-4 space-x-4">
          <div id="project-container" className="w-1/2 bg-project-scroller h-128 space-y-2 overflow-y-auto">
            {project_list.map((project, index) => {
              return <IndividualProject 
                key={index}
                image={project.image}
                title={project.title}
                description={project.description}
                onClickFunction={() => setCurrentProject(project)}
              />
            })}
          </div>
          <FeaturedProject image={currentProject.image} title={currentProject.title} extendedDescription={currentProject.extendedDescription}/>
        </div>
      </>
    );
  }