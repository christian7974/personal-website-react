import { useState } from "react";

import { motion } from "framer-motion";

const staggerAmount = 0.3;

const parentVariants = {
    initial: {
      height: '25px'
    },
    hover: {
      // When hovered, stagger children animations
      height: 'auto',
      transition: {
        staggerChildren: staggerAmount, // Adjust stagger timing as needed
      },
    },
    exit: {
    height: '25px',
    transition: {
      // Ensure the parent transition duration accommodates the staggered fade-out
      duration: 0.3 + (3 * staggerAmount), // Adjust based on the number of items and staggerAmount
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

const listItemsStyle = "text-center text-md text-gray-700 py-1";

export default function Floating() {
    const [hoverState, setHoverState] = useState("initial");

  return (
    <motion.div
      variants={parentVariants}
      initial="initial"
      animate={hoverState}
      onMouseEnter={() => setHoverState("hover")}
      onMouseLeave={() => setHoverState("exit")}
      className="bg-red-100 absolute left-6 top-6 rounded-sm px-2 text-center"
    >
      <h2 className="text-xl">Socials</h2>
      <motion.ul>
        <motion.li variants={childVariants} className={listItemsStyle}><a href="hi">Facebook</a></motion.li>
        <motion.li variants={childVariants} className={listItemsStyle}><a href="hi">Google</a></motion.li>
        <motion.li variants={childVariants} className={listItemsStyle}><a href="hi">Twitter</a></motion.li>
      </motion.ul>
    </motion.div>
  );
}