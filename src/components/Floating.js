import { useState } from "react";
import { motion } from "framer-motion";

import { importantLinks } from "../assets/important_links_list";

const staggerAmount = 0.2;
const menuHeight = '40px';
// Links that are in the floating menu


const parentVariants = {
    initial: {
      height: menuHeight,
      
    },
    hover: {
      // When hovered, stagger children animations
      height: 'auto',
      transition: {
        staggerChildren: staggerAmount, // Adjust stagger timing as needed
        duration: (3 * staggerAmount),
      },
    },
    exit: {
    height: menuHeight,
    transition: {
      // Ensure the parent transition duration accommodates the staggered fade-out
      duration: 0.5 + (3 * staggerAmount), // Adjust based on the number of items and staggerAmount
      staggerChildren: staggerAmount,
      staggerDirection: -1,
    },
  },
  };
  
  const childVariants = {
    initial: { opacity: 0 },
    hover: { opacity: 1 },
    exit: { opacity: 0 },
  };

const listItemsStyle = "text-center text-xl text-gray-700 py-1 hover:text-gray-900 hover:font-bold";

// Will be hidden on smaller devices
export default function Floating() {
    const [hoverState, setHoverState] = useState("initial");

    return (
    <motion.div
        variants={parentVariants}
        initial="initial"
        animate={hoverState}
        onMouseEnter={() => setHoverState("hover")}
        onMouseLeave={() => setHoverState("exit")}
        className="bg-individual-project absolute left-7 top-7 rounded-md px-2 text-center tabphone:invisible"
    >
        <h2 className="text-2xl">Important Links</h2>
        <motion.ul>
            {importantLinks.map((item, index) => (
                <motion.li key={index} variants={childVariants} className="mb-2">
                    <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className={listItemsStyle}
                        >{item.linkTitle}</a>
                </motion.li>
            ))}
        </motion.ul>
    </motion.div>
    );
}