import ProjectLink from "./ProjectLink";

import "./IndividualProject.css";

export default function IndividualProject({image, title, description, link, onClickFunction}) { 
    const textOnLink = link !== "NA" ? "Link to Project" : "Link to Project Unavailable (Current Assignment)";
    return (
        <div className="flex w-in pt-3 pl-3 pb-3 hover:cursor-pointer individual-project" onClick={onClickFunction}>
            <img src={image} alt={description} className="h-32 rounded-lg phone:hidden"></img>
            <div className="ml-5">
                <div className="text-3xl font-semibold mb-2 tabphone:mb-1 phone:text-2xl">{title}</div>
                <p className="text-project-desc tablet:text-[1.5rem] leading-relaxed pr-1">
                    {description} 
                    {link !== "NA" ? (
                        <ProjectLink link={link} textOnLink={textOnLink} />
                        ) : (
                        <span 
                            className="text-blue-600 mb-2 block cursor-not-allowed desktop:hidden">{textOnLink}</span>
                    )}
                </p>
            </div>
        </div>)
}
