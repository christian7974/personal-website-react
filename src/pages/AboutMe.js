import { motion } from "framer-motion";

import Navigation from "../components/Navigation";
import AboutMeSection from "../components/AboutMeSection";
import { about_me_list } from "../assets/about_me_list";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1,
          transition: {
            duration: 0.4,
            ease: "easeInOut"
          }
   }
};

export default function AboutMePage() {
    return (
      <div className="h-fit">
        <Navigation />
        <div className="mx-auto w-max">
          <h1 className="reg-header">Who Am I?</h1>
        </div>
        <motion.div 
          className="grid grid-cols-3 grid-rows-2 gap-4 mx-4"
          variants={containerVariants}
          initial="hidden"
          animate="show"
          >
            {about_me_list.map((item, index) => {
              const isPhoto = index === 1;
              const background = !isPhoto ? "bg-featured-project" : "";

              return (
                <motion.div key={index} variants={itemVariants}>
                  <AboutMeSection
                    key={index}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    background={background}
                  />
                  </motion.div>
              );
            })}
        </motion.div>
      </div>
    );
  }