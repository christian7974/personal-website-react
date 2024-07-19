import skills from "../assets/skills_array";

export default function ResponsiveSkillsList() {
    const titleStyles = "text-2xl text-[#0A0A0A] font-bold";
    const listStyle = "text-[#0A0A0A] text-xl";
    return (
    <div className="hidden w-[75%] phone:flex phone:flex-col mx-auto text-center gap-y-2">
        <div className="bg-green-500 rounded-md">
            <h1 className={titleStyles}>Advanced</h1>
            <ul className={listStyle}>
                {skills.map(skill => skill.value === 3 ? <li key={skill.name}>{skill.name}</li> : null)}
            </ul>
        </div>
        
        <div className="bg-yellow-300 rounded-md">
            <h1 className={titleStyles}>Intermediate</h1>
            <ul className={listStyle}>
                {skills.map(skill => skill.value === 2 ? <li key={skill.name}>{skill.name}</li> : null)}
            </ul>
        </div>
        
        
        <div className="bg-red-300 rounded-md">
            <h1 className={titleStyles}>Novice</h1>
            <ul className={listStyle}>
                {skills.map(skill => skill.value === 1 ? <li key={skill.name}>{skill.name}</li> : null)}
            </ul>
        </div>
    </div>)

}