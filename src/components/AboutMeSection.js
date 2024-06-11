export default function AboutMeSection({title, description, image}) {
    return (
        <div className="text-center mr-5 ml-5 bg-red-300 space-y-5">
            <h1>{title}</h1>
            <p>{description}</p>
            {image && <img src={image} className="h-80 mx-auto my-auto" alt=""></img>}
        </div>
    )
}