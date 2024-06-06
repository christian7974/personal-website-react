import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {motion} from 'framer-motion';
export default function Navigation() { 
    const location = useLocation().pathname;
    // const defaultLinkStyle = "text-black px-2 text-2xl";
    // const activeLinkStyle = "bg-red-100";
    // const notActiveLinkStyle = "bg-blue-200";
    // className={`${defaultLinkStyle} ${location === '/projects' ? activeLinkStyle : notActiveLinkStyle}`}
    const defaultLinkStyle = "";
    const activeLinkStyle = "";
    const notActiveLinkStyle = "";

    return (
        <div className='flex items-center justify-center mt-1'>
            <div className="flex w-fit text-slate-50 rounded-md px-3">
                <motion.div 
                    initial={{
                        scale:1, 
                        backgroundColor: 'green', }} 
                    whileHover={{scale:1.1, backgroundColor:'red'}}>
                    <NavLink to="/" >Home</NavLink>
                </motion.div>
                <motion.div>
                    <NavLink to="/projects">Projects</NavLink>
                </motion.div>
                <motion.div>
                    <NavLink to="/about">About Me</NavLink>
                </motion.div>
            </div>
        </div>
    )
}