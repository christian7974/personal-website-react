import IndividualLink from './IndividualLink';
// https://tegan.io/trends-pill-shaped-navigation/#:~:text=For%20sites%20that%20use%20rounded,is%20happening%20on%20the%20page.

export default function Navigation() {     
    return (
        <div className='flex space-x-3 bg-gray w-fit mx-auto px-1 py-1 rounded-2xl border-2'>
            <IndividualLink linkText="Home" path="/" />
            <IndividualLink linkText="Projects" path="/projects" />
            <IndividualLink linkText="Skills" path="/skills" />
            <IndividualLink linkText="About Me" path="/about" />
        </div>
    )
}