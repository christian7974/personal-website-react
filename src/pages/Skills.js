import Navigation from "../components/Navigation";
import PageTitle from "../components/PageTitle";
import SkillRadarChart from "../components/SkillRadarChart";
import ResponsiveSkillsList from "../components/ResponsiveSkillsList";

export default function SkillsPage() {
    return (
        <>
            <Navigation />
            <PageTitle titleContent="Skills" />
            {/* Will only be shown on devices larger than phones */}
            <SkillRadarChart /> 
            
            <ResponsiveSkillsList />
        </>
    )
}