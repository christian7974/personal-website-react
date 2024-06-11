export default function FeaturedProject({image, title, extendedDescription}) {
    return (
        <>
            <div className="mx-auto text-center items-center bg-featured-project w-1/2 px-4 pt-3">
            <img src={image} alt="" className="h-60 mx-auto mb-2"></img>
            <p className="text-3xl font-semibold mb-2">{title}</p>
            <p className="text-left text-project-desc">{extendedDescription}</p>
          </div>
        </>
    )
}