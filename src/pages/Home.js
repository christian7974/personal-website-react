import {motion} from 'framer-motion';

import Navigation from "../components/Navigation";
import HomeSubTitle from '../components/typedComponents/HomeSubTitle';

import placeHolderPhoto from '../assets/images/placeholder_image1.avif';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <div className="mt-10 grid grid-cols-2 grid-rows-1">
        <div className="space-y-32 ml-6 pt-28">
          <motion.h1 
            initial={{ y: -40 }}
            animate={{y: 0}}
            transition={{type: 'spring', stiffness: 80, damping: 7, duration: 1}}
            className="text-home-header font-bold bg-gradient-to-r from-dim-gray from-20% to-platinum bg-clip-text text-transparent">
            Christian Tropeano
          </motion.h1>
          <div>
            <HomeSubTitle />
          </div>
          
        </div>
        <div className="space-y-8">
          <motion.img 
            src={placeHolderPhoto} 
            alt="" 
            className="w-auto h-13 mx-auto"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}  
            ></motion.img>
        </div>
      </div>
    </>
  );
}