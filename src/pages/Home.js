import {motion} from 'framer-motion';
import { Helmet } from 'react-helmet';

import Navigation from "../components/Navigation";
import HomeSubTitle from '../components/typedComponents/HomeSubTitle';

import placeHolderPhoto from '../assets/images/placeholder_image1.avif';

export default function HomePage() {
  return (
    <div className='phone:h-screen bg-gradient-to-45 phone:overflow-clip'>
      <Helmet>
        <title>Christian Tropeano | Home</title>
        <meta name="description"
          content="The Home page for my personal website."></meta>
        <meta name="keywords" content="Christian, Tropeano, christiantropeano"></meta>
        <meta name="author" content="Christian Tropeano"></meta>
      </Helmet>
      <Navigation />
      <div className="pl-5 mt-10 phone:mt-4 grid grid-cols-2 grid-rows-1 tabphone:grid-cols-1 tabphone:grid-rows-1">
        <div className="tabphone:space-y-0 space-y-32 pt-28 tabphone:pt-3 tabphone:mx-auto desktop:ml-6">
          <motion.h1 
            initial={{ y: -40 }}
            animate={{y: 0}}
            transition={{type: 'spring', stiffness: 80, damping: 7, duration: 1}}
            className="tabphone:text-center phone:text-[4rem] tablet:text-[8rem] text-home-header font-bold bg-gradient-to-r from-dim-gray from-20% to-platinum bg-clip-text text-transparent">
            Christian Tropeano
          </motion.h1>
          <div className='tabphone:hidden'>
            <HomeSubTitle />
          </div>
        </div>
        <div className="mx-auto tabphone:mt-10">
          <motion.img 
            src={placeHolderPhoto} 
            alt="" 
            className="w-auto h-auto tabphone:w-[90%] tabphone:h-[90%] rounded-3xl shadow-2xl mx-auto"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}  
            ></motion.img>
        </div>
      </div>
    </div>
  );
}