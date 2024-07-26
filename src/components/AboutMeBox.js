import CurrentSong from "./spotifyComponents/CurrentSong"

export default function AboutMeSection({title, description, image}) {
    return (
        <div className={`text-center px-3 space-y-1 h-fit rounded-2xl bg-featured-project`}>
                <h1 className="text-5xl tablet:text-4xl">{title}</h1>
                {title === "Currently Listening To" ? 
                    ( <CurrentSong />) : 
                    (<p 
                        className="leading-relaxed tablet:text-[20px] tall:text-[20px] text-[18px]" 
                        dangerouslySetInnerHTML={{ __html: description }}>
                    </p>)}
                
        </div>
    )
}