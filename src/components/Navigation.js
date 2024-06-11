import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {motion} from 'framer-motion';
import "./navigation.css";

const variants = {
    notActive: {
        scale:1, 
        backgroundColor: 'green',
        padding: '2px 10px',
        "fontSize": "25px",
        },
    whileHover: {
        scale:1.1, 
        backgroundColor: 'red', },

    active: {
        scale:1, 
        backgroundColor: 'blue',
        padding: '2px 10px',
        "fontSize": "25px",
        },
}

export default function Navigation() { 
    const location = useLocation().pathname;
    
    return (
        <div className='flex items-center justify-center'>
            <div className="flex w-fit text-slate-50 rounded-md nav-link">
                <motion.div 
                    initial={location === "/" ? "active" : "notActive"} 
                    whileHover="whileHover"
                    variants={variants}
                    className="nav-link">
                    <NavLink to="/">Home</NavLink>
                </motion.div>
                <motion.div
                    initial={location === "/projects" ? "active" : "notActive"}  
                    whileHover="whileHover"
                    variants={variants}>
                    <NavLink to="/projects">Projects</NavLink>
                </motion.div>
                <motion.div
                    initial={location === "/about" ? "active" : "notActive"} 
                    whileHover="whileHover"
                    variants={variants}
                    className="nav-link">
                    <NavLink to="/about">About Me</NavLink>
                </motion.div>
            </div>
        </div>
    )
}