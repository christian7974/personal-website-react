export default function IndividualProject({image, title, description, onClickFunction}) { 
    return <div className="bg-red-200 flex w-in pt-3 pl-3 pb-3" onClick={onClickFunction}>
        <img src={image} alt="" className="h-32"></img>
        <div className="ml-5">
            <div className="text-3xl font-semibold mb-2">{title}</div>
            <p className="text-project-desc leading-relaxed pr-1">{description}</p>
        </div>
        
    </div>
}
