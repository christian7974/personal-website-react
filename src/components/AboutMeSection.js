export default function AboutMeSection({title, description, image}) {
    return (
        <div className="text-center mr-3 ml-3 px-3 bg-red-300 space-y-1 h-fit">
            <h1 className="text-5xl">{title}</h1>
            <p className="leading-relaxed">{description}</p>
            {image && <img src={image} className="h-about-photo mx-auto my-auto" alt=""></img>}
        </div>
    )
}