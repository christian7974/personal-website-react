import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {motion} from 'framer-motion';
import "./navigation.css";
// https://tegan.io/trends-pill-shaped-navigation/#:~:text=For%20sites%20that%20use%20rounded,is%20happening%20on%20the%20page.
const variants = {
    notActive: {
        scale:1, 
        backgroundColor: '#858585',
        padding: '2px 10px',
        "fontSize": "1.75rem",
        "color": "white"
        },

    whileHover: {
        backgroundColor: '#FFC65C',
        color: '#0A0A0A',
        },

    active: {
        scale:1, 
        color: '#0A0A0A',
        backgroundColor: '#AEEFA9',
        padding: '2px 10px',
        "fontSize": "1.75rem",
        },
}

export default function Navigation() { 
    const location = useLocation().pathname;
    
    return (
        <div className='flex items-center justify-center'>
            <div className="flex w-fit text-slate-50 nav-link">
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