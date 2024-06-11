import { NavLink } from 'react-router-dom';
import {  motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';


const variants = {
    notActive: {
        border: '2px solid transparent'
    },
    active: {
        backgroundColor: '#525252',
        border: '2px solid transparent'
    },
    whileHover: {
        border: '2px solid #fbfbfb'
    }
}

export default function IndividualLink({linkText, path}) {
    const location = useLocation().pathname;
    return (
        <NavLink to={path}>
            <motion.div 
                className='w-max text-link-color rounded-2xl px-4 text-link-size font-medium'
                style={{borderRadius: '1rem', opacity: 'revert'}}
                variants={variants}
                initial={location === path ? "active" : "notActive"}
                whileHover="whileHover"
                >
                    {linkText}
            </motion.div>
        </NavLink>
        
    )
}