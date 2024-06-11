export default function AboutMeSection({title, description, image, background}) {
    return (
        <div className={`text-center px-3 space-y-1 h-fit rounded-2xl ${background}`}>
            <h1 className="text-5xl">{title}</h1>
            <p className="leading-relaxed">{description}</p>
            {image && <img src={image} className="h-about-photo mx-auto my-auto" alt=""></img>}
        </div>
    )
}