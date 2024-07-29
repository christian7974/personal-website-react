import ProjectLink from "./ProjectLink";

export default function FeaturedProject({image, title, link, extendedDescription}) {
    const textOnLink = link !== "NA" ? "Link to Project" : "Link to Project Unavailable (Current Assignment)";
    return (
        <div className="mx-auto text-center items-center bg-featured-project px-4 pt-3 pb-4 rounded-2xl">
            <img src={image} alt={title} className="h-60 mx-auto mb-2 rounded-lg"></img>
            <p className="text-3xl tall:text-4xl font-semibold mb-2">{title}</p>
            <div className="flex justify-center items-center">
            {/* If the link is not NA, then have the link, else render an unclickable link */}
                {link !== "NA" ? (
                    <ProjectLink link={link} textOnLink={textOnLink} />
                    ) : (
                    <span 
                        className="text-blue-600 mb-2 block cursor-not-allowed">{textOnLink}</span>
                )}
            </div>
            <p className="text-left text-project-desc tall:text-[20px]">{extendedDescription}</p>
        </div>
    )
}