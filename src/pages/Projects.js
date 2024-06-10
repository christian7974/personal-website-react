import Navigation from "../components/Navigation";
import IndividualProject from "../components/IndividualProject";
import { project_list } from "../assets/project_list";
import { useState } from "react";

export default function ProjectPage() {
    var [currentProject, setCurrentProject] = useState(project_list[0]);
    console.log(currentProject)
    return (
      <>
        <Navigation />
        <div className="mx-auto w-max">
          <h1 className="">Projects</h1>
        </div>
        <div className="flex">
          <div id="project-container" className="w-1/3 bg-fuchsia-500 h-96 space-y-2 overflow-y-auto">
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
          <div id="currentProject" className="mx-auto text-center">
            <img src={currentProject.image} alt="" className="h-48"></img>
            <p>{currentProject.title}</p>
            <p>{currentProject.description}</p>
          </div>
        </div>
      </>
    );
  }