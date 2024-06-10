import Navigation from "../components/Navigation";

import placeHolderPhoto from '../images/placeholder_image.avif';

export default function HomePage() {
return (
  <>
  <Navigation />
    <div className="mt-10 grid grid-cols-2 grid-rows-1 pl-3">
      <div className="bg-green-100 space-y-10">
        <h1>Christian Tropeano</h1>
        <p>Aspiring Software Engineer</p>
      </div>
      <div className="bg-indigo-600 space-y-8">
        <img src={placeHolderPhoto} alt="" className="w-auto h-13"></img>
        <p>Link to socials here</p> 
      </div>
    </div>
  </>
);
}