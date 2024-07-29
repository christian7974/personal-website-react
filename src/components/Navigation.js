import IndividualLink from './IndividualLink';

export default function Navigation() {     
    return (
        <div className='flex space-x-3 bg-gray w-fit mx-auto px-1 py-1 rounded-2xl border-2 phone:space-x-2'>
            <IndividualLink linkText="Home" path="/" />
            <IndividualLink linkText="Projects" path="/projects" />
            <IndividualLink linkText="Skills" path="/skills" />
            <IndividualLink linkText="About Me" path="/about" />
        </div>
    )
}