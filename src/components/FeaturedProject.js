export default function FeaturedProject({image, title, link, extendedDescription}) {
    return (
        <div className="mx-auto text-center items-center bg-featured-project px-4 pt-3 pb-4 rounded-2xl">
            <img src={image} alt="" className="h-60 mx-auto mb-2"></img>
            <p className="text-3xl font-semibold mb-2">{title}</p>
            <a href={link} target="_blank" rel="noreferrer" className="text-blue-600 mb-2 block">Link to Project</a>
            <p className="text-left text-project-desc">{extendedDescription}</p>
        </div>
    )
}