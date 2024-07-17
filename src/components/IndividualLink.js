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
        border: '2px solid #fbfbfb',
    }
}

export default function IndividualLink({linkText, path}) {
    const location = useLocation().pathname;
    return (
        <NavLink to={path}>
            <motion.div 
                className='px-4 w-max text-link-color rounded-2xl py-1 text-link-size tall:text-[30px] font-medium tablet:px-2 tablet:text-[3em] phone:px-0 transition duration-300 ease-in-out cursor-pointer hover:bg-night hover:text-link-color hover:shadow-lg'
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