export default function AboutMeSection({title, description, image, background}) {
    return (
        <div className={`text-center px-3 space-y-1 h-fit rounded-2xl ${background}`}>
                <h1 className="text-5xl tablet:text-4xl">{title}</h1>
                <p 
                    className="leading-relaxed tablet:text-[20px] tall:text-[20px] text-[18px]" 
                    dangerouslySetInnerHTML={{ __html: description }}>
                </p>
                {image && 
                    (<>
                        <img src={image} className="h-about-photo mx-auto my-auto rounded-3xl" alt="View from the top of the Prudential Tower in Boston, MA"></img>
                        <p className="text-[18px] text-platinum">Picture from the top of the Prudential Tower in Boston that I took.</p>
                    </>)}
        </div>
    )
}