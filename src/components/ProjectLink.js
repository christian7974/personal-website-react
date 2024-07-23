import { motion } from "framer-motion";

export default function ProjectLink({link, textOnLink}) {
    return (
        <motion.a 
            href={link}
            target="_blank" 
            rel="noreferrer" 
            className="mb-2 block desktop:hidden w-fit"
            initial={{color: '#2563eb'}}
            whileHover={{color: '#1e40af'}}>{textOnLink}
        </motion.a>
    )
}