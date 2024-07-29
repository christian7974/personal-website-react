import { motion } from "framer-motion";
import { Helmet } from 'react-helmet';

import Navigation from "../components/Navigation";
import AboutMeSection from "../components/AboutMeBox";
import PageTitle from "../components/PageTitle";
import { about_me_list } from "../assets/about_me_list";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
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
      <div className="h-fit bg-gradient-to-45 desktop:overflow-hidden">
        <Helmet>
          <title>Christian Tropeano | About</title>
          <meta name="description"
            content="The About me page for my personal website."></meta>
          <meta name="keywords" content="Christian, Tropeano, christiantropeano"></meta>
          <meta name="author" content="Christian Tropeano"></meta>
        </Helmet>
        <Navigation />
        <PageTitle titleContent="Who Am I?" />
        <motion.div 
          className="grid grid-cols-3 grid-rows-2 gap-x-3 gap-y-4  mx-4 phone:grid-cols-1 phone:grid-rows-6 phone:gap-2"
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
                    background={background}
                  />
                  </motion.div>
              );
            })}
        </motion.div>
      </div>
    );
  }