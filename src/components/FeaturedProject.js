export default function FeaturedProject({image, title, link, extendedDescription}) {
    const textOnLink = link !== "NA" ? "Link to Project" : "Link to Project (Current Assignment)";
    return (
        <div className="mx-auto text-center items-center bg-featured-project px-4 pt-3 pb-4 rounded-2xl">
            <img src={image} alt="" className="h-60 mx-auto mb-2"></img>
            <p className="text-3xl font-semibold mb-2">{title}</p>
            {link !== "NA" ? (
                <a 
                    href={link}
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-blue-600 mb-2 block">{textOnLink}</a>
                ) : (
                <span 
                    className="text-blue-600 mb-2 block cursor-not-allowed">{textOnLink}</span>
            )}
            <p className="text-left text-project-desc">{extendedDescription}</p>
        </div>
    )
}