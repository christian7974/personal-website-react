import { motion } from "framer-motion";

const parentVariants = {
    initial: {
        height: '25px'}, // Initial state of the parent, if needed
    hover: {
        height: 'auto',
        transition: {
            staggerChildren: 0.3, // Adjust this value to control the stagger effect
        },
    },
  };
  
  const childVariants = {
    initial: { 
        opacity: 0 
    },
        hover: { 
            opacity: 1,
            transition: { 
                duration: 0.5 
            }, // Control the fade-in speed
        },
  };

export default function Floating() {
    return (
        <motion.div
        variants={parentVariants}
        initial="initial"
        whileHover="hover" // Trigger the hover state on the parent div
        className="bg-red-100 absolute left-4 rounded-sm"
        >
            <h2>Follow Me</h2>
            <motion.ul>
                <motion.li variants={childVariants}>Facebook</motion.li>
                <motion.li variants={childVariants}>Instagram</motion.li>
                <motion.li variants={childVariants}>Twitter</motion.li>
            </motion.ul>
        </motion.div>
    )
}