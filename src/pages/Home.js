import Navigation from "../components/Navigation";
import HomeSubTitle from '../components/typedComponents/HomeSubTitle';

import placeHolderPhoto from '../assets/images/placeholder_image1.avif';

export default function HomePage() {
  return (
    <>
    <Navigation />
      <div className="mt-10 grid grid-cols-2 grid-rows-1">
        <div className="space-y-32 ml-6 pt-28">
          <h1 className="text-home-header font-bold bg-gradient-to-r from-dim-gray from-20% to-platinum bg-clip-text text-transparent">Christian Tropeano</h1>
          <div>
            <HomeSubTitle />
          </div>
          
        </div>
        <div className="space-y-8">
          <img src={placeHolderPhoto} alt="" className="w-auto h-13 mx-auto"></img>
        </div>
      </div>
    </>
  );
}