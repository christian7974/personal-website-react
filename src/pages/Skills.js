import Navigation from "../components/Navigation";
import PageTitle from "../components/PageTitle";
import SkillRadarChart from "../components/SkillRadarChart";

export default function SkillsPage() {
    return (
        <>
            <Navigation />
            <PageTitle titleContent="Skills" />
            <SkillRadarChart />
            {/* <div className="flex justify-around phone:flex-col phone:items-center">
                <div className={`${columnStyle} bg-red-300`}>
                    <h1 className={columnTitleStyles}>Novice</h1>
                </div>
                <div className={`${columnStyle} bg-yellow-300`}>
                    <h1 className={columnTitleStyles}>Proficient</h1>
                </div>
                <div className={`${columnStyle} bg-green-300`}>
                    <h1 className={columnTitleStyles}>Advanced</h1>
                </div>
            </div> */}
        </>
    )
}