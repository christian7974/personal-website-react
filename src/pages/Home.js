import Navigation from "../components/Navigation";

import placeHolderPhoto from '../assets/images/placeholder_image1.avif';

export default function HomePage() {
return (
  <>
  <Navigation />
    <div className="mt-10 grid grid-cols-2 grid-rows-1">
      <div className="space-y-20 ml-6 pt-28">
        <h1 className="text-home-header font-bold">Christian Tropeano</h1>
        <p className="text-4xl">Aspiring Software Engineer</p>
      </div>
      <div className="space-y-8">
        <img src={placeHolderPhoto} alt="" className="w-auto h-13 mx-auto"></img>
      </div>
    </div>
  </>
);
}